# xFitLive Expo Application

This README provides instructions for running the xFitLive Expo application locally on a MacBook. For further reference, you may run the xFitLive Expo Application in the frontEnd folder.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
- [Xcode](https://developer.apple.com/xcode/) (for iOS simulator)
- [Android Studio](https://developer.android.com/studio) (optional, for Android emulator)

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd xfitlive
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

## Running the Application

1. Start the Expo development server:
    ```bash
    npx expo start
    # or
    npm start
    # or
    yarn start
    ```

2. Running on iOS Simulator:
    - Press `i` in the terminal after the Expo server starts
    - Or click on "Run on iOS simulator" in the Expo DevTools browser interface

3. Running on Android Emulator:
    - Press `a` in the terminal after the Expo server starts
    - Or click on "Run on Android device/emulator" in the Expo DevTools

4. Running on physical device:
    - Install the Expo Go app on your device
    - Scan the QR code from the terminal or Expo DevTools
    - Make sure your device is on the same network as your computer

## Troubleshooting

- If you encounter network issues, try switching from the default LAN connection to Tunnel:
  ```bash
  npx expo start --tunnel
  ```

- Clear cache if you encounter build problems:
  ```bash
  npx expo start -c
  ```

## Additional Commands

- To build a standalone app:
  ```bash
  eas build -p ios
  # or
  eas build -p android
  ```

- To publish updates to existing apps:
  ```bash
  eas update
  ```

## Project Structure

- `App.js`: Entry point of the application
- `components/`: React components
- `screens/`: Screen components
- `assets/`: Images, fonts, and other static resources