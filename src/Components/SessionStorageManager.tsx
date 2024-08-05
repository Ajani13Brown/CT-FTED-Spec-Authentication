import axios from 'axios';
import React from 'react';

export const getUser = async (): Promise<any> => {
    const token = sessionStorage.getItem('JWT');
    if (!token) {
        throw new Error('No JWT token found in sessionStorage');
    }
    try {
        const response = await axios.get('https://dummyjson.com/auth/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};


export const savetoken = (token: string): void => {
    sessionStorage.setItem('JWT', token);
};

export const getToken = (): string | null => {
    return sessionStorage.getItem('JWT');
};


export const logout = (): void => {
    sessionStorage.clear();
};


const SessionStorageManager = () => {
    return (
        <div>SessionStorageManager</div>
    );
};

export default SessionStorageManager;
