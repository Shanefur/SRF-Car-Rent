'use strict';

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");
});

document.addEventListener('DOMContentLoaded', () => {
  const isViewCarsPage = window.location.href.includes('view-cars.html');

  // If it's the view-cars.html page, load cars with the delete button
  if (isViewCarsPage) {
loadCarsWithDelete();
      
  } else {
loadCars();
  }
});

function loadCars() {
  const carList = document.getElementById('carList');
  carList.innerHTML = '';

  const cars = JSON.parse(localStorage.getItem('cars')) || [];

  cars.forEach((car) => {
    const carDiv = document.createElement('div');
  
    carDiv.innerHTML = `
      <img src="${car.image}" alt="${car.brand}">
      <div class="card-details">
        <p><strong>Brand:</strong> ${car.brand}</p>
        <p><strong>People:</strong> ${car.people}</p>
        <p><strong>Fuel:</strong> ${car.fuel}</p>
        <p><strong>Km per 1-litre:</strong> ${car.kmPerLiter}</p>
        <p><strong>Gears:</strong> ${car.gears}</p>
        <p><strong>Cost:</strong> ${car.cost}</p>
      </div>
    `;
    carList.appendChild(carDiv);
  });
}


