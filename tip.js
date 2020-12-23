// let TipCalculator = function (billAmount, serviceType, peopleNo) {
//   this.billAmount = billAmount;
//   this.serviceType = serviceType;
//   this.peopleNo = peopleNo;
// };
// let tip1 = new TipCalculator(2000, 0.4, 2);
// TipCalculator.prototype.calcTips = function () {
//   let calcTip = (this.billAmount * this.serviceType) / this.peopleNo;
// };
// calcTips();
// // console.log(calcTips);
// // Placing functionaltiy on the calculate button
// document.querySelector("button").addEventListener("click", function () {
//   let bill = document.querySelector(".bill-value").value;
//   console.log(bill);
// });
//----------------------------------------------------------------------

//Calculating the tip value
function calcTips() {
  //Declare the variables
  let billAmount, serviceType, peopleNo;
  billAmount = document.querySelector(".bill-value").value;
  serviceType = document.querySelector(".service-value").value;
  peopleNo = document.querySelector(".people-value").value;

  //inputing the formula
  let tip = (billAmount * serviceType) / peopleNo;
  return tip;
}

//Giving the button functionality
document.querySelector("button").addEventListener("click", function () {
  let calculate = calcTips();
  console.log(calculate);

  //Display the result on the UI
  document.querySelector(".tip-value").textContent = `$${Math.round(
    calculate
  )}`;
});
