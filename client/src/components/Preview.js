import { CCard, CCardBody, CCardText, CCardHeader, CContainer, CPagination, CPaginationItem } from '@coreui/react'
import React, { Component } from 'react'
import API from '../axios/Api'

export default class AddPosts extends Component {

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

        return (
            <div>
                {
                    this.state.posts.map(posts=>{
                        return (
                            <CContainer style={{marginTop:30, marginBottom:30}}>
                                <CCard>
                                    <CCardBody>
                                        <CCardHeader component="h5">{posts.title}</CCardHeader>
                                        <CCardText>Category : {posts.category}</CCardText>
                                        <CCardText >{posts.content}
                                        </CCardText>
                                    </CCardBody>
                                </CCard>
                            </CContainer>
                        )
                    })
                }
                <CContainer>
                    <CPagination aria-label="Page navigation example">
                        <CPaginationItem aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </CPaginationItem>
                        <CPaginationItem>1</CPaginationItem>
                        <CPaginationItem>2</CPaginationItem>
                        <CPaginationItem>3</CPaginationItem>
                        <CPaginationItem aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </CPaginationItem>
                    </CPagination>
                </CContainer>
            </div>
        )
    }
}