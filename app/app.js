'use strict';

var preactToNativescript = require('preact-to-nativescript');
var application = require('tns-core-modules/application');
var preactNativescriptComponents = require('preact-nativescript-components');
var dialogs = require('tns-core-modules/ui/dialogs');

var PageActionBar = function () {
    return (preactToNativescript.h(preactNativescriptComponents.Page, null,
        preactToNativescript.h(preactNativescriptComponents.ActionBar, null,
            preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
                preactToNativescript.h(preactNativescriptComponents.Label, { text: "CustomBar" })),
            preactToNativescript.h(preactNativescriptComponents.ActionItem, null,
                preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
                    preactToNativescript.h(preactNativescriptComponents.Label, { text: "CustomAction" }))),
            preactToNativescript.h(preactNativescriptComponents.ActionItem, { text: "s", android: { systemIcon: "ic_menu_search" } })),
        preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
            preactToNativescript.h(preactNativescriptComponents.TextView, { text: "ActionItem systemIcon and navigationbutton not showing otherwise fine" }),
            preactToNativescript.h(preactNativescriptComponents.Button, { text: "Back", onTap: preactToNativescript.goBack }))));
};

var PageActivityIndicator = function () {
    return (preactToNativescript.h(preactNativescriptComponents.Page, { cssFile: "demoApplication/pages/start.css" },
        preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
            preactToNativescript.h(preactNativescriptComponents.Label, { text: "Busy Label", className: "bordered" }),
            preactToNativescript.h(preactNativescriptComponents.ActivityIndicator, { busy: true }),
            preactToNativescript.h(preactNativescriptComponents.TextView, { text: "Not Busy TextView" }),
            preactToNativescript.h(preactNativescriptComponents.ActivityIndicator, { busy: false }),
            preactToNativescript.h(preactNativescriptComponents.Button, { text: "Back", onTap: preactToNativescript.goBack }))));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Route1 = /** @class */ (function (_super) {
    __extends(Route1, _super);
    function Route1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Route1.prototype.render = function () {
        return (preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
            preactToNativescript.h(preactNativescriptComponents.Label, { text: "First Page" }),
            preactToNativescript.h(preactNativescriptComponents.Button, { text: "Go to Second", onTap: this.props.navigateTo.bind(this, "/test") }),
            preactToNativescript.h(preactNativescriptComponents.Button, { text: "Go Back within custom router", onTap: this.props.goBack }),
            preactToNativescript.h(preactNativescriptComponents.Button, { key: "nbsback1", text: "Go Back in NativeScript Router", onTap: preactToNativescript.goBack })));
    };
    return Route1;
}(preactToNativescript.Component));
var Route2 = /** @class */ (function (_super) {
    __extends(Route2, _super);
    function Route2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Route2.prototype.render = function () {
        return (preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
            preactToNativescript.h(preactNativescriptComponents.Label, { text: "Second Page" }),
            preactToNativescript.h(preactNativescriptComponents.Button, { text: "Go to First", onTap: this.props.navigateTo.bind(this, "/") }),
            preactToNativescript.h(preactNativescriptComponents.Button, { text: "Go Back within custom router", onTap: this.props.goBack }),
            preactToNativescript.h(preactNativescriptComponents.Button, { key: "nbsback2", text: "Go Back in NativeScript Router", onTap: preactToNativescript.goBack })));
    };
    return Route2;
}(preactToNativescript.Component));
var routes = [
    { default: true, path: "/", component: Route1 },
    { path: "/test", component: Route2 }
];
var PageCustomRouter = /** @class */ (function (_super) {
    __extends(PageCustomRouter, _super);
    function PageCustomRouter(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            route: "/",
            navStack: []
        };
        _this.setNav = function (newRoute) {
            var newStack = _this.state.navStack.splice();
            newStack.push(newRoute);
            _this.setState({ route: newRoute, navStack: newStack });
        };
        _this.goBack = function () {
            if (_this.state.navStack.length > 1) {
                var newStack = _this.state.navStack.splice();
                newStack.pop();
                _this.setState({ route: newStack[newStack.length - 1], navStack: newStack });
            }
        };
        return _this;
    }
    PageCustomRouter.prototype.render = function () {
        var Comp = preactNativescriptComponents.StackLayout;
        for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
            var route = routes_1[_i];
            if (this.state.route === route.path) {
                Comp = route.component;
            }
        }
        return (preactToNativescript.h(preactNativescriptComponents.Page, null,
            preactToNativescript.h(Comp, { navigateTo: this.setNav, goBack: this.goBack })));
    };
    return PageCustomRouter;
}(preactToNativescript.Component));

