const baseUrl = import.meta.env.VITE_BASE_URL

const endpoints = [
  {
    description: "Get a random meme",
    url: `${baseUrl}/random/prev`,
    response: '',
    type: 'meme',
    href: 'preview',
    btnText: 'Try me'
  },
  {
    description: "Get random quote",
    url: `${baseUrl}/quotes/random`,
    response: '',
    type: 'quote',
    href: 'preview',
    btnText: 'Try me'
  },
  {
    description: "Get all memes",
    url: `${baseUrl}/all`,
    response: '',
    type: 'meme',
    href: 'json',
  btnText: 'JSON'
  },

  {
    description: "Get a random meme",
    url: `${baseUrl}/random`,
    response: '',
    type: 'meme',
    href: 'json',
    btnText: 'JSON'

  },
  {
    description: "Get all quotes",
    url: `${baseUrl}/quotes/all`,
    response: '',
    type: 'quote',
  btnText: 'JSON'

  },

  {
    description: "Get a random quote",
    url: `${baseUrl}/quotes/random`,
    response: '',
    type: 'quote',
    href: 'json',
    btnText: 'JSON'

  },
  {
    description: "Get all meme tags",
    url: `${baseUrl}/tags`,
    response: '',
    type: 'meme',
    href: 'json',
    btnText: 'JSON'

  },
  {
    description: "Get all quote authors",
    url: `${baseUrl}/quotes/authors`,
    response: '',
    type: 'quote',
    href: 'json',
    btnText: 'JSON'
  },
  {
    description: "Get meme by ID",
    url: `${baseUrl}/api/v1/id/659714127649e6cbb4478bf6`,
    response: '',
    type: 'meme',
    href: 'json',
    btnText: 'JSON'
  }

]




export { endpoints }
