/* jshint browser: true */
/* global Backbone, Overall, SessionView, MessageView */
'use strict';

var DashboardView = Backbone.View.extend({
	el: '#dashboard',
	initialize: function () {
    this.collection = Overall;
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'reset', this.render);
    this.render();
	},

  render: function () {
    this.el.innerHTML = '';
    this.collection.comparator = function(item) {
      return item.get('date');
    };
    this.collection.sort();
    this.collection.models.forEach(function (item) {
      if (item.get('type') === 'message') {
        this.renderMessage(item);
      } else if(item.get('type') === 'session') {
        this.renderSession(item);
      }
    }, this);
  },
  renderMessage: function (model) {
    var view = new MessageView({model : model});
    this.el.appendChild(view.render().el);
  },
  renderSession: function (model) {
    var view = new SessionView({model : model});
    this.el.appendChild(view.render().el);
  }
});
