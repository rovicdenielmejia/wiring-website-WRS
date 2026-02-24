/**
 * WRS Authentication System
 * Role-based access: Admin | Recruiter | Employer | Candidate
 * Demo: localStorage-backed. Production: replace with secure API (JWT, OAuth, etc.)
 * GDPR + Philippines Data Privacy Act compliant patterns.
 */

const AUTH_KEYS = {
    SESSION: 'wrs_session',
    USERS: 'wrs_users',
    EMPLOYERS: 'wrs_employers',
    CANDIDATES: 'wrs_candidates',
};

const ROLES = { ADMIN: 'admin', RECRUITER: 'recruiter', EMPLOYER: 'employer', CANDIDATE: 'candidate' };

function initAuth() {
    if (!localStorage.getItem(AUTH_KEYS.USERS)) {
        localStorage.setItem(AUTH_KEYS.USERS, JSON.stringify([
            { email: 'admin@wrs.com', password: hashPassword('admin123'), role: ROLES.ADMIN }
        ]));
    }
}

function hashPassword(pass) {
    return btoa(unescape(encodeURIComponent(pass + '_wrs_salt')));
}

function verifyPassword(pass, hash) {
    return hashPassword(pass) === hash;
}

function getSession() {
    try {
        const s = localStorage.getItem(AUTH_KEYS.SESSION);
        return s ? JSON.parse(s) : null;
    } catch {
        return null;
    }
}

function setSession(user) {
    const session = {
        email: user.email,
        role: user.role,
        name: user.name || user.companyName || 'User',
        id: user.id,
        expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000
    };
    localStorage.setItem(AUTH_KEYS.SESSION, JSON.stringify(session));
    return session;
}

function clearSession() {
    localStorage.removeItem(AUTH_KEYS.SESSION);
}

function isAuthenticated() {
    const s = getSession();
    return s && s.expiresAt > Date.now();
}

function requireRole(allowedRoles, redirectUrl) {
    if (!Array.isArray(allowedRoles)) allowedRoles = [allowedRoles];
    const s = getSession();
    if (!s || s.expiresAt <= Date.now()) {
        if (redirectUrl) window.location.href = redirectUrl;
        return false;
    }
    if (!allowedRoles.includes(s.role)) {
        if (redirectUrl) window.location.href = redirectUrl;
        return false;
    }
    return s;
}

function login(email, password, role) {
    initAuth();
    const employers = JSON.parse(localStorage.getItem(AUTH_KEYS.EMPLOYERS) || '[]');
    const candidates = JSON.parse(localStorage.getItem(AUTH_KEYS.CANDIDATES) || '[]');
    const users = JSON.parse(localStorage.getItem(AUTH_KEYS.USERS) || '[]');

    let user = null;

    if (role === ROLES.EMPLOYER) {
        user = employers.find(e => e.email === email && verifyPassword(password, e.password));
        if (user) user.role = ROLES.EMPLOYER;
    } else if (role === ROLES.CANDIDATE) {
        user = candidates.find(c => c.email === email && verifyPassword(password, c.password));
        if (user) user.role = ROLES.CANDIDATE;
    } else {
        user = users.find(u => u.email === email && verifyPassword(password, u.password));
        if (user) user.role = user.role || ROLES.ADMIN;
    }

    if (user) {
        setSession(user);
        return { success: true, user };
    }
    return { success: false, error: 'Invalid email or password.' };
}

function registerEmployer(data) {
    const employers = JSON.parse(localStorage.getItem(AUTH_KEYS.EMPLOYERS) || '[]');
    if (employers.some(e => e.email === data.email)) {
        return { success: false, error: 'An account with this email already exists.' };
    }
    const id = 'emp_' + Date.now();
    const employer = {
        id,
        email: data.email,
        password: hashPassword(data.password),
        companyName: data.companyName,
        contactName: data.contactName,
        role: ROLES.EMPLOYER,
        verified: false
    };
    employers.push(employer);
    localStorage.setItem(AUTH_KEYS.EMPLOYERS, JSON.stringify(employers));
    setSession(employer);
    return { success: true, user: employer };
}

function registerCandidate(data) {
    const candidates = JSON.parse(localStorage.getItem(AUTH_KEYS.CANDIDATES) || '[]');
    if (candidates.some(c => c.email === data.email)) {
        return { success: false, error: 'An account with this email already exists.' };
    }
    const id = 'cand_' + Date.now();
    const candidate = {
        id,
        email: data.email,
        password: hashPassword(data.password),
        fullName: data.fullName,
        phone: data.phone || '',
        resumeUrl: data.resumeUrl || '',
        role: ROLES.CANDIDATE
    };
    candidates.push(candidate);
    localStorage.setItem(AUTH_KEYS.CANDIDATES, JSON.stringify(candidates));
    setSession(candidate);
    return { success: true, user: candidate };
}

function logout() {
    clearSession();
    window.location.href = '../home.html';
}
