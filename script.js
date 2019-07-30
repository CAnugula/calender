
function loadDays(){

    var months=["oct"];
    var days=31;
    var currentElt;
    for(i=1;i<=days; i++)
    {
        var divElt = document.createElement("div");
        var breakelt = document.createElement("br");
        var content = document.createTextNode(""+ i +"");
        divElt.appendChild(content);
        if(i<=7)
        document.getElementById("firstrow").appendChild(divElt);
        if(i>7 && i<=14)
        document.getElementById("secondrow").appendChild(divElt);
        if(i>14 && i<=21)
        document.getElementById("thirdrow").appendChild(divElt);
        if(i>21 && i<=28)
        document.getElementById("fourthrow").appendChild(divElt);
        if(i>28)
        {
        document.getElementById("fifthrow").appendChild(divElt);
        }
    }
}
