import { Component, ErrorInfo, PropsWithChildren } from 'react'
import { clsx } from 'src/util/clsx'
import styles from './index.module.scss'

interface ErrorBoundaryProps extends PropsWithChildren {
  page?: string;
}

interface ErrorBoundaryState {
  error: Error | null;
  componentStack: string | null;
}

class UnknownImportErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    error: null,
    componentStack: null,
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    if (error) {
      // Only handle unfound dynamic imports, like a weird 404 page.
      if (error.message.includes('Unknown variable dynamic import')) {
        this.setState({
          error,
          componentStack: errorInfo.componentStack,
        })
      } else {
        throw error
      }
    }
  }

  componentDidUpdate (prevProps: Readonly<ErrorBoundaryProps>, prevState: Readonly<ErrorBoundaryState>): void {
    if (prevProps.page !== this.props.page && prevState.error) {
      this.setState({
        error: null,
        componentStack: null,
      })
    }
  }

  render () {
    const { children } = this.props
    const { error } = this.state

    if (error) {
      return (
        <div className={clsx(styles.errorBoundary, styles.unknownImport)}>
          <h2>404 :(</h2>
          <span>Could not find dynamic import for <code>{window.location.pathname}</code></span>
        </div>
      )
    }
    return children
  }
}

export { UnknownImportErrorBoundary }
