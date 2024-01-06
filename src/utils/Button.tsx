const Button = ({ url, buttonValue }: { url: string; buttonValue: string }) => {
  return (
    <button
      className="text-[#fff] px-2 py-1 rounded bg-[#EF6D58] font-small w-40"
      id="button"
    >
      <a href={url}>
        {buttonValue} &nbsp;
        <i
          className="fa-solid fa-arrow-up-long rotate-[38deg] text-[18px]"
          style={{ color: "#fff" }}
        ></i>
      </a>
    </button>
  );
};

export default Button;
