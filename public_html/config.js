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

var ageCategories = {
  "five": ["Atlas", "Ssaki", "Zioła"],
  "nine": ["Inicjały", "Atlas", "Moda", "Ssaki", "Zioła"],
  "overNine": ["Inicjały", "Atlas", "Moda", "Ssaki", "Zioła"]
};
        
var category = {
    "Inicjały": {
        "images": [
            "literki/a_180.jpg",
            "literki/a_180.jpg",
            "literki/a_smok_180.jpg", 
            "literki/a_smok_180.jpg",
            "literki/d_180.jpg",
            "literki/d_180.jpg", 
            "literki/h2_180.jpg",
            "literki/h2_180.jpg",
            "literki/m_180.jpg", 
            "literki/m_180.jpg",
            "literki/l_180.jpg",
            "literki/l_180.jpg",
            "literki/u_180.jpg",
            "literki/u_180.jpg",
            "literki/o_180.jpg",
            "literki/o_180.jpg",
            "literki/o2_180.jpg",
            "literki/o2_180.jpg",
            "literki/p_180.jpg",
            "literki/p_180.jpg",
            "literki/q_180.jpg",
            "literki/q_180.jpg",
            "literki/s_180.jpg",
            "literki/s_180.jpg"                                                       
        ]
    },
    "Atlas": {
        "images": [
            "atlas155x155/atlas-009.png",
            "atlas155x155/atlas-009.png",
            "atlas155x155/atlas-010.png",
            "atlas155x155/atlas-010.png",
            "atlas155x155/atlas-012.png",
            "atlas155x155/atlas-012.png",
            "atlas155x155/atlas-014.png",
            "atlas155x155/atlas-014.png",
            "atlas155x155/atlas-016.png",
            "atlas155x155/atlas-016.png",
            "atlas155x155/atlas-020.png",
            "atlas155x155/atlas-020.png",
            "atlas155x155/atlas-022.png",
            "atlas155x155/atlas-022.png",
            "atlas155x155/atlas-024.png",
            "atlas155x155/atlas-024.png",
            "atlas155x155/atlas-026.png",
            "atlas155x155/atlas-026.png",
            "atlas155x155/atlas-028.png",
            "atlas155x155/atlas-028.png",
            "atlas155x155/atlas-030.png",
            "atlas155x155/atlas-030.png",
            "atlas155x155/atlas-032.png",
            "atlas155x155/atlas-032.png"
        ]
    },
    "Moda": {
        "images": [
            "mody155x155/01.png",
            "mody155x155/01.png",
            "mody155x155/02.png",
            "mody155x155/02.png",
            "mody155x155/03.png",
            "mody155x155/03.png",
            "mody155x155/04.png",
            "mody155x155/04.png",
            "mody155x155/05.png",
            "mody155x155/05.png",
            "mody155x155/08.png",
            "mody155x155/08.png",
            "mody155x155/09.png",
            "mody155x155/09.png",
            "mody155x155/11.png",
            "mody155x155/11.png",
            "mody155x155/12.png",
            "mody155x155/12.png",
            "mody155x155/13.png",
            "mody155x155/13.png",
            "mody155x155/14.png",
            "mody155x155/14.png",
            "mody155x155/15.png",
            "mody155x155/15.png",
            "mody155x155/16.png",
            "mody155x155/16.png"
        ]
    },
    "Ssaki": {
        "images": [
            "ssaki155x155/ssaki02-022.png",
            "ssaki155x155/ssaki02-022.png",
            "ssaki155x155/ssaki01-000.png",
            "ssaki155x155/ssaki01-000.png",
            "ssaki155x155/ssaki01-018.png",
            "ssaki155x155/ssaki01-018.png",
            "ssaki155x155/ssaki01-019.png",
            "ssaki155x155/ssaki01-019.png",
            "ssaki155x155/ssaki01-021.png",
            "ssaki155x155/ssaki01-021.png",
            "ssaki155x155/ssaki01-022.png",
            "ssaki155x155/ssaki01-022.png",
            "ssaki155x155/ssaki01-023.png",
            "ssaki155x155/ssaki01-023.png",
            "ssaki155x155/ssaki01-024.png",
            "ssaki155x155/ssaki01-024.png",
            "ssaki155x155/ssaki01-025.png",
            "ssaki155x155/ssaki01-025.png",
            "ssaki155x155/ssaki01-026.png",
            "ssaki155x155/ssaki01-026.png",
            "ssaki155x155/ssaki01-027.png",
            "ssaki155x155/ssaki01-027.png",
            "ssaki155x155/ssaki02-020.png",
            "ssaki155x155/ssaki02-020.png"
        ]
    },
    "Zioła": {
        "images": [
            "zioła155x155/zioła-006.png",
            "zioła155x155/zioła-006.png",
            "zioła155x155/zioła-007.png",
            "zioła155x155/zioła-007.png",
            "zioła155x155/zioła-008.png",
            "zioła155x155/zioła-008.png",
            "zioła155x155/zioła-009.png",
            "zioła155x155/zioła-009.png",
            "zioła155x155/zioła-010.png",
            "zioła155x155/zioła-010.png",
            "zioła155x155/zioła-011.png",
            "zioła155x155/zioła-011.png",
            "zioła155x155/zioła-012.png",
            "zioła155x155/zioła-012.png",
            "zioła155x155/zioła-013.png",
            "zioła155x155/zioła-013.png",
            "zioła155x155/zioła-015.png",
            "zioła155x155/zioła-015.png",
            "zioła155x155/zioła-016.png",
            "zioła155x155/zioła-016.png",
            "zioła155x155/zioła-017.png",
            "zioła155x155/zioła-017.png",
            "zioła155x155/zioła-018.png",
            "zioła155x155/zioła-018.png"            
        ]
    }
};

var publicationImg = {
    "Inicjały": "literki/a_180.jpg",
    "Atlas": "atlas155x155/atlas-009.png",
    "Moda": "mody155x155/01.png",
    "Ssaki": "ssaki155x155/ssaki02-022.png",
    "Zioła": "zioła155x155/zioła-006.png"
};

var publicationInfo = {
    "Inicjały": "Inicjały",
    "Atlas": "Atlas",
    "Moda": "Moda",
    "Ssaki": "Ssaki",
    "Zioła": "Zioła"
};