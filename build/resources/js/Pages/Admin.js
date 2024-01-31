"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const inertia_react_1 = __importStar(require("@inertiajs/inertia-react"));
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const Popup_1 = __importDefault(require("./components/Popup"));
const Wrapper = styled_components_1.default.div `
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  width: clamp(500px, 50vw, 700px);
  background-color: #fff;
  aspect-ratio: 10 / 7;
  border-radius: 5px;
  box-shadow: 0 5px 20px 0px rgb(122, 122, 122);
  padding-block: 2em;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 2em;
    & img {
      max-height: 250px;
      border-radius: 5px;
    }

    & > input[type="file"] {
    }
  }
`;
const Admin = ({ userInfo, oldUrl, oldText, error, success, }) => {
    const [displayPopup, setdisplayPopup] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        error || success ? setdisplayPopup(true) : setdisplayPopup(false);
    }, [error, success]);
    const { data, setData, post } = inertia_react_1.default.useForm({
        image: oldUrl || success || null,
        fileUrl: "",
        text: oldText || "",
    });
    function handleSubmit(e) {
        e.preventDefault();
        post("/updateData", { data });
    }
    function handleChangeImg(event) {
        const file = event.target.files[0];
        setData({
            ...data,
            fileUrl: URL.createObjectURL(file),
            [event.target.name]: file,
        });
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [displayPopup && ((0, jsx_runtime_1.jsx)(Popup_1.default, { setDisplay: setdisplayPopup, message: error || success })), (0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsx)("h1", { children: userInfo.email }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "image", children: (0, jsx_runtime_1.jsx)("img", { src: data.fileUrl.length ? data.fileUrl : oldUrl, alt: "" }) }), (0, jsx_runtime_1.jsx)("input", { type: "file", name: "image", id: "image", onChange: handleChangeImg }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "text", value: data.text, onChange: (e) => {
                                    setData({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    });
                                } }), (0, jsx_runtime_1.jsx)("input", { type: "submit", value: "envoyer" })] }), (0, jsx_runtime_1.jsx)(inertia_react_1.InertiaLink, { href: "logout", target: "_blank", children: "Logout" }), (0, jsx_runtime_1.jsx)(inertia_react_1.InertiaLink, { href: `/link/${userInfo.id}`, target: "_blank", children: "Custom link" })] })] }));
};
exports.default = Admin;
//# sourceMappingURL=Admin.js.map