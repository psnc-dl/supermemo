var main = function() {

    var images = ["images/kitten1.jpg", "images/kitten1.jpg", "images/kitten2.jpg", 
        "images/kitten2.jpg", "images/kitten3.jpg", "images/kitten3.jpg", 
        "images/kitten4.jpg", "images/kitten4.jpg", "images/kitten5.jpg", 
        "images/kitten5.jpg", "images/kitten6.jpg", "images/kitten6.jpg"];
    var clickCount = 0;
    var points = 0;
    var matchCard = [];
    var matchIndex = 0;
    var cardCount = 12;
    var boardWidth = 4;
    var boardHeight = 3;

    var randomize = function() {
        var x = Math.floor(Math.random() * cardCount);
        var imgTemp = [];
        imgTemp[0] = images[x];
        images.splice(x, 1);
        images[images.length] = imgTemp[0];
    };

    for (i = 0; i < (((cardCount * 6) / 4 ) + 5 ); i++) {
        randomize();
    }
    
    $("#gameboard").css({"width": boardWidth * 220, "height": boardHeight * 200});
    
    var creator = function() {
               
        var card = document.createElement("div");
        card.setAttribute("class", "card");
       
        var image = document.createElement("img");
        image.setAttribute("id", "card" + (i + 1).toString());
        image.setAttribute("class", "covered");
        image.setAttribute("src", " ");
        image.setAttribute("alt", "img");
        
        document.getElementById("gameboard").appendChild(card);
        card.appendChild(image);
    };
    
    for(i = 0; i < cardCount; i++) {
        creator();
    };
    
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
                
                if (points === cardCount/2) { $(test3).text("GZ " + sessionStorage.getItem("username") + " you won!!!") ;}
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