import React from 'react';
import Product from "../../api/models/product";
import ProductCard from "./product-card";
import {useNavigate} from "react-router";

interface Props {
    products: Product[]
}

function ProductGrid(props: Props) {
    const {products} = props;

    return (
        <section aria-labelledby="products-heading" className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
            <h2 id="products-heading" className="sr-only">
                Products
            </h2>

            <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
        </section>
    );
}

export default ProductGrid;