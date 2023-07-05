import Botao from "@/components/Botao";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Logo from "@/assets/joystick.png";

export default function Home() {

  return (
    <div className={styles.home}>
      <h1 className={styles.titulo}>Quiz Gamer</h1>
      <Image src={Logo} width={200} height={200} className={styles.logo} alt="" />
      <p className={styles.descricao}>Desafie seus conhecimentos como gamer neste quiz desafiador e mostre que você é um jogador de verdade!</p>
      <Botao texto={"Iniciar quiz"} href={"/game"} />
    </div>
  )
}
