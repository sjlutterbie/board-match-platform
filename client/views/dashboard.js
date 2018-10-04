'use strict';

function buildView() {
  
  const viewHTML = `
    <section class="card">
      <p>This is a content card</p>
    </section>
    
    <section class="card">
      <p>This is another content card</p>
    </section>`;
  
  return viewHTML;
}

module.exports = {
  buildView
};