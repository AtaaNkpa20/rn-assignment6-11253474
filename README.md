# Re-designed MockUp

## Design Choices

- **Navigation**: Implemented using `@react-navigation` to provide a tab-based navigation between Home and Cart screens.
- **State Management**: Used `useState` and `useEffect` hooks for state management and side effects.
- **Local Storage**: Used `AsyncStorage` to persist cart data locally.

## Data Storage

- The cart items are stored using `AsyncStorage`. When items are added or removed from the cart, the updated cart is saved to `AsyncStorage` to ensure persistence across app sessions.

## Screenshots

![Home Screen](./screenshot_1.png)
![Cart Screen](./screenshot_2.png)
