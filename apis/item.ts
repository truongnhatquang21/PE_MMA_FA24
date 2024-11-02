import { Item } from "@/types/items";
import { axiosInstance } from "./index";

export const getItemList = async () => {
  return axiosInstance.get<Item[]>("items?sortBy=id&order=desc");
};

export const getItem = async (id: string) => {
  return axiosInstance.get<Item>(`items/${id}`);
};
export const searchItem = async (keyword: string) => {
  return axiosInstance.get<Item[]>(`items`, {
    params: {
      search: keyword,
    },
  });
};
export const filterByBrand = async (brand: string) => {
  return axiosInstance.get<Item[]>(`items`, {
    params: {
      brand,
    },
  });
};
