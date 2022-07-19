import { useContext } from "react";
import { Navbar, Container, Offcanvas, Nav, Form, Button } from "react-bootstrap";
import { ElementsContext } from "../ElementsContext";
import "./style.css";

const Header = ({ randomizeArray }) => {
  const { arraySize, setArraySize, algorithm, setAlgorithm } = useContext(ElementsContext);
  const sortingAlgorithms = ["Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort"];
  const size = ["5", "10", "25", "50", "75", "100"];
  return (
    <Navbar expand="md" className="mb-3" variant="dark">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <img alt="Logo" src="images/Logo.png" width="50" height="50" className="d-inline-block" />
          <div className="mx-3 font-monospace">SortOut</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className="menu-button" />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} className="text-black">
              SortOut
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Form.Select
                aria-label="Algorithm Type"
                bsPrefix="menu-header"
                className="bg-transparent text-white text-opacity-75 mx-2 algo-dropdown"
                value={algorithm}
                onChange={(e) => setAlgorithm(e.target.value)}
              >
                <option selected disabled className="text-white text-opacity-75">
                  Sort Algorithm
                </option>
                {sortingAlgorithms.map((ele, index) => (
                  <option value={ele} key={index} className="text-black">
                    {ele}
                  </option>
                ))}
              </Form.Select>
              <div className="menu-placeholder">
                <span className="text-white text-opacity-75">Size</span>
                <Form.Select
                  aria-label="Algorithm Type"
                  bsPrefix="menu-header"
                  className="bg-transparent text-white text-opacity-75 mx-2"
                  value={arraySize}
                  onChange={(e) => setArraySize(parseInt(e.target.value))}
                >
                  {size.map((ele, index) => (
                    <option value={ele} key={index} className="text-black">
                      {ele}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <Button
                variant="plain"
                className="menu-button shadow-none text-white text-opacity-75"
                onClick={() => randomizeArray()}
              >
                Randomize
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
