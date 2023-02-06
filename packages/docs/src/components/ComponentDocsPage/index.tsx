import { FC } from 'react'
import { useParams } from 'react-router-dom'

export const ComponentDocsPage: FC = () => {
  const { component } = useParams()
  return (
    <>
      foo {component}
    </>
  )
}
