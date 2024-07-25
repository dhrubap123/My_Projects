let body = document.querySelector('body');
// console.log(body.clientWidth)
if(body.clientWidth <= 799){
    alert("please use desktop mode for scientific calculater");
}



//Loading normal Calculator Buttons
let calBody = document.querySelector('.cal-body');
let calBodyElements = document.createElement('div');
calBodyElements.classList.add('cal-body-div');
calBodyElements.innerHTML = `
<p class="display-body showText" ></p>
<hr style="width: 90%;">
<div class="display-options">
    <button class="box1" id="sci">
        Sci
    </button>

`;
{/* <button class="box1">
Conv
</button> */}
let calBodyArr = ['C', 'x', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '(', ')', '0', '.', '='];
calBodyArr.forEach((element, index) => {
    if (index == 0) {
        calBodyElements.innerHTML += `
        <button class="box textEnter"  onclick="clearText()">
            ${element}
        </button>
        `;
        // console.log('hello');
    }
    else if (index == 1) {
        calBodyElements.innerHTML += `
        <button class="box textEnter"  onclick="clearOneText()">
            ${element}
        </button>
        `;
    }
    else if (index == 20) {
        calBodyElements.innerHTML += `
        <button class="box textEnter"  onclick="calculateVal()">
            ${element}
        </button>
        `;
    }
    else {
        calBodyElements.innerHTML += `
        <button class="box textEnter"  onclick="enterText(event)">
            ${element}
        </button>
        `;
    }
})
calBody.appendChild(calBodyElements);


//Loading Scientific Calculator Buttons
let calBodySci = document.querySelector('.cal-body-sci');
let calBodySciElements = document.createElement('div');
calBodySciElements.classList.add('cal-body-div');
calBodySciElements.innerHTML = `
<p class="display-body-sci showTextSci" disabled></p>
<hr style="width: 90%;">
<div class="display-options-sci">
    <button class="box1-sci" id="sci-cal">
        Basic
    </button>

`;
{/* <button class="box1-sci">
Conv
</button> */}
let calBodySciArr = ['⇄', 'Rad', '∛', 'C', 'x', '%', '/', 'sin', 'cos', 'tan', '7', '8', '9', '*', 'ln', 'log', '1/x', '4', '5', '6', '-', 'eˣ', 'x²', 'x^y', '1', '2', '3', '+', '|x|', 'π', '√', '(', ')', '0', '.', '='];
calBodySciArr.forEach((element, index) => {
    if (element === '⇄') {
        calBodySciElements.innerHTML += `
        <button class="box-sci textEnter" id="change">
            ${element}
        </button>
    `;
    }
    else if (index == 3) {
        calBodySciElements.innerHTML += `
        <button class="box-sci textEnter"  onclick="clearTextSci()">
            ${element}
        </button>
        `;
        // console.log('hello');
    }
    else if (index == 4) {
        calBodySciElements.innerHTML += `
        <button class="box-sci textEnter"  onclick="clearOneTextSci()">
            ${element}
        </button>
        `;
    }
    else if (index == 35) {
        calBodySciElements.innerHTML += `
        <button class="box-sci textEnter"  onclick="calculateValSci()">
            ${element}
        </button>
        `;
    }
    else {
        calBodySciElements.innerHTML += `
        <button class="box-sci textEnter"  onclick="enterTextSci(event)">
            ${element}
        </button>
        `;
    }
})
calBodySci.appendChild(calBodySciElements);


//Changing from normal to scientific
let changeMode = () => {
    document.querySelector('.cal-body-sci').classList.toggle('removed');
    document.querySelector('.cal-body').classList.toggle('removed');
}

document.querySelector('#sci').addEventListener('click', changeMode);
document.querySelector('#sci-cal').addEventListener('click', changeMode);


//Changing scientific cal lauout
let count = 2;
let sciCalElementChange = document.querySelector("#change");
sciCalElementChange.addEventListener('click', sciCalElementChangeFunc);
function sciCalElementChangeFunc() {
    let test = document.querySelectorAll('.box-sci');
    if (count % 2 == 0) {
        test[7].innerHTML = '2^x';
        test[8].innerHTML = 'x^3';
        test[9].innerHTML = 'x!';
        test[14].innerHTML = '';
        test[14].classList.add('invisible');
        test[15].innerHTML = '';
        test[15].classList.add('invisible');
        test[16].innerHTML = '';
        test[16].classList.add('invisible');
        test[21].innerHTML = '';
        test[21].classList.add('invisible');
        test[22].innerHTML = '';
        test[22].classList.add('invisible');
        test[23].innerHTML = '';
        test[23].classList.add('invisible');
        test[28].innerHTML = '';
        test[28].classList.add('invisible');
        test[29].innerHTML = '';
        test[29].classList.add('invisible');
        test[30].innerHTML = '';
        test[30].classList.add('invisible');
    }
    else {
        test[14].classList.remove('invisible');
        test[15].classList.remove('invisible');
        test[16].classList.remove('invisible');
        test[21].classList.remove('invisible');
        test[22].classList.remove('invisible');
        test[23].classList.remove('invisible');
        test[28].classList.remove('invisible');
        test[29].classList.remove('invisible');
        test[30].classList.remove('invisible');

        test[7].innerHTML = 'sin';
        test[8].innerHTML = 'cos';
        test[9].innerHTML = 'tan';
        test[14].innerHTML = 'ln';
        test[15].innerHTML = 'log';
        test[16].innerHTML = '1/x';
        test[21].innerHTML = 'eˣ';
        test[22].innerHTML = 'x²';
        test[23].innerHTML = 'x^y';
        test[28].innerHTML = '|x|';
        test[29].innerHTML = 'π';
        test[30].innerHTML = 'e';
    }
    count++;
}


//Function of appending the entered text

