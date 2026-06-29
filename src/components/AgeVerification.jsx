import { useState } from 'react';

const AgeVerification = ({ onVerify }) => {
    const [error, setError] = useState('');

    const handleVerify = (isOldEnough) => {
        if (isOldEnough) {
            onVerify();
        } else {
            setError('You must be of legal drinking age to enter this site.');
        }
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999,
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            <div className="glass-panel" style={{ padding: '40px', maxWidth: '500px', textAlign: 'center', margin: '20px' }}>
                <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>Are you of legal drinking age?</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '30px' }}>
                    You must be 18 or 21 years of age or older (depending on your region) to enter this site.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="btn-primary" onClick={() => handleVerify(true)}>Yes, I am</button>
                    <button className="btn-secondary" onClick={() => handleVerify(false)}>No, I am not</button>
                </div>
                {error && <p style={{ color: 'var(--color-burgundy)', marginTop: '20px', fontWeight: '500' }}>{error}</p>}
            </div>
        </div>
    );
};

export default AgeVerification;
