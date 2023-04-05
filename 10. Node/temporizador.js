const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', () => {
    console.log('Imprime de 5 em 5 segundos');
})