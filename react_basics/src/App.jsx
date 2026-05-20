const Hello=(props)=>{
const now = new Date()
return(
  <p>Hello {props.name} its {now.toString()}</p>
)
}

const Add = (props) =>{
return(
  <p>{props.a} plus {props.b} is {props.a + props.b}</p>
)
}



const App = () => {
const a = 10
const b = 20

  return (
    <div>
      <Hello name="Steve"/>
      <Add a={a} b={b}/>
    </div>
  )
}

export default App