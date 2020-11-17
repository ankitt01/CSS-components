const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

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
    "August",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]


let futureDate = new Date(2020,11,24,11,30,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const month = futureDate.getMonth();
const date = futureDate.getDate();
const day = futureDate.getDay();


giveaway.textContent = `Giveaway ends on ${weekdays[day]} ${date} ${months[month]} ${year} ${hours}:${mins} am `

const futureTime = futureDate.getTime();