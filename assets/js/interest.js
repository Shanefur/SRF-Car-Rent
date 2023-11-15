function calculateLoan() {
  // Clear the existing loan data from localStorage
  clearLoanStorage();

  const loanAmount = parseFloat(document.getElementById('loanAmount').value);
  const downPayment = parseFloat(document.getElementById('downPayment').value);
  const loanTerm = parseInt(document.getElementById('loanTerm').value);
  const category = document.getElementById('category').value;

  if (isNaN(loanAmount) || isNaN(downPayment) || isNaN(loanTerm)) {
      alert('Please enter valid numerical values.');
      return;
  }

  // Enforce a minimum loan amount of 10000 Rs
  if (loanAmount < 10000) {
      alert('The minimum loan amount is 10000 Rs.');
      return;
  }

  // Assuming three payment tiers with different configurations
  const paymentTiers = {
      Junior: { interestRate: 0.05 },
      Senior: { interestRate: 0.1 },
      SeniorCitizen: { interestRate: 0.08 },
  };

  // Get the selected payment tier based on the category
  const selectedTier = paymentTiers[category];

  const interestRate = selectedTier.interestRate;

  const loanAmountAfterDownPayment = loanAmount - downPayment;

  const monthlyInterestRate = interestRate / 12;

  const numberOfPayments = loanTerm;

  const monthlyPayment =
      (loanAmountAfterDownPayment * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

  const totalPayment = monthlyPayment * numberOfPayments + downPayment;

  // Calculate the net interest rate
  const netInterest = totalPayment-loanAmount;

  // Create a loan details object
  const loanDetails = {
      category: category,
      downPayment: downPayment,
      loanTerm: loanTerm,
      monthlyPayment: monthlyPayment.toFixed(2),
      netInterest: netInterest.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
  };

  // Save the new loan details to localStorage
  localStorage.setItem('loans', JSON.stringify([loanDetails]));

  // Display the results on the page
  const loanResult = document.getElementById('loanResult');
  loanResult.innerHTML = `
    <p>Category: ${category}</p>
    <p>Loan Amount: Rs${loanAmount}</p>
    <p>Down Payment: Rs${downPayment}</p>
    <p>Loan Term: ${loanTerm} months</p>
    <p>Monthly Payment: Rs${monthlyPayment.toFixed(2)}</p>
    <p>Net Interest: Rs${netInterest.toFixed(2)}</p>
    <br>
    <p>Total Payment: Rs${totalPayment.toFixed(2)}</p>
  `;
}
  
  // Function to clear the existing loan data from localStorage
  function clearLoanStorage() {
    localStorage.removeItem('loans');
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