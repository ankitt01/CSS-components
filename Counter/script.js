let count = 0;

const value = document.querySelector('.value')
const btns = document.querySelectorAll('button')
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        if(e.currentTarget.classList.contains('dec')) {
            count--;
        }else if(btn.classList.contains('inc')) {
            count++;
        }
        else {
            count = 0;
        }
        if(count>0) {
            value.style.color = 'green';
        }else if(count<0) {
            value.style.color = 'red';
        }else if(count === 0) {
            value.style.color = 'black'
        }
        value.textContent = count;
    })
})
