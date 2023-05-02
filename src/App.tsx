import React from 'react';
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import HomePage from "./pages/home-page";
import {Outlet} from "react-router";
import AnimatedRoutes from "./components/routing/animatedRoutes";

function App() {
    return (
        <>
            <Navbar />
            {/*
            // @ts-ignore */}
            <AnimatedRoutes>
                <Outlet />
            </AnimatedRoutes>
            <Footer />
        </>
    );
}

export default App;