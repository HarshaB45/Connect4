var board = [
    ["None", "None", "None", "None", "None", "None", "None"],
    ["None", "None", "None", "None", "None", "None", "None"],
    ["None", "None", "None", "None", "None", "None", "None"],
    ["None", "None", "None", "None", "None", "None", "None"],
    ["None", "None", "None", "None", "None", "None", "None"],
    ["None", "None", "None", "None", "None", "None", "None"]
];

var usedPositions = [5, 5, 5, 5, 5, 5, 5];

var player = 0;
var flag = false;
function putTokenintheColumn(column) {
    if (flag) {
        return;
    }
    var ColumnFull = document.getElementById('column-full-alert');
    ColumnFull.innerHTML = "";
    
    var row = usedPositions[column];

    if (row >= 0) {
        board[row][column] = player;
        var targetId = "h" + (row + 1) + (column + 1);
        document.getElementById(targetId).style.backgroundColor = (player ? "Yellow" : "Red");

        usedPositions[column]--;
        
        gameCheck(board, row, column, player);
        document.getElementById('player-turn').innerHTML = "Player " + (1 - player + 1) + "'s turn";
        player = 1 - player;
    } else {
        var ColumnFull = document.getElementById('column-full-alert');
        ColumnFull.innerHTML = "The column is full";
    }
}


function gameCheck(board, row, column, player) {
    console.log(board, row, column, player);

    horizontalCheck(board, row, column, player);
    verticalCheck(board, row, column, player);
    leftDiagonalCheck(board, row, column, player);
    rightDiagonalCheck(board, row, column, player);

    if(flag) {
        //console.log("Player", player + 1, "wins");
        var Playerwin = document.getElementById('player-win-alert');
        Playerwin.innerHTML = "Player " + (player + 1) + " wins";
    }
    else {
        console.log("not yet");
    }

}
function horizontalCheck(board, row, column, player) {
    //Row Check
    let leftcounter = 0; 
    let rightcounter = 0;
    
    //Left Row
    for (let i = column; i >= 0; i--) {

        if (board[row][i] == "None" || board[row][i]== (1 - player)) {
            break;
        }
        else if (board[row][i] == player) {
            leftcounter++;
        }
        console.log("Left: ", leftcounter);
    }

    //Right Row
    for (let i = column; i < 7; i++) {
        if (board[row][i] == "None" || board[row][i] == (1 - player)) {
            break;
        }
        else if (board[row][i] == player) {
           rightcounter++;
        }
        console.log("Right: ", rightcounter);
    }

    if ((leftcounter+rightcounter-1) >= 4) {
        flag = true;
    }
}


function verticalCheck(board, row, column, player) {
    //console.log(board, row, column, player );
    let downcounter = 0; 
    let upcounter = 0;
    
    //Up Column
    for (let i = row; i >= 0; i--) {
        //console.log(upcounter);
        if (board[i][column] == "None" || board[i][column]== (1 - player)) {
            break;
        }
        else if (board[i][column] == player) {
            upcounter++;                                                    
        }
        console.log("Up: ", upcounter);
        
    }
    
    //Down Column
    for (let i = row; i < 6; i++) {
        //console.log(downcounter);
        if (board[i][column] == "None" || board[i][column] == (1 - player)) {
            break;
        }
        else if (board[i][column] == player) {
            downcounter++;
        }
        console.log("Down: ", downcounter);
    }

    if ((downcounter+upcounter-1) >= 4) {
        flag = true;
    }

}
function leftDiagonalCheck(board, row, column, player) {
    let upldcounter = 0;
    let downrdcounter = 0;

    //Up Left Diagonal
    
    //while (i_upleft >= 0 || j_upleft >= 0) {
    for (let i_upleft = row, j_upleft = column; i_upleft >= 0 || j_upleft >= 0;
        i_upleft--, j_upleft--) {
        if (board[i_upleft][j_upleft] == "None" || board[i_upleft][j_upleft] == (1 - player)) {
            break;
        }
        else if (board[i_upleft][j_upleft] == player) {
            upldcounter++; 
        } 
        console.log("Up Left: ", upldcounter);
        
        
    }


    //Down Right Diagonal
    for (let i_downright = row, j_downright = column; i_downright < 6 && j_downright < 7;
        i_downright++, j_downright++) {
        if (board[i_downright][j_downright] == "None" || board[i_downright][j_downright] == (1 - player)) {
            break;
        }
        else if (board[i_downright][j_downright] == player) {
            downrdcounter++;
        }
        console.log("Down Right: ", downrdcounter);
    }

    if ((downrdcounter+upldcounter-1) >= 4) {
        flag = true;
    }
    

        
}

function rightDiagonalCheck(board, row, column, player) {
    let uprdcounter = 0;
    let downldcounter = 0;
    

    // Up Right Diagonal
    for (let i_upright = row, j_upright = column; i_upright >= 0 && j_upright < 7;
        i_upright--, j_upright++) {
        if (board[i_upright][j_upright] == "None" || board[i_upright][j_upright] == (1 - player)) {
            break;
        } 
        else if (board[i_upright][j_upright] == player) {
            uprdcounter++;
        }
        console.log("Up Right: ", uprdcounter);
    }

    // Down Left Diagonal
    for (let i_downleft = row, j_downleft = column; i_downleft < 6 && j_downleft >= 0;
        i_downleft++, j_downleft--) {
        if (board[i_downleft][j_downleft] == "None" || board[i_downleft][j_downleft] == (1 - player)) {
            break;
        } 
        else if (board[i_downleft][j_downleft] == player) {
            downldcounter++;
        }
        console.log("Down Left: ", downldcounter);
    }

    if ((downldcounter + uprdcounter - 1) >= 4) {
        flag = true;
    }

    


}





