document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }, { passive: true });

    // Language Toggle Logic
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = 'EN';

    const translations = {
        'SI': {
            'nav-about': 'අපි ගැන',
            'nav-services': 'සේවාවන්',
            'nav-leadership': 'නායකත්වය',
            'nav-rates': 'ගාස්තු',
            'nav-reviews': 'සමාලෝචන',
            'nav-faq': 'ප්‍රශ්න',
            'nav-chat': 'දැන් කතා කරන්න',
            'hero-title': 'ෆෝඑවර් පවර් ඉන්ටර්නැෂනල්',
            'hero-subtitle': '"ඔබේ මෙහෙවර කරා"',
            'hero-desc': 'දිවයින පුරා සිටින ව්‍යාපාරික ආයතන සහ පදිංචිකරුවන් සඳහා සුවිශේෂී, විශ්වාසදායක සහ වෘත්තීය ආරක්ෂක සේවාවන් සැපයීම.',
            'hero-btn-1': 'සේවාවන් ගවේෂණය කරන්න',
            'hero-btn-2': 'WhatsApp මිල ගණන්',
            'about-title': 'ඔබේ ආරක්ෂාව අපට භාර දෙන්න',
            'about-p1': 'ෆෝඑවර් පවර් ඉන්ටර්නැෂනල් ආයතනය දිවයින පුරා සිටින ව්‍යාපාරික ආයතන සහ පදිංචිකරුවන් සඳහා සුවිශේෂී විශ්වාසදායක සහ වෘත්තීය ආරක්ෂක සේවාවන් සපයයි.',
            'about-p2': 'වඩාත්ම ගෞරවනීය ආරක්ෂක සේවා සපයන්නෙකු ලෙස, අපගේ ගනුදෙනුකරුවන් සමඟ සමීප සබඳතාවක් පවත්වා ගැනීම ගැන අපි ආඩම්බර වෙමු. අපගේ අඛණ්ඩ වර්ධනයට දායක වූ කළමනාකරණ දර්ශනයක් අප සතුව ඇත.',
            'about-p3': 'ශ්‍රී ලංකාවේ ආරක්ෂාව සහ රැකවරණය සඳහා පවතින දැඩි අවශ්‍යතාවය FPI වෙතින් ඔබට සපුරා ගත හැක.',
            'about-why-title': 'අපව තෝරා ගන්නේ ඇයි?',
            'about-why-desc': 'FPI තම කාර්ය මණ්ඩලයෙන් සියයට පනහකට වඩා වැඩි ප්‍රමාණයක් හිටපු හමුදා සාමාජිකයින්ගෙන් බඳවා ගනී. අත්දැකීම් සහ අඛණ්ඩතාව සඳහා විකල්පයක් නොමැති බව අපි විශ්වාස කරමු.',
            'services-title': 'අපගේ ආරක්ෂක විසඳුම්',
            'services-subtitle': 'පුළුල් පරාසයක ව්‍යාපාර සහ කර්මාන්ත සඳහා සම්පූර්ණ ආරක්ෂක විසඳුම්.',
            'service-1-title': 'කාර්මික සහ වාණිජ',
            'service-1-desc': 'කර්මාන්තශාලා, වාණිජ ගොඩනැගිලි, ඉදිකිරීම් ස්ථාන, සුපිරි වෙළඳසැල් සහ ගබඩා පහසුකම් සඳහා ආරක්ෂාව.',
            'service-2-title': 'VIP සහ සමීප ආරක්ෂාව',
            'service-2-desc': 'විශේෂිත ශරීර ආරක්ෂකයින්, සුරක්ෂිත රියදුරු පහසුකම් සහ රහස්‍ය පරීක්ෂක සේවාවන්.',
            'service-3-title': 'නේවාසික සහ සිදුවීම්',
            'service-3-desc': 'නිවාස, හෝටල්, රාත්‍රී සමාජශාලා සහ විශේෂ උත්සව සඳහා ආරක්ෂක සේවාවන්.',
            'service-4-title': 'ඉලෙක්ට්‍රොනික නිරීක්ෂණ',
            'service-4-desc': 'අඩු පිරිවැය X-ray, CCTV සහ අනතුරු ඇඟවීමේ පද්ධති හරහා 24/7 නිරීක්ෂණය.',
            'inquire-now': 'විමසන්න',
            'leadership-title': 'පාලක විධායක නිලධාරීන්',
            'leadership-subtitle': 'රාජ්‍ය සහ ජාත්‍යන්තර ආරක්ෂක අංශවල දශක ගණනාවක අත්දැකීම්.',
            'leader-1-name': 'මේජර් පී.ජී.එස්. විජේරත්න',
            'leader-1-title': 'සභාපති / කළමනාකාර අධ්‍යක්ෂ',
            'leader-1-qual': 'උපදේශනය පිළිබඳ ඩිප්ලෝමාව, විදේශ කටයුතු පිළිබඳ ඩිප්ලෝමාව, සාම විනිසුරු.',
            'leader-1-bio': 'රාජ්‍ය ආරක්ෂාව සහ ජාත්‍යන්තර සිවිල් ගුවන් සේවා ආරක්ෂාව පිළිබඳ වසර 28කට වැඩි පළපුරුද්දක් මොහු සතුය.',
            'leader-2-name': 'එස්.ඩී. සමරසේකර මයා',
            'leader-2-title': 'ප්‍රධාන විධායක නිලධාරී',
            'leader-2-bio': 'පෞද්ගලික ආරක්ෂක අංශයේ වසර 17කට වැඩි පළපුරුද්දක් මොහු සතුය. ඔහු නිලධාරීන් මෙහෙයවීම භාරව කටයුතු කරයි.',
            'rates-title': 'ආරක්ෂක සේවා ගාස්තු',
            'th-cat': 'කාණ්ඩය',
            'th-persons': 'පුද්ගලයින්',
            'th-shift-rate': 'පැය 12ක ගාස්තුව',
            'rate-1-name': 'ප්‍රධාන ආරක්ෂක නිලධාරී (CSO)',
            'rate-2-name': 'භාර නිලධාරී (OIC)',
            'rate-3-name': 'ජ්‍යෙෂ්ඨ ආරක්ෂක නිලධාරී (SSO)',
            'rate-5-name': 'කාන්තා ආරක්ෂක නිලධාරී (LSO)',
            'rate-6-name': 'කනිෂ්ඨ ආරක්ෂක නිලධාරී (JSO)',
            'reviews-title': 'ගනුදෙනුකරුවන්ගේ අදහස්',
            'reviews-subtitle': 'අපගේ විශිෂ්ට සේවාව පිළිබඳව ගනුදෙනුකරුවන් පවසන දේ.',
            'review-1-text': '"FPI ඉතා ඉහළ වෘත්තීය මට්ටමක් පවත්වා ගනී. ඔවුන්ගේ නිලධාරීන් ගැන අපට සම්පූර්ණ විශ්වාසයක් ඇත."',
            'review-1-name': '- ආයතනික සේවාලාභියෙක්',
            'review-2-text': '"විශේෂ උත්සව සඳහා ඔවුන්ගේ සේවාව ඉතා විශිෂ්ටයි. ඉතා ඉහළ මට්ටමේ ආරක්ෂාවක් ඔවුන් සපයයි."',
            'review-2-name': '- උත්සව සංවිධායක',
            'review-3-text': '"අපගේ නිවාස සංකීර්ණය දැන් ඉතා ආරක්ෂිතයි. නිලධාරීන් ඉතා විනයගරුක සහ වේලාවට වැඩ කරන පිරිසකි."',
            'review-3-name': '- නේවාසික කළමනාකරු',
            'faq-title': 'නිතර අසන ප්‍රශ්න',
            'faq-1-q': 'ඔබේ ආරක්ෂක නිලධාරීන් හිටපු හමුදා සාමාජිකයන්ද?',
            'faq-1-a': 'ඔව්, අපගේ කාර්ය මණ්ඩලයෙන් සියයට පනහකට වඩා වැඩි ප්‍රමාණයක් හිටපු හමුදා සාමාජිකයන් වේ.',
            'faq-2-q': 'ඔබ VIP ආරක්ෂාව සපයනවාද?',
            'faq-2-a': 'ඔව්, අපි විශේෂිත VIP ශරීර ආරක්ෂක සහ සුරක්ෂිත රියදුරු පහසුකම් සපයන්නෙමු.',
            'faq-3-q': 'ඔබ සේවාව සපයන ප්‍රදේශ මොනවාද?',
            'faq-3-a': 'අපි මුළු දිවයින පුරාම අපගේ වෘත්තීය ආරක්ෂක සේවාවන් සපයන්නෙමු.'
        },
        'EN': {
            'nav-about': 'About',
            'nav-services': 'Services',
            'nav-leadership': 'Leadership',
            'nav-rates': 'Rates',
            'nav-reviews': 'Reviews',
            'nav-faq': 'FAQ',
            'nav-chat': 'Chat Now',
            'hero-title': 'Forever Power International',
            'hero-subtitle': '"TOWARDS YOUR MISSION"',
            'hero-desc': 'Providing exceptional, reliable, and professional security services to business organizations and residents throughout the country.',
            'hero-btn-1': 'Explore Services',
            'hero-btn-2': 'WhatsApp Quote',
            'about-title': 'Let us Handle your security',
            'about-p1': 'Forever power international has been providing exceptional reliable and professional security Services to business organizations and residents throughout the country.',
            'about-p2': 'As one of the most respected security service providers, We pride ourselves on maintaining a close relationship with our clients. We have always hands-on management philosophy that has contributed to our continuous growth, Our well trained, professional Security Officers are dedicated to provide a first Class security service.',
            'about-p3': 'In Sri Lanka there is an acute need for security, safety and protection which you will find it exclusively from FPI which is available at your disposal.',
            'about-why-title': 'Why Choose Us?',
            'about-why-desc': 'FPI recruits more than fifty percent of staff from Ex servicemen. There is after all, no substitute for experience and integrity. We are only as good as our security officers, reflecting the seriousness of our commitment to them.',
            'services-title': 'Our Security Solutions',
            'services-subtitle': 'Complete security solutions for a wide range of businesses and industries.',
            'service-1-title': 'Industrial & Commercial',
            'service-1-desc': 'Industrial security, Factories, Commercial Buildings, Construction Sites, Departmental stores, Storage Facilities and Warehouses, Supermarkets.',
            'service-2-title': 'VIP & Close Protection',
            'service-2-desc': 'Close protection, VIP Body Guards, Secured drivers facility (VVIP), Armed drivers for key personals, Private and confidential detective services.',
            'service-3-title': 'Residential & Events',
            'service-3-desc': 'Residential security, Special Events, Private parties, Apartments & Residential Homes, Hotels, Nightclubs.',
            'service-4-title': 'Electronic Surveillance',
            'service-4-desc': 'Low cost - Electronic surveillance system (X-ray, Infrared with CCTV of Alarm), CCTV Camera Security Systems.',
            'inquire-now': 'Inquire Now',
            'leadership-title': 'Governing Executives',
            'leadership-subtitle': 'Decades of experience in state and international security.',
            'leader-1-name': 'Major PGS Wijerathne',
            'leader-1-title': 'Chairman / Managing Director',
            'leader-1-qual': 'Diploma in Counselling, Diploma in Foreign Affairs, Justice of Peace.',
            'leader-1-bio': 'His experience in security related matters expands for more than 28 years.',
            'leader-2-name': 'Mr. S D Samarasekara',
            'leader-2-title': 'Chief Executive Officer',
            'leader-2-bio': 'He has experience for more than 17 years in the security sector.',
            'rates-title': 'Rates for Security Service',
            'th-cat': 'Category',
            'th-persons': 'No of Persons',
            'th-shift-rate': 'Rate for 12 hour shift',
            'rate-1-name': 'Chief Security Officer (CSO)',
            'rate-2-name': 'Officer in charge (OIC)',
            'rate-3-name': 'Senior Security Officer (SSO)',
            'rate-5-name': 'Lady Security Officer (LSO)',
            'rate-6-name': 'Junior Security Officer(JSO)',
            'reviews-title': 'Client Testimonials',
            'reviews-subtitle': 'What our clients say about our exceptional security services.',
            'review-1-text': '"FPI provides an outstanding level of professionalism. Knowing that many of their guards are ex-servicemen gives us complete peace of mind."',
            'review-1-name': '- Corporate Client',
            'review-2-text': '"We hired FPI for VIP close protection during a major event. Highly recommended."',
            'review-2-name': '- Event Organizer',
            'review-3-text': '"Our residential complex has never felt safer. The guards are punctual and respectful."',
            'review-3-name': '- Residential Manager',
            'faq-title': 'Frequently Asked Questions',
            'faq-1-q': 'Are your security guards trained ex-servicemen?',
            'faq-1-a': 'Yes, FPI recruits more than fifty percent of our staff from Ex-servicemen.',
            'faq-2-q': 'Do you provide VIP and close protection?',
            'faq-2-a': 'Absolutely. We offer specialized VIP Body Guards and secured driver facilities.',
            'faq-3-q': 'What areas do you cover in Sri Lanka?',
            'faq-3-a': 'We provide professional security services throughout the entire country of Sri Lanka.'
        }
    };

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'EN' ? 'SI' : 'EN';
        langToggle.innerText = currentLang === 'EN' ? 'SI' : 'EN';
        updateLanguage();
    });

    function updateLanguage() {
        document.querySelectorAll('[data-t]').forEach(el => {
            const key = el.getAttribute('data-t');
            if (translations[currentLang][key]) {
                el.innerText = translations[currentLang][key];
            }
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll('.fade-up, .fade-in, .fade-in-left, .fade-in-right');
    
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            
            // Close all other answers
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle current answer
            question.classList.toggle('active');
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    // Handle Forms (Demo)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            const originalColor = window.getComputedStyle(btn).backgroundColor;
            const originalBorderColor = window.getComputedStyle(btn).borderColor;
            
            btn.innerText = 'Sending...';
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                btn.innerText = 'Sent Successfully';
                btn.style.backgroundColor = '#28a745';
                btn.style.borderColor = '#28a745';
                btn.style.color = '#fff';
                btn.style.opacity = '1';
                form.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = originalColor;
                    btn.style.borderColor = originalBorderColor;
                    btn.style.color = '';
                }, 3000);
            }, 1500);
        });
    });

    // Trigger animations for elements already in viewport on load
    setTimeout(() => {
        animateElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }, 100);
});

// Contact Tabs Switcher Function
function switchTab(tabId) {
    // Hide all forms
    document.querySelectorAll('.contact-form-content').forEach(form => {
        form.style.display = 'none';
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected form and set button active
    document.getElementById(tabId + '-form').style.display = 'block';
    
    if (tabId === 'inquiry') {
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
    } else {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
    }
}
