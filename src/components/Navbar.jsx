import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { id: 1, link: 'home', title: 'Home' },
        { id: 2, link: 'skills', title: 'Skills' },
        { id: 3, link: 'projects', title: 'Projects' },
        { id: 4, link: 'achievements', title: 'Achievements' },
        { id: 5, link: 'contact', title: 'Contact' },
    ];

    return (
        <div
            className={`fixed w-full h-[80px] flex justify-between items-center px-4 sm:px-10 z-50 transition-all duration-300 ${shadow ? 'bg-[var(--color-primary)]/95 backdrop-blur-md shadow-lg shadow-[var(--color-secondary)]/50' : 'bg-transparent'
                }`}
        >
            <div>
                <h1 className="text-3xl font-bold text-[var(--color-accent)] cursor-pointer hover:drop-shadow-[0_0_8px_var(--color-accent)] transition-all">
                    <Link to="home" smooth={true} duration={500}>
                        K.
                    </Link>
                </h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8">
                {links.map(({ id, link, title }) => (
                    <li
                        key={id}
                        className="capitalize font-medium flex items-center gap-1 text-[var(--color-text-main)] hover:text-[var(--color-accent)] cursor-pointer transition-colors duration-200"
                    >

                        <Link to={link} smooth={true} duration={500}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger */}
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-50 md:hidden text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors"
            >
                {nav ? <X size={30} /> : <Menu size={30} />}
            </div>

            {/* Mobile Menu */}
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[var(--color-secondary)]/95 backdrop-blur-lg">
                    {links.map(({ id, link, title }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer py-6 text-2xl flex flex-col items-center gap-2 text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors"
                        >
                            <span className="text-[var(--color-accent)] text-lg">0{id}.</span>
                            <Link
                                onClick={() => setNav(!nav)}
                                to={link}
                                smooth={true}
                                duration={500}
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;