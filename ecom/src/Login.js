import React,{useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { Form,Container,Row,Col,Button} from 'react-bootstrap';


function Login()
{
    

    const navigate=useNavigate()

   
    const [email,setEmail]=useState();
    const [password,setPassword]=useState("");
    
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            navigate('/add')
        }

    },[])
    
   
    async function signin()
    {
        let data={email,password}
        console.log(data)
        let result=await fetch("http://localhost/react/ecom_laravel/public/api/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(data) 
        })
        result=await result.json();
        console.log(result);
        if (result.success==true)

        {
            localStorage.setItem("user-info",JSON.stringify(result.data));
            navigate('/add')
        }
        else 
        {
            alert(result.message);

        }
        
        
    }
    return(
        <div>
            <Container fluid="md">
        
            <h1 style={{ textAlign: 'center', color: 'black' }} className="mt-3 mb-3">Register</h1>
            <Form>
                
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>
                </Row>


                

                <Button variant="primary" onClick={signin}>
                    Submit
                </Button>
                </Form>

            
            </Container>
        </div>
    )
}
export default Login