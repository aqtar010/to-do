import "./Styles/App.scss";
import Header from "./Components/Header.component/header.componet";
import Body from "./Components/Body.component/body.component";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100"
        rel="stylesheet"
      />

      <Header/>
      <Body/>

      <div className="light x1"></div>
      <div className="light x2"></div>
      <div className="light x3"></div>
      <div className="light x4"></div>
      <div className="light x5"></div>
      <div className="light x6"></div>
      <div className="light x7"></div>
      <div className="light x8"></div>
      <div className="light x9"></div>
    </div>
  );
}

export default App;
