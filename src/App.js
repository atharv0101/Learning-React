import "./App.css";
// import Dictation from "./components/Dictation";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils"></Navbar>
      <div className="container my-3">
        <TextForm heading="Enter Your Text Here..."></TextForm>
      </div>
    </>
  );
}

export default App;
