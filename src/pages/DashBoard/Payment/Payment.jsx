import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Checkout/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [cart] = useCart();

  const price = 100;
  // console.log(price, cart);
  return (
    <div className="my-container">
      <SectionTitle heading="payment"></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
