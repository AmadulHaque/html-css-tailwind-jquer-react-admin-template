import { privateRoutes } from './PrivateRoutes.js'
import MainLayout from '../../layout/MainLayout.jsx'
import ProtectRoute from './ProtectRoute.jsx'

export const getRoutes = () => {
    const allRoute = []
    privateRoutes.map(r => {
        r.element = <ProtectRoute route={r} >{r.element}</ProtectRoute>
    })
    return {
        path: '/',
        element:<MainLayout/>,
        children: privateRoutes
    }
}