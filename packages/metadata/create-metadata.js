const fs = require('fs');

const createFile = () => {
    for (i = 0; i < 10; i++){
        const testObj = {
            name: `kawaii yatsu #${i}`,
            description: 'kawaii yatsu is a collectible made by @suhara_ponta',
            image: `https://ipfs.io/ipfs/QmcgHEHy1MwGK3xfQ6L7uPooNHG6uQEeqqbS9QSHNCJbKe/test${i}.png`,
        };
        const toJSON = JSON.stringify(testObj);
        fs.writeFile(`./metadata/${i}`, toJSON, (err) => {
            if (err) console.log(err)
            if (!err) {
            console.log(`JSONファイルを生成しました${i}`);
            }
        });
    }
};

createFile();