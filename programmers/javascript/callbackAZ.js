function printString(string, index, cb) {
	if(index == 27){
		cb('err')
	}
	cb(null, string)
}

function printAll(){
	let arr = [...Array(26)].map((val,i) => String.fromCharCode(i+65));

	let index = 0;
	setTimeout(function cbOfcb() {
		let array = arr
		if(index < 27){
			printString(array[index++], index, callback);
			cbOfcb();
		}

	}, 1000)
}

printAll()

function callback(err, str) {
	if(err) {
		console.log('done');
		return
	}
	console.log(str);