// getting all required data
let container = document.querySelector(".container");
let form = document.getElementById("form");
let submit = document.getElementById("submit");
let grocery = document.querySelectorAll(".grocery");
let table = document.getElementById("table");
let tableContainer = document.getElementById("tableContainer");
let tbody = document.getElementById("tbody");
let genders = document.querySelectorAll("gender");

/*-----------adding event listener to submit the form----------*/
form.addEventListener("submit", (e) => {
  /*---------preventing default form action-----------*/
  e.preventDefault();

  /*-----fetching table list key & value from form elements---*/
  let arrayOfObject = [];
  let flag = true;
  for (i = 0; i < form.length - 1; i++) {
    if (form[i].name != "grocery") {
      arrayOfObject[form[i].name] = form[i].value;
    } else {
      let groceryList = [];
      food.forEach((e) => {
        if (e.checked) {
          groceryList.push(e.value);
        }
      });
      if (groceryList.length < 2) {
        flag = false;
      }
      groceryList = groceryList.join(" ");
      arrayOfObject["grocery"] = groceryList;
    }
  }

  /*---alerting user if any data missing---*/
  if (arrayOfObject.Gender == "") {
    alert("please select Gender");
  } else if (!flag) {
    alert("please select two or more foods");
  } else {
    /*--------displaying table------- */
    tableContainer.classList.add("active");
    container.classList.add("active");

    /*---------------table data----------------*/
    let tr = document.createElement("tr");
    for (key in arrayOfObject) {
      let td = document.createElement("td");
      td.textContent = arrayOfObject[key];
      tr.append(td);
      tbody.appendChild(tr);
    }

    /*-----after table creation reseting all form data------*/
    form.reset();
  }
});