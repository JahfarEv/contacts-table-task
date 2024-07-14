const dotenv= require('dotenv');
dotenv.config({path:'.src/config/.env'});
const connectDB = require('./config/connectDB')
const app = require('./app')

connectDB()

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})