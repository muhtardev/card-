let inputs = document.querySelectorAll("input");
let nameInput = document.querySelector(".name");
let numberInput = document.querySelector(".number");
let dateInput = document.querySelector(".date");
let cvvInput = document.querySelector(".cvv");
let saveBtn = document.querySelector(".save");

let delBtn = document.querySelector(".delete");
let list = document.querySelector(".list");
getInfo();
saveBtn.addEventListener("click", () => {
  addInfo();
});
delBtn.addEventListener("click", () => {
  let credit = JSON.parse(localStorage.getItem("carta")) || [];
  localStorage.removeItem("carta");
  getInfo();
});
numberInput.addEventListener("click", () => {
  numInput();
});
function addInfo() {
  let obj = {
    name: nameInput.value,
    number: numberInput.value,
    date: dateInput.value,
    cvv: cvvInput.value,
  };
  let credit = JSON.parse(localStorage.getItem("carta")) || [];
  credit.push(obj);
  localStorage.setItem("carta", JSON.stringify(credit));
  for (let input of inputs) {
    input.value = "";
  }
  getInfo();
}

function getInfo() {
  list.innerHTML = "";
  let credit = JSON.parse(localStorage.getItem("carta")) || [];
  credit.forEach((el, index) => {
    let card = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");
    let logo = document.createElement("img");
    let del = document.createElement("button");
    let edit = document.createElement("button");
    let checkNum = document.createElement("h2");
    let nameUser = document.createElement("h2");
    let nameh3 = document.createElement("h3");
    let dateh3 = document.createElement("h3");
    let dateCard = document.createElement("h2");

    checkNum.innerHTML = el.number;
    nameUser.innerHTML = el.name;
    dateCard.innerHTML = el.date;
    nameh3.innerText = "name";
    dateh3.innerText = "valid till ";
    logo.src = "./img/Logo.svg";
    del.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;
    edit.innerHTML = `<ion-icon name="pencil-sharp"></ion-icon>`;

    card.classList.add("card");
    div1.classList.add("div1");
    div2.classList.add("div2");
    div3.classList.add("div3");
    div4.classList.add("div4");
    div5.classList.add("div5");
    logo.classList.add("logo");
    checkNum.classList.add("checkNum");
    nameUser.classList.add("nameUser");
    nameh3.classList.add("nameh3");
    dateh3.classList.add("dateh3");
    del.classList.add("del");
    edit.classList.add("edit");

    div2.append(del);
    div2.append(edit);
    div1.append(logo);
    div1.append(div2);
    card.append(div1);
    card.append(checkNum);
    div3.append(nameh3);
    div3.append(nameUser);
    div4.append(dateh3);
    div4.append(dateCard);
    div5.append(div3);
    div5.append(div4);
    card.append(div5);
    list.append(card);

    del.addEventListener("click", () => {
      remove(index);
    });

    edit.addEventListener("click", () => {
      editInfo();
    });
  });
}
function remove(index) {
  let credit = JSON.parse(localStorage.getItem("carta")) || [];
  credit.splice(index, 1);
  localStorage.setItem("carta", JSON.stringify(credit));
  getInfo();
}
function numInput() {
  if (numberInput.length > 4 && numberInput.length < 16) {
    numberInput.value.slice(0, 4) + "-" + numberInput.slice(4);
  }
}
function editInfo() {
  name.setAttribute("id", index);

  let storage = JSON.parse(localStorage.getItem("carta")) || [];
  name.value = storage[index].name;
  number.value = storage[index].number;
  date.value = storage[index].date;
  cvv.value = storage[index].cvv;
}
