document.addEventListener("DOMContentLoaded", () => {
  loadCars();
});

function loadCars() {
  const carList = document.getElementById("carList");
  carList.innerHTML = "";

  const cars = JSON.parse(localStorage.getItem("cars")) || [];

  cars.forEach((car) => {
    const carDiv = document.createElement("div");
    carDiv.classList.add("card");
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
      <button onclick="deleteCar(${car.id})">Delete</button>
    `;
    carList.appendChild(carDiv);
  });
}

function addCar() {
  console.log("Here");
  const image = document.getElementById("image").value;
  const brand = document.getElementById("brand").value;
  const people = document.getElementById("people").value;
  const fuel = document.getElementById("fuel").value;
  const kmPerLiter = document.getElementById("kmPerLiter").value;
  const gears = document.getElementById("gears").value;
  const cost = document.getElementById("cost").value;

  if (image && brand && people && fuel && kmPerLiter && gears && cost) {
    const newCar = {
      id: Date.now(),
      image,
      brand,
      people,
      fuel,
      kmPerLiter,
      gears,
      cost,
    };

    const cars = JSON.parse(localStorage.getItem("cars")) || [];
    cars.push(newCar);
    localStorage.setItem("cars", JSON.stringify(cars));

    // Clear the form
    document.getElementById("carForm").reset();

    // Refresh the displayed cars
    loadCars();
  }
}

function deleteCar(carId) {
  const cars = JSON.parse(localStorage.getItem("cars")) || [];
  const updatedCars = cars.filter((car) => car.id !== carId);
  localStorage.setItem("cars", JSON.stringify(updatedCars));
  loadCars();
}

function viewCars() {
  window.location.href = "view-cars.html";
}

function goToAddCar() {
  window.location.href = "add-car.html";
}

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


function redirectToLoanPage() {
  window.location.href = 'loan.html';
}

