import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeOne from '../pages/home-1'
import HomeThree from '../pages/home-3'
import About from '../pages/about'
import Team from '../pages/team'
import Faq from '../pages/faq'

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomeOne />,
        },
        {
            path: '/home-3',
            element: <HomeThree />,
        },
        {
            path: '/about',
            element: <About />,
        },
        {
            path: '/team',
            element: <Team />,
        },
        {
            path: '/faq',
            element: <Faq />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Routes
