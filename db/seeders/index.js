
const TeamSeed = require('./20210123004707-teams');
const ProspectSeed = require('./20210123004723-prospects');
const DraftSeed = require('./20210123004737-drafts');
const PickSeed = require('./20210123004743-picks');
const TeamNeedSeed = require('./202010123004750-needs');

module.exports = function() {
	return Promise.all([
			//independent self standing seeds
			TeamSeed(),
			TeamNeedSeed(),
			ProspectSeed(),
			DraftSeed(),
			PickSeed()
		]).then(() => {
			//seeds that depend on FKs from above seeds
		}).then(() => {
			console.log('All Seed Files Successfully Executed...')
		});
}