import './PersonalDataSection.css';

function PersonalDataSection() {
  return (
    <div className="pers-data">
        <h2 className="pers-data__title">Личные данные</h2>
        <div className="pers-data__container">
            <div className="pers-data__input-container">
                <p className="pers-data__input-name">Имя *</p>
                <input type="text" name="first-name" className="pers-data__input" placeholder="Имя" required />
            </div>
            <div className="pers-data__input-container">
                <p className="pers-data__input-name">Фамилия *</p>
                <input type="text" name="second-name" className="pers-data__input" placeholder="Фамилия" required />
            </div>
            <div className="pers-data__input-container">
                <p className="pers-data__input-name">Электронная почта *</p>
                <input type="email" name="email" className="pers-data__input" placeholder="Электронная почта" required />
            </div>
            <button type="button" className="pers-data__cv-import-button">Загрузить резюме</button>
        </div>
    </div>
  );
}

export default PersonalDataSection;
