export const animateUp = () => {
  let timer = 0;
  window.addEventListener('load', event => {
    let intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('up');
          }, timer);
          timer += 200;
          intersectionObserver.unobserve(entry.target);
          setTimeout(() => {
            timer = 0;
          }, 1000);
        }
      });
    });
    document.querySelectorAll('.animate-up').forEach(obj => {
      intersectionObserver.observe(obj);
    });
  });
};

export const animateDown = () => {
  let timer = 0;
  window.addEventListener('load', event => {
    let intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('down');
          }, timer);
          timer += 50;
          intersectionObserver.unobserve(entry.target);
          setTimeout(() => {
            timer = 0;
          }, 1000);
        }
      });
    });
    document.querySelectorAll('.animate-down').forEach(obj => {
      intersectionObserver.observe(obj);
    });
  });
};
