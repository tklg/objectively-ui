import { FC, PropsWithChildren } from 'react'
import { clsx } from 'src/util/clsx'
import styles from './index.module.scss'

interface InlineProps extends PropsWithChildren {
  flex?: boolean;
}

export const Inline: FC<InlineProps> = ({ children, flex }) => {
  return (
    <div className={clsx(styles.inline, flex && styles.flex)}>
      {children}
    </div>
  )
}
