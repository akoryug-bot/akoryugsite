// Safe GA4 event wrapper — works even if gtag hasn't loaded yet
declare function gtag(...args: unknown[]): void;

export function gtagEvent(name: string, params?: Record<string, unknown>) {
  if (typeof gtag === 'function') {
    gtag('event', name, params ?? {});
  }
}
