let items = document.querySelectorAll(".item");

items.forEach((item) => {
  let card = item.querySelector(".card__border");
  let link = item.querySelector(".link");
  let status = item.querySelector(".card__motivation");
  let activeStatus = item.querySelector(".card__motivation--active");
  link.addEventListener("click", () => {
    card.classList.toggle("card__border--active");

    if (card.classList.contains("card__border--active")) {
      status.style.display = "none";
      activeStatus.style.display = "block";
    } else {
      status.style.display = "block";
      activeStatus.style.display = "none";
    }
  });
});

