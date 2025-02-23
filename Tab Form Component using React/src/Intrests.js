export default function Intrests({ data, setData, err }) {
  const { intrests } = data;

  function onChange(e) {
    setData((prevState) => ({
      ...prevState,
      intrests: e.target.checked
        ? [...prevState.intrests, e.target.name]
        : prevState.intrests.filter((intrest) => intrest !== e.target.name),
    }));
  }

  return (
    <div>
      <div>
        <label htmlFor="coding">Coding:</label>
        <input
          type="checkbox"
          name="coding"
          id="coding"
          checked={intrests.includes("coding")}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="music">Music:</label>
        <input
          type="checkbox"
          name="music"
          id="music"
          checked={intrests.includes("music")}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="javascript">Javascript:</label>
        <input
          type="checkbox"
          name="javascript"
          id="javascript"
          checked={intrests.includes("javascript")}
          onChange={onChange}
        />
      </div>
      {err.intrests && <span>{err.intrests}</span>}
    </div>
  );
}
