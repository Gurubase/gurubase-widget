# Development Guide

This document contains development notes and testing procedures for the Gurubase Widget, particularly for Android device testing.

## Android Testing

### Testing Options

#### BrowserStack (Web-based Testing)

BrowserStack provides web-based access to Android devices for testing purposes.

**Limitations For The Free Version:**
- 1-minute time limit per session
- Each used device gets disabled after 1-minute

#### Android Studio Emulator (Recommended)

The Android Studio emulator provides a more reliable and reusable testing environment.

**Advantages:**
- Can be reused after initial setup
- No time limitations
- Full control over device configuration

### Android Studio Emulator Setup

#### Enabling On-Screen Keyboard

To enable the on-screen keyboard in the Android Studio emulator:

0. Emulate the device (from "More Actions" click "Virtual Device Manager")
1. Open the emulated device's Settings
2. Navigate to: **Settings → System → Keyboard → On-screen keyboard**
3. Select **Gboard** (click on the name, not the toggle)
4. Configure the following settings:
   - **Physical keyboard**: Enable "Show on-screen keyboard"
   - Navigate back to Gboard settings
   - **Write in text fields**: Disable "Use stylus to write in text fields"

### Local Development Setup

For local testing with the widget and React demo app, use the following tunnel configuration:

**Widget (Cloudflare Tunnel):**

Start the widget server and serve it on public.
```bash
python server.py
cloudflared tunnel --url http://localhost:8081
```

**React Application (ngrok):**

Start the React demo app and serve it on public.
```bash
cd examples/react
npm run dev
ngrok http 5173
```

> [!IMPORTANT]
> The widget must be exposed via Cloudflare Tunnel and the React application via ngrok. Reversing this configuration will prevent the widget from functioning correctly.

