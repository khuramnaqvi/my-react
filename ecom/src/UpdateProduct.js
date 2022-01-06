import { useParams,useNavigate} from 'react-router-dom'
import  {useState,useEffect} from 'react';
import { Form,Container,Row,Col,Button} from 'react-bootstrap';


function UpdateProduct()
{
    const { id } = useParams();
    const navigate=useNavigate()
    const [name,setName]=useState("");
    const [dis,setDis]=useState("");
    const [price,setPrice]=useState("");
    const [file,setFile]=useState("");

    useEffect(()=>{
       
        
        get_edit_data()
    

    },[])
    
    async function get_edit_data()
    {
        let result=await fetch("http://localhost/react/ecom_laravel/public/api/edit_product/"+id);
        result=await result.json();
        setName(result.name)
        setDis(result.dis)
        setPrice(result.price)
       
        
    }
    async function update_product()
    {
        const formData=new FormData();
        formData.append("name",name)
        formData.append("dis",dis)
        formData.append("price",price)
        formData.append("file",file)
        let result=await fetch("http://localhost/react/ecom_laravel/public/api/update_product/"+id,{
            method:'POST',
            body:formData 
        })
        result=await result.json();
        console.log(result);
        if (result.success==true)
        {
            navigate('/')
        }
        
        
        
    }
    return(
        <div>
            <Container fluid="md">
                <h1>UpdateProduct</h1>
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



                    

                    <Button variant="primary" onClick={update_product}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
export default UpdateProduct