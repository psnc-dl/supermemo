var main = function() {
    
    var ageName = config[sessionStorage.getItem("age")];
    var cardDim = config[sessionStorage.getItem("age")].cardSize;
    var cardCount = ageName.cardCount;
    var boardWidth = ageName.boardWidth;
    var boardHeight = ageName.boardHeight;
    var images = [];
    var categoryName = category[sessionStorage.getItem("category")];
    for (i = 0; i < cardCount; i++) {
        images[i] = categoryName.images[i];
    }
    var clickCount = 0;
    var montyPointon = 0;
    var matchCard = [];
    var matchIndex = 0;
    var tryes = 0;
    
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
    
    $("body").css("margin-top", 0);
    $("#gameboard").css({"width": boardWidth * (cardDim + 10), "height": boardHeight * (cardDim + 10), "margin-top": -(boardHeight * (cardDim + 10))/2, "margin-left": -(boardWidth * (cardDim + 10))/2});
    $("#scores").css({"margin-left": (30 + (boardWidth * (cardDim + 10))/2)});
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
    }
    
    for (i = 0; i < cardCount; i++) {
        document.getElementById("card" + (i + 1).toString()).src = images[i];
    }
    
    for (i = 0; i < cardCount; i++) {
        $("#card" + (i + 1).toString()).click(function() { $(this).css("opacity", "1"); });
    }
    $(".card").css({"width": cardDim, "height": cardDim});
    
    var cardClick = function() {
        $(".card").click(function(event) {

            var matchId = event.target.id;
            if (matchId !== matchCard[0] && $("#"+matchId).attr("class") !== "uncovered"){
                matchCard[matchIndex] = matchId;
                //$(test1).text(matchCard);
                ++clickCount;
                //$(test).text(clickCount);
                matchIndex++;
            }
            
            if(matchCard[0] !== matchCard[1]) {
                if (clickCount === 2 && matchCard.length === 2) {
                    $(".card").css("pointer-events", "none");                
                    //$(test).text("Już 2");
                    ++tryes;
                    $(test4).text(tryes);
                    if (document.getElementById(matchCard[0]).src === document.getElementById(matchCard[1]).src) {

                        ++montyPointon;
                        //$(test2).text(montyPointon);

                        document.getElementById(matchCard[0]).className = "uncovered";
                        document.getElementById(matchCard[1]).className = "uncovered";

                        if (montyPointon === cardCount / 2) {
                            setTimeout(function() {
                                location = "end_game.html";
                            }, 5000);
                        }
                        $(".card").css("pointer-events", "auto");
                    } else {              
                        setTimeout(function() {
                            $(".covered").css("opacity", "0");
                            $(".card").css("pointer-events", "auto");
                            //$(test).text(clickCount);
                        }, 800);
                    }
                    clickCount = 0;
                }
                
            } else {
                matchCard.splice(0, 2);
                matchIndex = 0;
            }
            
            if (matchCard.length === 2) {
                matchCard.splice(0, 2);
                matchIndex = 0;
            }
            
        });
    };
    
    cardClick();
    
};

$(document).ready(main);