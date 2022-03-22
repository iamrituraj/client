import { useDispatch, useSelector } from "react-redux";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { addProduct, initialItem } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";

const Home = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  let data = null;

  const getCartData = async () => {
    console.log("enter", user);
    try {
      const TOKEN = `${user.currentUser.accessToken}`;
      console.log(TOKEN);
      console.log("going", user);

      const res = await publicRequest.get(`/carts/find/${user.currentUser._id}`, {
        headers: { token: `Bearer ${TOKEN}` },
      });
      data = res.data.Products;
      console.log("done", data);

      data.forEach((element, index) => {
        let temp = element.product[0];
        let quantity = element.quantity; 
         
        dispatch(addProduct({ ...temp,quantity}));
        
        console.log(element.product,element.quantity, "kl");
      });
      console.log(data.length);
      dispatch(initialItem(data.length));

    } catch (err) {
      console.log("oh no");

      console.log(err);
    }
  };
  
  // const getProduct = async (id, quantity) => {
  //   try { 
  //      console.log("get");
  //     const res = await publicRequest.get(`/products/find/${id}`);
  //     product = res.data;
  //       console.log("dispatch",product);

  //     dispatch(addProduct({ ...product, quantity ,}));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };


  if (user.currentUser !== null && cart.products.length === 0) {

    console.log("jai mata di")
        getCartData();
  }

  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
