import { readFile, writeFile, stat } from "fs/promises";

// const readFilePromise = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// const writeFilePromise = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, (err) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve();
//       }
//     });
//   });
// };

// const statPromise = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.stat(file, (err, stats) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(stats);
//       }
//     });
//   });
// };

const run = async () => {
  try {
    const contenidoStr = await readFile("./package.json", "utf-8");
    const stats = await stat("./package.json");

    let info = {
      contenidoStr,
      contenidoObj: JSON.parse(contenidoStr),
      size: stats.size,
    };

    await writeFile("./infoMAPAA.txt", JSON.stringify(info, null, "\t"));
  } catch (error) {
    console.error("Error:", error.message);
  }
};

run();
