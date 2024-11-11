function LibraryTab({ headerText, text, buttonText, extraClass }) {
  return (
    <div
      className={`p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 ${extraClass}`}
    >
      <h1>{headerText}</h1>
      <p className="font-light">{text}</p>
      <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
        {buttonText}
      </button>
    </div>
  );
}

export default LibraryTab;
