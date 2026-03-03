// Job Data — source of truth is the deployed defaultJobs (no localStorage); new posts appear site-wide after deploy.
// Default job postings
const defaultJobs = [
    {
        id: 1,
        title: 'Oracle HRMS Techno-Functional',
        location: 'KSA',
        experience: '8+ years',
        salaryRange: '',
        status: 'active',
        description: 'The Oracle HRMS Techno-Functional Consultant will implement, enhance, and support Oracle HRMS and Oracle Cloud Recruitment solutions. The role requires expertise in HR processes, system configuration, reporting, and technical customization.',
        responsibilities: [
            'Implement, support, and enhance Oracle HRMS modules (Core HR, Payroll, Recruitment, Performance Management)',
            'Manage end-to-end recruitment using Oracle Cloud Recruitment Platform',
            'Analyze HR processes and deliver effective system solutions',
            'Configure recruitment workflows, approvals, and notifications',
            'Develop and customize reports, dashboards, and HR analytics (OTBI, BI Publisher)',
            'Integrate Oracle Cloud Recruitment with Oracle EBS for centralized HR data',
            'Support performance evaluations, promotions, transfers, audits, and compliance reporting',
            'Provide functional and technical support, troubleshooting, training, and documentation',
            'Participate in system upgrades, data migration, and continuous improvements',
            'Develop Oracle APEX-based HR forms and modernize legacy Oracle Forms'
        ],
        requiredSkills: [
            'Strong functional knowledge of Oracle HRMS modules and Oracle Cloud Recruitment',
            'Advanced experience in PL/SQL, OTBI, BI Publisher, workflows, and HCM Extracts',
            'Strong understanding of Oracle Cloud and Oracle EBS systems',
            'Excellent analytical, problem-solving, communication, and multitasking skills'
        ],
        additionalInfo: 'Interested candidates, please DM me directly.',
        industry: 'Technology',
        jobType: 'Full-time'
    },
    {
        id: 2,
        title: 'Oracle EBS Finance Techno-Functional Analyst',
        location: 'Al Khobar, Saudi Arabia',
        experience: 'Minimum 8 Years',
        salaryRange: '',
        status: 'active',
        industry: 'Technology',
        jobType: 'Full-time',
        description: 'The Oracle EBS Finance Techno-Functional Analyst will be responsible for supporting, configuring, and enhancing Oracle EBS Financial modules while ensuring alignment with business and compliance requirements. The role involves both functional finance expertise and technical development capabilities.',
        responsibilities: [
            'Support and maintain Oracle EBS Financial modules (GL, AP, AR, FA, CM)',
            'Analyze finance business requirements and configure Oracle EBS financials',
            'Develop and support reports, interfaces, and customizations using PL/SQL',
            'Provide production support, issue resolution, and system integrations',
            'Support compliance-related integrations, including ZATCA e-invoicing',
            'Work with Oracle Forms or Oracle APEX-based custom applications'
        ],
        requiredSkills: [
            'Bachelor\'s degree in IT, finance, or related field',
            'Minimum 8 years of experience in Oracle EBS Financials (R12)',
            'Strong knowledge of accounting and financial processes',
            'Proficiency in PL/SQL development',
            'Experience in system integrations',
            'ZATCA compliance experience is an advantage'
        ],
        additionalInfo: ''
    },
    {
        id: 3,
        title: 'HR MANAGER',
        location: 'San Pablo, Laguna',
        experience: '3+ Years of Experience',
        salaryRange: '₱25,000–₱30,000',
        jobType: 'Full-time',
        industry: 'HR & Recruitment',
        status: 'active',
        description: 'The HR Manager will lead and manage the overall Human Resources function of the organization. This role is responsible for building structured HR systems, ensuring full compliance with Philippine labor laws, and supporting management in workforce planning and employee development.',
        responsibilities: [
            'Lead end-to-end recruitment process (job posting, screening, interviewing, and onboarding)',
            'Partner with department heads to identify manpower needs',
            'Develop hiring strategies to improve time-to-fill and candidate quality',
            'Ensure proper onboarding and probationary monitoring',
            'Oversee employee engagement and discipline management',
            'Handle employee concerns, investigations, and grievance processes',
            'Support performance evaluation and appraisal systems',
            'Ensure proper documentation of employee records',
            'Coordinate payroll processing and salary structuring',
            'Monitor employee benefits administration',
            'Ensure timely submission of mandatory contributions and reports (SSS, PhilHealth, Pag-IBIG)',
            'Ensure company compliance with Philippine Labor Code and DOLE regulations',
            'Prepare and maintain government-mandated documentation and reports',
            'Draft, update, and implement company policies and employee handbook/manual',
            'Develop and improve HR processes and documentation systems',
            'Maintain accurate and organized employee files',
            'Recommend improvements for HR operational efficiency'
        ],
        requiredSkills: [
            'Human Resources, Business Administration, Psychology, or any related field',
            'With at least 3+ years of progressive HR experience, preferably as an HR Generalist, HR Supervisor, or HR Manager',
            'Proven experience in end-to-end talent acquisition and employee management',
            'Strong knowledge of Philippine Labor Laws and statutory compliance',
            'Experienced in handling government-mandated reports and requirements (SSS, PhilHealth, Pag-IBIG, DOLE)',
            'Certification such as CHRA, CHRP, or CPRH is an advantage'
        ],
        additionalInfo: 'Why Join? • Opportunity to build and structure HR systems • Career growth in a leadership role • Supportive and growing organization'
    },
    {
        id: 4,
        title: 'Barista/Service Crew',
        location: 'Purok 4, Villa Victoria, Imus',
        experience: 'With/Without Experience',
        salaryRange: 'P300/day + Free Meals & Wifi',
        jobType: 'Full-time',
        industry: 'Food & Beverages',
        status: 'active',
        description: 'The barista is responsible for preparing beverages and snacks, delivering excellent customer service, and maintaining store cleanliness and organization. The role requires a friendly, energetic, and customer-focused individual who thrives in a fast-paced environment.',
        responsibilities: [
            'Prepare milktea, coffee, snacks, and other beverages according to standard recipes',
            'Take customer orders accurately and handle payments',
            'Maintain store cleanliness, sanitation, and organization',
            'Ensure proper inventory handling and stock arrangement',
            'Deliver excellent and friendly customer service',
            'Follow company procedures and food safety standards'
        ],
        requiredSkills: [
            'At least Senior High School graduate',
            'With or without experience (milktea/coffee shop experience is an advantage)',
            'Friendly, customer-oriented, and energetic',
            'Trustworthy and hardworking',
            'Willing to be trained',
            'Preferably residing within Imus or nearby',
            'Can work flexible hours, including weekends and holidays'
        ],
        additionalInfo: ''
    }
];

