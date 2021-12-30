

function myFunction1() {
    console.log("ABC");
    var max1_c = document.getElementById('max1_c').innerText;
    const Array1 = max1_c.split("-");
    const myArray1 = Array1[1].split('°');
    var max1_f=((Number(myArray1[0])*(9/5))+32).toFixed(2);
    document.getElementById("max1_c").innerHTML = "High-"+max1_f+"F";

    var min1_c = document.getElementById('min1_c').innerText;
    const Array2 = min1_c.split("-");
    const myArray2 = Array2[1].split('°');
    var min1_f=((Number(myArray2[0])*(9/5))+32).toFixed(2);
    document.getElementById("min1_c").innerHTML = "Low-"+min1_f+"F";
}

function myFunction2() {
    var max2_c = document.getElementById('max2_c').innerText;
    const Array3 = max2_c.split("-");
    const myArray3 = Array3[1].split('°');
    var max2_f=((Number(myArray3[0])*(9/5))+32).toFixed(2);

    document.getElementById("max2_c").innerHTML = "High-"+max2_f+"F";

    var min2_c = document.getElementById('min2_c').innerText;
    const Array4 = min2_c.split("-");
    const myArray4 = Array4[1].split('°');
    var min2_f=((Number(myArray4[0])*(9/5))+32).toFixed(2);
    document.getElementById("min2_c").innerHTML = "Low-"+min2_f+"F";
}
function myFunction3() {
    var max3_c = document.getElementById('max3_c').innerText;
    const Array5 = max3_c.split("-");
    const myArray5 = Array5[1].split('°');
    var max3_f=((Number(myArray5[0])*(9/5))+32).toFixed(2);
    document.getElementById("max3_c").innerHTML = "High-"+max3_f+"F";

    var min3_c = document.getElementById('min3_c').innerText;
    const Array6 = min3_c.split("-");
    const myArray6 = Array6[1].split('°');
    var min3_f=((Number(myArray6[0])*(9/5))+32).toFixed(2);
    document.getElementById("min3_c").innerHTML = "Low-"+min3_f+"F";
}
function myFunction4() {
    var max4_c = document.getElementById('max4_c').innerText;
    const Array7 = max4_c.split("-");
    const myArray7 = Array7[1].split('°');
    var max4_f=((Number(myArray7[0])*(9/5))+32).toFixed(2);
    document.getElementById("max4_c").innerHTML = "High-"+max4_f+"F";

    var min4_c = document.getElementById('min4_c').innerText;
    const Array8 = min4_c.split("-");
    const myArray8 = Array8[1].split('°');
    var min4_f=((Number(myArray8[0])*(9/5))+32).toFixed(2);
    document.getElementById("min4_c").innerHTML = "Low-"+min4_f+"F";
}
