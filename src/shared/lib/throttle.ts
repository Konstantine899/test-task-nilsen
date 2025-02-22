type Func = (...args: any[]) => void;

export function throttle<T extends Func>(func: T, limit: number): T {
    let inThrottle: boolean = false;
    let savedThis: any = null;
    let savedArgs: any[] | null = null;

    const throttledFunc = function (this: any, ...args: any[]) {
        if (inThrottle) {
            savedThis = this;
            savedArgs = args;
            return;
        }

        func.apply(this, args);
        inThrottle = true;


        setTimeout(() => {
            inThrottle = false;
            if (savedArgs) {
                throttledFunc.apply(savedThis, savedArgs);
                savedThis = null;
                savedArgs = null;
            }
        }, limit);
    };

    return throttledFunc as T;
}