import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from 'expo-web-browser';
import { Account, Avatars, Client, OAuthProvider } from 'react-native-appwrite';
export const config = {
    platform:'com.sunshine.realestate',
    endpoint:process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId:process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID
}
export const client  = new Client()
client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)
export const avatar = new Avatars(client);
export const account = new Account(client)
export async function logIn(){
    try {
        const redirectUri = Linking.createURL('/') 
        const loginUrl = await account.createOAuth2Token({
            provider: OAuthProvider.Google,
            success: redirectUri,
            failure: redirectUri,
        });
        if(!loginUrl)throw new Error({message:'Failed to login'})
        const browserResponse = await openAuthSessionAsync(
          loginUrl.toString(),
          redirectUri
        )
        if(browserResponse.type !== 'success') throw new Error({message:'failed to login'})
        const url = new URL(browserResponse.url);
        const secret = url.searchParams.get('secret')?.toString();
        const userId = url.searchParams.get('userId')?.toString();
        if(!secret || !userId) throw new Error({message:'failed to login'});
        const session = await account.createSession(userId,secret)
        if(!session) throw new Error({message:'failed to create session'});
        return true;
    } catch (error) {
        console.log(error);
        return false
    }
}
export async function logout(){
    try {
        await account.deleteSession({sessionId:'current'});
        return true;
    } catch (error) {
        console.log(error);
        return true;
    }
}
export async function getUser(){
    try {
        const response = await account.get();
        if(response.$id){
            const avatarUrl =
            `${config.endpoint}/avatars/initials?name=${encodeURIComponent(response.name)}`;
            console.log('the useAvater',avatarUrl);
            console.log('the response',response);
            return {
               ...response,
               avatar:avatarUrl
            }
        }
        return response;
    } catch (error) {
        console.log(error);
        return null
    }
}