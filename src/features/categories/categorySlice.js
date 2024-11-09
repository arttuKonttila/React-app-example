import { createSlice } from "@reduxjs/toolkit";
import categoryApparel from "../../assets/images/category-apparel.jpg";
import categoryClothing from "../../assets/images/category-clothing.jpg";
import categoryAccessories from "../../assets/images/category-accessories.jpg";

const initialState = {
  categoryItems: [
    { category: "Clothing", image: categoryClothing },
    { category: "Apparel", image: categoryApparel },
    { category: "Accessories", image: categoryAccessories },
  ],
};

const categorySlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
