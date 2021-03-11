
const TeamSeed = require('./20210123004707-teams');
const ProspectSeed = require('./20210123004723-prospects');
const DraftSeed = require('./20210123004737-drafts');
const PickSeed = require('./20210123004743-picks');
const TeamNeedSeed = require('./202010123004750-needs');
const RoundSeed = require('./20210123004737-rounds');
const PositionSeed = require('./20210123004737-positions');



module.exports = async function() {
	try{
	await Promise.all([
			//independent self standing seeds
			TeamSeed,
			PositionSeed,
			DraftSeed
		]).then(() => {
			//seeds that depend on FKs from above seeds
			RoundSeed
			,TeamNeedSeed
			,ProspectSeed
		}).then(() => {
			PickSeed
		}).then(() => {
			console.log('All Seed Files Successfully Executed...')
		});
	}
	catch(err) {
		console.error('Err Seeding DB', err);
	};
}