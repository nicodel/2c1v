/* global Backbone, Sessions, SessionView */
/* exported SessionsView */
'use strict';

var SessionsView = Backbone.NativeView.extend({
  el: '#sessions',
  initialize: function () {
    this.collection = Sessions;
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'reset', this.render);
  },
  render: function () {
    this.el.innerHTML = '';
    this.collection.forEach(function (item) {
      this.renderItem(item);
    }, this);
  },
  renderItem: function (model) {
    var view = new SessionView({model : model});
    this.el.appendChild(view.render().el);
  }
});
