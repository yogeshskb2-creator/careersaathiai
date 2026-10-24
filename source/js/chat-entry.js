// Entry point for the chat assistant. layout.js loads this only when a visitor
// opens the chat (in the built site it becomes js/bundle-chat.js).
import { initChat, openChat, toggleChat } from "./chat-widget.js";

window.CareerSaathiChat = { init: initChat, open: openChat, toggle: toggleChat };
