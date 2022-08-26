const d = new Date();

let month = document.getElementById("month");
let date = document.getElementById("date");
let year = document.getElementById("year");
let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let ampm = document.getElementById("am-pm");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednseday",
  "Thursday",
  "Friday",
  "Saturday",
];

let body = document.querySelector("body");
body.onload = "updateTime()";

displayDate();
updateTime();
setInterval(updateTime, 1000);

function displayDate() {
  day.innerHTML = days[d.getDay()];
  month.innerHTML = `${months[d.getMonth()]} `;
  date.innerHTML = `${d.getDate()}, `;
  year.innerHTML = d.getFullYear();
}

function updateTime() {
  const d = new Date();
  if (d.getHours() > 12) {
    hour.innerHTML = `${d.getHours() - 12}:`;
    ampm.innerHTML = "PM";
  } else {
    hour.innerHTML = `${d.getHours()}:`;
    ampm.innerHTML = "AM";
  }
  if (d.getMinutes() < 10) {
    minute.innerHTML = `0${d.getMinutes()}:`;
  } else {
    minute.innerHTML = `${d.getMinutes()}:`;
  }

  if (d.getSeconds() < 10) {
    second.innerHTML = `0${d.getSeconds()}`;
  } else {
    second.innerHTML = `${d.getSeconds()}`;
  }
}

//task list, still need to add local storage

let button = document.querySelector("button");
let input = document.querySelector("input");
let list = document.getElementById("tasks");

button.addEventListener("click", addItem);

function addItem() {
  let inputValue = input.value;
  input.value = "";
  let listItem = document.createElement("li");
  let span = document.createElement("span");
  let button2 = document.createElement("button");
  listItem.appendChild(span);
  listItem.appendChild(button2);
  span.textContent = inputValue;
  button2.textContent = "Delete";
  list.appendChild(listItem);

  button2.addEventListener("click", function () {
    listItem.remove();
  });
  input.focus();
}

//custom greeting on times

let greeting = document.getElementById("greeting");

if (d.getHours() < 12) {
  greeting.innerHTML = "Good Morning, ";
} else if (d.getHours() < 17) {
  greeting.innerHTML = "Good Afternoon, ";
} else {
  greeting.innerHTML = "Good Evening, ";
}

//toggle sidebar

let toggleBtn = document.getElementById("toggle-btn");
let sideBar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", function () {
  sideBar.classList.toggle("active");
  if (toggleBtn.classList.contains("toggle-btn-active")) {
    toggleBtn.classList.toggle("toggle-btn-default");
  }
  toggleBtn.classList.add("toggle-btn-active");
});
