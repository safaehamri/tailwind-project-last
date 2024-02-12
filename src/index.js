const mycart = document.getElementById("cart");


mycart.addEventListener(onmouseover,showDetails(document.getElementById('cn').textContent, '180$', '250$', '3k students') );

mycart.addEventListener(onmouseout,hideModal() );

function showDetails(courseName, price, discountedPrice, students) {
    document.getElementById('courseName').innerText = `Course: ${courseName}`;
    document.getElementById('price').innerText = `Price: ${price}`;
    document.getElementById('discountedPrice').innerText = `Discounted Price: ${discountedPrice}`;
    document.getElementById('students').innerText = `Students: ${students}`;

    document.getElementById('modal').classList.remove('hidden');
}

function hideModal() {
    document.getElementById('modal').classList.add('hidden');
}