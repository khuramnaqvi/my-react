import {Form,Row,Col,Button} from "react-bootstrap";
import  {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
function    Register() {
    const navigate=useNavigate()

 useEffect(()=>{
    if (localStorage.getItem('user-info'))
    {
        navigate('/add')
    }
},[])

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
async  function sinup()
{
let item= { name,email,password}

    let result=await fetch('http://localhost/react/ecom_laravel/public/api/register',{
method:'POST',
        body:JSON.stringify(item),
        headers:{
'content-Type':'application/json',
'Accept':'application/json',
        }
    })



    result=await result.json();
    
        localStorage.setItem('user-info',JSON.stringify(result))
        navigate('/add');
    





}
    return (
        <div className='col-lg-12'>
            <h1 className='mt-5'>REGISTER</h1>

        <Form className='col-lg-6 m-auto mt-5'>

            <Form.Group as={Row}  className="mb-3 m-0" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Name
                </Form.Label>
                <Col sm="10">
                    <Form.Control value={name} placeholder='name' onChange={(e)=>setName(e.target.value)} type='text' required  defaultValue="email@example.com" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}  className="mb-3 m-0" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} type='email'  defaultValue="email@example.com" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}   className="mb-3 m-0" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            <input type="button" onClick={sinup} className='btn btn-success' value='submit'/>
        </Form>
        </div>
    );
}

export default Register