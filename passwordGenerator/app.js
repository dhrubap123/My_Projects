class password {
    constructor(length) {
        this.numbers = ['0', '4', '2', '5', '8', '3', '6', '9', '1', '7'];
        this.alphabets = ['q', 'w', 'e', 'r', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 't', 'y', 'u', 'i', 'O', 'P', 'A', 'S', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'V', 'B', 'N', 'M'];
        this.specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '/']
        this.generateLen(length)
    }
    generateLen(length) {
        // all 3
        this.alpha = Math.abs(Math.floor(Math.random() * 10 - 2)) + 1;
        this.num = Math.abs(Math.floor((length - this.alpha) / 2));
        this.special = length - (this.alpha + this.num);
        this.salpha = Math.floor(Math.random() * 100);
        this.snum = Math.floor(Math.random() * 10);
        this.sspe = Math.floor(Math.random() * 10);
        console.log(this.alpha)
        console.log(this.num)
        console.log(this.special)

        // 2
        this.num1 = length - this.alpha;
        this.special1 = length - this.alpha;
        this.num2 = Math.abs(Math.floor(Math.random() * 10 - 2)) + 1;
        this.special2 = length - this.num2;
    }
    generateAll(length) {
        if (length <= 2) {
            let alert = document.createElement("div")
            alert.innerHTML = `
            <p style="margin-top:9px;color:whitesmoke;font-size:1rem;padding:9px;background-color:red;box-shadow:0 0 3px red">Can't generate ! Password length must be >= 3</p>
        `
            document.getElementById("mb").append(alert)
            setTimeout(() => {
                alert.remove()
            }, 2000)
            return ""
        }
        else {

            while (this.alpha <= 0 || this.num <= 0 || this.special <= 0) {
                this.generateLen(length)
            }
            let passcode = "";

            for (let i = this.salpha; i < this.salpha + this.alpha; i++) {
                passcode = passcode + this.alphabets[i % 51];
            }
            for (let i = this.snum; i < this.snum + this.num; i++) {
                passcode = passcode + this.numbers[i % 9];
                console.log(this.numbers[i])
            }
            for (let i = this.sspe; i < this.sspe + this.special; i++) {
                passcode = passcode + this.specialCharacters[i % 9];
            }
            return passcode;
        }
    }

    generateNumSpe(length){
        if (length <= 2) {
            let alert = document.createElement("div")
            alert.innerHTML = `
            <p style="margin-top:9px;color:whitesmoke;font-size:1rem;padding:9px;background-color:red;box-shadow:0 0 3px red">Can't generate ! Password length must be >= 3</p>
        `
            document.getElementById("mb").append(alert)
            setTimeout(() => {
                alert.remove()
            }, 2000)
            return ""
        }
        else {

            while (this.num2 <= 0 || this.special2 <= 0) {
                this.generateLen(length)
            }
            let passcode = "";

            for (let i = this.snum; i < this.snum + this.num2; i++) {
                passcode = passcode + this.numbers[i % 9];
                console.log(this.numbers[i])
            }
            for (let i = this.sspe; i < this.sspe + this.special2; i++) {
                passcode = passcode + this.specialCharacters[i % 9];
            }
            return passcode;
        }
    }
    generateAlphaSpe(length){
        if (length <= 2) {
            let alert = document.createElement("div")
            alert.innerHTML = `
            <p style="margin-top:9px;color:whitesmoke;font-size:1rem;padding:9px;background-color:red;box-shadow:0 0 3px red">Can't generate ! Password length must be >= 3</p>
        `
            document.getElementById("mb").append(alert)
            setTimeout(() => {
                alert.remove()
            }, 2000)
            return ""
        }
        else {

            while (this.alpha <= 0 || this.special1 <= 0) {
                this.generateLen(length)
            }
            let passcode = "";

            for (let i = this.salpha; i < this.salpha + this.alpha; i++) {
                passcode = passcode + this.alphabets[i % 51];
            }
            for (let i = this.sspe; i < this.sspe + this.special1; i++) {
                passcode = passcode + this.specialCharacters[i % 9];
            }
            return passcode;
        }
    }
    generateAlphaNum(length){
        if (length <= 2) {
            let alert = document.createElement("div")
            alert.innerHTML = `
            <p style="margin-top:9px;color:whitesmoke;font-size:1rem;padding:9px;background-color:red;box-shadow:0 0 3px red">Can't generate ! Password length must be >= 3</p>
        `
            document.getElementById("mb").append(alert)
            setTimeout(() => {
                alert.remove()
            }, 2000)
            return ""
        }
        else {

            while (this.alpha <= 0 || this.num1 <= 0) {
                this.generateLen(length)
            }
            let passcode = "";

            for (let i = this.salpha; i < this.salpha + this.alpha; i++) {
                passcode = passcode + this.alphabets[i % 51];
            }
            for (let i = this.snum; i < this.snum + this.num1; i++) {
                passcode = passcode + this.numbers[i % 9];
                console.log(this.numbers[i])
            }
            return passcode;
        }
    }
    generateNum(length){
        if (length <= 2) {
            let alert = document.createElement("div")
            alert.innerHTML = `
            <p style="margin-top:9px;color:whitesmoke;font-size:1rem;padding:9px;background-color:red;box-shadow:0 0 3px red">Can't generate ! Password length must be >= 3</p>
        `
            document.getElementById("mb").append(alert)
            setTimeout(() => {
                alert.remove()
            }, 2000)
            return ""
        }
        else {
            let passcode = "";

            for (let i = this.snum; i < this.snum+length; i++) {
                passcode = passcode + this.numbers[i % 9];
                console.log(this.numbers[i])
            }
            return passcode;
    }
    }
    generateSpe(length){
        if (length <= 2) {
            let alert = document.createElement("div")
            alert.innerHTML = `
            <p style="margin-top:9px;color:whitesmoke;font-size:1rem;padding:9px;background-color:red;box-shadow:0 0 3px red">Can't generate ! Password length must be >= 3</p>
        `
            document.getElementById("mb").append(alert)
            setTimeout(() => {
                alert.remove()
            }, 2000)
            return ""
        }
        else {
            let passcode = "";

            for (let i = this.sspe; i < this.sspe + length; i++) {
                passcode = passcode + this.specialCharacters[i % 9];
            }
            return passcode;
    }
    }
    generateAlpha(length){
        if (length <= 2) {
            let alert = document.createElement("div")
            alert.innerHTML = `
            <p style="margin-top:9px;color:whitesmoke;font-size:1rem;padding:9px;background-color:red;box-shadow:0 0 3px red">Can't generate ! Password length must be >= 3</p>
        `
            document.getElementById("mb").append(alert)
            setTimeout(() => {
                alert.remove()
            }, 2000)
            return ""
        }
        else {
            let passcode = "";

            for (let i = this.salpha; i < this.salpha + length; i++) {
                passcode = passcode + this.alphabets[i % 51];
            }
            return passcode;
    }
    }
}



