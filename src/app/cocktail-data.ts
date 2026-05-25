export interface Cocktail {
  id: number;
  name: string;
  studentName: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  studentNote: string;
}

export const cocktails: Cocktail[] = [
  {
    id: 1,
    name: "Akashi no Kiba",
    studentName: "Josie Wolf",
    image: "https://images.unsplash.com/photo-1704786002010-9338a76ca0c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxKYXBhbmVzZSUyMHdoaXNreSUyMGNvY2t0YWlsJTIwaGlnaGJhbGx8ZW58MXx8fHwxNzc5NzI2MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ingredients: [
      "1 oz Akashi Japanese Whisky",
      "1 oz Umeshu (Japanese Plum Wine)",
      "½ oz Fresh Yuzu Juice (or sub 1 tsp ginger juice for Ume Highball)",
      "3–4 oz Chilled Sparkling Water",
      "Garnish: Fresh yuzu peel or ginger slice"
    ],
    instructions: [
      "Fill a highball glass with ice",
      "Add Akashi whisky, umeshu, and yuzu juice",
      "Stir gently to combine",
      "Top with chilled sparkling water",
      "Garnish with fresh yuzu peel or ginger slice"
    ],
    studentNote: "This drink is effervescent with a lot of depth beneath the surface, approachable and bright with a wealth of knowledge below, just like Bill! Every class and lesson with Bill, we would walk away thinking that we had everything down pat, and then realize later there was more to dive into, in the best way. Thank you for being such a huge part of this program, and making us all better at thinking, asking questions, and figuring out what we want to do in this industry. Our cohort flourished over the last 2 years, and we attribute much of our great camaraderie to the good footing and ease of connection that we gained in our August summer class in RC year. Thank you and see you before you know it!"
  },
  {
    id: 2,
    name: "Aperol Spritz",
    studentName: "Andrea Picozzi",
    image: "https://images.unsplash.com/photo-1627558009791-2280bfc9fe14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGVyb2wlMjBzcHJpdHolMjBjb2NrdGFpbHxlbnwxfHx8fDE3Nzk3MjU1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: [
      "3 oz Prosecco",
      "2 oz Aperol",
      "1 oz Sparkling water",
      "Ice",
      "Orange slice for garnish"
    ],
    instructions: [
      "Fill a wine glass with ice",
      "Add Aperol",
      "Pour in Prosecco",
      "Top with sparkling water",
      "Stir gently and garnish with orange slice"
    ],
    studentNote: "Very simple, but reminds me of home and holidays by the sea. Much more than a cocktail."
  },
  {
    id: 3,
    name: "Midori Sour",
    studentName: "Katherine Cianciotti",
    image: "https://images.unsplash.com/photo-1638351501396-6cf23d77f437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMG1lbG9uJTIwY29ja3RhaWwlMjBtaWRvcml8ZW58MXx8fHwxNzc5NzI2NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ingredients: [
      "1 oz Midori",
      "1 oz Vodka",
      "1/2 oz Lemon juice, freshly squeezed",
      "1/2 oz Lime juice, freshly squeezed",
      "Club soda, to top",
      "Garnish: Lemon wheel"
    ],
    instructions: [
      "Add the Midori, vodka, lemon juice and lime juice to a Collins glass with ice",
      "Stir to combine, then top with a splash of soda water",
      "Garnish with a lemon wheel"
    ],
    studentNote: "A 70s classic, dangerously drinkable and absolutely fluorescent."
  },
  {
    id: 4,
    name: "Fresh Strawberry Lemonade",
    studentName: "Matthew Xu",
    image: "https://images.unsplash.com/photo-1650092071863-b47da0c0065b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwbGVtb25hZGUlMjBkcmluayUyMGdsYXNzfGVufDF8fHx8MTc3OTcyNjkzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    ingredients: [
      "2 parts washed fresh strawberries",
      "1 part sugar",
      "Zest of 2 parts lemons",
      "Lemon juice from all the lemons",
      "Cold water",
      "Ice"
    ],
    instructions: [
      "Mix 2 parts washed fresh strawberries with 1 part sugar and the zest of 2 parts lemons",
      "Allow sugar to fully dissolve with the strawberries, about one hour",
      "Juice all the lemons",
      "Mix about half the lemon juice and twice the amount of cold water into the macerated strawberry concentrate; this is the lemonade concentrate",
      "Refrigerate for 30 minutes, then strain out the strawberry chunks (or reserve as pulp if you like!)",
      "To serve, add 1 part concentrate to about 3 parts cold water / ice. Adjust ratios as desired!"
    ],
    studentNote: "This is one of my favorite summer drink recipes! The concentrate is really amazing (the lemon zest is super important) and can be mixed with anything."
  },
  {
    id: 5,
    name: "The False Positive",
    studentName: "Calvin Kraft",
    image: "https://images.unsplash.com/photo-1580244853908-9abf53683059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxncmVlbiUyMGdsb3dpbmclMjBjb2NrdGFpbCUyMHNjaWVuY2UlMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc3OTcyNzA0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    ingredients: [
      "Glassware: 50 mL conical, rinsed",
      "2 oz ethyl alcohol, 200 proof",
      "0.5 oz DMSO",
      "1 dropper GFP, recombinant",
      "1 mL iPSC supernatant, spun down (or: substitute with HEK293s)",
      "Trypsin mist"
    ],
    instructions: [
      "Vortex 30 seconds. Do not shake.",
      "Pour over ice from a minus 80.",
      "Garnish with a fumbled pipette tip."
    ],
    studentNote: "A science joke, not a real cocktail :)"
  },
  {
    id: 6,
    name: "Apollo Sunshine",
    studentName: "Ryan Peer",
    image: "https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaW4lMjBjb2NrdGFpbCUyMG1pbnQlMjBhcHJpY290JTIwY291cGUlMjBnbGFzc3xlbnwxfHx8fDE3Nzk3MjcxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ingredients: [
      "1.5 oz Old Tom Gin",
      "0.5 oz Orchard Apricot Liqueur",
      "0.5 oz Passion Fruit Liqueur",
      "0.75 oz Fresh Lemon Juice",
      "5-6 Fresh Mint Leaves"
    ],
    instructions: [
      "Muddle: Gently muddle the fresh mint leaves in the bottom of a cocktail shaker to release their aromatic oils",
      "Combine: Add the Apollo Sunshine Old Tom Gin, Orchard Apricot Liqueur, Passion Fruit Liqueur, and fresh lemon juice to the shaker",
      "Shake: Fill the shaker with ice and shake vigorously for 10-15 seconds to chill and combine",
      "Strain: Double strain (through both a Hawthorne and fine-mesh strainer) into a chilled coupe or double rocks glass to remove any small mint flecks",
      "Garnish: Top with a fresh mint leaf or a spritz of lemon peel"
    ],
    studentNote: "This cocktail is a favorite at Brick and Mortar in Cambridge, which was the first place we went as an MS/MBA class during our August course with you last year. I will always remember it fondly!"
  },
  {
    id: 7,
    name: "Chai Spiced Milk Punch",
    studentName: "Anusha Manglik",
    image: "https://images.unsplash.com/photo-1624995249885-c1d346696334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMHN0YXIlMjBhbmlzZSUyMGNsZWFyJTIwZHJpbmt8ZW58MXx8fHwxNzc5NzI4MDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ingredients: [
      "Chai Simple Syrup:",
      "2 cups water",
      "2 black tea bags (or 2 tsp loose black tea, like Assam or Darjeeling)",
      "3/4 cup granulated sugar",
      "1 cinnamon stick",
      "6-8 whole cardamom pods, lightly crushed",
      "4-6 whole cloves",
      "1-inch piece of fresh ginger, sliced",
      "1/2 teaspoon black peppercorns",
      "1 star anise",
      "1/4 teaspoon ground nutmeg",
      "Milk Punch:",
      "500 ml Dark Rum",
      "225 ml Chai Syrup",
      "225 ml Lime Juice",
      "225 ml Whole Milk"
    ],
    instructions: [
      "Make Chai Syrup: Simmer spices together for 5-7 minutes before adding the teabags for 2-3 minutes. Strain, then add the sugar. This is shelf stable for 2+ weeks in the refrigerator",
      "Combine clear ingredients (rum, chai syrup, lime juice) well, then add the milk",
      "Allow to rest and separate",
      "Filter the milk curds out using layered paper towels or coffee filters",
      "Pass the clarified cocktail through another 2-3 times, which may take a few hours",
      "Enjoy with a large ice cube"
    ],
    studentNote: "Thank you for everything Bill! It was especially wonderful to be in section with you last semester. I've always enjoyed learning from you & hope we can continue to stay in touch. This is one of my favorite cocktails which blends chemistry & the best drink known to this world, masala chai. Hope you're able to experiment and enjoy it!"
  }
];
