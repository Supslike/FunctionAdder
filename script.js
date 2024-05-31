const colList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE"];

function modifyFunctionString() {
    const addedList = parseInt(document.getElementById('addedList').value);
    const functionString = document.getElementById('functionString').value;

    if (isNaN(addedList) || functionString === "") {
        alert("Please enter valid values for Added List and Function String");
        return;
    }

    let finalFunction = "=IF";
    for (let letter of functionString.replace("=IF", "")) {
        if (colList.includes(letter)) {
            let newIndex = colList.indexOf(letter) + addedList;
            if (newIndex >= 0 && newIndex < colList.length) {
                finalFunction += colList[newIndex];
            } else {
                finalFunction += letter;
            }
        } else {
            finalFunction += letter;
        }
    }

    document.getElementById('modifiedFunctionString').value = finalFunction;
}
