// Settings for the CareerSaathi Assistant.
//
// aiEndpoint: the address of YOUR chat server (see server/README.md).
//   ""  → the assistant runs only in "guide mode": fully in the visitor's browser,
//         nothing is sent anywhere, answers come from this website's data.
//   "https://careersaathi-chat.<your-name>.workers.dev/chat"
//       → visitors can switch on AI answers (Google Gemini). The API key stays on
//         the server — NEVER put an API key in this file or anywhere in the website.
export const CHAT_CONFIG = {
  aiEndpoint: "",
  aiProviderName: "Google Gemini",
  timeoutMs: 25000,
  maxHistory: 12 // messages sent to the AI server for context
};
