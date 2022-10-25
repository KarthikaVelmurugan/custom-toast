"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./CustomAlert.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* Custom Toast Component */

const CustomAlert = _ref => {
  let {
    alert,
    setAlert
  } = _ref;
  const MINUTE_MS = 4000;
  (0, _react.useEffect)(() => {
    if (alert.type === "error") {
      document.getElementById("alert").style.backgroundColor = "rgb(243, 72, 72)";
    } else if (alert.type === "success") {
      document.getElementById("alert").style.backgroundColor = "#008000";
    }

    /* Controlling the auto close */

    setInterval(() => {
      setAlert({
        active: false,
        type: null,
        message: null
      });
    }, MINUTE_MS);
  });

  /* Handle the close icon click */

  const handleClose = () => {
    setAlert({
      active: false,
      type: null,
      message: null
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: alert && alert.active === true ? "alert" : "hidden",
    id: "alert"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "closebtn",
    onClick: handleClose
  }, "\xD7"), alert.message);
};
var _default = CustomAlert;
exports.default = _default;