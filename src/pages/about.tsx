import Link from "next/link";
import Layout from "../components/layout";

export default function About() {
    return (
        <Layout>
            <p>Oi menu nome e Diego Silva,</p>
            <p>sou programador, <strong className={"text-black/70 dark:text-white/70 font-bold"}>Desenvolvedor Full-Stack.</strong></p>
            <p>Procuro sempre aprender novas tecnologias com pessoas programadoras</p>
            <p>mas me estimulo sempre ao autodidatismo.</p>
            <br />
            <p>Gosto do conceito de programação investigativa de ter um problema</p>
            <p>e ter que buscar a solução para resolve-lo. Atualmente focado na stack <strong className={"text-black/70 dark:text-white/70 font-bold"}>JavaScript</strong>,</p>
            <p>mas sempre aberto a aprender novas tecnologias, novas linguagens,</p>
            <p>novos conceitos.</p>
            <br />
            <p>Busco sempre construir código com o melhor que a linguagem oferece,</p>
            <p>idependete da tecnologia. Tenho como foco dominar a arte da programação</p>
            <p>utilizando não so as melhores ferramentas como as mais adequadas para os contextos especificos.</p>
            <br />
            <p>Estou sempre estudando, programando e aprendendo</p>
            <p>pode ver mais sobre alguns projetos que fiz e que estou desenvolvendo <Link href="/projects" className={"underline text-black/70 dark:text-white/70 hover:text-black/90 dark:hover:text-white/90 hover:transition-colors hover:ease-in"}>clicando aqui!</Link>
            </p>

            <br /><hr className="w-7 mx-auto lg:ml-80"/><br />

            <p>Gosto de historias, não so mais como são contadas.</p>
            <p>Pretendo construir uma, e que seja contada da forma mais intrigante possivel!</p>
        </Layout>
    )
}