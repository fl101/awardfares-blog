
(function initCountdowns() {
  const countdownDivs = document.querySelectorAll('[data-countdown]');
  countdownDivs.forEach(div => {
    const targetDate = new Date(div.getAttribute('data-countdown'));
    const title = div.innerText.trim();
    if (targetDate < new Date()) {
      div.style.display = 'none';
      return;
    }
    function updateCountdown() {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;
      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        div.innerHTML = `<h3>${title}</h3><div>${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds</div>`;
      } else {
        div.innerHTML = "The countdown has ended!";
      }
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
})();
