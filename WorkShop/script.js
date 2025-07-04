const routes = {
    "/": "./users.html",
    "/users": "./users.html",
    "/newuser": "./newuser.html",
    "/about": "./about.html"
}

document.body.addEventListener("click", e => {
    
    if (e.target.matches("[data-link]")){
        e.preventDefault();
        navigate(e.target.getAttribute("href"));
        console.log(history);
    }
});

async function navigate(pathname){
    const route = routes[pathname];
    const html = await fetch(route).then(res => res.text())
    document.getElementById("content").innerHTML = html
    history.pushState({},"",pathname);
}

window.addEventListener("popstate", () => console.log("Se presionó botón atrás")
);