const request = require('request');

const getWeather = (lat, lng, callback) => {
	request({
		url:`https://api.darksky.net/forecast/c7aac8bf9f29287740e0d984a24796bc/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		} else {
			callback('Unable to get a response');
		}
	});
};

module.exports.getWeather = getWeather;
