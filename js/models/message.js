/* global Backbone */
/* exported Message */
'use strict';

var Message = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: {
    'message' : ''
  },
});
