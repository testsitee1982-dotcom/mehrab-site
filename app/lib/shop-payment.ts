/** The card/IBAN were supplied by the shop owner; verify registered Enamad holder before launch. */
export const paymentInfo = {
  bank: "بانک ملی ایران",
  cardNumber: "6037997595983413",
  iban: "IR730170000000328800158005",
  recipientName: (process.env.PAYMENT_RECIPIENT_NAME || "").trim(),
};
export const paymentReady = paymentInfo.recipientName.length >= 3;
