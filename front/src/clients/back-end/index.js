import { makeRequest } from '../../utils/api';

const url = 'http://localhost:8181'

export const getAllProducts = () => {
  const uri = `${url}/products/all`;
  return makeRequest(uri, '', 'GET');
};

export const getProductByName = (name) => {
  const uri = `${url}/products/${name}`;
  return makeRequest(uri, '', 'GET');
};

export const deleteProductByName = (name) => {
  const uri = `${url}/products/${name}`;
  return makeRequest(uri, '', 'DELETE');
};

export const createProduct = (obj) => {
  const uri = `${url}/products`;
  return makeRequest(uri, '', 'POST', obj);
};

export const editProduct = (name, obj) => {
  const uri = `${url}/products/${name}`;
  return makeRequest(uri, '', 'PUT', obj);
};
