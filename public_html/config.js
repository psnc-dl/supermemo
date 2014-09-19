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
		"ageRange":    "3+",
		"cardCount":   12,
		"boardWidth":  4,
		"boardHeight": 3,
		"cardSize":    155
	},
	"nine": {
		"ageRange":    "6+",
		"cardCount":   16,
		"boardWidth":  4,
		"boardHeight": 4,
		"cardSize":    155
	},
	"overNine": {
		"ageRange":    "10+",
		"cardCount":   24,
		"boardWidth":  6,
		"boardHeight": 4,
		"cardSize":    155
	}
};
/* In the ageCategories object you can set what image categories will be available 
 * for each of the age categories. After adding a new age category you must add 
 * a new array to the ageCategories object, the array must have the same name 
 * as the newly added age category, and must contain the names of the image 
 * categories that are set in the category object. */
var ageCategories = {
	"five":     ["Atlas", "Ssaki", "Zioła"],
	"nine":     ["Motyle", "Atlas", "Mody", "Ssaki", "Zioła"],
	"overNine": ["Motyle", "Atlas", "Mody", "Ssaki", "Zioła"]
};
/* In the category object you can set the image categories. To add a new image 
 * category you have to add a new object to the category object. The new object 
 * must contain an array named images. The images array contains paths to 
 * images which will be displayed on the game board, each path in the array 
 * must be duplicated. After adding a new image category remember to add it 
 * to the ageCategories object so it will be displayed, and to add it to the
 * publicationImg, publicationInfo and fact objects below. */

/* The order of images in all categories was chosen on purpose, 
 * so that for younger age categories
 * the most distinguishable images were chosen. */
