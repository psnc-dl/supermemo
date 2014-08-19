var main = function() {
    // In this code pictures from the images array from the config.js file are refered to as cards.
    var ageName = config[sessionStorage.getItem("age")];
    var cardDim = config[sessionStorage.getItem("age")].cardSize;
    var cardCount = ageName.cardCount;
    var boardWidth = ageName.boardWidth;
    var boardHeight = ageName.boardHeight;
    var images = [];
    var categoryName = category[sessionStorage.getItem("category")];
    // This loop loads images paths from the config.js file into an array.
    for (i = 0; i < cardCount; i++) {
        images[i] = categoryName.images[i];
    }
    var clickCount = 0;
    var montyPointon = 0;
    var matchCard = [];
    var matchIndex = 0;
    var tries = 0;
    
    /* This function is used to mix the elements of the images array which 
     * contains images paths. It uses Math.random() to generate a random number 
     * which is later used to move the picture to a different place in the array 
     * using the splice() method. This function is called many times to mix the 
     * whole array. */
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
    
    /* These two lines set the game board width and height and the placement of 
     * the tries counter depending on the config.js file.*/
    $("#gameboard").css({"width": boardWidth * (cardDim + 10), "height": boardHeight * (cardDim + 10), "margin-top": -(boardHeight * (cardDim + 10))/2, "margin-left": -(boardWidth * (cardDim + 10))/2});
    $("#scores").css({"margin-left": (30 + (boardWidth * (cardDim + 10))/2)});
    
    /* This function is used to dynamically create the html elements containing 
     * images from the images array. Each picture gets a unique id. */
    var creator = function() {
               
        var card = document.createElement("div");
        card.setAttribute("class", "card");
       
        var image = document.createElement("img");
        image.setAttribute("id", "card" + (i + 1).toString());
        image.setAttribute("class", "covered");
        image.setAttribute("src", " ");
        image.setAttribute("alt", "img");
        image.setAttribute("draggable", "false");
        
        document.getElementById("gameboard").appendChild(card);
        card.appendChild(image);
    };
    
    for(i = 0; i < cardCount; i++) {
        creator();
    }
    
    // This loop loads the images paths from the array into the html elements.
    for (i = 0; i < cardCount; i++) {
        document.getElementById("card" + (i + 1).toString()).src = images[i];
    }
    
    // This loop lets you uncover a card after clicking on it.
    for (i = 0; i < cardCount; i++) {
        $("#card" + (i + 1).toString()).click(function() { $(this).css("opacity", "1"); });
    }
    $(".card").css({"width": cardDim, "height": cardDim});
    
    /* This function handles the click on card event. It uses a temporary array 
     * matchCard to store the id's of the 2 selected cards before compareing them. */
    var cardClick = function() {
        $(".card").click(function(event) {
            /* This loop fixes the bug in which the player could uncover all of 
             * the cards and block the game */ 
            var matchId = event.target.id;
            if (matchId !== matchCard[0] && $("#"+matchId).attr("class") !== "uncovered"){
                matchCard[matchIndex] = matchId;
                ++clickCount;
                matchIndex++;
            }
            
            /* This loop compares the two selected cards, the first if loop 
             * handles an event in which the player could win by only clicking 
             * one image, it activates only when there are two cards in the 
             * matchCard array. */
            if(matchCard[0] !== matchCard[1]) {
                if (clickCount === 2 && matchCard.length === 2) {
                    $(".card").css("pointer-events", "none"); //This line blocks the mouse click event for the duration of the loop.
                    ++tries;
                    $(test4).text(tries);
                    /* This loop checks if the two selected cards have the same image, if 
                     * true then they are left uncovered and a point is given to 
                     * the player, if not then they are covered after 800ms. */
                    if ($("#"+matchCard[0]).attr("src") === $("#"+matchCard[1]).attr("src")) {
                        ++montyPointon;
                        
                        document.getElementById(matchCard[0]).className = "uncovered";
                        document.getElementById(matchCard[1]).className = "uncovered";
                        /* This function checks if all of the cards were uncovered 
                         * and waits 5s before redirecting the player to the last page. */
                        if (montyPointon === cardCount / 2) {
                            sessionStorage.setItem("tries", tries);
                            setTimeout(function() {
                                location = "end_game.html";
                            }, 5000); // The time for which the page waits before redirecting.
                        }
                        
                        $(".card").css("pointer-events", "auto");
                    } else {              
                        setTimeout(function() {
                            $(".covered").css("opacity", "0");
                            $(".card").css("pointer-events", "auto");
                        }, 800); // The time for which the cards are left uncovered can be set here.
                    }
                    clickCount = 0;
                }
                
            } else {
                matchCard.splice(0, 2);
                matchIndex = 0;
            }
            
            /* This loop checks if the matchCard array has already 2 elements,
             * if yes then it cleares it.*/
            if (matchCard.length === 2) {
                matchCard.splice(0, 2);
                matchIndex = 0;
            }
            
        });
    };
    
    cardClick();
    
};

$(document).ready(main);