var optionsAction = {
    title: "Race Selection",
    message: "Choose your race",
    cancelButtonText: "Cancel",
    actions: ["Human", "Elf", "Dwarf", "Orc"]
};
var optionsConfirm = {
    title: "Race Selection",
    message: "Are you sure you want to be an Elf?",
    okButtonText: "Yes",
    cancelButtonText: "No",
    neutralButtonText: "Cancel"
};
var optionsLogin = {
    title: "Login",
    message: "Login",
    username: "john_doe",
    password: ""
};
var optionsPrompt = {
    title: "Name",
    defaultText: "Enter your name",
    inputType: dialogs.inputType.text
};
var optionsAlert = {
    title: "Race Selection",
    message: "Race Chosen: Elf",
    okButtonText: "OK"
};
var dialogResultHandler = function (result) {
    dialogs.alert({ title: "Result", message: "Result of Previous Dialog: " + result });
};
var PageDialogs = /** @class */ (function (_super) {
    __extends(PageDialogs, _super);
    function PageDialogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageDialogs.prototype.render = function () {
        return (preactToNativescript.h(preactNativescriptComponents.Page, null,
            preactToNativescript.h(preactNativescriptComponents.ScrollView, null,
                preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
                    preactToNativescript.h(preactNativescriptComponents.Button, { text: "Action Dialog", onTap: function () {
                            dialogs.action(optionsAction).then(dialogResultHandler);
                        } }),
                    preactToNativescript.h(preactNativescriptComponents.Button, { text: "Confirm Dialog", onTap: function () {
                            dialogs.confirm(optionsConfirm).then(dialogResultHandler);
                        } }),
                    preactToNativescript.h(preactNativescriptComponents.Button, { text: "Login Dialog", onTap: function () {
                            dialogs.login(optionsLogin).then(dialogResultHandler);
                        } }),
                    preactToNativescript.h(preactNativescriptComponents.Button, { text: "Prompt Dialog", onTap: function () {
                            dialogs.prompt(optionsPrompt).then(dialogResultHandler);
                        } }),
                    preactToNativescript.h(preactNativescriptComponents.Button, { text: "Alert Dialog", onTap: function () {
                            dialogs.alert(optionsAlert);
                        } }),
                    preactToNativescript.h(preactNativescriptComponents.Button, { text: "Back", onTap: preactToNativescript.goBack })))));
    };
    return PageDialogs;
}(preactToNativescript.Component));

var PageHtmlView = /** @class */ (function (_super) {
    __extends(PageHtmlView, _super);
    function PageHtmlView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { loaded: "Loading WebView Content" };
        _this.setLoad = function (args) {
            if (args.error) {
                _this.setState({ loaded: "error " + args.error });
            }
            else {
                _this.setState({ loaded: "successfully loaded " + args.url });
            }
        };
        return _this;
    }
    PageHtmlView.prototype.render = function () {
        return (preactToNativescript.h(preactNativescriptComponents.Page, null,
            preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
                preactToNativescript.h(preactNativescriptComponents.Label, { text: "HtmlView" }),
                preactToNativescript.h(preactNativescriptComponents.HtmlView, { html: '<span><font color="#ff0000">Test</font></span>' }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "Back", onTap: preactToNativescript.goBack }),
                preactToNativescript.h(preactNativescriptComponents.Label, { text: this.state.loaded }),
                preactToNativescript.h(preactNativescriptComponents.WebView, { onLoadFinished: this.setLoad, src: "https://github.com/Hizoul/proposal-for-preact-to-nativescript" }))));
    };
    return PageHtmlView;
}(preactToNativescript.Component));

