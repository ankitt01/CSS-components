const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "WEB DEVELOPER",
        img: "https://randomuser.me/api/portraits/women/75.jpg",
        text: "The minute she landed she understood the reason this was a fly-over state. He used to get confused between soldiers and shoulders, but as a military man, he now soldiers responsibility."
    },
    {
        id: 2,
        name: "John Doe",
        job: "UX DESIGNER",
        img: "https://randomuser.me/api/portraits/men/34.jpg",
        text: "There was no ice cream in the freezer, nor did they have money to go to the store. I think I will buy the red car, or I will lease the blue one. He decided water-skiing on a frozen lake wasn’t a good idea."
    },
    {
        id: 3,
        name: "Jack Jhonson",
        job: "CONTENT WRITER",
        img: "https://randomuser.me/api/portraits/men/85.jpg",
        text: "You've been eyeing me all day and waiting for your move like a lion stalking a gazelle in a savannah. There should have been a time and a place, but this wasn't it."
    }
]

const img = document.querySelector('.profile')
const name = document.querySelector('.author')
const job = document.querySelector('.prof')
const text = document.querySelector('.text')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')


let currentItem = 0;
window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem);
})

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem = 0
    }
    
    showPerson(currentItem);
})
prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1
    }
    
    showPerson(currentItem);
})