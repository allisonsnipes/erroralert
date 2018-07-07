function main() {
  doAllTheThings();
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

try {
	//code that might throw an error
} catch(error) {
	//code that will handle our error
	console.error("You made a mistake");
}

$(main);