import styles from '../styles/style.module.css'
import Link from 'next/link'
import Lauyout from '../components/layout'

export default function Styiling(){
    return(
        <Lauyout titulo="Bom Dia">
            <div className={styles.roxo}>
                <h1 className={styles.test}>Estilo usando modulos CSS</h1>
                <h1 className={styles.test}>Testando modularização</h1>
            </div>
        </Lauyout>
        
    )
}