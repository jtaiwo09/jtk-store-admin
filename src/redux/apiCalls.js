import { publicRequest, userRequest } from "../requestMethods";
import {fetchingStart, fetchingSuccess, fetchingFailure} from './userRedux';
import {getProductStart, getProductSuccess, getProductFailure} from './productRedux';
import {deleteProductStart, deleteProductSuccess, deleteProductFailure} from './productRedux';
import {updateProductStart, updateProductSuccess, updateProductFailure} from './productRedux';
import {addProductStart, addProductSuccess, addProductFailure} from './productRedux';
import {getUserStart, getUserSuccess, getUserFailure, deleteUserSuccess, deleteUserStart, deleteUserFailure} from './cUserRedux';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const login = async (dispatch, user)=> {
    dispatch(fetchingStart);
    try {
        const res = await publicRequest.post('/auth/login', user)
        if(res.data.isAdmin){
            dispatch(fetchingSuccess(res.data))
            cookies.set('accessToken', res.data.accessToken)
            cookies.set('isAdmin', res.data.isAdmin);
            window.location.href='/'
        } else {
            dispatch(fetchingFailure('You are not authorised to login'));
        }
        
        
    } catch (error) {
        dispatch(fetchingFailure(error.response.data.error));
    }
}

const getProducts = async (dispatch)=> {
    dispatch(getProductStart);
    try {
        const res = await publicRequest.get('/products')
        dispatch(getProductSuccess(res.data))
        
    } catch (error) {
        dispatch(getProductFailure());
    }
}

const deleteProduct = async (id, dispatch)=> {
    dispatch(deleteProductStart);
    try {
        // const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
        
    } catch (error) {
        dispatch(deleteProductFailure());
    }
}

const updateProduct = async (id, product, dispatch)=> {
    dispatch(updateProductStart);
    try {
        const res = await userRequest.put(`/products/${id}`, product)
        dispatch(updateProductSuccess({id, product: res.data}))
        
    } catch (error) {
        dispatch(updateProductFailure());
    }
}

const addProduct = async (product, dispatch)=> {
    dispatch(addProductStart);
    try {
        const res = await userRequest.post('/products', product)
        dispatch(addProductSuccess(res.data))
        
    } catch (error) {
        dispatch(addProductFailure());
    }
}

//GET Users
const getUsers = async (dispatch)=> {
    dispatch(getUserStart);
    try {
        const res = await userRequest.get('/user')
        dispatch(getUserSuccess(res.data))
        
    } catch (error) {
        dispatch(getUserFailure());
    }
}

const deleteUser = async (id, dispatch)=> {
    dispatch(deleteUserStart);
    try {
        // const res = await userRequest.delete(`/users/${id}`)
        dispatch(deleteUserSuccess(id))
        
    } catch (error) {
        dispatch(deleteUserFailure());
    }
}

export { login, getProducts, deleteProduct, updateProduct, addProduct, getUsers, deleteUser }