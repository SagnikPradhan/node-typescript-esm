import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("../tsconfig.json");
const file = (await fs.readFile(filePath)).toString();

console.log(file);
