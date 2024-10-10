import { Meteor } from 'meteor/meteor';

import { init as publicationsInit } from '../imports/startup/server/publications';

Meteor.startup(async () => {
	await publicationsInit();
});
