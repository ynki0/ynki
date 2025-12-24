self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/71ce2312a5f90c01.js"
  ],
  "/_error": [
    "static/chunks/c21b35075ce16e04.js"
  ],
  "/about": [
    "static/chunks/a4ee65f20a7f348e.js"
  ],
  "/app-development": [
    "static/chunks/3b879899b20e615f.js"
  ],
  "/automation-ai-solutions": [
    "static/chunks/e04a6031eca2bb1c.js"
  ],
  "/en": [
    "static/chunks/bba985d8c02b1d8f.js"
  ],
  "/pricing": [
    "static/chunks/1c6c3340bab030fc.js"
  ],
  "/ru": [
    "static/chunks/073a46b5914473a0.js"
  ],
  "/software-development": [
    "static/chunks/7736209eaddde2c1.js"
  ],
  "/ui-ux-design": [
    "static/chunks/a8abd6caf9542608.js"
  ],
  "/web-development": [
    "static/chunks/c7b64fe3798dc670.js"
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