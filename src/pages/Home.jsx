import React, { useState, useRef} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import img1 from '../Assets/libraryImg.png';
import "../index.css";
import Table1 from "../components/Table1";
import Lottie from "react-lottie";
import book from "../Assets/fallingBooks.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// export const Data = createContext();

const Home = () => {
  const notify = () => toast.success("Your Book is Added Successfuly..!",
    { position: toast.POSITION.BOTTOM_RIGHT });
  // const notify1 = () => toast.danger("Please Fill the input first..!",
  // {position: toast.POSITION.BOTTOM_RIGHT});
  // for input filed useRef is used to prevent/avoid each type word renders the component

  const bookName = useRef("");
  const author = useRef("");
  const Historical = useRef("Historical");
  const Coding = useRef("Coding ");
  const Cooking = useRef("Cooking");
  let type = "";

  // const [bookName, setBookName] = useState("");
  // const [author, setAuthor] = useState("");
  // const [type1, setType1] = useState("");

  if (JSON.parse(localStorage.getItem('data')) == null) {
    //check if data exists
    console.log('Local storage is empty brother')
    localStorage.setItem('data', JSON.stringify([]))
  } else {
    //if not put atleast [] empty array
    console.log('Local storage has some data brother');
  }

  const [store, setStore] = useState(JSON.parse(localStorage.getItem('data')));
  // useState is used only once because it will update/render the page componnent after submit

  const submitted = (e) => {
    e.preventDefault();
    if (Cooking.current.checked) {
      type = "Historical";
    } else if (Coding.current.checked) {
      type = "Coding";
    } else {
      type = "Cooking";
    }
    setStore([...store, {
      bookName: bookName.current.value,
      author: author.current.value,
      type: type
    }])
    localStorage.setItem('data', JSON.stringify([...JSON.parse(localStorage.getItem('data')), {
      bookName: bookName.current.value,
      author: author.current.value,
      type: type
    }]))
    e.target.reset();
    notify();
  };
  // console.log(store);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: book,
    rendererSetting: {
      PreserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <h2 className="text-center text-secondary">PrepBytes Library</h2>
      <hr />
      <div className="container w-100 media">
        <Form className="w-75" onSubmit={submitted}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" required placeholder="Harry potter" ref={bookName}
            // onChange={(e)={setBookName(e.target.value)}}
            />
            <Form.Text className="text-muted">
              We'll never share your book with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" required placeholder="J.K.Rowling" ref={author}
            // onChange={(e)={setAuthor(e.target.value)}}
            />
          </Form.Group>
          <div className="btn-group">
            <input type="radio" required className="btn-check" name="options" id="option1" autoComplete="off" ref={Historical} />
            <label className="btn btn-secondary" htmlFor="option1">Historical</label>
            <input type="radio" required className="btn-check" name="options" id="option2" autoComplete="off" ref={Coding} />
            <label className="btn btn-secondary" htmlFor="option2">Coding</label>
            <input type="radio" required className="btn-check" name="options" id="option3" autoComplete="off" ref={Cooking} />
            <label className="btn btn-secondary" htmlFor="option3">Cooking</label>
          </div>
          <br />
          <br />
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
        {/* <img className="image1"src={img1} alt="img1" /> */}
        <Lottie options={defaultOptions} height={320} width={320} />
        <ToastContainer />
      </div>
      <div className="container mt-5">
        <Table1 data={store} />
      </div>
    </div>
  );
};

export default Home;