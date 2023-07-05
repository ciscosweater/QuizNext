import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(1, 'Qual foi o primeiro sucesso de Hideo Kojima?', [
        RespostaModel.errada('Metal Gear Solid 1'),
        RespostaModel.errada('Policenaut'),
        RespostaModel.errada('Penguin Adventure'),
        RespostaModel.certa('Snatcher'),
    ]),
    new QuestaoModel(2, 'Qual dessas empresas a Sony procurou para criar o primeiro PlayStation?', [
        RespostaModel.errada('Gradiente'),
        RespostaModel.errada('Sega'),
        RespostaModel.errada('Apple'),
        RespostaModel.certa('Nintendo'),
    ]),
    new QuestaoModel(3, 'Qual o jogo mais vendido de todos os tempos?', [
        RespostaModel.errada('Grand Theft Auto V'),
        RespostaModel.errada('Pokémon Red/Blue'),
        RespostaModel.errada('Super Mario Bros.'),
        RespostaModel.certa('Minecraft'),
    ]),
    new QuestaoModel(4, 'Antes de ser conhecido pelo seu nome oficial, o Nintendo Switch tinha um outro nome. Qual era?', [
        RespostaModel.errada('New Wii'),
        RespostaModel.errada('Revolution'),
        RespostaModel.errada('Project Café'),
        RespostaModel.certa('NX'),
    ]),
    new QuestaoModel(5, 'Qual desses jogos foi proibido no Brasil sob a acusação de incitar violência no trânsito?', [
        RespostaModel.errada('Grand Theft Auto'),
        RespostaModel.errada('Drive'),
        RespostaModel.errada('Burnout'),
        RespostaModel.certa('Carmageddon'),
    ]),
    new QuestaoModel(6, 'Qual desses personagens não é jogável em nenhum jogo de luta?', [
        RespostaModel.errada('Pac-Man'),
        RespostaModel.errada('Freddy Krueger'),
        RespostaModel.errada('Negan'),
        RespostaModel.certa('Leon S. Kennedy'),
    ]),
    new QuestaoModel(7, 'Qual foi o primeiro jogo Driver a sair para um console portátil?', [
        RespostaModel.errada('Driver 3 no Game Boy Advance'),
        RespostaModel.errada('Driver 76 no Game Gear'),
        RespostaModel.errada('Driver San Francisco no PSP'),
        RespostaModel.certa('Driver no Game Boy Color'),
    ]),
    new QuestaoModel(8, 'Qual foi a primeira protagonista feminina nos jogos?', [
        RespostaModel.errada('Lara Croft (da série Tomb Raider)'),
        RespostaModel.errada('Zelda (da série The Legend of Zelda)'),
        RespostaModel.errada('Samus Aran (da série Metroid)'),
        RespostaModel.certa('Ms. Pacman (da série Pacman)'),
    ]),
    new QuestaoModel(9, 'Qual desses heróis nunca ganhou um jogo solo?', [
        RespostaModel.errada('Justiceiro'),
        RespostaModel.errada('Aquaman'),
        RespostaModel.errada('Demolidor'),
        RespostaModel.certa('Doutor Estranho'),
    ]),
    new QuestaoModel(10, 'Qual desses filmes/sagas não recebeu um jogo?', [
        RespostaModel.errada('Harry Potter'),
        RespostaModel.errada('O Senhor dos Anéis'),
        RespostaModel.errada('The Warriors'),
        RespostaModel.certa('O Iluminado'),
    ]),
    new QuestaoModel(11, 'No Japão, o game Yakuza possui outro nome. Qual?', [
        RespostaModel.errada('Biohazard'),
        RespostaModel.errada('Shin Megami Tensei'),
        RespostaModel.errada('Cadillacs Kyouryuu Shinseiki'),
        RespostaModel.certa('Ryu Ga Gotoku'),
    ]),
    new QuestaoModel(12, 'Qual desses jogos não pertence a Sega?', [
        RespostaModel.errada('Shenmue'),
        RespostaModel.errada('Crazy Taxi'),
        RespostaModel.errada('Yakuza'),
        RespostaModel.certa('Kingdom Hearts'),
    ]),
    new QuestaoModel(13, 'Resident Evil foi criado por quem?', [
        RespostaModel.errada('Toshiriro Nagoshi'),
        RespostaModel.errada('Neil Druckmann'),
        RespostaModel.errada('Sam e Dan Houser'),
        RespostaModel.certa('Shinji Mikami'),
    ]),
    new QuestaoModel(14, 'Qual desses personagens não usa armadura?', [
        RespostaModel.errada('Doom Guy'),
        RespostaModel.errada('Master Chief'),
        RespostaModel.errada('Samus Aran'),
        RespostaModel.certa('Duke Nukem'),
    ]),
    new QuestaoModel(15, 'O personagem Ryder de Grand Theft Auto: San Andreas foi inspirado em quem?', [
        RespostaModel.errada('Samuel L. Jackson'),
        RespostaModel.errada('Young Maylay'),
        RespostaModel.errada('Steven Ogg'),
        RespostaModel.certa('Eazy-E'),
    ]),
    new QuestaoModel(16, 'O clássico Sunset Riders (Super Nintendo) foi publicado em que ano?', [
        RespostaModel.errada('1984'),
        RespostaModel.errada('1989'),
        RespostaModel.errada('1991'),
        RespostaModel.certa('1993'),
    ]),
]

export default questoes;