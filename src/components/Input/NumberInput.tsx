type NumberInputProps = {
    label: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    step: string;
  };
  
  const TextInput = ({
    label,
    placeholder,
    value,
    onChange,
    step,
  }: NumberInputProps) => {
    return (
      <div className="flex flex-col">
        <label>{label}</label>
        <input
          className="border border-gray-400 rounded-md p-2 mt-1"
          type='number'
          step={step}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };
  
  export default TextInput;
  