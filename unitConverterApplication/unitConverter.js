// code of binary to decimal
// let convert = document.getElementById("convert");
// convert.addEventListener("click", btod() );
function resetbtd(){
    document.getElementById("binaryNumber").value = "";
    document.getElementById('decimalNumber').innerHTML=('');
}

function btod(){
    let bin = document.getElementById("binaryNumber").value;
    let bi = Number(bin);
    binaryToDecimal(bi);
}

function binaryToDecimal(bi){
        let sum = 0;
        let c=1;
        while(bi>0){
            let b=bi%10;
            sum = sum+c*b;
            c=c*2;
            bi=Math.trunc(bi/10);
        }
        document.getElementById('decimalNumber').innerHTML=(sum);
    }


    // code of decimal to binary

    function resetdtb(){
        document.getElementById("decimalNumber1").value = "";
        document.getElementById('binaryNumber1').innerHTML=('');
    }

    function dtob(){
        let den = document.getElementById("decimalNumber1").value;
        let de = Number(den);
        decimalToBinary(de);
    }
    
    function decimalToBinary(de){
            let sum = 0;
            let c=1;
            while(de>0){
                let b=de%2;
                sum = sum+c*b;
                c=c*10;
                de=Math.trunc(de/2);
            }
            document.getElementById('binaryNumber1').innerHTML=(sum);
        }

// cm to feet
    
function resetcmtofeet(){
    document.getElementById("cm").value = "";
    document.getElementById('feet').innerHTML=('');
}

function cmtofeet(){
    let cmv = document.getElementById("cm").value;
    let cm = Number(cmv);
    cm_to_feet(cm);
}

function cm_to_feet(cm){
        let sum = 0.0328084*cm;
        document.getElementById('feet').innerHTML=(sum);
    }


// feet to cm

function resetfeettocm(){
    document.getElementById("feet1").value = "";
    document.getElementById('cm1').innerHTML=('');
}

function feettocm(){
    let feetv = document.getElementById("feet1").value;
    let feet = Number(feetv);
    feet_to_cm(feet);
}

function feet_to_cm(feet){
        let sum = feet/0.0328084;
        document.getElementById('cm1').innerHTML=(sum);
    }


// kg to lb


function resetkgtolb(){
    if(n%2!=0){

        document.getElementById("kg").value = "";
        document.getElementById('lb').innerHTML=('');
    } else{
        document.getElementById("lb1").value = "";
        document.getElementById('kg1').innerHTML=('');
    }
}

function kgtolb(){
    if(n%2!=0){

        let kgv = document.getElementById("kg").value;
        let kg = Number(kgv);
        kg_to_lb(kg);
    } else{
        let lbv = document.getElementById("lb1").value;
        let lb = Number(lbv);
        lb_to_kg(lb);
    }
}
function lb_to_kg(lb){
    let sum = lb/2.205;
    document.getElementById('kg1').innerHTML=(sum);
}
function kg_to_lb(kg){
        let sum = 2.205*kg;
        document.getElementById('lb').innerHTML=(sum);
    }


// lb to kg

let n=1;

function change()
{
    if(n%2!=0){
        document.getElementById("kg").value = "";
        document.getElementById('lb').innerHTML=('');
        document.getElementById("h1").innerHTML=('Pound(lb) To Kg');
        document.getElementById("label1").innerHTML=('Value in Pound(lb)');
        document.getElementById("label2").innerHTML=('Value in Kg');
        document.getElementById("kg").id="lb1";
        document.getElementById("lb").id="kg1";
        n++;
    } else{
        document.getElementById("lb1").value = "";
        document.getElementById('kg1').innerHTML=('');
        document.getElementById("h1").innerHTML=('Kg To Pound(lb)');
        document.getElementById("label1").innerHTML=('Value in Kg');
        document.getElementById("label2").innerHTML=('Value in Pound(lb)');
        document.getElementById("lb1").id="kg";
        document.getElementById("kg1").id="lb";
        n++;
    }
}
