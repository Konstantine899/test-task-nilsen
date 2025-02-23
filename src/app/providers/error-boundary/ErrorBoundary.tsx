import React, {Component, ReactNode} from "react";
import * as styles from './ErrorBoundary.module.scss'

// Тип пропсов
interface ErrorBoundaryProps {
    children: ReactNode;
}

// Тип состояния
interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
    errorInfo?: string;
}

/**
 * Глобальный обработчик ошибок для перехвата проблем в дочерних компонентах.
 *
 * @remarks
 * Этот компонент предотвращает падение всего приложения при возникновении ошибок в дереве компонентов.
 */

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    // Инициализация состояния
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false, error: undefined, errorInfo:''};
    }

    // Обработка ошибок в дереве компонентов
    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {hasError: true, error}
    }

    // Логирование ошибок
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error("ErrorBoundary поймал ошибку:", error, errorInfo);

        this.setState({
            errorInfo: errorInfo.componentStack,
        });

        // Защита от бесконечных ошибок
        if (this.state.hasError) {
            console.warn("Предотвращено повторное срабатывание ErrorBoundary.");
            return;
        }
        return this.setState({hasError: true})
    }


    // Рендеринг
    render(): ReactNode {
        const { hasError, error,errorInfo } = this.state;
        if (hasError) {
            return (
                <div className={styles["error-boundary"]}>
                    <h1>Что-то пошло не так.</h1>
                    <button className={styles["retry-button"]} onClick={() => this.setState({hasError: false})}>
                        Попробовать снова
                    </button>
                    {/* Вывод информации об ошибке в режиме разработки */}
                    {__IS_DEV__ && (
                        <details className={styles["error-details"]}>
                            <summary>Детали ошибки</summary>
                            <p><strong>{error?.message}</strong></p>
                            <pre>{errorInfo}</pre>
                        </details>
                    )}
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;