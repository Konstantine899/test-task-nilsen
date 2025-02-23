type Func<T extends any[]> = (...args: T) => void;

/**
 * Создает throttled-версию функции.
 *
 * @param func - Исходная функция.
 * @param limit - Интервал между вызовами (в миллисекундах).
 * @returns Throttled-функция.
 */

export function throttle<T extends any[]>(func: Func<T>, limit: number): Func<T> {
    let inThrottle: boolean = false;
    let savedThis: null | ThisType<Func<T>> = null;
    let savedArgs: T | null = null;

    const throttledFunc: Func<T> = function (this: ThisType<Func<T>>, ...args: T) {
        if (inThrottle) {
            // Сохраняем контекст и аргументы
            savedThis = this;
            savedArgs = args;
            return;
        }

        func.apply(this, args); // Вызываем оригинальную функцию
        inThrottle = true;


        setTimeout(() => {
            inThrottle = false;

            // Если есть сохранённые аргументы, выполняем функцию с ними
            if (savedArgs) {
                throttledFunc.apply(savedThis!, savedArgs!);
                savedThis = null;
                savedArgs = null;
            }
        }, limit);
    };

    return throttledFunc;
}