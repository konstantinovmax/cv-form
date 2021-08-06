import React from 'react';
import './GenderSection.css';

function GenderSection(props) {
  const [checked, setChecked] = React.useState(null);

  const items = ['Мужской', 'Женский'];

  props.handleGenderChange(checked);

  return (
    <div className="gender">
        <h2 className="gender__title">Пол</h2>
        <div className="gender__container">
          {items.map((item) => (
            <label key={item} className="gender__radio-container">
              <input
              type="radio"
              className="gender__radio"
              checked={checked === item}
              onChange={() => setChecked(item)}
              />
              <p className="gender__radio-title">{item}</p>
            </label>
          ))}
            {/* <div className="gender__radio-container">
                <input type="radio" name="gender" value="male" className="gender__radio"/>
                <p className="gender__radio-title">Мужской</p>
            </div>
            <div className="gender__radio-container">
                <input type="radio" name="gender" value="female" className="gender__radio"/>
                <p className="gender__radio-title">Женский</p>
            </div> */}
        </div>
    </div>
  );
}

export default GenderSection;
