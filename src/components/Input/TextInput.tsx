type TextInputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: React.HTMLInputTypeAttribute;
};

const TextInput = ({
  label,
  placeholder,
  value,
  onChange,
  type,
}: TextInputProps) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        className="border border-gray-400 rounded-md p-2 mt-1"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
