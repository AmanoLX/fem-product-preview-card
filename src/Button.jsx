import { AiOutlineShoppingCart } from 'react-icons/ai';

const Button = () => {
  return (
    <button type="button" className="btn">
      <AiOutlineShoppingCart className="btn-icon" />
      Add to Cart
    </button>
  );
};
export default Button;
