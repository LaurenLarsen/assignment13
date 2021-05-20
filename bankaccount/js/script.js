function submitName() {
    let submitYourName = prompt("Please Enter Your Name");
    if (submitYourName != null) {
        document.getElementById("userName").innerHTML =
            "User Name: " + submitYourName;
    }
}

function submitDeposit() {
    let submitYourDeposit = prompt("How Much would you like to deposit");
    if (submitYourDeposit != null) {
        document.getElementById("userDeposit").innerHTML =
            "User Depostied $: " + submitYourDeposit;
    }
}

function submitWithdraw() {
    let submitYourWithdraw = prompt("How Much would you like to deposit");
    if (submitYourWithdraw != null) {
        document.getElementById("userWithdrew").innerHTML =
            "User Withdrew $: " + submitYourWithdraw;
    }
}


function submitBalance() {
    
    let y = document.getElementById("userDeposit").value;
    let z = document.getElementById("userWithdrew").value;
    let x = y - z;
    document.getElementById("userBalance").innerHTML = x;

    

}







 