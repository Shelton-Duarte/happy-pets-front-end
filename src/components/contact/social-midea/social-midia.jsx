import { FacebookLogo, InstagramLogo } from "phosphor-react";

export const SocialMidia = () => {
    return (
      <>
        <section className="social-links" style={{ maxWidth: '50%', marginBottom: '30px', background: '#D9D9D9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
<h2 style={{ fontSize: '1.5rem', color: 'black', marginBottom: '15px', textAlign: 'center' }}>Nossas Redes Sociais</h2>
<ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
  <li><FacebookLogo size={32} /><a href="https://www.facebook.com/empresa" target="_blank" rel="noopener noreferrer" style={{ color: 'black', fontSize: '1rem', margin: '0 10px', textDecoration: 'none', transition: 'color 0.3s ease' }}></a></li>
  <li><InstagramLogo size={32} /><a href="https://twitter.com/empresa" target="_blank" rel="noopener noreferrer" style={{ color: 'black', fontSize: '1rem', margin: '0 10px', textDecoration: 'none', transition: 'color 0.3s ease' }}></a></li>
 <li><InstagramLogo size={32} /><a href="https://www.instagram.com/empresa" target="_blank" rel="noopener noreferrer" style={{ color: 'black', fontSize: '1rem', margin: '0 10px', textDecoration: 'none', transition: 'color 0.3s ease' }}></a></li>
</ul>
</section>
  
      </>
    );
  };
  
