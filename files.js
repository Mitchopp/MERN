const fs = require('fs');
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fs.promises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        console.log(data);
        await fs.promises.unlink(path.join(__dirname, 'files', 'starter.txt'));
        await fs.promises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fs.promises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you.');
        await fs.promises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
        const newData = await fs.promises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8')
        console.log(newData);
    } catch (error) {
        console.error(error);
    }
}

fileOps();

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => { // if you add the 'utf8' encoding line then you don't need to use the .toString() function on line 6, if you also add the path stuff then it sorts it out for different operating systems properly.
    if (err) throw err;
    console.log(data);
    console.log(data.toString()); // in order to read it turn it into a string
})



/*
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'This is the response, nice to meet you!', (err) => {
    if (err) throw err;
    console.log('Write finshed');

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is!', (err) => {
        if (err) throw err;
        console.log('Append finshed');
    })

    fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
        if (err) throw err;
        console.log('Rename finshed');
    })
})
    */

// this listens for the uncaught error and if it happens it will log it to the console.
process.on('uncaughtException', err => {
    console.error('There was an uncaught error!', err);
    process.exit(1);
})