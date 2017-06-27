const axios = require('axios')
const cheerio = require('cheerio')
const async = require('async')
const url = "https://www.bola.net/jadwal_skor/klasemen_liga_indonesia.html"

module.exports = {
	grab:  function(){
		var saiki = this
		return new Promise((resolve, reject) => {
			axios.get(url)
				.then((data) => {
					saiki.data = data.data
					saiki.load()
					resolve(saiki.parse())
				})
				.catch((err) => {
					console.log(err)
				})
		})
	},
	load : function(){
		this.structure = cheerio.load(this.data)
	},
	parse : function(){
		let $ = this.structure
		let row = $('.klasemen_row')

		var data = []
		row.each(function(i, el){
			data[i] = {
				no : i,
				klub : $(this).find('.jdwide2,.jdwide1 strong a').text().trim(),
				skor : $(this).find('.jdsmall2:nth-child(10),.jdsmall1:nth-child(10) strong').text().trim()
			}
		})
		data.shift()

		return data
	}
}