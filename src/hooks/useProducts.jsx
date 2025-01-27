import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewProduct, getProducts as fetchProducts } from '../api/firevase';

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({
    queryKey:['products'],
    queryFn: fetchProducts
  });

  const addProduct = useMutation({
    mutationFn: ({product, url}) => addNewProduct(product,url),
    onSuccess: async() => await queryClient.invalidateQueries({
      queryKey:['products'],
      refetchType:'all',
    }),
  });

  return { productsQuery, addProduct };
}