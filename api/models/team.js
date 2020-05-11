const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	city: String,
	name: String
});

module.exports = mongoose.model('Team',teamSchema);