var category = {
	"Inicjały": {
		"images": [
			"cards/inicjaly/s.jpg",
			"cards/inicjaly/s.jpg",
			"cards/inicjaly/a_smok.jpg", 
			"cards/inicjaly/a_smok.jpg",
			"cards/inicjaly/m.jpg", 
			"cards/inicjaly/m.jpg",
			"cards/inicjaly/o.jpg",
			"cards/inicjaly/o.jpg",
			"cards/inicjaly/p.jpg",
			"cards/inicjaly/p.jpg",
			"cards/inicjaly/u2.jpg",
			"cards/inicjaly/u2.jpg",
			"cards/inicjaly/d.jpg",
			"cards/inicjaly/d.jpg", 
			"cards/inicjaly/u.jpg",
			"cards/inicjaly/u.jpg",
			"cards/inicjaly/a.jpg",
			"cards/inicjaly/a.jpg",
			"cards/inicjaly/h2.jpg",
			"cards/inicjaly/h2.jpg",
			"cards/inicjaly/l.jpg",
			"cards/inicjaly/l.jpg",
			"cards/inicjaly/o2.jpg",
			"cards/inicjaly/o2.jpg"
		]
	},
	"Atlas": {
		"images": [
			"cards/atlas/atlas-009.png",
			"cards/atlas/atlas-009.png",
			"cards/atlas/atlas-014.png",
			"cards/atlas/atlas-014.png",
			"cards/atlas/atlas-020.png",
			"cards/atlas/atlas-020.png",
			"cards/atlas/atlas-022.png",
			"cards/atlas/atlas-022.png",
			"cards/atlas/atlas-038.png",
			"cards/atlas/atlas-038.png",
			"cards/atlas/atlas-036.png",
			"cards/atlas/atlas-036.png",
			"cards/atlas/atlas-048.png",
			"cards/atlas/atlas-048.png",
			"cards/atlas/atlas-060.png",
			"cards/atlas/atlas-060.png",
			"cards/atlas/atlas-064.png",
			"cards/atlas/atlas-064.png",
			"cards/atlas/atlas-068.png",
			"cards/atlas/atlas-068.png",
			"cards/atlas/atlas-070.png",
			"cards/atlas/atlas-070.png",
			"cards/atlas/atlas-072.png",
			"cards/atlas/atlas-072.png"
		]
	},
	"Mody": {
		"images": [
			"cards/mody/01.png",
			"cards/mody/01.png",
			"cards/mody/02.png",
			"cards/mody/02.png",
			"cards/mody/05.png",
			"cards/mody/05.png",
			"cards/mody/09.png",
			"cards/mody/09.png",
			"cards/mody/13.png",
			"cards/mody/13.png",
			"cards/mody/15.png",
			"cards/mody/15.png",
			"cards/mody/14.png",
			"cards/mody/14.png",
			"cards/mody/12.png",
			"cards/mody/12.png",
			"cards/mody/16.png",
			"cards/mody/16.png",
			"cards/mody/34.png",
			"cards/mody/34.png",
			"cards/mody/37.png",
			"cards/mody/37.png",
			"cards/mody/30.png",
			"cards/mody/30.png"
		]
	},
	"Ssaki": {
		"images": [
			"cards/ssaki/ssaki01-018.png",
			"cards/ssaki/ssaki01-018.png",
			"cards/ssaki/ssaki01-026.png",
			"cards/ssaki/ssaki01-026.png",
			"cards/ssaki/ssaki02-022.png",
			"cards/ssaki/ssaki02-022.png",
			"cards/ssaki/ssaki02-023.png",
			"cards/ssaki/ssaki02-023.png",
			"cards/ssaki/ssaki03-025.png",
			"cards/ssaki/ssaki03-025.png",
			"cards/ssaki/ssaki01-027.png",
			"cards/ssaki/ssaki01-027.png",
			"cards/ssaki/ssaki02-021.png",
			"cards/ssaki/ssaki02-021.png",
			"cards/ssaki/ssaki02-026.png",
			"cards/ssaki/ssaki02-026.png",
			"cards/ssaki/ssaki03-024.png",
			"cards/ssaki/ssaki03-024.png",
			"cards/ssaki/ssaki03-022.png",
			"cards/ssaki/ssaki03-022.png",
			"cards/ssaki/ssaki03-019.png",
			"cards/ssaki/ssaki03-019.png",
			"cards/ssaki/ssaki02-027.png",
			"cards/ssaki/ssaki02-027.png"
		]
	},
	"Zioła": {
		"images": [
			"cards/ziola/ziola-006.png",
			"cards/ziola/ziola-006.png",
			"cards/ziola/ziola-043.png",
			"cards/ziola/ziola-043.png",
			"cards/ziola/ziola-048.png",
			"cards/ziola/ziola-048.png",
			"cards/ziola/ziola-022.png",
			"cards/ziola/ziola-022.png",
			"cards/ziola/ziola-018.png",
			"cards/ziola/ziola-018.png",
			"cards/ziola/ziola-037.png",
			"cards/ziola/ziola-037.png",
			"cards/ziola/ziola-016.png",
			"cards/ziola/ziola-016.png",
			"cards/ziola/ziola-026.png",
			"cards/ziola/ziola-026.png",
			"cards/ziola/ziola-009.png",
			"cards/ziola/ziola-009.png",
			"cards/ziola/ziola-023.png",
			"cards/ziola/ziola-023.png",
			"cards/ziola/ziola-013.png",
			"cards/ziola/ziola-013.png",
			"cards/ziola/ziola-042.png",
			"cards/ziola/ziola-042.png"
		]
	},
	"Motyle": {
		"images": [
			"cards/motyle/motyle-040.png",
			"cards/motyle/motyle-040.png",
			"cards/motyle/motyle-046.png",
			"cards/motyle/motyle-046.png",
			"cards/motyle/motyle-066.png",
			"cards/motyle/motyle-066.png",
			"cards/motyle/motyle-084.png",
			"cards/motyle/motyle-084.png",
			"cards/motyle/motyle-168.png",
			"cards/motyle/motyle-168.png",
			"cards/motyle/motyle-178.png",
			"cards/motyle/motyle-178.png",
			"cards/motyle/motyle-090.png",
			"cards/motyle/motyle-090.png",
			"cards/motyle/motyle-112.png",
			"cards/motyle/motyle-112.png",
			"cards/motyle/motyle-050.png",
			"cards/motyle/motyle-050.png",
			"cards/motyle/motyle-072.png",
			"cards/motyle/motyle-072.png",
			"cards/motyle/motyle-096.png",
			"cards/motyle/motyle-096.png",
			"cards/motyle/motyle-122.png",
			"cards/motyle/motyle-122.png",
		]
	}
};
/* In the categoryImg object you can set the image that will be used 
 * for the category buttons. The name of the string must be the same as the 
 * category it corresponds to, it should contain the path to the image. */
var categoryImg = {
	"Inicjały":  "cards/inicjaly/a.jpg",
	"Atlas":     "cards/atlas/atlas-009.png",
	"Mody":      "cards/mody/01.png",
	"Ssaki":     "cards/ssaki/ssaki02-022.png",
	"Zioła":     "cards/ziola/ziola-018.png",
	"Motyle":    "cards/motyle/motyle-046.png"
};
/* In the categoryBg object you can set the background image for category buttons. */
var categoryBg = {
	"Inicjały":  "images/hanging01.png",
	"Motyle":    "images/hanging01.png",
	"Atlas":     "images/hanging02.png",
	"Mody":      "images/hanging03.png",
	"Ssaki":     "images/hanging04.png",
	"Zioła":     "images/hanging05.png"
};

/* In the publicationImg object you can set the image of the publication that will 
 * be displayed on the final page of the game. The name of the string must be 
 * the same as the category it corresponds to, it should contain the path to the 
 * publication image. */
var publicationImg = {
	"Inicjały":  "images/titles/inicjaly-title.png",
	"Atlas":     "images/titles/atlas-title.png",
	"Mody":      "images/titles/mody-title.png",
	"Ssaki":     "images/titles/ssaki-title.png",
	"Zioła":     "images/titles/ziola-title.png",
	"Motyle":    "images/titles/motyle-title.png"
};
/* In the publicationInfo object you can set the name of the publication that will 
 * be displayed on the final page of the game. The name of the string must be 
 * the same as the category it corresponds to. */
