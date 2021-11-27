const notes = require('express').Router();
const { readFile, readAppend };

//unique id for notes
const { uuid } = require('uuidv4');

//GET route for retrieinvg all the notes and read from db.json 
notes.get('/', (req, res) => {
    readFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for adding a new note
notes.post('/', (req, res) => {
    if (req.body) {

        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuid(),
        }
// append note and show if successful
        readAppend(newNote, './db/db.json')
        res.json('Note successfully added.')
    } else {
        res.json('There was an error adding the note.')
    }
})

module.exports = notes;