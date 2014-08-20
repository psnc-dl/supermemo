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
  "nine": ["Inicjały", "Atlas", "Mody", "Ssaki", "Zioła"],
  "overNine": ["Inicjały", "Atlas", "Mody", "Ssaki", "Zioła"]
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
            "inicjaly/s.jpg",
            "inicjaly/s.jpg",                                                       
            "inicjaly/a_smok.jpg", 
            "inicjaly/a_smok.jpg",
            "inicjaly/m.jpg", 
            "inicjaly/m.jpg",
            "inicjaly/o.jpg",
            "inicjaly/o.jpg",
            "inicjaly/p.jpg",
            "inicjaly/p.jpg",
            "inicjaly/u2.jpg",
            "inicjaly/u2.jpg",
            "inicjaly/d.jpg",
            "inicjaly/d.jpg", 
            "inicjaly/u.jpg",
            "inicjaly/u.jpg",
            "inicjaly/a.jpg",
            "inicjaly/a.jpg",
            "inicjaly/h2.jpg",
            "inicjaly/h2.jpg",
            "inicjaly/l.jpg",
            "inicjaly/l.jpg",
            "inicjaly/o2.jpg",
            "inicjaly/o2.jpg"
        ]
    },
    "Atlas": {
        "images": [
            "atlas/atlas-009.png",
            "atlas/atlas-009.png",
            "atlas/atlas-014.png",
            "atlas/atlas-014.png",
            "atlas/atlas-020.png",
            "atlas/atlas-020.png",
            "atlas/atlas-022.png",
            "atlas/atlas-022.png",
            "atlas/atlas-038.png",
            "atlas/atlas-038.png",
            "atlas/atlas-036.png",
            "atlas/atlas-036.png",
            "atlas/atlas-048.png",
            "atlas/atlas-048.png",
            "atlas/atlas-060.png",
            "atlas/atlas-060.png",
            "atlas/atlas-064.png",
            "atlas/atlas-064.png",
            "atlas/atlas-068.png",
            "atlas/atlas-068.png",
            "atlas/atlas-070.png",
            "atlas/atlas-070.png",
            "atlas/atlas-072.png",
            "atlas/atlas-072.png"
        ]
    },
    "Mody": {
        "images": [
            "mody/01.png",
            "mody/01.png",
            "mody/02.png",
            "mody/02.png",
            "mody/05.png",
            "mody/05.png",
            "mody/09.png",
            "mody/09.png",
            "mody/13.png",
            "mody/13.png",
            "mody/15.png",
            "mody/15.png",
            "mody/14.png",
            "mody/14.png",
            "mody/12.png",
            "mody/12.png",
            "mody/16.png",
            "mody/16.png",
            "mody/34.png",
            "mody/34.png",
            "mody/37.png",
            "mody/37.png",
            "mody/30.png",
            "mody/30.png"
        ]
    },
    "Ssaki": {
        "images": [
            "ssaki/ssaki01-018.png",
            "ssaki/ssaki01-018.png",
            "ssaki/ssaki01-026.png",
            "ssaki/ssaki01-026.png",
            "ssaki/ssaki02-022.png",
            "ssaki/ssaki02-022.png",
            "ssaki/ssaki02-023.png",
            "ssaki/ssaki02-023.png",
            "ssaki/ssaki03-025.png",
            "ssaki/ssaki03-025.png",
            "ssaki/ssaki01-027.png",
            "ssaki/ssaki01-027.png",
            "ssaki/ssaki02-021.png",
            "ssaki/ssaki02-021.png",
            "ssaki/ssaki02-026.png",
            "ssaki/ssaki02-026.png",
            "ssaki/ssaki03-024.png",
            "ssaki/ssaki03-024.png",
            "ssaki/ssaki03-022.png",
            "ssaki/ssaki03-022.png",
            "ssaki/ssaki03-019.png",
            "ssaki/ssaki03-019.png",
            "ssaki/ssaki02-027.png",
            "ssaki/ssaki02-027.png"
        ]
    },
    "Zioła": {
        "images": [
            "ziola/ziola-006.png",
            "ziola/ziola-006.png",
            "ziola/ziola-043.png",
            "ziola/ziola-043.png",
            "ziola/ziola-048.png",
            "ziola/ziola-048.png",
            "ziola/ziola-022.png",
            "ziola/ziola-022.png",
            "ziola/ziola-018.png",
            "ziola/ziola-018.png",
            "ziola/ziola-037.png",
            "ziola/ziola-037.png",
            "ziola/ziola-016.png",
            "ziola/ziola-016.png",
            "ziola/ziola-026.png",
            "ziola/ziola-026.png",
            "ziola/ziola-009.png",
            "ziola/ziola-009.png",
            "ziola/ziola-023.png",
            "ziola/ziola-023.png",
            "ziola/ziola-013.png",
            "ziola/ziola-013.png",
            "ziola/ziola-042.png",
            "ziola/ziola-042.png"
        ]
    }
};
/* In the categoryBg object you can set the background image that will be used 
 * for the category buttons. The name of the string must be the same as the 
 * category it corresponds to, it should contain the path to the background image. */
