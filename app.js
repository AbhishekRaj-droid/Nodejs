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

    handler : function (argv) {
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

    handler : function(argv) {
        notes.removeNote(argv.title)
        console.log("want to remove a note")
    }
    
})

console.log(yargs.argv);