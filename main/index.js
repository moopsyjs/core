"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SeamlessRawClientToServerMessageEventEnum = exports.SeamlessC2SEventEnum = exports.SeamlessRawServerToClientMessageEventEnum = exports.SeamlessError = void 0;
var SeamlessError = /** @class */ (function (_super) {
    __extends(SeamlessError, _super);
    function SeamlessError(code, error, description) {
        var _this = _super.call(this, error) || this;
        _this._isSeamlessError = true;
        Object.setPrototypeOf(_this, Error.prototype);
        _this.code = code;
        _this.error = error;
        _this.description = description !== null && description !== void 0 ? description : error;
        return _this;
    }
    return SeamlessError;
}(Error));
exports.SeamlessError = SeamlessError;
var SeamlessRawServerToClientMessageEventEnum;
(function (SeamlessRawServerToClientMessageEventEnum) {
    SeamlessRawServerToClientMessageEventEnum["AUTH_ERROR"] = "auth/error";
    SeamlessRawServerToClientMessageEventEnum["AUTH_SUCCESS"] = "auth/success";
    SeamlessRawServerToClientMessageEventEnum["PONG"] = "pong";
    SeamlessRawServerToClientMessageEventEnum["CONNECTION_CLOSE"] = "connection-closed";
})(SeamlessRawServerToClientMessageEventEnum = exports.SeamlessRawServerToClientMessageEventEnum || (exports.SeamlessRawServerToClientMessageEventEnum = {}));
var SeamlessC2SEventEnum;
(function (SeamlessC2SEventEnum) {
    SeamlessC2SEventEnum["AUTH_LOGIN"] = "auth/login";
    SeamlessC2SEventEnum["PING"] = "ping";
    SeamlessC2SEventEnum["SUBSCRIBE_TO_TOPIC"] = "subscribe-to-topic";
    SeamlessC2SEventEnum["PUBLISH_TO_TOPIC"] = "publish-to-topic";
    SeamlessC2SEventEnum["CALL"] = "call";
    SeamlessC2SEventEnum["CHECK_OUTBOX"] = "check-outbox";
})(SeamlessC2SEventEnum = exports.SeamlessC2SEventEnum || (exports.SeamlessC2SEventEnum = {}));
exports.SeamlessRawClientToServerMessageEventEnum = SeamlessC2SEventEnum;
