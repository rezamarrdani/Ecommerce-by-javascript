export const burgerIcon=document.createElement("div");
burgerIcon.classList.add("burger-icon")
burgerIcon.addEventListener("click", toggleDisplay)
export const burgerMenu=document.createElement("div");

burgerMenu.classList.add("burger-menu")
burgerIcon.innerHTML=/*html*/
`
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 4H21" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 12H21" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 20H21" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
`

function toggleDisplay()
{
    let opacity=window.getComputedStyle(burgerMenu).opacity;
    opacity=opacity=="1"?opacity="0":opacity="1";
    burgerMenu.style.opacity=opacity;
}