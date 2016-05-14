/* global Backbone, Item */
/* exported Overall */
'use strict';

var OverallCollection = Backbone.Collection.extend({
  model: Item,
  //localStorage: new Backbone.LocalStorage('2c1v'),
});
var Overall = new OverallCollection();
