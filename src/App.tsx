import Navbar from './components/Navbar'
import SideCard from './components/SideCard'
import Card from './components/Card'
import Modal from './components/GigModal'
import cardsData from './Cards.json'
import { useState } from'react';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState('');

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const filteredCards = cardsData.filter((card) =>
    card.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <h1 className="text-2xl text-center mx-auto mt-16">All Bounties</h1>
      <h2 className="text-center text-lg mt-4 mb-4 text-accent">Explore gigs and bounties</h2>
      <div className="container mt-4">
        <div className="grid grid-cols-2 gap-0">
          <SideCard setFilter={(filter) => setFilter(filter)} />
          <div className="flex flex-col gap-4 flex-1">
            {filteredCards.map((card, index) => (
              <Card key={index} title={card.title} description={card.description} image={card.image} onClick={handleCardClick} />
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
      <h2 className="text-lg font-light mt-2 text-neutral-400">Organization Offering Gig</h2>
      <h1 className="text-3xl font-bold mb-4">Gig/Bounty Title</h1>
      <div className="flex justify-start mb-4">
        <div className="badge badge-accent rounded-md mx-1">Open Application</div>
        <div className="badge badge-neutral rounded-sm mx-1">Bid/Reward$</div>
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