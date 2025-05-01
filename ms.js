import fs from 'fs';

try {
    const file = fs.readFileSync('./package.json', "utf-8");
    const stats = fs.statSync('./package.json')

    let info = {
        contenidoStr: file,
        contenidoObj: JSON.parse(file),
        size: stats.size
    };

    console.log("*".repeat(50));
    console.log(info);
    console.log("*".repeat(50));
    
    fs.writeFileSync('./infoMS.txt', JSON.stringify(info, null, '\t'));

} catch (error) {
    console.log(`Error: ${error.message}`);    
}

