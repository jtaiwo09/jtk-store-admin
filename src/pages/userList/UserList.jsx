import React, { useEffect } from 'react';
import './userList.scss';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsers } from '../../redux/apiCalls';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.cUser.users)

  console.log(users)

  useEffect(()=> {
    getUsers(dispatch)
  },[dispatch])

  const handleDelete = (id) => {
    deleteUser(id, dispatch)
  }
    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params)=> (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        ) },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'isAdmin',
          headerName: 'isAdmin',
          width: 200,
        },
        // {
        //   field: 'transaction',
        //   headerName: 'Transaction Volume',
        //   width: 160,
        // },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params)=> (
            <>
              <Link to={'/user/'+params.row._id} >
                <button className="userListEdit">Edit</button>
              </Link>
              <DeleteOutlineIcon onClick={()=> handleDelete(params.row._id)} className='userListDelete' />
            </>
          )
        }
      ];
      
    return (
        <div className='userList'>
            <DataGrid
                rows={users}
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

export default UserList
