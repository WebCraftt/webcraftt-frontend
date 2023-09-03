// pages/api/orders.js
import { createOrder, captureOrder } from "../../src/utils/paypul";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { cart } = req.body;
      const { jsonResponse, httpStatusCode } = await createOrder(cart);
      res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
      console.error("Failed to create order:", error);
      res.status(500).json({ error: "Failed to create order." });
    }
  } else if (req.method === "POST" && req.query.orderID) {
    try {
      const { orderID } = req.query;
      const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
      res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
      console.error("Failed to capture order:", error);
      res.status(500).json({ error: "Failed to capture order." });
    }
  } else {
    res.status(405).end();
  }
}
