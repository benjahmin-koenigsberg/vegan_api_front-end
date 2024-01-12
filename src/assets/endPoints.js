const baseUrl = import.meta.env.VITE_BASE_URL

const endpoints = [
  {
    description: "Get a random meme",
    url: `${baseUrl}/api/v1/random/prev`,
    response: '',
    type: 'meme',
    href: 'preview',
    btnText: 'Try me'
  },
  {
    description: "Get random quote",
    url: `${baseUrl}/api/v1/quotes/random`,
    response: '',
    type: 'quote',
    href: 'preview',
    btnText: 'Try me'
  },
  {
    description: "Get all memes",
    url: `${baseUrl}/api/v1/all`,
    response: '',
    type: 'meme',
    href: 'json',
  btnText: 'JSON'
  },

  {
    description: "Get a random meme",
    url: `${baseUrl}/api/v1/random`,
    response: '',
    type: 'meme',
    href: 'json',
    btnText: 'JSON'

  },
  {
    description: "Get all quotes",
    url: `${baseUrl}/api/v1/quotes/all`,
    response: '',
    type: 'quote',
  btnText: 'JSON'

  },

  {
    description: "Get a random quote",
    url: `${baseUrl}/api/v1/quotes/random`,
    response: '',
    type: 'quote',
    href: 'json',
    btnText: 'JSON'

  },
  {
    description: "Get all meme tags",
    url: `${baseUrl}/api/v1/tags`,
    response: '',
    type: 'meme',
    href: 'json',
    btnText: 'JSON'

  },
  {
    description: "Get all quote authors",
    url: `${baseUrl}/api/v1/quotes/authors`,
    response: '',
    type: 'quote',
    href: 'json',
    btnText: 'JSON'
  },
  {
    description: "Get meme by ID",
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

export { endpoints, tagOptions }
