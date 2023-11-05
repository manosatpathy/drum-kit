
document.addEventListener("keydown", (e) => {
  makeSound(e.key);
  btnAnimation(e.key);
});
function makeSound(key) {
  switch (key) {
    case "a":
      let audio1 = new Audio("audio/boom.wav");
      audio1.play();
      break;

    case "s":
      let audio2 = new Audio("audio/clap.wav");
      audio2.play();
      break;

    case "d":
      let audio3 = new Audio("audio/hihat.wav");
      audio3.play();
      break;

    case "f":
      let audio4 = new Audio("audio/kick.wav");
      audio4.play();
      break;

    case "g":
      let audio5 = new Audio("audio/openhat.wav");
      audio5.play();
      break;

    case "h":
      let audio6 = new Audio("audio/ride.wav");
      audio6.play();
      break;

    case "j":
      let audio7 = new Audio("audio/snare.wav");
      audio7.play();
      break;

    case "k":
      let audio8 = new Audio("audio/tink.wav");
      audio8.play();
      break;

    case "l":
      let audio9 = new Audio("audio/tom.wav");
      audio9.play();
      break;

    default:
      console.log(`${key}key not working`);
  }
}

const btnAnimation = (drum) => {
  const drumBox = document.querySelector("." + drum);
  drumBox.classList.add("pressed");

  setTimeout(() => {
    drumBox.classList.remove("pressed");
  }, 100);
};
