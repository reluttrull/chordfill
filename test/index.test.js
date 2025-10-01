const { getAllChordNotes, getVoiceStarts, getChordVoices } = require('../index.js');

test('C Major: all notes', () => {
    expect(getAllChordNotes("CM").toString()).toBe([0,4,7, 12,16,19, 24,28,31, 36,40,43, 48,52,55, 60,64,67, 72,76,79, 84,88,91, 96,100,103].toString());
});

test('C minor: all notes', () => {
    expect(getAllChordNotes("Cm").toString()).toBe([0,3,7, 12,15,19, 24,27,31, 36,39,43, 48,51,55, 60,63,67, 72,75,79, 84,87,91, 96,99,103].toString());
});

test('get avg voice start positions for 3', () => {
    expect(getVoiceStarts(3).toString()).toBe([-8, 0, 8].toString());
});


test('get avg voice start positions for 4', () => {
    expect(getVoiceStarts(4).toString()).toBe([-12, -4, 4, 12].toString());
});

test('get start positions for BM, 1 voices', () => {
    expect(getChordVoices(["BM"], 1).toString()).toBe([[47]].toString());
});

test('get start positions for Fm, 3 voices', () => {
    expect(getChordVoices(["Fm"], 3).toString()).toBe([[41], [48], [56]].toString());
});

test('get start positions for CM, 4 voices', () => {
    expect(getChordVoices(["CM"], 4).toString()).toBe([[36], [43], [52], [60]].toString());
});

// for now, returns unbalanced chords (missing third in FM)
// todo: check root and third always present
test('get chords CM to FM, 4 voices', () => {
    expect(getChordVoices(["CM", "FM"], 4).toString()).toBe([[36, 36], [43, 41], [52, 53], [60, 60]].toString());
});