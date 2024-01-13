const baseUrl = import.meta.env.VITE_BASE_URL

const endpoints = [
  {
    description: "Preview a random meme",
    url: `${baseUrl}/api/v1/random/prev`,
    response: '',
    type: 'meme',
    href: 'preview',
    btnText: 'Try me'
  },
  {
    description: "Preivew a random quote",
    url: `${baseUrl}/api/v1/quotes/random`,
    response: '',
    type: 'quote',
    href: 'preview',
    btnText: 'Try me'
  },
  {
    description: "Get a JSON of all the memes",
    url: `${baseUrl}/api/v1/all`,
    response: '',
    type: 'meme',
    href: 'json',
    btnText: 'JSON'
  },

  {
    description: "Get a JSON of a random meme",
    url: `${baseUrl}/api/v1/random`,
    response: '',
    type: 'meme',
    href: 'json',
    btnText: 'JSON'

  },
  {
    description: "Get a JSON of all the quotes",
    url: `${baseUrl}/api/v1/quotes/all`,
    response: '',
    type: 'quote',
    btnText: 'JSON'

  },

  {
    description: "Get a JSON of a random quote",
    url: `${baseUrl}/api/v1/quotes/random`,
    response: '',
    type: 'quote',
    href: 'json',
    btnText: 'JSON'

  },
  {
    description: "Get a JSON of all the meme tags",
    url: `${baseUrl}/api/v1/tags`,
    response: '',
    type: 'meme',
    href: 'json',
    btnText: 'JSON'

  },
  {
    description: "Get a JSON of all the quote authors",
    url: `${baseUrl}/api/v1/quotes/authors`,
    response: '',
    type: 'quote',
    href: 'json',
    btnText: 'JSON'
  },
  {
    description: "Get a JSON of a meme by Id (sample) " ,
    url: `${baseUrl}/api/v1/id/65a0753d5c63837f516f793f`,
    response: '',
    type: 'meme',
    href: 'json',
    btnText: 'JSON'
  }

]


const tagOptions = [
  'humor',
  'cognitive dissonance',
  'denial',
  'protein',
  'excuses',
  'speciesism',
  'ignorance',
  'health',
  'enviroment',
  'food',
  'social',
  'carnism',
  'serious'
]

const authorOptions =
  [
    "Alan Watts",
    "Albert Einstein",
    "Anatole France",
    "Ann Wigmore",
    "Anonymous",
    "Ariana Grande",
    "Benjamin Zephaniah",
    "Betty White",
    "Bradley Miller",
    "Bryan Adams",
    "Buddha",
    "Buddha",
    "Carl Lewis",
    "Cesar Chavez",
    "Chris Hannah (Propagandhi)",
    "César Chávez",
    "Davegan Raza",
    "David Carter",
    "Dirk Verbeuren",
    "Dr. John McDougall",
    "Dr. Michael Greger",
    "Ed Templeton",
    "Ellen DeGeneres",
    "Evanna Lynch",
    "Franz Kafka",
    "Gandhi",
    "Gary L. Francione",
    "Gary Yourofsky",
    "George Bernard Shaw",
    "Haile Selassie",
    "Hippocrates",
    "Irene M. Pepperberg",
    "Isaac Bashevis Singer",
    "James Cameron",
    "Jane Goodall",
    "Jared Leto",
    "Jessica Chastain",
    "Jill Robinson",
    "Joanne McArthur",
    "Joaquin Phoenix",
    "John Sakars",
    "Karen Pendergrass",
    "Kat Von D",
    "Kim Basinger",
    "Liam Hemsworth",
    "Lucy Watson",
    "Michael Pollan",
    "Miley Cyrus",
    "Moby",
    "Moby",
    "Mohandas Gandhi",
    "Neal D. Barnard",
    "Peter Dinklage",
    "Prince",
    "Pythagoras",
    "Rai Aren",
    "Ralph Waldo Emerson",
    "Rich Roll",
    "Ricky Gervais",
    "Robert Urich",
    "Romesh Ranganathan",
    "Roy E. Disney",
    "Russell Brand",
    "Russell Simmons",
    "Sharon Gannon",
   "Steve-O",
    "T. Colin Campbell",
    "Thích Nhất Hạnh",
    "Tim Shieff",
    "Waka Flocka Flame",
  ]

