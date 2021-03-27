var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var exitModal = document.querySelector('.modal__action--negative');

// console.log(exitModal);

// backdrop.style.display = 'block';

for(var i = 0; i<selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
}

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
};

backdrop.addEventListener('click', closeModal);
exitModal.addEventListener('click', closeModal);

