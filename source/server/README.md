# CareerSaathi Assistant — turning on AI answers (optional)

The chat assistant already works on the website **without any server** ("guide mode"):
it runs in the visitor's browser and answers from the website's own verified data.

AI answers (Google Gemini) are an optional extra. They need a small server, because an
API key must never be placed in website code. This folder contains that server as a
Cloudflare Worker (free plan is enough to start).

## What you need

1. A **Google AI Studio API key** — https://aistudio.google.com/ → "Get API key".
   - Free tier: Google may use the content to improve its products (stated on Google's
     pricing page). The website's privacy text already tells visitors this before they
     switch AI on. A paid (billing-enabled) key avoids that.
2. A free **Cloudflare account** — https://dash.cloudflare.com/sign-up
3. Node.js on a computer (for the `wrangler` command).

## Steps (about 15 minutes)

```bash
cd server
npx wrangler login                      # opens the browser to sign in to Cloudflare
npx wrangler secret put GEMINI_API_KEY  # paste the key when asked (it is stored encrypted)
npx wrangler deploy                     # prints your address, e.g. https://careersaathi-chat.<name>.workers.dev
```

Then put the address **with `/chat` at the end** in `js/chat-config.js`:

```js
aiEndpoint: "https://careersaathi-chat.<name>.workers.dev/chat",
```

Rebuild (`python3 tools/build_standalone.py`) and publish. Visitors will see a
"Use AI answers" switch in the chat; it is **off by default**.

If your site address changes (for example a custom domain), update `ALLOWED_ORIGIN`
in `wrangler.toml` and deploy again — requests from any other website are refused.

## What the server does

- Accepts only `POST /chat` from `ALLOWED_ORIGIN`.
- Checks size and shape: at most 12 messages, 500 characters per visitor message,
  16 KB of facts, 32 KB per request.
- Rate limits: 10 messages per minute per visitor and 60 per minute for the whole
  site (cost control). Change them in `wrangler.toml`.
- Sends the conversation plus the **verified website facts** to Gemini with strict
  rules: no invented courses, providers, links, prices, ratings or guarantees.
- 20-second timeout; clear error codes (429 busy, 502/504 AI unavailable).
- Stores nothing and logs no message text. The API key exists only as a Cloudflare secret.

The browser also removes any link in an AI answer that is not in the verified facts.

## Cost

Gemini's free tier has daily limits; when they are reached the chat shows
"AI service not available" and visitors can still use guide mode. Check current limits
and prices at https://ai.google.dev/gemini-api/docs/pricing before switching to a paid key.

## Tests

`npm test` runs `tests/chat-server.test.js`, which checks the server with a fake
Gemini (no real calls, no key needed).
