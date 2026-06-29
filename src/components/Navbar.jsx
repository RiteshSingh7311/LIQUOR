import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={scrolled ? 'glass-panel' : ''} style={{ 
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, 
            borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none',
            padding: '15px 0',
            transition: 'all 0.3s ease',
            background: scrolled ? 'var(--glass-bg)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
            boxShadow: scrolled ? 'var(--glass-shadow)' : 'none'
        }}>
            <div className="container flex justify-between items-center">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h1 style={{ margin: 0, fontSize: '1.8rem', letterSpacing: '2px' }}>
                        LUXE<span className="text-gold">LIQUOR</span>
                    </h1>
                </Link>
                
                <div className="flex gap-4" style={{ display: 'flex', gap: '30px' }}>
                    <Link to="/" style={{ color: 'var(--color-text-light)', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
                    <Link to="/shop" style={{ color: 'var(--color-text-light)', textDecoration: 'none', fontWeight: 500 }}>Shop</Link>
                    <Link to="/shop?category=Whisky" style={{ color: 'var(--color-text-light)', textDecoration: 'none', fontWeight: 500 }}>Whisky</Link>
                    <Link to="/shop?category=Wine" style={{ color: 'var(--color-text-light)', textDecoration: 'none', fontWeight: 500 }}>Wine</Link>
                </div>

                <div className="flex items-center gap-4" style={{ gap: '20px' }}>
                    <div style={{ position: 'relative' }}>
                        <input type="text" placeholder="Search premium spirits..." 
                            style={{ 
                                padding: '8px 35px 8px 15px', 
                                borderRadius: '20px', 
                                border: '1px solid var(--glass-border)', 
                                background: 'rgba(0,0,0,0.5)',
                                color: 'white',
                                outline: 'none'
                            }} 
                        />
                        <FaSearch style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-gold)' }} />
                    </div>
                    <Link to="/cart" style={{ color: 'var(--color-gold)', fontSize: '1.2rem' }}><FaShoppingCart /></Link>
                    <Link to="/profile" style={{ color: 'var(--color-gold)', fontSize: '1.2rem' }}><FaUser /></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
