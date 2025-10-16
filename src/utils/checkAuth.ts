import React from 'react'
import axios from 'axios'

const checkAuth = async () => {
 
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/auth/me`, {
withCredentials: true,
    })

return res.data.authenticated

  } catch {
    return false
  }

}

export default checkAuth

