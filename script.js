function counterHandler(id, increasingOrNot) {
    const seatCountInput = document.getElementById(id + "-count");
    const seatCountNumber = parseInt(seatCountInput.value);
    let seatCount = seatCountNumber;
    if (increasingOrNot == true) {
        seatCount = seatCountNumber + 1;
    }
    if (increasingOrNot == false && seatCountNumber > 0) {
        seatCount = seatCountNumber - 1;
    }
    seatCountInput.value = seatCount;

    //calculation
    costCalculation();
}
function costCalculation() {
    const totalFirstClassNumber = inputHandler("firstclass-count");
    const totalEconomyNumber = inputHandler("economy-count");

    const subTotal = totalFirstClassNumber * 150 + totalEconomyNumber * 100;
    document.getElementById("subtotal").innerText = "$" + subTotal;

    const tax = subTotal * .1;
    document.getElementById("tax").innerText = "$" + tax;

    const grandTotal = subTotal + tax;
    document.getElementById("total").innerText = "$" + grandTotal;

}
//parsing input value
function inputHandler(id) {
    const formInput = document.getElementById(id);
    const inputNumber = parseInt(formInput.value);
    return inputNumber;
}