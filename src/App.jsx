import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import { motion } from "framer-motion";
function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="App">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="btn main-btn"
        onClick={() => setOpenModal(true)}
      >
        Open Modal
      </motion.button>
      <Modal openModal={openModal} closeModal={() => setOpenModal(false)} />
    </main>
  );
}

export default App;
