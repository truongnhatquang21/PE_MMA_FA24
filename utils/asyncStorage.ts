import { Item } from '@/types/items';
import AsyncStorage from '@react-native-async-storage/async-storage';

const key="item-list"

export const getItemFromAsyncStorage = async () => {
    try {
        const items = await AsyncStorage.getItem(key);
        if (items) {
            return JSON.parse(items) as Item[];
        }    
        
        return [] as Item[];
    } catch (error) {
        throw error
    }
}

const setItemToAsyncStorage = async (value: Item[]) => {
    try {
        await AsyncStorage.setItem
        (key, JSON.stringify(value));
    } catch (error) {
    throw error
    }
}

export const toggleItemToAsyncStorage = async (value: Item) => {
    try {
        let items = await getItemFromAsyncStorage();
        const index = items.findIndex((item: Item) => item.id === value.id);
        if (index !==-1) {
            items = items.filter((item:Item) => item.id !== value.id);
            await setItemToAsyncStorage(items);
            return
        }

        items.push(value);
        await setItemToAsyncStorage(items);
    } catch (error) {
    throw error
    }
}

export const removeItemFromAsyncStorage = async (id: string) => {
    try {
        let items = await getItemFromAsyncStorage();
        console.log(items,"SDAf");
        
        items = items.filter((item:Item) => item.id !== id);
        await setItemToAsyncStorage(items);
    } catch (error) {
throw error
    }
}

export const isExistItemInAsyncStorage = async (id: string):Promise<Boolean> => {
    try {
        let items = await getItemFromAsyncStorage();
        return items.some((item:Item) => item.id === id);
    } catch (error) {
        throw error
    }
}

export const removeListFromAsyncStorage = async (itemsList:Item[]) => {
    try {
        let items = await getItemFromAsyncStorage();
        
        items = items.filter((item:Item) => {
            return !itemsList.some((i:Item) => i.id === item.id);
        });
        await setItemToAsyncStorage(items);
    } catch (error) {
throw error
    }
}