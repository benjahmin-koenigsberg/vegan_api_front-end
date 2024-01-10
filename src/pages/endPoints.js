const endpoints = [
    // {
    //     description: "Get all memes",
    //     url: 'http://localhost:8080/api/v1/all',
    //     response: '',
    //     type: 'meme'
    // },
    {
        description: "Get a random meme",
        url: 'http://localhost:8080/api/v1/random',
        response: '',
        type: 'meme',
        code: `await axios
        .get()        .then((res) => {
          console.log(res.data.data[0].meme_url);
        })
        .catch((err) => console.log(err));`
    },
    // {
    //     description: "Get list all tags",
    //     url: '',
    //     response: '',
    //     type: 'meme'
    // },
    {
        description: "Get meme by ID",
        url: 'http://localhost:8080/api/v1/:id',
        response: '',
        type: 'meme',
        code: `await axios
        .get()        .then((res) => {
          console.log(res.data.data[0].meme_url);
        })
        .catch((err) => console.log(err));`
    },
    // {
    //     description: "Get all memes by tag",
    //     url: '',
    //     response: '',
    //     type: 'meme'
    // },
    // {
    //     description: "Get all quotes",
    //     url: 'http://localhost:8080/api/v1/quotes/all',
    //     response: '',
    //     type: 'quote'
    // },
    {
        description: "Get random quote",
        url: 'http://localhost:8080/api/v1/quotes/random',
        response: '',
        type: 'quote',
        code: `await axios
        .get()        .then((res) => {
          console.log(res.data.data.quote);
        })
        .catch((err) => console.log(err));`
    },
    // {
    //     description: "Get list of authors",
    //     url: 'http://localhost:8080/api/v1/quotes/authors',
    //     response: '',
    //     type: 'quote'
    // },
    {
        description: "Get all quotes by author",
        url: 'http://localhost:8080/api/v1/quotes/:author',
        response: '',
        type: 'quote',
        code: `await axios
        .get()        .then((res) => {
          console.log(res.data.data.quote);
        })
        .catch((err) => console.log(err));`
    },


]


const JSON_endpoints = [
    {
        description: "Get JSON of all memes",
        url: 'http://localhost:8080/api/v1/all',
        response: '',
        type: 'meme',
        code: `await axios
        .get()        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));`
    },
    {
        description: "Get JSON of a random meme",
        url: 'http://localhost:8080/api/v1/random',
        response: '',
        type: 'meme',
        code: `await axios
        .get()        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));`
    }, {
        description: "Get JSON of all tags",
        url: 'http://localhost:8080/api/v1/tags',
        response: '',
        type: 'meme',
        code: `await axios
        .get()        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));`
    }, {
        description: "Get JSON of meme by ID",
        url: 'http://localhost:8080/api/v1/:id',
        response: '',
        type: 'meme',
        code: `await axios
        .get()        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));`
    }, {
        description: "Get JSON of memes by tag",
        url: 'http://localhost:8080/api/v1/:tag',
        response: '',
        type: 'meme',
        code: `await axios
        .get()        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));`
    }, {
        description: "Get JSON of all quotes",
        url: 'http://localhost:8080/api/v1/quotes/all',
        response: '',
        type: 'quote',
        code: `await axios
        .get()        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));`
    },
    {
        description: "Get JSON of random quote",
        url: 'http://localhost:8080/api/v1/quotes/random',
        response: '',
        type: 'quote',
        code: `await axios
        .get()        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));`
    }, {
        description: "Get JSON of authors",
        url: 'http://localhost:8080/api/v1/quotes/authors',
        response: '',
        type: 'quote',
        code: `await axios
        .get()        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));`
    },
    {
        description: "Get JSON of all quotes by author",
        url: 'http://localhost:8080/api/v1/quotes/:author',
        response: '',
        type: 'quote',
        code: `await axios
        .get()        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));`
    },
]


export { endpoints, JSON_endpoints }
