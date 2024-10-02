// import { ID, Account, Client } from 'appwrite';
// import Config from 'react-native-config';
// import Snackbar from 'react-native-snackbar';

// const appwriteClient = new Client();

// const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT || "";
// const APPWRITE_PROJECT_ID: string = Config.APPWRITE_PROJECT_ID || "";

// console.log('APPWRITE_ENDPOINT:', APPWRITE_ENDPOINT);
// console.log('APPWRITE_PROJECT_ID:', APPWRITE_PROJECT_ID);

// if (!APPWRITE_ENDPOINT || !APPWRITE_PROJECT_ID) {
//     throw new Error("Appwrite endpoint and project ID must be defined in the environment variables.");
// }

// type CreateUserAccount = {
//     email: string;
//     password: string;
//     confirmpassword: string;
// };

// type LoginUserAccount = {
//     email: string;
//     password: string;
// };

// class AppwriteService {
//     account: Account;

//     constructor() {
//         appwriteClient
//             .setEndpoint(APPWRITE_ENDPOINT)
//             .setProject(APPWRITE_PROJECT_ID);

//         this.account = new Account(appwriteClient);
//     }

//     // Create a new record of user inside Appwrite
//     async createAccount({ email, password, confirmpassword }: CreateUserAccount) {
//         try {
//             // Check if passwords match
//             if (password !== confirmpassword) {
//                 throw new Error("Passwords do not match.");
//             }

//             const userAccount = await this.account.create(
//                 ID.unique(),
//                 email,
//                 password
//             );

//             // Automatically log in after creating the account
//             if (userAccount) {
//                 return await this.login({ email, password });
//             }

//             return userAccount;
//         } catch (error) {
//             this.handleError("createAccount", error);
//         }
//     }

//     async login({ email, password }: LoginUserAccount) {
//         try {
//             return await this.account.createSession(email, password);
//         } catch (error) {
//             this.handleError("login", error);
//         }
//     }

//     async getCurrentUser() {
//         try {
//             return await this.account.get();
//         } catch (error) {
//             this.handleError("getCurrentUser", error);
//         }
//     }

//     async logout() {
//         try {
//             return await this.account.deleteSession('current');
//         } catch (error) {
//             this.handleError("logout", error);
//         }
//     }

//     private handleError(method: string, error: any) {
//         const errorMessage = error?.message || String(error);
//         Snackbar.show({
//             text: errorMessage,
//             duration: Snackbar.LENGTH_LONG,
//         });
//         console.error(`Appwrite service :: ${method}() :: ${errorMessage}`);
//     }
// }

// export default AppwriteService;
