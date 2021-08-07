import React from 'react';
import './App.css';
import ApplicationForm from '../ApplicationForm/ApplicationForm';
import SuccessModal from '../SuccessModal/SuccessModal';
import PoliticModal from '../PoliticModal/PoliticModal';

function App() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);
  const [isPoliticModalOpen, setIsPoliticModalOpen] = React.useState(false);
  const [userName, setUserName] = React.useState('');

  function handleSuccessModalOpen() {
    setIsSuccessModalOpen(true);
  }

  function handlePoliticModalOpen() {
    setIsPoliticModalOpen(true);
  }

  function handleCloseModals() {
    setIsSuccessModalOpen(false);
    setIsPoliticModalOpen(false);
  }

  function handleCheckUserName(userName) {
    setUserName(userName);
  }

  return (
    <div className="app">
      <div className="app__content">
        <ApplicationForm
        onSuccessModalOpen={handleSuccessModalOpen}
        onPoliticModalOpen={handlePoliticModalOpen}
        handleCheckUserName={handleCheckUserName}
        />
        <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseModals}
        userName={userName}
        />
        <PoliticModal
        isOpen={isPoliticModalOpen}
        onClose={handleCloseModals}
        />
      </div>
    </div>
  );
}

export default App;
