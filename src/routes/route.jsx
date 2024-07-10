import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeOne from '../pages/home-1'

import HomeThree from '../pages/home-3'
import About from '../pages/about'
import Team from '../pages/team'
import Faq from '../pages/faq'
import Price from '../pages/price'
import NotFound from '../pages/notFound'

import HomeTwo from '../pages/home-2'

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
        {
            path: '/price',
            element: <Price />,
        },
        {
            path: '/notFound',
            element: <NotFound />,
        },
        {
            path: '/home-2',
            element: <HomeTwo />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Routes
