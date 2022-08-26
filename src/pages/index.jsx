import Link from 'next/link'
import Navbar from '../components/Navbar'


export default function home () {
    return(
        <div style={{
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh',
            paddingLeft:'25px'
            
        }}>
                <Navbar destino="/estiloso" nome = "Estiloso" cor="blue"/>
                <Navbar destino="/exemplo" nome = "Exemplo" cor="navy"/>
                <Navbar destino="/jsx" nome ="JSX" cor="#050433"/>
                <Navbar destino="/navegacao" nome ="Navegação #01" cor="green"/>       
                <Navbar destino ="/cliente/ms/Matheus" nome = "Cliente por Código" cor = "crimson"/>
                <Navbar destino="/estado" nome = "Estado" cor = "seagreen"/>
        </div>
    )
}