var PageImage = /** @class */ (function (_super) {
    __extends(PageImage, _super);
    function PageImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageImage.prototype.render = function () {
        return (preactToNativescript.h(preactNativescriptComponents.Page, { cssFile: "start.css" },
            preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
                preactToNativescript.h(preactNativescriptComponents.Image, { src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/NativeScript_logo.png" }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "Back", onTap: preactToNativescript.goBack }))));
    };
    return PageImage;
}(preactToNativescript.Component));

var setValueViaEvent = function (thisRef, valKey, eventKey) {
    if (valKey === void 0) { valKey = "value"; }
    if (eventKey === void 0) { eventKey = "value"; }
    return function (ev) {
        thisRef.setState((_a = {}, _a[valKey] = ev[eventKey], _a));
        var _a;
    };
};
var setValueTrigger = function (thisRef, valKey) {
    if (valKey === void 0) { valKey = "value"; }
    return function (ev) {
        thisRef.setState((_a = {}, _a[valKey] = true, _a));
        setTimeout(function () {
            thisRef.setState((_a = {}, _a[valKey] = false, _a));
            var _a;
        }, 5000);
        var _a;
    };
};

var PageListView = /** @class */ (function (_super) {
    __extends(PageListView, _super);
    function PageListView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: ["first", "second"] };
        _this.setValue = setValueViaEvent(_this);
        return _this;
    }
    PageListView.prototype.render = function () {
        var items = this.state.value;
        return (preactToNativescript.h(preactNativescriptComponents.Page, null,
            preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
                preactToNativescript.h(preactNativescriptComponents.ListView, { items: items, onItemLoading: function (args) {
                        var parent = args.view && args.view.parentNode ? args.view.parentNode : null;
                        args.view = preactToNativescript.render(preactToNativescript.h(preactNativescriptComponents.Label, { text: items[args.index] }), parent, args.view);
                    } }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "Set List to 2 Entries", onTap: this.setValue.bind(this, { value: ["first", "second"] }) }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "Set List to 5 Entries", onTap: this.setValue.bind(this, { value: ["completely", "second", "different", "list", "entries"] }) }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "Back", onTap: preactToNativescript.goBack }))));
    };
    return PageListView;
}(preactToNativescript.Component));

var items = ["firstpick", "morepicks", "which", "one", "will", "it", "be"];
var PagePickers = /** @class */ (function (_super) {
    __extends(PagePickers, _super);
    function PagePickers(props) {
        var _this = _super.call(this, props) || this;
        _this.setDateYear = setValueViaEvent(_this, "dateYear");
        _this.setDateMonth = setValueViaEvent(_this, "dateMonth");
        _this.setDateDay = setValueViaEvent(_this, "dateDay");
        _this.setTimeHour = setValueViaEvent(_this, "timeHour");
        _this.setTimeMinute = setValueViaEvent(_this, "timeMinute");
        _this.setListPick = setValueViaEvent(_this, "listPick");
        return _this;
    }
    PagePickers.prototype.render = function () {
        return (preactToNativescript.h(preactNativescriptComponents.Page, null,
            preactToNativescript.h(preactNativescriptComponents.ScrollView, null,
                preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
                    preactToNativescript.h(preactNativescriptComponents.DatePicker, { onYearChange: this.setDateYear, onMonthChange: this.setDateMonth, onDayChange: this.setDateDay }),
                    preactToNativescript.h(preactNativescriptComponents.Label, { text: "DatePicker Data (Year: " + this.state.dateYear + " Month: " + this.state.dateMonth + " Day: " + this.state.dateDay + ")" }),
                    preactToNativescript.h(preactNativescriptComponents.TimePicker, { onHourChange: this.setTimeHour, onMinuteChange: this.setTimeMinute }),
                    preactToNativescript.h(preactNativescriptComponents.Label, { text: "TimePicker Data (Hour: " + this.state.timeHour + " Minute: " + this.state.timeMinute }),
                    preactToNativescript.h(preactNativescriptComponents.ListPicker, { onSelectedIndexChange: this.setListPick, items: items }),
                    preactToNativescript.h(preactNativescriptComponents.Label, { text: "ListPicker Data (#" + this.state.listPick + " " + items[this.state.listPick] + ")" }),
                    preactToNativescript.h(preactNativescriptComponents.Button, { text: "Back", onTap: preactToNativescript.goBack })))));
    };
    return PagePickers;
}(preactToNativescript.Component));

