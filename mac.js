import fs from 'fs';

try {
    fs.readFile('./package.json', 'utf-8', (err, fileData) => {
        if (err) throw new Error(`Error en la lectura del archivo: ${err.message}`)
        
        fs.stat('./package.json', (err, statData) => {
            if (err) throw new Error(`Error en la lectura de las estadisticas del archivo: ${err.message}`)
            
            let info = {
                contenidoStr: fileData,
                contenidoObj: JSON.parse(fileData),
                size: statData.size
            };
        
            fs.writeFile('./infoMAC.txt', JSON.stringify(info, null, '\t'), (errWrite) => {
                if (errWrite) throw new Error(`Error en la escritura del archivo: ${errWrite.message}`)
            })
        })        
    });
} catch (error) {
    console.log(`Error: ${error.message}`);
}

