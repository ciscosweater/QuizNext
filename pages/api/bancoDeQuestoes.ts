import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bicho transmite a doença de Chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro')
    ]),
    new QuestaoModel(326, 'Quantos anos o Cisco tem?', [
        RespostaModel.errada('34'),
        RespostaModel.errada('52'),
        RespostaModel.errada('87'),
        RespostaModel.certa('21')
    ])
]

export default questoes;