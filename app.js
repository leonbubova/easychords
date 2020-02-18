/**
 * int representation of the chords works as follows
 * the majors:
 * C = 0
 * Cis = 1
 * D = 2
 * Dis = 3
 * E = 4
 * ...
 * B = 11
 * 
 * the minors:
 * Cm = 12
 * Cism = 13
 * Dm =  14
 * Dism = 15
 * ...
 * Bm = 23
 */

/**
 * chords is an array of arrays filled with chords (who wouldve guessed).
 * chords[0] is filled with all the chords you can easily play open on guitar
 * for chords[0] this would mean [0, 2, 14, 4, 16, 7, 9, 21] or translated
 * into real chords:
 * [C, D, Dm, E, Em, G, A, Am]
 * chords[1] is filled with the same chords, but transposed one half tone
 * up, as if you would use a capodaster on that fret.
 * Meaning if you look at chords[4] you would get every chord that you can 
 * play with the capodaster on the 4th fret. so chord[4][0] would be an E
 */
var chords = [
    [0, 2, 14, 4, 16, 7, 9, 21],
    [1, 3, 15, 5, 17, 8, 10, 22],
    [2, 4, 16, 6, 18, 9, 11, 23],
    [3, 5, 17, 7, 19, 10, 0, 12],
    [4, 6, 18, 8, 20, 11, 1, 13],
    [5, 7, 19, 9, 21, 0, 2, 14],
    [6, 8, 20, 10, 22, 1, 3, 15],
    [7, 9, 21, 11, 23, 2, 4, 16],
    [8, 10, 22, 0, 12, 3, 5, 17],
    [9, 11, 23, 1, 13, 4, 6, 18],
    [10, 0, 12, 2, 14, 5, 7, 19],
    [11, 1, 13, 3, 15, 6, 8, 20]
];
//Cism E B Fm
chordsequence = [14, 5, 0, 18];
easychords = [];

for(i = 0; i < 11; i++){
    if(
        chords[i].includes(chordsequence[0]) &&
        chords[i].includes(chordsequence[1]) &&
        chords[i].includes(chordsequence[2]) 
    ) {
        console.log(easychords.push(i));
    }
}

console.log(easychords);

function createButton(text){
    var btn = document.createElement('button');
    var chordarea = document.getElementById("chordarea");
    btn.innerHTML = text;
    btn.setAttribute("type", "button");
    btn.setAttribute("onclick", "removeElement('"+text+"')");
    btn.setAttribute("id", text);
    chordarea.appendChild(btn) //OR insert it
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}