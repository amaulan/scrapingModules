var axios = require('axios')

module.exports  = (keyword) => {
	let param = {
		params : {
			name : keyword		
		}
			
	};

	return new Promise((resolve, reject) => {
		axios
		.get('http://universities.hipolabs.com/search',param)
		.then((data) => {
			resolve(data.data)
		})
		.catch((err) => {
			reject(err)
		})
	})
}
