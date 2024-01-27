import express from 'express';
import { db } from '../database/database';
import * as UserRepository from '../database/userRepository'
import axios from 'axios';
import { useEffect } from 'react';

axios.defaults.headers.common["Accept-Encoding"] = "gzip";

const userRouter = express.Router();

userRouter.post('/create-user', async (req, res) => {
    console.log('Received Request to Create User');
    const { firstName, lastName, email, phone, password, business_type, industry_type, business_name, revenue } = req.body;
    console.log(req.body);

    try {
        const response = await axios.post(process.env.VITE_AUTH0_BEARER_TOKEN_URL, new URLSearchParams({
            client_id: process.env.VITE_AUTH0_CLIENT_ID,
            client_secret: process.env.VITE_AUTH0_CLIENT_SECRET,
            audience: process.env.VITE_AUTH0_AUDIENCE,
            grant_type: 'client_credentials',
        }), {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        });
        console.log(response.data.access_token);

        const bearer_token = response.data.access_token;

        try {
            const response2 = await axios.post(process.env.VITE_AUTH0_USERS_URL, {
                email: email,
                password: password,
                connection: "Username-Password-Authentication",
        }, {
            headers: {
                Authorization: `Bearer ${bearer_token}`
            }
        });
        console.log(response2.data);
        console.log('user_id:', response2.data.user_id);

        try {
            await UserRepository.createUser({
                user_id_token: response2.data.user_id,
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone: phone,
                business_type: business_type,
                industry_type: industry_type,
                business_name: business_name,
                revenue: revenue,
            
        });
        }
        catch (error) {
            console.log('Error Adding User to Database:', error.message);
            console.log('Error Data:', error.response && error.response.data);
            return res.status(500).json({ error: 'Error Adding User to Database' });
        }

        return res.status(200).json(response2.data); 

        }
        catch (error) {
            console.log('Error Creating User:', error.message);
            console.log('Error Data:', error.response && error.response.data);
            return res.status(500).json({ error: 'Error Creating User' });
        }

    }
    catch (error) {
        console.log('Error Getting Bearer Token:', error.message);
        console.log('Error Data:', error.response && error.response.data);
        return res.status(500).json({ error: 'Error Getting Bearer Token' });
    }

});

export default userRouter;