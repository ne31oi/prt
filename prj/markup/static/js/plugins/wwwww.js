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

    var letters = 'ABCDEFGH'.split('');

    var table=document.createElement('table');
    for(var i=0;i<10;i++){
        var tr=document.createElement('tr');

        for(var j=0;j<10;j++){
            var td=document.createElement('td');
            if((i==0)||(j==0)||(i==9)||(j==9)){
                td.className="none";

                if(j==0||j==9){
                    if(i!=0&&i!=9){
                        td.innerHTML=i;
                    }

                }else{

                    td.innerHTML=letters[j-1];
                }


            }
            else{
                td.id = letters[j - 1] + i
                td.className="cell";
                if(chessmen[i-1][j-1]!=0){

                    var img = document.createElement("object");
                    img.type="image/svg+xml";
                    var c;


                    if(i>4){
                        c="w";

                    }
                    else{
                        c="b"
                    }
                    img.data="static/img/minified-svg/"+chessmen[i-1][j-1]+c+".svg";
                    img.id=chessmen[i-1][j-1]+i+j;



                    td.appendChild(img);
                }
                var item = document.createElement("div");
                item.className="item";
                var lastid=NaN;
                item.onclick = function(){
                    if(lastid!=NaN){
                    document.getElementById(lastid).className="cell"}
                    document.getElementById(this.offsetParent.id).className="set"
                    lastid=this.offsetParent.id;
                    console.log(lastid)
                }
                td.appendChild(item);}






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


function r() {
    return (this.offsetParent.id)
}
