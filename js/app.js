/* jshint browser: true */
/* global NavigationView, SessionsView, Sessions, Session, Messages, Message,
          DashboardView, Overall */
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  new NavigationView();
	new SessionsView();
  var s1 = Sessions.add(new Session({'session'	: 'you ran 3km.', 'date': new Date(2016, 2, 4)}));
	var s2 = Sessions.add(new Session({'session'	: 'you ran 7km.', 'date': new Date(2016, 2, 18)}));
	s1.save();
	s2.save();
  var m1 = Messages.add(new Message({'message' : 'welcome!', 'date': new Date(2016, 2, 2)}));
  var m2 = Messages.add(new Message({'message' : 'congratulations!', 'date': new Date(2016, 2, 19)}));
  m1.save();
  m2.save();
  Sessions.forEach(function (item) {
    item.set({'type': 'session'});
    Overall.add(item);
  });
  Messages.forEach(function (item) {
    item.set({'type': 'message'});
    Overall.add(item);
  });
  console.log('Overall', Overall);
  new DashboardView();
}, false);
