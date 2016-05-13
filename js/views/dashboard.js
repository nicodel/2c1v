/* jshint browser: true */
/* global Backbone, microtemplate, Session, Sessions */
'use strict';
var app = app || {};

(function () {
	app.DashboardView = Backbone.View.extend({

		el: '#dashboard',

		// statsTemplate: microtemplate(document.querySelector('#dashboard-entry').innerHTML),

		events: {
		},

		initialize: function () {

			// create fake sessions entries
			var s1 = Sessions.add(new Session({'session'	: 'you ran 3km.'}));
			var s2 = Sessions.add(new Session({'session'	: 'you ran 7km.'}));
			s1.save();
			s2.save();

			// this.listenTo(app.todos, 'add', this.addOne);
			// this.listenTo(app.todos, 'reset', this.addAll);
			// this.listenTo(app.todos, 'change:completed', this.filterOne);
			// this.listenTo(app.todos, 'filter', this.filterAll);
			// this.listenTo(app.todos, 'all', this.render);

			// Suppresses 'add' events with {reset: true} and prevents the app view
			// from being re-rendered for every model. Only renders when the 'reset'
			// event is triggered at the end of the fetch.
			// app.todos.fetch({reset: true});
		},

		});
})();
