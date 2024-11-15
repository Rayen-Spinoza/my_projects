function toggleMenuDirection() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('rtl');
}

function sortTable(columnIndex) {
    const table = document.getElementById('emissionsTable');
    const rows = Array.from(table.rows).slice(1);
    const sortedRows = rows.sort((a, b) => {
        const aText = a.cells[columnIndex].innerText;
        const bText = b.cells[columnIndex].innerText;
        return aText.localeCompare(bText, undefined, {numeric: true});
    });
    sortedRows.forEach(row => table.tBodies[0].appendChild(row));
}

function validateForm() {
    const userInput = document.getElementById('userInput').value;
    const sanitizedInput = sanitizeInput(userInput);
    if (sanitizedInput !== userInput) {
        alert('Ungültige Eingabe erkannt und entfernt.');
        return false;
    }
    alert('Eingabe erfolgreich: ' + sanitizedInput);
    return false; // Verhindert das tatsächliche Absenden des Formulars für Demonstrationszwecke
}

function sanitizeInput(input) {
    const element = document.createElement('div');
    element.innerText = input;
    return element.innerHTML;
}
