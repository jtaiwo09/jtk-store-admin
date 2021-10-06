import React, { useEffect, useMemo, useState } from 'react';
import './product.scss';
import {Link} from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import PublishIcon from '@mui/icons-material/Publish';
import {useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRequest } from '../../requestMethods';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import app from '../../firebase';
import { updateProduct } from '../../redux/apiCalls';

const Product = () => {
    const location = useLocation();
    const productId = location.pathname.split('/')[2];
    const [pStats, setPStats] = useState([])
    const product = useSelector(state => state.product?.products.find(item => item._id === productId));
    const [input, setInput] = useState({})
    const [file, setFile] = useState(null)
    const [arr, setArr] = useState({})
    const dispatch = useDispatch();
    const image = useSelector(state => state.product.products.find(item=> item._id === productId).img.split('/')[7].split('?')[0]);

    const handleChange =(e)=> {
        setInput(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleArr =(e)=> {
        const name = e.target.name;
        setArr(prev => ({
            ...prev,
            [name]: e.target.value.split(',')
        }))
    }

    const handleClick = async (e)=> {
        e.preventDefault();
        if(file){
            const fileName = new Date().getTime() + file.name;
            const storage = getStorage(app);
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            const selectedImage = ref(storage, image);
            
            uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                default: return;
                }
            }, 
            (error) => {}, 
            () => {
                selectedImage && deleteObject(selectedImage)
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const product = { ...input, img: downloadURL, categories: arr.cat, color: arr.color, size: arr.size }
                    updateProduct(productId, product, dispatch);
                });
            }
            );
        } else {
            const product = { ...input, categories: arr.cat, color: arr.color, size: arr.size }
            updateProduct(productId, product, dispatch);
        }
    }

    const MONTHS = useMemo(()=>
        [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],[])

    useEffect(()=> {
        const getStats = async ()=> {
            try {
                const res = await userRequest.get(`/orders/income?pid=${productId}`);
                const list = res.data.sort((a, b)=> a._id - b._id);
                list.map(item => 
                    setPStats(prev => [
                        ...prev,
                        { name: MONTHS[item._id - 1], Sales: item.total },
                    ])
                )
                
            } catch (error) {
                console.log(error.response.data)
            }
        }
        getStats()
    },[MONTHS, productId]);

    useEffect(()=> {
        const { title, desc, price, color, size, inStock, categories} = product;
        setInput({title, desc, price, inStock})
        setArr({color, size, cat: categories})
    },[product])

    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to='/newproduct'>
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={pStats} dataKey='Sales' title='Sales Performance'/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={product.img} alt="" className="productInfoImg" />
                        <span className="productName">{product.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{product._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">500</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">{product.inStock}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" name='title' value={input.title} onChange={handleChange} />
                        <label>Product Description</label>
                        <input type="text" name='desc' value={input.desc} onChange={handleChange} />
                        <label>Price</label>
                        <input type="text" name='price' value={input.price} onChange={handleChange} />
                        <label>Color</label>
                        <input type="text" name='color' value={arr.color?.join(',')} onChange={handleArr} />
                        <label>Size</label>
                        <input type="text" name='size' value={arr.size?.join(',')} onChange={handleArr} />
                        <label>Categories</label>
                        <input type="text" name='cat' value={arr?.cat?.join(',')} onChange={handleArr} />
                        <label>In Stock</label>
                        <select name="inStock" onChange={handleChange}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={product?.img} alt="" className="productUploadImg" />
                            <label htmlFor="file">
                                <PublishIcon className='productUploadIcon' />
                            </label>
                            <input onChange={e=> setFile(e.target.files[0])} type="file" id='file' style={{display:'none'}}/>
                        </div>
                        <button className="productButton" onClick={handleClick}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
