function counterHandler(id, increasingOrNot) {
    //Validation start
    const blankInput = document.getElementById(id + "-count").value;
    if (blankInput == "" || blankInput < 0) {
        document.getElementById(id + "-count").value = 0;
    }
    //validation End

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

    costCalculation();
}

//calculation
var grandTotal;
function costCalculation() {
    const totalFirstClassNumber = inputHandler("firstclass-count");
    const totalEconomyNumber = inputHandler("economy-count");

    const subTotal = totalFirstClassNumber * 150 + totalEconomyNumber * 100;
    document.getElementById("subtotal").innerText = "$" + subTotal;

    const tax = subTotal * .1;
    document.getElementById("tax").innerText = "$" + tax;

    grandTotal = subTotal + tax;
    document.getElementById("total").innerText = "$" + grandTotal;
}

//parsing input value
function inputHandler(id) {
    const formInput = document.getElementById(id);
    const inputNumber = parseInt(formInput.value);
    return inputNumber;
}

//modal
function showModal() {
    document.getElementById("pop-total").innerText = "$" + grandTotal;

    resetInput("firstclass-count", "economy-count", "subtotal", "tax", "total");
}

//reset input
function resetInput(id, id1, id2, id3, id4) {
    document.getElementById(id).value = 0;
    document.getElementById(id1).value = 0;
    document.getElementById(id2).innerText = "$0";
    document.getElementById(id3).innerText = "$0";
    document.getElementById(id4).innerText = "$0";
}