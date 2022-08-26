//Navegação Dinâmica



import Layout from "../../../components/layout"
import { useRouter } from 'next/router'

export default function ClientePorCodigo () {
    const router = useRouter()

    return (
        <Layout titulo = "Navegação Dinamica">
            <div>Código = {router.query.Codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}