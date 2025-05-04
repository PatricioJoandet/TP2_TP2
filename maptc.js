import { readFile, writeFile, stat } from "fs/promises";

const run = () => {
  let contenidoStr;

  readFile("./package.json", "utf-8")
    .then((data) => {
      contenidoStr = data;
      return stat("./package.json");
    })
    .then((stats) => {
      let info = {
        contenidoStr,
        contenidoObj: JSON.parse(contenidoStr),
        size: stats.size,
      };
      return writeFile("./infoMAPTC.txt", JSON.stringify(info, null, "\t"));
    })
    .catch((err) => {
      console.log(`Error: ${err.message}`);
    });
};

run();
