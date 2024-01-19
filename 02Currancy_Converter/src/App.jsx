import { useState, useEffect } from "react";
import useCurrency from "./Hook/useCurrancy";
import { InputBox , Footer,Header } from "./Componants/";
import "./App.css";
function App() {
  let [from, setFrom] = useState("usd");
  let [to, setTo] = useState("inr");
  let [amount, setAmount] = useState(0);
  let [convertedAmount, setConvertAmount] = useState(0);

  let CurrancyInfo = useCurrency(from);

  const currencyOption = Object.keys(CurrancyInfo);
  function convertCurrency() {
       
    setConvertAmount((amount * CurrancyInfo[to]).toFixed(2));
  }

   const  swap =  () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount);
    setConvertAmount(amount)
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('https://shorturl.at/boMV6')` }}
      // style={{backgroundImage: `url('https://shorturl.at/mJS15')`}}
    >
      <Header/>
      <div className="w-full max-w-md border rounded-lg p-5 backdrop-blur-sm ">
        <h1 className="text-opacity-0 text-center mb-4 -mt-4 text-3xl font-medium select-none">
          Currency Converter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convertCurrency();
          }}
        >
          <div className="w-full -mb-1.5">
            <InputBox
              lable="From"
              amount={amount}
              onAmountChange={(amntChanged) => setAmount(amntChanged)}
              currency={from}
              onCurrencyChange={(currencyChanged) => setFrom(currencyChanged)}
              currencyOptions={currencyOption}
            />
          </div>
          <div>
            <button
              className="relative left-1/2 -translate-x-1/2  border-2 border-white rounded-md bg-blue-500 text-white px-2 py-0.5"
              onClick={swap}
              type="button"
            >
              Swap
            </button>
          </div>

          <div className="w-full -mt-1.5">
            <InputBox
              lable="To"
              amountDisabled={true}
              amount={convertedAmount}
              currency={to}
              currencyOptions={currencyOption}
              onCurrencyChange={(currencyChanged) => setTo(currencyChanged)}
            />
          </div>
          <button
            className="relative -translate-x-1/2 mt-3 min-w-32 border border-gray-300 rounded-lg p-1.5 bg-blue-700 left-1/2"
            type="submit"
          >
            Convert "
            {from.toLocaleUpperCase() + " to " + to.toLocaleUpperCase()}"
          </button>
        </form>
      </div>
      <Footer/>
    </div>


  );
}

export default App;
