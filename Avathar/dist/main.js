$(".avathar").each(function(){
//  var splitString = [];
    var getName = $(this).text();
    var splitString = getName.split(" ");
    var splittedLength = splitString.length;
    
    
    // Color
//       var g1 = ["#0D2D98", "#478CFF"],
//            g2 = ["#FD9918", "#F8C95D"],
//            g3 = ["#98730d", "#ffcd47"];
  var colors = [["#0D2D98", "#478CFF"], ["#FD9918", "#F8C95D"], ["#98730d", "#ffcd47"]];                
            
  var rand = Math.floor(Math.random()*colors.length); 
    var startColor = colors[rand][0];
    var endColor = colors[rand][1];
    
    
    console.log(colors[rand]);
    if (splittedLength > 1){
//        console.log(getName, splittedLength);
//            console.log(splitString[0], splittedLength);
            var nameOne = splitString[0].split();
            var nameTwo = splitString[1].split();
        var inHtml = splitString[0][0].toUpperCase() + splitString[1][0].toUpperCase();
        var randColor = getRandom(colors);
        
        console.log(colors[randColor]);
                    var html = "<svg width=\"100px\" height=\"100px\" "+ "viewBox=\"0 0 100 100\" version=\"1.1\""+ "xmlns=\"http:\/\/www.w3.org\/2000\/svg\""+ "xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\">"+    
    "<defs>"+
        "<linearGradient x1=\"0%\" y1=\"0%\" x2=\"85.8560808%\""+ "y2=\"87.2430886%\" id=\"linearGradient-1\">"+
            "<stop stop-color=\""+ startColor +"\" offset=\"0%\"><\/stop>"+
            "<stop stop-color=\""+ endColor +"\" offset=\"100%\"><\/stop>"+
        "</linearGradient>"+
    "</defs>"+
    "<g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" "+ 
            "fill-rule=\"evenodd\">"+
        "<g id=\"text\">"+
            "<rect id=\"Rectangle\" fill=\"url(#linearGradient-1)\""+
            
            
            
            "x=\"0\" y=\"0\" width=\"100\" height=\"100\"><\/rect>"+
            "<text id=\"SA\" font-size=\"50\""+
            "font-weight=\"normal\" letter-spacing=\"4.72500038\""+ "fill=\"#FFFFFF\">"+
                "<tspan x=\"15\" y=\"69\">"+ inHtml +"</tspan>"+
            "</text>"+
        "</g>"+
    "</g>"+
"</svg>";
        
        $(this).html(html);
        
        
        
        
    }
    else{
//        var singleName = [];
        var singleName = getName.split("")
//        console.log(singleName[0],singleName[1]);
        var inHtml = singleName[0].toUpperCase() + singleName[1].toUpperCase();
       
        
//        var imgsrc = 'data:image/svg+xml;base64,'+ btoa(html);
//        console.log(imgsrc);
//        var img = "<img src="+imgsrc+"/>";
       
        
        
        
        
            var html = "<svg width=\"100px\" height=\"100px\" "+ "viewBox=\"0 0 100 100\" version=\"1.1\""+ "xmlns=\"http:\/\/www.w3.org\/2000\/svg\""+ "xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\">"+    
    "<defs>"+
        "<linearGradient x1=\"0%\" y1=\"0%\" x2=\"85.8560808%\""+ "y2=\"87.2430886%\" id=\"linearGradient-1\">"+
            "<stop stop-color=\""+ startColor +"\" offset=\"0%\"><\/stop>"+
            "<stop stop-color=\""+ endColor +"\" offset=\"100%\"><\/stop>"+
        "</linearGradient>"+
    "</defs>"+
    "<g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" "+ 
            "fill-rule=\"evenodd\">"+
        "<g id=\"text\">"+
            "<rect id=\"Rectangle\" fill=\"url(#linearGradient-1)\""+
            
            
            
            "x=\"0\" y=\"0\" width=\"100\" height=\"100\"><\/rect>"+
            "<text id=\"SA\" font-size=\"50\""+
            "font-weight=\"normal\" letter-spacing=\"4.72500038\""+ "fill=\"#FFFFFF\">"+
                "<tspan x=\"15\" y=\"69\">"+ inHtml +"</tspan>"+
            "</text>"+
        "</g>"+
    "</g>"+
"</svg>";
        
        $(this).html(html);
        
        
        
        
    }
    
});


function getRandom(colors){
    
    var rand = Math.floor(Math.random()*colors.length); 
}

