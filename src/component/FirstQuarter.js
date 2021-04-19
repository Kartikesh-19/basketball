// import React from 'react'

// const FirstQuarter = (props) => {
//     const [data, setData] = useState(
//         {
//           name:'',
//           position:''
//         }
//       );
//       // const [error ,setError]=useState()
//       const handleData = (e) => {
//         const { name, value } = e.target
        
//           var name1=document.getElementById('val1').value;
//           var name2=document.getElementById('val2').value;
        
//           if(name1!==name2){
//             document.getElementById('err1').innerHTML('**User already exist')
//             return false
//           }
//         debugger;
//         setData({ ...data, [name]: value })
      
//       }
//       const [push] = useState([])
//       const handleAr = (e) => {
       
//         debugger;
//         e.preventDefault();
        
//         push.push(data)
//         console.log(push);
       
//       }
//     return (
//         <div>
//             <div >
//                 <form id='dform'>
//                     <h2 className="text-success  text-center">First Quarter</h2>
//                     <div>
//                         <select className='form-control col-sm-4 ' onChange={handleData} value={data.Select1} name='name' id="val1" >
//                             <option>--Select--</option>
//                             {
//                                 get && get.map(p => {
//                                     return (
//                                         <>
//                                             <option disabled={() => { }}>{p.firstName}{p.lastName}</option>
//                                         </>
//                                     )
//                                 })
//                             }
//                         </select>
//                         <span id="err1" className='text-danger'></span>

//                         <select className='form-control  col-sm-4' onChange={handleData} value={data.Select2} name='position' id="pos1">
//                             <option>--Select--</option>
//                             {
//                                 get && get.map(p => {
//                                     return (
//                                         <>
//                                             <option >{p.select}</option>
//                                         </>
//                                     )
//                                 })
//                             }
//                         </select>
//                         {/* <span id="err2" className='text-danger'></span> */}
//                         <select className='form-control col-sm-4 ' onChange={handleData} value={data.Select1} name='name' id="val2" >
//                             <option>--Select--</option>
//                             {
//                                 get && get.map(p => {
//                                     return (
//                                         <>
//                                             <option disabled={() => { }}>{p.firstName}{p.lastName}</option>
//                                         </>
//                                     )
//                                 })
//                             }
//                         </select>
//                         <span id="err3" className='text-danger'></span>
//                         <select className='form-control  col-sm-4' onChange={handleData} value={data.Select2} name='position' id="pos2" >
//                             <option>--Select--</option>
//                             {
//                                 get && get.map(p => {
//                                     return (
//                                         <option >{p.select}</option>
//                                     )
//                                 })
//                             }
//                         </select>
//                         <span id="err4" className='text-danger'></span>
//                         <select className='form-control col-sm-4 ' onChange={handleData} value={data.Select1} name='name' id="val3" >
//                             <option>--Select--</option>
//                             {
//                                 get && get.map(p => {
//                                     return (
//                                         <>
//                                             <option disabled={() => { }}>{p.firstName}{p.lastName}</option>
//                                         </>
//                                     )
//                                 })
//                             }
//                         </select>
//                         <span id="err5" className='text-danger'></span>
//                         <select className='form-control  col-sm-4' onChange={handleData} value={data.Select2} name='position' id='pos3' >
//                             <option>--Select--</option>
//                             {
//                                 get && get.map(p => {
//                                     return (
//                                         <option >{p.select}</option>
//                                     )
//                                 })
//                             }
//                         </select>
//                         <span id="err6" className='text-danger'></span>
//                         <sconsole.log(props.get,"eedgd");<select className='form-control col-sm-4 ' onChange={handleData} value={data.Select1} name='name' id="val4" >
//                             <option>--Select--</option>
//                             {
//                                 get && get.map(p => {
//                                     return (
//                                         <>
//                                             <option disabled={() => { }}>{p.firstName}{p.lastName}</option>
//                                         </>
//                                     )
//                                 })
//                             }
//                         </select>
//                         <span id="err7" className='text-danger'></span>
//                         <select className='form-control  col-sm-4' onChange={handleData} value={data.Select2} name='position' id="pos4">
//                             <option>--Select--</option>
//                             {
//                                 get && get.map(p => {
//                                     return (
//                                         <option >{p.select}</option>
//                                     )
//                                 })
//                             }
//                         </select>
//                         <span id="err8" className='text-danger'></span>
//                         <select className='form-control col-sm-4 ' onChange={handleData} value={data.Select1} name='name' id="val5" >
//                             <option>--Select--</option>
//                             {
//                                 get && get.map(p => {
//                                     return (
//                                         <>
//                                             <option disabled={() => { }}>{p.firstName}{p.lastName}</option>
//                                         </>
//                                     )
//                                 })
//                             }
//                         </select>
//                         <span id="err9" className='text-danger'></span>
//                         <select className='form-control  col-sm-4' onChange={handleData} value={data.Select2} name='position' id="pos5">
//                             <option>--Select--</option>
//                             {
//                                 get && get.map(p => {
//                                     return (
//                                         <option >{p.select}</option>
//                                     )
//                                 })
//                             }
//                         </select>
//                         <span id="err10" className='text-danger'></span>
//                     </div>

//                     <button onClick={handleAr} >Final Data</button>

//                 </form>
//             </div>

//         </div>
            
        
//     )
// }

// export default FirstQuarter
