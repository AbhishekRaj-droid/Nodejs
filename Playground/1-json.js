const fs = require('fs')
/* const book = {
    title : 'Ego is the enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
//console.log(bookJSON)
const bookdata = JSON.parse(bookJSON)
console.log(bookdata.title)
console.log(bookJSON.title) */

//fs.writeFileSync('1-json.json', bookJSON)
//fs.writeFileSync('1-json.json', book)

const data_buffer = fs.readFileSync('1-json.json')
const dataJson = data_buffer.toString()
const data = JSON.parse(dataJson)
console.log(data.name)

data.name = "Abhishek"
data.age = 24

const datastring = JSON.stringify(data)
fs.writeFileSync('1-json.json', datastring)
