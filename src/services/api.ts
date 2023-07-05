import { CategoryQuery, ProductID } from '../types';

export async function getCategories() {
  // Implemente aqui
  const URL_CATEGORIES = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL_CATEGORIES);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery({
  categoryId, query }:CategoryQuery) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const URL_QUERY = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(URL_QUERY);
  const data = await response.json();
  return data;
}

export async function getProductById({ productId }: ProductID) {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
  const URL_PRODUCT = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(URL_PRODUCT);
  const data = await response.json();
  return data;
}

export async function getProductsFromTerm(term: string) {
  const API_URL = `https://api.mercadolibre.com/sites/MLB/search?q=${term}`;
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}
