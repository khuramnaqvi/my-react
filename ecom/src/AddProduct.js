import  {useState} from 'react';
import { Form,Container,Row,Col,Button} from 'react-bootstrap';

function AddProduct()
{
    let user= JSON.parse(localStorage.getItem('user-info'));
    const [name,setName]=useState("");
    const [dis,setDis]=useState("");
    const [price,setPrice]=useState("");
    const [file,setFile]=useState("");
    async function add_product()
    {
        const formData=new FormData();
        formData.append("name",name)
        formData.append("dis",dis)
        formData.append("price",price)
        formData.append("file",file)
        let result=await fetch("http://localhost/react/ecom_laravel/public/api/add_product",{
            method:'POST',
            body:formData 
        })
        result=await result.json();
        console.log(result);
        
        
        
    }

    return(
        <div>
            <Container fluid="md">
        
            <h1 style={{ textAlign: 'center', color: 'black' }} className="mt-3 mb-3">Register</h1>
            <Form>
                
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"  value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Email" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>DIS</Form.Label>
                    <Form.Control type="text" value={dis} onChange={(e)=>setDis(e.target.value)} placeholder="Password" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Password" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>File</Form.Label>
                    <Form.Control type="file"  onChange={(e)=>setFile(e.target.files[0])} placeholder="Password" />
                    </Form.Group>
                </Row>



                

                <Button variant="primary" onClick={add_product}>
                    Submit
                </Button>
                </Form>

            
            </Container>
        </div>
    )
}
export default AddProduct