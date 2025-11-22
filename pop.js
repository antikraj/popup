const btnsuccess = document.getElementById('btn-success');
const btnclose = document.getElementById('btn-close');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const btnrightclose = document.getElementById('btn-right-close');

btnsuccess.addEventListener('click', () => {
    overlay.style.display = 'flex';
    document.body.classList.add('no-scroll');
    btnsuccess.style.display = 'none';
    
});
btnclose.addEventListener('click', () => {
    overlay.style.display = 'none';
    document.body.classList.remove('no-scroll');
    btnsuccess.style.display = 'block';
});
btnrightclose.addEventListener('click', () => {
    overlay.style.display = 'none';
    document.body.classList.remove('no-scroll');
    btnsuccess.style.display = 'block';
});
overlay.addEventListener('mouseover', () => {
    overlay.style.cursor = 'pointer';
});
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
        document.body.classList.remove('no-scroll');
        btnsuccess.style.display = 'block';
    }
    
});
popup.addEventListener('mouseover', (e) => {
   popup.style.cursor = 'default';
});
