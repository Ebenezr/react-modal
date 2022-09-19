import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="App">
      <button className="btn main-btn" onClick={() => setOpenModal(true)}>
        Open
      </button>
      <Modal openModal={openModal} closeModal={() => setOpenModal(false)} />
    </main>
  );
}

export default App;
