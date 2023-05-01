import cx from 'clsx';
import { ReactNode } from 'react';

interface PropsCircleSkill {
    name: string,
    icon: ReactNode
}

export default function CircleSkill({ name, icon }: PropsCircleSkill) {
    return (
        <div className={cx("w-8 h-8 flex items-center justify-center rounded backdrop-blur-sm dark:bg-black/45 bg-white/45 ring-1 dark:ring-white/25 ring-black/25")} data-tip={name}>
            {icon}
        </div>
    )
}