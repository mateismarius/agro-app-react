import React from 'react';


const footerNavigation = {
    account: [
        { name: 'Gestioneaza profilul', href: '#' },
        { name: 'Produse salvate', href: '#' },
        { name: 'Comenzi', href: '#' },
    ],
    services: [
        { name: 'Conditii de livrare', href: '#' },
        { name: 'Intrebari frecvente', href: '#' },
        { name: 'Producatori', href: '#' },
        { name: 'Contact', href: '#' },
    ],
    company: [
        { name: 'Despre noi', href: '#' },
        { name: 'Termeni si conditii', href: '#' },
        { name: 'Contact', href: '#' },
    ],
    connect: [
        { name: 'Instagram', href: '#' },
        { name: 'Facebook', href: '#' },
    ],
}
function Footer() {
    return (
        <footer aria-labelledby="footer-heading" className="bg-white">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 border-t border-gray-200 py-20 sm:grid-cols-2 sm:gap-y-0 lg:grid-cols-4">
                    <div className="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Profil</h3>
                            <ul role="list" className="mt-6 space-y-6">
                                {footerNavigation.account.map((item) => (
                                    <li key={item.name} className="text-sm">
                                        <a href={item.href} className="text-gray-500 hover:text-gray-600">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Servicii</h3>
                            <ul role="list" className="mt-6 space-y-6">
                                {footerNavigation.services.map((item) => (
                                    <li key={item.name} className="text-sm">
                                        <a href={item.href} className="text-gray-500 hover:text-gray-600">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Companie</h3>
                            <ul role="list" className="mt-6 space-y-6">
                                {footerNavigation.company.map((item) => (
                                    <li key={item.name} className="text-sm">
                                        <a href={item.href} className="text-gray-500 hover:text-gray-600">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Urmareste</h3>
                            <ul role="list" className="mt-6 space-y-6">
                                {footerNavigation.connect.map((item) => (
                                    <li key={item.name} className="text-sm">
                                        <a href={item.href} className="text-gray-500 hover:text-gray-600">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 py-10 sm:flex sm:items-center sm:justify-between">
                    <p className="mt-6 text-center text-sm text-gray-500 sm:mt-0">&copy; {new Date().getFullYear()} Matei Marius</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;