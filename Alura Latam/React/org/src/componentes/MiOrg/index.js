import "./MiOrg.css"
const MiOrg=(props)=>{
    //estado = hooks 
    //useState
    // const [nombreVariable,funcionActualizar]= useState(valorInicial)
    console.log(props)
    /*const[mostrar,actualizarMostrar]=useState(true)
    const manejarClick=()=>{
        console.log("ocultar elemento",mostrar)
        actualizarMostrar(!mostrar)
    }*/

    return <section className="orgSection">
            <h3 className="title">Mi oranizacion</h3>
            <img src="../img/add.png" alt="add" onClick={props.cambiarMostrar}/>
        </section>
}
export default MiOrg