import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ProductsMenu from '../pages/ProductsMenu/ProductsMenu';
import ProductInfo from '../pages/ProductInfo/ProductInfo';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='*' element={<Navigate to='/home' />} /> */}
            <Route path='/home' element={<Home />} />
            <Route path='/categories/:categoryId/products' element={<ProductsMenu />} />
            <Route path='/categories/:categoryId/products/:productId' element={<ProductInfo />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
}