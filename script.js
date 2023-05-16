const createDaysOfTheWeek = () => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

// Escreva seu código abaixo.

const days = document.querySelector("#days");
const holiday = document.querySelector("#btn-holiday");

// Requisito 1
for (let index = 0; index < decemberDaysList.length; index += 1) {
  const list = document.createElement("li");
  list.innerText = decemberDaysList[index];
  if (decemberDaysList[index] === 24 || decemberDaysList[index] === 31) {
    list.classList.add("day", "holiday");
  } else if (
    decemberDaysList[index] === 4 ||
    decemberDaysList[index] === 11 ||
    decemberDaysList[index] === 18
  ) {
    list.classList.add("day", "friday");
  } else if (decemberDaysList[index] === 25) {
    list.classList.add("day", "holiday", "friday");
  } else {
    list.className = "day";
  }
  days.appendChild(list);
}

// Requisito 2

const holidayClass = document.querySelectorAll(".holiday");

const holidayBackground = () => {
  for (let index = 0; index < holidayClass.length; index += 1) {
    if (holidayClass[index].classList.contains("holidayBG")) {
      holidayClass[index].classList.remove("holidayBG");
      holidayClass[index].classList.add("holidayBGreset");
    } else {
      holidayClass[index].classList.add("holidayBG");
      holidayClass[index].classList.remove("holidayBGreset");
    }
  }
};
holiday.addEventListener("click", holidayBackground);

// Requisito 3

const fridayBtn = document.querySelector("#btn-friday");
const friday = document.querySelectorAll(".friday");
const fridaysArray = [4, 11, 18, 25];

const fridayTextChange = () => {
  for (let index = 0; index < friday.length; index += 1) {
    if (friday[index].innerText.length > 2) {
      friday[index].innerText = fridaysArray[index];
    } else {
      friday[index].innerText = "SEXTOU!";
    }
  }
};
fridayBtn.addEventListener("click", fridayTextChange);

// Requisito 4

days.addEventListener("mouseover", zoom);
days.addEventListener("mouseout", zoom);

function zoom(event) {
  if (event.type == "mouseover") {
    event.target.style.fontSize = "30px";
  } else if (event.type == "mouseout") {
    event.target.style.fontSize = "20px";
  }
}

// Requisito 5

const selected = document.querySelectorAll(".task");

for (let index = 0; index < selected.length; index += 1) {
  selected[index].addEventListener("click", () => {
    if (selected[index].classList.contains("selected")) {
      selected[index].classList.remove("selected");
    } else {
      selected[index].classList.add("selected");
    }
    console.log(selected);
  });
}

const setDayColor = () => {
  days.addEventListener("click", (event) => {
    const selectedTask = document.querySelector(".selected");
    if (
      selectedTask === null ||
      event.target.style.color === selectedTask.style.backgroundColor
    ) {
      event.target.style.color = "rgb(119,119,119)";
    } else {
      event.target.style.color = selectedTask.style.backgroundColor;
    }
  });
};
setDayColor();
// for (let index = 0; index < days.length; index += 1) {
//  days[index].addEventListener("click", () => {
//     console.log(index)
//     const color =
//       document.querySelector(".selected").style.backgroundColor;
//       console.log(days[index])
//     if (days[index].style.color === "rgb(119, 119, 119)") {
//       days[index].style.color = color;
//     } else {
//       days[index].style.color = "rgb(119, 119, 119)";
//     }
//   });
// }

// Requisito 6
const addBtn = document.querySelector("#btn-add");
const input = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

addBtn.addEventListener("click", () => {
  if (input.value.length > 0) {
    const li = document.createElement("li");
    li.innerText = input.value;
    input.value = "";
    taskList.appendChild(li);
  } else {
    alert("erro");
  }
});

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const li = document.createElement("li");
    li.innerText = input.value;
    input.value = "";
    taskList.appendChild(li);
  }
});
