
window.onload  = function(){
let ChekArray = [0,0,0,0,0,0,0,0,0]
var move = 0;
document.getElementById('tic-tac-toe').onclick = function(event){
    if(event.target.className == 'block'){
        if(move%2 == 0){
            event.target.innerHTML = 'x';
            var ID = event.target.id;
            ID=parseInt(ID);
            ChekArray[ID]=1;
        }
        else{
            event.target.innerHTML = 'O';
            var ID = event.target.id;
            ID=parseInt(ID);
            ChekArray[ID]=2;
        }
        move++;
        ChekWinner()
    }
}

 

   function ChekWinner(){
  
        if(ChekArray[0]== 1 && ChekArray[1]== 1 && ChekArray[2] == 1){
            result('Win X');
        }
        if(ChekArray[3]== 1 && ChekArray[4]== 1 && ChekArray[5] == 1){
            result('Win X');
        }
        if(ChekArray[6]== 1 && ChekArray[7]== 1 && ChekArray[8] == 1){
            result('Win X');
        }

        if(ChekArray[0]== 1 && ChekArray[3]== 1 && ChekArray[6] == 1){
            result('Win X');
        }
        if(ChekArray[1]== 1 && ChekArray[4]== 1 && ChekArray[7] == 1){
            result('Win X');
        }
        if(ChekArray[2]== 1 && ChekArray[5]== 1 && ChekArray[8] == 1){
            result('Win X');
        }

        if(ChekArray[0]== 1 && ChekArray[4]== 1 && ChekArray[8] == 1){
            result('Win X');
        }
        if(ChekArray[2]== 1 && ChekArray[4]== 1 && ChekArray[6] == 1){
            result('Win X');
        }


        if(ChekArray[0]== 2 && ChekArray[1]== 2 && ChekArray[2] == 2){
            result('Win O');
        }
        if(ChekArray[3]== 2 && ChekArray[4]== 2 && ChekArray[5] == 2){
            result('Win O');
        }
        if(ChekArray[6]== 2 && ChekArray[7]== 2 && ChekArray[8] == 2){
            result('Win O');
        }

        if(ChekArray[0]== 2 && ChekArray[3]== 2 && ChekArray[6] == 2){
            result('Win O');
        }
        if(ChekArray[1]== 2 && ChekArray[4]== 2 && ChekArray[7] == 2){
            result('Win O');
        }
        if(ChekArray[2]== 2 && ChekArray[5]== 2 && ChekArray[8] == 2){
            result('Win O');
        }

        if(ChekArray[0]== 2 && ChekArray[4]== 2 && ChekArray[8] == 2){
            result('Win O');
        }
        if(ChekArray[2]== 2 && ChekArray[4]== 2 && ChekArray[6] == 2){
            result('Win O');
        }
        
    }

    function result(win){
        document.getElementById("res").innerHTML = win;
    }
}
