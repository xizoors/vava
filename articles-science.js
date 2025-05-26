const head1 = document.getElementById('head1');
const body1 = document.getElementById('body1');
const head2 = document.getElementById('head2');
const body2 = document.getElementById('body2');
const head3 = document.getElementById('head3');
const body3 = document.getElementById('body3');
const head10 = document.getElementById('head10');
const body10 = document.getElementById('body10');
const head11 = document.getElementById('head11');
const body11 = document.getElementById('body11');

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

head10.addEventListener('click' , () => {
    if(body10.style.maxHeight) {
        body10.style.maxHeight = null;
    }
    else {
        body10.style.maxHeight = body10.scrollHeight + 'px';
    }
});

head11.addEventListener('click' , () => {
    if(body11.style.maxHeight) {
        body11.style.maxHeight = null;
    }
    else {
        body11.style.maxHeight = body11.scrollHeight + 'px';
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