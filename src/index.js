import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// const data = [
//     {
//         "title": "White Guitar T-Shirt",
//         "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//         "img": "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
//         "categories": [
//             "tshirt",
//             "man"
//         ],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "color": [
//             "white"
//         ],
//         "price": 2000,
//         "inStock": "true"
//     },
//     {
//         "title": "Prada T-Shirt",
//         "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//         "img": "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
//         "categories": [
//             "tshirt",
//             "man"
//         ],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "color": [
//             "red",
//             "yellow",
//             "black"
//         ],
//         "price": 5000,
//         "inStock": "true"
//     },
//     {
//         "title": "Victor Blue T-Shirt",
//         "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//         "img": "https://storage.needpix.com/rsynced_images/t-shirt-2068353_1280.png",
//         "categories": [
//             "tshirt",
//             "man"
//         ],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "color": [
//             "blue"
//         ],
//         "price": 1000,
//         "inStock": "true"
//     },
//     {
//         "title": "Cotton Tote Bags",
//         "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//         "img": "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
//         "categories": [
//             "bag",
//             "man"
//         ],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "color": [
//             "gray",
//             "green"
//         ],
//         "price": 850,
//         "inStock": "true"
//     },
//     {
//         "title": "Rocket Vintage Cap",
//         "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//         "img": "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
//         "categories": [
//             "cap",
//             "man"
//         ],
//         "size": [
//             "S",
//             "M"
//         ],
//         "color": [
//             "gray",
//             "yellow"
//         ],
//         "price": 210,
//         "inStock": "true"
//     },
//     {
//         "title": "White Hibiscus Tube Dress",
//         "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//         "img": "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
//         "categories": [
//             "dress",
//             "man"
//         ],
//         "size": [
//             "S",
//             "M",
//             "L"
//         ],
//         "color": [
//             "white",
//             "yellow"
//         ],
//         "price": 3190,
//         "inStock": "true"
//     },
//     {
//         "title": "Olive Green Jacket",
//         "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//         "img": "https://media.istockphoto.com/photos/unzipped-olive-jacket-picture-id697909784?k=20&m=697909784&s=612x612&w=0&h=ndJgVwsJ5SUIsiv1qycMB5Gs70jaqkdwzmU-dUECrDA=",
//         "categories": [
//             "jacket",
//             "man"
//         ],
//         "size": [
//             "S",
//             "M"
//         ],
//         "color": [
//             "green",
//             "black"
//         ],
//         "price": 2510,
//         "inStock": "true"
//     }
// ]

//  const sendData = async () => {
//    const response = await fetch("http://localhost:8000/api/products", {
//      method: "POST",
//      mode: "cors", // no-cors, *cors, same-origin
//      headers: {
//        "Content-Type": "application/json",
//      },
//      body: data,
//    });
//    console.log(response.json());
//  };

// sendData();
