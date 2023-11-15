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
      Junior: { interestRate: 0.05, downPaymentPercentage: 0.2, termMultiplier: 1 },
      Senior: { interestRate: 0.1, downPaymentPercentage: 0.1, termMultiplier: 0.6 },
      SeniorCitizen: { interestRate: 0.08, downPaymentPercentage: 0.15, termMultiplier: 0.8 },
    };
  
    // Get the selected payment tier based on the category
    const selectedTier = paymentTiers[category];
  
    const interestRate = selectedTier.interestRate;
    const downPaymentPercentage = selectedTier.downPaymentPercentage;
    const termMultiplier = selectedTier.termMultiplier;
  
    const loanAmountAfterDownPayment = loanAmount - downPayment;
    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = loanTerm * termMultiplier;
  
    const monthlyPayment =
      (loanAmountAfterDownPayment * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  
    const totalPayment = monthlyPayment * numberOfPayments + downPayment;
  
    // Calculate the total interest paid
    const totalInterest = totalPayment - loanAmountAfterDownPayment;
  
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
      <p>Loan Ammount: ${loanAmount}</p>
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
  