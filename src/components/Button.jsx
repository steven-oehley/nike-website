const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`font-lg flex items-center justify-center gap-2 rounded-full border ${backgroundColor ? backgroundColor : "bg-coral-red"} ${borderColor ? borderColor : "border-coral-red"} px-7 py-4 font-montserrat ${textColor ? textColor : "text-white"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="button icon"
          className="ml-2 h-5 w-5 rounded-full"
        />
      )}
    </button>
  );
};
export default Button;
