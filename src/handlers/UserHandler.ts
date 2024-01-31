import { Elysia } from 'elysia';
import { PrismaClient } from '@prisma/client'
import axios from 'axios'

axios.defaults.headers.common['Accept-Encoding'] = 'gzip';


const prisma = new PrismaClient()

export async function createUser( data: {firstName: string, lastName: string, email: string, phone: string, password: string, business_type: string, industry_type: string, business_name: string, revenue: string}) {
    try {
        const response = await axios.post(Bun.env.AUTH0_BEARER_TOKEN_URL, new URLSearchParams({
            client_id: Bun.env.AUTH0_CLIENT_ID,
            client_secret: Bun.env.AUTH0_CLIENT_SECRET,
            audience: Bun.env.AUTH0_AUDIENCE,
            grant_type: 'client_credentials'
        }), {
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
        console.log(response.data.access_token);
        const bearer_token = response.data.access_token;
        try {
            const response2 = await axios.post(Bun.env.AUTH0_USERS_URL, {
                email: data.email,
                password: data.password,
                connection: "Username-Password-Authentication",
                    }, {
                        headers: {
                            Authorization: `Bearer ${bearer_token}`,
                        }
                    });
                    console.log(response2.data);
                    console.log('user_id:', response2.data.user_id);
                    try {
                        const user = await prisma.appuser.create({
                            data: {
                                user_id_token: response2.data.user_id,
                                first_name: data.firstName,
                                last_name: data.lastName,
                                email: data.email,
                                password: data.password,
                                phone: data.phone,
                                business_type: data.business_type,
                                industry_type: data.industry_type,
                                business_name: data.business_name,
                                revenue: data.revenue,
                            }
                        });
                    } catch (error: any) {
                        console.log('Error Adding User to Database:', error.message);
                        console.log('Error Adding User to Database:', error.response && error.response.data);
                        return error;
                    }
                    return JSON.stringify(response2.data);
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
    };
    
