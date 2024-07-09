import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeOne from '../pages/home-1'
import HomeThree from '../pages/home-3'

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
    ])

    return <RouterProvider router={router} />
}

export default Routes