var PageSearchBar = /** @class */ (function (_super) {
    __extends(PageSearchBar, _super);
    function PageSearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.setValue = setValueViaEvent(_this);
        _this.onClear = setValueTrigger(_this, "cleared");
        _this.onSubmit = setValueTrigger(_this, "submitted");
        return _this;
    }
    PageSearchBar.prototype.render = function () {
        return (preactToNativescript.h(preactNativescriptComponents.Page, null,
            preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
                preactToNativescript.h(preactNativescriptComponents.SearchBar, { title: "MyTitle", text: this.state.value, hint: "Search", onClear: this.onClear, onTextChange: this.setValue, onSubmit: this.onSubmit }),
                preactToNativescript.h(preactNativescriptComponents.Label, { text: "Current state-controlled SearchBar Input is:" }),
                preactToNativescript.h(preactNativescriptComponents.Label, { text: JSON.stringify(this.state.value) }),
                preactToNativescript.h(preactNativescriptComponents.Label, { text: this.state.cleared ? "SearchBar was recently cleared" : "SearchBar clear button wasn't pressed recently" }),
                preactToNativescript.h(preactNativescriptComponents.Label, { text: this.state.submitted ? "SearchBar was recently submitted" : "SearchBar content wasn't recently submitted" }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "Back", onTap: preactToNativescript.goBack }))));
    };
    return PageSearchBar;
}(preactToNativescript.Component));

var PageSegmentedBar = /** @class */ (function (_super) {
    __extends(PageSegmentedBar, _super);
    function PageSegmentedBar(props) {
        var _this = _super.call(this, props) || this;
        _this.setValue = setValueViaEvent(_this);
        return _this;
    }
    PageSegmentedBar.prototype.render = function () {
        var childs = [
            preactToNativescript.h(preactNativescriptComponents.SegmentedBarItem, { key: "1", title: "First" }),
            preactToNativescript.h(preactNativescriptComponents.SegmentedBarItem, { key: "2", title: "Second" })
        ];
        if (this.state.value < 2) {
            childs.push(preactToNativescript.h(preactNativescriptComponents.SegmentedBarItem, { key: "3", title: "Third" }));
        }
        else {
            childs.push(preactToNativescript.h(preactNativescriptComponents.SegmentedBarItem, { key: "4", title: "DiffThird" }));
            childs.push(preactToNativescript.h(preactNativescriptComponents.SegmentedBarItem, { key: "5", title: "Fourth" }));
        }
        return (preactToNativescript.h(preactNativescriptComponents.Page, null,
            preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
                preactToNativescript.h(preactNativescriptComponents.SegmentedBar, { onSelectedIndexChange: this.setValue }, childs),
                preactToNativescript.h(preactNativescriptComponents.Label, { text: "Selected Segment is " + this.state.value }),
                preactToNativescript.h(preactNativescriptComponents.Label, { text: "If selected segment > 2 contents of SegmentBar will change dynamically" }),
                preactToNativescript.h(preactNativescriptComponents.Label, { text: "TODO: on dynamic change correctly set selectedIndex highlight" }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "Back", onTap: preactToNativescript.goBack }))));
    };
    return PageSegmentedBar;
}(preactToNativescript.Component));

var PageSlider = /** @class */ (function (_super) {
    __extends(PageSlider, _super);
    function PageSlider(props) {
        var _this = _super.call(this, props) || this;
        _this.setValue = setValueViaEvent(_this);
        return _this;
    }
    PageSlider.prototype.render = function () {
        return (preactToNativescript.h(preactNativescriptComponents.Page, null,
            preactToNativescript.h(preactNativescriptComponents.ActionBar, { title: "Slider" }),
            preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
                preactToNativescript.h(preactNativescriptComponents.Slider, { onValueChange: this.setValue, value: this.state.value, maxValue: 120 }),
                preactToNativescript.h(preactNativescriptComponents.Label, { text: "(Min: 0, Max: 120) Current Slider Value: " + this.state.value }),
                preactToNativescript.h(preactNativescriptComponents.Label, { text: "Slidervalue mapped to Progress" }),
                preactToNativescript.h(preactNativescriptComponents.Progress, { value: this.state.value }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "Back", onTap: preactToNativescript.goBack }))));
    };
    return PageSlider;
}(preactToNativescript.Component));

