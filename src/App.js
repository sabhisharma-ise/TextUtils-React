import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="AboutUs" />

      <div className="container my-3">
        <TextForm heading="Enter the Text for analysis" />
      </div>

      {/* <About /> */}
    </>
  );
}

export default App;
