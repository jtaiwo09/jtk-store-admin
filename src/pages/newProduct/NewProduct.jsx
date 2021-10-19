import React, { useState } from 'react';
import './newProduct.scss';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addProduct } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';
import app from '../../firebase';
import { notification } from 'antd';
import 'antd/dist/antd.css';

const NewProduct = () => {
    const [input, setInput] = useState({})
    const [file, setFile] = useState(null)
    const [cat, setCat] = useState([]);
    const [color, setColor] = useState([]);
    const [size, setSize] = useState([]);
    const dispatch = useDispatch()

    const handleChange =(e)=> {
        setInput(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleCat =(e)=> {
        const cat = e.target.value.split(',')
        setCat(cat)
    }
    const handleColor =(e)=> {
        const color = e.target.value.split(',')
        setColor(color)
    }
    const handleSize =(e)=> {
        const size = e.target.value.split(',')
        setSize(size)
    }

    const handleClick = async (e)=> {
        e.preventDefault();
        const fileName = new Date().getTime() + file.name
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
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
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                const product = { ...input, img: downloadURL, categories: cat, color, size }
                addProduct(product, dispatch);
                notification['success']({
                    message: `${input.title} item has been created`,
                });
            });
        }
        );
    }

    return (
        <div className='newProduct'>
            <h1 className="newProductTitle">New Product</h1>
            <form className="newProductForm">
                <div className="newProductItem">
                    <label>Image</label>
                    <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
                </div>
                <div className="newProductItem">
                    <label>Title</label>
                    <input type="text" name='title' placeholder='Product Name' onChange={handleChange}/>
                </div>
                <div className="newProductItem">
                    <label>Decription</label>
                    <input type="text" name='desc' placeholder='Decription...' onChange={handleChange}/>
                </div>
                <div className="newProductItem">
                    <label>Price</label>
                    <input type="text" name='price' placeholder='Price...' onChange={handleChange}/>
                </div>
                <div className="newProductItem">
                    <label>Size</label>
                    <input type="text" name='size' placeholder='24, 36' onChange={handleCat}/>
                </div>
                <div className="newProductItem">
                    <label>Color</label>
                    <input type="text" name='color' placeholder='red, yellow, blue' onChange={handleColor}/>
                </div>
                <div className="newProductItem">
                    <label>Categories</label>
                    <input type="text" name='cat' placeholder='Jean, Skirt' onChange={handleSize}/>
                </div>
                <div className="newProductItem">
                    <label>Stock</label>
                    <select name='inStock' onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <button onClick={handleClick} className='newProductButton'>Create</button>
            </form>
        </div>
    )
}

export default NewProduct
