import Link from 'next/link';
import Icons from '@/components/ui/icons';
import MasteryPopover from '@/components/mastery-explorer-popover';

export default function Page() {
  return (
    <div className={"sm:w-full sm:h-full flex sm:m-0 sm:items-center"}>
        <div className="flex flex-col gap-5">
          <p className="align-baseline font-righteous">Diego C. Silva</p>
          <p className="align-baseline font-montserrat font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="inline mr-1 fill-current" width="25" height="25" viewBox="0 0 256 256"><g><path d="m213.27 104l-18-31.18a20 20 0 0 0-34.64 20l-28-48.5A20 20 0 0 0 98 64.31l-8-13.85a20 20 0 0 0-34.64 20l12 20.83l-1.17 1a20 20 0 0 0-29.49 25.88l38 65.83a80 80 0 0 0 138.57-80Zm-57.59 60.64l.17-.1l.14.24Z" opacity=".2"/><path d="m220.2 100l-18-31.18a28 28 0 0 0-47.3-1.92l-15.34-26.59a28 28 0 0 0-48.12-.63a28 28 0 0 0-43 34.78l3.34 5.79a28 28 0 0 0-22 41.92l38 65.82a87.46 87.46 0 0 0 53.43 41a88.56 88.56 0 0 0 22.92 3A88 88 0 0 0 220.2 100Zm-6.67 62.63A72 72 0 0 1 81.63 180l-38-65.82a12 12 0 0 1 20.79-12l22 38.1a8 8 0 1 0 13.85-8l-38-65.81a12 12 0 0 1 13.5-17.59a11.9 11.9 0 0 1 7.29 5.59l34 58.89a8 8 0 0 0 13.85-8l-26-45a12 12 0 0 1 20.78-12L160 107.78a48.08 48.08 0 0 0-11 61a8 8 0 0 0 13.86-8a32 32 0 0 1 11.71-43.71a8 8 0 0 0 2.93-10.93l-10-17.32a12 12 0 0 1 20.78-12l18 31.18a71.49 71.49 0 0 1 7.25 54.62Zm-29.26-132.7a8 8 0 0 1 9.8-5.66c15.91 4.27 29 14.11 36.86 27.73a8 8 0 0 1-13.86 8c-5.72-9.92-15.36-17.12-27.14-20.27a8 8 0 0 1-5.66-9.8ZM80.91 237a8 8 0 0 1-11.24 1.33c-11-8.69-20.11-19.58-28.6-34.28a8 8 0 0 1 13.86-8c7.44 12.88 15.27 22.32 24.65 29.72A8 8 0 0 1 80.91 237Z"/></g></svg>
            Olá, seja bem-vindo ao meu site pessoal!
          </p>
          <p className="md:w-9/12 leading-loose font-montserrat font-medium">Aqui e onde compartilho os projetos mais recentes em que estou trabalhando assim como meu portfólio terá uma visão geral das minhas habilidades como desenvolvedor de software. Além disso compartilho um pouco do meu percurso de aprendizado e algumas anotações sobre tópicos que considero interessantes.</p>
          <p className="align-baseline font-montserrat font-medium">
            Espero que curta, adoraria ouvir suas ideias e contribuir no que for possível!
            <svg xmlns="http://www.w3.org/2000/svg" className="inline mx-1 fill-current" width="22" height="22" viewBox="0 0 64 64"><path d="M25.777 19.183c.504.374 1.21-.6.966-1.029c-2.452-4.251-5.342-6.084-7.831-5.646c-2.488.438-4.576 3.15-5.427 7.983c-.081.486.915 1.161 1.262.637c1.304-1.972 3.101-2.98 5.097-3.333c2-.353 4.034-.019 5.933 1.388m8.4-1.481c1.304-1.972 3.099-2.98 5.099-3.334c2-.353 4.032-.018 5.932 1.389c.504.374 1.212-.6.968-1.029c-2.454-4.25-5.342-6.085-7.831-5.646c-2.488.438-4.576 3.15-5.427 7.983c-.086.487.912 1.161 1.259.637m10.054 10.027c.415-1.065-.546-1.97-1.303-1.214c-6.318 6.294-14.319 7.675-22.361 3.942c-.968-.451-1.563.728-.809 1.586c2.817 3.213 7.788 5.635 13.435 4.64c5.645-.995 9.488-4.97 11.038-8.954"/><path fill="currentColor" d="M61.945 48.302c-.293-2.939-1.868-5.457-4.293-7.103A27.86 27.86 0 0 0 60 30.001C60 14.536 47.464 2 32 2S4 14.536 4 30.001c0 3.984.847 7.768 2.348 11.198c-2.425 1.646-4 4.163-4.293 7.103c-.4 4.021 1.44 8.654 4.28 10.773c3.243 2.42 10.667 3.756 17.938 2.357c3.639-.7 4.203-2.665 3.385-3.782c1.416.223 2.863.35 4.342.35s2.926-.127 4.342-.35c-.818 1.117-.254 3.082 3.385 3.782c7.271 1.398 14.695.063 17.938-2.357c2.84-2.119 4.681-6.752 4.28-10.773M23.34 60.12c-7.296 1.017-13.241-.036-16.071-2.147C3.198 54.934.739 45.008 8.737 41.25c3.643-1.712 9.539-3.189 10.411-1.18c1.249 2.879-4.183 3.245-4.183 3.245s4.354.628 10.73-.122c1.739-.202 2.987 1.918.927 3.141c-1.801 1.069-7.864 1.452-7.864 1.452s3.263.104 7.895-.279c3.729-.311 4.062 3.901-.856 4.476c-1.894.222-7.008.563-7.008.563s3.526.661 7.168.148c3.253-.458 3.108 2.839-1.523 3.449c-2.205.291-5.721.352-5.721.352s3.158.544 4.878.319c4.405-.579 3.948 2.72-.251 3.306m5.832-4.795c.577-.991.313-2.133-.582-2.623c3.737-1.139 2.705-5.688-.219-5.842c2.235-1.475.334-5.107-2.361-4.656c-2.299.385-6.287.379-6.287.379c.006-.01 1.283-.514.96-2.193c-.335-1.735-2.643-4.176-12.114-.367A25.306 25.306 0 0 1 6.5 30.001C6.5 15.939 17.939 4.5 32 4.5s25.5 11.439 25.5 25.501c0 3.559-.745 6.942-2.068 10.021c-9.471-3.809-11.779-1.368-12.114.367c-.323 1.68.954 2.184.96 2.193c0 0-3.988.006-6.287-.379c-2.695-.451-4.597 3.182-2.361 4.656c-2.924.154-3.956 4.703-.219 5.842c-.895.49-1.159 1.632-.582 2.623c-.931.106-1.872.176-2.829.176s-1.898-.07-2.828-.175m27.559 2.648c-2.831 2.111-8.774 3.164-16.071 2.147c-4.199-.586-4.656-3.885-.249-3.306c1.72.225 4.878-.319 4.878-.319s-3.516-.061-5.721-.352c-4.632-.61-4.776-3.907-1.523-3.449c3.642.513 7.168-.148 7.168-.148s-5.114-.342-7.008-.563c-4.918-.574-4.586-4.786-.856-4.476c4.632.383 7.895.279 7.895.279s-6.063-.383-7.864-1.452c-2.061-1.223-.813-3.343.927-3.141c6.376.75 10.729.122 10.729.122s-5.432-.366-4.183-3.245c.872-2.01 6.769-.532 10.411 1.18c7.998 3.758 5.539 13.684 1.467 16.723"/></svg>
          </p>

          <small className="my-3 font-montserrat"><strong>Habilidades</strong></small>
          
          <div className="inline-flex flex-wrap gap-1">
            <MasteryPopover {...masteryData}>
              <Icons.DeviconPlainJava className="w-5 h-5" />
            </MasteryPopover>

            <MasteryPopover {...masteryData}>
              <Icons.DeviconPlainC className="w-5 h-5" />
            </MasteryPopover>

            <MasteryPopover {...masteryData}>
              <Icons.DeviconPlainJavascript className="w-5 h-5" />
            </MasteryPopover>

            <MasteryPopover {...masteryData}>
              <Icons.DeviconPlainLinux className="w-5 h-5" />
            </MasteryPopover>

            <MasteryPopover {...masteryData}>
              <Icons.AkarIconsNextjsFill className="w-5 h-5" />
            </MasteryPopover>
          </div>
          
          <small className="my-3 font-montserrat"><strong>Redes</strong></small>

          <div className="inline-flex gap-2.5">
            {social_media.map((media, index) => (
              <Link key={index} href={media.href} target='_blank'>
                {media.icon}
              </Link>
            ))}
          </div>
          
        </div>
    </div>
  )
}

