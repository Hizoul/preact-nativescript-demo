'use strict';

var preactToNativescript = require('preact-to-nativescript');
var application = require('tns-core-modules/application');

var h = preactToNativescript.Preact.h;
application.start({
    create: function () {
        return preactToNativescript.render(h("page", {}, [h("stackLayout", {}, [h("label", { text: "MyCOntent" }, [])])]));
    }
});
