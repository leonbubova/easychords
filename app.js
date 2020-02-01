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
 * chords[0] is filled with all the chords you can play easily open on guitar
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
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];

//filling other slots of array via code cause i'm lazy
for (i = 1; i < 12; i++){
    for (j = 0; j < 8; i++){
        chords[i][j] = chords[i][j] + 1; 
    }
}

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