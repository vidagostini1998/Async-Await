const axios = require('axios')

async function fetchRepos() {
    try {
        const user = await axios.get('https://api.github.com/users/vidagostini1998')
        const repos = await axios.get(user.data.repos_url)
        console.log(repos)
    }
    catch(e){
        console.log(e);
    }
}

fetchRepos()