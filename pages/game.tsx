import Questionario from '@/components/Questionario'
import QuestaoModel from '@/model/questao'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

const BASE_URL = 'http://localhost:3000/api';

export default function Game() {
    const router = useRouter();

    const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
    const [questao, setQuestao] = useState<any>()
    const [pontos, setPontos] = useState<number>(0)

    async function carregarIdsDasQuestoes() {
        const resp = await fetch(`${BASE_URL}/questionario`)
        const idsDasQuestoes = await resp.json()
        setIdsDasQuestoes(idsDasQuestoes.slice(0, 10))
    }

    async function carregarQuestao(idQuestao: number) {
        const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
        const json = await resp.json()
        const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
        setQuestao(novaQuestao)
    }

    useEffect(() => {
        carregarIdsDasQuestoes()
    }, [])

    useEffect(() => {
        idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
    }, [idsDasQuestoes])

    function irPraProximoPasso() {
        const proximoId = idProximaPergunta()
        proximoId ? irPraProximaQuestao(proximoId) : finalizar()
    }

    function idProximaPergunta() {
        const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
        return idsDasQuestoes[proximoIndice]
    }

    function questaoRespondida(questaoRespondida: QuestaoModel) {
        setQuestao(questaoRespondida)
        const acertou = questaoRespondida.acertou
        setPontos(pontos + (acertou ? 1 : 0))
    }

    function irPraProximaQuestao(proximoId: number) {
        carregarQuestao(proximoId)
    }

    function finalizar() {
        router.push({
            pathname: '/resultado', query: {
                total: idsDasQuestoes.length,
                certas: pontos
            }
        })
    }

    return questao ?
        (<Questionario
            questao={questao}
            ultima={idProximaPergunta() === undefined}
            questaoRespondida={questaoRespondida}
            irPraProximoPasso={irPraProximoPasso}
        />) : false
}
