const { createSecureHeaders } = require("next-secure-headers");



module.exports = 
    { async headers() {
        return [
          {
            source: "/(.*)",
            headers: createSecureHeaders({
              contentSecurityPolicy: {
                directives: {
                  defaultSrc: ["'self'", "https://api.emailjs.com"],
                  styleSrc: ["'self'", "'unsafe-inline'", "https://stackpath.bootstrapcdn.com", "https://fonts.googleapis.com"],
                  imgSrc: ["'self'", "data:", "https://dl6rt3mwcjzxg.cloudfront.net"],
                  frameSrc: ["https://anchor.fm/"],
                  fontSrc: ["'self'", "https://fonts.gstatic.com"],
                  scriptSrc: ["'self'", "'sha256-X+zrZv/IbzjZUnhsbWlsecLbwjndTpG0ZynXOif7V+k='"]
                },
              },
              frameGuard: "deny",
          noopen: "noopen",
          nosniff: "nosniff",
          xssProtection: "sanitize",
          forceHTTPSRedirect: [
            true,
            { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true },
          ],
          referrerPolicy: "same-origin",
             
             
            }),
          },
          
        ];
      },
    
    }
