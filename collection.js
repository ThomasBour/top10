const collection = [
    {
      img:'images/leagueoflegendstest (1).jpg',
      title: 'League of legends',
      author: 'Riot games',
      category: ['MOBA'],
      link: 'https://play.euw.leagueoflegends.com/fr_FR',
      description: "League of legends est certainement le MOBA le plus connu au monde, le jeu est sorti le 27 Octobre 2009 et reste dans les jeux les plus joués au monde.",
    },
    {
    title: 'The binding of Isaac',
    author: 'Edmund McMillen et Florian Himsl',
    category: ['Rogue Like'],
    link: 'https://play.euw.leagueoflegends.com/fr_FR',
    description:"The binding of Isaac est certainement le roguelike le plus connu de par sa durée de vie, ses presques 1 000 succès et tous ses dlc.",
    img:"images/TBDOI.jpg",
    },
    {
    title: 'Teamfight Tactics',
    author: 'Riot Games',
    category: ['AutoChess'],
    link: 'https://teamfighttactics.leagueoflegends.com/fr-fr/',
    description:"TeamFight Tactics ou également appelé TFT est un autochess créé par Riot Games,les créateurs de League of legends, et sorti en été 2019.",
    img:"images/tft (1).jpg",
    },
    {
    title: 'Hadès',
    author: 'Supergiant Games',
    category: ['Rogue Like'],
    link: 'https://store.steampowered.com/app/1145360/Hades/?l=french',
    description:"Hades est un rogue-like en mode dungeon crawler qui associe le meilleur des titres de Supergiant Games salués par la critique.",
    img:"images/hades (1).png",
    },
    {
    title: 'Dofus',
    author: 'Ankama',
    category: ['MMO'],
    link: 'https://www.dofus.com/fr/prehome',
    description:"Dofus est un jeu de rôle en ligne massivement multijoueur français développé et édité par Ankama puis par sa filiale Ankama Games dès sa création en 2004.",
    img:"images/dofus-aTLTcV (1).jpg",
    },
    {
    title: 'World of Warcraft',
    author: 'Blizzard',
    category: ['MMO'],
    link: 'https://worldofwarcraft.com/fr-fr/',
    description:"World of Warcraft est un jeu vidéo de type MMORPG développé par la société Blizzard Entertainment. C'est le 4ᵉ jeu de l'univers médiéval-fantastique Warcraft",
    img:"images/Wow.jpg",
    },
    {
    title: 'Genshin Impact',
    author: 'miHoYo',
    category: ['Action-RPG'],
    link: 'https://genshin.mihoyo.com/en',
    description:"Genshin Impact est un jeu vidéo de type action-RPG développé par miHoYo. Le but du jeu est de collectionner des personnages et explorer le monde ouvert.",
    img:"images/genshin-impact-cover (1).jpg",
    },
    {
    title: 'Valorant',
    author: 'Riot Games',
    category: ['FPS'],
    link: 'https://playvalorant.com/en-gb/',
    description:"Valorant est un jeu vidéo free-to-play de tir à la première personne en multijoueur développé et édité par Riot Games et sorti le 2 juin 2020.Annoncé lors du 10ième anniversaire de League of legends en 2019.",
    img:"images/testvalo.webp",
    },
    {
    title: 'Risk of rain 2',
    author: 'Hopoo Games',
    category: ['Rogue Like'],
    link: 'https://store.steampowered.com/app/632360/Risk_of_Rain_2/',
    description:"Risk of Rain 2 est un jeu vidéo de tir à la troisième personne en 3D développé par le développeur indépendant Hopoo Games et édité par Gearbox Publishing.",
    img:"images/risk-of-rain-2-cover.jpg",
    },
    {
    title: 'Diablo 3',
    author: 'Blizzard',
    category: ['Hack and Slash'],
    link: 'https://eu.diablo3.com/fr-fr/',
    description:"Diablo III est un jeu vidéo d'action et de rôle de type hack and slash développé par Blizzard. Le jeu a bénéficié d'une sortie mondiale le 15 mai 2012.",
    img:"images/diablo3.jpg",
    },
    {
    title: 'Zelda : Twilight Princess',
    author: 'Nintendo',
    category: ['Action-aventure'],
    link: 'https://www.nintendo.be/fr/Jeux/Wii-U/The-Legend-of-Zelda-Twilight-Princess-HD-1082222.html',
    description:"The Legend of Zelda: Twilight Princess est un jeu vidéo d'action-aventure développé par Nintendo EAD et édité par Nintendo, sorti sur GameCube et Wii en 2006.",
    img:"images/zelda.jpg",
    },
    {
    title: 'Temtem',
    author: 'Crema et Humble Bundle',
    category: ['MMO'],
    link: 'https://store.steampowered.com/app/745920/Temtem/',
    description:"Temtem est un jeu de rôle en ligne MMO développé par le studio espagnol Crema et édité par Humble Bundle. Le jeu est sorti en accès anticipé via Steam le 21 janvier 2020",
    img:"images/temtem.jpg",
},
];


const mainContainer = document.querySelector(".supp");
mainContainer.innerHTML = "";

for (let element of collection){

    const colonne = document.createElement('div');
    colonne.className = 'col-12 col-sm-6 col-md-4 col-xl-3 mb-4';
    mainContainer.appendChild(colonne);

    const card = document.createElement('div');
    card.className = 'card text-white bg-dark';
    colonne.appendChild(card);

    const image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = element.img;
    card.appendChild(image);

    const card_body = document.createElement('div');
    card_body.className = 'card-body';
    card.appendChild(card_body);

    const lientitre = document.createElement('a');
    lientitre.href = element.link;
    lientitre.target = '_blank'
    card_body.appendChild(lientitre);


    const titre5 = document.createElement('h5');
    titre5.className = 'h5 card-title';
    titre5.textContent = element.title;
    lientitre.appendChild(titre5);

    const badge = document.createElement('a');
    badge.href = '#';
    badge.className = 'badge badge-info';
    badge.textContent = element.category;
    card_body.appendChild(badge);

    const description = document.createElement('p');
    description.className = 'card-text';
    description.textContent = element.description;
    card_body.appendChild(description);

    const footer = document.createElement('footer');
    footer.className = 'blockquote-footer';
    footer.textContent = element.author;
    card_body.appendChild(footer);

    const logo = document.createElement('a');
    logo.href = element.link;
    logo.target = '_blank';
    footer.appendChild(logo);

    const ytb = document.createElement('i');
    ytb.className = 'fa fa-2x fa-youtube-play';
    ytb.style = 'color: red';
    logo.appendChild(ytb);

}
