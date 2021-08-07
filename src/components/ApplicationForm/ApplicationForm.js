import './ApplicationForm.css';
import React from 'react';

function ApplicationForm(props) {
  const [firstName, setFirstName] = React.useState('');
  const [secondName, setSecondName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [firstNameDirty, setFirstNameDirty] = React.useState(false);
  const [secondNameDirty, setSecondNameDirty] = React.useState(false);
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [firstNameError, setFirstNameError] = React.useState('Поле имя не может быть пустым');
  const [secondNameError, setSecondNameError] = React.useState('Поле фамилия не может быть пустым');
  const [emailError, setEmailError] = React.useState('Поле email не может быть пустым');
  const [checkGender, setCheckGender] = React.useState(null);
  const genders = ['Мужской', 'Женский'];
  const [url, setUrl] = React.useState('');
  const [urlError, setUrlError] = React.useState('');
  const [urlDirty, setUrlDirty] = React.useState(false);
  const [checkbox, setCheckbox] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);

  function blurHandler(e) {
    switch (e.target.name) {
        case 'first-name':
            setFirstNameDirty(true);
            break;

        case 'second-name':
            setSecondNameDirty(true);
            break;
        
        case 'email':
            setEmailDirty(true);
            break;

        default:
            console.log('Ошибка в blurHandler');
            break;
    }
  }

  function handleFirstNameChange(e) {
      setFirstName(e.target.value);
      const regExpFerstName = /^[-а-яА-ЯёЁa-zA-Z]+$/.test(e.target.value);

      if (e.target.value.length < 1 || e.target.value.length > 30) {
          setFirstNameError('Длина имени должна составлять от 1 до 30 символов');
      } else if (!regExpFerstName) {
          setFirstNameError('В имени могут быть только буквы');
      } else {
          setFirstNameError('');
      }
  }

  function handleSecondNameChange(e) {
      setSecondName(e.target.value);
      const regExpSecondName = /^[-а-яА-ЯёЁa-zA-Z]+$/.test(e.target.value);

      if (e.target.value.length < 1 || e.target.value.length > 30) {
          setSecondNameError('Длина фамилии должна составлять от 1 до 30 символов');
      } else if (!regExpSecondName) {
          setSecondNameError('В фамилии могут быть только буквы');
      } else {
          setSecondNameError('');
      }
  }

  function handleEmailChange(e) {
      setEmail(e.target.value);
      const regExpEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(e.target.value);

      if (!regExpEmail) {
          setEmailError('Пожалуйста укажите электронную почту');
      } else {
          setEmailError('');
      }
  }

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

  function handleCheckboxChange(e) {
    setCheckbox(e.target.checked);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    props.onSuccessModalOpen();
    props.handleCheckUserName(firstName);
    setFirstName('');
    setSecondName('');
    setEmail('');
    setCheckGender(null);
    setUrl('');
    setCheckbox(false);
  }

  React.useEffect(() => {
    if (firstNameError || secondNameError || emailError || (checkGender === null) || !checkbox) {
        setFormValid(false);
    } else {
        setFormValid(true);
    }
  }, [firstNameError, secondNameError, emailError, checkGender, checkbox]);

  return (
    <form name="main-form" className="app-form" onSubmit={handleSubmitForm} noValidate>
        <h1 className="app-form__title">Анкета соискателя</h1>

        <section className="app-form__pers-data">
            <h2 className="app-form__pers-data-title">Личные данные</h2>
            <div className="app-form__pers-data-container">
                <div className="app-form__pers-data-input-container">
                    <p className="app-form__pers-data-input-name">Имя *</p>
                    <input
                    type="text"
                    name="first-name"
                    className={`app-form__pers-data-input ${(firstNameDirty && firstNameError) ? 'app-form__pers-data-input_type_error' : ''}`}
                    placeholder="Имя"
                    required
                    value={firstName}
                    onChange={handleFirstNameChange}
                    onBlur={blurHandler}
                    autoComplete="off"
                    />
                    { (firstNameDirty && firstNameError) && <span id="pers-data-input-error" className="app-form__pers-data-input-error">{firstNameError}</span> }
                </div>
                <div className="app-form__pers-data-input-container">
                    <p className="app-form__pers-data-input-name">Фамилия *</p>
                    <input
                    type="text"
                    name="second-name"
                    className={`app-form__pers-data-input ${(secondNameDirty && secondNameError) ? 'app-form__pers-data-input_type_error' : ''}`}
                    placeholder="Фамилия"
                    required
                    value={secondName}
                    onChange={handleSecondNameChange}
                    onBlur={blurHandler}
                    autoComplete="off"
                    />
                    { (secondNameDirty && secondNameError) && <span id="pers-data-input-error" className="app-form__pers-data-input-error">{secondNameError}</span> }
                </div>
                <div className="app-form__pers-data-input-container">
                    <p className="app-form__pers-data-input-name">Электронная почта *</p>
                    <input
                    type="email"
                    name="email"
                    className={`app-form__pers-data-input ${(emailDirty && emailError) ? 'app-form__pers-data-input_type_error' : ''}`}
                    placeholder="Электронная почта"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={blurHandler}
                    autoComplete="off"
                    />
                    { (emailDirty && emailError) && <span id="pers-data-input-error" className="app-form__pers-data-input-error">{emailError}</span> }
                </div>
                <button type="button" className="app-form__pers-data-cv-import-button" />
            </div>
        </section>

        <section className="app-form__gender">
          <h2 className="app-form__gender-title">Пол</h2>
          <div className="app-form__gender-container">
            {genders.map((gender) => (
              <label key={gender} className="app-form__gender-radio-container">
                <input
                type="radio"
                className="app-form__gender-radio"
                checked={checkGender === gender}
                onChange={() => setCheckGender(gender)}
                />
                <p className="app-form__gender-radio-title">{gender}</p>
              </label>
            ))}
          </div>
        </section>

        <section className="app-form__github">
          <h2 className="app-form__github-title">Github</h2>
          <div className="app-form__github-container">
              <div className="app-form__github-input-container">
                  <p className="app-form__github-input-name">Вставьте ссылку на Github</p>
                  <input
                  type="url"
                  name="github-url"
                  className={`app-form__github-input ${(urlDirty && urlError) ? 'app-form__github-input_type_error' : ''}`}
                  placeholder="Вставьте ссылку на Github"
                  value={url}
                  onChange={handleUrlChange}
                  autoComplete="off"
                  />
                  { (urlDirty && urlError) && <span id="github-input-error" className="app-form__github-input-error">{urlError}</span> }
              </div>
          </div>
        </section>

        <section className="app-form__checkbox-container">
            <input className="app-form__checkbox" type="checkbox" checked={checkbox} onChange={handleCheckboxChange} />
            <p className="app-form__checkbox-title">* Я согласен с <span className="app-form__checkbox-span"><button type="reset" className="app-form__checkbox-button" onClick={props.onPoliticModalOpen}>политикой конфиденциальности</button></span></p>
        </section>

        <button type="submit" className={`app-form__submit-button ${formValid ? 'app-form__submit-button' : 'app-form__submit-button_type_disabled'}`} disabled={!formValid}>Отправить</button>
    </form>
  );
}

export default ApplicationForm;
