const chalk = require('chalk')
const yargs = require("yargs")
const getNotes = require('./notes.js')

const command = process.argv[2]

console.log(yargs.argv)

yargs.command({
    command: "add",
    describe: "Add a new note",
    handler: function (){
        console.log('Adding a new note!')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note!')
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function() {
        console.log('Listing out all notes!')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note!')
    }
})

yargs.parse()