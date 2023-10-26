export const OverviewButton: React.FC<{
  button: string;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}> = ({ button, active, setActive }) => {
  return (
    <h1
      className={`text-2xl font-bold mt-6 hover:text-gray-300 ${
        active && "text-gray-300"
      }`}
    >
      <button onClick={() => setActive(button)}>{button}</button>
    </h1>
  );
};
