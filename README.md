# Chilli No. 5 Mobile App

A React Native e-commerce application for Chilli No. 5, built with Expo Router and TypeScript.

## 🌶️ Overview

This mobile application provides a seamless shopping experience for customers of Chilli No. 5, allowing users to browse and purchase hot sauces and related products. The app features a clean, modern design with a dark mode UI to showcase the brand's premium products.

## 📱 Features

* **Product Browsing** : Browse products by categories with a user-friendly interface
* **Search Functionality** : Search for specific products with real-time feedback
* **Shopping Cart** : Add, remove, and manage products in cart
* **Wishlist** : Save favorite products for later
* **User Profiles** : View order history and manage account details
* **WooCommerce Integration** : Real-time product data from a WooCommerce store

## 🛠️ Tech Stack

* [React Native](https://reactnative.dev/) - Core framework
* [Expo](https://expo.dev/) - Development platform and tools
* [Expo Go](https://expo.dev/go) - Testing app for development
* [Expo Router](https://docs.expo.dev/router/introduction/) - Navigation solution
* [TypeScript](https://www.typescriptlang.org/) - Type safety and improved developer experience
* [TanStack Query](https://tanstack.com/query/latest) - Data fetching and state management
* [WooCommerce REST API](https://woocommerce.github.io/woocommerce-rest-api-docs/) - E-commerce platform integration

## 🚀 Getting Started

### Prerequisites

* Node.js (v18 or newer)
* expo
* npm or yarn
* Expo Go app installed on your iOS/Android device
* (Optional) iOS/Android simulator for development

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chilli-no5-app.git
   cd chilli-no5-app
   ```
2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```
3. Environment setup:

   * Copy the `.env.example` file to a new file named `.env`
   * Update the environment variables with your WooCommerce credentials:
     ```
     EXPO_PUBLIC_WOOCOMMERCE_URL=https://your-store-url.com
     EXPO_PUBLIC_WOOCOMMERCE_CONSUMER_KEY=your_consumer_key
     EXPO_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET=your_consumer_secret
     ```
4. Start the development server:

   ```bash
   npx expo start
   # or alternative commands
   npm start
   yarn start
   ```
5. Scan the QR code with your device:

   * iOS: Scan with the Camera app
   * Android: Scan with the Expo Go app

   Or run on a simulator:

   ```bash
   # iOS
   npx expo run:ios
   # or npm run ios

   # Android
   npx expo run:android
   # or npm run android
   ```

## 📁 Project Structure

```
chilli-no5-app/
├── app/                    # Main application screens and navigation
│   ├── (tabs)/             # Tab-based navigation screens
│   ├── _layout.tsx         # Root layout for the app
│   └── +not-found.tsx      # 404 screen
├── assets/                 # Static assets
│   ├── fonts/              # Custom fonts (Gotham)
│   └── images/             # App images and icons
├── components/             # Reusable UI components
│   └── ui/                 # Core UI components
├── constants/              # App constants and mock data
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
├── utils/                  # Utility functions
└── package.json            # Project dependencies
```

## 🔄 WooCommerce Integration

The app connects to a WooCommerce store using the REST API. Key features include:

* Product listing with pagination
* Category filtering
* Search functionality
* Product details

For WooCommerce API setup:

1. Go to your WooCommerce store admin
2. Navigate to WooCommerce > Settings > Advanced > REST API
3. Add a new key with Read permissions
4. Copy the Consumer Key and Consumer Secret to your `.env` file

## 📚 Additional Resources

* [Expo Documentation](https://docs.expo.dev/)
* [Expo Go](https://docs.expo.dev/get-started/expo-go/)
* [Expo Development Builds](https://docs.expo.dev/develop/development-builds/introduction/)
* [React Native Documentation](https://reactnative.dev/docs/getting-started)
* [WooCommerce REST API Documentation](https://woocommerce.github.io/woocommerce-rest-api-docs/)
