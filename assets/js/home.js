"use strict";

function loadCars() {
  console.log("here");
  const carList = document.getElementById("carList");
  carList.innerHTML = "";

  const dummyData = [
    {
      image: "./assets/images/car-1.jpg",
      brand: "Toyota Fortuner",
      people: 7,
      fuel: "Diesel",
      kmPerLiter: 18,
      gears: 6,
      cost: "40,000",
    },
    {
      image: "./assets/images/car-2.jpg",
      brand: "BMW M4",
      people: 5,
      fuel: "Petrol",
      kmPerLiter: 12,
      gears: 6,
      cost: "65,000",
    },
    {
      image: "./assets/images/car-3.jpg",
      brand: "POlO GTS",
      people: 5,
      fuel: "Petrol",
      kmPerLiter: 20,
      gears: 6,
      cost: "20,000",
    },
    {
      image: "./assets/images/car-4.jpg",
      brand: "Audi A6",
      people: 5,
      fuel: "Petrol",
      kmPerLiter: 14,
      gears: 6,
      cost: "72,000",
    },
  ];

  const jsonData = JSON.parse(localStorage.getItem("cars")) || [];
  const cars = [...dummyData, ...jsonData];

  cars.forEach((car) => {
    const carDiv = document.createElement("div");

    carDiv.innerHTML = `
      <div class="grid-items">
          <div class="card">
            <img src="${car.image}" alt="${car.brand}" height="200px" />
            <div class="card-content">
              <p class="card-text">
                <span style="font-weight: bold">Brand:</span> ${car.brand}
              </p>
              <p class="card-text">
                <span style="font-weight: bold">People:</span> ${car.people}
              </p>
              <p class="card-text">
                <span style="font-weight: bold">Fuel:</span> ${car.fuel}
              </p>
              <p class="card-text">
                <span style="font-weight: bold">Km per 1 litre:</span> ${car.kmPerLiter}
              </p>
              <p class="card-text">
                <span style="font-weight: bold">Gears:</span> ${car.gears}
              </p>
              <p class="card-text">
                <span style="font-weight: bold">Cost:</span> ${car.cost}
              </p>
            </div>
          </div>
        </div>
    `;
    carList.appendChild(carDiv);
  });
}

loadCars();




    function toggleMobileNav() {
      const body = document.body;
      const navbar = document.querySelector('.navbar-list');
      
      navbar.classList.toggle('mobile-active');
      body.classList.toggle('mobile-nav-open', navbar.classList.contains('mobile-active'));
    };

