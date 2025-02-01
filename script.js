document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        document.querySelectorAll('.gallery img').forEach(other => {
            if (other !== img) other.style.filter = 'blur(5px)';
        });
    });
    img.addEventListener('mouseleave', () => {
        document.querySelectorAll('.gallery img').forEach(other => {
            other.style.filter = 'none';
        });
    });
});

document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        let fullscreen = document.createElement('div');
        fullscreen.classList.add('fullscreen');
        fullscreen.innerHTML = `<img src="${img.src}">`;
        fullscreen.addEventListener('click', () => fullscreen.remove());
/*        fullscreen.addEventListener('click', () => {
             fullscreen.classList.add('fadeout');
            setTimeout(() => fullscreen.remove(), 500)
        });*/
        document.body.appendChild(fullscreen);
        setTimeout(() => fullscreen.classList.add('active'), 10);
    });
});