// let buttonClick = document.querySelectorAll('.textEnter');

// buttonClick.forEach((element)=>{
//     element.addEventListener('click', textEnterFunc);
// })

// function enterText(e){
//     console.log("Clicked button value:", e.target.innerHTML);
//     if (e.target.innerHTML === calBodyArr[0] || e.target.innerHTML === "=" || e.target.innerHTML === "⇄") {
//         console.log('HELLOOO');
//     } 
//     else {
//         console.log(e.target.innerHTML);
//     }
// }


//normal cal function

// let calculateText = '';

let showText = document.querySelector('.showText');
let calculateText = '';
function enterText(e) {
    if (e.target.innerHTML.trim() === '%') {
        calculateText += '/100';
        showText.innerHTML += '%';
    } else {
        showText.innerHTML += (e.target.innerHTML.trim());
        calculateText += (e.target.innerHTML.trim());
    }
}

function calculateVal() {
    showText.innerHTML = eval(calculateText);
}

function clearText() {
    showText.innerHTML = '';
    calculateText = '';
}

function clearOneText() {
    showText.innerHTML = showText.innerHTML.slice(0, showText.innerHTML.length - 1);
    calculateText = calculateText.slice(0, calculateText.length - 1);
}



//scientific cal function






let showTextSci = document.querySelector('.showTextSci');
let calculateTextSci = '';
function enterTextSci(e) {
    // console.log(e.target.innerHTML);
    // console.log('            '+e.target.innerHTML.trim());

    //for sin
    let valueEntered = e.target.innerHTML.trim();
    let value = showTextSci.innerHTML;
    if ((value.slice(value.length - 4, value.length - 1) === 'sin') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let sinValue = Math.sin(value.slice(value.length - 1, value.length) * Math.PI / 180);
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), sinValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
        // console.log(sinValue);
        // console.log(calculateTextSci.replace(value.slice(value.length-4, value.length), sinValue));
    }
    else if ((value.slice(value.length - 5, value.length - 2) === 'sin') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let sinValue = Math.sin(value.slice(value.length - 2, value.length) * Math.PI / 180);
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), sinValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
        // console.log(sinValue);
        // console.log(value.slice(value.length-2, value.length));
        // console.log(calculateTextSci.replace(value.slice(value.length-5, value.length), sinValue));

    }
    else if ((value.slice(value.length - 6, value.length - 3) === 'sin') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let sinValue = Math.sin(value.slice(value.length - 3, value.length) * Math.PI / 180);
        if (value.slice(value.length - 3, value.length) == 180 || value.slice(value.length - 3, value.length) == 360) {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), '0');
        } else {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), sinValue);
        }
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
        // console.log(sinValue);
        // console.log(calculateTextSci.replace(value.slice(value.length-6, value.length), sinValue));

    }



    //for cos


    else if ((value.slice(value.length - 4, value.length - 1) === 'cos') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let cosValue = Math.cos(value.slice(value.length - 1, value.length) * Math.PI / 180);
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), cosValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 5, value.length - 2) === 'cos') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let cosValue = Math.cos(value.slice(value.length - 2, value.length) * Math.PI / 180);
        if (value.slice(value.length - 2, value.length) == 90) {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), 0);
        } else {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), cosValue);
        }
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());

    }
    else if ((value.slice(value.length - 6, value.length - 3) === 'cos') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let cosValue = Math.cos(value.slice(value.length - 3, value.length) * Math.PI / 180);
        if (value.slice(value.length - 3, value.length) == 270) {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), 0);
        } else {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), cosValue);
        }
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }


    //for tan


    else if ((value.slice(value.length - 4, value.length - 1) === 'tan') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let tanValue = Math.tan(value.slice(value.length - 1, value.length) * Math.PI / 180);
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), tanValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 5, value.length - 2) === 'tan') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let tanValue = Math.tan(value.slice(value.length - 2, value.length) * Math.PI / 180);
        if (value.slice(value.length - 2, value.length) == 90) {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), 'undefined');
        } else if (value.slice(value.length - 2, value.length) == 45) {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), '1');
        } else {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), tanValue);
        }
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 6, value.length - 3) === 'tan') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let tanValue = Math.tan(value.slice(value.length - 3, value.length) * Math.PI / 180);
        if (value.slice(value.length - 3, value.length) == 180 || value.slice(value.length - 3, value.length) == 360) {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), '0');
        } else if (value.slice(value.length - 3, value.length) == 270) {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), 'undefined');
        } else if (value.slice(value.length - 3, value.length) == 225) {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), '1');
        } else {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), tanValue);
        }
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }


    //for 1/x


    else if (valueEntered === '1/x') {
        calculateTextSci += '1/';
        showTextSci.innerHTML += '1/';
    }


    // for e^x

    else if (valueEntered === 'eˣ') {
        calculateTextSci += 'e';
        showTextSci.innerHTML += 'e^';
    }

    else if ((value.slice(value.length - 2, value.length - 1) === 'e') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let eValue = Math.pow(2.718281828459045, value.slice(value.length - 1, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 2, value.length), eValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 3, value.length - 2) === 'e') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let eValue = Math.pow(2.718281828459045, value.slice(value.length - 2, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 3, value.length), eValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 4, value.length - 3) === 'e') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let eValue = Math.pow(2.718281828459045, value.slice(value.length - 3, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), eValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 5, value.length - 4) === 'e') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let eValue = Math.pow(2.718281828459045, value.slice(value.length - 4, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), eValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 6, value.length - 5) === 'e') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let eValue = Math.pow(2.718281828459045, value.slice(value.length - 5, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), eValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 7, value.length - 6) === 'e') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let eValue = Math.pow(2.718281828459045, value.slice(value.length - 6, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 7, value.length), eValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }




    // for log




    else if ((value.slice(value.length - 4, value.length - 1) === 'log') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let logValue = Math.log10(value.slice(value.length - 1, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), logValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 5, value.length - 2) === 'log') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let logValue = Math.log10(value.slice(value.length - 2, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), logValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 6, value.length - 3) === 'log') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let logValue = Math.log10(value.slice(value.length - 3, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), logValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 7, value.length - 4) === 'log') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let logValue = Math.log10(value.slice(value.length - 4, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 7, value.length), logValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 8, value.length - 5) === 'log') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let logValue = Math.log10(value.slice(value.length - 5, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 8, value.length), logValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 9, value.length - 6) === 'log') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let logValue = Math.log10(value.slice(value.length - 6, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 9, value.length), logValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 10, value.length - 7) === 'log') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let logValue = Math.log10(value.slice(value.length - 7, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 10, value.length), logValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 11, value.length - 8) === 'log') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let logValue = Math.log10(value.slice(value.length - 8, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 11, value.length), logValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 12, value.length - 9) === 'log') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let logValue = Math.log10(value.slice(value.length - 9, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 12, value.length), logValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 13, value.length - 10) === 'log') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let logValue = Math.log10(value.slice(value.length - 10, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 13, value.length), logValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 14, value.length - 11) === 'log') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let logValue = Math.log10(value.slice(value.length - 11, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 14, value.length), logValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 15, value.length - 12) === 'log') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let logValue = Math.log10(value.slice(value.length - 12, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 15, value.length), logValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 16, value.length - 13) === 'log') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let logValue = Math.log10(value.slice(value.length - 13, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 16, value.length), logValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 17, value.length - 14) === 'log') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let logValue = Math.log10(value.slice(value.length - 14, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 17, value.length), logValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 18, value.length - 15) === 'log') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let logValue = Math.log10(value.slice(value.length - 15, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 18, value.length), logValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }






    // for ln




    else if ((value.slice(value.length - 3, value.length - 1) === 'ln') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let lnValue = Math.log(value.slice(value.length - 1, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 3, value.length), lnValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 4, value.length - 2) === 'ln') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let lnValue = Math.log(value.slice(value.length - 2, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), lnValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 5, value.length - 3) === 'ln') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let lnValue = Math.log(value.slice(value.length - 3, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), lnValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 6, value.length - 4) === 'ln') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let lnValue = Math.log(value.slice(value.length - 4, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), lnValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 7, value.length - 5) === 'ln') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let lnValue = Math.log(value.slice(value.length - 5, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 7, value.length), lnValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 8, value.length - 6) === 'ln') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let lnValue = Math.log(value.slice(value.length - 6, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 8, value.length), lnValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 9, value.length - 7) === 'ln') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let lnValue = Math.log(value.slice(value.length - 7, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 9, value.length), lnValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 10, value.length - 8) === 'ln') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let lnValue = Math.log(value.slice(value.length - 8, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 10, value.length), lnValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 11, value.length - 9) === 'ln') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let lnValue = Math.log(value.slice(value.length - 9, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 11, value.length), lnValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 12, value.length - 10) === 'ln') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let lnValue = Math.log(value.slice(value.length - 10, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 12, value.length), lnValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 13, value.length - 11) === 'ln') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let lnValue = Math.log(value.slice(value.length - 11, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 13, value.length), lnValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 14, value.length - 12) === 'ln') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let lnValue = Math.log(value.slice(value.length - 12, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 14, value.length), lnValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 15, value.length - 13) === 'ln') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let lnValue = Math.log(value.slice(value.length - 13, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 15, value.length), lnValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 16, value.length - 14) === 'ln') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let lnValue = Math.log(value.slice(value.length - 14, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 16, value.length), lnValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 17, value.length - 15) === 'ln') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let lnValue = Math.log(value.slice(value.length - 15, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 17, value.length), lnValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }



    // for square



    else if (valueEntered === 'x²') {
        calculateTextSci += '**2';
        showTextSci.innerHTML += '²';
    }


    // for x^y



    else if (valueEntered === 'x^y') {
        calculateTextSci += '**';
        showTextSci.innerHTML += '^';
    }


    // for |x|


    else if (valueEntered === '|x|') {
        calculateTextSci += '|';
        showTextSci.innerHTML += '|';
    }

    else if ((value.slice(value.length - 3, value.length - 2) === '|') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let absValue = Math.abs(value.slice(value.length - 2, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 3, value.length), absValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += ('|' + e.target.innerHTML.trim());
        // console.log(calculateTextSci);
    }
    else if ((value.slice(value.length - 4, value.length - 3) === '|') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let absValue = Math.abs(value.slice(value.length - 3, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), absValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += ('|' + e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 5, value.length - 4) === '|') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let absValue = Math.abs(value.slice(value.length - 4, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), absValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += ('|' + e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 6, value.length - 5) === '|') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let absValue = Math.abs(value.slice(value.length - 5, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), absValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += ('|' + e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 7, value.length - 6) === '|') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let absValue = Math.abs(value.slice(value.length - 6, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 7, value.length), absValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += ('|' + e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 8, value.length - 7) === '|') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let absValue = Math.abs(value.slice(value.length - 7, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 8, value.length), absValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += ('|' + e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 9, value.length - 8) === '|') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let absValue = Math.abs(value.slice(value.length - 8, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 9, value.length), absValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += ('|' + e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 10, value.length - 9) === '|') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let absValue = Math.abs(value.slice(value.length - 9, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 10, value.length), absValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += ('|' + e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 11, value.length - 10) === '|') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let absValue = Math.abs(value.slice(value.length - 10, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 11, value.length), absValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += ('|' + e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 12, value.length - 11) === '|') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let absValue = Math.abs(value.slice(value.length - 11, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 12, value.length), absValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += ('|' + e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 13, value.length - 12) === '|') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let absValue = Math.abs(value.slice(value.length - 12, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 13, value.length), absValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += ('|' + e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 14, value.length - 13) === '|') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let absValue = Math.abs(value.slice(value.length - 13, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 14, value.length), absValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += ('|' + e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 15, value.length - 14) === '|') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let absValue = Math.abs(value.slice(value.length - 14, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 15, value.length), absValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += ('|' + e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 16, value.length - 15) === '|') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let absValue = Math.abs(value.slice(value.length - 15, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 16, value.length), absValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += ('|' + e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 17, value.length - 16) === '|') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/')) {

        let absValue = Math.abs(value.slice(value.length - 16, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 17, value.length), absValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += ('|' + e.target.innerHTML.trim());
    }



    //for π


    else if (valueEntered === 'π') {
        calculateTextSci += Math.PI.toPrecision(5);
        showTextSci.innerHTML += Math.PI.toPrecision(5);
    }


    //for square root


    else if ((value.slice(value.length - 2, value.length - 1) === '√') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/' || valueEntered === '-')) {

        let squareValue = Math.sqrt(value.slice(value.length - 1, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 2, value.length), squareValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 3, value.length - 2) === '√') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/' || valueEntered === '-')) {

        let squareValue = Math.sqrt(value.slice(value.length - 2, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 3, value.length), squareValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
        // console.log(calculateTextSci);
    }
    else if ((value.slice(value.length - 4, value.length - 3) === '√') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/' || valueEntered === '-')) {

        let squareValue = Math.sqrt(value.slice(value.length - 3, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), squareValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 5, value.length - 4) === '√') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/' || valueEntered === '-')) {

        let squareValue = Math.sqrt(value.slice(value.length - 4, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), squareValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 6, value.length - 5) === '√') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/' || valueEntered === '-')) {

        let squareValue = Math.sqrt(value.slice(value.length - 5, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), squareValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 7, value.length - 6) === '√') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/' || valueEntered === '-')) {

        let squareValue = Math.sqrt(value.slice(value.length - 6, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 7, value.length), squareValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 8, value.length - 7) === '√') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/' || valueEntered === '-')) {

        let squareValue = Math.sqrt(value.slice(value.length - 7, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 8, value.length), squareValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 9, value.length - 8) === '√') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/' || valueEntered === '-')) {

        let squareValue = Math.sqrt(value.slice(value.length - 8, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 9, value.length), squareValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 10, value.length - 9) === '√') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/' || valueEntered === '-')) {

        let squareValue = Math.sqrt(value.slice(value.length - 9, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 10, value.length), squareValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 11, value.length - 10) === '√') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/' || valueEntered === '-')) {

        let squareValue = Math.sqrt(value.slice(value.length - 10, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 11, value.length), squareValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 12, value.length - 11) === '√') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/' || valueEntered === '-')) {

        let squareValue = Math.sqrt(value.slice(value.length - 11, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 12, value.length), squareValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 13, value.length - 12) === '√') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/' || valueEntered === '-')) {

        let squareValue = Math.sqrt(value.slice(value.length - 12, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 13, value.length), squareValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 14, value.length - 13) === '√') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/' || valueEntered === '-')) {

        let squareValue = Math.sqrt(value.slice(value.length - 13, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 14, value.length), squareValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 15, value.length - 14) === '√') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/' || valueEntered === '-')) {

        let squareValue = Math.sqrt(value.slice(value.length - 14, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 15, value.length), squareValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 16, value.length - 15) === '√') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/' || valueEntered === '-')) {

        let squareValue = Math.sqrt(value.slice(value.length - 15, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 16, value.length), squareValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }



    // for cube root


        else if (valueEntered === '∛') {
            calculateTextSci += 'cbrt';
            showTextSci.innerHTML += 'cbrt';
        }

    else if ((value.slice(value.length - 5, value.length - 1) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 1, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), cubeRootValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());

    }
    else if ((value.slice(value.length - 3, value.length - 2) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 2, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 3, value.length), cubeRootValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());

        // console.log(calculateTextSci);
    }
    else if ((value.slice(value.length - 4, value.length - 3) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 3, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), cubeRootValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());

    }
    else if ((value.slice(value.length - 5, value.length - 4) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 4, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), cubeRootValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());

    }
    else if ((value.slice(value.length - 6, value.length - 5) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 5, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), cubeRootValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());

    }
    else if ((value.slice(value.length - 7, value.length - 6) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 6, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 7, value.length), cubeRootValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());

    }
    else if ((value.slice(value.length - 8, value.length - 7) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 7, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 8, value.length), cubeRootValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());

    }
    else if ((value.slice(value.length - 9, value.length - 8) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 8, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 9, value.length), cubeRootValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());

    }
    else if ((value.slice(value.length - 10, value.length - 9) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 9, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 10, value.length), cubeRootValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());

    }
    else if ((value.slice(value.length - 11, value.length - 10) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 10, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 11, value.length), cubeRootValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());

    }
    else if ((value.slice(value.length - 12, value.length - 11) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 11, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 12, value.length), cubeRootValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());

    }
    else if ((value.slice(value.length - 13, value.length - 12) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 12, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 13, value.length), cubeRootValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());

    }
    else if ((value.slice(value.length - 14, value.length - 13) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 13, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 14, value.length), cubeRootValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());

    }
    else if ((value.slice(value.length - 15, value.length - 14) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 14, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 15, value.length), cubeRootValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());

    }
    else if ((value.slice(value.length - 16, value.length - 15) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 15, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 16, value.length), cubeRootValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());

    }


    // for Rad



    else if (valueEntered === 'Rad') {
        let multiply = Math.PI / 180;
        calculateTextSci += `${multiply}*`;
        showTextSci.innerHTML += 'Rad ';
    }



    // for %


    else if (valueEntered === '%') {
        calculateTextSci += '/100';
        showTextSci.innerHTML += '%';
    }


    // for 2^x
    else if (valueEntered === '2^x') {
        calculateTextSci += '2**';
        showTextSci.innerHTML += '2^';
    }


    //for x^3

    else if (valueEntered === 'x^3') {
        calculateTextSci += '**3';
        showTextSci.innerHTML += '^3';
    }


    
    // for x!


    else if (valueEntered === 'x!') {
        calculateTextSci += '!';
        showTextSci.innerHTML += '!';
    }
    else if ((value.slice(value.length - 1, value.length) === '!') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/') && ((value.slice(value.length - 3, value.length-2) === '*') || (value.slice(value.length - 3, value.length-2) === '-') || (value.slice(value.length - 3, value.length-2) === '+') || (value.slice(value.length - 3, value.length-2) === '/') || (value.slice(value.length - 3, value.length-2) === ''))) {

        let factValue = factorialize(value.slice(value.length - 2, value.length-1));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 2, value.length), factValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
        console.log(calculateTextSci);
    }
    else if ((value.slice(value.length - 1, value.length) === '!') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/') && ((value.slice(value.length - 4, value.length-3) === '*') || (value.slice(value.length - 4, value.length-3) === '-') || (value.slice(value.length - 4, value.length-3) === '+') || (value.slice(value.length - 4, value.length-3) === '/') || (value.slice(value.length - 4, value.length-3) === ''))) {

        let factValue = factorialize(value.slice(value.length - 3, value.length-1));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 3, value.length), factValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
        console.log(calculateTextSci);
    }
    else if ((value.slice(value.length - 1, value.length) === '!') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/') && ((value.slice(value.length - 5, value.length-4) === '*') || (value.slice(value.length - 5, value.length-4) === '-') || (value.slice(value.length - 5, value.length-4) === '+') || (value.slice(value.length - 5, value.length-4) === '/') || (value.slice(value.length - 5, value.length-4) === ''))) {

        let factValue = factorialize(value.slice(value.length - 4, value.length-1));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), factValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }
    else if ((value.slice(value.length - 1, value.length) === '!') && (valueEntered === '*' || valueEntered === '-' || valueEntered === '+' || valueEntered === '/') && ((value.slice(value.length - 6, value.length-5) === '*') || (value.slice(value.length - 6, value.length-5) === '-') || (value.slice(value.length - 6, value.length-5) === '+') || (value.slice(value.length - 6, value.length-5) === '/') || (value.slice(value.length - 6, value.length-5) === ''))) {

        let factValue = factorialize(value.slice(value.length - 5, value.length-1));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), factValue);
        calculateTextSci += (e.target.innerHTML.trim());
        showTextSci.innerHTML += (e.target.innerHTML.trim());
    }




    else {
        showTextSci.innerHTML += (e.target.innerHTML.trim());
        calculateTextSci += (e.target.innerHTML.trim());
    }
}

