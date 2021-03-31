

const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea a realizar'
} 

const title = {
    demand: true,
    alias: 't',
    desc: 'Titulo de la tarea a realizar - unico'
}

const completed = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada la tarea'
}
const erased = {
    alias: 'e',
    default: true,
    desc: 'Borrar tarea'
}


const opctionsCreate = {
    description,
    title
}

const optionsUpdate = {
    title,
    completed
}
const optionsErase = {
    title,
    erased
}


module.exports = {
    optionsCreate,
    optionsUpdate,
    optionsErase
}