/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

require("./bundle-config");
var application = require("application");
var render = require("preact-to-nativescript").render
var h = require("preact-to-nativescript").Preact.h

application.start({
  create: () => {
    return render(h("page", {}, [h("stackLayout", {}, [h("label", {text: "MyCOntent"}, [])])]))
  }
});

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
