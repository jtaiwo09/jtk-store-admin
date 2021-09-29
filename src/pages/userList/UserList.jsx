import React, { useState } from 'react';
import './userList.scss';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../data';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id ))
  }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params)=> (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        ) },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 160,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params)=> (
            <>
              <Link to={'/user/'+params.row.id} >
                <button className="userListEdit">Edit</button>
              </Link>
              <DeleteOutlineIcon onClick={()=> handleDelete(params.row.id)} className='userListDelete' />
            </>
          )
        }
      ];
      
    return (
        <div className='userList'>
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

export default UserList
