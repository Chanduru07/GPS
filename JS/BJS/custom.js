const navItems = document.querySelectorAll('.nav-item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const teamSlide = document.querySelector('.teamSlide');

navItems.forEach(function (item) {
  item.addEventListener('click', function () {

    navItems.forEach(function (nav) {
      nav.querySelector('.nav-link').classList.remove('active');
    });

    item.querySelector('.nav-link').classList.add('active');
  });
});



next.addEventListener('click', function () {
  const items = document.querySelectorAll('.slideItem');
  teamSlide.appendChild(items[0]);
});

prev.addEventListener('click', function () {
  const items = document.querySelectorAll('.slideItem');
  teamSlide.prepend(items[items.length - 1]);
});

/*=========================================================================== */

function handleContactForm(e) {
  e.preventDefault();
  var email = document.getElementById('admin-email').value;
  var phone = document.getElementById('admin-phone').value;
  var isLandline = document.getElementById('is-landline').checked;


  if (!isLandline && phone.length < 10) {
    alert('Mobile numbers must not be less than 10 digits.');
    return false;
  }


  if (isLandline && !phone.startsWith('044')) {
    phone = '044 ' + phone;
  }

  var subject = 'New Contact Request';
  var body = 'Hello Team, \n\nI would like to request your services.\n\n';
  body += 'Email Address: ' + email + '\n';
  body += 'Phone Number: ' + phone;

  window.location.href = 'mailto:info@gpublishingservice.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  return false;
}

// ==================================================================================================

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('project-carousel');
  const dotsContainer = document.getElementById('carousel-dots');
  const slides = carousel.querySelectorAll('.group');


  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      slides[i].scrollIntoView({ behavior: 'smooth', inline: 'center' });
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.dot');


  carousel.addEventListener('scroll', () => {
    const scrollLeft = carousel.scrollLeft;
    const slideWidth = carousel.clientWidth;
    const activeIndex = Math.round(scrollLeft / slideWidth);

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === activeIndex);
    });
  });
});