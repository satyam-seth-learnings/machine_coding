export default function Profile({ data, setData, err }) {
  const { name, age, email } = data;

  function onChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={onChange}
        />
        {err.name && <span>{err.name}</span>}
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={onChange}
        />
        {err.age && <span>{err.age}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={onChange}
        />
        {err.email && <span>{err.email}</span>}
      </div>
    </div>
  );
}
