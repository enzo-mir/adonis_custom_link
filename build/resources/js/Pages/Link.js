"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Wrapper = styled_components_1.default.div `
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  gap: 2em;
  width: clamp(500px, 50vw, 700px);
  background-color: #fff;
  aspect-ratio: 10 / 7;
  border-radius: 5px;
  box-shadow: 0 5px 20px 0px rgb(122, 122, 122);

  & > img {
    max-width: 100%;
  }
`;
function Link({ img, text }) {
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [img ? (0, jsx_runtime_1.jsx)("img", { src: img, alt: "" }) : (0, jsx_runtime_1.jsx)("p", { children: "no image" }), text ? (0, jsx_runtime_1.jsx)("p", { children: text }) : (0, jsx_runtime_1.jsx)("p", { children: "no text" })] }));
}
exports.default = Link;
//# sourceMappingURL=Link.js.map