var publicationInfo = {
	"Inicjały": "Album inicjałów średniowiecznych",
	"Atlas":    "Atlas geograficzny ilustrowany Królestwa Polskiego",
	"Mody":     "Mody Paryzkie. Pismo illustrowane dla kobiet",
	"Ssaki":    "Mały atlas zwierząt ssących",
	"Zioła":    "Atlas ziół leczniczych",
	"Motyle":   "Motyle: 129 rysunków kolorowych"
};
/* In the fact object you can set the fact about the publication that will 
 * be displayed on the final page of the game. The name of the string must be 
 * the same as the category it corresponds to. */
var fact = {
	"Inicjały": "Inicjał to ozdobna litera rozpoczynająca rozdział lub akapit.<br>Album zawiera inicjały pochodzące z&nbsp;Włoch, z&nbsp;początku XVI&nbsp;wieku.<br>Bogatą kolekcję ręcznie malowanych i&nbsp;zdobionych liter można podziwiać<br>w&nbsp;<a target='_blank' href='http://www.polona.pl/item/8636953/16/'>Cyfrowej Bibliotece Narodowej Polona</a>.",
	"Atlas":    "Atlas został wydany w&nbsp;latach 1903-1907 przez Józefa Michała Bazewicza.<br>Stanowi cenne źródło wiadomości geograficznych, historycznych i&nbsp;gospodarczych.<br>Publikację można zobaczyć<br> w&nbsp;<a target='_blank' href='http://zbc.uz.zgora.pl/dlibra/doccontent?id=14646&from=publication'>Zielonogórskiej Bibliotece Cyfrowej</a>.",
	"Mody":     "Mody Paryzkie były wydawane w&nbsp;latach 1879-1883 w&nbsp;Warszawie.<br>Periodyk przekazywał informacje dotyczące najnowszych trendów modowych,<br>instruował jak wykonać samodzielnie stroje i&nbsp;dodatki, udzielał porad dotyczących dobrego wychowania.<br>Zawierał także utwory literackie, drukowane odcinkami.<br>Z&nbsp;wydawnictwem można się zapoznać w&nbsp;<a target='_blank' href='http://ebuw.uw.edu.pl/dlibra/publication?id=58154&tab=3'>E-Bibliotece Uniwersytetu Warszawskiego</a>.", 
	"Ssaki":    "Atlas został wydany w&nbsp;roku 1931.<br>Zawiera rysunki i&nbsp;krótkie opisy ssaków, nie tylko z&nbsp;Polski, ale także z&nbsp;krajów egzotycznych.<br>Z&nbsp;publikacją można się zapoznać dzięki<br><a target='_blank' href='http://www.wbc.poznan.pl/dlibra/publication?id=133115&tab=3'>Łowieckiej Bibliotece Cyfrowej Krzysztofa Daszkiewicza.</a>",
	"Zioła":    "Atlas został wydany w&nbsp;roku 1925 przez Wydawnictwo M.&nbsp;Arcta w&nbsp;Warszawie.<br>Zawiera 46 kolorowych ilustracji, pomagających w&nbsp;identyfikacji ponad 70 roślin leczniczych.<br>Publikację można obejrzeć<br>w&nbsp;<a target='_blank' href='http://kpbc.umk.pl/dlibra/doccontent?id=39570&from=publication'>Kujawsko-Pomorskiej Bibliotece Cyfrowej</a>.",
	"Motyle":   "Opracowanie autorstwa Bohdana Dyakowskiego<br>zawiera 218 kolorowych rysunków motyli, poczwarek i&nbsp;gąsienic, zgromadzonych na&nbsp;18&nbsp;tablicach.<br>Atlas został wydany w&nbsp;1906&nbsp;roku przez Wydawnictwo M.&nbsp;Arcta w&nbsp;Warszawie.<br>Publikację można obejrzeć<br>w&nbsp;<a target='_blank' href='http://rcin.org.pl/dlibra/doccontent?id=5058'>Repozytorium Cyfrowym Instytutów Naukowych</a>."
};

/* In this object you can specify the link to publication that will be available under publicationImg */
var imgLink = {
	"Inicjały": "http://www.polona.pl/item/8636953/16/",
	"Atlas":    "http://zbc.uz.zgora.pl/dlibra/doccontent?id=14646&from=publication",
	"Mody":     "http://ebuw.uw.edu.pl/dlibra/publication?id=58154&tab=3", 
	"Ssaki":    "http://www.wbc.poznan.pl/dlibra/publication?id=133115&tab=3",
	"Zioła":    "http://kpbc.umk.pl/dlibra/doccontent?id=39570&from=publication",
	"Motyle":   "http://rcin.org.pl/dlibra/doccontent?id=5058"
};











