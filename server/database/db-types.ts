import { type ColumnType, type Generated, type Insertable, type Selectable, type Updateable } from "kysely";

export interface appuser {
    id: Generated<number>
    user_id_token: string
    first_name: string
    last_name: string
    email: string
    phone: string
    password: string
    business_type: string
    industry_type: string
    business_name: string
    revenue: string
}
export interface SocialMedia {
    platform_id: Generated<number>
    platform_name: string
}
export interface SocialMediaUser {
    id: appuser["id"] 
    platform_name: SocialMedia["platform_name"]
    platform_id: SocialMedia["platform_id"]
    platform_handles: string
}

export type User = Selectable<appuser>
export type NewUser = Insertable<appuser>
export type UpdatedUser = Updateable<appuser>

export interface Database {
    appuser: appuser
    SocialMedia: SocialMedia
    SocialMediaUser: SocialMediaUser
}

