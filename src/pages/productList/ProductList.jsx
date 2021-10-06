import React, { useEffect } from 'react';
import './productList.scss';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../../redux/apiCalls';

const ProductList = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.product)

    useEffect(()=> {
      getProducts(dispatch)
    },[dispatch])


  const handleDelete = (id) => {
    deleteProduct(id, dispatch)
  }
    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params)=> (
          <div className='productListItem'>
            <img className='productListImg' src={params.row.img} alt="" />
            {params.row.title}
          </div>
        ) },
        { field: 'inStock', headerName: 'Stock', width: 200 },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params)=> (
            <>
              <Link to={'/product/'+params.row._id} >
                <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutlineIcon onClick={()=> handleDelete(params.row._id)} className='productListDelete' />
            </>
          )
        }
      ];
    return (
        <div className='productList'>
            <DataGrid
                rows={products}
                columns={columns}
                getRowId={row=> row._id}
                disableSelectionOnClick
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
            />
        </div>
    )
}

export default ProductList
