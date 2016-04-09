function getInnerData(vHtml){
    var re = new RegExp("<[^<]*>([^<]*)<\\/[^<]*>","g")
    var matchArray = vHtml.match(re);
    matchArray =matchArray?matchArray:[];
    var innerText = new Array();
    for(var i = 0;i< matchArray.length;i++){
        var singleRe = /<[^<]*>([^<]*)<\/[^<]*>/i;
        var tempArray = matchArray[i].match(singleRe);
        innerText.push(tempArray[1]);
    }
    return innerText;
}