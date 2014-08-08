var main = function() {
    
    if (sessionStorage.getItem("age") === "five" && sessionStorage.getItem("category") === "kittens") {
        var images = config.age.five.category.kittens.images;
    } else if (sessionStorage.getItem("age") === "five" && sessionStorage.getItem("category") === "misc") {
        var images = config.age.five.category.misc.images;
    } else if (sessionStorage.getItem("age") === "eight" && sessionStorage.getItem("category") === "kittens") {
        var images = config.age.eight.category.kittens.images;
    } else if (sessionStorage.getItem("age") === "eight" && sessionStorage.getItem("category") === "misc") {
        var images = config.age.eight.category.misc.images;
    } else if (sessionStorage.getItem("age") === "overEight" && sessionStorage.getItem("category") === "kittens") {
        var images = config.age.overEight.category.kittens.images;
    } else if (sessionStorage.getItem("age") === "overEight" && sessionStorage.getItem("category") === "misc") {
        var images = config.age.overEight.category.misc.images;
    };
    
    if (sessionStorage.getItem("age") === "five") {
        var cardCount = config.size[0].cardCount;
        var boardWidth = config.size[0].boardWidth;
        var boardHeight = config.size[0].boardHeight;
    } else if (sessionStorage.getItem("age") === "eight") {
        var cardCount = config.size[1].cardCount;
        var boardWidth = config.size[1].boardWidth;
        var boardHeight = config.size[1].boardHeight;
    } else if (sessionStorage.getItem("age") === "overEight") {
        var cardCount = config.size[2].cardCount;
        var boardWidth = config.size[2].boardWidth;
        var boardHeight = config.size[2].boardHeight;
    };
    
    var clickCount = 0;
    var montyPointon = 0;
    var matchCard = [];
    var matchIndex = 0;
    
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
        
    var cardClick = function() {
        $(".card").click(function(event) {

            //++clickCount;

            var matchId = event.target.id;
            if (matchId !== matchCard[0]){
                matchCard[matchIndex] = matchId;
                $(test1).text(matchCard);
                ++clickCount;
                $(test).text(clickCount);
                matchIndex++;
            } 
            
            if(matchCard[0] !== matchCard[1]) {
                if (clickCount === 2 && matchCard.length === 2) {
                    $(".card").css("pointer-events", "none");                
                    $(test).text("Już 2");
                    
                    if (document.getElementById(matchCard[0]).src === document.getElementById(matchCard[1]).src) {

                        ++montyPointon;
                        $(test2).text(montyPointon);

                        document.getElementById(matchCard[0]).className = "";
                        document.getElementById(matchCard[1]).className = "";

                        if (montyPointon === cardCount / 2) {
                            alert("GZ " + sessionStorage.getItem("username") + " you won!!!");
                            sessionStorage.clear();
                        }
                        $(".card").css("pointer-events", "auto");
                    } else {              
                        setTimeout(function() {
                            $(".covered").css("opacity", "0");
                            $(".card").css("pointer-events", "auto");
                            $(test).text(clickCount);
                        }, 800);
                    }
                   clickCount = 0;
                }
                //matchIndex++;
                
            } else {
                matchCard.splice(0, 2);
                matchIndex = 0;
            }
            
            if (matchCard.length === 2) {
                //$(".covered").css("opacity", "0");
                matchCard.splice(0, 2);
                matchIndex = 0;
            }
            
        });
    };
    
    cardClick();
    
};

$(document).ready(main);