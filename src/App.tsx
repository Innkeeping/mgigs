import Navbar from './components/Navbar'
import SideCard from './components/SideCard'
import Card from './components/Card'
import cardsData from './Cards.json'

const App = () => {
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
              <Card key={index} title={card.title} description={card.description} image={card.image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;