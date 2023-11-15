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


              <!-------Loan EMI---->
              <center>
              <button onclick="calculateEmi('${car.cost}')">Calculate EMI</button>
              <center>
            </div>
          </div>
        </div>
    `;
    carList.appendChild(carDiv);
  });
}

loadCars();

function calculateEmi(carCost) {
  localStorage.setItem("selectedCarCost", carCost);
  window.location.href = "loan.html";
}


    function toggleMobileNav() {
      const body = document.body;
      const navbar = document.querySelector('.navbar-list');
      
      navbar.classList.toggle('mobile-active');
      body.classList.toggle('mobile-nav-open', navbar.classList.contains('mobile-active'));
    };

    document.addEventListener('DOMContentLoaded', function () {
      // Retrieve existing loan data from localStorage
      let existingLoans = localStorage.getItem('loans');
      existingLoans = existingLoans ? JSON.parse(existingLoans) : [];

      // Display loan details on the page
      const loanListContainer = document.getElementById('loanList');

      existingLoans.forEach(function (loan, index) {
        const loanItem = document.createElement('div');
        loanItem.classList.add('loan-item');

        loanItem.innerHTML = `
          <p><strong>Category:</strong> ${loan.category}</p>
          <p><strong>Down Payment:</strong> Rs${loan.downPayment}</p>
          <p><strong>Loan Term:</strong> ${loan.loanTerm} months</p>
          <p><strong>Monthly Payment:</strong> Rs${loan.monthlyPayment}</p>
          <p><strong>Net Interest:</strong> Rs${loan.netInterest}</p>
          <br>
          <p><strong>Total Payment:</strong> Rs${loan.totalPayment}</p>
        `;

        loanListContainer.appendChild(loanItem);
        clearLoanStorage();
      });
    });

