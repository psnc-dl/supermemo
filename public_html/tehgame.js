var main = function() {

    var images = ["images/kitten1.jpg", "images/kitten1.jpg", "images/kitten2.jpg", 
        "images/kitten2.jpg", "images/kitten3.jpg", "images/kitten3.jpg"];
    var clickCount = 0;
    var points = 0;
    var matchCard = [];
    var matchIndex = 0;
    var cardCount = 6;

    var randomize = function() {
        var x = Math.floor(Math.random() * cardCount);
        var imgTemp = [];
        imgTemp[0] = images[x];
        images.splice(x, 1);
        images[images.length] = imgTemp[0];
    };

    for (i = 0; i < 7; i++) {
        randomize();
    }
    
    for (i = 0; i < cardCount; i++) {
        document.getElementById("card" + (i + 1).toString()).src = images[i];
    }
    
    for (i = 0; i < cardCount; i++) {
        $("#card" + (i + 1).toString()).click(function() { $(this).css("opacity", "1"); });
    }
    

    $(".card").click( function(event) {
        
        ++clickCount;
        $(test).text(clickCount);
        var matchId = event.target.id; 
        matchCard[matchIndex] = matchId;
        $(test1).text(matchCard);
        
        if (clickCount === 2) {
            
            $(test).text("Już 2");
            if ( document.getElementById(matchCard[0]).src === document.getElementById(matchCard[1]).src ) {
                ++points;
                $(test2).text(points);
                document.getElementById(matchCard[0]).className = "";
                document.getElementById(matchCard[1]).className = "";
                if (points === 3) { $(test3).text("GZ you won!!!") ;}
            } else {
                setTimeout(function() { 
                    $(".covered").css("opacity", "0");
                    $(test).text(clickCount);
                }, 800); 
            }
           clickCount = 0;
        }
        matchIndex++;
        
        if (matchCard.length === 2) {
            matchCard.splice(0, 2);
            matchIndex = 0;
        }
        
    });
    
};

$(document).ready(main);