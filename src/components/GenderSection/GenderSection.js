import './GenderSection.css';

function GenderSection() {
  return (
    <div className="gender">
        <h2 className="gender__title">Пол</h2>
        <div className="gender__container">
            <div className="gender__radio-container">
                <input type="radio" name="gender" value="male" className="gender__radio"/>
                <p className="gender__radio-title">Мужской</p>
            </div>
            <div className="gender__radio-container">
                <input type="radio" name="gender" value="female" className="gender__radio"/>
                <p className="gender__radio-title">Женский</p>
            </div>
        </div>
    </div>
  );
}

export default GenderSection;
