// import React from 'react'
// import {PaystackButton} from "react-paystack"

// import dotenv from "dotenv"
// dotenv.config()



// function PaystackPayment({amount, email, phone, onSuccess}) {

//   const publicKey = (process.env.PAYSTACK_TEST_PUBLIC_KEY)
//   const amountInKobo = amount * 100

//   const componentProps = {
//     email,
//     amount: amountInKobo,
//     metadata: {
//       phone,
//     },
//     publicKey, 
//     text: "Pay now",
//     onSuccess: onSuccess,
//     onClose: () => alert("Transaction was not completed")
//   };

//   return <PaystackButton {...componentProps} />
// }

// export default PaystackPayment