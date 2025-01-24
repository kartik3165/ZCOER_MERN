
// eslint-disable-next-line no-unused-vars
import React , {useState,useEffect} from 'react'

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3165/api/data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <p>This is react + express</p>
      {data ? (
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      ) : (<p>loading...</p>)}
    </div>
  );
};

export default App;
