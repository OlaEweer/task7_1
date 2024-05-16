function MinMax() {
    const numberInput1 = parseFloat(document.getElementById('input_number1').value);
    const numberInput2 = parseFloat(document.getElementById('input_number2').value);
    const numberInput3 = parseFloat(document.getElementById('input_number3').value);

    const max = Math.max(numberInput1, numberInput2, numberInput3);
    const min = Math.min(numberInput1, numberInput2, numberInput3);
    console.log("max element = " + max);
    console.log("min element = " + min);
}

///////////////
function VowelConsonant() {
    const textData = document.getElementById('input_text').value;
    
        if (textData == 'a' || textData == 'e' || textData == 'i' || textData == 'o' || textData == 'u' || textData == 'A' || textData == 'E' || textData == 'I' || textData == 'O' || textData == 'U') {
            console.log("vowel")
        } else
            console.log("Consonant")

}
//////////////////
function multiplication() {
    const multiplication = parseFloat(document.getElementById('multiplication').value);


    for (let i = 1; i <= 12; i++) {
        console.log(multiplication * i);
    }
}


/////////////////
function between1toNumber() {
    const inputNumber = parseFloat(document.getElementById('inputNumber').value);
    for (let i = 1; i < inputNumber; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }


}
//////////////////
function result() {
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);
    const subject5 = parseFloat(document.getElementById('subject5').value);

    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const averageMarks = totalMarks / 5;
    const percentage = (totalMarks / 500) * 100;

    console.log(totalMarks);
    console.log(averageMarks);
    console.log(percentage);

}
///////////////////
function result() {
    const subject1 = parseFloat(document.getElementById('sub1').value);
    const subject2 = parseFloat(document.getElementById('sub2').value);
    const subject3 = parseFloat(document.getElementById('sub3').value);
    const subject4 = parseFloat(document.getElementById('sub4').value);
    const subject5 = parseFloat(document.getElementById('sub5').value);

    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const averageMarks = totalMarks / 5;
    const percentage = (totalMarks / 500) * 100;

    console.log(totalMarks);
    console.log(averageMarks);
    console.log(percentage);

    if (percentage >= 90) {
        console.log(" Grade A");
    } else if (percentage >= 80) {
        console.log(" Grade B");
    } else if (percentage >= 70) {
        console.log(" Grade C");
    } else if (percentage >= 60) {
        console.log(" Grade D");
    } else if (percentage >= 40) {
        console.log(" Grade E");
    } else {
        console.log(" Grade F");
    }
}