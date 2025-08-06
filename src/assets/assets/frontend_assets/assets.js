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
    {
        _id: "aaaap",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 170,
        image: [p_img16],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716628845448,
        bestseller: false,
        discount: 20
    },
    {
        _id: "aaaaq",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A stylish pair of trousers designed for comfort and elegance.",
        price: 150,
        image: [p_img17],
        category: "Men",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
        date: 1716629945448,
        bestseller: false,
        //: 0 // Out of stock
    },
    {
        _id: "aaaar",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A comfortable cotton t-shirt perfect for everyday wear.",
        price: 180,
        image: [p_img18],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
        date: 1716631045448,
        bestseller: false,
        //: 3,
        discount: 20
    },
    {
        _id: "aaaas",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, breathable t-shirt for boys.",
        price: 160,
        image: [p_img19],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
        date: 1716632145448,
        bestseller: false,
        //: 0 // Out of stock
    },
    {
        _id: "aaaat",
        name: "Women Palazzo Pants with Waist Belt",
        description: "Stylish palazzo pants that offer comfort and elegance.",
        price: 190,
        image: [p_img20],
        category: "Women",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
        date: 1716633245448,
        bestseller: false,
        //: 4
    },
    {
        _id: "aaaau",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A cozy jacket perfect for chilly days.",
        price: 170,
        image: [p_img21],
        category: "Women",
        subCategory: "WinterWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
        date: 1716634345448,
        bestseller: false,
        //: 2,
        discount: 20
    },
    {
        _id: "aaaav",
        name: "Women Palazzo Pants with Waist Belt",
        description: "Elegant palazzo pants with a stylish waist belt.",
        price: 200,
        image: [p_img22],
        category: "Women",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
        date: 1716635445448,
        bestseller: false,
        //: 5,
        discount: 20
    },
    {
        _id: "aaaaw",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A classic round neck t-shirt for boys.",
        price: 180,
        image: [p_img23],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
        date: 1716636545448,
        bestseller: false,
        //: 0, // Out of stock
        discount: 20
    },
    {
        _id: "aaaax",
        name: "Girls Floral Print Dress",
        description: "A beautiful floral dress perfect for summer.",
        price: 220,
        image: [p_img16],
        category: "Kids",
        subCategory: "Dresses",
        sizes: ["S", "M", "L"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716637645448,
        bestseller: false,
        //: 6,
        discount: 20
    },
    {
        _id: "aaaay",
        name: "Men Casual Sneakers",
        description: "Comfortable sneakers for everyday wear.",
        price: 120,
        image: [p_img17],
        category: "Men",
        subCategory: "Footwear",
        sizes: ["S", "M", "XL"],
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
        date: 1716638745448,
        bestseller: false,
        //: 3,
        discount: 30
    },
    {
        _id: "aaaaa",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 100,
        image: [p_img1],
        category: "Women",
        subCategory: "TopWear",
        sizes: ["S", "M", "L"],
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
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
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
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
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
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
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
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
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
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
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
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
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
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
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
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
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
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
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
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
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
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
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
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
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL 
        },
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
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
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
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "aaaap90119",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 170,
        image: [p_img16],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 150,
        image: [p_img17],
        category: "Men",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
        date: 1716629945448,
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 180,
        image: [p_img18],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
        date: 1716631045448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 160,
        image: [p_img19],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaat",
        name: "Women Palazzo Pants with Waist Belt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 190,
        image: [p_img20],
        category: "Women",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
        date: 1716633245448,
        bestseller: false
    },
    {
        _id: "aaaau",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 170,
        image: [p_img21],
        category: "Women",
        subCategory: "WinterWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaav",
        name: "Women Palazzo Pants with Waist Belt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 200,
        image: [p_img22],
        category: "Women",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716635445448,
        bestseller: false
    },
    {
        _id: "aaaaw",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 180,
        image: [p_img23],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716636545448,
        bestseller: false
    },
    {
        _id: "aaaa818",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 210,
        image: [p_img24],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716637645448,
        bestseller: false
    },
    {
        _id: "aaaay",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 190,
        image: [p_img25],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716638745448,
        bestseller: false
    },
    {
        _id: "aaaaz",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 220,
        image: [p_img26],
        category: "Women",
        subCategory: "WinterWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716639845448,
        bestseller: false
    },
    {
        _id: "aaaba",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 200,
        image: [p_img27],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716640945448,
        bestseller: false
    },
    {
        _id: "aaabb",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 230,
        image: [p_img28],
        category: "Men",
        subCategory: "WinterWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716642045448,
        bestseller: false
    },
    {
        _id: "aaabc",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 210,
        image: [p_img29],
        category: "Women",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716643145448,
        bestseller: false
    },
    {
        _id: "aaabd",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 240,
        image: [p_img30],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716644245448,
        bestseller: false
    },
    {
        _id: "aaabe",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 220,
        image: [p_img31],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716645345448,
        bestseller: false
    },
    {
        _id: "aaabf",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 250,
        image: [p_img32],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716646445448,
        bestseller: false
    },
    {
        _id: "aaabg",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 230,
        image: [p_img33],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716647545448,
        bestseller: false
    },
    {
        _id: "aaabh",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 260,
        image: [p_img34],
        category: "Women",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716648645448,
        bestseller: false
    },
    {
        _id: "aaabi",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 240,
        image: [p_img35],
        category: "Women",
        subCategory: "WinterWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716649745448,
        bestseller: false
    },
    {
        _id: "aaabj",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 270,
        image: [p_img36],
        category: "Women",
        subCategory: "WinterWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716650845448,
        bestseller: false
    },
    {
        _id: "aaabk",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 250,
        image: [p_img37],
        category: "Women",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716651945448,
        bestseller: false
    },
    {
        _id: "aaabl",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 280,
        image: [p_img38],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 1, // Available quantity for size S
            M: 10, // Available quantity for size M
            L: 20, // Out of stock for size L
            XL: 30 // Available quantity for size XL
        },
        date: 1716653045448,
        bestseller: false
    },
    {
        _id: "aaabm",
        name: "Men Printed Plain Cotton Shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 260,
        image: [p_img39],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716654145448,
        bestseller: false
    },
    {
        _id: "aaabn",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 290,
        image: [p_img40],
        category: "Men",
        subCategory: "WinterWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 1, // Available quantity for size S
            M: 10, // Available quantity for size M
            L: 20, // Out of stock for size L
            XL: 30 // Available quantity for size XL
        },
        date: 1716655245448,
        bestseller: false
    },
    {
        _id: "aaabo",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 270,
        image: [p_img41],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716656345448,
        bestseller: false
    },
    {
        _id: "aaabp",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 300,
        image: [p_img42],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 0, // Available quantity for size S
            M: 0, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 0 // Available quantity for size XL
        },
        date: 1716657445448,
        bestseller: true
    },
    {
        _id: "aaabq",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 280,
        image: [p_img43],
        category: "Kids",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 1, // Available quantity for size S
            M: 10, // Available quantity for size M
            L: 20, // Out of stock for size L
            XL: 30 // Available quantity for size XL
        },
        date: 1716658545448,
        bestseller: true
    },
    {
        _id: "aaabr",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 310,
        image: [p_img44],
        category: "Women",
        subCategory: "WinterWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 1, // Available quantity for size S
            M: 10, // Available quantity for size M
            L: 20, // Out of stock for size L
            XL: 30 // Available quantity for size XL
        },
        date: 1716659645448,
        bestseller: true
    },
    {
        _id: "aaabs",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 290,
        image: [p_img45],
        category: "Men",
        subCategory: "WinterWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 1, // Available quantity for size S
            M: 10, // Available quantity for size M
            L: 20, // Out of stock for size L
            XL: 30 // Available quantity for size XL
        },
        date: 1716660745448,
        bestseller: true
    },
    {
        _id: "aaabt",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 320,
        image: [p_img46],
        category: "Men",
        subCategory: "WinterWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 1, // Available quantity for size S
            M: 10, // Available quantity for size M
            L: 20, // Out of stock for size L
            XL: 30 // Available quantity for size XL
        },
        date: 1716661845448,
        bestseller: true
    },
    {
        _id: "aaabu",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 300,
        image: [p_img47],
        category: "Kids",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 1, // Available quantity for size S
            M: 10, // Available quantity for size M
            L: 20, // Out of stock for size L
            XL: 30 // Available quantity for size XL
        },
        date: 1716662945448,
        bestseller: false
    },
    {
        _id: "aaabv",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 330,
        image: [p_img48],
        category: "Men",
        subCategory: "WinterWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 1, // Available quantity for size S
            M: 10, // Available quantity for size M
            L: 20, // Out of stock for size L
            XL: 30 // Available quantity for size XL
        },
        date: 1716664045448,
        bestseller: true
    },
    {
        _id: "aaabw",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 310,
        image: [p_img49],
        category: "Kids",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 1, // Available quantity for size S
            M: 10, // Available quantity for size M
            L: 20, // Out of stock for size L
            XL: 30 // Available quantity for size XL
        },
        date: 1716665145448,
        bestseller: true
    },
    {
        _id: "aaabx",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 340,
        image: [p_img50],
        category: "Kids",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 1, // Available quantity for size S
            M: 10, // Available quantity for size M
            L: 20, // Out of stock for size L
            XL: 30 // Available quantity for size XL
        },
        date: 1716666245448, bestseller: false
    },
    {
        _id: "aaaby",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 320,
        image: [p_img51],
        category: "Women",
        subCategory: "WinterWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
        date: 1716667345448,
        bestseller: true
    },
    {
        _id: "aaabz",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 350,
        image: [p_img52],
        category: "Men",
        subCategory: "WinterWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5, // Available quantity for size S
            M: 3, // Available quantity for size M
            L: 0, // Out of stock for size L
            XL: 2 // Available quantity for size XL
        },
        date: 1716668445448,
        bestseller: true
    },

    {
        _id: "PROD_001",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 170,
        image: [
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHMlMjB0b3B8ZW58MHx8MHx8fDA%3D"
        ],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 10,
            M: 15,
            L: 12,
            XL: 8
        },
        date: 1716628845448,
        bestseller: false,
        discount: 20
    },
    {
        _id: "PROD_002",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A stylish pair of trousers designed for comfort and elegance.",
        price: 150,
        image: [
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwdHJvdXNlcnN8ZW58MHx8MHx8fDA%3D"
        ],
        category: "Men",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5,
            M: 3,
            L: 0,
            XL: 2
        },
        date: 1716629945448,
        bestseller: false,
    },
    {
        _id: "PROD_003",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A comfortable cotton t-shirt perfect for everyday wear.",
        price: 180,
        image: [
            "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95JTIwdCUyMHNoaXJ0fGVufDB8fDB8fHww"
        ],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5,
            M: 3,
            L: 0,
            XL: 2
        },
        date: 1716631045448,
        bestseller: false,
        discount: 20
    },
    {
        _id: "PROD_004",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, breathable t-shirt for boys.",
        price: 160,
        image: [
            "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJveSUyMHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
        ],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5,
            M: 3,
            L: 0,
            XL: 2
        },
        date: 1716632145448,
        bestseller: false,
    },
    {
        _id: "PROD_005",
        name: "Women Palazzo Pants with Waist Belt",
        description: "Stylish palazzo pants that offer comfort and elegance.",
        price: 190,
        image: [
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBwYWxhenpvfGVufDB8fDB8fHww"
        ],
        category: "Women",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5,
            M: 3,
            L: 0,
            XL: 2
        },
        date: 1716633245448,
        bestseller: false,
    },
    {
        _id: "PROD_006",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A cozy jacket perfect for chilly days.",
        price: 170,
        image: [
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D"
        ],
        category: "Women",
        subCategory: "WinterWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5,
            M: 3,
            L: 0,
            XL: 2
        },
        date: 1716634345448,
        bestseller: false,
        discount: 20
    },
    {
        _id: "PROD_007",
        name: "Women Palazzo Pants with Waist Belt",
        description: "Elegant palazzo pants with a stylish waist belt.",
        price: 200,
        image: [
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJTIwcGFsYXp6b3xlbnwwfHwwfHx8MA%3D%3D"
        ],
        category: "Women",
        subCategory: "BottomWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5,
            M: 3,
            L: 0,
            XL: 2
        },
        date: 1716635445448,
        bestseller: false,
        discount: 20
    },
    {
        _id: "PROD_008",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A classic round neck t-shirt for boys.",
        price: 180,
        image: [
            "https://images.unsplash.com/photo-1622290319146-7b63df48a635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveSUyMHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
        ],
        category: "Kids",
        subCategory: "TopWear",
        sizes: ["S", "M", "L", "XL"],
        sizeQuantities: {
            S: 5,
            M: 3,
            L: 0,
            XL: 2
        },
        date: 1716636545448,
        bestseller: false,
        discount: 20
    },
    // {
    //     _id: "PROD_009",
    //     name: "Girls Floral Print Dress",
    //     description: "A beautiful floral dress perfect for summer.",
    //     price: 220,
    //     image: [
    //         "https://images.unsplash.com/photo-1524920333556-c87aa8fccbf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D"
    //     ],
    //     category: "Kids",
    //     subCategory: "TopWear",
    //     sizes: ["S", "M", "L"],
    //     sizeQuantities: {
    //         S: 8,
    //         M: 10,
    //         L: 6
    //     },
    //     date: 1716637645448,
    //     bestseller: false,
    //     discount: 20
    // },

    {
        _id: "PROD_011",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 100,
        image: [
            "https://images.unsplash.com/photo-1624206112918-f140f087f9b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwdG9wfGVufDB8fDB8fHww"
        ],
        category: "Women",
        subCategory: "TopWear",
        sizes: ["S", "M", "L"],
        sizeQuantities: {
            S: 5,
            M: 3,
            L: 0
        },
        date: 1716634345448,
        bestseller: true,
        discount: 10
    },
    {
        _id: "PROD_012",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 200,
        image: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbiUyMHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbiUyMHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
        ],
        category: "Men",
        subCategory: "TopWear",
        sizes: ["M", "L", "XL"],
        sizeQuantities: {
            M: 8,
            L: 12,
            XL: 6
        },
        date: 1716621345448,
        bestseller: true,
        discount: 50
    }

]