/* jshint browser: true */
/* global Backbone */
/* exported NavigationView */
'use strict';

var NavigationView = Backbone.NativeView.extend({
  el: 'nav',
  events: {
    'click #nav-dashboard'  : 'showDashboard',
    'click #nav-sessions'   : 'showSessions'
  },

  initialize: function () {
    this.active_section = document.getElementById('section-dashboard');
    console.log('this', this);
  },

  showDashboard: function () {
    console.log('showDashboard');
    this._viewSection(document.getElementById('section-dashboard'));
  },

  showSessions: function () {
    console.log('showSessions');
    this._viewSection(document.getElementById('section-sessions'));
  },

  _viewSection: function(section) {
    console.log('sections toggled', section);
  if (section !== this.active_section) {
    this.active_section.setAttribute('disabled', 'true');
    section.setAttribute('disabled', 'false');
    this.active_section = section;
  }
}
});
