const sharp = require("sharp");
const fs = require('fs');

const main = async ()  =>{
    let attributesForCheck = []

    for (let i = 0; i < 10; i++) {

        const rand = Math.floor(Math.random() * 100)

        let bodyType = ""
        if (rand < 20) {
            bodyType= "body0"
        } else if (rand < 50) {
            bodyType= "body1"
        } else if (rand < 70) {
            bodyType= "body2"
        } else {
            bodyType= "body3"
        };


        const earRand = Math.floor(Math.random() * 100)
        let earType = ""
        if (earRand < 30) {
            earType= "ear0"
        } else if (earRand < 60) {
            earType= "ear1"
        } else {
            earType= "ear2"
        };

        const glassesRand = Math.floor(Math.random() * 100)
        let glassesImage = ""
        if (glassesRand < 50) {
            glassesImage= "./images/glasses.png"
        } else {
            glassesImage= "./images/none.png"
        }

        const key = bodyType + earType + glassesImage
        const index = attributesForCheck.findIndex((element => element === key))
        if(index != -1) return

        await sharp( "./images/face.png" )
           .composite([ 
                  {
                    input: `./images/${earType}.png` ,
                    gravity:"northwest",
                }, {
                    input: `./images/${bodyType}.png` ,
                    gravity:"northeast",
                }, {
                    input: glassesImage ,
                    gravity:"northeast",
                },
           ] )
          .toFile( `./output/test${i}.png` );

          attributesForCheck.push(bodyType + earType + glassesImage)

          const testObj = {
            attributes: [{"trait_type":"ear","value":earType},{"trait_type":"body","value":bodyType},{"trait_type":"Hat","value":"Laurel Wreath"}]
          };
    
          const toJSON = JSON.stringify(testObj);
            fs.writeFile(`./metadata/${i}`, toJSON, (err) => {
                if (err) rej(err);
                if (!err) {
                console.log('JSONファイルを生成しました');
                }
            });
    }
}

main()