import Table from "react-bootstrap/Table";
// import { useContext} from "react";
// import {Data} from '../pages/Home';
function Table1({data}) {
  // const newData = useContext(Data);
 // console.log(data);

 const deleteRow = (e) =>{
  // e.target.parentNode.parentNode.remove();
  const rowIndex = e.target.parentNode.parentNode.rowIndex;
  console.log(rowIndex-1);
  let tbody = document.getElementsByTagName('tbody')[0];
  tbody.deleteRow(rowIndex-1);//js method to delete row
  let store = data;
  store.splice(rowIndex-1,1);
  console.log(store);
  localStorage.setItem('data',JSON.stringify(store))
 }
 
//  const editRow = (e) =>{
//  let editData = e.target.parentNode.parentNode;
//  }

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Book Name</th>
          <th>Author Name</th>
          <th>Username</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((val,i)=>{
          return (
            <tr key={i}>
          <td>{i+1}</td>
          <td>{val.bookName}</td>
          <td>{val.author}</td>
          <td>{val.type}</td>
          <td className="change">
          {/* <i className="fa-solid fa-pen-to-square" onClick={(e)=>{editRow(e)}} ></i> */}
          <i className="fa-solid fa-trash" onClick={(e)=>{deleteRow(e)}}></i></td>
        </tr>
          )
        })}
      </tbody>
    </Table>
  );
}

export default Table1;
