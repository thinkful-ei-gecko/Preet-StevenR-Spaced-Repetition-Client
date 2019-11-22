export default {
  API_ENDPOINT: (process.env.NODE_ENV === 'production' 
    ? 'https://quiet-earth-85650.herokuapp.com/api' : 'http://localhost:8000/api'),
  TOKEN_KEY: 'blogful-client-auth-token',
}
//http://localhost:8000/api