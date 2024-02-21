import { Elysia } from 'elysia';
import { appuser } from '../../db/schema';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from '../../db/schema';


const sql = neon(Bun.env.DATABASE_URL);
const db = drizzle(sql, {
    schema,
});

export async function createUser( data: {firstName: string, lastName: string, email: string, phone: string, password: string, business_type: string, industry_type: string, business_name: string, revenue: string} ) {
    try {
        const response = await fetch(Bun.env.AUTH0_BEARER_TOKEN_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: new URLSearchParams({
                client_id: Bun.env.AUTH0_CLIENT_ID,
                client_secret: Bun.env.AUTH0_CLIENT_SECRET,
                audience: Bun.env.AUTH0_AUDIENCE,
                grant_type: 'client_credentials'
            })
            });

            const responseData = await response.json();
            console.log(responseData.access_token);
            const bearer_token = responseData.access_token;

            try {
                const response2 = await fetch(Bun.env.AUTH0_USERS_URL, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        Authorization: `Bearer ${bearer_token}`,
                    },
                    body: JSON.stringify({
                        email: data.email,
                        password: data.password,
                        connection: "Username-Password-Authentication",
                    })
                });

                const responseData2 = await response2.json();
                console.log(responseData2);
                console.log('user_id:', responseData2.user_id);
                const user_id = responseData2.user_id;
                
                try {
                    await db.insert(appuser).values({ 
                        user_id_token: user_id, 
                        first_name: data.firstName, 
                        last_name: data.lastName, 
                        email: data.email, 
                        password: data.password, 
                        phone: data.phone, 
                        business_type: data.business_type, 
                        industry_type: data.industry_type, 
                        business_name: data.business_name, 
                        revenue: data.revenue});

                        console.log('User Added to Database');
                }
                catch (error: any) {
                    console.log('Error Adding User to Database:', error.message);
                    console.log('Error Adding User to Database:', error.response && error.response.data);
                    return error;
                }
                
            }
            catch (error: any) {
                console.log('Error Creating User:', error.message);
                console.log('Error Creating User:', error.response && error.response.data);
                return error;
            }
        
    }
    catch (error: any) {
        console.log('Error Getting Bearer Token:', error.message);
        console.log('Error Getting Bearer Token:', error.response && error.response.data);
        return error;
    }
}

export async function loginUser(){
    return Response.redirect(Bun.env.AUTH0_LOGIN_URL);
}














