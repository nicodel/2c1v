/* global Backbone, Session */
/* exported Sessions */
'use strict';

var SessionsCollection = Backbone.Collection.extend({
  model: Session,

  localStorage: new Backbone.LocalStorage('2c1v'),

  initialize: function() {
    this.listenTo(this, 'all', function(ev, res) {
      console.log('Something on SessionsCollection', ev, res);
    });
  }

});
var Sessions = new SessionsCollection();
