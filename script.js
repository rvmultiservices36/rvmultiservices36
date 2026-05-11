const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

const sections = document.querySelectorAll('section[id], header[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navAnchors.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
<img
  src="/banner.jpg"
  alt="आर.व्ही मल्टीसर्व्हिसेस"
  className="w-full rounded-3xl"
/>
function showMessage() {
  alert('धन्यवाद! तुमची चौकशी नोंदवली आहे. लाईव्ह व्हर्जनमध्ये हा फॉर्म WhatsApp किंवा Email ला जोडता येईल.');
}
