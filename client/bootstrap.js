const selenium = require('selenium-standalone');
module.exports = {

  boostrap: (done) => {
    selenium.start(((err, child) => {
      if (err) {
        child.kill();
        done('Can\'t execute server with invalid config, tests stopped');
      }
      const started = false;
      child.stderr.on('data', (data) => {
        console.log('pute');
        if (!started) {
          done();
          started = true;
        }
        console.log(data.toString());
      });
    }));
  },

  // teardown: (done) => {
  //   pkill -f selenium-standalone
  // }

}
