import Navbar from './components/Navbar'
import SideCard from './components/SideCard'
import Card from './components/Card'
import cardsData from './Cards.json'

const App = () => {
  return (
    <>
      <Navbar />
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