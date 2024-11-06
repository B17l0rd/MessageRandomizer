const heroes = ["Goku", "Vegeta", "Gohan", "Piccolo", "Krillin", "Bulma", "Trunks", "Goten", "Master Roshi", "Yamcha", "Tien Shinhan", "Chiaotzu", "Android 18", "Videl", "Mr. Satan (Hercule)", "Pan", "Uub", "Future Trunks", "Android 17", "Majin Buu (Good)", "Supreme Kai", "Kibito", "Old Kai", "Dende", "Kami", "Korin", "Yajirobe", "Puar", "Oolong", "Launch", "Chi-Chi", "Ox-King", "Bardock", "King Kai", "Grand Kai", "Pikkon", "Jaco", "Bulla (Bra)", "Marron", "Gine", "Tarble", "Whis", "Beerus", "Champa", "Vados", "Cabba", "Caulifla", "Kale", "Hit", "Toppo", "Dyspo", "Merus", "Granolah", "Oob", "Nail", "Guru", "Tapion", "Goku Jr.", "Vegeta Jr.", "Android 16", "Fortuneteller Baba", "Mr. Popo", "Zeno", "Grand Priest", "Gogeta", "Vegito", "Gotenks", "Kefla", "Shin"];

const vilans = ["Pilaf","Shu","Mai","Red Ribbon Army","Commander Red","Adjunct Black","Colonel Silver","Sergeant Murasaki","General White","General Blue","Tao Pai Pai","Tenshinhan","Chaozu","Crane Hermit","King Piccolo","Tambourine","Cymbal","Drum","Piano","Piccolo Jr.","Raditz","Nappa","Vegeta","Frieza","Cui","Zarbon","Dodoria","Ginyu Force","Captain Ginyu","Burter","Jeice","Recoome","Guldo","Garlic Jr.","Dr. Gero","Android 19","Android 16","Android 17","Android 18","Cell","Spopovich","Yamu","Pui Pui","Yakon","Dabura","Babidi","Majin Buu","Super Buu","Kid Buu","Beerus","Whis","Champa","Vados","Frost","Magetta","Hit","Goku Black","Zamasu","Fused Zamasu","Jiren","Toppo","Kale","Caulifla","Kefla","Broly","Paragus","Moro","Saganbo","OG73-1","Granolah","Gas","Elec","Macki","Oil"];

const grounds = ["Earth", "Namek", "Planet Vegeta", "Other World", "King Kai's Planet", "Supreme Kai's World", "Hell", "Hyperbolic Time Chamber", "Kami's Lookout", "Kame House", "Papaya Island", "World Martial Arts Tournament Arena", "Cell Games Arena", "Beerus' Planet", "Universe 6 Tournament Arena", "Tournament of Power Arena", "Planet Yardrat", "Planet Vampa", "New Planet Namek", "Fake Namek", "Planet Frieza 79", "Planet Meat", "Planet Kanassa", "Planet Cereal", "Planet Zoon", "Planet Zun", "Planet Imecka", "Planet M-2", "Planet Luud", "Demon Realm", "Babidi's Spaceship", "Korin Tower", "Muscle Tower", "Penguin Village", "Mount Paozu", "Fire Mountain", "Yunzabit Heights", "Gizard Wasteland", "Diablo Desert", "Break Wasteland", "Rocky Area", "Islands", "Archipelago", "Sacred World of the Kai", "Grand Kai's Planet", "Planet of the Kais", "Zeno's Palace", "Whis' Castle", "Capsule Corporation", "Red Ribbon Army Headquarters", "Dr. Gero's Laboratory", "Baba's Palace", "Otherworld Tournament Arena", "Snake Way"];



function rand (array) {
    let i = Math.floor(Math.random() * array.length)
    return  array[i]
}


function setUp(){
    let heroe = {
        name : rand(heroes)
    };
    let vilan ={
        name : rand(vilans)
    };
    let place ={
        name : rand (grounds)
    }
    console.log(`In Today's fight our Hero ${heroe} will face the mighty ${vilan} and the figth is taking place on ${place}`)
}