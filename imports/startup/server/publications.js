import { Test1 } from '../../api/test1';

async function init() {
	Meteor.publish('test1', async function(filter) {
		return Test1.find({test: filter});
	});
}

export { init }
