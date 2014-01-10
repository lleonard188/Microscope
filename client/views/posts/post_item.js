Template.postItem.helpers({
	ownPost: function() {
		return this.userId == Meteor.userId();
	},
	commentsCount: function() {
		return Comments.find({postID: this._id}).count();
	}
});	