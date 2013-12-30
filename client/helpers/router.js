Meteor.Router.add({
	'/': 'postList',

	'/posts/:_id': {
		to: 'postPage',
		and: function(id) { Session.set('currentPostId', id); } 
	},

	'/submit' : 'postSubmit'
});	

Meteor.Router.filters({
	'requireLogin': function(page) {
		if (Meteor.user()) 
			return page;
		else if (Meteor.loggingIn())
			return 'loading';
		else
			return 'accessDenied';
	}
})

Meteor.Router.filter('requireLogin', {only: 'postSubmit'});