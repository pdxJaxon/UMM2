const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	City: String,
	Name: String
	}]
});

module.exports = mongoose.model('Team',teamSchema);