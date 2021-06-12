const addContext = require('mochawesome/addContext');

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    let { parent } = runnable;
    let filename = '';
    while (parent && parent.title) {
      filename = `${parent.title.replace(/[:\\/]/g, '')} -- ${filename}`;
      parent = parent.parent;
    }
    filename += `${test.title.replace(/[:\\/]/g, '')} (failed).png`;
    addContext({ test }, `screenshots/${Cypress.spec.name}/${filename}`);
    addContext({ test }, `videos/${Cypress.spec.name}.mp4`);
  }
});
