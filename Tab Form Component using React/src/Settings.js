export default function Settings({ data, setData }) {
  const { theme } = data;

  function onChange(e) {
    setData((prevState) => ({ ...prevState, theme: e.target.name }));
  }

  return (
    <div>
      <div>
        <label htmlFor="dark">Dark:</label>
        <input
          type="radio"
          name="dark"
          id="dark"
          checked={theme === "dark"}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="light">Light:</label>
        <input
          type="radio"
          name="light"
          id="light"
          checked={theme === "light"}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
