const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your Notes ...'
}

const addNote = function(title, body) {
    const notes = loadNotes()

    const duplicates = notes.filter(function(note) {
        return note.title === title
    })

    if (duplicates.length === 0) {
        notes.push({
            title:title,
            body:body
        })
    
        saveNotes(notes)
        console.log("New note added!!")
    }
    else {
        console.log("duplicate is found")
    }
}

const removeNote = function (title) {
    console.log("hi removing")
    const notes = loadNotes()
    const newnote = notes.filter(function(note){
        return note.title != title
    })

    if (notes.length > newnote.length) {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(newnote)
    }
    else {
        console.log(chalk.red.inverse('No note found!'))
    }
    
}



const loadNotes = function() {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const datastring = databuffer.toString()
        return JSON.parse(datastring)
    

    }catch(e) {
        return []
    }
}

const saveNotes = function(notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote : removeNote
}

