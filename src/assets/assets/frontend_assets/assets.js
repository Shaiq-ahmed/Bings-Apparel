import p_img1 from './p_img1.png'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img2_4 from './p_img2_4.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'
import p_img9 from './p_img9.png'
import p_img10 from './p_img10.png'
import p_img11 from './p_img11.png'
import p_img12 from './p_img12.png'
import p_img13 from './p_img13.png'
import p_img14 from './p_img14.png'
import p_img15 from './p_img15.png'
import p_img16 from './p_img16.png'
import p_img17 from './p_img17.png'
import p_img18 from './p_img18.png'
import p_img19 from './p_img19.png'
import p_img20 from './p_img20.png'
import p_img21 from './p_img21.png'
import p_img22 from './p_img22.png'
import p_img23 from './p_img23.png'
import p_img24 from './p_img24.png'
import p_img25 from './p_img25.png'
import p_img26 from './p_img26.png'
import p_img27 from './p_img27.png'
import p_img28 from './p_img28.png'
import p_img29 from './p_img29.png'
import p_img30 from './p_img30.png'
import p_img31 from './p_img31.png'
import p_img32 from './p_img32.png'
import p_img33 from './p_img33.png'
import p_img34 from './p_img34.png'
import p_img35 from './p_img35.png'
import p_img36 from './p_img36.png'
import p_img37 from './p_img37.png'
import p_img38 from './p_img38.png'
import p_img39 from './p_img39.png'
import p_img40 from './p_img40.png'
import p_img41 from './p_img41.png'
import p_img42 from './p_img42.png'
import p_img43 from './p_img43.png'
import p_img44 from './p_img44.png'
import p_img45 from './p_img45.png'
import p_img46 from './p_img46.png'
import p_img47 from './p_img47.png'
import p_img48 from './p_img48.png'
import p_img49 from './p_img49.png'
import p_img50 from './p_img50.png'
import p_img51 from './p_img51.png'
import p_img52 from './p_img52.png'


