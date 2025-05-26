const head1 = document.getElementById('head1');
const body1 = document.getElementById('body1');
const head2 = document.getElementById('head2');
const body2 = document.getElementById('body2');
const head3 = document.getElementById('head3');
const body3 = document.getElementById('body3');
const head5 = document.getElementById('head5');
const body5 = document.getElementById('body5');
const head6 = document.getElementById('head6');
const body6 = document.getElementById('body6');
const head7 = document.getElementById('head7');
const body7 = document.getElementById('body7');
const head8 = document.getElementById('head8');
const body8 = document.getElementById('body8');
const head9 = document.getElementById('head9');
const body9 = document.getElementById('body9');

head1.addEventListener('click' , () => {
    if(body1.style.maxHeight) {
        body1.style.maxHeight = null;
    }
    else {
        body1.style.maxHeight = body1.scrollHeight + 'px';
    }
});

head2.addEventListener('click' , () => {
    if(body2.style.maxHeight) {
        body2.style.maxHeight = null;
    }
    else {
        body2.style.maxHeight = body2.scrollHeight + 'px';
    }
});

head3.addEventListener('click' , () => {
    if(body3.style.maxHeight) {
        body3.style.maxHeight = null;
    }
    else {
        body3.style.maxHeight = body3.scrollHeight + 'px';
    }
});

head5.addEventListener('click' , () => {
    if(body5.style.maxHeight) {
        body5.style.maxHeight = null;
    }
    else {
        body5.style.maxHeight = body5.scrollHeight + 'px';
    }
});

head6.addEventListener('click' , () => {
    if(body6.style.maxHeight) {
        body6.style.maxHeight = null;
    }
    else {
        body6.style.maxHeight = body6.scrollHeight + 'px';
    }
});

head7.addEventListener('click' , () => {
    if(body7.style.maxHeight) {
        body7.style.maxHeight = null;
    }
    else {
        body7.style.maxHeight = body7.scrollHeight + 'px';
    }
});

head8.addEventListener('click' , () => {
    if(body8.style.maxHeight) {
        body8.style.maxHeight = null;
    }
    else {
        body8.style.maxHeight = body8.scrollHeight + 'px';
    }
});

head9.addEventListener('click' , () => {
    if(body9.style.maxHeight) {
        body9.style.maxHeight = null;
    }
    else {
        body9.style.maxHeight = body9.scrollHeight + 'px';
    }
});

const btntop = document.getElementById('btn-top');

window.onscroll = () => {
    if(scrollY >= 120) {
        btntop.style.display = 'block';
    }
    else {
        btntop.style.display = 'none'
    }
}

btntop.onclick = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
}