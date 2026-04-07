export type Product = {   
id: string
user_id: string
category_id: string
name: string 
price: number   
stock: number   
photo_url: string
source: string }

// TODO: añadir photo_url: string cuando implementemos imágenes en categorías
export type Category = {
id: string
user_id: string
name: string }