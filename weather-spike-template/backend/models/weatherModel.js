const mongoose = require('mongoose');
const { Schema } = mongoose;

const weatherSchema = new Schema({
/************************ TODO ************************
        weather database Schema
*/
});

const WeatherDay = mongoose.model('WeatherDay', weatherSchema);

module.exports = WeatherDay;