const openModalButton = document.getElementById("openModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const modal = document.getElementById("modal");



closeModalButton.addEventListener('click', function() {
    hideModal();
});

function showDetails(courseName, price, discountedPrice, students) {
    document.getElementById('courseName').innerText = `Course: ${courseName}`;
    document.getElementById('price').innerText = `Price: ${price}`;
    document.getElementById('discountedPrice').innerText = `Discounted Price: ${discountedPrice}`;
    document.getElementById('students').innerText = `Students: ${students}`;

    modal.classList.remove('hidden');
}

function hideModal() {
    modal.classList.add('hidden');
}

