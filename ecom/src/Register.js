import { Form,Container,Row,Col,Button} from 'react-bootstrap';
import  {useState,useEffect} from 'react';
import { useNavigate,Switch } from 'react-router-dom';
function    Register() {
    const navigate=useNavigate()

    const [f_name,setF_name]=useState("Syed");
    const [l_name,setL_name]=useState("Khuram");
    const [email,setEmail]=useState("anaqvi527@gmail.com");
    const [password,setPassword]=useState("");
    
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            
            navigate('/add')
        }

    },[])
    
   
    async function signup()
    {
        let data={f_name,l_name,email,password}
        console.log(data)
        let result=await fetch("http://localhost/react/ecom_laravel/public/api/register",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(data) 
        })
        result=await result.json();
        // console.log(result);
        localStorage.setItem("user-info",JSON.stringify(result));
        navigate('/add')
        
    }
    return(
        <div>
            <Container fluid="md">
        
            <h1 style={{ textAlign: 'center', color: 'black' }} className="mt-3 mb-3">Register</h1>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" value={f_name} onChange={(e)=>setF_name(e.target.value)} placeholder="Enter Firrst Name" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text"  value={l_name} onChange={(e)=>setL_name(e.target.value)} placeholder="Last Name" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>
                </Row>


                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                   

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" onClick={signup}>
                    Submit
                </Button>
                </Form>

            
            </Container>
        </div>
    );
}
export default Register