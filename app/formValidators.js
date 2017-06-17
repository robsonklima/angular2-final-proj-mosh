System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FormValidators;
    return {
        setters:[],
        execute: function() {
            FormValidators = (function () {
                function FormValidators() {
                }
                FormValidators.email = function (control) {
                    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    var valid = regEx.test(control.value);
                    return valid ? null : { email: true };
                };
                FormValidators.shouldBeUnique = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value == "robsonklima")
                                resolve({ shouldBeUnique: true });
                            else
                                resolve(null);
                        }, 2000);
                    });
                };
                FormValidators.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') > 0)
                        return { cannotContainSpace: true };
                    return null;
                };
                return FormValidators;
            }());
            exports_1("FormValidators", FormValidators);
        }
    }
});
//# sourceMappingURL=formValidators.js.map