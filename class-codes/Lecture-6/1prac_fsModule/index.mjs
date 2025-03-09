import { readFile, writeFile } from "fs/promises";

// console.log(__dirname)
// console.log(process.cwd())
// console.log(import.meta.url)


// const pathToFile = '/Users/gautam/Documents/gautam/backend-content/lambda-4.0/class-codes/Lecture-6/1prac_fsModule/index.html' ;
// const pathToFile = process.cwd() + '/class-codes/Lecture-6/1prac_fsModule/index.html' ;
const pathToFile = new URL('./index.html', import.meta.url).pathname

// console.log(pathToFile)
const data = await readFile(pathToFile);
// console.log(data.toString())

let template = data.toString();

const obj = {
    name: "Gautam,",
    message: "Hello World!"
}

for (const [key, value] of Object.entries(obj)) {
    template = template.replace(`{{${key}}}`, value);
}

const outputPath = new URL('./output.html', import.meta.url).pathname
await writeFile(outputPath, template)

