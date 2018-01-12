import lazy from "./Lazy"

export const Home = lazy(() => import("./components/views/Home.js"))
export const About = lazy(() => import("./components/views/About.js"))
export const Blog = lazy(() => import("./components/views/Blog.js"))
export const Contact = lazy(() => import("./components/views/Contact.js"))
