function firstWord(str) {
    
    let spl = str.split(" ");
    

    return spl[0];
}

const s = prompt("Enter String:");
alert(firstWord(s));

