const articles = document.querySelectorAll('.content')
const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')


about.addEventListener('click', function(e) {
    const id = e.target.dataset.id;
    if(id) {
        //remove active from button
            btns.forEach(function(btn) {
            btn.classList.remove('active');
            e.target.classList.add('active')
            });

            articles.forEach(function(article) {
                article.classList.remove('active')
                const el = document.getElementById(id);
                el.classList.add("active")
            })
        }
    }
)