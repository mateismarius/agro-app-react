import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../../pages/home-page";
import ProductPage from "../../pages/product-page";
import FarmerPage from "../../pages/farmer-page";
import AboutPage from "../../pages/about-page";
import CategoryPage from "../../pages/category-page";
import ProductDetails from "../product/product-details";

export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />}/>
                <Route path="/products" element={<ProductPage />}/>
                <Route path="/farmers" element={<FarmerPage />}/>
                <Route path="/category" element={<CategoryPage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/product/:id" element={<ProductDetails />}/>
            </Routes>
        </AnimatePresence>
    );
}
