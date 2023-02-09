import { Children, FC, PropsWithChildren } from 'react'
import styles from './index.module.scss'

export const ComponentPreviewContainer: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className={styles.componentPreviewContainer}>
      {Children.map(children, (elem) => (
        <div className={styles.row}>
          {elem}
        </div>
      ))}
    </div>
  )
}
