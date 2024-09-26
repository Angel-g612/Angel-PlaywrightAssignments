function gradeCalculation(studentScore) {

    switch (true) {
        case studentScore >=90:
            console.log("The student has got more than 90 marks a he has got a O Grade");
            break;
        case studentScore >=80:
            console.log("The student has secured more than 80 marks and he has got a A Grade");
            break;
        case studentScore >=70:
            console.log("The student has secured more than 70 marks and he has got a B Grade");
            break;
        case studentScore >=60:
            console.log("The student has secured more than 60 amrks and he got a C Grade");
            break;
        case studentScore >=50:
            console.log("The student has secured more than 50 marks and he has got a D Grade");
            break;
        default:
            console.log("The student has scored less than 50 and secured a E Grade");
            break;
    }
    
}
let studentScore =80;
gradeCalculation(studentScore);


