const mongoose = require('mongoose');

const prospectSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	FName: String,
	LName: String,
	Age: Number,
	College: String,
	Position: String,
	Height: String,
	Weight: String,
	Arms: String,
	Hands: String,
	Year: String,
	SparqScore: Number,
	UMMScore: Number,
	NFLGrade: Number,
	CombineResults: {
		FortyYardDash: Number,
		ThreeCone: Number,
		BenchPress: Number,
		VerticalJump: Number,
		BroadJump: Number,
		TwentyYardShuttle: Number,
		SixtyYardShuttle: Number
	},
	Derogs: [{
		Type: String,
		Severity: Number
	}],
	Visits: [{
		Team: String,
		VisitType: String
	}]
});

module.exports = mongoose.model('Prospect',prospectSchema);