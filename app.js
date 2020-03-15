/**
 * int representation of the chords works as follows
 * the majors:
 * C = 0
 * Cis = 1
 * D = 2
 * Dis = 3
 * E = 4
 * F = 5
 * Fis = 6
 * G = 7
 * Gis = 8
 * A = 9
 * Ais = 10
 * B = 11
 * 
 * the minors:
 * Cm = 12
 * Cism = 13
 * Dm =  14
 * Dism = 15
 * Em = 16
 * Fm = 17
 * Fism = 18
 * Gm = 19
 * Gism = 20
 * Am = 21
 * Aism = 22
 * Bm = 23
 */

/**
 * chords is an array of arrays filled with chords (who wouldve guessed).
 * chords[0] is filled with all the chords you can easily play open on guitar
 * for chords[0] this would mean [0, 2, 14, 4, 16, 5, 17, 7, 9, 21] or translated
 * into real chords:
 * [C, D, Dm, E, Em, F, Fm, G, A, Am]
 * chords[1] is filled with the same chords, but transposed one half tone
 * up, as if you would use a capodaster on that fret.
 * Meaning if you look at chords[4] you would get every chord that you can 
 * play with the capodaster on the 4th fret. so chord[4][0] would be an E
 */
var chords = [
    [0, 2, 14, 4, 16, 5, 17, 7, 9, 21],
    [1, 3, 15, 5, 17, 6, 18, 8, 10, 22],
    [2, 4, 16, 6, 18, 7, 19, 9, 11, 23],
    [3, 5, 17, 7, 19, 8, 20, 10, 0, 12],
    [4, 6, 18, 8, 20, 9, 21, 11, 1, 13],
    [5, 7, 19, 9, 21, 10, 22, 0, 2, 14],
    [6, 8, 20, 10, 22, 11, 23, 1, 3, 15],
    [7, 9, 21, 11, 23, 0, 12, 2, 4, 16],
    [8, 10, 22, 0, 12, 1, 13, 3, 5, 17],
    [9, 11, 23, 1, 13, 2, 14, 4, 6, 18],
    [10, 0, 12, 2, 14, 3, 15, 5, 7, 19],
    [11, 1, 13, 3, 15, 4, 16, 6, 8, 20]
];
easychordsBase = ["C", "D", "Dm", "E", "Em", "F", "Fm", "G", "A", "Am"];
//mergetest
chordsequence = [];

function simplify(){
    //right now only supports 4 chords in a sequence, need to fix later
    let fretsFourChords = [];
    let fretsThreeChords = [];
    let fretsTwoChords = [];
    let fretsOneChord = [];
    for(i = 0; i < 12; i++){
        let easychords = ["null", "null", "null", "null"];
        let containedchords = [];
        for(chord in chordsequence){
            if (chords[i].includes(chordsequence[chord])){
                containedchords.push(chordsequence[chord]);
                for(baseChord in chords[i]){
                    if(chordsequence[chord] == chords[i][baseChord]){
                        easychords[chord] = easychordsBase[baseChord];
                    }
                }
            }
        }

        if(containedchords.length > 3){
            fretsFourChords.push(i);
        }
        if(containedchords.length > 2){
            fretsThreeChords.push(i);
        }
        if(containedchords.length > 1){
            fretsTwoChords.push(i);
        }
        if(containedchords.length > 0){
            fretsOneChord.push(i);
        }
        console.log("With Capo on Fret " +i+ " you can play " +containedchords.length+ " chord(s) with an easy shape. They are: "  +easychords);
        if(containedchords.length >= 2){
            let chordarea = document.getElementById("chordarea");
            let newDiv = document.createElement('div');
            let button1 = document.createElement('button');
            let button2 = document.createElement('button');
            let button3 = document.createElement('button');
            let button4 = document.createElement('button');
            let text = document.createElement('p');
            text.style.fontSize = '16px';
            button1.innerHTML = easychords[0];
            button2.innerHTML = easychords[1];
            button3.innerHTML = easychords[2];
            button4.innerHTML = easychords[3];
            text.innerHTML = containedchords.length+ " chords on Fret " +i+ ": ";
            newDiv.appendChild(text);
            newDiv.appendChild(button1);
            newDiv.appendChild(button2);
            newDiv.appendChild(button3);
            newDiv.appendChild(button4);
            chordarea.appendChild(newDiv);
        }
    }
    console.log("Four easy chords on frets: " +fretsFourChords);
    console.log("Three easy chords on frets: " +fretsThreeChords);
    console.log("Two easy chords on frets: " +fretsTwoChords);
    console.log("One easy chord on frets: " +fretsOneChord);
}

function createButton(text){
    if(chordsequence.length < 4){
        var btn = document.createElement('button');
        var chordarea = document.getElementById("chordarea");
        btn.innerHTML = text;
        btn.setAttribute("type", "button");
        btn.setAttribute("onclick", "removeElement('"+text+"')");
        btn.setAttribute("id", text);
        chordarea.appendChild(btn);
        //THIS IS BAD v
        //refactor later
        if(text=="C"){
            chordsequence.push(0)
        }
        if(text=="Cis"){
            chordsequence.push(1)
        }
        if(text=="D"){
            chordsequence.push(2)
        }
        if(text=="Dis"){
            chordsequence.push(3)
        }
        if(text=="E"){
            chordsequence.push(4)
        }
        if(text=="F"){
            chordsequence.push(5)
        }
        if(text=="Fis"){
            chordsequence.push(6)
        }
        if(text=="G"){
            chordsequence.push(7)
        }
        if(text=="Gis"){
            chordsequence.push(8)
        }
        if(text=="A"){
            chordsequence.push(9)
        }
        if(text=="Ais"){
            chordsequence.push(10)
        }
        if(text=="B"){
            chordsequence.push(11)
        }
        if(text=="Cm"){
            chordsequence.push(12)
        }
        if(text=="Cism"){
            chordsequence.push(13)
        }
        if(text=="Dm"){
            chordsequence.push(14)
        }
        if(text=="Dism"){
            chordsequence.push(15)
        }
        if(text=="Em"){
            chordsequence.push(16)
        }
        if(text=="Fm"){
            chordsequence.push(17)
        }
        if(text=="Fism"){
            chordsequence.push(18)
        }
        if(text=="Gm"){
            chordsequence.push(19)
        }
        if(text=="Gism"){
            chordsequence.push(20)
        }
        if(text=="Am"){
            chordsequence.push(21)
        }
        
        if(text=="Aism"){
            chordsequence.push(22)
        }
        if(text=="Bm"){
            chordsequence.push(23)
        }
        console.log(chordsequence);
    }
}    
        
    
function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
    chordsequence.pop();
    console.log(chordsequence);
}