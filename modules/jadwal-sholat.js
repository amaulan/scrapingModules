const axios = require('axios')

module.exports = (kota) => {
	let param = {
		params : {
			address: kota
		}
	}

	return new Promise((resolve, reject) => {
		axios
		.get('https://time.siswadi.com/pray/', param)
			.then((data) => {
				resolve(data)
			})
			.catch((error) => {
				reject(error)
			})
	})
}
