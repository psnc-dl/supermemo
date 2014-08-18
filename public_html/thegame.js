var main = function() {
    //In this code pictures from the images matrix from the config.js file are called cards.
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
    var tries = 0;
    
    /*This function is used to mix the elements of the images matrix which 
     * contains images. It uses Math.random() to generate a random number which 
     * is later used to move the picture to a different place in the matrix 
     * using the splice() method. This function is called many times to mix the 
     * whole matrix.*/
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
    
    /*These two lines set the game board width and height and the placement of the tries counter depending on the config file.*/
    $("#gameboard").css({"width": boardWidth * (cardDim + 10), "height": boardHeight * (cardDim + 10), "margin-top": -(boardHeight * (cardDim + 10))/2, "margin-left": -(boardWidth * (cardDim + 10))/2});
    $("#scores").css({"margin-left": (30 + (boardWidth * (cardDim + 10))/2)});
    
    /*This function is used to dynamically create the html elements containing 
     * images from the images matrix. Each picture gets a unique id. */
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
    
    /* This function handles the click on card event. It uses a temporary matrix 
     * matchCard to store the id's of the 2 selected cards. */
    var cardClick = function() {
        $(".card").click(function(event) {
            /* This loop fixes the bug in which the player could uncover all of the cards 
             * and block the game */ 
            var matchId = event.target.id;
            if (matchId !== matchCard[0] && $("#"+matchId).attr("class") !== "uncovered"){
                matchCard[matchIndex] = matchId;
                ++clickCount;
                matchIndex++;
            }
            
            /*This loop performs checks on the two selected cards, it activates 
             * only when there are two cards in the matchCard matrix. */
            if(matchCard[0] !== matchCard[1]) {
                if (clickCount === 2 && matchCard.length === 2) {
                    $(".card").css("pointer-events", "none"); //this line blocks the mouse click event for the duration of the loop
                    ++tries;
                    $(test4).text(tries);
                    /*This loop checks if the two selected cards have the same image, if 
                     * true then they are left uncovered and a point is given to 
                     * the player, if not then they are covered after 800ms */
                    if (document.getElementById(matchCard[0]).src === document.getElementById(matchCard[1]).src) {

                        ++montyPointon;
                        document.getElementById(matchCard[0]).className = "uncovered";
                        document.getElementById(matchCard[1]).className = "uncovered";
                        /* This function checks if all of the cards were uncovered 
                         * and waits 5s before redirecting the player to the last page.*/
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
                        }, 800); // The time for which the cards are left uncovered can be set here.
                    }
                    clickCount = 0;
                }
                
            } else {
                matchCard.splice(0, 2);
                matchIndex = 0;
            }
            
            /*This loop checks if the matchCard matrix has already 2 elements,
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