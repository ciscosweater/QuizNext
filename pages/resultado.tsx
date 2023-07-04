import { useRouter } from "next/router";

export default function Resultado() {
    const router = useRouter();
    const total: any = router.query.total;
    const pontos: any = router.query.certas;
    const percentual = Math.round((pontos / total) * 100)
    return (
        <div>
            <h1>Resultado</h1>
            <div>{total}</div>
            <div>{pontos}</div>
            <div>{`${percentual}%`}</div>
        </div>
    )
}