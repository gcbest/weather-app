var asyncAdd = (a, b) => {
	return new Promise((fulfill, reject) => {
		setTimeout(() => {
			if (typeof a === 'number' && typeof b === 'number')  {
				fulfill(a + b);
			} else {
				reject('Arguments must be numbers');
			}
		}, 500);
	});
}

asyncAdd(5, 4).then((result) => {
	console.log('result is: ', result);
	return asyncAdd(result, 23);
}).then((res) => {
	console.log('second result is: ', res)
}).catch((errorMessage) => {
	console.log(errorMessage);
});

// var somePromise = new Promise((fulfill, reject) {
// 	fulfill('Hey it worked!');
// });

// somePromise.then((message) => {
// 	console.log(message);
// }, (error) => {
// 	console.log(error);
// });