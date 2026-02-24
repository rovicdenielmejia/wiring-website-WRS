/**
 * WRS Jobs – employer job postings. Uses API when available, falls back to localStorage.
 */
const JOBS_KEY = 'wrs_jobs';

function apiBase() {
  if (typeof window === 'undefined') return '';
  return window.location.origin || '';
}

async function getJobs(employerId) {
  const base = apiBase();
  if (base && employerId) {
    try {
      const res = await fetch(`${base}/api/jobs?employer_id=${encodeURIComponent(employerId)}`);
      const data = await res.json();
      if (data.success && Array.isArray(data.jobs)) return data.jobs;
    } catch (_) {}
  }
  const raw = localStorage.getItem(JOBS_KEY);
  const all = raw ? JSON.parse(raw) : [];
  return all.filter(function (j) {
    return j.employer_id === employerId;
  });
}

async function createJob(employerId, data) {
  const base = apiBase();
  if (base && employerId) {
    try {
      const res = await fetch(`${base}/api/jobs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          employer_id: employerId,
          title: data.title,
          location: data.location || '',
          description: data.description || '',
        }),
      });
      const result = await res.json();
      if (result.success && result.job) return { success: true, job: result.job };
      return { success: false, error: result.error || 'Failed to create job' };
    } catch (_) {}
  }
  const id = 'job_' + Date.now();
  const job = {
    id,
    employer_id: employerId,
    title: data.title,
    location: data.location || '',
    description: data.description || '',
    status: 'open',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  const raw = localStorage.getItem(JOBS_KEY);
  const all = raw ? JSON.parse(raw) : [];
  all.push(job);
  localStorage.setItem(JOBS_KEY, JSON.stringify(all));
  return { success: true, job };
}

async function updateJob(employerId, jobId, data) {
  const base = apiBase();
  if (base && employerId && jobId) {
    try {
      const res = await fetch(`${base}/api/jobs`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: jobId,
          employer_id: employerId,
          title: data.title,
          location: data.location,
          description: data.description,
          status: data.status,
        }),
      });
      const result = await res.json();
      if (result.success && result.job) return { success: true, job: result.job };
      return { success: false, error: result.error || 'Failed to update job' };
    } catch (_) {}
  }
  const raw = localStorage.getItem(JOBS_KEY);
  const all = raw ? JSON.parse(raw) : [];
  const idx = all.findIndex(function (j) {
    return j.id === jobId && j.employer_id === employerId;
  });
  if (idx === -1) return { success: false, error: 'Job not found' };
  if (data.title !== undefined) all[idx].title = data.title;
  if (data.location !== undefined) all[idx].location = data.location;
  if (data.description !== undefined) all[idx].description = data.description;
  if (data.status !== undefined) all[idx].status = data.status;
  all[idx].updated_at = new Date().toISOString();
  localStorage.setItem(JOBS_KEY, JSON.stringify(all));
  return { success: true, job: all[idx] };
}

async function getActiveJobs() {
  if (typeof getSession === 'undefined') return [];
  const s = getSession();
  if (!s || s.role !== 'employer') return [];
  const list = await getJobs(s.id);
  return list.filter(function (j) {
    return j.status === 'open';
  });
}
