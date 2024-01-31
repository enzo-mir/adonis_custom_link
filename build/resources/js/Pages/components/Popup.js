"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Wrapper = styled_components_1.default.div `
  position: absolute;
  display: grid;
  place-items: center;
  left: 50%;
  transform: translateX(-50%);
  top: 5%;
  width: clamp(350px, 35vw, 500px);
  background-color: #fff;
  aspect-ratio: 2 / 1;
  border-radius: 5px;
  box-shadow: 0 5px 20px 0px rgb(122, 122, 122);
  z-index: 50;
`;
const Popup = ({ message, setDisplay, }) => {
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsx)("p", { children: message }), (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                    setDisplay(false);
                }, children: "Close" })] }));
};
exports.default = Popup;
//# sourceMappingURL=Popup.js.map