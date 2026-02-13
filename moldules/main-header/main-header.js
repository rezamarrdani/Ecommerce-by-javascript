import { container } from "../container/container.js";
import { logo } from "../logo/logo.js";
import { navbar } from "../navbar/navbar.js";

export const mainHeader=document.createElement("header");
mainHeader.classList.add("main-header");
container.append(navbar,logo)
mainHeader.append(container)

