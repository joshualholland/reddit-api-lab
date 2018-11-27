const path = require('path');
const fs = require('fs');
const rp = require('request-promise');


rp('https://reddit.com/r/popular.json')
    .then(res => JSON.parse(res))
    .then(data => {
        data.data.children.forEach(article => {
            let fileName = article.data.id
            let extname = path.extname(article.data.url)
            let newFile = `${fileName}${extname}`
            if (extname) {
                rp(article.data.url, { encoding: 'binary' })
                    .then(res => {
                        fs.writeFile('./downloads/'+newFile, res, { encoding: 'binary' }, err => {
                            if (err) console.log(err)
                        })

                    })
            }

        })
    });
