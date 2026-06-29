import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="glass-panel flex-col" style={{ padding: '20px', display: 'flex', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}
             onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
             onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <div style={{ height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden', padding: '10px' }}>
                <img src={product.image} alt={product.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.5))' }} />
            </div>
            
            <div style={{ marginTop: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '1px' }}>{product.category}</span>
                    <h3 style={{ fontSize: '1.2rem', margin: '10px 0', fontFamily: 'var(--font-primary)', fontWeight: 500 }}>{product.name}</h3>
                </div>
                
                <div className="flex justify-between items-center" style={{ marginTop: '20px' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-text-light)' }}>₹{product.price}</span>
                    <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
