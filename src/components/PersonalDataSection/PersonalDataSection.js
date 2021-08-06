import React from 'react';
import './PersonalDataSection.css';

function PersonalDataSection(props) {
    const [firstName, setFirstName] = React.useState('');
    const [secondName, setSecondName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [firstNameDirty, setFirstNameDirty] = React.useState(false);
    const [secondNameDirty, setSecondNameDirty] = React.useState(false);
    const [emailDirty, setEmailDirty] = React.useState(false);
    const [firstNameError, setFirstNameError] = React.useState('Поле имя не может быть пустым');
    const [secondNameError, setSecondNameError] = React.useState('Поле фамилия не может быть пустым');
    const [emailError, setEmailError] = React.useState('Поле email не может быть пустым');
    

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

    props.handleValidForm(firstNameError, secondNameError, emailError);

    return (
        <div className="pers-data">
            <h2 className="pers-data__title">Личные данные</h2>
            <div className="pers-data__container">
                <div className="pers-data__input-container">
                    <p className="pers-data__input-name">Имя *</p>
                    <input
                    type="text"
                    name="first-name"
                    className={`pers-data__input ${(firstNameDirty && firstNameError) ? 'pers-data__input_type_error' : ''}`}
                    placeholder="Имя"
                    required
                    value={firstName}
                    onChange={handleFirstNameChange}
                    onBlur={blurHandler}
                    />
                    { (firstNameDirty && firstNameError) && <span id="pers-data-input-error" className="pers-data__input-error">{firstNameError}</span> }
                </div>
                <div className="pers-data__input-container">
                    <p className="pers-data__input-name">Фамилия *</p>
                    <input
                    type="text"
                    name="second-name"
                    className={`pers-data__input ${(secondNameDirty && secondNameError) ? 'pers-data__input_type_error' : ''}`}
                    placeholder="Фамилия"
                    required
                    value={secondName}
                    onChange={handleSecondNameChange}
                    onBlur={blurHandler}
                    />
                    { (secondNameDirty && secondNameError) && <span id="pers-data-input-error" className="pers-data__input-error">{secondNameError}</span> }
                </div>
                <div className="pers-data__input-container">
                    <p className="pers-data__input-name">Электронная почта *</p>
                    <input
                    type="email"
                    name="email"
                    className={`pers-data__input ${(emailDirty && emailError) ? 'pers-data__input_type_error' : ''}`}
                    placeholder="Электронная почта"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={blurHandler}
                    />
                    { (emailDirty && emailError) && <span id="pers-data-input-error" className="pers-data__input-error">{emailError}</span> }
                </div>
                <button type="button" className="pers-data__cv-import-button" />
            </div>
        </div>
  );
}

export default PersonalDataSection;
