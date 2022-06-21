/**
 * Development console
 *
 * This is only visible to development builds
 *
 * Anyone please give me better ways for this one-
 */
export default (function devsole() {
  return import.meta.env.DEV
    ? new (class Devsole {
        assert(value: any, message?: string, ...optionalParams: any[]): void {
          console.assert(
            value,
            message || undefined,
            optionalParams || undefined
          );
        }

        clear(): void {
          console.clear();
        }

        count(label?: string): void {
          console.count(label || undefined);
        }

        countReset(label?: string): void {
          console.countReset(label || undefined);
        }

        debug(message?: any, ...optionalParams: any[]): void {
          console.debug(message, optionalParams || undefined);
        }

        error(message?: any, ...optionalParams: any[]): void {
          console.error(message || undefined, optionalParams || undefined);
        }

        group(...label: any[]): void {
          console.group(label || undefined);
        }

        groupCollapsed(...label: any[]): void {
          console.groupCollapsed(label || undefined);
        }

        info(message?: any, ...optionalParams: any[]): void {
          console.info(message || undefined, optionalParams || undefined);
        }

        log(message?: any, ...optionalParams: any[]): void {
          console.log(message || undefined, optionalParams || undefined);
        }

        table(tabularData: any, properties?: ReadonlyArray<string>): void {
          console.table(tabularData, properties || undefined);
        }

        time(label?: string): void {
          console.time(label || undefined);
        }

        timeEnd(label?: string): void {
          console.timeEnd(label || undefined);
        }

        timeLog(label?: string, ...data: any[]): void {
          console.timeLog(label || undefined, data || undefined);
        }

        warn(message?: any, ...optionalParams: any[]): void {
          console.warn(message || undefined, optionalParams || undefined);
        }
      })()
    : undefined;
})();
