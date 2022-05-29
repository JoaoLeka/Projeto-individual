
    function createAddItemWindow() {

        // Create a new window
        addItemWindown = new BrowserWindow({
            width: 300,
            height: 200,
            title: 'Add Item',
        
            // The lines below solved the issue
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        })}
        win.loadFile(path.join(__dirname, "/cards.html"));



var database = require("../../src/database/config.js")

function votar() {
    var seleVideo = album.value
    if (seleVideo == "1") {
        
    var instrucao = `
        INSERT INTO votos VALUES ('1');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
}


