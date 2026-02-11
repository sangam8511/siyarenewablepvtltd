// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
}

// Close mobile menu when link is clicked
const mobileLinks = document.querySelectorAll('.mobile-nav a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Navbar scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Active link highlighting
function updateActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

updateActiveLink();

// Calculator Form
const calculatorForm = document.querySelector('.calculator-form');
if (calculatorForm) {
    const steps = document.querySelectorAll('.step');
    let currentStep = 1;

    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const calculateBtn = document.querySelector('.calculate-btn');

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentStep--;
            showStep(currentStep);
        });
    });

    function showStep(step) {
        steps.forEach(s => s.style.display = 'none');
        document.querySelector(`.step[data-step="${step}"]`).style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function validateStep(step) {
        const inputs = document.querySelectorAll(`.step[data-step="${step}"] input, .step[data-step="${step}"] select`);
        let isValid = true;

        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value) {
                input.style.borderColor = '#ef4444';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });

        return isValid;
    }

    if (calculateBtn) {
        calculateBtn.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                calculateResults();
            }
        });
    }
}

function calculateResults() {
    const monthlyBill = parseFloat(document.querySelector('input[name="monthlyBill"]')?.value) || 0;
    const projectType = document.querySelector('select[name="projectType"]')?.value || 'industry';

    let systemSize = 5;
    if (projectType === 'industry' && monthlyBill > 0) {
        systemSize = Math.round((monthlyBill / 8 / 4 / 30) * 2) / 2;
        systemSize = Math.max(1, Math.min(systemSize, 500));
    }

    const annualGeneration = systemSize * 1500;
    const costPerKW = projectType === 'residence' ? 55000 : 35000;
    const estimatedCost = systemSize * costPerKW;
    const annualSavings = estimatedCost > 0 ? (monthlyBill * 12 * 0.85) : (systemSize * costPerKW * 0.15);
    const paybackPeriod = annualSavings > 0 ? (estimatedCost / annualSavings).toFixed(1) : 0;
    const co2Offset = (systemSize * 1500 * 1.2).toFixed(0);

    // Store results and show in results section
    const resultsHTML = `
        <div class="results-grid">
            <div class="result-item">
                <div class="result-label">System Size</div>
                <div class="result-value">${systemSize} kW</div>
            </div>
            <div class="result-item">
                <div class="result-label">Annual Generation</div>
                <div class="result-value">${annualGeneration.toLocaleString()} kWh</div>
            </div>
            <div class="result-item">
                <div class="result-label">Estimated Cost</div>
                <div class="result-value">₹${estimatedCost.toLocaleString()}</div>
            </div>
            <div class="result-item">
                <div class="result-label">Annual Savings</div>
                <div class="result-value">₹${annualSavings.toLocaleString()}</div>
            </div>
            <div class="result-item">
                <div class="result-label">Payback Period</div>
                <div class="result-value">${paybackPeriod} years</div>
            </div>
            <div class="result-item">
                <div class="result-label">CO₂ Offset/Year</div>
                <div class="result-value">${co2Offset} tons</div>
            </div>
        </div>
    `;

    const resultsSection = document.querySelector('.calculator-results');
    if (resultsSection) {
        resultsSection.innerHTML = resultsHTML;
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Contact Form
const contactForm = document.querySelector('form[data-form="contact"]');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Validate required fields
        if (!data.name || !data.email || !data.phone || !data.message) {
            alert('Please fill all required fields');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Validate phone
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(data.phone)) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }

        // Show success message
        alert('Thank you! We will get back to you within 24 hours.');
        this.reset();
    });
}

// Filter Projects
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        filterButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');

        projectCards.forEach(card => {
            const type = card.getAttribute('data-type');
            if (filter === 'all' || type === filter) {
                card.style.display = 'block';
                setTimeout(() => card.classList.add('fade-in-up'), 10);
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .project-card').forEach(el => {
    observer.observe(el);
});
