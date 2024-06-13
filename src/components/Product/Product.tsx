import { HTMLAttributes } from "react";
import {
  Wrapper,
  ProductImg,
  ProductName,
  ProductPrice,
  ProductFooter,
  ProductInfo,
} from "./Product.style";
import { ProductItem } from "@/types";
import { CartIconSVG } from "@/assets/svg";
import { Button, ProductQuantity } from "@/components";
import { useMutationCartItem } from "@/hooks";

interface ProductProps extends HTMLAttributes<HTMLDivElement> {
  product: ProductItem;
}

const Product = ({ product, ...props }: ProductProps) => {
  const { handleClickAddCartItem } = useMutationCartItem();

  return (
    <Wrapper {...props}>
      <ProductImg src={product.imageUrl}></ProductImg>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
        <ProductFooter>
          {product.quantity ? (
            <ProductQuantity quantity={product.quantity} cartItemId={product.cartItemId} />
          ) : (
            <Button
              theme="black"
              style={{ width: "59px", height: "24px" }}
              onClick={() => handleClickAddCartItem(product.id)}
            >
              <CartIconSVG />
              <span>담기</span>
            </Button>
          )}
        </ProductFooter>
      </ProductInfo>
    </Wrapper>
  );
};

export default Product;
