# msg-board 📝

A simple decentralized message board built on the Internet Computer using **Rust (canister backend)** and **React + Bootstrap (frontend)**.

This project demonstrates full-stack dApp development with a clean UI and persistent message storage.

---

## ✨ Features

- 💬 Add public messages
- 🧹 Clear all messages
- 🧾 Message character limit (100 chars)
- 🧮 Live message counter
- 📦 Minimal, Bootstrap-based UI
- ☁️ Runs fully on-chain using DFINITY's Internet Computer

---

## 📦 Tech Stack

- **Frontend:** React, Bootstrap, Vite
- **Backend (Canister):** Rust (ic-cdk)
- **Deployment:** DFINITY SDK (`dfx`)

---

## 🚀 Getting Started

> Make sure you have [DFINITY SDK](https://internetcomputer.org/docs/current/developer-docs/quickstart/local-quickstart) installed.

```bash
# Clone the repo
git clone https://github.com/Anatolii-B-CHNU/msg-board.git
cd msg-board

# Start local IC replica
dfx start --background

# Deploy canisters
dfx deploy

# Open in browser (default port)
http://localhost:4943
