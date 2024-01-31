"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const inertia_react_1 = require("@inertiajs/inertia-react");
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

  & a:hover {
    cursor: pointer;
  }

  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    width: 50%;
    max-width: 500px;

    & > * {
      width: 100%;
      border-radius: 3px;
      border: 1px solid black;
    }
    & > input {
      padding: 1em;
    }
    & > button {
      padding: 1em;
      background-color: hsl(0, 0%, 98%);
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
const Login = () => {
    const [displayForm, setDisplayForm] = (0, react_1.useState)("register");
    const [displayPopup, setDisplayPopup] = (0, react_1.useState)(false);
    const [errorMessage, setErrorMessage] = (0, react_1.useState)("");
    const { data, setData, post, processing, reset } = (0, inertia_react_1.useForm)({
        email: "",
        password: "",
    });
    function handleChange(e) {
        setData((values) => ({
            ...values,
            [e.target.name]: e.target
                .value,
        }));
    }
    const handleSubmitLogin = async (event) => {
        event.preventDefault();
        post("/login", {
            data,
        });
    };
    const handleSubmitRegister = async (event) => {
        event.preventDefault();
        post("/register", {
            data,
            onError: (err) => {
                setErrorMessage(err?.password || err?.email);
            },
            onSuccess: () => {
                setDisplayPopup(false);
            },
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [displayPopup && ((0, jsx_runtime_1.jsx)(Popup_1.default, { setDisplay: setDisplayPopup, message: errorMessage })), (0, jsx_runtime_1.jsxs)(Wrapper, { children: [displayForm === "register" ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Register" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmitRegister, children: [(0, jsx_runtime_1.jsx)("input", { type: "email", name: "email", value: data.email, onChange: handleChange, placeholder: "email" }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", value: data.password, onChange: handleChange, placeholder: "password" }), (0, jsx_runtime_1.jsx)("button", { type: "submit", disabled: processing, children: "Envoyer" })] })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Login" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmitLogin, children: [(0, jsx_runtime_1.jsx)("input", { type: "email", name: "email", value: data.email, onChange: handleChange, placeholder: "email" }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", value: data.password, onChange: handleChange, placeholder: "password" }), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "Envoyer" })] })] })), (0, jsx_runtime_1.jsxs)("a", { onClick: () => {
                            reset();
                            setDisplayForm(displayForm === "register" ? "login" : "register");
                        }, children: ["Go to ", displayForm === "register" ? "login" : "register", " form"] })] })] }));
};
exports.default = Login;
//# sourceMappingURL=Login.js.map