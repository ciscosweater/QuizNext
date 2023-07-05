import styles from "@/styles/Estatistica.module.css"

interface EstatisticaProps {
    texto?: string
    valor?: number
    porcentagem?: boolean
    corFundo?: string
    corTexto?: string
}

export default function Estatistica(props: EstatisticaProps) {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo} style={{ color: props.corTexto }}>{props.texto}</h1>
            <div className={styles.estatistica} style={{ backgroundColor: props.corFundo, color: props.corTexto }}>
                {`${props.valor}${props.porcentagem ? '%' : ''}`}
            </div>
        </div>
    )
}