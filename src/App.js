
import { useState } from 'react';
import './App.css';
import Creatediv from './Creatediv';

function App() {
  
  const [data, setData] = useState([]) 
  const [val, setVal] = useState("")
  let t = Math.floor ( Math.random() * 1000 )
  const handleSubmit = (e) => {
    e.preventDefault();
    if(val)
    {setData([...data,val])}
    document.querySelector("input").value=""
    setVal("")

  }

 console.log(data);
  return (
    <div className="App">
      <input type="text" onChange={(ev) => setVal(ev.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>

      {
        <div>
          {
            data.map((eke,ind)=>(
              <Creatediv key={ind} eke={eke} 
              setData={setData}
              data={data}
              />
              // <div className="to_do" key={ind}>
              //   {eke}
              // </div>
            ))
          }
        </div>
      }

    </div>
  )
  

  // const [textarea, setTextarea] = useState()
  // const [data,setData]  = useState([])
  // const handleChange = (event) => {
  //   event.preventDefault();
  //   setTextarea(event.target.value)
  // }
  // const handleSubmit = (event) =>
  // {
  //   event.preventDefault()
  //   // console.log(event.target.value)
  //   setData([...data,textarea])
  // }
  // console.log(data)
  // return (
  //   <div className="App">
  //     <label>
  //     Essay:
  //     <textarea value={textarea} onChange={handleChange} />
  //     </label>
  //     <button onClick={handleSubmit}>Submit</button>
  //     {
  //       data && data.map((ele) => {
  //         <div>
  //           {console.log(ele)}
  //         </div>
  //       })
  //     }  
  //   </div>
  // );

}

export default App;
