const HomePage = () => import(/* webpackChunkName: "vue-pages" */ './pages/HomePage') // importação que retorna uma promise
const AboutPage = () => import(/* webpackChunkName: "vue-pages" */ './pages/AboutPage') // importação que retorna uma promise

const routes = [
    {
        path: '/home',
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    }
]

export default routes




