import "./styles.css";
import { useState } from "react";
import Profile from "./Profile";
import Intrests from "./Intrests";
import Settings from "./Settings";

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [err, setErr] = useState({});
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    intrests: [],
    theme: "dark",
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};

        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }

        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }

        // Note: Use regex check for email validity
        if (!data.email) {
          err.email = "Email is not valid";
        }

        setErr(err);

        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Intrests",
      component: Intrests,
      validate: () => {
        const err = {};

        if (data.intrests.length === 0) {
          err.intrests = "Select at least one intrest";
        }

        setErr(err);

        return err.intrests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => true,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  function onTabClick(index) {
    if (index < activeTab || tabs[activeTab].validate()) {
      setActiveTab(index);
    }
  }

  function onPrevClick() {
    setActiveTab((prev) => prev - 1);
  }

  function onNextClick() {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  }

  function onSubmit() {
    console.log("Data:", data);
  }

  return (
    <div className="App">
      <h1>Tab Form</h1>
      {tabs.map((tab, i) => (
        <button
          key={i}
          disabled={activeTab === i}
          onClick={() => onTabClick(i)}
        >
          {tab.name}
        </button>
      ))}
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} err={err} />
      </div>
      {activeTab > 0 && <button onClick={onPrevClick}>Prev</button>}
      {activeTab < tabs.length - 1 && (
        <button onClick={onNextClick}>Next</button>
      )}
      {activeTab === tabs.length - 1 && (
        <button onClick={onSubmit}>Submit</button>
      )}
    </div>
  );
}
