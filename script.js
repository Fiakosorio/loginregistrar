const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registrarLink = document.querySelector('.registrar-link');
const btnPopup = document.querySelector('.btnIniciar-popup');
const iconoCerrado =document.querySelector('.icono-cerrado');

registrarLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
}); 

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconoCerrado.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});