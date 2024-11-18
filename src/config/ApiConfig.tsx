// export const BASE_URL = 'https://jobportalapi3.sonicesolution.in';
export const BASE_URL = 'http://10.0.2.2:8000/api';


export const ApiConfig = {
// POST_LOGIN:BASE_URL+'/candidate/auth/signin'
POST_LOGIN:BASE_URL+'/v1/users/login',
GET_PRODUCT:BASE_URL+'/v1/products/allProducts',
}