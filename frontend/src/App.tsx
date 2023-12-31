import Navbar from "./components/ui/Navbar";
import Path from "./routes/Path";

const App = () => {
  return (
    <div className="bg-primary text-secondary h-screen">
      <Navbar/>
      <Path />
    </div>
  );
};

export default App;
