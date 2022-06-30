interface PropsInput {
  type: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  classess?: string;
  handleChange: any;
  isError?: boolean;
  errorMsg?: string;
}

const CInput = ({
  type,
  name,
  placeholder,
  disabled,
  classess,
  handleChange,
  isError,
  errorMsg,
}: PropsInput) => {
  const test = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (name) {
      handleChange((prevState: any) => {
        console.log(prevState);
        return { ...prevState, [name]: e.target.value };
      });
    } else {
      handleChange(e.target.value);
    }
  };

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={classess}
        onInput={test}
      />
      {/* {errorMsg} */}
      {isError && errorMsg?.length && <span>{errorMsg}</span>}
    </>
  );
};

export default CInput;
