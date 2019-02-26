var os = require("os");
var hostname = os.hostname();
console.log("hello from our newly created container by using our custom docker image, with hostname:" + hostname);
