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

const holidayClass = document.querySelectorAll(".holiday");

// Requisito 2

const holidayBackground = () => {
  for (let index = 0; index < holidayClass.length; index += 1) {
    if (holidayClass[index].classList.contains("holidayBG")) {
      holidayClass[index].classList.remove("holidayBG");
      holidayClass[index].classList.add("holidayBGreset");
    } else {
      holidayClass[index].classList.add("holidayBG");
      holidayClass[index].classList.remove("holidayBGreset");
    }
    console.log(holidayClass[index]);
  }
};
holiday.addEventListener("click", holidayBackground);

// Requisito 3