// Jobs use the deployed defaultJobs so new posts appear site-wide after deploy (no localStorage).
function initializeJobs() {
    // No-op: jobs are read from defaultJobs in the deployed script.
}

// Get all jobs (always from deployed defaultJobs so the whole site stays in sync after deploy)
function getJobs() {
    return JSON.parse(JSON.stringify(defaultJobs));
}

// Get active jobs only
function getActiveJobs() {
    return getJobs().filter(job => job.status === 'active');
}

// Get filtered jobs (search + location + industry + jobType)
function getFilteredJobs() {
    const search = (document.getElementById('jobs-search') && document.getElementById('jobs-search').value) ? document.getElementById('jobs-search').value.trim().toLowerCase() : '';
    const locationFilter = document.getElementById('jobs-filter-location') ? document.getElementById('jobs-filter-location').value : '';
    const industryFilter = document.getElementById('jobs-filter-industry') ? document.getElementById('jobs-filter-industry').value : '';
    const typeFilter = document.getElementById('jobs-filter-type') ? document.getElementById('jobs-filter-type').value : '';
    let jobs = getActiveJobs();
    if (search) {
        jobs = jobs.filter(job => (job.title + ' ' + (job.description || '')).toLowerCase().indexOf(search) !== -1);
    }
    if (locationFilter) jobs = jobs.filter(job => (job.location || '').indexOf(locationFilter) !== -1);
    if (industryFilter) jobs = jobs.filter(job => (job.industry || '') === industryFilter);
    if (typeFilter) jobs = jobs.filter(job => (job.jobType || '') === typeFilter);
    return jobs;
}

