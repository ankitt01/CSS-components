const articles = document.querySelectorAll('.content')
const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')


about.addEventListener('click', function(e) {
    const id = e.target.dataset.id;
    if(id) {
        //remove active from button
        btns.forEach(function(btn) {
        btn.addEventListener('click', function() {
        var index = btn.dataset.id;
        contents[index].classList.toggle('active')
        console.log(contents[index]);
    })
})
    }
})