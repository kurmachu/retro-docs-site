if(!localStorage.getItem("theme")){localStorage.setItem("theme","/default/arithm.css")}
document.getElementById("theme-zone").href = `/retro-docs-site/themes${localStorage.getItem("theme")}`