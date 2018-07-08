function main() {
  doAllTheThings();
	try {
		//code that might throw an error
		doAllTheThings();
	} catch(e) {
		//code that will handle our error
		console.error(e); //writes a message on the console
		reportError(e);
	}
}

function doAllTheThings() {
  throw {
    message: "Everything's ruined",
    name: "FatalException",
    toString: function() {
      return `${this.name}: ${this.message}`;
    }
  }
}

function reportError(e) {
  $('.js-error-report').text(`Uh oh, something went wrong! Here's what we know: ${e.message}`);
}

$(main);