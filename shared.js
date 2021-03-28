var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var exitModal = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');



for(var i = 0; i<selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        backdrop.classList.add('open');
        modal.classList.add('open');
    });
}

function closeModal() {
    if(modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    
};

backdrop.addEventListener('click', function(){
    mobileNav.classList.remove('open');
    closeModal();
});

if (exitModal){
    exitModal.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', function(){
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

