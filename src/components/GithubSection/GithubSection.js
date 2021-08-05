import './GithubSection.css';

function GithubSection() {
  return (
    <div className="github">
        <h2 className="github__title">Github</h2>
        <div className="github__container">
            <div className="github__input-container">
                <p className="github__input-name">Вставьте ссылку на Github</p>
                <input type="url" name="github-url" className="github__input" placeholder="Вставьте ссылку на Github" />
            </div>
        </div>
    </div>
  );
}

export default GithubSection;