const social_media = [
  {
    name: "GitHub",
    href: "https://github.com/dc7devs",
    icon: <Icons.GithubIconFill className='w-[20px] h-[20px]' />
  },
  {
    name: "Linkedin",
    href: "",
    icon: <Icons.LinkedinIconFill className='w-[20px] h-[20px]' />
  },
  {
    name: "YouTube",
    href: "",
    icon: <Icons.YoutubeIconFill className='w-[20px] h-[20px]' />
  },
  {
    name: "Discord",
    href: "",
    icon: <Icons.DiscordIconFill className='w-[20px] h-[20px]' />
  },
  {
    name: "E-mail",
    href: "mailto:diegocaetano444@outlook.com",
    icon: <Icons.EmailEditFill className='w-[20px] h-[20px]' />
  }
]


// carga de teste
const masteryData = {
  certificateList: [
    {
      credentialCode: "3ff14f2d60a8ee696d3596ac1f896f9d",
      credentialURL: "https://cursos.alura.com.br/certificate/ccb8bcff-7fdc-4987-ba8d-fffe92783d04?lang=pt_BR",
      imageCertificateURL: "https://res.cloudinary.com/dyxtcsnna/image/upload/v1701288380/teste/cerrtificado_teste_page_bb1ntl.jpg"
    },
    {
      credentialCode: "3ff14f2d60a8ee696d3596ac1f896f9d",
      credentialURL: "https://res.cloudinary.com/dyxtcsnna/image/upload/v1674058140/formato-consultoria/2022-01-28_tpmds4.jpg",
      imageCertificateURL: "https://res.cloudinary.com/dyxtcsnna/image/upload/v1674058140/formato-consultoria/2022-01-28_tpmds4.jpg"
    },
    {
      credentialCode: "3ff14f2d60a8ee696d3596ac1f896f9d",
      credentialURL: "https://res.cloudinary.com/dyxtcsnna/image/upload/v1674058140/formato-consultoria/2022-02-04_4_r23ily.jpg",
      imageCertificateURL: "https://res.cloudinary.com/dyxtcsnna/image/upload/v1674058140/formato-consultoria/2022-02-04_4_r23ily.jpg"
    }
  ],
  articleContent: {
    previewTitle: "10 things you need to know about Next.js",
    previewDescription: "Next.js is a widely acclaimed open-source React framework that empowers developers to effortlessly construct server-side rendered (SSR) and static web applications. With its robust feature set and intuitive design, Next.js has gained significant popularity among web developers. Whether you aim to enhance the performance of your web application or streamline your build process, Next.js presents itself as an excellent choice",
    articleURL: "https://medium.com/@ramazannazimli/10-things-you-need-to-know-about-next-js-688e11802396",
    previewImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*GjQghDitlzDePCf-g4UjBQ.png",
    publishedAt: new Date()
  },
  videoContent: {
    youtubeURL: "https://youtu.be/RB-uiPhphfU?si=uUxJnGf4zbTJYDTX", 
    youtubeThumbnailURL: ''
  },
  projectContent: {
    githubURL: "https://github.com/dc7devs/dcdevs.me"
  }
}