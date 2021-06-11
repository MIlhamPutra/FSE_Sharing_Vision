import React, { Component } from 'react'
import { CContainer, CForm, CFormLabel, CFormControl } from '@coreui/react'
import API from '../axios/Api'

export class EditPosts extends Component {

    state={
        id:'',
        title:'',
        content:'',
        category:'',
        status:''
    }

    componentDidMount= async ()=>{
        const id = this.props.match.params.id
        const res = await API.get('article?Id='+id)

        this.setState({
            id:res.data[0].id,
            title:res.data[0].title,
            content:res.data[0].content,
            category:res.data[0].category,
            status:res.data[0].status
        })

        console.log(res.data)
    }

    handlerChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value })
    }

    handlerSubmit = async (e) =>{
        e.preventDefault()
        const id = this.props.match.params.id
        await API.put('article?Id='+id, this.state)
        this.props.history.push('/')
    }

    render() {

        const {title, content, category, status} = this.state

        return (
            <div>
                <h3 style={{textAlign:"center", marginBottom:30, marginTop:15}}>Edit Post</h3>
                <CContainer>
                    <CForm onSubmit={this.handlerSubmit}>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Title</CFormLabel>
                            <CFormControl
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="title"
                            name="title" value={title} onChange={this.handlerChange}
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
                            name="content" value={content} onChange={this.handlerChange}
                            ></CFormControl>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Category</CFormLabel>
                            <CFormControl
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="category"
                            name="category" value={category} onChange={this.handlerChange}
                            />
                        </div>
                        <div className="mb-3">
                            <CFormControl
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Draft or Publish"
                            name="status" value={status} onChange={this.handlerChange}
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
                    </CForm>
                </CContainer>
            </div>
        )
    }
}

export default EditPosts