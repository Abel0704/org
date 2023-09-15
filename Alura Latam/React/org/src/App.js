import { useState } from 'react';
import { v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const[mostrarFormulario, actualizarMostrar]=useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo:"Front End",
    foto:"https://github.com/harlandlohora.png",
    nombre:"Harland Lohora",
    puesto:"Instructor",
    fav:true
  },
  {
    id: uuid(),
    equipo:"Programacion",
    foto:"https://github.com/JeanmarieAluraLatam.png",
    nombre:"Genesys Rondon",
    puesto:"Desarrolladora de software e instructora",
    fav:false

  },
  {
    id: uuid(),
    equipo:"UX y Diseños",
    foto:"https://github.com/JeanmarieAluraLatam.png",
    nombre:"Jeanmarie Quijada",
    puesto:"Instructora en Alura Latam",
    fav:false

  },
  {   
    id: uuid(),   
    equipo:"Programacion",
    foto:"https://github.com/christianpva.png",
    nombre:"Christian Velasco",
    puesto:"Head de Alura e Instructor",
    fav:false

  },
  {
    id: uuid(),
    equipo:"Innovacion y Gestion",
    foto:"https://github.com/JoseDarioGonzalezCha.png",
    nombre:"Jose Gonzales",
    puesto:"Dev FullStack",
    fav:false
  }
  ])
  const[equipos,actualizarEquipos]=useState([
    {
      id: uuid(),
      titulo:"Programacion",
      colorPrimario: "#57c278",
      colorSecundario:"#d9f7e9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseños",
      colorPrimario: "#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Movil",
      colorPrimario: "#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario:"#FFEEDF"
    }])


  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra
  const cambiarMostrar=()=>{
    actualizarMostrar(!mostrarFormulario)
  }

  //registrar colaborador 
  const registrarColaborador=(colaborador)=>{
    console.log("nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores,colaborador])
  }


  //eliminar colaborador 
  const eliminarColaborador=(id)=>{
    console.log("eliminar colaborador",id)
    const nuevosColaboradores= colaboradores.filter((colaborador)=>colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //actualizar color de equipo 
  const actualizarColor=(color,id)=>{
    console.log("actualizar: ",color,id)
    const equiposActualizados=equipos.map((equipo)=>{
      if(equipo.id===id){
        equipo.colorPrimario=color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }
  //creaaR EQUIPO
  const crearEquipo=(nuevoEquipo)=>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos,{...nuevoEquipo, id: uuid}])
  }

  const like=(id)=>{
    console.log("like",id)
    const colaboradoresActualizador= colaboradores.map((colaborador)=>{
      if(colaborador.id===id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizador)
  }


  return (
    <div>
      <Header />
      {mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo)=>equipo.titulo)} 
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      /> : <></>}
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
      
      {
        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador=>colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />)
      }

      <Footer/>

    </div>
  );
}

export default App;
