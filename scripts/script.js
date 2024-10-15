
const burgerMenu = document.querySelector('.burger_menu');
    const modal = document.querySelector('.modal');
    const modalItems = document.querySelectorAll('.modal_item');
    burgerMenu.addEventListener('click', function() {
        modal.classList.add('active');
    });
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    modalItems.forEach(function(item) {
        item.addEventListener('click', function() {
            modal.classList.remove('active');
        });
}); 
