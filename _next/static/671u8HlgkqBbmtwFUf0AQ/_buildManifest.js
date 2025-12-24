self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/d4bd6fd87c9d1235.js"
  ],
  "/_error": [
    "static/chunks/c21b35075ce16e04.js"
  ],
  "/about": [
    "static/chunks/1cbdcfaa0dd1e288.js"
  ],
  "/app-development": [
    "static/chunks/034a2852365f9af7.js"
  ],
  "/automation-ai-solutions": [
    "static/chunks/a89b23573273f62e.js"
  ],
  "/en": [
    "static/chunks/1d846ea87b8a8606.js"
  ],
  "/pricing": [
    "static/chunks/2743b0dfa321e25b.js"
  ],
  "/ru": [
    "static/chunks/eb41b521d44af3b2.js"
  ],
  "/software-development": [
    "static/chunks/3418a91481fa9603.js"
  ],
  "/ui-ux-design": [
    "static/chunks/cf9beeace55e8442.js"
  ],
  "/web-development": [
    "static/chunks/2c86d8bd5e67b529.js"
  ],
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/:lang(en|ru)/:path*",
        "destination": "/:path*"
      },
      {
        "source": "/:lang(en|ru)",
        "destination": "/"
      }
    ],
    "beforeFiles": [
      {
        "source": "/.//_next/:path+",
        "destination": "/_next/:path+"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/about",
    "/app-development",
    "/automation-ai-solutions",
    "/en",
    "/pricing",
    "/ru",
    "/software-development",
    "/ui-ux-design",
    "/web-development"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()