// Render a single job card HTML
function getJobCardHtml(job) {
    return `
        <div class="job-card">
            <div class="job-image-container">
                ${job.imageUrl ?
                    `<img src="${escapeHtml(job.imageUrl)}" alt="${escapeHtml(job.title)}" class="job-image" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'job-image-placeholder\\'><svg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' fill=\\'none\\' xmlns=\\'http://www.w3.org/2000/svg\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'#8B2635\\' opacity=\\'0.1\\'/><circle cx=\\'50\\' cy=\\'35\\' r=\\'12\\' fill=\\'#8B2635\\' opacity=\\'0.3\\'/><path d=\\'M25 75 Q25 60 50 60 Q75 60 75 75\\' stroke=\\'#8B2635\\' stroke-width=\\'8\\' stroke-linecap=\\'round\\' opacity=\\'0.3\\'/></svg><span class=\\'job-image-icon\\'>💼</span></div>';">` :
                    `<div class="job-image-placeholder">
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100" height="100" fill="#8B2635" opacity="0.1"/>
                            <circle cx="50" cy="35" r="12" fill="#8B2635" opacity="0.3"/>
                            <path d="M25 75 Q25 60 50 60 Q75 60 75 75" stroke="#8B2635" stroke-width="8" stroke-linecap="round" opacity="0.3"/>
                        </svg>
                        <span class="job-image-icon">💼</span>
                    </div>`
                }
            </div>
            <div class="job-card-content">
                <span class="job-status active">Active</span>
                <h3>${escapeHtml(job.title)}</h3>
                <div class="job-meta">
                    <span>📍 ${escapeHtml(job.location)}</span>
                    <span>💼 ${escapeHtml(job.experience)}</span>
                    ${job.salaryRange ? `<span>💰 ${escapeHtml(job.salaryRange)}</span>` : ''}
                </div>
                <div class="job-description">${escapeHtml(job.description)}</div>
                <div class="job-card-actions">
                    <button class="btn-primary" onclick="viewJobDetails(${job.id})">View Details</button>
                    <button type="button" class="btn-secondary" onclick="openApplyModal(${job.id})">Apply Now</button>
                </div>
            </div>
        </div>
    `;
}

// Setup jobs page: filters, search
function setupJobsPage() {
    const jobsContainer = document.getElementById('jobs-container');
    if (!jobsContainer) return;
    const activeJobs = getActiveJobs();
    const locationSelect = document.getElementById('jobs-filter-location');
    if (locationSelect && activeJobs.length) {
        const locations = [...new Set(activeJobs.map(j => j.location).filter(Boolean))].sort();
        locations.forEach(loc => {
            const opt = document.createElement('option');
            opt.value = loc;
            opt.textContent = loc;
            locationSelect.appendChild(opt);
        });
    }
    function renderFiltered() {
        const jobs = getFilteredJobs();
        if (jobs.length === 0) {
            jobsContainer.innerHTML = '<p class="jobs-empty">No jobs match your filters. Try adjusting search or filters.</p>';
            return;
        }
        jobsContainer.innerHTML = jobs.map(job => getJobCardHtml(job)).join('');
    }
    const searchInput = document.getElementById('jobs-search');
    [searchInput, document.getElementById('jobs-filter-location'), document.getElementById('jobs-filter-industry'), document.getElementById('jobs-filter-type')].forEach(el => {
        if (el) el.addEventListener('input', renderFiltered);
        if (el) el.addEventListener('change', renderFiltered);
    });
    renderFiltered();
}

// Render jobs (only on pages that have #jobs-container)
function renderJobs() {
    const jobsContainer = document.getElementById('jobs-container');
    if (!jobsContainer) return;
    setupJobsPage();
    return;
    const activeJobs = getActiveJobs();
    
    if (activeJobs.length === 0) {
        jobsContainer.innerHTML = '<p style="text-align: center; color: var(--text-light); grid-column: 1 / -1;">No job openings at this time. Please check back later.</p>';
        return;
    }
    
    jobsContainer.innerHTML = activeJobs.map(job => `
        <div class="job-card">
            <div class="job-image-container">
                ${job.imageUrl ? 
                    `<img src="${escapeHtml(job.imageUrl)}" alt="${escapeHtml(job.title)}" class="job-image" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'job-image-placeholder\\'><svg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' fill=\\'none\\' xmlns=\\'http://www.w3.org/2000/svg\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'#8B2635\\' opacity=\\'0.1\\'/><circle cx=\\'50\\' cy=\\'35\\' r=\\'12\\' fill=\\'#8B2635\\' opacity=\\'0.3\\'/><path d=\\'M25 75 Q25 60 50 60 Q75 60 75 75\\' stroke=\\'#8B2635\\' stroke-width=\\'8\\' stroke-linecap=\\'round\\' opacity=\\'0.3\\'/></svg><span class=\\'job-image-icon\\'>💼</span></div>';">` :
                    `<div class="job-image-placeholder">
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100" height="100" fill="#8B2635" opacity="0.1"/>
                            <circle cx="50" cy="35" r="12" fill="#8B2635" opacity="0.3"/>
                            <path d="M25 75 Q25 60 50 60 Q75 60 75 75" stroke="#8B2635" stroke-width="8" stroke-linecap="round" opacity="0.3"/>
                        </svg>
                        <span class="job-image-icon">💼</span>
                    </div>`
                }
            </div>
            <div class="job-card-content">
                <span class="job-status active">Active</span>
                <h3>${escapeHtml(job.title)}</h3>
                <div class="job-meta">
                    <span>📍 ${escapeHtml(job.location)}</span>
                    <span>💼 ${escapeHtml(job.experience)}</span>
                    ${job.salaryRange ? `<span>💰 ${escapeHtml(job.salaryRange)}</span>` : ''}
                </div>
                <div class="job-description">${escapeHtml(job.description)}</div>
                <div class="job-card-actions">
                    <button class="btn-primary" onclick="viewJobDetails(${job.id})">View Details</button>
                    <button type="button" class="btn-secondary" onclick="openApplyModal(${job.id})">Apply Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Populate position dropdown (only when native form exists; not used with Google Form embed)
