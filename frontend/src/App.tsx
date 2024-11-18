import Footer from "./components/Footer";
import Thing from "./components/Card.tsx/Card";
import Sticky from "./components/Sticky";

function App() {
  return (
    <>
      <div>
        <Sticky/>
        
        <div className="flex items-center justify-center grid gap-4 mt-10">
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
