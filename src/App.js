import "./App.scss";
import Contacts from "./components/Contacts/Contacts";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="app">
      <h1 className="app__name">Contact us</h1>
      <Contacts />
      <Form />
    </div>
  );
}

export default App;
