let scrollingBttn = document.querySelector("#bttn-to-up");
console.log(scrollingBttn);

window.onscroll = () => {
  if (this.scrollY >= 50) {
    scrollingBttn.classList.add("show-me");
  } else {
    scrollingBttn.classList.remove("show-me");
  }
};

scrollingBttn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
