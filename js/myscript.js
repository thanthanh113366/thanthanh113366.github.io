function init() {
    var html_btn = document.getElementById("btn");
    html_btn.onclick = convert_button_click;
}

function convert_button_click() {
    var usd = prompt("Enter USD: ");
    var vnd = usd * 23000;
    printConversion(usd, vnd);
}

function printConversion(usd, vnd) {
    var html_message = document.getElementById("message");
    html_message.textContent = "You enter: " + usd + " (USD), VND: " + vnd;
}

window.onload = init;
