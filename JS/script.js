
const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // only animate once
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  document.querySelectorAll(".scroll-effect, .scroll-left, .scroll-up, .scroll-zoom, .scroll-right").forEach((el) => {
    observer.observe(el);
});
