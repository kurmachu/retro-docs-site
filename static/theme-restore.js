if(!localStorage.getItem("theme")){localStorage.setItem("theme","/default/arithm.css")}
document.getElementById("theme-zone").href = `/retro-docs-site/themes${localStorage.getItem("theme")}`
if(localStorage.getItem("theme").startsWith("/dark")){ //For dark themes, make it flash black on nav and not white.
	document.getElementsByTagName("html")[0].style.backgroundColor = "black"
}