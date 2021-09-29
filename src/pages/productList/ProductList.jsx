import React, { useState } from 'react';
import './productList.scss';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from '../../data';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id ))
  }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params)=> (
          <div className='productListItem'>
            <img className='productListImg' src={params.row.img} alt="" />
            {params.row.name}
          </div>
        ) },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
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
              <Link to={'/product/'+params.row.id} >
                <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutlineIcon onClick={()=> handleDelete(params.row.id)} className='productListDelete' />
            </>
          )
        }
      ];
    return (
        <div className='productList'>
            <DataGrid
                rows={data}
                columns={columns}
                disableSelectionOnClick
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
            />
        </div>
    )
}

export default ProductList
