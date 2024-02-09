import './App.css'
import Header from './modules/Header/Header.tsx'
import Footer from './modules/Footer/Footer.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import { TShopData } from './types.ts'
import MainPage from './pages/MainPage/MainPage.tsx'
import ProductsPage from './pages/Products/ProductsPage.tsx'
import ProductCard from './pages/ProductCard/[id].tsx'

const shopData: TShopData = {
    phone: '+7 999 999 99 99',
    instagram: '@INSTAGRAM',
    address: 'address',
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/products',
        element: <ProductsPage />,
    },
    {
        path: `/products/:id`,
        element: <ProductCard />,
    },
])
function App() {
    const { phone, instagram, address } = shopData
    return (
        <>
            <Header />
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
            <Footer address={address} instagram={instagram} phone={phone} />
        </>
    )
}

export default App
