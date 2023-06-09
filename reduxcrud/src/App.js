import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Userlisting from "./Components/Userlisting";
import Adduser from "./Components/Adduser";
import Updateuser from "./Components/Updateuser";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Store from "./Redux/Store"

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <Link to={"/"}>Home</Link>
          <Link to={"/user"}>User</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Userlisting />} />
          <Route path="/user/add" element={<Adduser />} />
          <Route  path="/user/edit/:code" element={<Updateuser />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer className="toast-Position" position="bottom-right">

      </ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