var PageSwitch = /** @class */ (function (_super) {
    __extends(PageSwitch, _super);
    function PageSwitch(props) {
        var _this = _super.call(this, props) || this;
        _this.getVal = function (key) {
            var val = _this.state[key];
            if (val === undefined || val === null) {
                return "false";
            }
            return String(val);
        };
        _this.setS1 = setValueViaEvent(_this, "s1");
        _this.setS2 = setValueViaEvent(_this, "s2");
        return _this;
    }
    PageSwitch.prototype.render = function () {
        return (preactToNativescript.h(preactNativescriptComponents.Page, null,
            preactToNativescript.h(preactNativescriptComponents.ActionBar, { text: "Switch" }),
            preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
                preactToNativescript.h(preactNativescriptComponents.Label, { text: "Switch #1 value is " + this.getVal("s1") }),
                preactToNativescript.h(preactNativescriptComponents.Switch, { checked: this.getVal("s1"), onCheckedChange: this.setS1 }),
                preactToNativescript.h(preactNativescriptComponents.Label, { text: "Switch #2 value is " + this.getVal("s2") }),
                preactToNativescript.h(preactNativescriptComponents.Switch, { checked: this.getVal("s2"), onCheckedChange: this.setS2 }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "Back", onTap: preactToNativescript.goBack }))));
    };
    return PageSwitch;
}(preactToNativescript.Component));

var PageTabView = /** @class */ (function (_super) {
    __extends(PageTabView, _super);
    function PageTabView(props) {
        var _this = _super.call(this, props) || this;
        _this.setValue = setValueViaEvent(_this);
        return _this;
    }
    PageTabView.prototype.render = function () {
        return (preactToNativescript.h(preactNativescriptComponents.Page, null,
            preactToNativescript.h(preactNativescriptComponents.ActionBar, { text: "Tabs" }),
            preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
                preactToNativescript.h(preactNativescriptComponents.Label, { text: "Selection is " + this.state.value }),
                preactToNativescript.h(preactNativescriptComponents.TabView, { selectedIndex: this.state.value, onSelectedIndexChange: this.setValue },
                    preactToNativescript.h(preactNativescriptComponents.TabViewItem, { title: "Tab1" },
                        preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
                            preactToNativescript.h(preactNativescriptComponents.Label, { text: "Tab#1Content" }))),
                    preactToNativescript.h(preactNativescriptComponents.TabViewItem, { title: "Tab2" },
                        preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
                            preactToNativescript.h(preactNativescriptComponents.Label, { text: "Tab#2 More Content" })))))));
    };
    return PageTabView;
}(preactToNativescript.Component));

var StartPage = function () {
    return (preactToNativescript.h(preactNativescriptComponents.Page, null,
        preactToNativescript.h(preactNativescriptComponents.ActionBar, { text: "Preact to Nativescript Menu" }),
        preactToNativescript.h(preactNativescriptComponents.ScrollView, null,
            preactToNativescript.h(preactNativescriptComponents.StackLayout, null,
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "ActivityIndicator", onTap: preactToNativescript.navigateTo.bind(null, preactToNativescript.h(PageActivityIndicator, null)) }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "SearchBar", onTap: preactToNativescript.navigateTo.bind(null, preactToNativescript.h(PageSearchBar, null)) }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "Custom-Router", onTap: preactToNativescript.navigateTo.bind(null, preactToNativescript.h(PageCustomRouter, null)) }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "Dialogs", onTap: preactToNativescript.navigateTo.bind(null, preactToNativescript.h(PageDialogs, null)) }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "Slider", onTap: preactToNativescript.navigateTo.bind(null, preactToNativescript.h(PageSlider, null)) }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "Image", onTap: preactToNativescript.navigateTo.bind(null, preactToNativescript.h(PageImage, null)) }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "Date- / Time- / List-Picker", onTap: preactToNativescript.navigateTo.bind(null, preactToNativescript.h(PagePickers, null)) }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "HtmlView & WebView", onTap: preactToNativescript.navigateTo.bind(null, preactToNativescript.h(PageHtmlView, null)) }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "SegmentedBar", onTap: preactToNativescript.navigateTo.bind(null, preactToNativescript.h(PageSegmentedBar, null)) }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "TabView", onTap: preactToNativescript.navigateTo.bind(null, preactToNativescript.h(PageTabView, null)) }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "ListView", onTap: preactToNativescript.navigateTo.bind(null, preactToNativescript.h(PageListView, null)) }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "Switch", onTap: preactToNativescript.navigateTo.bind(null, preactToNativescript.h(PageSwitch, null)) }),
                preactToNativescript.h(preactNativescriptComponents.Button, { text: "ActionBar", onTap: preactToNativescript.navigateTo.bind(null, preactToNativescript.h(PageActionBar, null)) })))));
};

application.start({
    create: function () {
        return preactToNativescript.render(preactToNativescript.h(StartPage, null), null);
    }
});
