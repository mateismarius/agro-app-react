import React from 'react';
import Product from "../api/models/product";
import ProductGrid from "../components/product/product-grid";
import Pagination from "../components/pagination/pagination";
import Filters from "../components/filters/filters";


export const products : Product[] = [
    {
        id: 1,
        name: 'Organize Basic Set (Walnut)',
        description:
            'The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.',
        highlights: [
            '200+ SVG icons in 3 unique styles',
            'Compatible with Figma, Sketch, and Adobe XD',
            'Drawn on 24 x 24 pixel grid',
        ],
        price: '$149',
        rating: 5,
        reviewCount: 38,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 2,
        name: 'Organize Pen Holder',
        description:
            'The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.',
        highlights: [
            '200+ SVG icons in 3 unique styles',
            'Compatible with Figma, Sketch, and Adobe XD',
            'Drawn on 24 x 24 pixel grid',
        ],
        price: '$15',
        rating: 5,
        reviewCount: 18,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 3,
        name: 'Organize Sticky Note Holder',
        description:
            'The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.',
        highlights: [
            '200+ SVG icons in 3 unique styles',
            'Compatible with Figma, Sketch, and Adobe XD',
            'Drawn on 24 x 24 pixel grid',
        ],
        price: '$15',
        rating: 5,
        reviewCount: 14,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 4,
        name: 'Organize Phone Holder',
        description:
            'The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.',
        highlights: [
            '200+ SVG icons in 3 unique styles',
            'Compatible with Figma, Sketch, and Adobe XD',
            'Drawn on 24 x 24 pixel grid',
        ],
        price: '$15',
        rating: 4,
        reviewCount: 21,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 1,
        name: 'Organize Basic Set (Walnut)',
        description:
            'The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.',
        highlights: [
            '200+ SVG icons in 3 unique styles',
            'Compatible with Figma, Sketch, and Adobe XD',
            'Drawn on 24 x 24 pixel grid',
        ],
        price: '$149',
        rating: 5,
        reviewCount: 38,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 2,
        name: 'Organize Pen Holder',
        description:
            'The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.',
        highlights: [
            '200+ SVG icons in 3 unique styles',
            'Compatible with Figma, Sketch, and Adobe XD',
            'Drawn on 24 x 24 pixel grid',
        ],
        price: '$15',
        rating: 5,
        reviewCount: 18,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 3,
        name: 'Organize Sticky Note Holder',
        description:
            'The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.',
        highlights: [
            '200+ SVG icons in 3 unique styles',
            'Compatible with Figma, Sketch, and Adobe XD',
            'Drawn on 24 x 24 pixel grid',
        ],
        price: '$15',
        rating: 5,
        reviewCount: 14,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 4,
        name: 'Organize Phone Holder',
        description:
            'The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.',
        highlights: [
            '200+ SVG icons in 3 unique styles',
            'Compatible with Figma, Sketch, and Adobe XD',
            'Drawn on 24 x 24 pixel grid',
        ],
        price: '$15',
        rating: 4,
        reviewCount: 21,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    // More products...
]



function HomePage() {

    return (
        <main className="pb-24">
            <div className="px-4 py-16 text-center sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">Platforma producatorilor autohtoni</h1>
                <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
                    Unul din secretele unui stil de viata sanatos este o alimentatie corecta. Haideti sa sprijinim fermierii nostri
                </p>
            </div>
            <Filters />
            <ProductGrid products = {products} />
            <Pagination />
        </main>
    );
}

export default HomePage;