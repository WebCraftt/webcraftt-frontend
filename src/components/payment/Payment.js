import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Payment = ({ service }) => {
  const priceWithSymbol = service?.price;
  const priceWithoutSymbol = priceWithSymbol.replace("$", "");
  const numericPrice = parseInt(priceWithoutSymbol);

  const paypulClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  console.log(paypulClientId, "paypulClientId+++++");

  const [orderID, setOrderID] = useState(null);

  const createOrder = (data, actions) => {
    const orderData = {
      purchase_units: [
        {
          value: numericPrice,
          currency_code: "USD",
          description: service?.name,
        },
      ],
    };

    return fetch("http://localhost:8000/api/v1/payment/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((order) => {
        setOrderID(order?.data?.jsonResponse?.id);
        return order?.data?.jsonResponse?.id;
      });
  };

  const onApprove = async (data, actions) => {
    return actions.order.capture().then((details) => {
      return fetch(
        `http://localhost:8000/api/v1/payment/create/${orderID}/capture`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderID: orderID,
          }),
        }
      )
        .then((response) => response.json())
        .then((dataRes) => {
          console.log(dataRes);
        });
    });
  };

  return (
    <PayPalScriptProvider
      options={{
        clientId: "AUDJmOZet_TVRFPPnFsKEjXSqOxPmZPj06HQ82JtzjwtdOIxtxQ4Qz18ukd4A0Eyw1NU8l33UA8tGGGi",
        currency: "USD",
      }}
    >
      <div>
        <PayPalButtons
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default Payment;
