function checkNumber(number){
    let sign=""
    if (number > 0){
        sign = "+";
        
    }else if(number < 0){
        sign = "-";
    }else{
        sign = "Это нуль";
    }
    let chet=""
    if (number%2==0){
        chet="Чет"
    }else{
        chet="Нечет"
    }
    console.log(sign,chet);
}
function rofloNumbers(){
    const numbers = [4, 8, 15, 16, 23, 42];
    const greaterThan10 = [];
    sumNumbers = 0;
    best = 0;
    for(let i = 0; i < numbers.length; i++){
        now = numbers[i];
        sumNumbers += numbers[i];
        if( now > 10){
            greaterThan10.push(now);
        }
        if(now > best)
        {
            best = now;
        }
    }
    const sum2 = numbers.reduce((acc,x) => acc+x,0);
    const best2 = Math.max(...numbers);
    const greaterThan10_2 = numbers.filter(x => x > 10);
    console.log(sumNumbers, best, greaterThan10);
    console.log(sum2, best2, greaterThan10_2);
}

function topGpa(){
    const goodStudents = students.filter(student => student.grade > 3);
    const students = [
        {name: "Oleg", gpa: 4.6},
        {name: "Boris", gpa: 5.0},
        {name: "Michael", gpa: 2.28},
        {name: "Yarik", gpa: 3.33}
    ];
    let sumGrades = 0;
    for(let i = 0;i < students.length;i++){
        sumGrades+= students[i].grade;
    }
    const averageGrade = sumGrades/students.length;
    
    goodStudents.forEach(student => {
        console.log(student.name, student.grade);
    });
    console.log(averageGrade)
}
const secretNumber = Math.floor(Math.random() * 10) + 1;
function checkGuess(guess, secretNumber) {
    let flag = 0;
    while(flag!=1){
        if (guess === secretNumber) {
            flag = 1
            return "Вы угадали! УРААААА 🎉";
        } else if (guess < secretNumber) {
            return "Загаданное число больше ⬆️";
        } else {
            return "Загаданное число меньше ⬇️";
        }
    }
}
