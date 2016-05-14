/* global Backbone, Message */
/* exported Messages */
'use strict';

var MessagesCollection = Backbone.Collection.extend({
  model: Message,

  localStorage: new Backbone.LocalStorage('2c1v'),

  initialize: function() {
    // this.listenTo(this, 'all', function(ev, res) {
    //   console.log('Something on SessionsCollection', ev, res);
    // });
  }

});
var Messages = new MessagesCollection();
