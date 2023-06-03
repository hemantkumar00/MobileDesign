import { useCreditCardValidator, images } from "react-creditcard-validator";
import { FiLoader } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { useState } from "react";
export default function Payment() {
  const [isDone, setIsDone] = useState(false);
  const [isPayed, setIsPayed] = useState(false);

  function handleClick(e) {
    setIsDone(true);
    setInterval(() => {
      setIsDone(false);
      setIsPayed(true);
    }, 500);
  }

  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
    meta: { erroredInputs },
  } = useCreditCardValidator();

  return (
    <>
      <div className="hello">
        <div>
          <label htmlFor="label card-name">Card Number</label>
          <div className="card-first-line">
            <input
              className="input input-line12"
              id="card-name"
              name="card-name"
              {...getCardNumberProps()}
            />
            <small>
              {erroredInputs.cardNumber && erroredInputs.cardNumber}
            </small>
            <svg className="card-icon" {...getCardImageProps({ images })} />
          </div>
        </div>

        <div>
          <label htmlFor=" label name">Name on card</label>
          <input
            className="input input-line12"
            type="text"
            id="name"
            name="name"
          />
        </div>

        <div className="card-3rdline">
          <div>
            <label htmlFor=" label date">Expiration date</label>
            <input
              className="input input-line3"
              id="date"
              name="date"
              {...getExpiryDateProps()}
            />
            <small>
              {erroredInputs.expiryDate && erroredInputs.expiryDate}
            </small>
          </div>

          <div>
            <label htmlFor=" label cvv">Security code</label>
            <input
              className="input input-line3"
              id="cvv"
              name="cvv"
              {...getCVCProps()}
            />
            <small>{erroredInputs.cvc && erroredInputs.cvc}</small>
          </div>
        </div>

        <button id="card-button" className="input" onClick={handleClick}>
          <AiFillLock /> Pay now
        </button>
      </div>
      {isDone && (
        <div className="payment-success">
          <FiLoader className="payment-success-icon" />
          <h4>Payment is processing...</h4>
          <span className="payemnt-success-span">
            Please wait, do not close this screen
          </span>
        </div>
      )}
      {isPayed && (
        <div className="payment-success">
          <MdDone className="payment-success-icon" />
          <h4>Payment received!</h4>
          <span className="payemnt-success-span">
            Your order is now on the way. Please check you email for the
            receipt.
          </span>
        </div>
      )}
    </>
  );
}
