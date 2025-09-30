const { getAllChordNotes } = require('../index.js');

test('C Major: all notes', () => {
    expect(getAllChordNotes("CM").toString()).toBe([0,4,7, 12,16,19, 24,28,31, 36,40,43, 48,52,55, 60,64,67, 72,76,79, 84,88,91, 96,100,103].toString());
});

test('C minor: all notes', () => {
    expect(getAllChordNotes("Cm").toString()).toBe([0,3,7, 12,15,19, 24,27,31, 36,39,43, 48,51,55, 60,63,67, 72,75,79, 84,87,91, 96,99,103].toString());
});