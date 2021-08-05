import './ApplicationForm.css';
import React from 'react';
import PersonalDataSection from '../PersonalDataSection/PersonalDataSection';
import GenderSection from '../GenderSection/GenderSection';
import GithubSection from '../GithubSection/GithubSection';

function ApplicationForm() {
  return (
    <form className="app-form">
        <h1 className="app-form__title">Анкета соискателя</h1>
        <PersonalDataSection />
        <GenderSection />
        <GithubSection />
        <div className="app-form__checkbox-container">
            <input className="app-form__checkbox" type="checkbox" />
            <p className="app-form__checkbox-title">* Я согласен с <span className="app-form__checkbox-span"><a href="/" className="app-form__checkbox-link">политикой конфиденциальности</a></span></p>
        </div>
        <button type="submit" className="app-form__submit-button">Отправить</button>
    </form>
  );
}

export default ApplicationForm;
