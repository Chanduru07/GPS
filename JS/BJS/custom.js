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

  // Validation: if it is a mobile number, it should be at least 10 digits
  if (!isLandline && phone.length < 10) {
    alert('Mobile numbers must not be less than 10 digits.');
    return false;
  }

  // Formatting: add 044 to landline exactly as requested
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