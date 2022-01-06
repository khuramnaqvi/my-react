import { Navbar, Container,Offcanvas,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap'
import { Link ,useNavigate} from 'react-router-dom'
function Header() {
    const navigate=useNavigate();
    function logout(){
        localStorage.clear();
     navigate('/login');
    }

    return (
        <div>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {
                                localStorage.getItem('user-info')?
                                <>
                                <Link to="/">Home</Link>
                                <Link to="/add">Add</Link>

                                <p onClick={logout}>Log Out</p>


                                </>
                                :
                                <>
                                <Link to="/login">Log in</Link>
                                <Link to="/register">Register</Link>

                                </>
                                }
                                
                                
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header