import { burgerIcon } from "../burger/burger.js";
import { cartIcon } from "../cart/cart.js";
import { container } from "../container/container.js";
import { logo } from "../logo/logo.js";
import { navbar } from "../navbar/navbar.js";

export const mainHeader=document.createElement("header");
mainHeader.classList.add("main-header");
container.append(logo, navbar, burgerIcon, cartIcon)
mainHeader.append(container)