function populatePositionDropdown() {
    const select = document.getElementById('position-interest');
    if (!select) return;
    const activeJobs = getActiveJobs();
    select.innerHTML = '<option value="">Select a position...</option>' +
        activeJobs.map(job => 
            `<option value="${job.id}">${escapeHtml(job.title)} - ${escapeHtml(job.location)}</option>`
        ).join('');
}

// View job details modal
function viewJobDetails(jobId) {
    const jobs = getJobs();
    const job = jobs.find(j => j.id === jobId);
    
    if (!job) return;
    
    const modal = document.getElementById('job-modal');
    const modalContent = document.getElementById('modal-job-details');
    
    modalContent.innerHTML = `
        <div class="modal-job-image">
            ${job.imageUrl ? 
                `<img src="${escapeHtml(job.imageUrl)}" alt="${escapeHtml(job.title)}" class="job-image-modal" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'job-image-placeholder\\'><svg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' fill=\\'none\\' xmlns=\\'http://www.w3.org/2000/svg\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'#8B2635\\' opacity=\\'0.1\\'/><circle cx=\\'50\\' cy=\\'35\\' r=\\'12\\' fill=\\'#8B2635\\' opacity=\\'0.3\\'/><path d=\\'M25 75 Q25 60 50 60 Q75 60 75 75\\' stroke=\\'#8B2635\\' stroke-width=\\'8\\' stroke-linecap=\\'round\\' opacity=\\'0.3\\'/></svg><span class=\\'job-image-icon\\'>💼</span></div>';">` :
                `<div class="job-image-placeholder">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" fill="#8B2635" opacity="0.1"/>
                        <circle cx="50" cy="35" r="12" fill="#8B2635" opacity="0.3"/>
                        <path d="M25 75 Q25 60 50 60 Q75 60 75 75" stroke="#8B2635" stroke-width="8" stroke-linecap="round" opacity="0.3"/>
                    </svg>
                    <span class="job-image-icon">💼</span>
                </div>`
            }
        </div>
        <h2>${escapeHtml(job.title)}</h2>
        <div class="job-meta">
            <span>📍 ${escapeHtml(job.location)}</span>
            <span>💼 ${escapeHtml(job.experience)}</span>
            ${job.salaryRange ? `<span>💰 Salary Range / Compensation: ${escapeHtml(job.salaryRange)}</span>` : ''}
            <span class="job-status ${job.status}">${job.status.charAt(0).toUpperCase() + job.status.slice(1)}</span>
        </div>
        <div class="job-details-content">
            <h3>Job Description</h3>
            <p>${escapeHtml(job.description)}</p>
            
            <h3>Key Responsibilities</h3>
            <ul>
                ${job.responsibilities.map(resp => `<li>${escapeHtml(resp)}</li>`).join('')}
            </ul>
            
            <h3>Required Skills</h3>
            <ul>
                ${job.requiredSkills.map(skill => `<li>${escapeHtml(skill)}</li>`).join('')}
            </ul>
        </div>
        <div style="margin-top: 2rem; text-align: center;">
            <button type="button" class="btn-primary" onclick="closeModal(); openApplyModal(${job.id});" style="display: inline-block; cursor: pointer; border: none;">Apply Now</button>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('job-modal');
    if (modal) modal.style.display = 'none';
}

