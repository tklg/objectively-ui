import { FC, PropsWithChildren } from 'react'
import { clsx } from 'src/util/clsx'
import styles from './index.module.scss'

interface InlineProps extends PropsWithChildren {
  flex?: boolean;
}

export const Inline: FC<InlineProps> = ({ children, flex, ...props }) => {
  return (
    <div {...props} className={clsx(styles.inline, flex && styles.flex)}>
      {children}
    </div>
  )
}
