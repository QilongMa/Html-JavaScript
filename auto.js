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
var mark = 'X';
var cnt1 = 0, cnt2 = 0;
var flag = true;
var player = 'A';
var arr1 = [];
var arr2 = [];

function Restart() {
    arr1 = [];
    arr2 = [];
    flag = true;
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
//$(document).ready(function () {
//    $('#board').find('#gameTable td').on('click', function () {
//        if ($(this).text() !== '') {
//            alert('Cell Occupied!');
//            return;
//        }
//        var cur = playerA ? 'X' : 'O';
//        playerA = playerA ? false : true;
//        cur == 'X' ? placeAndCheck(queue_X, cur, this) : placeAndCheck(queue_O, cur, this);       
//    });


//    function placeAndCheck(q, sym, con) {
//        if (q.length >= 3) {
//            var cur = q.shift();
//            $(cur).text('');
//        }
//        q.push(con);
//        $(con).text(sym);
//        if (q.length == 3) {
//            checkWin();
//        }
//    }

$(document).ready(function () {
    $("#Gametable").find("td").on("click", function () {        
        if ($(this).html() == '') {
            player = (flag ? 'A' : 'B');
            mark = (flag ? 'X' : 'O');
            flag = (flag ? false : true);
            
            place(player, mark, this);            
        }        
    });
    function place(player, mark, obj) {
        if (mark == 'X') {
            arr1.push(obj);
            $(obj).html(mark);
            if (arr1.length > 3) {
                var tmp = arr1.shift();
                $(tmp).text('');
            }
            if (arr1.length == 3) {
                checkwin(player);
            }
        }
        else {
            arr2.push(obj);
            $(obj).html(mark);
            if (arr2.length > 3) {
                var tmp = arr2.shift();
                $(tmp).html('');
            }
            if (arr2.length == 3) {
                checkwin(player);
            }
        }
    }

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
                return;
            }
                //left column check
            else if (idx1 === idx4 && idx1 === idx7) {
                alert('Game over! ' + Player + ' is the winner!');
                addscore(Player);
                Restart();
                return;
            }
                //left diagonal check
            else if (idx1 === idx5 && idx1 === idx9) {
                alert('Game over! ' + Player + ' is the winner!');
                addscore(Player);
                Restart();
                return;
            }
        }
        if (idx2 != '') {
            if (idx2 === idx5 && idx2 === idx8) {
                alert('Game over! ' + Player + ' is the winner!');
                addscore(Player);
                Restart();
                return;
            }
        }
        if (idx3 != '') {
            if (idx3 === idx6 && idx3 === idx9) {
                alert('Game over! ' + Player + ' is the winner!');
                addscore(Player);
                Restart();
                return;
            }
            else if (idx3 === idx5 && idx3 === idx7) {
                alert('Game over! ' + Player + ' is the winner!');
                addscore(Player);
                Restart();
                return;
            }
        }
        if (idx4 != '') {
            if (idx4 === idx5 && idx5 === idx6) {
                alert('Game over! ' + Player + ' is the winner!');
                addscore(Player);
                Restart();
                return;
            }
        }
        if (idx7 != '') {
            if (idx7 === idx8 && idx8 === idx9) {
                alert('Game over! ' + Player + ' is the winner!');
                addscore(Player);
                Restart();
                return;
            }
        }
    }
});
