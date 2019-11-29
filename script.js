const myProblem = () => {
    var a = document.getElementById("input").value;
    if (a == 14) {
        return "Good Job!"
    } else
        return "Try Again";
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
};