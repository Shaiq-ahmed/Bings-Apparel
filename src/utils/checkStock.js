export const isProductInStock = (sizeQuantities) => {
    
    return Object.values(sizeQuantities).some(quantity => quantity > 0);
};

// export const isAnyProductSizeInStock = (sizeQuantities) => {
    
//     return Object.values(sizeQuantities).(quantity => quantity > 0);
// };