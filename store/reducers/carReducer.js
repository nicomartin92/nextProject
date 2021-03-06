import PubSub from 'pubsub-js';
import _ from 'lodash';

const initialState = {
    overlay: false,
    toast: false,
    activeCar: [],
    visibleContent: true,
    stock: 14,
    survey: [
        {
            "label": "Quel modèle souhaitez-vous voir reproduit en 1/18 ?",
            "submit": "Envoyer votre réponse",
            "questions": [
                {
                    "id": 1,
                    "model": "Peugeot Boxer"
                },
                {
                    "id": 2,
                    "model": "Renault trafic"
                }
            ]
        }
    ],
    cars: [
        {
            "id": 1,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Peugeot",
            "model": "305",
            "version": "GTX",
            "year": "1985",
            "reference": "OT104",
            "color": "#868C8C",
            "colorname": "Winchester Grey",
            "colorref": "gray",
            "material": "resine",
            "image": "/cars/peugeot/peugeot-305-gtx.jpg",
            "views": [
                {
                    "image1": "/cars/peugeot/peugeot-305-gtx-profil.jpg",
                    "image2": "/cars/peugeot/peugeot-305-gtx-rear.jpg"
                }
            ],
            "available": false,
            "sold": false,
            "keep": true,
            "price": 90,
            "size": "1/18",
            "description": "",
            "category": "berline",
            "segment": "segment C",
            "new": false,
            "stock": 0,
            "preference": 3
        },
        {
            "id": 2,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Peugeot",
            "model": "505",
            "version": "v6",
            "year": "1987",
            "reference": "OT057",
            "color": "#373F52",
            "colorname": "Bleu Delft",
            "colorref": "blue",
            "material": "resine",
            "image": "/cars/peugeot/peugeot-505-v6.jpg",
            "views": [
                {
                    "image1": "/cars/peugeot/peugeot-505-v6-profil.jpg",
                    "image2": "/cars/peugeot/peugeot-505-v6-rear.jpg"
                }
            ],
            "available": false,
            "sold": false,
            "keep": true,
            "price": 130,
            "size": "1/18",
            "description": "",
            "category": "berline",
            "segment": "segment D",
            "new": false,
            "stock": 0,
            "preference": 12
        },
        {
            "id": 3,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Renault",
            "model": "Megane 4",
            "version": "RS",
            "year": "2017",
            "reference": "OT751",
            "color": "#B92B29",
            "colorname": "Rouge Flamme",
            "colorref": "red",
            "material": "resine",
            "image": "/cars/renault/renault-megane-rs-trophy.jpg",
            "views": [
                {
                    "image1": "/cars/renault/renault-megane-rs-trophy-profil.jpg",
                    "image2": "/cars/renault/renault-megane-rs-trophy-rear.jpg"
                }
            ],
            "available": false,
            "sold": true,
            "keep": true,
            "price": 95,
            "size": "1/18",
            "description": "La Megane RS Trophy de 2018 est la plus puissante des Megane jamais construite. Pour passer la barre des 300 chevaux elle se dote du moteur de sa cousine Alpine dans une version retravaillée. La puissance augmente de 20 chevaux tandis que le couple progresse lui de 20 Nm. La transmission est confiée à une boîte EDC à double embrayage et 6 rapports. Avec une vitesse de pointe de 260 km/h, cette Megane n’a plus grand chose de commun avec une paisible compacte.",
            "category": "compact",
            "segment": "segment C",
            "new": false,
            "stock": 0,
            "preference": 10
        },
        {
            "id": 4,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Alpine",
            "model": "A110",
            "version": "v6",
            "year": "2017",
            "reference": "OT278",
            "color": "#0043B2",
            "colorname": "Bleu Alpine",
            "colorref": "blue",
            "material": "resine",
            "image": "/cars/alpine/alpine-a110-premiere-edition.jpg",
            "views": [
                {
                    "image1": "/cars/alpine/alpine-a110-premiere-edition-profil.jpg",
                    "image2": "/cars/alpine/alpine-a110-premiere-edition-rear.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": false,
            "price": 100,
            "size": "1/18",
            "description": "Réinterprétation moderne de la Berlinette originale, la Première Edition est lancée au printemps 2017 et marque le retour tant espéré et attendu de la marque. Produite à 1955 exemplaires seulement, cette série limitée rend hommage à l’année de création d’Alpine par Jean Rédélé.",
            "category": "coupe",
            "segment": "segment sportive",
            "new": false,
            "stock": 0,
            "preference": 7
        },
        {
            "id": 5,
            "country": "de",
            "brandshop": "Ottomobile",
            "brand": "Bmw",
            "model": "E36",
            "version": "M3",
            "year": "1998",
            "reference": "OT307",
            "color": "#4B3F4D",
            "colorname": "Daytona Violet",
            "colorref": "purple",
            "material": "resine",
            "image": "/cars/bmw/bmw-e36-m3-4-doors.jpg",
            "views": [
                {
                    "image1": "/cars/bmw/bmw-e36-m3-4-doors-profil.jpg",
                    "image2": "/cars/bmw/bmw-e36-m3-4-doors-rear.jpg"
                }
            ],
            "available": false,
            "sold": false,
            "keep": true,
            "price": 120,
            "size": "1/18",
            "description": "",
            "category": "berline",
            "segment": "segment D",
            "new": false,
            "stock": 0,
            "preference": 14
        },
        {
            "id": 6,
            "country": "de",
            "brandshop": "Ottomobile",
            "brand": "Bmw",
            "model": "E34",
            "version": "M5 phase 1",
            "year": "1989",
            "reference": "OT690",
            "color": "#101010",
            "colorname": "Black I 086",
            "colorref": "black",
            "material": "resine",
            "image": "/cars/bmw/bmw-e34-m5-phase-i.jpg",
            "views": [
                {
                    "image1": "/cars/bmw/bmw-e34-m5-phase-i-profil.jpg",
                    "image2": "/cars/bmw/bmw-e34-m5-phase-i-rear.jpg"
                }
            ],
            "available": false,
            "sold": true,
            "keep": true,
            "price": 90,
            "size": "1/18",
            "description": "",
            "category": "berline",
            "segment": "segment E",
            "new": false,
            "stock": 0,
            "preference": 15
        },
        {
            "id": 7,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Renault",
            "model": "Megane 4",
            "version": "RS Trophy",
            "year": "2018",
            "reference": "OT807",
            "color": "#000000",
            "colorname": "Noir étoilé",
            "colorref": "black",
            "material": "resine",
            "image": "/cars/renault/renault-megane-rs-trophy-n.jpg",
            "views": [
                {
                    "image1": "/cars/renault/renault-megane-rs-trophy-n-profil.jpg",
                    "image2": "/cars/renault/renault-megane-rs-trophy-n-rear.jpg"
                }
            ],
            "available": false,
            "sold": false,
            "keep": true,
            "price": 100,
            "size": "1/18",
            "description": "La Megane RS Trophy de 2018 est la plus puissante des Megane jamais construite. Pour passer la barre des 300 chevaux elle se dote du moteur de sa cousine Alpine dans une version retravaillée.",
            "category": "compact",
            "segment": "segment C",
            "new": true,
            "stock": 0,
            "preference": 9
        },
        {
            "id": 8,
            "country": "it",
            "brandshop": "Ottomobile",
            "brand": "Alfa Romeo",
            "model": "Giulia",
            "version": "QV Quadrifoglio",
            "year": "2018",
            "reference": "OT284",
            "color": "#AF3432",
            "colorname": "Rosso Competizione",
            "colorref": "red",
            "material": "resine",
            "image": "/cars/alfa-romeo/alfa-romeo-giulia-quadrifoglio.jpg",
            "views": [
                {
                    "image1": "/cars/alfa-romeo/alfa-romeo-giulia-quadrifoglio-profil.jpg",
                    "image2": "/cars/alfa-romeo/alfa-romeo-giulia-quadrifoglio-rear.jpg"
                }
            ],
            "available": false,
            "sold": true,
            "keep": true,
            "price": 120,
            "size": "1/18",
            "description": "L’Alfa Romeo Giulia Quadrifoglio est bouillante comme un volcan italien en éruption. Avec ses 4 sorties d’échappement format XXL, son diffuseur arrière, ses disques en carbone céramique, son capot en carbone, elle renferme une pièce d'orfèvrerie.",
            "category": "berline",
            "segment": "segment D",
            "new": false,
            "stock": 0,
            "preference": 8
        },
        {
            "id": 9,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Peugeot",
            "model": "205",
            "version": "Dimma",
            "year": "1989",
            "reference": "OT817",
            "color": "#FFFFFF",
            "colorname": "Noir",
            "colorref": "black",
            "material": "resine",
            "image": "/cars/peugeot/peugeot-205-dimma.jpg",
            "views": [
                {
                    "image1": "/cars/peugeot/peugeot-205-dimma-profil.jpg",
                    "image2": "/cars/peugeot/peugeot-205-dimma-rear.jpg"
                }
            ],
            "available": false,
            "sold": true,
            "keep": false,
            "price": 99,
            "size": "1/18",
            "description": "A la fin des années 80, une mode venue d’Allemagne consiste à personnaliser son véhicule. La société belge Distribution et d’Importation Michel Malherbe Associés (DIMMA) décide de se lancer dans le secteur en proposant des kits pour les Peugeot.",
            "category": "citadine",
            "segment": "segment C",
            "new": false,
            "stock": 1
        },
        {
            "id": 10,
            "country": "de",
            "brandshop": "Ottomobile",
            "brand": "Bmw",
            "model": "E46",
            "version": "M3 CSL",
            "year": "2003",
            "reference": "G034",
            "color": "#000000",
            "colorname": "Black",
            "colorref": "black",
            "material": "resine",
            "image": "/cars/bmw/bmw-e46-m3-csl.jpg",
            "views": [
                {
                    "image1": "/cars/bmw/bmw-e46-m3-csl-profil.jpg",
                    "image2": "/cars/bmw/bmw-e46-m3-csl-rear.jpg"
                }
            ],
            "available": false,
            "sold": false,
            "keep": true,
            "price": 200,
            "size": "1/12",
            "description": "(R)évolution de la M3 E46, la CSL se veut plus puissante (360ch), plus précise (trains revus) et plus légère (1385kg) que sa grande sœur. Le kit carrosserie évolue pour la rendre plus bestiale (pare-chocs, malle arrière avec becquet intégré, jantes en 19 et toit tout carbone). ",
            "category": "coupe",
            "segment": "segment sportive",
            "new": true,
            "stock": 0,
            "preference": 2
        },
        {
            "id": 11,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Alpine",
            "model": "A110",
            "version": "Pure",
            "year": "2018",
            "reference": "OT736",
            "color": "#FFFFFF",
            "colorname": "White pearl",
            "colorref": "white",
            "material": "resine",
            "image": "/cars/alpine/alpine-a110-pure.jpg",
            "views": [
                {
                    "image1": "/cars/alpine/alpine-a110-pure-profil.jpg",
                    "image2": "/cars/alpine/alpine-a110-pure-rear.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": false,
            "price": 100,
            "size": "1/18",
            "description": "La nouvelle A110 marque le retour tant attendu de la marque Alpine. La version Pure est destinée à ceux qui cherchent encore plus de sportivité.",
            "category": "sportive",
            "segment": "segment B",
            "new": false,
            "stock": 1,
            "preference": 22
        },
        {
            "id": 12,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Renault",
            "model": "Clio 4",
            "version": "R.S",
            "year": "2015",
            "reference": "OT257",
            "color": "#E1E5E4",
            "colorname": "Blanc perle Mica",
            "colorref": "white",
            "material": "resine",
            "image": "/cars/renault/renault-clio-4-rs.jpg",
            "views": [
                {
                    "image1": "/cars/renault/renault-clio-4-rs-profil.jpg",
                    "image2": "/cars/renault/renault-clio-4-rs-rear.jpg"
                }
            ],
            "available": false,
            "sold": false,
            "keep": true,
            "price": 110,
            "size": "1/18",
            "description": "La version RS de la Renault Clio 4 se distingue de ses sœurs par un bouclier et un becquet spécifiques, de nouvelles jantes et un diffuseur d’air. ",
            "category": "citadine",
            "segment": "segment B",
            "new": true,
            "stock": 0,
            "preference": 16
        },
        {
            "id": 13,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Renault",
            "model": "Clio 2",
            "version": "R.S",
            "year": "2004",
            "reference": "OT552",
            "color": "#F6EC6D",
            "colorname": "Sirius Yellow",
            "colorref": "yellow",
            "material": "resine",
            "image": "/cars/renault/renault-clio-2-rs-ph-3.jpg",
            "views": [
                {
                    "image1": "/cars/renault/renault-clio-2-rs-ph-3-profil.jpg",
                    "image2": "/cars/renault/renault-clio-2-rs-ph-3-rear.jpg"
                }
            ],
            "available": false,
            "sold": false,
            "keep": true,
            "price": 140,
            "size": "1/18",
            "description": "",
            "category": "citadine",
            "segment": "segment B",
            "new": false,
            "stock": 0,
            "preference": 5
        },
        {
            "id": 14,
            "country": "us",
            "brandshop": "Ottomobile",
            "brand": "Ford",
            "model": "Focus",
            "version": "RS",
            "year": "2018",
            "reference": "OT802",
            "color": "#DE2A1C",
            "colorname": "Race Red",
            "colorref": "red",
            "material": "resine",
            "image": "/cars/ford/ford-focus-rs-2018.jpg",
            "views": [
                {
                    "image1": "/cars/ford/ford-focus-rs-2018-profil.jpg",
                    "image2": "/cars/ford/ford-focus-rs-2018-rear.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": true,
            "price": 110,
            "size": "1/18",
            "description": "Ford focus description ...",
            "category": "compacte",
            "segment": "segment C",
            "new": true,
            "stock": 1
        },
        {
            "id": 15,
            "country": "de",
            "brandshop": "GT Spirit",
            "brand": "Bmw",
            "model": "M235",
            "version": "I",
            "year": "2014",
            "reference": "GT039",
            "color": "#700C0E",
            "colorname": "red",
            "colorref": "red",
            "material": "resine",
            "image": "/cars/bmw/bmw-m235i-01-3.jpg",
            "views": [
                {
                    "image1": "/cars/bmw/bmw-m235i-01-3-profil.jpg",
                    "image2": "/cars/bmw/bmw-m235i-01-3-rear.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": true,
            "price": 115,
            "size": "1/18",
            "description": "Derrière son aspect extérieur relativement sage, la M 235i cache un précieux atout qui saurait convaincre n’importe quel amateur de conduite sportive : un moteur 6 cylindres de 326 chevaux délivré aux seules roues arrières. Un coupé véritablement conçu pour le plaisir.",
            "category": "coupe",
            "segment": "segment sportive",
            "new": true,
            "stock": 1
        },
        {
            "id": 16,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Peugeot",
            "model": "306",
            "version": "Maxi Rallye National de Haute-Provence 2017",
            "year": "1996",
            "reference": "OT829",
            "color": "#053CB1",
            "colorname": "Rallye National de Haute-Provence",
            "colorref": "white",
            "material": "resine",
            "image": "/cars/peugeot/peugeot-306-maxi-2017.jpg",
            "views": [
                {
                    "image1": "/cars/peugeot/peugeot-306-maxi-2017-profil.jpg",
                    "image2": "/cars/peugeot/peugeot-306-maxi-2017-rear.jpg"
                }
            ],
            "available": false,
            "sold": false,
            "keep": true,
            "price": 110,
            "size": "1/18",
            "description": "Quand une légende rencontre une autre légende cela donne ce projet fou du Sébastien Loeb Racing : remettre au goût du jour une Peugeot 306 Maxi.",
            "category": "compacte",
            "segment": "segment C",
            "new": false,
            "stock": 0
        },
        {
            "id": 17,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Peugeot",
            "model": "405",
            "version": "Mi16 le Mans Rouge",
            "year": "1985",
            "reference": "OT865",
            "color": "#AB0A02",
            "colorname": "Rouge",
            "colorref": "red",
            "material": "resine",
            "image": "/cars/peugeot/peugeot-405-mi16-le-mans-rouge.jpg",
            "views": [
                {
                    "image1": "/cars/peugeot/peugeot-405-mi16-le-mans-rouge-profil.jpg",
                    "image2": "/cars/peugeot/peugeot-405-mi16-le-mans-rouge-rear.jpg"
                }
            ],
            "available": false,
            "sold": true,
            "keep": true,
            "price": 100,
            "size": "1/18",
            "description": "Présentée à Francfort en 1993, l’Audi RS2 apparaît sous les traits d’un banal break Audi 80. Pourtant cette sportive va révolutionner le créneau des familiales.",
            "category": "berline",
            "segment": "segment D",
            "new": false,
            "stock": 0
        },
        {
            "id": 18,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Renault",
            "model": "Clio",
            "version": "16v ph2",
            "year": "1995",
            "reference": "OT744",
            "color": "#141B40",
            "colorname": "Monaco Blue",
            "colorref": "blue",
            "material": "resine",
            "image": "/cars/renault/renault-clio-16v-ph2.jpg",
            "views": [
                {
                    "image1": "/cars/renault/renault-clio-16v-ph2-profil.jpg",
                    "image2": "/cars/renault/renault-clio-16v-ph2-rear.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": true,
            "price": 95,
            "size": "1/18",
            "description": "La Clio 16 soupapes avait une lourde tâche à assumer. Succéder aux mythiques Renault 5 Turbo et Supercinq GT Turbo dans la dynastie des petites sportives du constructeur.",
            "category": "citadine",
            "segment": "segment B",
            "new": true,
            "stock": 2
        },
        {
            "id": 19,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Peugeot",
            "model": "205",
            "version": "GTI 1.9 ph2",
            "year": "1989",
            "reference": "G041",
            "color": "#184DAD",
            "colorname": "Blue Miami",
            "colorref": "blue",
            "material": "resine",
            "image": "/cars/peugeot/peugeot-205-gti-19.jpg",
            "views": [
                {
                    "image1": "/cars/peugeot/peugeot-205-gti-19-profil.jpg",
                    "image2": "/cars/peugeot/peugeot-205-gti-19-rear.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": true,
            "price": 199,
            "size": "1/12",
            "description": "On dit de cette voiture qu’elle a sauvé la marque au lion dans les années 80. Si la Peugeot 205 est depuis longtemps devenue une icône, c’est en grande partie grâce à cette version GTI, sortie le 1er mars 1984.",
            "category": "citadine",
            "segment": "segment B",
            "new": true,
            "stock": 1,
            "preference": 1
        },
        {
            "id": 20,
            "country": "de",
            "brandshop": "Ottomobile",
            "brand": "Bmw",
            "model": "E30 325i",
            "version": "sedan",
            "year": "1988",
            "reference": "OT819",
            "color": "#4D4D4F",
            "colorname": "Dolphin Grey",
            "colorref": "gray",
            "material": "resine",
            "image": "/cars/bmw/bmw-e30-325i.jpg",
            "views": [
                {
                    "image1": "/cars/bmw/bmw-e30-325i-profil.jpg",
                    "image2": "/cars/bmw/bmw-e30-325i-rear.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": true,
            "price": 100,
            "size": "1/18",
            "description": "Avant la mythique M3 E30, il y avait sa version de « base » déjà très séduisante. Produite de 1985 à 1993 la belle allemande développait 168cv et était, bien entendu, une propulsion.",
            "category": "suv",
            "segment": "segment suv",
            "new": true,
            "stock": 1,
            "preference": 19
        },
        {
            "id": 21,
            "country": "it",
            "brandshop": "Ottomobile",
            "brand": "Alfa Romeo",
            "model": "Stelvio",
            "version": "Quadrifoglio",
            "year": "2017",
            "reference": "OT285",
            "color": "#710507",
            "colorname": "Rosso Competizione",
            "colorref": "red",
            "material": "resine",
            "image": "/cars/alfa-romeo/alfa-romeo-stelvio-quadrifoglio.jpg",
            "views": [
                {
                    "image1": "/cars/alfa-romeo/alfa-romeo-stelvio-quadrifoglio-profil.jpg",
                    "image2": "/cars/alfa-romeo/alfa-romeo-stelvio-quadrifoglio-rear.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": true,
            "price": 95,
            "size": "1/18",
            "description": "Le Stelvio porte à sa sortie en 2017, tous les espoirs de la marque Alfa Romeo. Ce SUV sportif reprend tous les codes de la catégorie mais pas seulement.",
            "category": "suv",
            "segment": "segment suv",
            "new": false,
            "stock": 0,
            "preference": 17
        },
        {
            "id": 22,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Peugeot",
            "model": "205",
            "version": "GTI Gutmann",
            "year": "1988",
            "reference": "OT796",
            "color": "#000000",
            "colorname": "Black",
            "colorref": "black",
            "material": "resine",
            "image": "/cars/peugeot/peugeot-205-gti-gutmann.jpg",
            "views": [
                {
                    "image1": "/cars/peugeot/peugeot-205-gti-gutmann-profil.jpg",
                    "image2": "/cars/peugeot/peugeot-205-gti-gutmann-rear.jpg"
                }
            ],
            "available": true,
            "sold": true,
            "keep": true,
            "price": 110,
            "size": "1/18",
            "description": "Pour la génération qui lisait Option Auto dans les années 80, le nom de Gutmann rappellera un certain Kurt Gutmann. Celui-ci, après avoir fait ses armes dans la préparation de Talbot se penche sur les voitures du Lion à la sortie de la 205 GTI.",
            "category": "citadine",
            "segment": "segment B",
            "new": true,
            "stock": 1,
            "preference": 11
        },
        {
            "id": 23,
            "country": "de",
            "brandshop": "Paragon",
            "brand": "Bmw",
            "model": "X4",
            "version": "Xdrive",
            "year": "2014",
            "reference": "PA01",
            "color": "#5C6063",
            "colorname": "sophisto gris métallique",
            "colorref": "gray",
            "material": "metal",
            "image": "/cars/bmw/x4.jpg",
            "views": [
                {
                    "image1": "/cars/bmw/x4-profil.jpg",
                    "image2": "/cars/bmw/x4-rear.jpg",
                    "image3": "/cars/bmw/x4-open.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": false,
            "price": 55,
            "size": "1/18",
            "description": "Les BMW X4 M sont des voitures de caractère. Elles combinent l'athlétisme d'une voiture M avec le tempérament expressif d'une BMW X4. Le résultat : quatre voitures de sport très impressionnantes pour un maximum de passion et d'adrénaline.",
            "category": "suv",
            "segment": "segment suv",
            "new": true,
            "stock": 1,
            "preference": 20
        },
        {
            "id": 24,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Citroen",
            "model": "Xsara",
            "version": "Sport Ph.1",
            "year": "2000",
            "reference": "OT305",
            "color": "#CC3A32",
            "colorname": "rouge",
            "colorref": "red",
            "material": "resine",
            "image": "/cars/citroen/citroen-xsara-sport-ph1.jpg",
            "views": [
                {
                    "image1": "/cars/citroen/citroen-xsara-sport-ph1-profil.jpg",
                    "image2": "/cars/citroen/citroen-xsara-sport-ph1-rear.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": false,
            "price": 90,
            "size": "1/18",
            "description": "La Xsara venait remplacer la ZX en gardant la même recette. Une allure discrète mais un châssis exceptionnel. Pourtant, grâce à ses multiples victoires en rallyes avec Sébastien Loeb, la marque aux chevrons n’oublie pas la sportivité.",
            "category": "compacte",
            "segment": "segment C",
            "new": true,
            "stock": 2,
            "preference": 21
        },
        {
            "id": 25,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Renault",
            "model": "5",
            "version": "Baccara",
            "year": "1984",
            "reference": "OT764",
            "color": "#584848",
            "colorname": "Brun Arabica",
            "colorref": "brown",
            "material": "resine",
            "image": "/cars/renault/renault-super-5-baccara.jpg",
            "views": [
                {
                    "image1": "/cars/renault/renault-super-5-baccara-profil.jpg",
                    "image2": "/cars/renault/renault-super-5-baccara-rear.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": true,
            "price": 90,
            "size": "1/18",
            "description": "En 1988, 4 ans après son lancement, Renault offre à sa Super 5 une version haut de gamme. Celle-ci reçoit le quatre cylindres de 1721 cm3 de 90 ch.",
            "category": "citadine",
            "segment": "segment B",
            "new": true,
            "stock": 2,
            "preference": 23
        },
        {
            "id": 26,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Peugeot",
            "model": "405",
            "version": "MI 16 Le Mans",
            "year": "1993",
            "reference": "OT756",
            "color": "#840000",
            "colorname": "Rouge Lucifer",
            "colorref": "red",
            "material": "resine",
            "image": "/cars/peugeot/peugeot-405-mi16-le-mans.jpg",
            "views": [
                {
                    "image1": "/cars/peugeot/peugeot-405-mi16-le-mans-profil.jpg",
                    "image2": "/cars/peugeot/peugeot-405-mi16-le-mans-rear.jpg"
                }
            ],
            "available": false,
            "sold": true,
            "keep": true,
            "price": 95,
            "size": "1/18",
            "description": "La Peugeot 405 Mi16 Le Mans est une série limitée à 150 exemplaires, en exclusivité pour le marché français. Disponible uniquement en rouge, elle arbore des logos “Le Mans” et une silhouette de 905 sur les portes avant.",
            "category": "berline",
            "segment": "segment D",
            "new": true,
            "stock": 0,
            "preference": 13
        },
        {
            "id": 27,
            "country": "de",
            "brandshop": "Ottomobile",
            "brand": "Bmw",
            "model": "Z3",
            "version": "M coupe 3.2",
            "year": "1999",
            "reference": "OT318",
            "color": "#233E95",
            "colorname": "Estoril Blau",
            "colorref": "blue",
            "material": "resine",
            "image": "/cars/bmw/bmw-z3-m-coupe-32.jpg",
            "views": [
                {
                    "image1": "/cars/bmw/bmw-z3-m-coupe-32-profil.jpg",
                    "image2": "/cars/bmw/bmw-z3-m-coupe-32-rear.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": true,
            "price": 100,
            "size": "1/18",
            "description": "La BMW Z3 Coupé arrive après la déclinaison roadster. Cela ne l’empêche pas d’acquérir instantanément le statut de BMW inoubliable. La ligne de break de chasse est atypique et permet de partir en vacances avec sa sportive préférée.",
            "category": "coupe",
            "segment": "segment sportive",
            "new": true,
            "stock": 2,
            "preference": 18
        },
        {
            "id": 28,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Renault",
            "model": "21",
            "version": "turbo ph1",
            "year": "1986",
            "reference": "OT798",
            "color": "#000000",
            "colorname": "Noir",
            "colorref": "black",
            "material": "resine",
            "image": "/cars/renault/renault-21-turbo-ph1.jpg",
            "views": [
                {
                    "image1": "/cars/renault/renault-21-turbo-ph1-profil.jpg",
                    "image2": "/cars/renault/renault-21-turbo-ph1-rear.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": false,
            "price": 90,
            "size": "1/18",
            "description": "Véritable emblème de son époque, la version la plus sportive de la gamme Renault 21 apparaît en 1987.",
            "category": "berline",
            "segment": "segment D",
            "new": true,
            "stock": 1,
            "preference": 24
        },
        {
            "id": 29,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Peugeot",
            "model": "Fourgon J5 & 205",
            "version": "Pack rallye Monte-Carlo 1985 - Peugeot 205",
            "year": "1985",
            "reference": "OT328",
            "color": "#FFFFFF",
            "colorname": "Blanc",
            "colorref": "white",
            "material": "resine",
            "image": "/cars/peugeot/pack-rallye-monte-carlo-1985.jpg",
            "views": [
                {
                    "image1": "/cars/peugeot/pack-rallye-monte-carlo-1985-profil.jpg",
                    "image2": "/cars/peugeot/pack-rallye-monte-carlo-1985-rear.jpg"
                }
            ],
            "available": true,
            "sold": true,
            "keep": false,
            "price": 209,
            "size": "1/18",
            "description": "Sous l’impulsion de Jean Todt, le département sportif de la marque au lion, Peugeot Talbot Sport étudie au début des années 80 un retour en rallyes avec une 305 V6.",
            "category": "citadine & camion fourgon",
            "segment": "segment B",
            "new": true,
            "stock": 0,
            "preference": 25
        },
        {
            "id": 30,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Renault",
            "model": "Clio 3",
            "version": "RS phase 2",
            "year": "2009",
            "reference": "OT350",
            "color": "#EAAC01",
            "colorname": "jaune sirius",
            "colorref": "yellow",
            "material": "resine",
            "image": "/cars/renault/renault-clio-3-rs-ph2.jpg",
            "views": [
                {
                    "image1": "/cars/renault/renault-clio-3-rs-ph2-profil.jpg",
                    "image2": "/cars/renault/renault-clio-3-rs-ph2-rear.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": true,
            "price": 90,
            "size": "1/18",
            "description": "Comme sa grande-sœur, la Clio 2, la troisième génération de la citadine de chez Renault a eu droit à sa version sport sous-titrée « R.S » en référence à Renault Sport.",
            "category": "citadine",
            "segment": "segment B",
            "new": true,
            "stock": 1,
            "preference": 26
        },
        {
            "id": 31,
            "country": "de",
            "brandshop": "Ottomobile",
            "brand": "Bmw",
            "model": "E46",
            "version": "M3",
            "year": "2000",
            "reference": "OT790",
            "color": "#00447B",
            "colorname": "Laguna seca blue",
            "colorref": "blue",
            "material": "resine",
            "image": "/cars/bmw/bmw-e46-m3.jpg",
            "views": [
                {
                    "image1": "/cars/bmw/bmw-e46-m3-profil.jpg",
                    "image2": "/cars/bmw/bmw-e46-m3-rear.jpg"
                }
            ],
            "available": true,
            "sold": true,
            "keep": true,
            "price": 90,
            "size": "1/18",
            "description": "La BMW M3 E46 a la lourde tâche de succéder aux icônes E30 et E36 ayant donné ses lettres de noblesse au blason Motorsport. Cette génération se présente comme un coupé Grand Tourisme avec une ligne très pure et équilibrée.",
            "category": "coupe",
            "segment": "segment D",
            "new": true,
            "stock": 0,
            "preference": 27
        },
        {
            "id": 32,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Renault",
            "model": "Megane 4",
            "version": "Trophy-R",
            "year": "2019",
            "reference": "OT804",
            "color": "#ffffff",
            "colorname": "White Quartz",
            "colorref": "white",
            "material": "resine",
            "image": "/cars/renault/renault-megane-trophy-r.jpg",
            "views": [
                {
                    "image1": "/cars/renault/renault-megane-trophy-r-profil.jpg",
                    "image2": "/cars/renault/renault-megane-trophy-r-rear.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": true,
            "price": 120,
            "size": "1/18",
            "description": "Quand on pense Renault Megane on n’imagine pas forcément une sportive. Et pourtant, la Megane dans sa version Trophy-R a su affoler les compteurs sur le mythique circuit du Nürburgring.",
            "category": "compact",
            "segment": "segment C",
            "new": true,
            "stock": 3,
            "preference": 28
        },
        {
            "id": 33,
            "country": "de",
            "brandshop": "Ottomobile",
            "brand": "Volkswagen",
            "model": "Golf",
            "version": "R",
            "year": "2014",
            "reference": "OT333",
            "color": "#203767",
            "colorname": "Lapiz blue",
            "colorref": "blue",
            "material": "resine",
            "image": "/cars/volkswagen/volkswagen-golf-7r.jpg",
            "views": [
                {
                    "image1": "/cars/volkswagen/volkswagen-golf-7r-profil.jpg",
                    "image2": "/cars/volkswagen/volkswagen-golf-7r-rear.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": true,
            "price": 110,
            "size": "1/18",
            "description": "Promue à l’aide du programme Volkswagen en WRC, la gamme « R » de la marque propose les modèles les plus sportifs du catalogue.",
            "category": "compact",
            "segment": "segment C",
            "new": true,
            "stock": 1,
            "preference": 29
        },
        {
            "id": 34,
            "country": "de",
            "brandshop": "Paragon",
            "brand": "Bmw",
            "model": "X5",
            "version": "X5 5.0i X DRIVE",
            "year": "2015",
            "reference": "PA0X5",
            "color": "#D1D6D9",
            "colorname": "Glacier Silver",
            "colorref": "gray",
            "material": "metal",
            "image": "/cars/bmw/bmw-x5.jpg",
            "views": [
                {
                    "image1": "/cars/bmw/bmw-x5-profil.jpg",
                    "image2": "/cars/bmw/bmw-x5-rear.jpg",
                    "image3": "/cars/bmw/bmw-x5-open.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": false,
            "price": 110,
            "size": "1/18",
            "description": "Promue à l’aide du programme Volkswagen en WRC, la gamme « R » de la marque propose les modèles les plus sportifs du catalogue.",
            "category": "suv",
            "segment": "segment D",
            "new": true,
            "stock": 1,
            "preference": 30
        },
        {
            "id": 35,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Peugeot",
            "model": "e-Legend",
            "version": "Concept",
            "year": "2018",
            "reference": "OT323",
            "color": "#FEFEFE",
            "colorname": "Gris métal",
            "colorref": "gray",
            "material": "resine",
            "image": "/cars/peugeot/peugeot-e-legend-concept.jpg",
            "views": [
                {
                    "image1": "/cars/peugeot/peugeot-e-legend-concept-profil.jpg",
                    "image2": "/cars/peugeot/peugeot-e-legend-concept-rear.jpg",
                    "image3": "/cars/peugeot/peugeot-e-legend-concept-open.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": true,
            "price": 110,
            "size": "1/18",
            "description": "Promue à l’aide du programme Volkswagen en WRC, la gamme « R » de la marque propose les modèles les plus sportifs du catalogue.",
            "category": "coupe",
            "segment": "segment D",
            "new": true,
            "stock": 3,
            "preference": 30
        },
        {
            "id": 36,
            "country": "fr",
            "brandshop": "Ottomobile",
            "brand": "Alpine",
            "model": "A110",
            "version": "S",
            "year": "2019",
            "reference": "OT809",
            "color": "#646368",
            "colorname": "Gris tonnere mat",
            "colorref": "gray",
            "material": "resine",
            "image": "/cars/alpine/alpine-a110s.jpg",
            "views": [
                {
                    "image1": "/cars/alpine/alpine-a110s-profil.jpg",
                    "image2": "/cars/alpine/alpine-a110s-rear.jpg",
                    "image3": "/cars/alpine/alpine-a110s-open.jpg"
                }
            ],
            "available": true,
            "sold": false,
            "keep": true,
            "price": 110,
            "size": "1/18",
            "description": "En 2019, Alpine a profité des 24 Heures du Mans pour dévoiler la S, une nouvelle version de son A110. S comme Sport afin d’affirmer que cette nouvelle voiture est bien plus sportive que ses grandes sœurs.",
            "category": "coupe",
            "segment": "segment D",
            "new": true,
            "stock": 1,
            "preference": 31
        }
    ],
    favorites: [
    ]
}

const UPDATE__STOCK = 'UPDATE__STOCK';
const DELETE__CAR = 'DELETE__CAR';
const DELETE__BRAND = 'DELETE__BRAND';
const DELETE__COUNTRY = 'DELETE__COUNTRY';
const ADD_FAVORITE = 'ADD__FAVORITE';
const REMOVE__FAVORITE = 'REMOVE__FAVORITE';
const REMOVE__ALL__FAVORITE = 'REMOVE__ALL__FAVORITE';

const carReducers = (state = initialState, action) => {
    if (action.type === UPDATE__STOCK) {
        let newStock = action.stock

        return {
            ...state,
            stock: newStock
        }
    }

    if (action.type === DELETE__CAR) {
        let newList = state.cars.filter((car) => {
            return car.id !== action.id
        });

        return {
            ...state,
            cars: newList
        }
    }

    if (action.type === DELETE__BRAND) {
        let newList = state.cars.filter((car) => {
            return car.brand !== action.brand
        });

        return {
            ...state,
            cars: newList
        }
    }

    if (action.type === DELETE__COUNTRY) {
        let newList = state.cars.filter((car) => {
            return car.country !== action.country
        });

        return {
            ...state,
            cars: newList
        }
    }

    if (action.type === ADD_FAVORITE) {
        let newList = state.cars.filter((car) => {
            return car.id === action.payload
        });

        let newArray = state.favorites;
        newArray = _.uniqBy(newArray, 'reference');

        PubSub.publish('toaster', true);

        return {
            ...state,
            favorites: newArray.concat(newList),
            activeCar: newList,
            toast: true
        }
    }

    if (action.type === REMOVE__FAVORITE) {
        let newList = state.favorites.filter((car) => {
            return car.id !== action.payload
        });

        return {
            ...state,
            favorites: newList
        }
    }

    if (action.type === REMOVE__ALL__FAVORITE) {
        let newList = []

        return {
            ...state,
            favorites: newList
        }
    }

    return state;
}

export default carReducers;