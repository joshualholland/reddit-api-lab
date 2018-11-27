const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

let redditPath = path.join(__dirname, './popular-articles.json')


let redditArray = [];

rp('https://reddit.com/r/popular.json')
    .then(res => JSON.parse(res))
    .then(data => {
        data.data.children.forEach(article => {
            redditArray.push({
                title: article.data.title,
                url: article.data.url,
                author: article.data.author
            })
        });
        let myJSON = JSON.stringify(redditArray)
        fs.appendFileSync(redditPath, myJSON)
    });







