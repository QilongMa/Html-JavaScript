var target;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;
function do_game(){
    var random_number = Math.random() * 100;
    target = Math.floor(random_number) + 1;
    while(!finished){
        guess_input_text = prompt("Enter a guess number: " + "in range of 1 to 100.");
        guess_input = parseInt(guess_input_text);
        guesses += 1;
        finished = check_guess();
    }
}
function check_guess(){
    if(isNaN(guess_input)){
        alert("Must be a number!");
        return false;
    }
    else if(guess_input < 1 || guess_input > 100){
        alert("Out of range!");
        return false;
    }
    else{
        if(guess_input > target){
            alert("Your guess is too large..");
            return false;
        }
        if(guess_input < target){
            alert("Your guess is too small..");
            return false;
        }
        alert("OMG, you ass holee got it, the target is " + target + " !");
        alert("You use "+ guesses +" guesses!")
        return true;
    }
}
