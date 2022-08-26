import Link from "next/link"
import styles from '../styles/Navbar.module.css'

export default function Navbar(props){
    return (
        <div className={styles.item}>
            <Link href={props.destino} >
                <div className={styles.navegador} style={{
                    backgroundColor: props.cor ?? 'deepskyblue'
                }}>
                    {props.nome}
                </div>
            </Link>
        </div>
    )
}