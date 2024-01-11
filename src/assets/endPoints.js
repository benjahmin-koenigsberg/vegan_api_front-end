

const endpoints = [
  {
    description: "Get a random meme",
    url: 'http://localhost:8080/api/v1/random/prev',
    response: '',
    type: 'meme',
    href: 'preview',
    btnText: 'Try me out'
  },
  {
    description: "Get random quote",
    url: 'http://localhost:8080/api/v1/quotes/random',
    response: '',
    type: 'quote',
    href: 'preview',
    btnText: 'Try me out'
  },
  {
    description: "Get all memes",
    url: 'http://localhost:8080/api/v1/all',
    response: '',
    type: 'meme',
    href: 'json',
  btnText: 'JSON'
  },

  {
    description: "Get a random meme",
    url: 'http://localhost:8080/api/v1/random',
    response: '',
    type: 'meme',
    href: 'json',
    btnText: 'JSON'

  },
  {
    description: "Get all quotes",
    url: 'http://localhost:8080/api/v1/quotes/all',
    response: '',
    type: 'quote',
  btnText: 'JSON'

  },

  {
    description: "Get a random quote",
    url: 'http://localhost:8080/api/v1/quotes/random',
    response: '',
    type: 'quote',
    href: 'json',
    btnText: 'JSON'

  },
  {
    description: "Get all meme tags",
    url: 'http://localhost:8080/api/v1/tags',
    response: '',
    type: 'meme',
    href: 'json',
    btnText: 'JSON'

  },
  {
    description: "Get all quote authors",
    url: 'http://localhost:8080/api/v1/quotes/authors',
    response: '',
    type: 'quote',
    href: 'json',
    btnText: 'JSON'
  }

]


const JSON_endpoints = [

  {
    description: "Get random meme",
    url: 'http://localhost:8080/api/v1/random',
    response: '',
    type: 'meme',
  }
  , , {
    description: "Get meme by ID",
    url: 'http://localhost:8080/api/v1/id/659714127649e6cbb4478bf6',
    response: '',
    type: 'meme',

  }, {
    description: "Get JSON of memes by tag",
    url: 'http://localhost:8080/api/v1/tags/protein',
    response: '',
    type: 'meme',

  },
  {
    description: "Get JSON of random quote",
    url: 'http://localhost:8080/api/v1/quotes/random',
    response: '',
    type: 'quote',

  }, ,
  {
    description: "Get JSON of all quotes by author",
    url: 'http://localhost:8080/api/v1/quotes/:author',
    response: '',
    type: 'quote',
  },
]


export { endpoints, JSON_endpoints }
