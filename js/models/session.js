/* global Backbone */
/* exported Session */
'use strict';

var Session = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: {
    'session' : ''
  },
});
