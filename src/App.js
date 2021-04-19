// import { Quarter } from './component/Quarter';
import React, { useState  } from 'react';
// import { BrowserRouter ,Route, Switch} from 'react-router-dom'
// import Valid from './component/Valid'
function App() {

  // const [errror, setError]=useState(false)
  const [get] = useState([]);
  const [put, setPut] = useState(
    {
      firstName: '',
      lastName: '',
      height: '',
      select: ''
    }
  )

  const handleChange = (event) => {

    // debugger
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name, 'fsdfgd');
    setPut({ ...put, [name]: value })
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let height = document.getElementById("height").value;


    if (firstName === "") {
      document.getElementById("error").innerHTML = "**please enter your name";
      return true;
    }
    else {
      document.getElementById('error').innerHTML = ''
    }
    // if ((firstName.length <= 2) || (firstName.length > 7)) {
    //      document.getElementById("error").innerHTML = "**username must be between 2 and 7";
    //      return false;
    // }

    if (!isNaN(firstName)) {
      document.getElementById("error").innerHTML = "**username must be a characters ";
      return false;
    }


    if (lastName === "") {
      document.getElementById("error1").innerHTML = "**please enter the password";
      return false;
    }
    else {
      document.getElementById('error1').innerHTML = ''
    }


    if (isNaN(height)) {
      document.getElementById("error2").innerHTML = "**please enter digit and not character";
      return false;
    }
    if (height === "") {
      document.getElementById("error2").innerHTML = "**please enter number";
      return false;
    }
    else {
      document.getElementById('error2').innerHTML = ''
    }


    console.log(put, 'sahdsahd');
  }
  const handleTask = (e) => {
    e.preventDefault();
    // debugger;
    get.push(put)
    // console.log(get);
    setPut({ firstName: '', lastName: '', height: '', select: '' })
    console.log(get, 'hjfdgfd');
    let obj = JSON.stringify(get);
    localStorage.setItem('get', obj);
    var storage = JSON.parse(localStorage.getItem('obj'))
    console.log(storage);
    
  }
  const [data, setData] = useState(
    {
      name: '',
      position: ''
    }
  );
 
  const handleData = (e) => {
    e.preventDefault();
    const { name, value } = e.target
  
    setData({ ...data, [name]: value })
    let name1 = document.getElementById('val1').value;
    let name2 = document.getElementById('val2').value;
    let name3 = document.getElementById('val3').value;
    let name4 = document.getElementById('val4').value;
    let name5 = document.getElementById('val5').value;
    let temp1 = document.getElementById('pos1').value;
    let temp2 = document.getElementById('pos2').value;
    let temp3 = document.getElementById('pos3').value;
    let temp4 = document.getElementById('pos4').value;
    let temp5 = document.getElementById('pos5').value;

    
    
    if (name1 === name2 ) {
      document.getElementById('err3').innerHTML = '**User Already exist';
      
    }
    else {
      document.getElementById('err3').innerHTML = '';
      return false
    }
    if (name2 === name3) {
      document.getElementById('err5').innerHTML = '**User Already exist';
    }
    else {
      document.getElementById('err5').innerHTML = '';
      return false
    }
    if (name3 === name4) {
      document.getElementById('err7').innerHTML = '**User Already exist';
      return false
    }
    else {
      document.getElementById('err7').innerHTML = '';
    }
    if (name4 === name5) {
      document.getElementById('err9').innerHTML = '**User Already exist';
     
    }
    else {
      document.getElementById('err9').innerHTML = '';
     return false
    }

    //Position-----

    if(temp1 === temp2 ){
      document.getElementById('err4').innerHTML='**This Position is already exist';
    }
    else{
      document.getElementById('err4').innerHTML='';
      return false
     
    }
    if(temp2 === temp3){
      document.getElementById('err6').innerHTML='**This Position is already exist'
    }else{
      document.getElementById('err6').innerHTML='';
      return false
    }
    if(temp4 === temp5){
      document.getElementById('err8').innerHTML='**This Position is already exist'
    }else{
      document.getElementById('err8').innerHTML='';
      return false
    }
    if(temp5 === temp1){
      document.getElementById('err10').innerHTML='**This Position is already exist'
    }else{
      document.getElementById('err10').innerHTML='';
      return false
    }
   

 

  }
  
    //--Validation for position---

  const [push] = useState([])
  const handleAr = (e) => {
    e.preventDefault();
    push.push(data)
    console.log(push);

  }
  return (
    <div>
      <form>
        <h2 className="text-primary text-center">ComposeTeam</h2>
        <input type='text' placeholder='First Name' className='form-control col-sm-8' onChange={handleChange} name='firstName' value={put.firstName} id="fname" /><br />
        <span id="error" class="text-danger font-weight-bold"></span>
        <input type='text' placeholder='Last Name' className='form-control  col-sm-8' onChange={handleChange} name='lastName' value={put.lastName} id="lname" /><br />
        <span id="error1" class="text-danger font-weight-bold"></span>
        <input type='number' placeholder='Height' className='form-control  col-sm-8' onChange={handleChange} name='height' value={put.height} min='1' max='100' id="height" /><br />
        <span id="error2" class="text-danger font-weight-bold"></span>
        <select onChange={handleChange} value={put.select} name='select' className='form-control col-sm-8' id="position">
          <option>--Select--</option>
          <option >Point Guard(PG)</option>
          <option>Shooting Guard(SG)</option>
          <option>Small Forward(SF)</option>
          <option>Power Forward(PF)</option>
          <option>Center(C)</option>
        </select>
        <span id="error3" class="text-danger font-weight-bold"></span>
        <button className='btn btn-primary' onClick={handleTask} >Save</button>
      </form>
      <div>
        <div >
          <form id='dform'>
            <h2 className="text-success  text-center">First Quarter</h2>
            <div>
              <select className='form-control col-sm-4 ' onChange={handleData} value={data.Select1} name='name' id="val1" >
                <option>--Select Player--</option>
                {
                  get && get.map(p => {
                    return (
                      <>
                        <option disabled={() => { }}>{p.firstName}{p.lastName}</option>
                      </>
                    )
                  })
                }
              </select>
              <span id="err1" className='text-danger'></span>

              <select className='form-control  col-sm-4' onChange={handleData} value={data.Select2} name='position' id="pos1">
                <option>--Select Position--</option>
                {
                  get && get.map(p => {
                    return (
                      <>
                        <option >{p.select}</option>
                      </>
                    )
                  })
                }
              </select>
              <span id="err2" className='text-danger'></span>
              <select className='form-control col-sm-4 ' onChange={handleData} value={data.Select1} name='name' id="val2" >
                <option>--Select Player--</option>
                {
                  get && get.map(p => {
                    return (
                      <>
                        <option>{p.firstName}{p.lastName}</option>
                      </>
                    )
                  })
                }
              </select>
              <span id="err3" className='text-danger'></span>
              <select className='form-control  col-sm-4' onChange={handleData} value={data.Select2} name='position' id="pos2" >
                <option>--Select Position--</option>
                {
                  get && get.map(p => {
                    return (
                      <option >{p.select}</option>
                    )
                  })
                }
              </select>
              <span id="err4" className='text-danger'></span>
              <select className='form-control col-sm-4 ' onChange={handleData} value={data.Select1} name='name' id="val3" >
                <option>--Select Player--</option>
                {
                  get && get.map(p => {
                    return (
                      <>
                        <option>{p.firstName}{p.lastName}</option>
                      </>
                    )
                  })
                }
              </select>
              <span id="err5" className='text-danger'></span>
              <select className='form-control  col-sm-4' onChange={handleData} value={data.Select2} name='position' id='pos3' >
                <option>--Select Position--</option>
                {
                  get && get.map(p => {
                    return (
                      <option >{p.select}</option>
                    )
                  })
                }
              </select>
              <span id="err6" className='text-danger'></span>
              <select className='form-control col-sm-4 ' onChange={handleData} value={data.Select1} name='name' id="val4" >
                <option>--Select Player--</option>
                {
                  get && get.map(p => {
                    return (
                      <>
                        <option>{p.firstName}{p.lastName}</option>
                      </>
                    )
                  })
                }
              </select>
              <span id="err7" className='text-danger'></span>
              <select className='form-control  col-sm-4' onChange={handleData} value={data.Select2} name='position' id="pos4">
                <option>--Select Position--</option>
                {
                  get && get.map(p => {
                    return (
                      <option >{p.select}</option>
                    )
                  })
                }
              </select>
              <span id="err8" className='text-danger'></span>
              <select className='form-control col-sm-4 ' onChange={handleData} value={data.Select1} name='name' id="val5" >
                <option>--Select Player--</option>
                {
                  get && get.map(p => {
                    return (
                      <>
                        <option disabled={() => { }}>{p.firstName}{p.lastName}</option>
                      </>
                    )
                  })
                }
              </select>
              <span id="err9" className='text-danger'></span>
              <select className='form-control  col-sm-4' onChange={handleData} value={data.Select2} name='position' id="pos5">
                <option>--Select Position--</option>
                {
                  get && get.map(p => {
                    return (
                      <option >{p.select}</option>
                    )
                  })
                }
              </select>
              <span id="err10" className='text-danger'></span>
            </div>

            <button onClick={handleAr} >Final Data</button>

          </form>
        </div>

      </div>
    </div>
  );
}
export default App;