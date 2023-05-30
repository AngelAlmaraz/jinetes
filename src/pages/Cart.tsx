import { getUser } from "../services/auth";

const Cart = () => {
  const user = getUser();
  console.log(user);

  if (!user) return <>Error</>;
  return <>yes</>;
};

export default Cart;
