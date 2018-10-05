// The headerMenu will initially consist of an ordered list with two elements:
//  - A "Contact" mailto link
//  - A "Logout" link

'use strict';

function buildView() {
 
 return `<ul>
  <li><a href="mailto:simon@ltrbe.com" title="Email support">Contact</a></li>
  <li><a href="#" title="Logout of Board Match Platform">Logout</a></li>
 </ul>`; 
}

module.exports = {
  buildView
};