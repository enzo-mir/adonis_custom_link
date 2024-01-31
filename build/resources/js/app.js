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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const inertia_react_1 = require("@inertiajs/inertia-react");
const client_1 = require("react-dom/client");
require("../css/app.css");
const container = document.getElementById("app");
const page = JSON.parse(container?.dataset.page);
const root = (0, client_1.createRoot)(container);
async function resolver(pageName) {
    const module = await Promise.resolve().then(() => __importStar(require(`./Pages/${pageName}.tsx`)));
    return module.default;
}
function App() {
    return ((0, jsx_runtime_1.jsx)(inertia_react_1.InertiaApp, { initialPage: page, resolveComponent: resolver, initialComponent: "" }));
}
root.render((0, jsx_runtime_1.jsx)(App, {}));
//# sourceMappingURL=app.js.map