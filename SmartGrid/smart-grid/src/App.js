import logo from './logo.svg';
import NavigationBar from './NavigationBar';
import Home from './components/Home';
function App() {
  const title = "Smart Grid";
  return (
    <div className="App">
      {/* <h1>{title}</h1> */}
      <NavigationBar></NavigationBar>
      <div className="App Content">
      <Home></Home>
      </div>
    </div>
  );
}

export default App;