const quoteIds =
  [
  "Alan Watts",
  "Albert Einstein",
  "Albert Einstein",
  "Albert Schweitzer",
  "Albert Schweitzer",
  "Albert Schweitzer",
  "Anatole France",
  "Ann Wigmore",
  "Anonymous",
  "Anonymous",
  "Anonymous",
  "Anonymous",
  "Ariana Grande",
  "Ariana Grande",
  "Ariana Grande",
  "Ariana Grande",
  "Benjamin Zephaniah",
  "Betty White",
  "Bradley Miller",
  "Bryan Adams",
  "Buddha",
  "Buddha",
  "Carl Lewis",
  "Cesar Chavez",
  "Chris Hannah (Propagandhi)",
  "César Chávez",
  "Davegan Raza",
  "David Carter",
  "Dirk Verbeuren",
  "Dr. John McDougall",
  "Dr. Michael Greger",
  "Ed Templeton",
  "Ellen DeGeneres",
  "Evanna Lynch",
  "Evanna Lynch",
  "Franz Kafka",
  "Gandhi",
  "Gary L. Francione",
  "Gary Yourofsky",
  "Gary Yourofsky",
  "Gary Yourofsky",
  "Gary Yourofsky",
  "Gary Yourofsky",
  "Gary Yourofsky",
  "Gary Yourofsky",
  "Gary Yourofsky",
  "Gary Yourofsky",
  "Gary Yourofsky",
  "Gary Yourofsky",
  "George Bernard Shaw",
  "George Bernard Shaw",
  "George Bernard Shaw",
  "George Bernard Shaw",
  "George Bernard Shaw",
  "Haile Selassie",
  "Hippocrates",
  "Irene M. Pepperberg",
  "Irene M. Pepperberg",
  "Isaac Bashevis Singer",
  "Isaac Bashevis Singer",
  "James Cameron",
  "James Cameron",
  "James Cameron",
  "James Cromwell",
  "James Cromwell",
  "Jane Goodall",
  "Jane Goodall",
  "Jane Goodall",
  "Jane Goodall",
  "Jared Leto",
  "Jessica Chastain",
  "Jill Robinson",
  "Joanne McArthur",
  "Joaquin Phoenix",
  "Joaquin Phoenix",
  "Joaquin Phoenix",
  "John Sakars",
  "Karen Pendergrass",
  "Kat Von D",
  "Kim Basinger",
  "Kim Basinger",
  "Liam Hemsworth",
  "Lucy Watson",
  "Michael Pollan",
  "Miley Cyrus",
  "Miley Cyrus",
  "Miley Cyrus",
  "Moby",
  "Moby",
  "Moby",
  "Mohandas Gandhi",
  "Neal D. Barnard",
  "Peter Dinklage",
  "Prince",
  "Prince",
  "Pythagoras",
  "Rai Aren",
  "Rai Aren",
  "Ralph Waldo Emerson",
  "Ralph Waldo Emerson",
  "Rich Roll",
  "Ricky Gervais",
  "Ricky Gervais",
  "Ricky Gervais",
  "Robert Urich",
  "Romesh Ranganathan",
  "Roy E. Disney",
  "Russell Brand",
  "Russell Simmons",
  "Sharon Gannon",
  "Sharon Gannon",
  "Steve-O",
  "Steve-O",
  "Steve-O",
  "Steve-O",
  "T. Colin Campbell",
  "T. Colin Campbell",
  "T. Colin Campbell",
  "Thích Nhất Hạnh",
  "Tim Shieff",
  "Waka Flocka Flame",
  ]

const quoteIdsArr = []
quoteIds.forEach((item, index) => quoteIdsArr.push(index))

export { endpoints, tagOptions, authorOptions, quoteIdsArr }