function calculateValSci() {

    // for sin 
    let value = calculateTextSci;
    // console.log(value);
    // console.log(typeof (value));

    if ((value.slice(value.length - 4, value.length - 1) === 'sin')) {

        let sinValue = Math.sin(value.slice(value.length - 1, value.length) * Math.PI / 180);
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), sinValue);
    }
    else if ((value.slice(value.length - 5, value.length - 2) === 'sin')) {

        let sinValue = Math.sin(value.slice(value.length - 2, value.length) * Math.PI / 180);
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), sinValue);
        // console.log(calculateTextSci);
    }
    else if ((value.slice(value.length - 6, value.length - 3) === 'sin')) {

        let sinValue = Math.sin(value.slice(value.length - 3, value.length) * Math.PI / 180);
        if (value.slice(value.length - 3, value.length) == 180 || value.slice(value.length - 3, value.length) == 360) {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), '0');
        } else {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), sinValue);
        }
    }

    //for cos

    else if ((value.slice(value.length - 4, value.length - 1) === 'cos')) {

        let cosValue = Math.cos(value.slice(value.length - 1, value.length) * Math.PI / 180);
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), cosValue);
    }
    else if ((value.slice(value.length - 5, value.length - 2) === 'cos')) {

        let cosValue = Math.cos(value.slice(value.length - 2, value.length) * Math.PI / 180);
        if (value.slice(value.length - 2, value.length) == 90) {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), 0);
        } else {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), cosValue);
        }
        // console.log(calculateTextSci);
    }
    else if ((value.slice(value.length - 6, value.length - 3) === 'cos')) {

        let cosValue = Math.cos(value.slice(value.length - 3, value.length) * Math.PI / 180);
        if (value.slice(value.length - 3, value.length) == 270) {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), 0);
        } else {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), cosValue);
        }
    }



    //for tan


    else if ((value.slice(value.length - 4, value.length - 1) === 'tan')) {

        let tanValue = Math.tan(value.slice(value.length - 1, value.length) * Math.PI / 180);
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), tanValue);
    }
    else if ((value.slice(value.length - 5, value.length - 2) === 'tan')) {

        let tanValue = Math.tan(value.slice(value.length - 2, value.length) * Math.PI / 180);
        if (value.slice(value.length - 2, value.length) == 90) {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), 'undefined');
        } else if (value.slice(value.length - 2, value.length) == 45) {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), '1');
        } else {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), tanValue);
        }
    }
    else if ((value.slice(value.length - 6, value.length - 3) === 'tan')) {

        let tanValue = Math.tan(value.slice(value.length - 3, value.length) * Math.PI / 180);
        if (value.slice(value.length - 3, value.length) == 180 || value.slice(value.length - 3, value.length) == 360) {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), '0');
        } else if (value.slice(value.length - 3, value.length) == 270) {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), 'undefined');
        } else if (value.slice(value.length - 3, value.length) == 225) {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), '1');
        } else {
            calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), tanValue);
        }
    }



    // for e^x


    else if ((value.slice(value.length - 2, value.length - 1) === 'e')) {

        let eValue = Math.pow(2.718281828459045, value.slice(value.length - 1, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 2, value.length), eValue);
    }
    else if ((value.slice(value.length - 3, value.length - 2) === 'e')) {

        let eValue = Math.pow(2.718281828459045, value.slice(value.length - 2, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 3, value.length), eValue);
    }
    else if ((value.slice(value.length - 4, value.length - 3) === 'e')) {

        let eValue = Math.pow(2.718281828459045, value.slice(value.length - 3, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), eValue);
    }
    else if ((value.slice(value.length - 5, value.length - 4) === 'e')) {

        let eValue = Math.pow(2.718281828459045, value.slice(value.length - 4, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), eValue);
    }
    else if ((value.slice(value.length - 6, value.length - 5) === 'e')) {

        let eValue = Math.pow(2.718281828459045, value.slice(value.length - 5, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), eValue);
    }
    else if ((value.slice(value.length - 7, value.length - 6) === 'e')) {

        let eValue = Math.pow(2.718281828459045, value.slice(value.length - 6, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 7, value.length), eValue);
    }


    // for log



    else if ((value.slice(value.length - 4, value.length - 1) === 'log')) {

        let logValue = Math.log10(value.slice(value.length - 1, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), logValue);
    }
    else if ((value.slice(value.length - 5, value.length - 2) === 'log')) {

        let logValue = Math.log10(value.slice(value.length - 2, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), logValue);
    }
    else if ((value.slice(value.length - 6, value.length - 3) === 'log')) {

        let logValue = Math.log10(value.slice(value.length - 3, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), logValue);
    }
    else if ((value.slice(value.length - 7, value.length - 4) === 'log')) {

        let logValue = Math.log10(value.slice(value.length - 4, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 7, value.length), logValue);
    }
    else if ((value.slice(value.length - 8, value.length - 5) === 'log')) {

        let logValue = Math.log10(value.slice(value.length - 5, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 8, value.length), logValue);
    }
    else if ((value.slice(value.length - 9, value.length - 6) === 'log')) {

        let logValue = Math.log10(value.slice(value.length - 6, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 9, value.length), logValue);
    }
    else if ((value.slice(value.length - 10, value.length - 7) === 'log')) {

        let logValue = Math.log10(value.slice(value.length - 7, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 10, value.length), logValue);
    }
    else if ((value.slice(value.length - 11, value.length - 8) === 'log')) {

        let logValue = Math.log10(value.slice(value.length - 8, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 11, value.length), logValue);
    }
    else if ((value.slice(value.length - 12, value.length - 9) === 'log')) {

        let logValue = Math.log10(value.slice(value.length - 9, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 12, value.length), logValue);
    }
    else if ((value.slice(value.length - 13, value.length - 10) === 'log')) {

        let logValue = Math.log10(value.slice(value.length - 10, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 13, value.length), logValue);
    }
    else if ((value.slice(value.length - 14, value.length - 11) === 'log')) {

        let logValue = Math.log10(value.slice(value.length - 11, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 14, value.length), logValue);
    }
    else if ((value.slice(value.length - 15, value.length - 12) === 'log')) {

        let logValue = Math.log10(value.slice(value.length - 12, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 15, value.length), logValue);
    }
    else if ((value.slice(value.length - 16, value.length - 13) === 'log')) {

        let logValue = Math.log10(value.slice(value.length - 13, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 16, value.length), logValue);
    }
    else if ((value.slice(value.length - 17, value.length - 14) === 'log')) {

        let logValue = Math.log10(value.slice(value.length - 14, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 17, value.length), logValue);
    }
    else if ((value.slice(value.length - 18, value.length - 15) === 'log')) {

        let logValue = Math.log10(value.slice(value.length - 15, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 18, value.length), logValue);
    }




    // for ln



    else if ((value.slice(value.length - 3, value.length - 1) === 'ln')) {

        let lnValue = Math.log(value.slice(value.length - 1, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 3, value.length), lnValue);
    }
    else if ((value.slice(value.length - 4, value.length - 2) === 'ln')) {

        let lnValue = Math.log(value.slice(value.length - 2, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), lnValue);
    }
    else if ((value.slice(value.length - 5, value.length - 3) === 'ln')) {

        let lnValue = Math.log(value.slice(value.length - 3, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), lnValue);
    }
    else if ((value.slice(value.length - 6, value.length - 4) === 'ln')) {

        let lnValue = Math.log(value.slice(value.length - 4, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), lnValue);
    }
    else if ((value.slice(value.length - 7, value.length - 5) === 'ln')) {

        let lnValue = Math.log(value.slice(value.length - 5, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 7, value.length), lnValue);
    }
    else if ((value.slice(value.length - 8, value.length - 6) === 'ln')) {

        let lnValue = Math.log(value.slice(value.length - 6, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 8, value.length), lnValue);
    }
    else if ((value.slice(value.length - 9, value.length - 7) === 'ln')) {

        let lnValue = Math.log(value.slice(value.length - 7, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 9, value.length), lnValue);
    }
    else if ((value.slice(value.length - 10, value.length - 8) === 'ln')) {

        let lnValue = Math.log(value.slice(value.length - 8, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 10, value.length), lnValue);
    }
    else if ((value.slice(value.length - 11, value.length - 9) === 'ln')) {

        let lnValue = Math.log(value.slice(value.length - 9, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 11, value.length), lnValue);
    }
    else if ((value.slice(value.length - 12, value.length - 10) === 'ln')) {

        let lnValue = Math.log(value.slice(value.length - 10, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 12, value.length), lnValue);
    }
    else if ((value.slice(value.length - 13, value.length - 11) === 'ln')) {

        let lnValue = Math.log(value.slice(value.length - 11, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 13, value.length), lnValue);
    }
    else if ((value.slice(value.length - 14, value.length - 12) === 'ln')) {

        let lnValue = Math.log(value.slice(value.length - 12, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 14, value.length), lnValue);
    }
    else if ((value.slice(value.length - 15, value.length - 13) === 'ln')) {

        let lnValue = Math.log(value.slice(value.length - 13, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 15, value.length), lnValue);
    }
    else if ((value.slice(value.length - 16, value.length - 14) === 'ln')) {

        let lnValue = Math.log(value.slice(value.length - 14, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 16, value.length), lnValue);
    }
    else if ((value.slice(value.length - 17, value.length - 15) === 'ln')) {

        let lnValue = Math.log(value.slice(value.length - 15, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 17, value.length), lnValue);
    }


    //for |x|


    else if ((value.slice(value.length - 3, value.length - 2) === '|')) {

        let absValue = Math.abs(value.slice(value.length - 2, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 3, value.length), absValue);


    }
    else if ((value.slice(value.length - 4, value.length - 3) === '|')) {

        let absValue = Math.abs(value.slice(value.length - 3, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), absValue);


    }
    else if ((value.slice(value.length - 5, value.length - 4) === '|')) {

        let absValue = Math.abs(value.slice(value.length - 4, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), absValue);


    }
    else if ((value.slice(value.length - 6, value.length - 5) === '|')) {

        let absValue = Math.abs(value.slice(value.length - 5, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), absValue);


    }
    else if ((value.slice(value.length - 7, value.length - 6) === '|')) {

        let absValue = Math.abs(value.slice(value.length - 6, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 7, value.length), absValue);


    }
    else if ((value.slice(value.length - 8, value.length - 7) === '|')) {

        let absValue = Math.abs(value.slice(value.length - 7, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 8, value.length), absValue);


    }
    else if ((value.slice(value.length - 9, value.length - 8) === '|')) {

        let absValue = Math.abs(value.slice(value.length - 8, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 9, value.length), absValue);


    }
    else if ((value.slice(value.length - 10, value.length - 9) === '|')) {

        let absValue = Math.abs(value.slice(value.length - 9, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 10, value.length), absValue);


    }
    else if ((value.slice(value.length - 11, value.length - 10) === '|')) {

        let absValue = Math.abs(value.slice(value.length - 10, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 11, value.length), absValue);


    }
    else if ((value.slice(value.length - 12, value.length - 11) === '|')) {

        let absValue = Math.abs(value.slice(value.length - 11, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 12, value.length), absValue);


    }
    else if ((value.slice(value.length - 13, value.length - 12) === '|')) {

        let absValue = Math.abs(value.slice(value.length - 12, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 13, value.length), absValue);


    }
    else if ((value.slice(value.length - 14, value.length - 13) === '|')) {

        let absValue = Math.abs(value.slice(value.length - 13, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 14, value.length), absValue);


    }
    else if ((value.slice(value.length - 15, value.length - 14) === '|')) {

        let absValue = Math.abs(value.slice(value.length - 14, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 15, value.length), absValue);


    }
    else if ((value.slice(value.length - 16, value.length - 15) === '|')) {

        let absValue = Math.abs(value.slice(value.length - 15, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 16, value.length), absValue);


    }
    else if ((value.slice(value.length - 17, value.length - 16) === '|')) {

        let absValue = Math.abs(value.slice(value.length - 16, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 17, value.length), absValue);


    }


    // for square root


    else if ((value.slice(value.length - 2, value.length - 1) === '√')) {

        let squareValue = Math.sqrt(value.slice(value.length - 1, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 2, value.length), squareValue);


    }
    else if ((value.slice(value.length - 3, value.length - 2) === '√')) {

        let squareValue = Math.sqrt(value.slice(value.length - 2, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 3, value.length), squareValue);


        // console.log(calculateTextSci);
    }
    else if ((value.slice(value.length - 4, value.length - 3) === '√')) {

        let squareValue = Math.sqrt(value.slice(value.length - 3, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), squareValue);


    }
    else if ((value.slice(value.length - 5, value.length - 4) === '√')) {

        let squareValue = Math.sqrt(value.slice(value.length - 4, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), squareValue);


    }
    else if ((value.slice(value.length - 6, value.length - 5) === '√')) {

        let squareValue = Math.sqrt(value.slice(value.length - 5, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), squareValue);


    }
    else if ((value.slice(value.length - 7, value.length - 6) === '√')) {

        let squareValue = Math.sqrt(value.slice(value.length - 6, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 7, value.length), squareValue);


    }
    else if ((value.slice(value.length - 8, value.length - 7) === '√')) {

        let squareValue = Math.sqrt(value.slice(value.length - 7, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 8, value.length), squareValue);


    }
    else if ((value.slice(value.length - 9, value.length - 8) === '√')) {

        let squareValue = Math.sqrt(value.slice(value.length - 8, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 9, value.length), squareValue);


    }
    else if ((value.slice(value.length - 10, value.length - 9) === '√')) {

        let squareValue = Math.sqrt(value.slice(value.length - 9, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 10, value.length), squareValue);


    }
    else if ((value.slice(value.length - 11, value.length - 10) === '√')) {

        let squareValue = Math.sqrt(value.slice(value.length - 10, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 11, value.length), squareValue);


    }
    else if ((value.slice(value.length - 12, value.length - 11) === '√')) {

        let squareValue = Math.sqrt(value.slice(value.length - 11, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 12, value.length), squareValue);


    }
    else if ((value.slice(value.length - 13, value.length - 12) === '√')) {

        let squareValue = Math.sqrt(value.slice(value.length - 12, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 13, value.length), squareValue);


    }
    else if ((value.slice(value.length - 14, value.length - 13) === '√')) {

        let squareValue = Math.sqrt(value.slice(value.length - 13, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 14, value.length), squareValue);


    }
    else if ((value.slice(value.length - 15, value.length - 14) === '√')) {

        let squareValue = Math.sqrt(value.slice(value.length - 14, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 15, value.length), squareValue);


    }
    else if ((value.slice(value.length - 16, value.length - 15) === '√')) {

        let squareValue = Math.sqrt(value.slice(value.length - 15, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 16, value.length), squareValue);


    }



    // for cube root


    else if ((value.slice(value.length - 5, value.length - 1) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 1, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), cubeRootValue);
        // console.log(calculateTextSci);


    }
    else if ((value.slice(value.length - 6, value.length - 2) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 2, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), cubeRootValue);


        console.log(calculateTextSci);
        console.log(cubeRootValue);

    }
    else if ((value.slice(value.length - 4, value.length - 3) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 3, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), cubeRootValue);


    }
    else if ((value.slice(value.length - 5, value.length - 4) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 4, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), cubeRootValue);


    }
    else if ((value.slice(value.length - 6, value.length - 5) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 5, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 6, value.length), cubeRootValue);


    }
    else if ((value.slice(value.length - 7, value.length - 6) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 6, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 7, value.length), cubeRootValue);


    }
    else if ((value.slice(value.length - 8, value.length - 7) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 7, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 8, value.length), cubeRootValue);


    }
    else if ((value.slice(value.length - 9, value.length - 8) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 8, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 9, value.length), cubeRootValue);


    }
    else if ((value.slice(value.length - 10, value.length - 9) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 9, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 10, value.length), cubeRootValue);


    }
    else if ((value.slice(value.length - 11, value.length - 10) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 10, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 11, value.length), cubeRootValue);


    }
    else if ((value.slice(value.length - 12, value.length - 11) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 11, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 12, value.length), cubeRootValue);


    }
    else if ((value.slice(value.length - 13, value.length - 12) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 12, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 13, value.length), cubeRootValue);


    }
    else if ((value.slice(value.length - 14, value.length - 13) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 13, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 14, value.length), cubeRootValue);


    }
    else if ((value.slice(value.length - 15, value.length - 14) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 14, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 15, value.length), cubeRootValue);


    }
    else if ((value.slice(value.length - 16, value.length - 15) === 'cbrt')) {

        let cubeRootValue = Math.cbrt(value.slice(value.length - 15, value.length));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 16, value.length), cubeRootValue);


    }


    // for x!


    else if ((value.slice(value.length - 1, value.length) === '!') && ((value.slice(value.length - 3, value.length-2) === '*') || (value.slice(value.length - 3, value.length-2) === '-') || (value.slice(value.length - 3, value.length-2) === '+') || (value.slice(value.length - 3, value.length-2) === '/') || (value.slice(value.length - 3, value.length-2) === ''))) {

        let factValue = factorialize(value.slice(value.length - 2, value.length-1));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 2, value.length), factValue);
    }
    else if ((value.slice(value.length - 1, value.length) === '!') && ((value.slice(value.length - 4, value.length-3) === '*') || (value.slice(value.length - 4, value.length-3) === '-') || (value.slice(value.length - 4, value.length-3) === '+') || (value.slice(value.length - 4, value.length-3) === '/') || (value.slice(value.length - 4, value.length-3) === ''))) {

        let factValue = factorialize(value.slice(value.length - 3, value.length-1));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 3, value.length), factValue);
    }
    else if ((value.slice(value.length - 1, value.length) === '!') && ((value.slice(value.length - 5, value.length-4) === '*') || (value.slice(value.length - 5, value.length-4) === '-') || (value.slice(value.length - 5, value.length-4) === '+') || (value.slice(value.length - 5, value.length-4) === '/') || (value.slice(value.length - 5, value.length-4) === ''))) {

        let factValue = factorialize(value.slice(value.length - 4, value.length-1));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 4, value.length), factValue);
    }
    else if ((value.slice(value.length - 1, value.length) === '!') && ((value.slice(value.length - 6, value.length-5) === '*') || (value.slice(value.length - 6, value.length-5) === '-') || (value.slice(value.length - 6, value.length-5) === '+') || (value.slice(value.length - 6, value.length-5) === '/') || (value.slice(value.length - 6, value.length-5) === ''))) {

        let factValue = factorialize(value.slice(value.length - 5, value.length-1));
        calculateTextSci = calculateTextSci.replace(value.slice(value.length - 5, value.length), factValue);
    }






    function isFloat(n) {
        return Number(n) === n && n % 1 !== 0;
    }

    try {
        if (!isFloat(eval(calculateTextSci))) {
            showTextSci.innerHTML = eval(calculateTextSci);
        } else {
            showTextSci.innerHTML = eval(calculateTextSci).toPrecision(5);
        }
    }
    catch (err) {
        showTextSci.innerHTML = 'Calculator limit exceeded'.toUpperCase();
        showTextSci.classList.add('alertt');
        setTimeout(() => {
            showTextSci.classList.remove('alertt');
            showTextSci.innerHTML = '';
        }, 1500)
        console.log(err);
    }

    // console.log(value.slice(value.length - 1, value.length));

    // showTextSci.innerHTML = eval(calculateTextSci);
}

function clearTextSci() {
    showTextSci.innerHTML = '';
    calculateTextSci = '';
}

function clearOneTextSci() {
    showTextSci.innerHTML = showTextSci.innerHTML.slice(0, showTextSci.innerHTML.length - 1);
    calculateTextSci = calculateTextSci.slice(0, calculateTextSci.length - 1);
}


function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}