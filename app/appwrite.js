import { Client, Account, Databases, } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(NEXT_PUBLIC_PROJECT_ID);

export const account = new Account(client);
export { ID } from 'appwrite';
export const databases = new Databases(client); ``