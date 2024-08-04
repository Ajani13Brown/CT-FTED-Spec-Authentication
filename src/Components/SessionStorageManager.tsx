import axios from 'axios'
import React from 'react'

export const getUser = async () => {
    const token = sessionStorage.getItem('JWT')
    const response = await axios.get('https://dummyjson.com/auth/me', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data
}

export const savetoken = (token:string) => {
  sessionStorage.setItem('JWT', token)
}


export const getToken = (): string | null => {
    return sessionStorage.getItem('JWT');
  };

export const logout = sessionStorage.clear()



const SessionStorageManager = () => {

  return (
    <div>SessionStorageManager</div>
  )
}

export default SessionStorageManager