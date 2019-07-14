const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command ({
    command : 'add',
    describe : 'Add a new note',
    builder: {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note body',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
    
})

yargs.command({
    command : 'remove',
    describe : 'remove a note',
    builder : {
        title :  {
            describe : 'Describe a note to be removed',
            demandOption : true,
            type : 'string'

        }
    },

    handler(argv) {
        notes.removeNote(argv.title)
        console.log("want to remove a note")
    }
    
})

yargs.command ( {
    command : 'list',
    describe : 'list of notes',
    /* builder : {
        title : {
            describe : 'note title',
            demandOption : 'true',
            type : 'String'
        }
    }, */

    handler(argv) {
        console.log(chalk.yellow.inverse('Your note .. '))
        console.log(notes.listnote())
    }
})

yargs.command({
    command : 'read',
    describe : 'read the note',
    builder : {
        title : {
            describe : 'note title',
            demandOption : true,
            type : 'String'
        }
    },

    handler(argv) {
        console.log("Read the note with title : " + argv.title)
        notes.readnote(argv.title)
    }
})

yargs.parse()           //necessary step
//console.log(yargs.argv)