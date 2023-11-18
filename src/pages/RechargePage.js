session_start();
const conn = require("./conn");

const sql = "SELECT  upi FROM notice WHERE id='1'";
const result = conn.query(sql);
const row = result.fetchArray();
const upi1 = row['upi'];
const a = [upi1];
const random_keys = Math.floor(Math.random() * a.length);
const upiid = a[random_keys];
const am = new URLSearchParams(window.location.search).get('am');
const user = new URLSearchParams(window.location.search).get('user');
conn.close();

document.addEventListener("DOMContentLoaded", function() {
    function upiPay(mode) {
        const inputc = document.body.appendChild(document.createElement("input"));
        inputc.value = document.getElementById("upiid").innerHTML.trim();
        inputc.focus();
        inputc.select();
        document.execCommand('copy');
        inputc.parentNode.removeChild(inputc);
        setTimeout(function() {
            window.location.replace(`https://bingoclub.in/payment/confirmpayment?am=${am}&user=${user}&mode=${mode}`);
        }, 100);
    }
});


