import { config } from 'dotenv';
config();

class googleOauth2 {
    static id: string = process.env.ID_FOR_SECRET;
    static secret:string = process.env.SECRET;
    
    }
    export default googleOauth2;