import { FC, PropsWithChildren } from 'react'
import { clsx } from 'src/util/clsx'
import styles from './index.module.scss'

interface AlignProps extends PropsWithChildren {
  flex?: boolean;
  left?: boolean;
  center?: boolean;
}

export const Align: FC<AlignProps> = ({ children, left, center, ...props }) => {
  return (
    <div {...props} className={clsx(styles.align, left && styles.left, center && styles.center)}>
      {children}
    </div>
  )
}
