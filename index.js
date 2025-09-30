const chords = require('./chords.json')
const notes = require('./notes.json')

function getThird(rootValue, chordType) {
    switch (chordType) {
        case "M":
            return rootValue + 4;
        case "m":
            return rootValue + 3;
    }
}

function getFifth(rootValue, chordType) {
    switch (chordType) {
        case "M":
            return rootValue + 7;
        case "m":
            return rootValue + 7;
    }
}

function getAllChordNotes(chordName) {
    // base notes are the lowest possible notes we can use to spell a chord
    // e.g. C0, E0, G0
    let rootName = chords.find((chord) => chord.chordName == chordName).root;
    let baseRoot = notes.find((note) => note.name == rootName).baseValue;
    let chordType = chordName.slice(-1);
    let allChords = [baseRoot % 12, getThird(baseRoot, chordType) % 12, getFifth(baseRoot, chordType) % 12];
    // fill out 9 total octaves of notes, starting at C0
    for (let i = 1; i <= 8; i++) {
        // for now, all chords have three notes
        for (let j = 0; j < 3; j++) {
            allChords.push(allChords[j] + (12 * i));
        }
    }
    return allChords;
}

// get starting evenly spaced relative positions
function getVoiceStarts(voices) {
    const spacing = 8;
    let index = (voices - 1) * -4;
    var voicels = [];
    while (voices > 0) {
        voicels.push(index);
        index += spacing;
        voices--;
    }
    return voicels;
}

// get {voices} nearest evenly-spaced notes for {chordName} chord
function getChordVoices(chordName, voices) {
    console.log("chordName = " + chordName + ", voice = " + voices);
    var allChordNotes = getAllChordNotes(chordName);
    // map center around middle C
    var voicels = getVoiceStarts(voices).map((note) => note + 48);
    for (let i = 0; i < voicels.length; i++) {
        let pick = allChordNotes.reduce((nearest, num) => { return Math.abs(num - voicels[i]) < Math.abs(nearest - voicels[i]) ? num : nearest;});
        voicels[i] = pick;
        allChordNotes[allChordNotes.indexOf(pick)] = -1;
    }
    return voicels;
}

module.exports = {
    getAllChordNotes,
    getVoiceStarts,
    getChordVoices
};