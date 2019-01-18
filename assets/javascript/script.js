// --- SUBMIT ANSWERS --------------------------------------------- //
function submitAnswers() {
    var total = 10;
    var score = 0;

    // GET USER INPUT
    var q1 = document.forms["quizForm"] ["q1"].value;
    var q2 = document.forms["quizForm"] ["q2"].value;
    var q3 = document.forms["quizForm"] ["q3"].value;
    var q4 = document.forms["quizForm"] ["q4"].value;
    var q5 = document.forms["quizForm"] ["q5"].value;
    var q6 = document.forms["quizForm"] ["q6"].value;
    var q7 = document.forms["quizForm"] ["q7"].value;
    var q8 = document.forms["quizForm"] ["q8"].value;
    var q9 = document.forms["quizForm"] ["q9"].value;
    var q10 = document.forms["quizForm"] ["q10"].value;

    // --- VALIDATE ANSWERS
    //for (let i = 1; i <= total; i++) {
    //    if(eval ("q" + i) == null || eval("q" + i) == "") {
    //        alert ("You missed question " + i);
    //        return false;
    //    }   
    //}

    // --- SET CORRECT ANSWERS
    var answers = ["d", "b", "c", "d", "b", "a", "c", "a", "c", "d"]

    // --- CHECK ANSWERS
    for (let i = 1; i <= total; i++) {
        if(eval ("q" + i) == answers[i - 1]) {
        score++;
        }
    }

    // --- DISPLAY RESULTS
    var results = document.getElementById("results");
    results.innerHTML = "<h3>You scored "+score+" out of "+total+"<h3>";
    //alert("You Scored " +score + "out of" + total);

    return false;
}

// --- SET THE NUMBER COUNTER ------------------------------------ //
var timer = 60;
// Display timer
$("#time").html("<h2>" + timer + "</h2>");

//  Variable that will hold the interval ID when we execute the "run" function
var intervalId;

//  When the START button gets clicked, execute the run function.   
$("#startButton").on("click", run);

//  When the SUBMIT button gets clicked, run the stop function.
$("#submitButton").on("click", stop);

//  THE RUN FUNCTION sets an interval that runs the decrement function once a second. Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

// --- THE DECREMENT FUNCTION
function decrement() {

    //  Decrease number by one.
    timer--;
    //  Display timer
    $("#time").html("<h2>" + timer + "</h2>");

    //  Once number hits zero...
    if (timer === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        //alert("Time Up!");
    }
}

// --- THE STOP FUNCTION
function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}

// --- WHEN TIMER HITS ZERO -------------------------------------//
function timeEnd() {
    if (timer === 0) {
        // --- Stop submitAnswers function
        $("submitAnswers").stop();

        // ---


        // --- DISPLAY RESULTS
        var results = document.getElementById("results");
        results.innerHTML = "<h3>You scored "+score+" out of "+total+"<h3>";
        //alert("You Scored " +score + "out of" + total);

    }
}

//  --- WHEN RESET BUTTON gets clicked, execute the reset function --//   
$("#resetButton").on("click", reset);

function reset() {
    total = 10;
    score = 0;
    timer = 60;
    document.getElementById("form").reset();
    $("results").empty();

}

