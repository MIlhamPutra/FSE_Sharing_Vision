import React, { Component } from 'react'
import { CContainer, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CButton, CButtonGroup } from '@coreui/react';
import CartPosts from './cartPosts'
import API from '../axios/Api'
import { Link } from 'react-router-dom'

export default class Published extends Component {

    state={
        posts:[]
    }

    async componentDidMount(){
        await API.get('article/publish')
        .then(response=>this.setState({
            posts:response.data
        }))

        console.log(this.state)
    }

    render() {

        const renderData= this.state.posts.map(posts=>{
            return (
                <CartPosts posts={posts} key={posts.id}/>
            )
        })

        return (
            <>
                <CContainer>
                    <CButtonGroup role="group" aria-label="Basic outlined example">
                        <Link to='/'>
                            <CButton color="primary" variant="outline">
                                All Posts
                            </CButton>
                        </Link>
                        <Link to='published'>
                            <CButton color="primary" variant="outline" active>
                                Published
                            </CButton>
                        </Link>
                        <Link to='draft'>
                            <CButton color="primary" variant="outline">
                                Drafts
                            </CButton>
                        </Link>
                        <Link to='trash'>
                            <CButton color="primary" variant="outline">
                                Trashed
                            </CButton>
                        </Link>
                    </CButtonGroup>
                </CContainer>
                <CContainer>
                    <CTable bordered>
                        <CTableHead style={{background:'PowderBlue'}}>
                            <CTableRow>
                                <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {renderData}
                        </CTableBody>
                    </CTable>
                </CContainer>
            </>
        )
    }
}