import { services } from "../../db/schema";
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from '../../db/schema';


const sql = neon(Bun.env.DATABASE_URL);
const db = drizzle(sql, {
    schema,
});

//Retrieve list of all services
export async function getServices() {
    try {
        const allServices = await db.select().from(services);
        return new Response(JSON.stringify(allServices), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
    catch (error) {
        console.log('Error getting services:', error);
    }
};

//Retrieve a service based on its ID
export async function getServiceById(id: number) {
    try {
        const service = await db.select().from(services).where(eq(services.service_id, id));
        return service
      ? new Response(JSON.stringify(service), {
          headers: { 'Content-Type': 'application/json' },
        })
      : new Response("Service not found", { status: 404 });
    }
    catch (error) {
        console.log('Error getting service by ID:', error);
    }
};

//Retrieves list of categories from stored services
export async function getCategories() {
    try {
        const allCategories = await db.selectDistinct({ category: services.category }).from(services);
        return new Response(JSON.stringify(allCategories), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
    catch (error) {
        console.log('Error getting categories:', error);
    }
}

//Retrieves list of services from a specific category
export async function getServicesByCategory(category: string) {
    try {
        const servicesByCategory = await db.select().from(services).where(eq(services.category, category));
        return new Response(JSON.stringify(servicesByCategory), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
    catch (error) {
        console.log('Error getting services by category:', error);
    }
}

export async function createService( data: { service_name: string, service_description: string, price: number, category: string }) {
    try {
        const createdService = await db.insert(services).values({ 
            service_name: data.service_name, 
            service_description: data.service_description, 
            price: data.price.toFixed(2), 
            category: data.category });

            return new Response(JSON.stringify(createdService), {
                headers: { 'Content-Type': 'application/json' },
                status: 201,
              })
        }
        catch (error) {
            console.log('Error creating service:', error);
        }
    };

export async function updateService(id: number, data: { service_name: string, service_description: string, price: number, category: string }) {
    try {
        const updatedService = await db.update(services).set({
            service_name: data.service_name, 
            service_description: data.service_description, 
            price: data.price.toFixed(2), 
            category: data.category 
        }).where(eq(services.service_id, id));

        return new Response(JSON.stringify(updatedService), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error processing request:", error);
        return new Response(JSON.stringify({ error: "Error processing request"}), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function deleteService(id: number) {
    try {
        const deletedService = await db.delete(services).where(eq(services.service_id, id));
        return new Response(JSON.stringify({ message: "Service deleted successfully" }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
    catch (error) {
        console.log('Error deleting service:', error);
    }
}


