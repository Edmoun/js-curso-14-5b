
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const argv_all = yargs(hideBin(process.argv))
const options = require('./options');

const argv = argv_all
    .command('create', 'Create new task', options.optionsCreate)
    .command('update', 'Actualizar con completed', options,optionsUpdate)
    .command('delete', 'Delete task', options.Erase)
    .help()
    .argv;


    module.exports = { argv }
    