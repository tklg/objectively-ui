import { ForwardRefExoticComponent, PropsWithChildren } from 'react'

export type ScreenreaderOnlyProps = PropsWithChildren

export type ScreenreaderOnlyComponent<P = ScreenreaderOnlyProps> = ForwardRefExoticComponent<P>
