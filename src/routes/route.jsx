import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeOne from '../pages/home-1'
import HomeThree from '../pages/home-3'
import About from '../pages/about'

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
    ])

    return <RouterProvider router={router} />
}

export default Routes
