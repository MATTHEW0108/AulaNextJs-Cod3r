import Link from 'next/link'
import styles from '../styles/layout.module.css'

export default function Lauyout(props){
    return (
        <div className={styles.lauyout}>
            <div className={styles.header}>
                <h1>{props.titulo ?? "Mais um exemplo"}</h1>
                <Link href="/">Voltar</Link>
                <Link href="https://www.google.com.br/">Google</Link>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
            
            
        </div>
    )
}