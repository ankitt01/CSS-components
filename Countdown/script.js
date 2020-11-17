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

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today

    //value in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 24*60*1000;
    const oneMinute = 60*1000;
    //calc all values
    let days = Math.floor(t/oneDay);
    let hours = Math.floor((t % oneDay)/oneHour);
    let minutes = Math.floor((t % oneHour)/oneMinute);
    let seconds = Math.floor((t % oneMinute)/1000);


    //set values array
    const values = [days,hours,minutes,seconds]
    //formating days
    function format(item) {
        if(item < 10) {
            return (item = `0${item}`);
        }
        else{
            return item;
        }
    }

    items.forEach(function(item,index) {
        item.innerHTML = format(values[index]);
    })
    if(t<0) {
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class="expired">Sorry this giveaway has expired</h4>`
        
    }
    console.log(values[0])
}

//countdown
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime();