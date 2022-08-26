import Lauyout from "../components/layout"

export default function jsx() {
    const titulo = <h1>JSX é u mconceito central</h1>
    function subtitulo(){
        return <h2>{"muito legal".toUpperCase()}</h2>
    }
    
    return (
        <Lauyout titulo="JSX">
            <div>
                
                {titulo}
                {subtitulo()}
                <p>{JSON.stringify({nome: "João", idade: 30})}</p>
            </div>
        </Lauyout>
    )
}