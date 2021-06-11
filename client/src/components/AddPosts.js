import React, { Component } from 'react'
import { CContainer, CForm, CFormLabel, CFormControl } from '@coreui/react'
import API from '../axios/Api'

export default class AddPosts extends Component {

    state={
        'title':'',
        'content':'',
        'category':'',
        'status':''
    }

    handlerChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value })
    }

    handlerSubmit = async (e) =>{
        e.preventDefault()
        await API.post('article', this.state)
        this.props.history.push('/')
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h3 style={{textAlign:"center", marginBottom:30, marginTop:15}}>Add Post</h3>
                <CContainer>
                    <CForm onSubmit={this.handlerSubmit}>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Title</CFormLabel>
                            <CFormControl
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="title"
                            name="title" onChange={this.handlerChange}
                            />
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlTextarea1">
                            Content
                            </CFormLabel>
                            <CFormControl
                            component="textarea"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="content"
                            name="content" onChange={this.handlerChange}
                            ></CFormControl>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Category</CFormLabel>
                            <CFormControl
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="category"
                            name="category" onChange={this.handlerChange}
                            />
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Status</CFormLabel>
                            <CFormControl
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Draft or Publish"
                            name="status" onChange={this.handlerChange}
                            />
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td><input type="Submit" className="btn btn-primary" /></td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <div>
                        <CDropdown style={{marginTop:10}}>
                            <CDropdownToggle color="secondary">Status</CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem href="#">Draft</CDropdownItem>
                                <CDropdownItem href="#">Publish</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                        </div> */}
                    </CForm>
                </CContainer>
            </div>
        )
    }
}