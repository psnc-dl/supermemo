var main = function() {

    var images = ["images/kitten1.jpg", "images/kitten1.jpg", "images/kitten2.jpg", 
        "images/kitten2.jpg", "images/kitten3.jpg", "images/kitten3.jpg"];

    var randomize = function() {
        var x = Math.floor(Math.random() * 6);
        var imgTemp = [];
        imgTemp[0] = images[x];
        images.splice(x, 1);
        images[images.length] = imgTemp[0];
    };

    for (i = 0; i < 7; i++) {
        randomize();
    }

    document.getElementById("card1").src = images[0];
    document.getElementById("card2").src = images[1];
    document.getElementById("card3").src = images[2];
    document.getElementById("card4").src = images[3];
    document.getElementById("card5").src = images[4];
    document.getElementById("card6").src = images[5];
    
    $(card1).click(function() { $(this).css("opacity","1"); });
    $(card2).click(function() { $(this).css("opacity","1"); });
    $(card3).click(function() { $(this).css("opacity","1"); });
    $(card4).click(function() { $(this).css("opacity","1"); });
    $(card5).click(function() { $(this).css("opacity","1"); });
    $(card6).click(function() { $(this).css("opacity","1"); });
        
    var clickCount = 0;
    
    $(".card").click(function() {
        
        ++clickCount;
        $(test).text(clickCount);
        
        if (clickCount === 2) {
            $(test).text("Juz 2");
            setTimeout(function() { 
                $("img").css("opacity", "0");
                $(test).text(clickCount);
            }, 800);
           clickCount = 0;
        }
          
    });

};

$(document).ready(main);