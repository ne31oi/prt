/**
 * Created by Анастасия on 07.12.2016.
 */
'use strict'
window.onload =function () {

    var chessmen  =
        [['rook','knight','bishop','queen','king','bishop','knight' ,'rook'],
            ['pawn','pawn','pawn','pawn','pawn','pawn','pawn','pawn'],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            ['pawn','pawn','pawn','pawn','pawn','pawn','pawn','pawn'],
            ['rook','knight','bishop','queen','king','bishop','knight' ,'rook']];

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

                    var img = document.createElement("object");
                    img.type="image/svg+xml";
                    img.data="static/img/minified-svg/"+chessmen[i-1][j-1]+".svg";
                    img.id=chessmen[i-1][j-1]+i+j
                    console.log(img.id)


                    td.appendChild(img);


                    if(i>4){

                        img.className="wc";

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
    //console.log(document.getElementById("rook88").contentDocument.documentElement.firstElementChild.setAttribute("fill","red"))
}
