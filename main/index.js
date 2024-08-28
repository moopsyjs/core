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
exports.MoopsyRawClientToServerMessageEventEnum = exports.MoopsyC2SEventEnum = exports.MoopsyRawServerToClientMessageEventEnum = exports.MoopsyError = void 0;
var MoopsyError = /** @class */ (function (_super) {
    __extends(MoopsyError, _super);
    function MoopsyError(code, error, description) {
        var _this = _super.call(this, error) || this;
        _this._isMoopsyError = true;
        Object.setPrototypeOf(_this, Error.prototype);
        _this.code = code;
        _this.error = error;
        _this.description = description !== null && description !== void 0 ? description : error;
        return _this;
    }
    return MoopsyError;
}(Error));
exports.MoopsyError = MoopsyError;
var MoopsyRawServerToClientMessageEventEnum;
(function (MoopsyRawServerToClientMessageEventEnum) {
    MoopsyRawServerToClientMessageEventEnum["AUTH_ERROR"] = "auth/error";
    MoopsyRawServerToClientMessageEventEnum["AUTH_SUCCESS"] = "auth/success";
    MoopsyRawServerToClientMessageEventEnum["PONG"] = "pong";
    MoopsyRawServerToClientMessageEventEnum["CONNECTION_CLOSE"] = "connection-closed";
})(MoopsyRawServerToClientMessageEventEnum = exports.MoopsyRawServerToClientMessageEventEnum || (exports.MoopsyRawServerToClientMessageEventEnum = {}));
var MoopsyC2SEventEnum;
(function (MoopsyC2SEventEnum) {
    MoopsyC2SEventEnum["AUTH_LOGIN"] = "auth/login";
    MoopsyC2SEventEnum["PING"] = "ping";
    MoopsyC2SEventEnum["SUBSCRIBE_TO_TOPIC"] = "subscribe-to-topic";
    MoopsyC2SEventEnum["PUBLISH_TO_TOPIC"] = "publish-to-topic";
    MoopsyC2SEventEnum["CALL"] = "call";
    MoopsyC2SEventEnum["CHECK_OUTBOX"] = "check-outbox";
})(MoopsyC2SEventEnum = exports.MoopsyC2SEventEnum || (exports.MoopsyC2SEventEnum = {}));
exports.MoopsyRawClientToServerMessageEventEnum = MoopsyC2SEventEnum;
