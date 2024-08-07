import { Client, Databases } from "appwrite";
const baseUrl = process.env.BASE_URL
const project_id = process.env.PROJECT_ID

const client = new Client();

client
  .setEndpoint(baseUrl as string)
  .setProject(project_id as string);

const database = new Databases(client);
export { database, client };
