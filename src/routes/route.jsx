import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeOne from '../pages/home-1'
import HomeTwo from '../pages/home-2'

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomeOne />,
        },
        {
            path: '/home-2',
            element: <HomeTwo />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Routes
