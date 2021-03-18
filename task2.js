const fs = require('fs');
const path = require('path'); 

const csvFilePath='./csv/books.csv';
const txtFile='./books.txt';
const csv=require('csvtojson');

if (fs.existsSync(txtFile)) {
	console.log('The path exists.');
	try {		
		fs.unlinkSync(txtFile)
	} catch(err) {
		console.log(err)
	}
}

csv().fromFile(csvFilePath)
.on('error', (err) => {
	console.log(err)
})
.on('data',(l)=>{
	const jsonStr= l.toString('utf8')
    console.log(jsonStr)
	try {
		fs.appendFileSync(txtFile, l.toString() + "\n")
	} catch(e) {
		console.log(e)
	}
})