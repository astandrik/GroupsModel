var kernels = require('./descriptions.js').kernels;
var events = require('./descriptions.js').events;

var groups = [];

for(var e in events) {
  groups.push(events[e]);
}

setInterval(function() {
    for (var i = 0; i < groups.length; i++) {
        groups[i](kernels.A, kernels.B);
    }

    console.log("A:" + kernels.print(kernels.A));
    console.log("B:" + kernels.print(kernels.B));

    kernels.checkConditions(kernels.A);
    kernels.checkConditions(kernels.B);
}, 1000);
