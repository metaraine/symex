require('mocha-as-promised')();

var chai = require('chai'),
		chaiAsPromised = require("chai-as-promised"),
		should = chai.should(),
		exec = require('child-process-promise').exec,
		_ = require('lodash'),
		Q = require('q'),
		nativity = require('nativity');

chai.use(chaiAsPromised);

nativity.install(Function.prototype, _, ['curry', 'compose']);
nativity.install(String.prototype, _, ['property']);

describe('symex', function() {
  it('should generate symlinks for all local, executable node modules', function() {

  	throw new Error('Test Not Implemented');
		// console.log("Generating symlink to local executables...")
		// return exec('node main.js')
		// 	.then(function() {
		// 		return exec('echo "li test" | jade');
		// 	})
		// 	.then(function() {
		// 		return exec('rm jade');
		// 	});

		// console.log("Executing jade with 'li test'...");
		// exec('"li test" | jade', function(err, stdout, stderr) {
		// 	console.log(arguments);
		// })
		// echo "li test" | jade

		// # cleanup
		// rm jade
  });
});
