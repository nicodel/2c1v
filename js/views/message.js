/* jshint browser: true */
/* global Backbone, microtemplate */
/* exported MessageView */
'use strict';

var MessageView = Backbone.NativeView.extend({
  tagName: 'li',

  template: microtemplate(document.getElementById('item-message').innerHTML),

  render: function () {
    this.el.innerHTML = this.template({
      'message' : this.model.get('message')
    });
    return this;
  }
});
