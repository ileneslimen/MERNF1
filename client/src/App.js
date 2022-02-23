import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddEdit from "./Components/AddEdit";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import ContactList from "./Components/ContactList";
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/list" element={<ContactList></ContactList>}></Route>
        <Route path="/add" element={<AddEdit></AddEdit>}></Route>
        <Route path="/edit/:id" element={<AddEdit></AddEdit>}></Route>
      </Routes>
    </div>
  );
}

export default App;
