import { useEffect, useState } from "react";
import { DataFetched } from "./interfaces";
import "./App.css";
import { bringCharacters } from "./services/apiCalls";

function App() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [msgError, setMsgError] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(false);

  useEffect(() => {
    const fetchDataRickMorty = async () => {
      //llamamos a la función alojada en services->apiCalls
      const fetched: DataFetched = await bringCharacters();

      if (fetched.success) {
        setFlag(true);
        setCharacters(fetched.data);
      } else {
        setMsgError(fetched.message);
      }
    };

    if (!flag) {
      fetchDataRickMorty();
    }
  }, [characters]);

  return (
    <>
      {characters.length > 0 ? (
        <div>
          {characters.map((person) => {
            return <div key={person.id}>{person.name}</div>;
          })}
        </div>
      ) : (
        <div>{msgError}</div>
      )}
    </>
  );
}

export default App;
