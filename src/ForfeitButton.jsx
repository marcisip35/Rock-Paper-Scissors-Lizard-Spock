function ForfeitButton({ setModal, toggleModal }) {
  return (
    <button
      onClick={toggleModal}
      className="bg-black p-1 rounded-xl textl text-red-500"
      id="forfeit-button"
    >
      Forfeit
    </button>
  );
}

export default ForfeitButton;
