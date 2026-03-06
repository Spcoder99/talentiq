import { StreamChat } from 'stream-chat';
import { StreamClient } from '@stream-io/node-sdk';
import { ENV } from './env.js';

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
    console.error("STREAM_API_KEY or STREAM_API_SECRET is missing in environment variables");
}


export const chatClient = StreamChat.getInstance(apiKey, apiSecret); // Initialize the StreamChat client with API key and secret
export const streamClient = new StreamClient(apiKey, apiSecret); // Initialize the StreamClient for server-side operations

export const upsertStreamUser = async (userData) => {
    try {
        await chatClient.upsertUser(userData);
        console.log(`Stream user ${userData.id} upserted successfully`);
    } catch (error) {
        console.error("Error upserting Stream user:", error);
    }
};

export const deleteStreamUser = async (userId) => {
    try {
        await chatClient.deleteUser(userId);
        console.log(`Stream user ${userId} deleted successfully`);
    } catch (error) {
        console.error(`Error deleting Stream user ${userId}:`, error);
    }
};

