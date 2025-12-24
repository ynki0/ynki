self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/8e3f02a8ef2803ef.js"
  ],
  "/_error": [
    "static/chunks/c21b35075ce16e04.js"
  ],
  "/about": [
    "static/chunks/db237694906ebd03.js"
  ],
  "/app-development": [
    "static/chunks/343166f58ea7d654.js"
  ],
  "/automation-ai-solutions": [
    "static/chunks/60d3316e7576f114.js"
  ],
  "/en": [
    "static/chunks/2078a45cde705956.js"
  ],
  "/pricing": [
    "static/chunks/08bca2e18484a35c.js"
  ],
  "/ru": [
    "static/chunks/23f0e774b3dde95b.js"
  ],
  "/software-development": [
    "static/chunks/37262ad1ebb157e3.js"
  ],
  "/ui-ux-design": [
    "static/chunks/85f015a606b894c0.js"
  ],
  "/web-development": [
    "static/chunks/625305694085dfec.js"
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