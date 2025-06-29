import React from 'react'

export default function Airtime() {

const handlePayment = async () => {
  const res = await fetch("http://localhost:3000/vtpass.com/mtn-airtime", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: user.email,
      amount: 100, // ₦100
    }),
  });

  const data = await res.json();

  if (data.status) {
    window.location.href = data.data.authorization_url;
  }
};


  return (
    <>
    <form onSubmit={handlePayment}>
        <input type="email" placeholder='email' />
        <input type="password" placeholder='password' />
    </form>
    </>
  )
}
