/* jshint browser: true */
/* global Backbone, microtemplate */
/* exported SessionView */
'use strict';

var SessionView = Backbone.NativeView.extend({
  template: microtemplate(document.getElementById('item-session').innerHTML),

  render: function () {
    this.el.innerHTML = this.template({
      'session' : this.model.get('session')
    });
  }
});
