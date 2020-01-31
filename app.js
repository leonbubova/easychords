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