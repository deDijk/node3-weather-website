const request = require('request')

const forecast = (latitude, longitude , callback) => {
    url = 'http://api.weatherstack.com/current?access_key=e3a80d9ad4ad95245af4f4f77a245d6c&query=' + latitude + ',' + longitude + '&units=m'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to Weather Service!', undefined)
        } else if (body.error) {
            callback(body.error.info, undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. The temperature is currently ' + body.current.temperature + ' degrees. It feels like ' + body.current.feelslike + ' degrees and the humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast