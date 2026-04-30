# Design Decisions — PhotoEditsPZ

## 1. Visual Identity: "Apple-Style" Minimalism
The core aesthetic is inspired by Apple's design language, aiming for a premium, trustworthy, and high-end feel for a photography service.

### Key Principles:
- **High Contrast**: Pure black background (`#000000`) with white text to highlight photography.
- **Generous Whitespace**: Focuses the user's attention on the content (photos and story).
- **Typography**: Utilizing system fonts (`-apple-system`, `SF Pro`) to create a familiar, integrated feel for iOS/macOS users.
- **Micro-interactions**: Subtle hover effects and scroll-reveal animations to make the site feel responsive and alive.

## 2. Design System Tokens (CSS Variables)
- `--bg-black`: `#000000` (Premium OLED-ready background)
- `--bg-card`: `#1c1c1e` (Dark gray for secondary elements/cards)
- `--text-main`: `#ffffff` (Primary content)
- `--text-secondary`: `#a1a1a6` (Secondary information)
- `--accent-blue`: `#0071e3` (Actionable elements/links)
- `--border-color`: `rgba(255, 255, 255, 0.1)` (Subtle separation)

## 3. Glassmorphism
Used for the main content containers and the navigation bar.
- **Effect**: `backdrop-filter: blur(20px) saturate(180%)`
- **Rationale**: Adds depth and a "frosted glass" look that separates content from the background without losing the dark aesthetic.

## 4. User Flow & Storytelling
- **The "Why" First**: Instead of a generic landing page, the site leads with Pablo's story. This builds an emotional connection before showing prices.
- **Simplified Conversion**: The flow ends in a WhatsApp message. This is intentional to reduce friction in the Honduran market where WhatsApp is the primary communication channel.
- **Mobile First**: Given that most clients will discover the portfolio via Instagram, the design is highly optimized for mobile viewing.

## 5. Phase 3 Evolution (Next.js + Tailwind)
- **Framer Motion**: Will replace vanilla CSS transitions for more complex, "spring-based" animations.
- **Next Image**: Crucial for a photography site to ensure fast loading times and optimized assets.
- **Tailwind CSS**: Will be used for rapid styling while maintaining the established design system tokens.
