// import PaystackPayment from "./PaystackPayment";


// export default function AddRealMoney() {

//     const user = {email: "user@example.com", phone: "08012345678"}
//     const amount = 2000

//     const handlePaymentSuccess = (reference) => {
//         console.log("Payment successful:", reference)

//         fetch("http://localhost:3000/verify-payment", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${sessionStorage.getItem("token")}`
//             },
//             body: JSON.stringify({reference: reference.reference}),
//         })
//         .then(res => res.json())
//         .then(data => alert(data.message || "Balance updated"))
//         .catch(err => alert("Verification failed"))
//     }

//   return <PaystackPayment amount={amount} email={user.email} phone={user.phone} onSuccess={handlePaymentSuccess} />
// }