var categoryBg = {
    "Inicjały": "inicjaly/a.jpg",
    "Atlas": "atlas/atlas-009.png",
    "Mody": "mody/01.png",
    "Ssaki": "ssaki/ssaki02-022.png",
    "Zioła": "ziola/ziola-018.png"
};
/* In the publicationImg object you can set the image of the publication that will 
 * be displayed on the final page of the game. The name of the string must be 
 * the same as the category it corresponds to, it should contain the path to the 
 * publication image. */
var publicationImg = {
    "Inicjały": "inicjaly/inicjaly-title.png",
    "Atlas": "atlas/atlas-title.png",
    "Mody": "mody/mody-title.png",
    "Ssaki": "ssaki/ssaki-title.png",
    "Zioła": "ziola/ziola-title.png"
};
/* In the publicationInfo object you can set the name of the publication that will 
 * be displayed on the final page of the game. The name of the string must be 
 * the same as the category it corresponds to. */
var publicationInfo = {
    "Inicjały": "Album inicjałów średniowiecznych",
    "Atlas":    "Atlas geograficzny ilustrowany Królestwa Polskiego",
    "Mody":     "Mody Paryzkie. Pismo illustrowane dla kobiet",
    "Ssaki":    "Mały atlas zwierząt ssących",
    "Zioła":    "Atlas ziół leczniczych"
};
/* In the fact object you can set the fact about the publication that will 
 * be displayed on the final page of the game. The name of the string must be 
 * the same as the category it corresponds to. */
var fact = {
    "Inicjały": "Inicjały to ozdobne litery rozpoczynające rozdział lub akapit. Album zawiera inicjały pochodzące z&nbsp;Włoch, z&nbsp;początku XVI&nbsp;wieku. Bogatą kolekcję ręcznie malowanych i&nbsp;zdobionych liter można <a href='http://www.polona.pl/item/8636953/16/'>podziwiać</a> w&nbsp;Cyfrowej Bibliotece Narodowej Polona.",
    "Atlas":    "Atlas został wydany w&nbsp;latach 1903-1907 przez Józefa Michała Bazewicza. Stanowi cenne źródło wiadomości geograficznych, historycznych i&nbsp;gospodarczych. Publikację można <a href='http://zbc.uz.zgora.pl/dlibra/doccontent?id=14646&from=publication'>zobaczyć</a> w&nbsp;Zielonogórskiej Bibliotece Cyfrowej.",
    "Mody":     "Mody Paryzkie były wydawane w&nbsp;latach 1879-1883 w&nbsp;Warszawie. Periodyk przekazywał informacje dotyczące najnowszych trendów modowych, instruował jak wykonać samodzielnie stroje i&nbsp;dodatki, udzielał porad dotyczących dobrego wychowania. Zawierał także utwory literackie, drukowane odcinkami. Z&nbsp;wydawnictwem można się <a href='http://ebuw.uw.edu.pl/dlibra/publication?id=58154&tab=3'>zapoznać</a> w&nbsp;E-Bibliotece Uniwersytetu Warszawskiego.", 
    "Ssaki":    "Atlas został wydany w&nbsp;roku 1931. Zawiera rysunki i&nbsp;krótkie opisy ssaków, nie tylko Polski, ale także z&nbsp;krajów egzotycznych. Z&nbsp;publikacją można się <a href='http://www.wbc.poznan.pl/dlibra/publication?id=133115&tab=3'>zapoznać</a> dzięki Łowieckiej Bibliotece Cyfrowej Krzysztofa Daszkiewicza.",
    "Zioła":    "Atlas został wydany w&nbsp;roku 1925 przez Wydawnictwo M.&nbsp;Arcta w&nbsp;Warszawie. Zawiera 46 kolorowych ilustracji, pomagających w&nbsp;identyfikacji ponad 70 roślin leczniczych. Publikację można <a href='http://kpbc.umk.pl/dlibra/doccontent?id=39570&from=publication'>obejrzeć</a> w&nbsp;Kujawsko-Pomorskiej Bibliotece Cyfrowej."
};