// Consultation modal (injected on all pages; opened by universal CTA)
function openConsultationModal() {
    const modal = document.getElementById('consultation-modal');
    if (modal) modal.style.display = 'block';
}

function closeConsultationModal() {
    const modal = document.getElementById('consultation-modal');
    if (modal) modal.style.display = 'none';
}

function injectConsultationModal() {
    if (document.getElementById('consultation-modal')) return;
    const path = window.location.pathname || '';
    const base = (path.indexOf('solutions') !== -1 || path.indexOf('services') !== -1 || path.indexOf('legal') !== -1) ? '../' : '';
    const modal = document.createElement('div');
    modal.id = 'consultation-modal';
    modal.className = 'modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
        <div class="modal-content modal-content--consultation">
            <button type="button" class="modal-close consultation-modal-close" aria-label="Close modal">&times;</button>
            <h2 class="consultation-modal-title">Book a Free Consultation</h2>
            <p class="consultation-modal-subtitle">Schedule a call or discuss your workforce needs. No obligation.</p>
            <form id="consultation-modal-form" class="consultation-form consultation-form--modal" data-formspree-id="mbdavdzr">
                <input type="hidden" name="_subject" id="consult-modal-subject" value="Consultation request">
                <div class="form-group">
                    <label for="consult-modal-name">Full Name *</label>
                    <input type="text" id="consult-modal-name" name="name" required placeholder="Your name">
                </div>
                <div class="form-group">
                    <label for="consult-modal-email">Email *</label>
                    <input type="email" id="consult-modal-email" name="email" required placeholder="you@company.com">
                </div>
                <div class="form-group">
                    <label for="consult-modal-phone">Phone</label>
                    <input type="tel" id="consult-modal-phone" name="phone" placeholder="+63 9XX XXX XXXX">
                </div>
                <div class="form-group">
                    <label for="consult-modal-company">Company (if employer)</label>
                    <input type="text" id="consult-modal-company" name="company" placeholder="Company name">
                </div>
                <div class="form-group">
                    <label for="consult-modal-type">I am a</label>
                    <select id="consult-modal-type" name="type">
                        <option value="employer">Employer / HR Leader</option>
                        <option value="job-seeker">Job Seeker</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="consult-modal-message">Message</label>
                    <textarea id="consult-modal-message" name="message" rows="3" placeholder="Brief description of your needs..."></textarea>
                </div>
                <p id="consultation-modal-status" class="consultation-modal-status" aria-live="polite"></p>
                <button type="submit" class="cta-button" id="consultation-modal-submit-btn" style="width: 100%;">Submit Request</button>
            </form>
            <p class="consultation-modal-footer">Prefer email? <a href="mailto:wrs.recruitment.hr@gmail.com">Contact us directly</a>.</p>
        </div>
    `;
    document.body.appendChild(modal);
    const form = document.getElementById('consultation-modal-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var formId = form.getAttribute('data-formspree-id');
            var statusEl = document.getElementById('consultation-modal-status');
            var submitBtn = document.getElementById('consultation-modal-submit-btn');
            var nameEl = document.getElementById('consult-modal-name');
            if (nameEl) document.getElementById('consult-modal-subject').value = 'Consultation request from ' + nameEl.value;
            var formData = new FormData(form);
            submitBtn.disabled = true;
            if (statusEl) { statusEl.textContent = 'Sending…'; statusEl.className = 'consultation-modal-status'; }
            fetch('https://formspree.io/f/' + formId, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(function(response) {
                if (response.ok) {
                    if (statusEl) { statusEl.textContent = 'Thank you. We\'ll be in touch soon.'; statusEl.className = 'consultation-modal-status success'; }
                    form.reset();
                    setTimeout(function() {
                        closeConsultationModal();
                        window.location.href = base + 'thank-you.html?type=consultation';
                    }, 800);
                } else {
                    return response.json().then(function(data) { throw data; });
                }
            })
            .catch(function(err) {
                if (statusEl) { statusEl.textContent = err.error || 'Something went wrong. Please try again or contact us directly.'; statusEl.className = 'consultation-modal-status error'; }
                submitBtn.disabled = false;
            });
        });
    }
}

// Job ID → JotForm application URL (Apply Now opens the form for the selected job)
var applyFormUrls = {
    1: 'https://form.jotform.com/260543427010041',   // Oracle HRMS Techno-Functional
    2: 'https://form.jotform.com/260605022887457',   // Oracle EBS Finance Techno-Functional Analyst
    3: 'https://form.jotform.com/260604609619460',   // HR MANAGER
    4: 'https://form.jotform.com/260604773110448'    // Barista/Service Crew
};

// Open apply form modal (Jobs page only) — loads job-specific JotForm
function openApplyModal(jobId) {
    try { sessionStorage.setItem('wrs_selected_job_id', String(jobId)); } catch (e) {}
    const modal = document.getElementById('apply-modal');
    const iframe = document.getElementById('apply-form-iframe');
    const titleEl = document.getElementById('apply-modal-title');
    if (iframe) {
        var url = applyFormUrls[Number(jobId)] || applyFormUrls[1];
        iframe.src = url;
    }
    if (titleEl) {
        var jobs = getJobs();
        var job = jobs.find(function(j) { return j.id === Number(jobId); });
        titleEl.textContent = job ? 'Apply: ' + job.title : 'Apply Now';
    }
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeApplyModal() {
    const modal = document.getElementById('apply-modal');
    if (modal) modal.style.display = 'none';
}

function openSubmitResumeModal() {
    const modal = document.getElementById('submit-resume-modal');
    if (modal) modal.style.display = 'block';
}

function closeSubmitResumeModal() {
    const modal = document.getElementById('submit-resume-modal');
    if (modal) modal.style.display = 'none';
}

// Select job for application (used when apply modal exists on Jobs page)
function selectJobForApplication(jobId) {
    openApplyModal(jobId);
}

// File upload handling (only on pages that have the resume upload field, e.g. Jobs apply form)
function setupFileUpload() {
    const fileInput = document.getElementById('resume-upload');
    if (!fileInput || !fileInput.parentElement) return;
    const fileName = fileInput.parentElement.querySelector('.file-name');
    if (!fileName) return;

    fileInput.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            const maxSize = 5 * 1024 * 1024; // 5MB
            
            if (file.size > maxSize) {
                alert('File size must be less than 5MB');
                e.target.value = '';
                fileName.textContent = '';
                return;
            }
            
            fileName.textContent = `Selected: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
        } else {
            fileName.textContent = '';
        }
    });
}

