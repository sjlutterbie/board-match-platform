'use strict';

// Load required views
const headerMenuView = require('./headerMenu');
const sideBarMenuView = require('./sideBarMenu');
const dashboardView = require('./dashboard');

function buildView() {
  
  foo.sayHello();
  
  const viewHTML = `
  <!DOCTYPE html>

    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <title>Board Match Portal</title>
        <meta name="description" content="A place for service-minded individuals to
                                          connect with local non-profits in search
                                          of board members and other support">
        
        <!-- CSS Reset -->
        <link rel="stylesheet" type="text/css" href="styles/reset.css">
        
        <!-- Custom styles -->
        <link rel="stylesheet" type="text/css" href="styles/layout.css">
        
      </head>
      
      <body>
        <header>
          <h1>Board Match Portal</h1>
          <nav class="header-nav js-header-nav">
            ${headerMenuView.buildView()}
          </nav>
        </header>
        
        <nav class="sidebar-nav">
          ${sideBarMenuView.buildView()}
        </nav>
        
        <main role="main">
          ${dashboardView.buildView()}
        </main>
    
        <!-- Load jQuery -->
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"
                integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                crossorigin="anonymous"></script>
      </body>
    </html>`;

 
 return viewHTML;
}

module.exports = {
  buildView
};