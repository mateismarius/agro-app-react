import React from 'react';
import Filters from "../components/filters/filters";
import ProductGrid from "../components/product/product-grid";
import Pagination from "../components/pagination/pagination";
import {products} from "./home-page";

function ProductPage() {
    return (
        <main className="pb-24">
            <div className="px-4 py-16 text-center sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">Platforma producatorilor autohtoni</h1>
                <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
                    Unul din secretele unui stil de viata sanatos este o alimentatie corecta. Haideti sa sprijinim fermierii nostri
                </p>
                <div>ProductPage</div>
            </div>
            <Filters />
            <ProductGrid products = {products} />
            <Pagination />
        </main>
    );
}

export default ProductPage;