
document.addEventListener('DOMContentLoaded', function () {
  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          scrollObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".scroll-effect, .scroll-left, .scroll-up, .scroll-zoom, .scroll-right")
    .forEach((el) => scrollObserver.observe(el));
});

// Carousel functionality for leadership images
const slides = document.querySelectorAll(".carousel-slide");
let index = 0;

setInterval(() => {
 slides[index].classList.remove("active");
 index = (index + 1) % slides.length;
 slides[index].classList.add("active");
}, 3000); // change every 3 seconds



function payWithPaystack() {
  const email = document.getElementById('donorEmail').value;
  const amount = document.getElementById('donationAmount').value;

  if (!email || !amount) {
    alert('Please enter both your email and donation amount.');
    return;
  }

  const reference = '' + Math.floor(Math.random() * 1000000000);

  const handler = PaystackPop.setup({
    key: 'pk_test_779e83165887a75367a004a31183946cf6d24301', // Replace with your public key
    email: email,
    amount: parseInt(amount) * 100,
    currency: "NGN",
    ref: reference,
    callback: function (response) {
      alert('Thank you for donating! A confirmation email has been sent.\nTransaction reference: ' + response.reference);

      fetch('/send-receipt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          amount: amount,
          reference: response.reference,
          date: new Date().toLocaleString()
        })
      });
    },
    onClose: function () {
      alert('You closed the donation window.');
    }
  });

  handler.openIframe();
}

// Scroll Animation for Donate Card
const donateCardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.animate').forEach(card => {
  donateCardObserver.observe(card);
});