// Inquiries/applications are sent to Netlify and forwarded to wrs.recruitment.hr@gmail.com
// Configure in Netlify: Site → Forms → Form notifications → Email → wrs.recruitment.hr@gmail.com

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('.submit-button');
    const buttonText = submitButton.querySelector('.button-text');
    const buttonLoader = submitButton.querySelector('.button-loader');
    const formMessage = document.getElementById('form-message');
    
    // Honeypot check
    const honeypot = form.querySelector('.honeypot');
    if (honeypot && honeypot.value) {
        formMessage.textContent = 'Spam detected. Submission blocked.';
        formMessage.className = 'form-message error';
        return;
    }
    
    // Get form data
    const formData = new FormData(form);
    const applicationData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        position: formData.get('position'),
        experience: formData.get('experience'),
        coverLetter: formData.get('coverLetter'),
        resume: formData.get('resume'),
        timestamp: new Date().toISOString()
    };
    
    // Validation
    if (!applicationData.name || !applicationData.email || !applicationData.phone || !applicationData.position) {
        formMessage.textContent = 'Please fill in all required fields.';
        formMessage.className = 'form-message error';
        return;
    }
    
    // Get job title for thank-you page
    const jobs = getJobs();
    const selectedJob = jobs.find(j => j.id.toString() === applicationData.position);
    const jobTitle = selectedJob ? selectedJob.title : 'Unknown Position';
    
    // Disable form
    submitButton.disabled = true;
    if (buttonText) buttonText.style.display = 'none';
    if (buttonLoader) buttonLoader.style.display = 'inline-block';
    formMessage.textContent = '';
    
    // Required by Netlify Forms when submitting via fetch
    formData.append('form-name', 'application');
    
    // Submit to Netlify Forms (inquiries emailed to wrs.recruitment.hr@gmail.com via Form notifications)
    // Use FormData as-is so file upload (resume) is sent as multipart/form-data
    fetch('/', {
        method: 'POST',
        body: formData
    })
        .then(() => {
            window.location.href = `thank-you.html?name=${encodeURIComponent(applicationData.name)}&position=${encodeURIComponent(jobTitle)}`;
        })
        .catch(error => {
            console.error('Error submitting application:', error);
            formMessage.textContent = 'Something went wrong. Please try again or email us at wrs.recruitment.hr@gmail.com';
            formMessage.className = 'form-message error';
            submitButton.disabled = false;
            if (buttonText) buttonText.style.display = 'inline-block';
            if (buttonLoader) buttonLoader.style.display = 'none';
        });
}

