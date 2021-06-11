import React from 'react'
import { CTableRow, CTableHeaderCell, CTableDataCell, CButton } from '@coreui/react';
import { Link } from 'react-router-dom'

function CartPosts({ posts }) {

    return (
        <CTableRow key={posts.id} >
            <CTableHeaderCell scope="row">{posts.title}</CTableHeaderCell>
            <CTableDataCell>{posts.category}</CTableDataCell>
            <CTableDataCell>
                <Link to={'/edit/' + posts.id}>
                <CButton color="info" style={{height:30, width:45, fontSize:12}}>Edit</CButton>
                </Link>
                <Link to={'/updateToTrash/' + posts.id}>
                <CButton color="danger" style={{height:30, width:55, fontSize:12}}>Trash</CButton>
                </Link>
            </CTableDataCell>
        </CTableRow>
    )
}

export default CartPosts