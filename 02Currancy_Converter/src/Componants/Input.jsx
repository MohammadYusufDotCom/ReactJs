import React, { useId } from "react";

function Input({
  className,
  amount,
  amountDisabled = false,
  onAmountChange,
  currency = "usd",
  currencyOptions = [],
  onCurrencyChange,
  lable,
}) {
  const amountid = useId();

  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex  `}>
        <div className={`w-1/2 ${className}`}>
          <label htmlFor={amountid} className="text-black mb-1 mr-1 block ">
            {lable}
          </label>
          <input
            id={amountid}
            className="outline-none w-2/3 bg-transparent py-1.5 text-black font-medium"
            type="number"
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange((e.target.value))
            }
            placeholder="Amount"
            disabled={amountDisabled}
          />
        </div>
        <div className="w-1/2 flex justify-end text-end flex-wrap text-black font-medium">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-2 cursor-pointer bg-transparent bg-zinc-300 outline-none border-none"
            value={currency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }>
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency} className="text-black ">
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
export default Input;
