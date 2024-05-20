import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeOne from '../pages/home-1'

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomeOne />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Routes
