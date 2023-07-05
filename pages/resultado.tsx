import Botao from "@/components/Botao";
import Estatistica from "@/components/Estatistica";
import styles from "@/styles/Resultado.module.css";
import { useRouter } from "next/router";

export default function Resultado() {
    const router = useRouter();
    const total: any = router.query.total;
    const pontos: any = router.query.certas;
    const percentual = Math.round((pontos / total) * 100)
    return (
        <div className={styles.resultado}>
            <h1 className={styles.titulo}>Confira seu desempenho!</h1>
            <div className={styles.line}>
                <Estatistica
                    texto={"Total de perguntas"}
                    valor={total}
                    porcentagem={false}
                    corFundo={'#23395B'}
                    corTexto={'white'}
                />
                <Estatistica
                    texto={"Pontos ganhos"}
                    valor={pontos}
                    porcentagem={false}
                    corFundo={'#406E8E'}
                    corTexto={'white'}
                />
                <Estatistica
                    texto={"Sua nota"}
                    valor={percentual}
                    porcentagem={true}
                    corFundo={'#8EA8C3'}
                    corTexto={'white'}
                />
            </div>
            <Botao texto={"Começar novamente"} href={"/"} />
        </div>
    )
}