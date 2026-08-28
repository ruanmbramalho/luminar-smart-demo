/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly LLM_API_KEY?: string;
  readonly LLM_MODEL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
