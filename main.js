(function() {
  'use strict';

	var glob = require('glob'),
			path = require('path'),
			spawn = require('child_process').spawn;

	// find all 
	glob('./node_modules/*/bin/*', function (er, files) {
		console.log('Local, executable node modules found: \n', files.join('\n'));
		files.forEach(function(file) {
			var name = path.basename(file, path.extname(file));
			console.log('Adding symlink: ', name);
			spawn('ln', ['-s', file, name]);
		});
	});

})();
