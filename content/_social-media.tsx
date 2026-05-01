import { GithubIconFill, LinkedinIconFill, WhatsappIconFill, DiscordIconFill, EmailEditFill } from '@/components/ui/icons';

const styleClassNameIcon = 'w-[20px] h-[20px]';

const fncSocialMedia = () => {
  return [
    {
      name: 'GitHub',
      href: 'https://github.com/dc7devs',
      icon: <GithubIconFill className={styleClassNameIcon} />
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/diego-c-silva-487b171a5',
      icon: <LinkedinIconFill className={styleClassNameIcon} />
    },
    // {
    //   name: 'YouTube',
    //   href: '',
    //   icon: <YoutubeIconFill className={styleClassNameIcon} />
    // },
    {
      name: 'Discord',
      href: 'https://discord.com/users/687863744541491294',
      icon: <DiscordIconFill className={styleClassNameIcon} />
    },
    {
      name: 'E-mail',
      href: 'mailto:diegocaetano444@outlook.com',
      icon: <EmailEditFill className={styleClassNameIcon} />
    },
    {
      name: 'Whatsapp',
      href: 'https://wa.me/5538999574384',
      icon: <WhatsappIconFill className={styleClassNameIcon} />
    }
  ];
};

export default fncSocialMedia;
