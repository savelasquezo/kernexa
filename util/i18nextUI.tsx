import React from 'react';
import Flag from 'react-world-flags';

interface I18nextUIProps {
  selectedLanguage: string;
  onLanguageChange: (lang: string) => void;
  mobileStyle: boolean;
}

const I18nextUI: React.FC<I18nextUIProps> = ({ selectedLanguage, onLanguageChange, mobileStyle }) => {
  return (
    <div className="dropdown">
      <button className="btn btn-light dropdown-toggle px-2 py-1" type="button" id="langDropdown" data-bs-toggle="dropdown" aria-expanded="false"
        style={{borderRadius: '8px', minWidth: 'auto', width: 'auto', height: mobileStyle ? '48px' : 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
        <Flag code={selectedLanguage} style={{ width: 32, height: 18, padding: '1px', borderRadius: '4px' }} />
      </button>
      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="langDropdown"
        style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '0.5rem', minWidth: 'auto',}}>
        {['us', 'es', 'pt', 'fr'].map((lang) => (
          <li key={lang} className="mb-1">
            <button className="dropdown-item d-flex align-items-center justify-content-center" onClick={() => onLanguageChange(lang)} disabled={selectedLanguage === lang}
              style={{padding: '0.25rem', borderRadius: '6px', backgroundColor: selectedLanguage === lang ? '#f0f0f0' : 'transparent',}}>
              <Flag code={lang} style={{ width: 32, height: 24, borderRadius: '4px' }} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default I18nextUI;
