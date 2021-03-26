require('colors');
 const fs = require('fs');
const { dirname } = require('path');
 const path = require('path');

 const filepath = path.join (__dirname, '../db/task.json');

 const loadTask = () => {
     
    let listTask = {};
    console.log("Ruta absoluta del proceso node: ".yellow, process.cwd())
    
    console.log("Ruta absoluta de nuestra base de datos: ".yellow, filepath)

    try{
        listTask = require(filepath);
    }catch (error) {
        console.log("Error cargando lista e bd".red, error);
        listTask = {}
    }

    return listTask;
}

const saveTask = (listTask) => {

    let data = JSON.stringify(listTask);

    fs.writeFile(filepath, data, (error) => {
        if (error) {
            throw new Error("Error Create by me: --", error);
        }
        
    })

}

module.exports = {
    loadTask,
    saveTask
}