interface GtagParams {
  analytics_storage?: 'granted' | 'denied';
  page_path?: string;
  consent_mode?: 'default';
  [key: string]: any;
}

declare global {
  interface Window {
    gtag: (
      command: 'consent' | 'config' | 'event' | 'js',
      target: string | Date,
      params?: GtagParams
    ) => void;
  }
}

export {} 