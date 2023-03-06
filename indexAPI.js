async function start() {
    const url = 'https://api.github.com/users/vidagostini1998'
    const user = await fetch(url).then(r => r.json())
    const repos = await fetch(user.repos_url).then(r => r.json())
    console.log(repos);
}

start().catch(e => console.log(e))