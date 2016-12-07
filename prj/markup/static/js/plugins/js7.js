'use strict'
var chessmen  =
    [['castle','knight','bishop','queen','king','bishop','knight' ,'castle'],
    ['pawn','pawn','pawn','pawn','pawn','pawn','pawn','pawn'],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    ['pawn','pawn','pawn','pawn','pawn','pawn','pawn','pawn'],
    ['castle','knight','bishop','queen','king','bishop','knight' ,'castle']];

var chess = document.getElementById("chess");

var letters = 'abcdefgh'.split('');
//alert(letters[7]);
    var table=document.createElement('table');
    for(var i=0;i<9;i++){
        var tr=document.createElement('tr');

      for(var j=0;j<9;j++){
          var td=document.createElement('td');
            if((i==0)||(j==0)){
                td.className="none";

                if(j==0){
                    td.innerHTML=i;
                }else{
                    td.innerHTML=letters[j-1];
                }


            }
            else{
                td.id = letters[j - 1] + i
                if(chessmen[i-1][j-1]!=0){
                td.innerHTML=chessmen[i-1][j-1]
                    if(i>4){
                        td.className="wc";
                    }
                    else{
                        td.className="bc";
                    }
                }}





            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    chess.appendChild(table)
/*setTimeout(function () {
    chess.parentNode.removeChild(chess);
}, 3000);*/
