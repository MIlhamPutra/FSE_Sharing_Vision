import React, { Component } from 'react'
import { CContainer, CForm } from '@coreui/react'
import API from '../axios/Api'
import { Link } from 'react-router-dom'

export class UpdateToTrash extends Component {

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
        await API.put('article/updateToTrash?Id='+id, this.state)
        this.props.history.push('/trash')
    }

    render() {

        return (
            <div>
                <h3 style={{textAlign:"center", marginBottom:30, marginTop:40}}>Confirm Move Post To Trash</h3>
                <CContainer>
                    <CForm onSubmit={this.handlerSubmit}>
                        <table>
                            <thead>
                                <th>Are you sure?</th>
                            </thead>
                            <tbody>
                                <row>
                                    <Link to='/'>
                                    <td></td>
                                    <td><input value="cancel" className="btn btn-primary" style={{width:80}}/></td>
                                    </Link>
                                </row>
                                <row>
                                    <td></td>
                                    <td><input type="Submit" className="btn btn-primary" /></td>
                                </row>
                            </tbody>
                        </table>
                    </CForm>
                </CContainer>
            </div>
        )
    }
}

export default UpdateToTrash