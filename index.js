const chords = require('./chords.json')

function getAllChordNotes(chordName) {
    console.log(chords);
    // base notes are the lowest possible notes we can use to spell a chord
    // e.g. C0, E0, G0
    let allChords = chords.find((chord) => chord.chordName == chordName).baseNoteValues;
    // fill out 9 total octaves of notes, starting at C0
    for (let i = 1; i <= 8; i++) {
        // for now, all chords have three notes
        for (let j = 0; j < 3; j++) {
            allChords.push(allChords[j] + (12 * i));
        }
    }
    return allChords;
}

module.exports = {
    getAllChordNotes
};