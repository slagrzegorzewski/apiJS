document.addEventListener("DOMContentLoaded", function () {
  console.log("TEST");
  const secondHand = document.querySelector(".sec-hand");
  const minutesHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds(); // we taking seconds from Date
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90; // degrees to seconds
    const minsDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 24) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // amake sec hand work
    minutesHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  }

  setInterval(setDate, 1000);
});
