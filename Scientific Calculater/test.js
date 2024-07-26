if (count % 2 == 0) {
    test[7].innerHTML = 'sin⁻¹';
    test[8].innerHTML = 'cos⁻¹';
    test[9].innerHTML = 'tan⁻¹';
    test[14].innerHTML = 'sinh';
    test[15].innerHTML = 'cosh';
    test[16].innerHTML = 'tanh';
    test[21].innerHTML = 'sinh⁻¹';
    test[22].innerHTML = 'cosh⁻¹';
    test[23].innerHTML = 'tanh⁻¹';
    test[28].innerHTML = '2^x';
    test[29].innerHTML = 'x^3';
    test[30].innerHTML = 'x!';



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
}