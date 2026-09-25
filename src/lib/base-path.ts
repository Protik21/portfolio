/** Sub-path the site is served from (e.g. "/portfolio" on GitHub Pages). Inlined at build time. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixes a public file path. Needed for plain <a>/<link> tags, which Next doesn't rewrite. */
export const withBasePath = (path: string) => `${basePath}${path}`;
