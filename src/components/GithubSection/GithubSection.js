import React from 'react';
import './GithubSection.css';

function GithubSection() {
  const [url, setUrl] = React.useState('');
  const [urlError, setUrlError] = React.useState('');
  const [urlDirty, setUrlDirty] = React.useState(false);

  function handleUrlChange(e) {
    setUrl(e.target.value);
    const regExpUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(e.target.value); // eslint-disable-line

    if (!regExpUrl) {
        setUrlError('Пожалуйста укажите ссылку');
    } else {
        setUrlError('');
    }

    if (!e.target.value) {
      setUrlDirty(false);
    } else {
      setUrlDirty(true);
    }
  }

  return (
    <div className="github">
        <h2 className="github__title">Github</h2>
        <div className="github__container">
            <div className="github__input-container">
                <p className="github__input-name">Вставьте ссылку на Github</p>
                <input
                type="url"
                name="github-url"
                className={`github__input ${(urlDirty && urlError) ? 'github__input_type_error' : ''}`}
                placeholder="Вставьте ссылку на Github"
                value={url}
                onChange={handleUrlChange}
                />
                { (urlDirty && urlError) && <span id="github-input-error" className="github__input-error">{urlError}</span> }
            </div>
        </div>
    </div>
  );
}

export default GithubSection;
