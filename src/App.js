import "./App.css";
import { Routes, Route } from "react-router";
import BookList from "./Components/BookList";
import BookDatails from "./Components/BookDatails";
import Navbar from "./Components/Navbar";
import Favorits from "./Components/Favorits";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />}></Route>

        <Route path="/favorites" element={<Favorits />}></Route>
        <Route path="/books/:id" element={<BookDatails />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
