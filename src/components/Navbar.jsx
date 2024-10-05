import Link from 'next/link';

const NavLink = ({ href, children }) => (
    <Link href={href} className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
        {children}
    </Link>
);

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-black to-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 text-white text-2xl font-bold">
                        Orxan Mehdizade
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <NavLink href="/admin">Admin</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
