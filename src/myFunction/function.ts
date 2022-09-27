import type { Product } from "@/types/types";

export const includeProd = (products:Product[], favProd:Product) => {
  return products.some((item:Product) => item.id === favProd.id);
}

export const isLiked = (products:Product[], liked:Product) => {
  if(includeProd(products, liked)) {
    return '/src/assets/images/heart.png'
  } else {
    return '/src/assets/images/Vector(Stroke).svg'
  }
}

export const goToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
    });
  }