// Convert file to base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Save application to storage
async function saveApplication(applicationData, jobTitle, resumeFile) {
    // Save to localStorage (for demo)
    const applications = JSON.parse(localStorage.getItem('applications') || '[]');
    
    let resumeData = null;
    let resumeFileName = 'No file';
    let resumeFileType = null;
    
    if (resumeFile) {
        resumeFileName = resumeFile.name;
        resumeFileType = resumeFile.type;
        try {
            resumeData = await fileToBase64(resumeFile);
        } catch (error) {
            console.error('Error converting resume to base64:', error);
        }
    }
    
    applications.push({
        ...applicationData,
        jobTitle: jobTitle,
        resumeFileName: resumeFileName,
        resumeFileType: resumeFileType,
        resumeData: resumeData
    });
    localStorage.setItem('applications', JSON.stringify(applications));
    
    return Promise.resolve();
}

// Send email notification to HR team
async function sendEmailNotification(applicationData, jobTitle) {
    // EmailJS configuration (replace with your actual EmailJS credentials)
    // You'll need to set up EmailJS at https://www.emailjs.com/
    
    const emailConfig = {
        serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        publicKey: 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    };
    
    // For demo purposes, we'll just log it
    // In production, uncomment and configure EmailJS:
    
    /*
    if (typeof emailjs !== 'undefined' && emailConfig.serviceId !== 'YOUR_SERVICE_ID') {
        try {
            await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateId,
                {
                    to_name: 'HR Team',
                    applicant_name: applicationData.name,
                    applicant_email: applicationData.email,
                    applicant_phone: applicationData.phone,
                    position: jobTitle,
                    experience: applicationData.experience,
                    cover_letter: applicationData.coverLetter,
                    timestamp: applicationData.timestamp,
                    reply_to: applicationData.email
                },
                emailConfig.publicKey
            );
        } catch (error) {
            console.error('Error sending email notification:', error);
            throw error;
        }
    } else {
        console.log('Email notification (demo):', {
            to: 'hr@workforcerecruitment.com',
            subject: `New Application: ${jobTitle}`,
            body: `New application received for ${jobTitle} from ${applicationData.name}`
        });
    }
    */
    
    console.log('Email notification (demo):', {
        to: 'hr@workforcerecruitment.com',
        subject: `New Application: ${jobTitle}`,
        body: `New application received for ${jobTitle} from ${applicationData.name}`
    });
    
    return Promise.resolve();
}

// Send auto-reply to applicant
async function sendAutoReply(applicationData, jobTitle) {
    // EmailJS configuration for auto-reply
    // Similar to sendEmailNotification, but with auto-reply template
    
    console.log('Auto-reply email (demo):', {
        to: applicationData.email,
        subject: `Thank you for your application - ${jobTitle}`,
        body: `Dear ${applicationData.name},\n\nThank you for your interest in the ${jobTitle} position...`
    });
    
    return Promise.resolve();
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Mobile navigation toggle
function setupMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isOpen);
        });
    }
    
    // Mega menu: on mobile, click toggles open instead of navigating
    document.querySelectorAll('.mega-wrapper > .nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth < 900) {
                e.preventDefault();
                const wrapper = this.parentElement;
                wrapper.classList.toggle('open');
                // Scroll expanded dropdown into view so all links are visible
                if (wrapper.classList.contains('open')) {
                    requestAnimationFrame(() => {
                        const menu = wrapper.querySelector('.mega-menu');
                        if (menu) menu.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                    });
                }
            }
        });
    });

    // Services dropdown: on mobile, click toggles open (folder behavior)
    document.querySelectorAll('.nav-item-has-dropdown > a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth < 900) {
                e.preventDefault();
                this.parentElement.classList.toggle('open');
            }
        });
    });
    
    // Close menu when clicking on a link (but not dropdown triggers - those toggle, not close)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // On mobile: don't close when clicking Solutions/About - they toggle dropdowns
            const parent = this.parentElement;
            if (window.innerWidth < 900 && (parent?.classList.contains('mega-wrapper') || parent?.classList.contains('nav-item-has-dropdown'))) {
                return;
            }
            navMenu.classList.remove('active');
            document.querySelectorAll('.mega-wrapper').forEach(w => w.classList.remove('open'));
            document.querySelectorAll('.nav-item-has-dropdown').forEach(w => w.classList.remove('open'));
            if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// Back to top button visibility
function setupBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    if (!backToTop) return;
    
    function onScroll() {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// Navbar scroll state (shadow when scrolled)
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    function onScroll() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// Section reveal on scroll (Intersection Observer)
function setupSectionReveal() {
    const sections = document.querySelectorAll('section');
    if (!sections.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.1 });
    
    sections.forEach(section => section && observer.observe(section));
}

// Blog article animations (content, TOC, related, newsletter)
function setupBlogAnimations() {
    if (!document.body.classList.contains('page-blog-post')) return;
    
    const animatedEls = document.querySelectorAll('.blog-article-content, .blog-toc, .blog-article-related, .blog-newsletter');
    if (!animatedEls.length) return;
    
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -20% 0px', threshold: 0.2 });
    
    animatedEls.forEach(el => observer.observe(el));
}

// Close modals: use event delegation so close buttons and overlay clicks always work
function setupModalClose() {
    document.addEventListener('click', function(e) {
        // Click on a close button (any .modal-close)
        const closeBtn = e.target.closest && e.target.closest('.modal-close');
        if (closeBtn) {
            const modal = closeBtn.closest && closeBtn.closest('.modal');
            if (modal) {
                if (modal.id === 'job-modal') closeModal();
                else if (modal.id === 'apply-modal') closeApplyModal();
                else if (modal.id === 'consultation-modal') closeConsultationModal();
                else if (modal.id === 'submit-resume-modal') closeSubmitResumeModal();
            }
            return;
        }
        // Click on modal overlay (backdrop)
        if (e.target.id === 'job-modal' || e.target.id === 'apply-modal' || e.target.id === 'consultation-modal' || e.target.id === 'submit-resume-modal') {
            if (e.target.id === 'job-modal') closeModal();
            else if (e.target.id === 'apply-modal') closeApplyModal();
            else if (e.target.id === 'consultation-modal') closeConsultationModal();
            else if (e.target.id === 'submit-resume-modal') closeSubmitResumeModal();
        }
    });
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 80; // Navbar height
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Delegation: open consultation or submit-resume modal when CTA is clicked
function setupConsultationModalCTA() {
    injectConsultationModal();
    document.addEventListener('click', function(e) {
        const link = e.target.closest && e.target.closest('a[data-open-modal]');
        if (!link) return;
        const modalType = link.getAttribute('data-open-modal');
        if (modalType === 'consultation') {
            e.preventDefault();
            openConsultationModal();
        } else if (modalType === 'submit-resume') {
            e.preventDefault();
            openSubmitResumeModal();
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeJobs();
    renderJobs();
    populatePositionDropdown();
    setupFileUpload();
    setupMobileNav();
    setupModalClose();
    setupConsultationModalCTA();
    setupSmoothScroll();
    setupBackToTop();
    setupNavbarScroll();
    setupSectionReveal();
    setupBlogAnimations();
    
    // Form submission
    const applicationForm = document.getElementById('application-form');
    if (applicationForm) {
        applicationForm.addEventListener('submit', handleFormSubmit);
    }
});

// Make functions available globally for onclick handlers
window.viewJobDetails = viewJobDetails;
window.selectJobForApplication = selectJobForApplication;
window.openApplyModal = openApplyModal;
window.closeApplyModal = closeApplyModal;
window.closeModal = closeModal;
window.openConsultationModal = openConsultationModal;
window.closeConsultationModal = closeConsultationModal;
