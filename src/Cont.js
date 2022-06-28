import {useState} from "react"
function Cont(){
    let [img,setImg]=useState("");
    const [istrue, Setistrue] = useState(false);
    let [descr,setDescr]=useState("")

function Ch(){
    Setistrue(true)
}
return(
<div>
    {istrue ?<div> <img src={img}/><br/><p>{descr}</p><hr/> </div>:
    <div>
        <h1>Describe a country</h1>
<input placeholder="img URL" onChange={e=>setImg(e.target.value)}/><br/>
<textarea style={{height:"30vh",width:"20vw"}} onChange={e=>setDescr(e.target.value)}/>

<button onClick={Ch}>submit</button>
    </div>
    
    
    }
</div>)


}
export default Cont;