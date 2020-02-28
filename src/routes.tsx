import React from "react";
import Loadable from "react-loadable";

const Home = Loadable({
  loader: () => import("./client/pages/Home"),
  loading: () => <h1>Loadding ...</h1>
});
const About = Loadable({
  loader: () => import("./client/pages/About"),
  loading: () => <h1>Loadding ...</h1>
});
const Gallery = Loadable({
  loader: () => import("./client/pages/Gallery"),
  loading: () => <h1>Loadding ...</h1>
});
const Typo = Loadable({
  loader: () => import("./client/pages/Typo"),
  loading: () => <h1>Loadding ...</h1>
});
const Contact = Loadable({
  loader: () => import("./client/pages/Contact"),
  loading: () => <h1>Loadding ...</h1>
});
const NotFound = Loadable({
  loader: () => import("./client/pages/NotFound"),
  loading: () => <h1>Loadding ...</h1>
});

const Routes = [
  {
    url: "/",
    exact: true,
    component: Home
  },
  {
    url: "/about",
    exact: false,
    component: About
  },
  {
    url: "/gallery",
    exact: false,
    component: Gallery
  },
  {
    url: "/typo",
    exact: false,
    component: Typo
  },
  {
    url: "/contact",
    exact: false,
    component: Contact
  },
  {
    url: "*",
    exact: true,
    component: NotFound
  }
];

export const MenuLinks = [
  {
    url: "/",
    menuText: "Home"
  },
  {
    url: "/about",
    menuText: "About"
  }
];

export default Routes;
