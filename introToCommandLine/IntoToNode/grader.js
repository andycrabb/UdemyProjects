var scores = [90, 98, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 72, 63, 95, 49];
var sum = 0;

function average(arr){
    var total = 0;
    arr.forEach(function(score){
    total += score;
    });
    var avg = total/arr.length;
    return Math.round(avg);
    
}
    
average(scores);
console.log("This was the average score for Maths: " + average(scores));
average(scores2);
console.log("This was the average score for Science: " + average(scores2));