import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  function agirHesaplama(num: number) {
    console.log("AĞIR HESAPLAMA ÇALIŞTI");

    let sonuc = 0;

    for (let i = 0; i < 100000000; i++) {
      sonuc += i;
    }

    return sonuc + num;
  }

  const sonuc = agirHesaplama(number);

  return (
    <div>
      <h2>Sonuç: {sonuc}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Number: {number}
      </button>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default App;