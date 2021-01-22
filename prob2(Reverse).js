function count(x) {
    if (x >= 0) {
        var xInStringRev = "";
        var count=0;
        var xInString = x.toString();
        for (var i = xInString.length - 1; i >= 0; i--) {
            xInStringRev += xInString[i];
        }
        for(var i = 0;i<xInStringRev.length;i++){
            if(xInStringRev[i]!="0"){
                break;
            }
            else{
                count++;
            }
        }
        var finalXInStringRev = xInStringRev.slice(count);
        if(finalXInStringRev>2147483647)
        {
            return 0;
        }
        return finalXInStringRev;
        //2147483648
    }
    else {
        var xInStringRev = "";
        var count=0;
        var xInString = x.toString();
        for (var i = xInString.length - 1; i >= 1; i--) {
            xInStringRev += xInString[i];
        }
        for(var i = 0;i<xInStringRev.length;i++){
            if(xInStringRev[i]!="0"){
                break;
            }
            else{
                count++;
            }
        }
        var finalXInStringRev = xInStringRev.slice(count);
        if("-"+finalXInStringRev<=-2147483648)
        {
            return 0;
        }
        return "-"+finalXInStringRev;
    }
}

console.log(count(-1563847412))

