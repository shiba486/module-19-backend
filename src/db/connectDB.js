import  mongoose  from "mongoose";


const url = "mongodb+srv://shiba486:shibaabc123@shiba.xz3yde1.mongodb.net/?retryWrites=true&w=majority&appName=shiba";
const connectDB = async function(){
    try {
       const connectionInstance = await mongoose.connect(url)
        console.log(`Mongodb connected DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("\n mongodb connection err", error)
        process.exit(1)
    }
}


export default connectDB;
