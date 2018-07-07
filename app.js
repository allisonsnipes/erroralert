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

$(main);