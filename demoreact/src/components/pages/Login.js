import { useState } from "react";
import { Button, Col, Form, FormGroup, FormLabel, InputGroup, Row } from "react-bootstrap";
import api, { updateJWT } from "../../api";
import USER_ACTION from "../../redux/user/user_action";
import { connect } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import axios from "axios";

function Login(props){
    const [user,setUser] = useState({email:"",password:''});
    const handleChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const  navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const url = 'http://139.180.186.20:3003/auth/login';
            const rs = await axios.post(url,user);
            const token = rs.data.token;
            props.login(token);
            updateJWT(token);// lần sau sử dụng api sẽ được đính kèm token vào sẵn
            navigate("/");
        } catch (error) {
            alert(error.response.data.message)
        }
        
    }
    return (
        <div className="container">
            <Row>
                <Col xs={6}>
            <Form method="post" onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                    <FormLabel content="">Email</FormLabel>
                    <input name="email" onChange={handleChange} value={user.email} type="email" placeholder="email" className="form-control"/>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel content="">Password</FormLabel>
                    <input name="password"  onChange={handleChange} value={user.password} type="password" placeholder="password" className="form-control"/>
                </FormGroup>
                <FormGroup>
                <Button type="submit" className="btn btn-primary" content="">Login</Button>
                </FormGroup>
            </Form>
            </Col>
            </Row>
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return {
        login: token => { dispatch({type:USER_ACTION.LOGIN,payload: token})}
    }
    
}
export default connect(null,mapDispatchToProps)(Login);
