/* jshint browser: true */
/* global SessionsView, Sessions, Session */
'use strict';

document.addEventListener('DOMContentLoaded', function () {
	new SessionsView();
	var s1 = Sessions.add(new Session({'session'	: 'you ran 3km.'}));
	var s2 = Sessions.add(new Session({'session'	: 'you ran 7km.'}));
	s1.save();
	s2.save();
}, false);
