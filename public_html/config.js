/* In the config object you can set the parameters of the game for each age category. 
 * To add a new age category you need to add a new object to the config object. 
 * The new object must contain the age range of the new category(ageRange), 
 * the overall quantity of pictures on the game board(cardCount), the quantity of 
 * pictures on each of the game boards sides (boardWidth and boardHeight) and 
 * the size of the pictures in pixels(cardSize). By default the picture size is 
 * set to 155px because it is the best fit for a tablet with a 1280x800 resolution,
 * the pictures are considered to be squares. The name of the new object 
 * does not matter. After adding a new age category remember to add a new array 
 * to the ageCategories object to see what image categories should be available for the 
 * newly added age category. 
 * 
 * Remember cardSize is the size that the pictures will have in the game, not 
 * the actual size of the image. */
var config = {
    "five": {
        "ageRange": "3 - 5 lat",
        "cardCount": 12,
        "boardWidth": 4,
        "boardHeight": 3,
        "cardSize": 155
    },
    "nine": {
        "ageRange": "6 - 9 lat",
        "cardCount": 16,
        "boardWidth": 4,
        "boardHeight": 4,
        "cardSize": 155
    },
    "overNine": {
        "ageRange": "10+ lat",
        "cardCount": 24,
        "boardWidth": 6,
        "boardHeight": 4,
        "cardSize": 155
    }
};
/* In the ageCategories object you can set what image categories will be available 
 * for each of the age categories. After adding a new age category you must add 
 * a new array to the ageCategories object, the array must have the same name 
 * as the newly added age category, and must contain the names of the image 
 * categories that are set in the category object. */
var ageCategories = {
  "five": ["Atlas", "Ssaki", "Zioła"],
  "nine": ["Inicjały", "Atlas", "Moda", "Ssaki", "Zioła"],
  "overNine": ["Inicjały", "Atlas", "Moda", "Ssaki", "Zioła"]
};
/* In the category object you can set the image categories. To add a new image 
 * category you have to add a new object to the category object. The new object 
 * must contain an array named images. The images array contains paths to 
 * images which will be displayed on the game board, each path in the array 
 * must be duplicated. After adding a new image category remember to add it 
 * to the ageCategories object so it will be displayed, and to add it to the
 * publicationImg, publicationInfo and fact objects below. */        