import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    // Premium Women's Collection - Expanded
    {
        _id: "SA_001",
        name: "Minimalist Cashmere Sweater",
        description: "Luxuriously soft cashmere sweater with a minimalist design. Perfect for both casual and professional settings.",
        price: 189,
        image: [
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop&q=80"
        ],
        category: "Women",
        subCategory: "TopWear",
        sizes: ["XS", "S", "M", "L", "XL"],
        sizeQuantities: { XS: 8, S: 15, M: 20, L: 12, XL: 5 },
        date: Date.now(),
        bestseller: true,
        discount: 15
    },
    {
        _id: "SA_002",
        name: "Classic White Button-Down Shirt",
        description: "Timeless white cotton shirt with a perfect fit. A wardrobe essential that never goes out of style.",
        price: 89,
        image: [
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=800&fit=crop&q=80"
        ],
        category: "Women",
        subCategory: "TopWear",
        sizes: ["XS", "S", "M", "L", "XL"],
        sizeQuantities: { XS: 10, S: 18, M: 25, L: 15, XL: 8 },
        date: Date.now(),
        bestseller: true,
        discount: 10
    },
    {
        _id: "SA_003",
        name: "High-Waisted Wide Leg Trousers",
        description: "Elegant wide-leg trousers in premium wool blend. Features a high waist and tailored fit for a sophisticated silhouette.",
        price: 145,
        image: [
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1506629905398-b5f54d3e0127?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=800&fit=crop&q=80"
        ],
        category: "Women",
        subCategory: "BottomWear",
        sizes: ["XS", "S", "M", "L", "XL"],
        sizeQuantities: { XS: 6, S: 12, M: 18, L: 14, XL: 6 },
        date: Date.now(),
        bestseller: false,
        discount: 20
    },
    {
        _id: "SA_004",
        name: "Oversized Blazer",
        description: "Contemporary oversized blazer in a structured design. Perfect for creating sharp, professional looks with modern edge.",
        price: 225,
        image: [
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1544957992-20514f595d6f?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1575520283853-f20cb6ab6b14?w=600&h=800&fit=crop&q=80"
        ],
        category: "Women",
        subCategory: "TopWear",
        sizes: ["XS", "S", "M", "L", "XL"],
        sizeQuantities: { XS: 4, S: 8, M: 12, L: 10, XL: 6 },
        date: Date.now(),
        bestseller: true,
        discount: 12
    },
    {
        _id: "SA_005",
        name: "Silk Midi Dress",
        description: "Elegant silk midi dress with a flowing silhouette. Perfect for special occasions or upscale casual wear.",
        price: 195,
        image: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1566479179817-c9d73d516e15?w=600&h=800&fit=crop&q=80"
        ],
        category: "Women",
        subCategory: "TopWear",
        sizes: ["XS", "S", "M", "L", "XL"],
        sizeQuantities: { XS: 6, S: 10, M: 15, L: 12, XL: 4 },
        date: Date.now(),
        bestseller: true,
        discount: 18
    },
    {
        _id: "SA_006",
        name: "Knit Cardigan",
        description: "Cozy knit cardigan in premium cotton blend. Features delicate button details and a relaxed fit.",
        price: 125,
        image: [
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&q=80"
        ],
        category: "Women",
        subCategory: "TopWear",
        sizes: ["XS", "S", "M", "L", "XL"],
        sizeQuantities: { XS: 8, S: 12, M: 18, L: 14, XL: 8 },
        date: Date.now(),
        bestseller: false,
        discount: 25
    },
    {
        _id: "SA_007",
        name: "Pleated A-Line Skirt",
        description: "Classic pleated A-line skirt in premium fabric. Perfect for creating elegant and feminine looks.",
        price: 95,
        image: [
            "https://images.unsplash.com/photo-1583830112664-077b7ebda7b1?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1578834153518-8bf3b3710a37?w=600&h=800&fit=crop&q=80"
        ],
        category: "Women",
        subCategory: "BottomWear",
        sizes: ["XS", "S", "M", "L", "XL"],
        sizeQuantities: { XS: 10, S: 16, M: 20, L: 12, XL: 6 },
        date: Date.now(),
        bestseller: true,
        discount: 15
    },
    {
        _id: "SA_008",
        name: "Cropped Denim Jacket",
        description: "Stylish cropped denim jacket with vintage-inspired detailing. Perfect for layering over dresses or casual outfits.",
        price: 115,
        image: [
            // "https://images.unsplash.com/photo-1583880170096-2e35c9e6f47d?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=800&fit=crop&q=80"
        ],
        category: "Women",
        subCategory: "TopWear",
        sizes: ["XS", "S", "M", "L", "XL"],
        sizeQuantities: { XS: 5, S: 12, M: 16, L: 10, XL: 7 },
        date: Date.now(),
        bestseller: false,
        discount: 20
    },
    
    // Premium Men's Collection - Expanded
    {
        _id: "SA_009",
        name: "Premium Cotton T-Shirt",
        description: "Ultra-soft premium cotton t-shirt with perfect fit. Made from 100% organic cotton for comfort and sustainability.",
        price: 65,
        image: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop&q=80"
        ],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        sizeQuantities: { S: 15, M: 25, L: 30, XL: 20, XXL: 10 },
        date: Date.now(),
        bestseller: true,
        discount: 8
    },
    {
        _id: "SA_010",
        name: "Tailored Dress Shirt",
        description: "Crisp white dress shirt with modern tailoring. Features mother-of-pearl buttons and French seams for durability.",
        price: 125,
        image: [
            "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1598032895850-3a8c40239ad8?w=600&h=800&fit=crop&q=80"
        ],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        sizeQuantities: { S: 8, M: 15, L: 20, XL: 12, XXL: 5 },
        date: Date.now(),
        bestseller: false,
        discount: 15
    },
    {
        _id: "SA_011",
        name: "Slim Fit Chinos",
        description: "Classic chino pants in a modern slim fit. Made from stretch cotton twill for comfort and style.",
        price: 95,
        image: [
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=600&h=800&fit=crop&q=80"
        ],
        category: "Men",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        sizeQuantities: { S: 12, M: 20, L: 25, XL: 15, XXL: 8 },
        date: Date.now(),
        bestseller: true,
        discount: 18
    },
    {
        _id: "SA_012",
        name: "Merino Wool Cardigan",
        description: "Luxurious merino wool cardigan with a timeless design. Features ribbed trim and horn buttons.",
        price: 165,
        image: [
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop&q=80"
        ],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        sizeQuantities: { S: 6, M: 12, L: 15, XL: 10, XXL: 4 },
        date: Date.now(),
        bestseller: false,
        discount: 22
    },
    {
        _id: "SA_013",
        name: "Modern Bomber Jacket",
        description: "Contemporary bomber jacket with premium materials. Features ribbed cuffs and a sleek, modern silhouette.",
        price: 185,
        image: [
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1564557287817-3785e38ec4f5?w=600&h=800&fit=crop&q=80"
        ],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        sizeQuantities: { S: 5, M: 10, L: 15, XL: 12, XXL: 8 },
        date: Date.now(),
        bestseller: true,
        discount: 12
    },
    {
        _id: "SA_014",
        name: "Oxford Button-Up Shirt",
        description: "Classic oxford shirt in soft cotton blend. Features a button-down collar and relaxed fit for casual elegance.",
        price: 105,
        image: [
            "https://images.unsplash.com/photo-1598032895850-3a8c40239ad8?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1506629905398-b5f54d3e0127?w=600&h=800&fit=crop&q=80"
        ],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        sizeQuantities: { S: 10, M: 18, L: 22, XL: 14, XXL: 6 },
        date: Date.now(),
        bestseller: true,
        discount: 16
    },
    {
        _id: "SA_015",
        name: "Dark Wash Jeans",
        description: "Premium dark wash jeans with a modern straight fit. Made from stretch denim for all-day comfort.",
        price: 135,
        image: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop&q=80"
        ],
        category: "Men",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        sizeQuantities: { S: 8, M: 16, L: 20, XL: 16, XXL: 10 },
        date: Date.now(),
        bestseller: true,
        discount: 20
    },
    {
        _id: "SA_016",
        name: "Quilted Vest",
        description: "Lightweight quilted vest perfect for layering. Features a water-resistant finish and multiple pockets.",
        price: 115,
        image: [
            "https://images.unsplash.com/photo-1564557287817-3785e38ec4f5?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&q=80"
        ],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        sizeQuantities: { S: 7, M: 12, L: 16, XL: 11, XXL: 5 },
        date: Date.now(),
        bestseller: false,
        discount: 25
    },

    // Kids Collection - Expanded
    {
        _id: "SA_017",
        name: "Organic Cotton Kids T-Shirt",
        description: "Super soft organic cotton t-shirt for kids. Safe, comfortable, and eco-friendly with fun, minimalist designs.",
        price: 35,
        image: [
            "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=600&h=800&fit=crop&q=80"
        ],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["2T", "3T", "4T", "5T", "6T"],
        sizeQuantities: { "2T": 10, "3T": 15, "4T": 18, "5T": 12, "6T": 8 },
        date: Date.now(),
        bestseller: true,
        discount: 12
    },
    {
        _id: "SA_018",
        name: "Kids Denim Jacket",
        description: "Classic denim jacket sized for kids. Features adjustable cuffs and a timeless design that grows with them.",
        price: 55,
        image: [
            "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1583880170096-2e35c9e6f47d?w=600&h=800&fit=crop&q=80"
        ],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["2T", "3T", "4T", "5T", "6T"],
        sizeQuantities: { "2T": 6, "3T": 10, "4T": 12, "5T": 8, "6T": 5 },
        date: Date.now(),
        bestseller: false,
        discount: 18
    },
    {
        _id: "SA_019",
        name: "Kids Cotton Shorts",
        description: "Comfortable cotton shorts perfect for play and adventure. Features an elastic waistband and durable construction.",
        price: 28,
        image: [
            "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop&q=80"
        ],
        category: "Kids",
        subCategory: "BottomWear",
        sizes: ["2T", "3T", "4T", "5T", "6T"],
        sizeQuantities: { "2T": 12, "3T": 16, "4T": 20, "5T": 14, "6T": 10 },
        date: Date.now(),
        bestseller: true,
        discount: 15
    },
    {
        _id: "SA_020",
        name: "Kids Knit Cardigan",
        description: "Cozy knit cardigan for kids in soft cotton blend. Perfect for cooler days and easy layering.",
        price: 45,
        image: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&q=80"
        ],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["2T", "3T", "4T", "5T", "6T"],
        sizeQuantities: { "2T": 8, "3T": 12, "4T": 15, "5T": 10, "6T": 6 },
        date: Date.now(),
        bestseller: false,
        discount: 22
    },

    // Additional Women's Items
    {
        _id: "SA_021",
        name: "Wrap Maxi Dress",
        description: "Elegant wrap maxi dress in flowing fabric. Features three-quarter sleeves and a flattering silhouette for any occasion.",
        price: 155,
        image: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1566479179817-c9d73d516e15?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop&q=80"
        ],
        category: "Women",
        subCategory: "TopWear",
        sizes: ["XS", "S", "M", "L", "XL"],
        sizeQuantities: { XS: 5, S: 10, M: 16, L: 12, XL: 7 },
        date: Date.now(),
        bestseller: true,
        discount: 20
    },
    {
        _id: "SA_022",
        name: "Cropped Sweater",
        description: "Soft cropped sweater in premium wool blend. Perfect for creating trendy layered looks with high-waisted bottoms.",
        price: 89,
        image: [
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop&q=80"
        ],
        category: "Women",
        subCategory: "TopWear",
        sizes: ["XS", "S", "M", "L", "XL"],
        sizeQuantities: { XS: 8, S: 14, M: 18, L: 12, XL: 6 },
        date: Date.now(),
        bestseller: false,
        discount: 25
    },
    {
        _id: "SA_023",
        name: "Straight Leg Jeans",
        description: "Classic straight leg jeans in premium denim. Features a mid-rise waist and comfortable fit through the leg.",
        price: 125,
        image: [
            "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop&q=80"
        ],
        category: "Women",
        subCategory: "BottomWear",
        sizes: ["XS", "S", "M", "L", "XL"],
        sizeQuantities: { XS: 6, S: 12, M: 20, L: 16, XL: 8 },
        date: Date.now(),
        bestseller: true,
        discount: 15
    },
    {
        _id: "SA_024",
        name: "Puff Sleeve Blouse",
        description: "Romantic puff sleeve blouse in lightweight cotton. Features delicate button details and a feminine silhouette.",
        price: 95,
        image: [
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop&q=80"
        ],
        category: "Women",
        subCategory: "TopWear",
        sizes: ["XS", "S", "M", "L", "XL"],
        sizeQuantities: { XS: 7, S: 13, M: 17, L: 11, XL: 5 },
        date: Date.now(),
        bestseller: false,
        discount: 18
    },

    // Additional Men's Items
    {
        _id: "SA_025",
        name: "Henley Long Sleeve",
        description: "Classic henley in soft cotton jersey. Features a three-button placket and comfortable long sleeves.",
        price: 75,
        image: [
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop&q=80"
        ],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        sizeQuantities: { S: 12, M: 20, L: 25, XL: 16, XXL: 8 },
        date: Date.now(),
        bestseller: true,
        discount: 12
    },
    {
        _id: "SA_026",
        name: "Performance Polo",
        description: "Modern performance polo with moisture-wicking technology. Perfect for both casual and active wear.",
        price: 85,
        image: [
            "https://images.unsplash.com/photo-1598032895850-3a8c40239ad8?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1506629905398-b5f54d3e0127?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop&q=80"
        ],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        sizeQuantities: { S: 10, M: 18, L: 22, XL: 14, XXL: 6 },
        date: Date.now(),
        bestseller: false,
        discount: 20
    },
    {
        _id: "SA_027",
        name: "Cargo Shorts",
        description: "Functional cargo shorts with multiple pockets. Made from durable cotton twill for outdoor adventures.",
        price: 65,
        image: [
            "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop&q=80"
        ],
        category: "Men",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        sizeQuantities: { S: 8, M: 15, L: 20, XL: 12, XXL: 7 },
        date: Date.now(),
        bestseller: true,
        discount: 15
    },
    {
        _id: "SA_028",
        name: "Flannel Shirt",
        description: "Classic flannel shirt in soft cotton blend. Features a relaxed fit and timeless plaid pattern.",
        price: 95,
        image: [
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1598032895850-3a8c40239ad8?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1506629905398-b5f54d3e0127?w=600&h=800&fit=crop&q=80"
        ],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        sizeQuantities: { S: 9, M: 16, L: 19, XL: 13, XXL: 5 },
        date: Date.now(),
        bestseller: false,
        discount: 22
    },

    // Additional Kids Items  
    {
        _id: "SA_029",
        name: "Kids Hoodie",
        description: "Cozy kids hoodie in soft cotton blend. Features a kangaroo pocket and comfortable fit for active play.",
        price: 42,
        image: [
            "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&h=800&fit=crop&q=80"
        ],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["2T", "3T", "4T", "5T", "6T"],
        sizeQuantities: { "2T": 8, "3T": 12, "4T": 16, "5T": 10, "6T": 6 },
        date: Date.now(),
        bestseller: true,
        discount: 16
    },
    {
        _id: "SA_030",
        name: "Kids Leggings",
        description: "Stretchy and comfortable leggings for kids. Made from soft cotton blend with elastic waistband.",
        price: 24,
        image: [
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=600&h=800&fit=crop&q=80"
        ],
        category: "Kids",
        subCategory: "BottomWear",
        sizes: ["2T", "3T", "4T", "5T", "6T"],
        sizeQuantities: { "2T": 10, "3T": 14, "4T": 18, "5T": 12, "6T": 8 },
        date: Date.now(),
        bestseller: false,
        discount: 20
    },

    // Keep existing products for backward compatibility
    {
        _id: "aaaaa",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 100,
        image: [p_img1],
        category: "Women",
        subCategory: "TopWear",
        sizes: ["S", "M", "L"],
        sizeQuantities: { S: 5, M: 3, L: 0, XL: 2 },
        date: 1716634345448,
        bestseller: true,
        discount: 10
    },
    {
        _id: "aaaab",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 200,
        image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["M", "L", "XL"],
        sizeQuantities: { S: 0, M: 0, L: 0, XL: 0 },
        date: 1716621345448,
        bestseller: true,
        discount: 50
    },
    {
        _id: "aaaac",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 220,
        image: [p_img3],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "L", "XL"],
        sizeQuantities: { S: 5, M: 3, L: 0, XL: 2 },
        date: 1716234545448,
        bestseller: true,
        discount: 6
    },
    {
        _id: "aaaad",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 110,
        image: [p_img4],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "XXL"],
        sizeQuantities: { S: 5, M: 3, L: 0, XL: 2 },
        date: 1716621345448,
        bestseller: true,
        discount: 21
    },
    {
        _id: "aaaae",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 130,
        image: [p_img5],
        category: "Women",
        subCategory: "TopWear",
        sizes: ["M", "L", "XL"],
        sizeQuantities: { S: 0, M: 0, L: 0, XL: 0 },
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 140,
        image: [p_img6],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "L", "XL"],
        sizeQuantities: { S: 5, M: 3, L: 0, XL: 2 },
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 190,
        image: [p_img7],
        category: "Men",
        subCategory: "BottomWear",
        sizes: ["S", "L", "XL"],
        sizeQuantities: { S: 5, M: 3, L: 0, XL: 2 },
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 140,
        image: [p_img8],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: { S: 0, M: 0, L: 0, XL: 0 },
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 100,
        image: [p_img9],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["M", "L", "XL"],
        sizeQuantities: { S: 0, M: 0, L: 0, XL: 0 },
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 110,
        image: [p_img10],
        category: "Men",
        subCategory: "BottomWear",
        sizes: ["S", "L", "XL"],
        sizeQuantities: { S: 5, M: 3, L: 0, XL: 2 },
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 120,
        image: [p_img11],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L"],
        sizeQuantities: { S: 5, M: 3, L: 0, XL: 2 },
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 150,
        image: [p_img12],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: { S: 5, M: 3, L: 0, XL: 2 },
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 130,
        image: [p_img13],
        category: "Women",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: { S: 5, M: 3, L: 0, XL: 2 },
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 160,
        image: [p_img14],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: { S: 5, M: 3, L: 0, XL: 2 },
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 140,
        image: [p_img15],
        category: "Men",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: { S: 5, M: 3, L: 0, XL: 2 },
        date: 1716627745448,
        bestseller: false
    }
]
