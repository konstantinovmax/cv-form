import './ApplicationForm.css';
import React from 'react';
import PersonalDataSection from '../PersonalDataSection/PersonalDataSection';
import GenderSection from '../GenderSection/GenderSection';
import GithubSection from '../GithubSection/GithubSection';

function ApplicationForm(props) {
  const [firstNameError, setFirstNameError] = React.useState('');
  const [secondNameError, setSecondNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [value, setValue] = React.useState(null);
  const [checkbox, setCheckbox] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);

  function handleSubmitForm(e) {
    e.preventDefault();
    props.onSuccessModalOpen();
  }

  function handleValidForm(firstNameError, secondNameError, emailError) {
    setFirstNameError(firstNameError);
    setSecondNameError(secondNameError);
    setEmailError(emailError);
  }

  function handleGenderChange(checked) {
    setValue(checked);
  }

  React.useEffect(() => {
    if (firstNameError || secondNameError || emailError || !checkbox || (value === null)) {
        setFormValid(false);
    } else {
        setFormValid(true);
    }
  }, [firstNameError, secondNameError, emailError, checkbox, value]);

  return (
    <form className="app-form" onSubmit={handleSubmitForm} noValidate>
        <h1 className="app-form__title">Анкета соискателя</h1>
        <PersonalDataSection
        handleValidForm={handleValidForm}
        />
        <GenderSection
        handleGenderChange={handleGenderChange}
        />
        <GithubSection />
        <div className="app-form__checkbox-container">
            <input className="app-form__checkbox" type="checkbox" onChange={(e) => setCheckbox(e.target.checked)} />
            <p className="app-form__checkbox-title">* Я согласен с <span className="app-form__checkbox-span"><button type="reset" className="app-form__checkbox-button" onClick={props.onPoliticModalOpen}>политикой конфиденциальности</button></span></p>
        </div>
        <button type="submit" className={`app-form__submit-button ${formValid ? 'app-form__submit-button' : 'app-form__submit-button_type_disabled'}`} disabled={!formValid}>Отправить</button>
    </form>
  );
}

export default ApplicationForm;
