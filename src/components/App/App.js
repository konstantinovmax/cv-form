import React from 'react';
import './App.css';
import ApplicationForm from '../ApplicationForm/ApplicationForm';
import SuccessModal from '../SuccessModal/SuccessModal';
import PoliticModal from '../PoliticModal/PoliticModal';

function App() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);
  const [isPoliticModalOpen, setIsPoliticModalOpen] = React.useState(false);

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

  return (
    <div className="app">
      <div className="app__content">
        <ApplicationForm
        onSuccessModalOpen={handleSuccessModalOpen}
        onPoliticModalOpen={handlePoliticModalOpen}
        />
        <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseModals}
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
