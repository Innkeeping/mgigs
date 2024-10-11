import Navbar from './components/Navbar'
import SideCard from './components/SideCard'
import Card from './components/Card'
import Modal from './components/Modal'
import cardsData from './Cards.json'
import { useState } from'react';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <h1 className="text-2xl text-center mx-auto mt-16">All Bounties</h1>
      <h2 className="text-center text-lg mt-4 mb-4 text-accent">Explore gigs and bounties</h2>
      <div className="container mx-auto p-4 mt-4 overflow-y-auto min-h-screen">
        <div className="grid grid-cols-3 gap-4">
          <SideCard />
          <div className="flex flex-col gap-4 flex-1">
            {cardsData.map((card, index) => (
              <Card key={index} title={card.title} description={card.description} image={card.image} onClick={handleCardClick} />
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
      <h2 className="text-lg font-light mt-2 text-neutral-400">Organization Offering Gig</h2>
      <h1 className="text-3xl font-bold mb-4">Modal Title</h1>
      <div className="flex justify-start mb-4">
        <div className="badge badge-neutral rounded-md mx-1">Badge 1</div>
        <div className="badge badge-accent rounded-md mx-1">Badge 2</div>
      </div>
      <div className="callout callout-info bg-primary text-primary-content p-4 mb-4">
        <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </Modal>
    </>
  );
};

export default App;