// console.log(p.alpha,p.num,p.special)
// console.log(p.alpha,p.num1)
// console.log(p.alpha,p.special1)
// console.log(p.num2,p.special2)



// code for password generation
const generatePassword = () => {
    const ch1 = document.getElementById("numericChecked").checked
    const ch2 = document.getElementById("specialCharactersChecked").checked
    const ch3 = document.getElementById("alphabetsChecked").checked
    const len = document.getElementById("len").value
    // console.log(ch1,ch2,ch3)
    if (ch1 && ch2 && ch3) {
        let p = new password(Number(len))
        // console.log(p.generateAll(Number(len)))
        document.getElementById("show").value = p.generateAll(Number(len))
    }
    else if(ch1 && ch2){
        let p = new password(Number(len))
        // console.log(p.generateAll(Number(len)))
        document.getElementById("show").value = p.generateNumSpe(Number(len))
    }
    else if(ch2 && ch3){
        let p = new password(Number(len))
        // console.log(p.generateAll(Number(len)))
        document.getElementById("show").value = p.generateAlphaSpe(Number(len))
    }
    else if(ch1 && ch3){
        let p = new password(Number(len))
        // console.log(p.generateAll(Number(len)))
        document.getElementById("show").value = p.generateAlphaNum(Number(len))
    }
    else if(ch1){
        let p = new password(Number(len))
        // console.log(p.generateAll(Number(len)))
        document.getElementById("show").value = p.generateNum(Number(len))
    }
    else if(ch2){
        let p = new password(Number(len))
        // console.log(p.generateAll(Number(len)))
        document.getElementById("show").value = p.generateSpe(Number(len))
    }
    else if(ch3){
        let p = new password(Number(len))
        // console.log(p.generateAll(Number(len)))
        document.getElementById("show").value = p.generateAlpha(Number(len))
    }
    else{
        let alert = document.createElement("div")
            alert.innerHTML = `
            <p style="margin-top:9px;color:whitesmoke;font-size:1rem;padding:9px;background-color:red;box-shadow:0 0 3px red">Can't generate ! Check options properly</p>
        `
            document.getElementById("mb").append(alert)
            setTimeout(() => {
                alert.remove()
            }, 2000)
            document.getElementById("show").innerHTML = ""
    }
    
}



function copy() {
    // Get the text field
    var copyText = document.getElementById("show");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
