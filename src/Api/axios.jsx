import axios from 'axios'
export default axios.create(
    {
        baseURL:`https://hiring-stackroots-server.herokuapp.com/auth/`
    }
)