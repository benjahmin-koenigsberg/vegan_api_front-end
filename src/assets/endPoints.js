const endpoints = [

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

    {
        description: "Get meme by ID",
      url: 'http://localhost:8080/api/v1/id/659714127649e6cbb4478bf6',
        response: '',
        type: 'meme',
        code: `await axios
        .get()        .then((res) => {
          console.log(res.data.data[0].meme_url);
        })
        .catch((err) => console.log(err));`
    },

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

    {
        description: "Get all quotes by author",
      url: 'http://localhost:8080/api/v1/quotes/Joaquin Phoenix',
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
      url: 'http://localhost:8080/api/v1/id/659714127649e6cbb4478bf6',
        response: '',
        type: 'meme',
        code: `await axios
        .get()        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));`
    }, {
        description: "Get JSON of memes by tag",
        url: 'http://localhost:8080/api/v1/tags/protein',
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
