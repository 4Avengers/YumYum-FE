const AuthLabel = ({ text, type, placeholder = "", register }) => {
  return (
    <label className="grid grid-cols-[1fr_2fr] items-center  ">
      <span className="Cap1">{text}</span>
      <input
        className="Cap1 border-b py-[0.6rem] outline-none placeholder:text-primary-400 focus:border-primary-500"
        type={type}
        placeholder={placeholder}
        {...register}
      />
    </label>
  );
};

export default AuthLabel;
