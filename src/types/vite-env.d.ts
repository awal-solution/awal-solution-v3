/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  showToast: (message: string, type: string) => void;
}
