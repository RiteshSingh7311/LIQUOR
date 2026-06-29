import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="animate-fade-in" style={{ position: 'relative', overflowX: 'hidden' }}>
            
            {/* Fixed Video Background (Parallax Effect) */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: -2,
                overflow: 'hidden'
            }}>
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    preload="auto"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}
                >
                    <source src="/Vodka_bottle_with_bar_lighting_202606291240.mp4" type="video/mp4" />
                </video>
                {/* Dark Overlay for Text Readability */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.55)',
                    zIndex: -1
                }}></div>
            </div>

            {/* Hero Section Content (Overlays the fixed video) */}
            <section style={{ 
                height: '100vh', 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}>
                <div className="container text-center animate-fade-in" style={{ maxWidth: '800px', animationDelay: '0.3s' }}>
                    <h1 style={{ fontSize: '4.5rem', marginBottom: '20px', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                        Elevate Your Spirits
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: '#eaeaea', marginBottom: '40px', lineHeight: 1.6, textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                        Discover our curated collection of premium whiskies, rare wines, and exceptional spirits from around the globe.
                    </p>
                    <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
                        <Link to="/shop">
                            <button className="btn-primary" style={{ padding: '16px 45px', fontSize: '1.1rem' }}>Shop Now</button>
                        </Link>
                        <Link to="/shop?category=Beer">
                            <button className="btn-secondary" style={{ padding: '16px 45px', fontSize: '1.1rem', backgroundColor: 'rgba(0,0,0,0.3)' }}>Explore Collection</button>
                        </Link>
                        <Link to="/shop?category=Demanded">
                            <button style={{ 
                                padding: '16px 45px', 
                                fontSize: '1.2rem', 
                                backgroundColor: '#800020', 
                                color: '#fff', 
                                border: '2px solid var(--color-gold)', 
                                borderRadius: '30px', 
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                boxShadow: '0 0 25px rgba(212, 175, 55, 0.6)',
                                animation: 'pulse 2s infinite'
                            }}>
                                MOST DEMANDED LIQUOR 🔥
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content Area with Solid Background so video is hidden when scrolling past hero */}
            <div style={{ backgroundColor: 'var(--color-black)', position: 'relative', zIndex: 1, minHeight: '100vh' }}>
                {/* Featured Categories */}
                <section className="container" style={{ padding: '80px 20px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Curated Selections</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {/* Category Card 1 */}
                        <div className="glass-panel" style={{ padding: '30px', textAlign: 'center', transition: 'transform 0.3s', cursor: 'pointer', backgroundColor: 'rgba(26,26,26,1)' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Single Malt Scotch</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>Aged to perfection in the highlands.</p>
                            <Link to="/shop?category=Whisky" className="text-gold" style={{ textDecoration: 'none', fontWeight: 600 }}>Explore Whiskeys &rarr;</Link>
                        </div>
                        {/* Category Card 2 */}
                        <div className="glass-panel" style={{ padding: '30px', textAlign: 'center', transition: 'transform 0.3s', cursor: 'pointer', backgroundColor: 'rgba(26,26,26,1)' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Premium Wines</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>Rare vintages from top vineyards.</p>
                            <Link to="/shop?category=Wine" className="text-gold" style={{ textDecoration: 'none', fontWeight: 600 }}>Explore Wines &rarr;</Link>
                        </div>
                        {/* Category Card 3 */}
                        <div className="glass-panel" style={{ padding: '30px', textAlign: 'center', transition: 'transform 0.3s', cursor: 'pointer', backgroundColor: 'rgba(26,26,26,1)' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Craft Gins</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>Botanical masterpieces for your tonic.</p>
                            <Link to="/shop?category=Gin" className="text-gold" style={{ textDecoration: 'none', fontWeight: 600 }}>Explore Gins &rarr;</Link>
                        </div>
                    </div>
                </section>

                {/* Retailer Section */}
                <section className="container" style={{ padding: '20px 20px 80px' }}>
                    <div className="glass-panel" style={{ 
                        display: 'flex', 
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '40px',
                        padding: '40px', 
                        backgroundColor: 'rgba(26,26,26,1)',
                        maxWidth: '900px',
                        margin: '0 auto',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{ flex: '1', minWidth: '250px', display: 'flex', justifyContent: 'center' }}>
                            <img 
                                src="/arpit-patel.jpg" 
                                alt="Arpit Patel - Shop Owner" 
                                style={{ 
                                    width: '250px', 
                                    height: '250px', 
                                    objectFit: 'cover', 
                                    borderRadius: '50%', 
                                    border: '4px solid var(--color-gold)',
                                    boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                                }} 
                            />
                        </div>
                        <div style={{ flex: '2', minWidth: '300px' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--color-gold-light)' }}>Meet The Owner</h2>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '5px' }}>Arpit Patel</h3>
                            <p style={{ fontSize: '1.2rem', color: 'var(--color-gold)', marginBottom: '20px', fontWeight: 500, letterSpacing: '1px' }}>SHOP OWNER</p>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', width: '80px' }}>Age:</span>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>20</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', width: '80px' }}>Contact:</span>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>+91 8115582536</span>
                                </div>
                                <p style={{ color: 'var(--color-text-muted)', marginTop: '10px', lineHeight: 1.6 }}>
                                    Welcome to LuxeLiquor. Arpit Patel brings a fresh, modern approach to curating the finest premium spirits and beverages. Dedicated to providing an exceptional customer experience and top-tier quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
