// let q1 = document.getElementById("q1");
let q1 = document.querySelector("#q1 > img");

q1.onclick = () => {
  let a1 = document.querySelector("#q1 > p");
  if (a1.style.display !== "none") {
    a1.style.display = "none";
    q1.src = "/assets/images/icon-plus.svg";
  } else {
    a1.style.display = "block";
    q1.src = "/assets/images/icon-minus.svg";
  }
};
