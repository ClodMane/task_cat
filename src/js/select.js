let changeStatus = function (item) {
  let card = item.querySelector(".card__border");
  let status = item.querySelector(".card__motivation");
  let activeStatus = item.querySelector(".card__motivation--active");
  let disabledStatus = item.querySelector(".card__motivation--disabled");
  let cardTitle = item.querySelector(".card__title");
  let approves = item.querySelector(".card__title--disabled");

  if (card.classList.contains("card__border--active")) {
    status.style.display = "none";
    activeStatus.style.display = "block";
    disabledStatus.style.display = "none";
  } else if (card.classList.contains("card__border--disabled")) {
    status.style.display = "none";
    activeStatus.style.display = "none";
    disabledStatus.style.display = "block";
  } else {
    status.style.display = "block";
    activeStatus.style.display = "none";
    disabledStatus.style.display = "none";
    cardTitle.style.display = "block";
    approves.style.display = "none";
  }
};

let clickHandler = function (node, item) {
  let card = item.querySelector(".card__border");
  node.addEventListener("click", (event) => {
    event.preventDefault()
    event.stopPropagation()
    card.classList.toggle("card__border--active");
    changeStatus(item);
  });
};

let hoverState = function (item) {
  let cardTitle = item.querySelector(".card__title");
  let approves = item.querySelector(".card__title--disabled");
  let card = item.querySelector(".card__border");

  item.addEventListener("mouseenter", () => {
    if (card.classList.contains("card__border--active")) {
      cardTitle.style.display = "none";
      approves.style.display = "block";
    }
  });
  item.addEventListener("mouseleave", () => {
    cardTitle.style.display = "block";
    approves.style.display = "none";
  });
};

let items = document.querySelectorAll(".item");
items.forEach((item) => {
  let card = item.querySelector(".card__border");
  let link = item.querySelector(".link");
  let title = item.querySelector(".card__title");

  clickHandler(card, item);
  clickHandler(link, item);
  clickHandler(title, item);
  changeStatus(item);
  hoverState(item);
});
