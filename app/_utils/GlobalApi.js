const {default:axios} = require("axios")

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY

const apiUrl = 'http://localhost:1337/api'

const axiosClient = axios.create({
    baseURL:apiUrl,
    headers:{
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json' // Ensure correct content type
    }
})


const getLatestProduct =()=> axiosClient.get('/products?populate=*')

const getProductById = (id)=> axiosClient.get(`/products/${id}?populate=*`)

const getProductListByCategory = (category)=> axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)

// Add to cart collection

const addToCart = (data)=>axiosClient.post('/carts',data)

//Get user cart items
const getUserCartIItem = (email)=> axiosClient.get(`/carts?populate[products][populate][0]=banner&filters[email][$eq]=${email}`)

//delete cart item
const deleteCartItem = (id)=>axiosClient.delete(`/carts/${id}`)

export default{
    getLatestProduct,
    getProductById,
    getProductListByCategory,
    addToCart,
    getUserCartIItem,
    deleteCartItem
}