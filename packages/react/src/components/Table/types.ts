import { ComponentType, PropsWithChildren } from 'react'
import { ForwardRefExoticComponent } from 'react'
import { HtmlIntrinsicElements } from 'src/types/HtmlElements'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'

export type TableProviderSection = 'head' | 'body' | 'foot'

export interface TableProviderProps extends PropsWithChildren {
  section: TableProviderSection;
}

export interface TableProps extends PropsWithChildrenAndClassName {
  as?: keyof HtmlIntrinsicElements | ComponentType;
}
export type TableComponent<P = TableProps> = ForwardRefExoticComponent<P>

export interface TableHeadProps extends PropsWithChildrenAndClassName {
  as?: keyof HtmlIntrinsicElements | ComponentType;
}
export type TableHeadComponent<P = TableHeadProps> = ForwardRefExoticComponent<P>

export interface TableBodyProps extends PropsWithChildrenAndClassName {
  as?: keyof HtmlIntrinsicElements | ComponentType;
}
export type TableBodyComponent<P = TableBodyProps> = ForwardRefExoticComponent<P>

export interface TableRowProps extends PropsWithChildrenAndClassName {
  as?: keyof HtmlIntrinsicElements | ComponentType;
}
export type TableRowComponent<P = TableRowProps> = ForwardRefExoticComponent<P>

export interface TableCellProps extends PropsWithChildrenAndClassName {
  as?: keyof HtmlIntrinsicElements | ComponentType;
  colSpan?: number;
  rowSpan?: number;
}
export type TableCellComponent<P = TableCellProps> = ForwardRefExoticComponent<P>

export interface TableFootProps extends PropsWithChildrenAndClassName {
  as?: keyof HtmlIntrinsicElements | ComponentType;
}
export type TableFootComponent<P = TableFootProps> = ForwardRefExoticComponent<P>
