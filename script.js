let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let road = document.getElementById("road");
let mountain = document.getElementById("mountain");
let text = document.getElementById("text");
let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let cursor = document.getElementById("cursor");
let about = document.querySelector(".section__about");
let navigation = document.querySelector(".navigation");
let menu = document.querySelector(".menu-phone");
let navBtn = document.querySelector(".nav__button");
let icon = document.querySelector(".nav__icon");

window.addEventListener("scroll", function () {
  navigation.classList.toggle("sticky", window.scrollY > 0);
  icon.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log(value);
  bg.style.top = value * 0.5 + "px";
  moon.style.left = -value * 0.5 + "px";
  mountain.style.top = -value * 0.15 + "px";
  road.style.top = value * 0.15 + "px";
  text.style.top = value * 1 + "px";
  const sq1Right = value * 0.05;
  const sq2Left = value * 0.05;
  const sq2Bottom = value * 0.05;
  console.log(sq2Bottom, "ss");
  square1.style.right = sq1Right > 30 ? "30%" : sq1Right + "%";
  square1.style.transform = "translateX(50%)";

  square2.style.left = sq2Left > 30 ? "30%" : sq2Left + "%";
  square2.style.bottom = sq2Bottom > 30 ? "30%" : sq2Bottom + "%";
  square2.style.transform = "translate(-50%, 50%)";
});

const toggle = () => {
  navigation.classList.toggle("phone");
  console.log(navigation.classList);
  if (navigation.classList === "navigation") {
    navigation.animate(
      [
        // keyframes
        { opacity: "100%" },
        { opacity: "0" },
      ],
      {
        // timing options
        duration: 1000,
      }
    );
  } else {
    navigation.animate(
      [
        // keyframes
        { opacity: "0" },
        { opacity: "100%" },
      ],
      {
        // timing options
        duration: 1000,
      }
    );
  }

  menu.classList.toggle("active");
  menu.animate(
    [
      // keyframes
      { transform: "translateX(100%)" },
      { transform: "translateX(0)" },
    ],
    {
      // timing options
      duration: 800,
    }
  );
  navBtn.classList.toggle("open");
  navBtn.animate(
    [
      // keyframes
      { opacity: "0" },
      { opacity: "100%" },
    ],
    {
      // timing options
      duration: 1500,
    }
  );
};

const goTo = () => {
  navigation.classList.remove("phone");
  navBtn.classList.remove("open");
  menu.classList.remove("active");
};
