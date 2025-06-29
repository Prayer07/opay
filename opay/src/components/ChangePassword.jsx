import React, { useState } from 'react'

export default function ChangePassword() {
  // const [currentPassword, setCurrentPassword] = useState("")
  // const [newPassword, setNewPassword] = useState("")
  // const [confirmPassword, setConfirmPassword] = useState("")
  // const [loading, setLoading] = useState(false)

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   setLoading(true)

  //   const token = sessionStorage.getItem("token")
  //   if (!token) return alert("You must be logged in")

  //   try {
  //     const res = await fetch("http://localhost:3000/change-password", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({ currentPassword, newPassword, confirmPassword }),
  //     });

  //     const data = await res.json()

  //     if (res.ok) {
  //       alert(data.message)
  //       setCurrentPassword("")
  //       setNewPassword("")
  //       setConfirmPassword("")
  //     } else {
  //       alert(data.message || "Failed to change password")
  //     }

  //   } catch (err) {
  //     alert("Error changing password")
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  return (
    <>
    <h1>d</h1>
    </>
  )
}

    // <form onSubmit={handleSubmit}>
    //   <h2>Change Password</h2>
    //   <input
    //     type="password"
    //     placeholder="Current Password"
    //     value={currentPassword}
    //     onChange={(e) => setCurrentPassword(e.target.value)}
    //     required
    //   />
    //   <input
    //     type="password"
    //     placeholder="New Password"
    //     value={newPassword}
    //     onChange={(e) => setNewPassword(e.target.value)}
    //     required
    //   />
    //   <input
    //     type="password"
    //     placeholder="Confirm New Password"
    //     value={confirmPassword}
    //     onChange={(e) => setConfirmPassword(e.target.value)}
    //     required
    //   />
    //   <button type="submit" disabled={loading}>
    //     {loading ? "Changing..." : "Change Password"}
    //   </button>
    // </form>
