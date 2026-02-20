import { burgerMenu } from "./moldules/burger/burger.js";
import { mainHeader } from "./moldules/main-header/main-header.js";
const div=document.createElement("div");
div.style.height="250px"
div.style.width="100%"
div.style.backgroundColor="red"
document.body.append(mainHeader, burgerMenu, div)