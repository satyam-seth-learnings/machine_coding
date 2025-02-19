import { useState, useEffect } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [cache, setCache] = useState({});

  function fetchData() {
    if (cache[query]) {
      setRecipes(cache[query]);
      console.log("serving from cache");
      return;
    }

    fetch(`https://dummyjson.com/recipes/search?q=${query}`)
      .then((response) => {
        response.json().then((data) => {
          console.log("Hit api");
          setCache({ ...cache, [query]: data.recipes });
          setRecipes(data.recipes);
        });
      })
      .catch((e) => {
        console.log("error", e);
      });
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => fetchData(), 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  function onQueryChange(e) {
    setQuery(e.target.value);
  }

  function onFocus() {
    setShowResult(true);
  }

  function onBlur() {
    setShowResult(false);
  }

  return (
    <>
      <h1>Recipe Search</h1>
      <div className="search-box">
        <input
          id="query"
          type="text"
          onChange={onQueryChange}
          onFocus={onFocus}
          onBlur={onBlur}
          vlaue={query}
          placeholder={"Search your reciepe"}
        />
        {recipes && (
          <div
            className={showResult ? "reciepes-list" : "reciepes-list hidden"}
          >
            {recipes.map((recipe) => (
              <span key={recipe.id}>{recipe.name}</span>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
