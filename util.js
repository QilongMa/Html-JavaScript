function Countingdown() {
    timer = setTimeout(function myfunction() {
        window.location.assign("start.html");
    }, 2000);
}

function StopCountDown() {
    clearTimeout(timer);
    document.getElementById("BtnGoGame").removeAttribute("disabled");
}

function GoToGame() {
    window.location.assign("start.html")
}
var X = 'X', O = 'O';
var cnt1 = 0, cnt2 = 0;
var player = 'A';

function Restart() {
    cnt1 = 0, cnt2 = 0;
    player = 'A';
    $("#Gametable td").html('');
}
function ClearRecord() {
    Restart();
    document.getElementById("pascore").innerHTML = '0';
    document.getElementById("pbscore").innerHTML = '0';
}

function addscore(Player) {
    var addto = (Player == 'A' ? "pascore" : "pbscore");
    document.getElementById(addto).innerHTML = parseInt(document.getElementById(addto).innerHTML, 10) + 1;
}

$(document).ready(function () {
    $("#Gametable").find("td").on("click", function () {
        if (cnt1 + cnt2 < 6) {
            if ($(this).html() == '') {
                if (cnt1 <= cnt2) {
                    $(this).html(X);
                    player = 'A';
                    cnt1++;
                    checkwin(player);                    
                }
                else {
                    $(this).text(O);
                    player = 'B';
                    cnt2++;
                    checkwin(player);                    
                }
            }
        }
        else {            
            var modify = (player == 'A' ? O : X);
            if ($(this).html() == modify) {
                player = (player == 'A' ? 'B' : 'A');
                var tmp = $(this).text();
                $(this).text('');
                if (tmp == 'X') {
                    cnt1--;
                }
                else {
                    cnt2--;
                }
            }
        }
    });
    

    function checkwin(Player) {
        var idx1 = $("#Gametable").find("#1").text(), idx2 = $("#Gametable").find("#2").text(),
            idx3 = $("#Gametable").find("#3").text(), idx4 = $("#Gametable").find("#4").text(),
            idx5 = $("#Gametable").find("#5").text(), idx6 = $("#Gametable").find("#6").text(),
            idx7 = $("#Gametable").find("#7").text(), idx8 = $("#Gametable").find("#8").text(),
            idx9 = $("#Gametable").find("#9").text();
        if (idx1 !== '') {
            if (idx1 === idx2 && idx1 === idx3) {
                alert('Game over! ' + Player + ' is the winner!');
                addscore(Player);
                Restart();                
            }
            //left column check
            else if (idx1 === idx4 && idx1 === idx7) {
                alert('Game over! ' + Player + ' is the winner!');
                addscore(Player);
                Restart();
            }
            //left diagonal check
            else if (idx1 === idx5 && idx1 === idx9) {
                alert('Game over! ' + Player + ' is the winner!');
                addscore(Player);
                Restart();
            }
        }
        if (idx2 != '') {
            if (idx2 === idx5 && idx2 === idx8) {
                alert('Game over! ' + Player + ' is the winner!');
                addscore(Player);
                Restart();
            }
        }
        if (idx3 != '') {
            if (idx3 === idx6 && idx3 === idx9) {
                alert('Game over! ' + Player + ' is the winner!');
                addscore(Player);
                Restart();
            }
            else if (idx3 === idx5 && idx3 === idx7) {
                alert('Game over! ' + Player + ' is the winner!');
                addscore(Player);
                Restart();
            }
        }
        if (idx4 != '') {
            if (idx4 === idx5 && idx5 === idx6) {
                alert('Game over! ' + Player + ' is the winner!');
                addscore(Player);
                Restart();
            }
        }
        if (idx7 != '') {
            if (idx7 === idx8 && idx8 === idx9) {
                alert('Game over! ' + Player + ' is the winner!');
                addscore(Player);
                Restart();
            }
        }
    }
});
