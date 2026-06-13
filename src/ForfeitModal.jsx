function ForfeitModal({ setScreen, modal, toggleModal }) {
  return (
    <div className={`overlay ${modal === false ? "hidden" : ""}`}>
      <div className="modal-content">
        <p>Are you sure you want to quit?</p>
        <div className="flex justify-center gap-30">
          <button onClick={() => setScreen("menu")}>Yes</button>
          <button onClick={toggleModal}>No</button>
        </div>
      </div>
    </div>
  );
}

export default ForfeitModal;
