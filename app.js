chordsequence = []

function simplify() {
    var json = JSON.stringify({
        notes: chordsequence,
    });

    function myCallback() {
        res = JSON.parse(xhr.response)
        console.log(res)
        if (res.length > 0) {
            let result = document.getElementById('result');
            result.innerHTML = ""
            for (chords of res) {

                let text = document.createElement('p');
                text.style.fontSize = '16px';
                text.style.marginBottom = '10px';
                text.style.marginTop = '20px';
                text.innerHTML = "Play these chords on Fret " + chords.transposedBy + " (" + chords.rating + " simple chords): ";
                result.appendChild(text);
                for (note of chords.notes) {
                    let button = document.createElement('button');
                    button.innerHTML = note
                    result.appendChild(button)
                }
            }
        }
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            myCallback()
        }
    }
    xhr.open("POST", "https://yg3s2wnl6c.execute-api.eu-west-1.amazonaws.com/simplify");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);
}

function createButton(text) {
    if (chordsequence.length < 10) {
        var btn = document.createElement('button');
        var chordarea = document.getElementById("chordarea");
        btn.innerHTML = text;
        btn.setAttribute("type", "button");
        btn.setAttribute("onclick", "removeElement('" + text + "')");
        btn.setAttribute("id", text);
        chordarea.appendChild(btn);
        chordsequence.push(text)
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