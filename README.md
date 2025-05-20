
# BittKing - Complete Web App Build

**BittKing** is a comprehensive crypto intelligence platform built with Next.js 14, Tailwind CSS, and Firebase. It includes advanced features for detecting scams, scanning tokens, and analyzing presales — along with powerful tools like a Chrome extension, admin broadcast dashboard, affiliate system, and real-time Telegram alerts.

---

## Core Features

### 1. **Rug Pull Radar**
- Token safety scoring
- LP lock status
- Holder concentration analysis
- Real-time scan endpoint (`/api/score/:address`)
- Chrome extension integration

### 2. **Multi-Chain Presale Scanner**
- Ethereum, Solana, Base, Toncoin support
- Presale listings with details
- ROI simulator based on input amount
- Pro access unlocks deeper metrics

### 3. **CMS Blog & Admin Dashboard**
- Firestore-backed blog editor
- Admin-only publishing controls
- Rich text + image support
- Broadcast tool to push homepage alerts

### 4. **Affiliate & Referral System**
- Pro+Referral link for influencers
- Tracks affiliate traffic and XP
- Onboarding landing page HTML included

### 5. **User Dashboard Features**
- Claimable XP dashboard (mocked)
- Daily login + chat activity XP logic (planned)
- Pro Mode upgrades via MetaMask

---

## Enhancements & UI Additions

### Visual Additions:
- Branded launch visuals (ZIP included)
- Pro Mode interface
- Rug Radar UI with metrics panel
- Telegram alerts mockup
- Chrome extension UI in browser frame

### UI/UX Features:
- Dark Mode toggle
- Animated homepage banner
- Token skeleton loader
- 404 page fallback for invalid presales

### Widgets:
- Presale of the Day component
- Share buttons for each presale

---

## Developer Notes

### Tech Stack
- **Next.js 14**
- **Tailwind CSS**
- **Firebase** (Auth, Firestore, Hosting)
- **Stripe/MetaMask** (optional Pro tier flow)
- **Chrome Extension** (in `/extension/` folder)

### Environment
Create a `.env.local` with your Firebase credentials:

```
NEXT_PUBLIC_FIREBASE_API_KEY=xxxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxxx
```

### Firebase
To deploy:
```bash
npm run build
npm run export
firebase deploy
```

To test locally:
```bash
npm install
npm run dev
```

---

## Files & Folders

- `/pages` – Next.js routing
- `/components` – Reusable layout + logic
- `/features` – Added enhancements like toggle, widgets, etc.
- `/extension` – Chrome extension with token scanner
- `/public/assets` – Launch and branding visuals
- `/firebase` – Firebase config
- `/admin/blog` – CMS functionality
- `README.md`, `.gitignore`, `vercel.json`, `firebase.json`, `firestore.rules`

---

## License
MIT – free to use, enhance, and deploy.

---

