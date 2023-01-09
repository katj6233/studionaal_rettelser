const modalCookie = document.querySelector("#modal_cookie");
const modalParent = document.querySelector("#modal_parent");
const closeModalCookie1 = document.querySelector(".close-cookie1");
const closeModalCookie2 = document.querySelector(".close-cookie2");
const closeModalCookie3 = document.querySelector(".close-cookie3");

if (localStorage.getItem("cookie") !== "done") {
  modalParent.style.display = "flex";
}

closeModalCookie1.addEventListener("click", (event) => {
  event.preventDefault();
  modalParent.style.display = "none";
  localStorage.setItem("cookie", "done");
});

closeModalCookie2.addEventListener("click", () => {
  modalParent.style.display = "none";
  localStorage.setItem("cookie", "done");
});

closeModalCookie3.addEventListener("click", () => {
  modalParent.style.display = "none";
  localStorage.setItem("cookie", "done");
});
