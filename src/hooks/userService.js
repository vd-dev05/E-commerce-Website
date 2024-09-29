import { get, ref, set } from 'firebase/database';
import { database } from "../firebase/firebase"; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const addUser = async (users) => {

    try {
        const userRefAuth = ref(database, 'users/auth');
        const snapshot = await get(userRefAuth);
        const currentArray = snapshot.exists() ? snapshot.val() : [];
        
        if (currentArray.some(item => item.contact === users.contact )) {
            toast.warning("Account already exists on the system", {
                autoClose: 1500
            });
            return;
        }

        const data = {
            name: users.name,
            contact: users.contact,
            password: users.password,
        };
        currentArray.push(data);
        
        await set(userRefAuth, currentArray);
        toast.success("User added successfully", {
            autoClose: 1500
        });
    } catch (error) {
        toast.error("An error occurred while adding the user.", {
            autoClose: 1500
        });
        console.error("Error adding user: ", error);
    }
};

export const loginUser = async (contact, password) => {
    
    
    try {
        const userRefAuth = ref(database, 'users/auth');
        const snapshot = await get(userRefAuth);
        const currentArray = snapshot.exists() ? snapshot.val() : [];

        // Securely check for user credentials
        const user = currentArray.find(item => item.contact === contact && item.password === password);

        return user 
    } catch (error) {
        toast.error("An error occurred while logging in.", {
            autoClose: 1500,
        });
        console.error("Error logging in: ", error);
    }
};