var category = {
    "Inicjały": {
        "images": [
            "literki155x155/s.jpg",
            "literki155x155/s.jpg",                                                       
            "literki155x155/a_smok.jpg", 
            "literki155x155/a_smok.jpg",
            "literki155x155/m.jpg", 
            "literki155x155/m.jpg",
            "literki155x155/o.jpg",
            "literki155x155/o.jpg",
            "literki155x155/p.jpg",
            "literki155x155/p.jpg",
            "literki155x155/u2.jpg",
            "literki155x155/u2.jpg",
            "literki155x155/d.jpg",
            "literki155x155/d.jpg", 
            "literki155x155/u.jpg",
            "literki155x155/u.jpg",
            "literki155x155/a.jpg",
            "literki155x155/a.jpg",
            "literki155x155/h2.jpg",
            "literki155x155/h2.jpg",
            "literki155x155/l.jpg",
            "literki155x155/l.jpg",
            "literki155x155/o2.jpg",
            "literki155x155/o2.jpg"
        ]
    },
    "Atlas": {
        "images": [
            "atlas155x155/atlas-009.png",
            "atlas155x155/atlas-009.png",
            "atlas155x155/atlas-014.png",
            "atlas155x155/atlas-014.png",
            "atlas155x155/atlas-020.png",
            "atlas155x155/atlas-020.png",
            "atlas155x155/atlas-022.png",
            "atlas155x155/atlas-022.png",
            "atlas155x155/atlas-038.png",
            "atlas155x155/atlas-038.png",
            "atlas155x155/atlas-036.png",
            "atlas155x155/atlas-036.png",
            "atlas155x155/atlas-048.png",
            "atlas155x155/atlas-048.png",
            "atlas155x155/atlas-060.png",
            "atlas155x155/atlas-060.png",
            "atlas155x155/atlas-064.png",
            "atlas155x155/atlas-064.png",
            "atlas155x155/atlas-068.png",
            "atlas155x155/atlas-068.png",
            "atlas155x155/atlas-070.png",
            "atlas155x155/atlas-070.png",
            "atlas155x155/atlas-072.png",
            "atlas155x155/atlas-072.png"
        ]
    },
    "Moda": {
        "images": [
            "mody155x155/01.png",
            "mody155x155/01.png",
            "mody155x155/02.png",
            "mody155x155/02.png",
            "mody155x155/05.png",
            "mody155x155/05.png",
            "mody155x155/09.png",
            "mody155x155/09.png",
            "mody155x155/13.png",
            "mody155x155/13.png",
            "mody155x155/15.png",
            "mody155x155/15.png",
            "mody155x155/14.png",
            "mody155x155/14.png",
            "mody155x155/12.png",
            "mody155x155/12.png",
            "mody155x155/16.png",
            "mody155x155/16.png",
            "mody155x155/34.png",
            "mody155x155/34.png",
            "mody155x155/37.png",
            "mody155x155/37.png",
            "mody155x155/30.png",
            "mody155x155/30.png",
        ]
    },
    "Ssaki": {
        "images": [
            "ssaki155x155/ssaki01-018.png",
            "ssaki155x155/ssaki01-018.png",
            "ssaki155x155/ssaki01-026.png",
            "ssaki155x155/ssaki01-026.png",
            "ssaki155x155/ssaki02-022.png",
            "ssaki155x155/ssaki02-022.png",
            "ssaki155x155/ssaki02-023.png",
            "ssaki155x155/ssaki02-023.png",
            "ssaki155x155/ssaki03-025.png",
            "ssaki155x155/ssaki03-025.png",
            "ssaki155x155/ssaki01-027.png",
            "ssaki155x155/ssaki01-027.png",
            "ssaki155x155/ssaki02-021.png",
            "ssaki155x155/ssaki02-021.png",
            "ssaki155x155/ssaki02-026.png",
            "ssaki155x155/ssaki02-026.png",
            "ssaki155x155/ssaki03-024.png",
            "ssaki155x155/ssaki03-024.png",
            "ssaki155x155/ssaki03-022.png",
            "ssaki155x155/ssaki03-022.png",
            "ssaki155x155/ssaki03-019.png",
            "ssaki155x155/ssaki03-019.png",
            "ssaki155x155/ssaki02-027.png",
            "ssaki155x155/ssaki02-027.png",
        ]
    },
    "Zioła": {
        "images": [
            "zioła155x155/zioła-006.png",
            "zioła155x155/zioła-006.png",
            "zioła155x155/zioła-043.png",
            "zioła155x155/zioła-043.png",
            "zioła155x155/zioła-048.png",
            "zioła155x155/zioła-048.png",
            "zioła155x155/zioła-022.png",
            "zioła155x155/zioła-022.png",
            "zioła155x155/zioła-018.png",
            "zioła155x155/zioła-018.png",
            "zioła155x155/zioła-037.png",
            "zioła155x155/zioła-037.png",
            "zioła155x155/zioła-016.png",
            "zioła155x155/zioła-016.png",
            "zioła155x155/zioła-026.png",
            "zioła155x155/zioła-026.png",
            "zioła155x155/zioła-009.png",
            "zioła155x155/zioła-009.png",
            "zioła155x155/zioła-023.png",
            "zioła155x155/zioła-023.png",
            "zioła155x155/zioła-013.png",
            "zioła155x155/zioła-013.png",
            "zioła155x155/zioła-042.png",
            "zioła155x155/zioła-042.png",
        ]
    }
};
/* In the categoryBg object you can set the background image that will be used 
 * for the category buttons. The name of the string must be the same as the 
 * category it corresponds to, it should contain the path to the background image. */
var categoryBg = {
    "Inicjały": "literki155x155/a.jpg",
    "Atlas": "atlas155x155/atlas-009.png",
    "Moda": "mody155x155/01.png",
    "Ssaki": "ssaki155x155/ssaki02-022.png",
    "Zioła": "zioła155x155/zioła-018.png"
};
/* In the publicationImg object you can set the image of the publication that will 
 * be displayed on the final page of the game. The name of the string must be 
 * the same as the category it corresponds to, it should contain the path to the 
 * publication image. */
var publicationImg = {
    "Inicjały": "literki155x155/a.jpg",
    "Atlas": "atlas155x155/atlas-009.png",
    "Moda": "mody155x155/01.png",
    "Ssaki": "ssaki155x155/ssaki02-022.png",
    "Zioła": "zioła155x155/zioła-018.png"
};
/* In the publicationInfo object you can set the name of the publication that will 
 * be displayed on the final page of the game. The name of the string must be 
 * the same as the category it corresponds to. */
var publicationInfo = {
    "Inicjały": "Inicjały",
    "Atlas": "Atlas",
    "Moda": "Moda",
    "Ssaki": "Ssaki",
    "Zioła": "Zioła"
};
/* In the fact object you can set the fact about the publication that will 
 * be displayed on the final page of the game. The name of the string must be 
 * the same as the category it corresponds to. */
var fact = {
    "Inicjały": "<a href='http://www.google.pl'>Ciekawostka</a> o inicjałach",
    "Atlas": "<a href='http://www.google.pl'>Ciekawostka</a> o atlasie",
    "Moda": "<a href='http://www.google.pl'>Ciekawostka</a> o modzie",
    "Ssaki": "<a href='http://www.google.pl'>Ciekawostka</a> o ssakach",
    "Zioła": "<a href='http://www.google.pl'>Ciekawostka</a> o ziołach"
};
