let dropdownList = document.querySelector(".dropdown-list");
let listButton = document.querySelector(".list-button");

dropdownList.classList.remove("dropdown-list-nojs");

listButton.addEventListener("click", function () {
  if (listButton.classList.contains("catalog-closed")) {
    listButton.classList.remove("catalog-closed");
    listButton.classList.add("catalog-opened");
    dropdownList.classList.add("dropdown-list-nojs");
  } else {
    listButton.classList.add("catalog-closed");
    listButton.classList.remove("catalog-opened");
    dropdownList.classList.remove("dropdown-list-nojs");
  }
});
