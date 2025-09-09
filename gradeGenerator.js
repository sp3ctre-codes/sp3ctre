function gradeGenerator(marks) {
    if (marks>100 || marks<0){
        return "Invalid marks. Plaese enter a number between 0 and 100.";
    }else if (marks>79){
        return "A."
    }else if (marks>=60){
        return "B."
    }else if (marks>=49){
        return "C."
    }else if (marks>=40){
        return "D."
    }else{
        return "E."
    }
}

console.log(gradeGenerator(20)); //output E
console.log(gradeGenerator(46)); //output D
console.log(gradeGenerator(50)); //output C
console.log(gradeGenerator(63)); //output B
console.log(gradeGenerator(85)); //output A

                // Explanation

//functions allows the reuse of a code e.g "function gradegenerator(marks){...}"
//validation "if (marks > 100 || marks < 0){ return "invalid marks..." - Ensure input is in btwn 0 -> 100
//else, if and else if - are used to check conditons
//return - sends back the result to from the function so you can use it
//console.log() - is used to display the results