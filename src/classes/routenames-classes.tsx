import routes from "./routes-classes";

// console.log(routes.home.path); // Access path
// console.log(routes.home.title); // Access title
// console.log(routes.home.component); // Access component

const routenames = [
    {name: "Home", path: routes.home.path, "title": routes.home.title, "component":  routes.home.component},
    {name: "Join Glue", path: routes.joinglue.path, "title": routes.joinglue.title, "component":  routes.joinglue.component},
    {name: "About", path: routes.about.path, "title": routes.about.title, "component":  routes.about.component},
    {name: "Visit", path: routes.visit.path, "title": routes.visit.title, "component":  routes.visit.component},
    {name: "Map", path: routes.map.path, "title": routes.map.title, "component":  routes.map.component},
    {name: "Login", path: routes.login.path, "title": routes.login.title, "component":  routes.login.component},
    {name: "Signup", path: routes.signup.path, "title": routes.signup.title, "component":  routes.signup.component}
]

export default routenames;