const axios = require('axios')

module.exports = (kata) => {
	let param = {
		params : {
			format : 'json',
			phrase : kata
		}
	}

	return new Promise((resolve, reject) => {
		axios.get('http://kateglo.com/api.php', param)
		.then((data) => {
			if(typeof data.data == 'string')
			{
				reject('Data Tidak Ditemuka')
			}
			resolve(data.data)
		})
		.catch((err) => {
			reject(err)
		})
	})
} 
