import { getDb } from '../lib/db.js';
import { randomId } from '../lib/auth.js';

export const config = { runtime: 'nodejs' };

export default async function handler(req, res) {
  const method = req.method;
  if (!['GET', 'POST', 'PATCH'].includes(method)) {
    res.setHeader('Allow', 'GET, POST, PATCH');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const sql = getDb();

    if (method === 'GET') {
      const employerId = (req.query && req.query.employer_id) || '';
      if (!employerId) {
        return res.status(400).json({ success: false, error: 'employer_id required' });
      }
      const rows = await sql`
        SELECT id, employer_id, title, location, description, status, created_at, updated_at
        FROM jobs WHERE employer_id = ${employerId} ORDER BY created_at DESC
      `;
      const jobs = rows.map((r) => ({
        id: r.id,
        employer_id: r.employer_id,
        title: r.title,
        location: r.location,
        description: r.description || '',
        status: r.status,
        created_at: r.created_at,
        updated_at: r.updated_at,
      }));
      return res.status(200).json({ success: true, jobs });
    }

    if (method === 'POST') {
      const { employer_id, title, location, description } = req.body || {};
      if (!employer_id || !title) {
        return res.status(400).json({ success: false, error: 'employer_id and title required' });
      }
      const id = randomId('job');
      await sql`
        INSERT INTO jobs (id, employer_id, title, location, description)
        VALUES (${id}, ${employer_id}, ${String(title).trim()}, ${String(location || '').trim()}, ${String(description || '').trim()})
      `;
      const [row] = await sql`SELECT id, employer_id, title, location, description, status, created_at FROM jobs WHERE id = ${id}`;
      return res.status(201).json({
        success: true,
        job: {
          id: row.id,
          employer_id: row.employer_id,
          title: row.title,
          location: row.location,
          description: row.description || '',
          status: row.status,
          created_at: row.created_at,
        },
      });
    }

    if (method === 'PATCH') {
      const { id, employer_id, title, location, description, status } = req.body || {};
      if (!id || !employer_id) {
        return res.status(400).json({ success: false, error: 'id and employer_id required' });
      }
      let updated = false;
      if (title !== undefined) {
        await sql`UPDATE jobs SET title = ${String(title).trim()} WHERE id = ${id} AND employer_id = ${employer_id}`;
        updated = true;
      }
      if (location !== undefined) {
        await sql`UPDATE jobs SET location = ${String(location).trim()} WHERE id = ${id} AND employer_id = ${employer_id}`;
        updated = true;
      }
      if (description !== undefined) {
        await sql`UPDATE jobs SET description = ${String(description).trim()} WHERE id = ${id} AND employer_id = ${employer_id}`;
        updated = true;
      }
      if (status !== undefined && ['open', 'closed'].includes(status)) {
        await sql`UPDATE jobs SET status = ${status} WHERE id = ${id} AND employer_id = ${employer_id}`;
        updated = true;
      }
      if (!updated) {
        return res.status(400).json({ success: false, error: 'No fields to update' });
      }
      const [row] = await sql`
        SELECT id, employer_id, title, location, description, status, created_at, updated_at
        FROM jobs WHERE id = ${id} AND employer_id = ${employer_id}
      `;
      if (!row) {
        return res.status(404).json({ success: false, error: 'Job not found or not yours' });
      }
      return res.status(200).json({
        success: true,
        job: {
          id: row.id,
          employer_id: row.employer_id,
          title: row.title,
          location: row.location,
          description: row.description || '',
          status: row.status,
          created_at: row.created_at,
          updated_at: row.updated_at,
        },
      });
    }
  } catch (err) {
    console.error('Jobs API error:', err);
    return res.status(500).json({ success: false, error: 'Request failed' });
  }
}
