interface TextareaInputProps {
  label?: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  type?: React.HTMLInputTypeAttribute;
  className: string;
}

export const TextareaInput = ({
  label,
  placeholder,
  value,
  onChange,
  className,
}: TextareaInputProps) => {
  return (
    <div className="flex flex-col">
      {label && <label>{label}</label>}
      <textarea
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
