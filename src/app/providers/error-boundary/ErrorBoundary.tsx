import React, {Component, ReactNode} from "react";
import * as styles from './ErrorBoundary.module.scss'

/**
 * Интерфейс пропсов для компонента ErrorBoundary.
 */
interface ErrorBoundaryProps {
    children: ReactNode;
}

/**
 * Интерфейс состояния для компонента ErrorBoundary.
 */
interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
    errorInfo?: string | null | undefined;
}

/**
 * Компонент ErrorBoundary является глобальным обработчиком ошибок для перехвата проблем в дочерних компонентах.
 *
 * @extends {Component<ErrorBoundaryProps, ErrorBoundaryState>}
 * @param props.children - Дочерние элементы, которые будут защищены от ошибок.
 * @returns {ReactNode} JSX-элемент, содержащий либо дочерние компоненты, либо сообщение об ошибке.
 *
 * @remarks
 * Этот компонент предотвращает падение всего приложения при возникновении ошибок в дереве компонентов.
 * Если ошибка возникает, она логируется, а пользователю показывается сообщение об ошибке.
 * В режиме разработки additionally отображаются детали ошибки (трассировка стека).
 */

 class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    /**
     * Конструктор для инициализации состояния компонента.
     *
     * @param {ErrorBoundaryProps} props - Пропсы компонента.
     */
    constructor(props: ErrorBoundaryProps) {
        super(props);
        /**
         * Инициализация состояния:
         * - hasError: false — нет ошибок.
         * - error: undefined — объект ошибки не определён.
         * - errorInfo: '' — информация об ошибке пустая.
         */
        this.state = {hasError: false, error: undefined, errorInfo: ''};
    }

    /**
     * Статический метод для обработки ошибок в дереве компонентов.
     * Устанавливает состояние компонента в случае ошибки.
     *
     * @param {Error} error - Объект ошибки.
     * @returns {ErrorBoundaryState} Новое состояние компонента с hasError=true и сохранённой ошибкой.
     */
    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {hasError: true, error} // Устанавливаем флаг ошибки и сохраняем объект ошибки
    }

    /**
     * Метод componentDidCatch вызывается после того, как ошибка была поймана.
     * Логирует ошибку и сохраняет дополнительную информацию об ошибке (componentStack).
     *
     * @param {Error} error - Объект ошибки.
     * @param {React.ErrorInfo} errorInfo - Информация об ошибке (например, componentStack).
     */
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error("ErrorBoundary поймал ошибку:", error, errorInfo); // Логируем ошибку

        this.setState({
            errorInfo: errorInfo.componentStack, // Сохраняем трассировку стека или дефолтное значение ""
        });

        /**
         * Сохраняем трассировку стека ошибки в состоянии.
         * Если ошибка уже была поймана (hasError=true), предотвращаем повторное срабатывание.
         */
        if (this.state.hasError) {
            console.warn("Предотвращено повторное срабатывание ErrorBoundary.");
            return;
        }
        return this.setState({hasError: true})
    }


    /**
     * Метод render отвечает за рендеринг компонента.
     * Если есть ошибка (hasError=true), отображается сообщение об ошибке.
     * В противном случае отображаются дочерние элементы.
     *
     * @returns {ReactNode} JSX-элемент с сообщением об ошибке или дочерними компонентами.
     */
    render(): ReactNode {
        const {hasError, error, errorInfo} = this.state;

        /**
         * Если произошла ошибка, отображаем сообщение об ошибке и кнопку "Попробовать снова".
         * В режиме разработки дополнительно показываем детали ошибки (трассировку стека).
         */
        if (hasError) {
            return (
                <div className={styles["error-boundary"]}>
                    <h1>Что-то пошло не так.</h1>
                    <button className={styles["retry-button"]} onClick={() => this.setState({hasError: false})}>
                        Попробовать снова
                    </button>
                    {/* Отображение деталей ошибки в режиме разработки */}
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
        /**
         * Если ошибок нет, отображаем дочерние элементы.
         */
        return this.props.children;
    }
}



export default ErrorBoundary;