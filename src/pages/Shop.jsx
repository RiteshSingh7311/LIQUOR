import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

// Fallback mock data containing the user's specific whisky list
const mockProducts = [
    {
        _id: '1',
        name: 'Johnnie Walker Red Label',
        price: 2500,
        image: 'https://assets.iceland.co.uk/i/iceland/johnnie_walker_red_label_blended_scotch_whisky_70cl_35477_T1.jpg?$pdpzoom$',
        category: 'Whisky'
    },
    {
        _id: '2',
        name: 'Johnnie Walker Blue Label',
        price: 3150,
        image: 'https://cdn.public.steam-time.de/images/org/Johnnie_Walker_Blue_Label_Year_of_the_Horse_2026.jpg',
        category: 'Whisky'
    },
    {
        _id: '3',
        name: 'Chivas Regal',
        price: 1410,
        image: 'https://purplepalate.com.au/wp-content/uploads/2023/08/Product-Img-12659-1024x1024.png',
        category: 'Whisky'
    },
    {
        _id: '4',
        name: 'Glenfiddich',
        price: 4005,
        image: 'https://thecentralwhisky.com/cdn/shop/files/image_14524b07-646a-4e2f-9175-165297cf32f4.jpg?v=1687955915&width=1445',
        category: 'Whisky'
    },
    {
        _id: '5',
        name: 'Amrut Fusion',
        price: 7777,
        image: 'https://www.weinquelle.com/fotos_gross/s9056.jpg',
        category: 'Whisky'
    },
    {
        _id: '6',
        name: 'CORONA EXTRA',
        price: 200,
        image: 'https://images.heb.com/is/image/HEBGrocery/001375894',
        category: 'Beer'
    },
    {
        _id: '7',
        name: 'BEER',
        price: 50,
        image: 'https://lh7-us.googleusercontent.com/B2aqwictw3RNKy0YPgoA1WuM18DOZ_XHglMHAl3TeNMizSHDiZxHQab25AZRaSO-hZz53AESxXYSE_6aHpowByPppfwn7DTPiAQqyaToHZLEsmIMpoSt7AVNNoslTvcQ_e7BMhafSVAExbSfE1231C4',
        category: 'Beer'
    },
    {
        _id: '8',
        name: 'BUDWISER',
        price: 150,
        image: 'https://driftbasket.com/wp-content/uploads/2019/09/product-jpeg-500x500-1.jpg',
        category: 'Beer'
    },
    {
        _id: '9',
        name: 'KINGFISSER',
        price: 120,
        image: 'https://tse1.mm.bing.net/th/id/OIP.b18ukBZywkxL8Ng87lHy1AHaKa?pid=Api&P=0&h=180',
        category: 'Beer'
    },
    {
        _id: '10',
        name: 'DESI (Orange Flavor)',
        price: 75,
        image: 'https://traditionscustoms.com/images/Desi-daru-(desi-liqour)-with-Orange-flavor.jpg',
        category: 'Demanded'
    }
];

const Shop = () => {
    const [products, setProducts] = useState(mockProducts);
    const location = useLocation();
    
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const categoryFilter = queryParams.get('category');
        
        if (categoryFilter && categoryFilter.toLowerCase() === 'whisky') {
            // Filter only whisky (in our mock data, they are all whisky anyway)
            const filtered = mockProducts.filter(p => p.category.toLowerCase() === 'whisky');
            setProducts(filtered);
        } else if (categoryFilter) {
            // For other categories we don't have mock data yet, show empty or all
            const filtered = mockProducts.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase());
            setProducts(filtered);
        } else {
            setProducts(mockProducts);
        }
    }, [location]);

    return (
        <div className="container animate-fade-in" style={{ padding: '40px 20px', minHeight: '80vh' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '10px', textTransform: 'uppercase' }}>Shop Collection</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '40px', fontSize: '1.2rem' }}>
                Discover our curated selection of premium spirits.
            </p>
            
            {products.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '50px', backgroundColor: 'rgba(26,26,26,0.5)', borderRadius: '12px' }}>
                    <h3 style={{ color: 'var(--color-gold)' }}>No products found in this category.</h3>
                </div>
            ) : (
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                    gap: '30px' 
                }}>
                    {products.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Shop;
