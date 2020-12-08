const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.get('/', (req, res) => {
    const data = {
        avatar_url: 'https://avatars0.githubusercontent.com/u/28994297?s=460&u=8257d240f1ad1a105abe224ff1e131a9f0f872e6&v=4',
        name: 'Raiff Said',
        role: 'Desenvolvedor Node.js',
        description: 'Focado em aprender Node.js, ReactJS e React Native',
        links: [
            { name: 'Github', url: 'https://github.com/raiffsaid' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/raiffsaid' }
        ]
    };


    return res.render('about', { about: data });
});

server.get('/portfolio', (req, res) => {
    return res.render('portfolio', { items: videos });
});

server.listen(5000, () => {
    console.log('server is running');
});