 
//plush button for mobile 
document.getElementById("mobile-plus-button").addEventListener("click", function(){
  const mobileInput = document.getElementById("mobile-input");
  const mobileInputCollect = document.getElementById("mobile-input").value;
  const mobileCount = parseInt(mobileInputCollect);
  const mobileNewCount = mobileCount + 1;
  mobileInput.value = mobileNewCount; 

  // total increase mobile price
  const totalMobilePrice = mobileNewCount * 1219;
  document.getElementById("mobile-price").innerText = totalMobilePrice;

  //sub total price
})
// minus button for mobile 
document.getElementById("mobile-minus-button").addEventListener("click", function(){
  const mobileInput = document.getElementById("mobile-input");
  const mobileInputCollect = document.getElementById("mobile-input").value;
  const mobileCount = parseInt(mobileInputCollect);
  const mobileNewCount = mobileCount - 1;
  mobileInput.value = mobileNewCount; 

  // total decrease mobile price
  const totalMobilePrice = mobileNewCount * 1219;
  document.getElementById("mobile-price").innerText = totalMobilePrice;

  //sub total price
})

// plus button for case 
document.getElementById("case-plus-button").addEventListener("click", function(){
  const caseInput = document.getElementById("case-input");
  const caseInputCollect = document.getElementById("case-input").value;
  const caseCount = parseInt(caseInputCollect);
  const caseNewCount = caseCount + 1;
  caseInput.value = caseNewCount;

  // total increase case price
  const totalCasePrice = caseNewCount * 59;
  document.getElementById("case-price").innerText = totalCasePrice;

  //sub total price  
})

// minus button for case 
document.getElementById("case-minus-button").addEventListener("click", function(){
  const caseInput = document.getElementById("case-input");
  const caseInputCollect = document.getElementById("case-input").value;
  const caseCount = parseInt(caseInputCollect);
  const caseNewCount = caseCount - 1;
  caseInput.value = caseNewCount;

  // total decrease case price
  const totalCasePrice = caseNewCount * 59;
  document.getElementById("case-price").innerText = totalCasePrice;

  //sub total price 
})

// subtotal price
// total price