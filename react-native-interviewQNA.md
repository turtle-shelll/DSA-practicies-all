# React Native Mid-Level Interview Prep — Practical Answers

---

## 1. Behavioral / Intro Questions

**Tell me about yourself**
2-3 lines: total experience, tech stack (RN, React, Redux, Node if any), 1-2 notable projects/domains (fintech, e-commerce, etc.), and what you're looking for now. Keep it under 90 seconds.

**Previous project / Project overview**
Structure: Problem → your role → tech stack → your specific contributions (features, modules owned) → challenges faced → outcome/impact (performance improved, users, ratings). Practice a 2-minute version and a 30-second version.

**Which project management methodology used**
Say Agile/Scrum in most cases — mention sprint length, daily standups, sprint planning/retro, tools used (Jira/Trello/Azure DevOps). If Kanban, mention continuous flow, WIP limits.

**Which project management tool have you used, in detail**
Jira example: epics → stories → sub-tasks, sprint board, story point estimation, bug tracking workflow (To Do → In Progress → Code Review → QA → Done), how you update tickets daily.

**Process of team management in a project**
Talk about: task breakdown & estimation, code ownership, daily syncs, code reviews before merge, blockers escalation, knowledge sharing/documentation, mentoring juniors if applicable.

**How do you review a PR?**
- Check it does what the ticket says (functionality)
- Code style/lint compliance, naming conventions
- No unnecessary re-renders / performance issues
- Proper error handling, no console.logs left
- Tests included/updated
- Check for security issues (hardcoded secrets, unsafe storage)
- Leave constructive comments, approve or request changes

**What do you do when the app crashes on click of a button?**
Check crash logs (Xcode console / Logcat / Flipper), reproduce locally, check crash reporting tool (Crashlytics/Sentry) for stack trace, isolate the component, check for null/undefined access, async state updates after unmount, add error boundaries and defensive checks, write a fix + regression test.

**What do you do when you're stuck?**
Re-read error/stack trace carefully → check official docs → search GitHub issues for the library → check Stack Overflow → isolate in a minimal reproducible example → ask a teammate/senior with what you've already tried → timebox it (e.g., 30-45 min before escalating).

**What do you do when given a task unknown to you?**
Break it into smaller sub-problems, research docs/POC with a small spike, ask clarifying questions to the lead about expected behavior/edge cases, estimate realistically and communicate if timeline needs adjusting, learn-as-you-build with small testable increments.

---

## 2. JavaScript Fundamentals

**Closures**
A function that "remembers" variables from its outer lexical scope even after the outer function has returned.
```js
function counter() {
  let count = 0;
  return () => ++count;
}
const inc = counter();
inc(); // 1
inc(); // 2
```
Used in: data privacy (module pattern), memoization, event handlers, `useState`/`useCallback` internals.

**Hoisting**
`var` and function declarations are moved to the top of their scope during compilation (function declarations fully hoisted, `var` hoisted but initialized as `undefined`). `let`/`const` are hoisted too but stay in the "temporal dead zone" until the line they're declared — accessing them earlier throws a ReferenceError.

**ES6 new features**
`let`/`const`, arrow functions, template literals, destructuring, spread/rest, default params, classes, promises, modules (import/export), `Map`/`Set`, generators, `for...of`.

**Promise / Promise.all / Promise.race / Promise.allSettled**
- `Promise.all` — runs in parallel, resolves when ALL resolve, rejects fast if ANY rejects.
- `Promise.allSettled` — waits for all, returns status of each (fulfilled/rejected) — never short-circuits.
- `Promise.race` — resolves/rejects as soon as the FIRST settles.
Use case: fetching multiple APIs together and combining results before rendering.

**Run multiple async ops then run logic after**
```js
const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);
processData(users, posts);
```

**Generator functions**
Functions that can pause/resume execution using `yield`, defined with `function*`. Useful for lazy sequences, custom iterators, and were historically used by `redux-saga` to handle async flows in a testable, cancellable way.
```js
function* gen() { yield 1; yield 2; }
```

**Spread operator**
Expands an iterable. `[...arr]`, `{...obj}`. On arrays/objects it does a **shallow copy** (pass-by-value at the top level, but nested objects are still shared references).

**Rest operator**
Collects remaining args into an array: `function sum(...nums) {}`.

**Destructuring**
Extract values from arrays/objects into variables: `const {name, age} = user;` `const [a, b] = arr;`

**Pass by value vs pass by reference**
Primitives (string, number, boolean, null, undefined) → pass by value. Objects/arrays → the reference is copied (so mutating properties affects the original, but reassigning the variable doesn't). Spreading an array/object creates a new reference at the top level — a "value-like" copy — but nested objects inside are still shared by reference.

**call(), apply(), bind()**
All set `this` explicitly.
- `fn.call(obj, a, b)` — invokes immediately, args listed individually.
- `fn.apply(obj, [a, b])` — invokes immediately, args as array.
- `fn.bind(obj, a)` — returns a NEW function with `this` bound, doesn't invoke immediately.

**== vs ===**
`==` does type coercion before comparing; `===` checks value AND type strictly. Always prefer `===` to avoid bugs like `'' == 0` being `true`.

**null vs undefined vs NaN**
- `undefined` — variable declared but not assigned.
- `null` — intentional absence of value, assigned explicitly.
- `NaN` — result of an invalid number operation (`typeof NaN === 'number'`); check with `Number.isNaN()`, not `==`.

**Datatypes in JS**
Primitives: string, number, boolean, null, undefined, symbol, bigint. Non-primitive: object (includes arrays, functions).

**Function execution context**
Each function call creates an execution context with: variable environment (hoisting), scope chain, and `this` binding. There's a Global Execution Context and a new one pushed onto the call stack per function invocation.

**map, reduce, filter**
- `map` — transforms each element, returns new array of same length.
- `filter` — returns subset matching a condition.
- `reduce` — accumulates array into a single value (number, object, array).
```js
[1,2,3].map(x => x*2);       // [2,4,6]
[1,2,3].filter(x => x>1);    // [2,3]
[1,2,3].reduce((a,c)=>a+c,0);// 6
```

**OOPS in ES6 / Encapsulation**
ES6 classes give syntactic sugar over prototypal inheritance. Encapsulation = bundling data + methods and restricting direct access — in JS done via closures, or `#privateField` syntax, or by only exposing getter/setter methods.

**Abstraction vs Encapsulation**
- Abstraction: hiding *implementation complexity*, exposing only what's necessary (e.g., calling `fetchUser()` without knowing the HTTP details inside).
- Encapsulation: hiding *data* by bundling it with the methods that operate on it, restricting direct external access.

**Implements vs Extends**
`extends` is for inheritance (class-to-class, gets implementation). `implements` (TypeScript) enforces a contract/interface — a class must provide certain methods/properties but gets no implementation from it.

**Abstract class**
A class that can't be instantiated directly and is meant to be subclassed — defines a common interface/some base implementation for children to extend. (Not native to JS; used in TS via `abstract class`.)

**Function decorator / Decorator (Angular/TS)**
A decorator is a function that wraps/modifies a class, method, or property's behavior without changing its source, applied with `@decoratorName`. In Angular, `@Component`, `@Injectable`, `@Input` are decorators that attach metadata used by Angular's compiler/DI system.

---

## 3. React Core

**React lifecycle (class) → Hooks equivalent**
- Mount: `constructor` → `render` → `componentDidMount` ≈ `useEffect(() => {}, [])`
- Update: `componentDidUpdate` ≈ `useEffect(() => {}, [dep])`
- Unmount: `componentWillUnmount` ≈ return a cleanup function from `useEffect`

**shouldComponentUpdate**
A class lifecycle method to prevent unnecessary re-renders — return `false` to skip re-rendering when props/state haven't meaningfully changed. Functional equivalent: `React.memo` (for the whole component) with a custom comparator.

**How memo works / implement memo yourself**
`React.memo` wraps a component and does a shallow comparison of props between renders; if unchanged, React reuses the last rendered output instead of re-rendering.
```js
function myMemo(Component) {
  let lastProps, lastResult;
  return function Wrapped(props) {
    if (lastProps && shallowEqual(lastProps, props)) return lastResult;
    lastProps = props;
    lastResult = Component(props);
    return lastResult;
  };
}
```
It stores the last props + rendered output in a closure (React actually stores this on the Fiber node).

**Reconciliation**
React's diffing algorithm — when state changes, React builds a new virtual DOM tree and compares (diffs) it with the previous one using heuristics: same type → update in place; different type → unmount/remount; lists use `key` to match items across renders efficiently. Only the diffed changes are applied to the real DOM (or native views in RN).

**Controlled vs Uncontrolled component**
Controlled — the form value is driven by React state (`value` + `onChange`), single source of truth in React. Uncontrolled — the DOM/native element holds its own value, accessed via a `ref` when needed.

**Props drilling**
Passing props through many intermediate components that don't need them, just to reach a deeply nested child. Solved via Context API, Redux, or component composition.

**useContext — when to use it**
For data needed by many components at different nesting levels without prop drilling — e.g., theme, logged-in user info, language/locale. Not ideal for very frequently-changing high-frequency state (causes re-renders of all consumers) — use Redux/Zustand for that.
```js
const ThemeContext = createContext();
const theme = useContext(ThemeContext);
```

**useMemo vs useCallback**
- `useMemo(() => computeExpensiveValue(a,b), [a,b])` — memoizes a **computed value**.
- `useCallback(() => doSomething(a), [a])` — memoizes a **function reference** (useful to prevent child re-renders when passing callbacks as props, especially with `React.memo`).

**Why hooks don't work in conditionals**
React tracks hooks by **call order** per render (an internal linked list per component instance). If a hook is called conditionally, the order can change between renders, misaligning state with the wrong hook slot. Hooks must always be called unconditionally, in the same order, at the top level.

**HOC and hooks justification vs class components**
Hooks let you reuse stateful logic without wrapper hell (HOCs/render props), split logic by concern instead of lifecycle method, less boilerplate (no `this` binding), smaller bundle, easier to test in isolation as pure functions.

---

## 4. React Native Specific

**React vs React Native**
React renders to the DOM (web); React Native renders to native platform views (UIView on iOS, Views on Android) via the same component model — no DOM, no HTML/CSS tags, uses `View`/`Text` and StyleSheet (a subset of CSS via Flexbox).

**Advantages of React Native**
Single codebase for iOS + Android, JS-based (large talent pool), hot/fast reload for dev speed, native performance via native modules, huge ecosystem, code-push/OTA updates possible, native module bridging when you need platform-specific code.

**Hybrid vs Cross-platform vs Native apps**
- Native: written in platform-specific language (Swift/Kotlin), best performance, separate codebases.
- Cross-platform (RN, Flutter): single codebase, compiles/bridges to near-native UI and performance.
- Hybrid (Cordova/Ionic): a web app (HTML/CSS/JS) wrapped in a native WebView shell — generally lowest performance of the three.

**FlatList vs ScrollView — which is better**
`ScrollView` renders ALL children upfront (fine for small, known lists). `FlatList` renders lazily/virtualizes — only renders items near the viewport, recycles views — much better for large or dynamic lists. Always prefer FlatList for anything more than a handful of items.

**FlatList optimization**
- `keyExtractor` with stable unique keys
- `getItemLayout` if item height is fixed (skips measurement)
- `initialNumToRender`, `windowSize`, `maxToRenderPerBatch` tuning
- `removeClippedSubviews={true}`
- Memoize `renderItem` and row components with `React.memo`
- Avoid inline functions/objects in `renderItem`
- Use `onEndReachedThreshold` for pagination instead of loading everything at once

**Data rendering in FlatList (horizontal loading pattern)**
Use `horizontal` prop, `data` sliced from a parent array, `onEndReached` to load next chunk (pagination), maintain an index/offset in state, append new items to the data array rather than replacing it.

**Handling large numbers of images**
Use `FlatList`/`FastImage` (caching library) instead of `Image`, lazy-load off-screen images, use appropriately sized/compressed images (thumbnails vs full-res), use `resizeMode` properly, consider CDN with on-the-fly resizing, cache with libraries like `react-native-fast-image`.

**Deep linking**
Allows opening the app (or a specific screen) via a URL scheme (`myapp://product/123`) or Universal/App Links (`https://myapp.com/product/123`). Configured via `react-navigation`'s linking config mapping URL patterns to screens; requires native config (Info.plist / AndroidManifest intent filters) plus `associatedDomains`/`assetlinks.json` for universal links.

**What is Applinks**
Android/iOS mechanism (App Links on Android, Universal Links on iOS) that lets a regular `https://` URL open directly in your app (if installed) instead of the browser, verified via a hosted JSON file (`assetlinks.json` / `apple-app-site-association`) proving domain ownership.

**Push notifications — implementation & config**
Using Firebase Cloud Messaging (FCM) typically:
- Android: add `google-services.json`, configure FCM in `AndroidManifest`, request notification permission (Android 13+), handle foreground/background/killed states via `messaging().onMessage` / `setBackgroundMessageHandler`.
- iOS: enable Push Notifications + Background Modes capability in Xcode, upload APNs auth key to Firebase, request permission via `requestPermission()`, handle token registration.
Use libraries like `@react-native-firebase/messaging` or `notifee` for local/rich notifications.

**AsyncStorage — is it good for sensitive data?**
No — AsyncStorage is unencrypted plain key-value storage on disk. For sensitive data (tokens, passwords) use `react-native-keychain` (iOS Keychain / Android Keystore) or encrypted storage libraries like `react-native-encrypted-storage` / `MMKV` with encryption enabled.

**How long does AsyncStorage data persist?**
Until explicitly removed, app data/cache is cleared by the user, or the app is uninstalled — it's not tied to session or app close.

**Other offline storage methods**
`react-native-mmkv` (fast key-value, supports encryption), SQLite (`react-native-sqlite-storage`/`WatermelonDB` for structured/relational data), Realm, `redux-persist` for persisting Redux state, secure Keychain/Keystore for credentials.

**Store user preference / Get location (practical patterns)**
Preference: save to AsyncStorage/MMKV as JSON on change, read on app start (splash/loading state) before rendering main UI.
Location: request permission (`react-native-permissions`), then use `Geolocation.getCurrentPosition()` (from `@react-native-community/geolocation`), handle denied/error states gracefully, consider `watchPosition` for continuous tracking with cleanup on unmount.

**SSL Pinning**
A security technique where the app hardcodes/validates the server's SSL certificate (or public key) so it only trusts that specific cert, preventing MITM attacks even if a malicious/rogue CA cert is installed on the device. Implemented via libraries like `react-native-ssl-pinning` or native TrustKit (iOS)/OkHttp CertificatePinner (Android).

**Encryption for AsyncStorage**
Since AsyncStorage itself has no encryption, wrap it: encrypt data with a library (e.g., `crypto-js` AES) before `setItem`, decrypt after `getItem` — or better, switch to `react-native-encrypted-storage`/MMKV-with-encryption which handles this natively with a secure key stored in Keychain/Keystore.

**Native module bridging (Android)**
Create a Java/Kotlin class extending `ReactContextBaseJavaModule`, expose methods with `@ReactMethod`, register it in a `ReactPackage`'s `createNativeModules()`, add the package in `MainApplication`. Access from JS via `NativeModules.YourModuleName.yourMethod()`.

**Writing native library using Kotlin**
Same pattern as above but in Kotlin — extend `ReactContextBaseJavaModule`, override `getName()`, annotate exposed functions with `@ReactMethod`, use Promises/Callbacks to return async results to JS.

**Have you deployed APK/IPA to stores? Process**
Android: generate a signed release build (`keystore` + `gradlew bundleRelease` → `.aab`), upload to Play Console, fill store listing, submit for review.
iOS: archive in Xcode with a distribution certificate + provisioning profile, upload via Xcode/Transporter to App Store Connect, fill metadata, submit for App Review.

**Can we build desktop apps with React Native?**
Yes, via `react-native-windows` and `react-native-macos` (Microsoft/Meta maintained), reusing much of the RN component/JS logic for desktop targets.

**Interaction Manager**
An RN API to schedule work (e.g., heavy computation, navigation transitions) to run AFTER animations/interactions finish, keeping the UI thread smooth: `InteractionManager.runAfterInteractions(() => {...})`.

**Hermes**
A lightweight JS engine built by Meta, optimized for React Native — improves app start time, reduces memory usage, and smaller APK size by precompiling JS to bytecode ahead of time instead of parsing JS at runtime.

**Tree shaking**
A build-time optimization (via bundlers like Metro/Webpack) that eliminates unused/dead code from the final bundle based on static `import`/`export` analysis, reducing bundle size.

**Memory management / memory optimization in RN**
Avoid memory leaks: clear timers/listeners/subscriptions in `useEffect` cleanup, unsubscribe from event emitters, avoid holding large data in state unnecessarily, use FlatList (virtualization) instead of rendering everything, release image caches, watch for closures capturing large objects unintentionally, profile with Xcode Instruments/Android Profiler/Flipper.

**Native bridging concept**
The mechanism connecting JS and native code — traditionally via an asynchronous, serialized (JSON) "bridge" queue between the JS thread and native thread. The New Architecture (JSI - JavaScript Interface) replaces this with direct synchronous C++ bindings, removing serialization overhead for better performance.

**Responsiveness in RN**
Use Flexbox for layout, `Dimensions`/`useWindowDimensions` for screen size, percentage-based widths, `PixelRatio` for density-aware sizing, libraries like `react-native-responsive-screen` or `react-native-size-matters`, test across device sizes/orientations, avoid hardcoded pixel values.

**Stylesheet in React Native**
`StyleSheet.create({...})` — a subset of CSS (Flexbox-based, camelCase properties, no cascading/inheritance like web CSS). Creating styles this way (vs inline objects) allows RN to send styles by reference (ID) across the bridge and gives some validation.

**Media query (in RN context)**
No native CSS media queries — instead use `useWindowDimensions()`/`Dimensions.get('window')` to conditionally apply styles based on width/height/orientation, or libraries like `react-native-responsive-screen`.

**Internationalization / Localization**
Use `react-native-i18n` (or newer: `i18next` + `react-i18next`, `react-native-localize`) — store translation JSON files per locale, detect device locale, provide a translation function `t('key')`, handle RTL layouts with `I18nManager`.

**How does React Native work (rendering)**
JS thread runs your React code and business logic → produces a tree of UI descriptions → sent (via bridge/JSI) to the native side → native "Shadow Tree"/Yoga engine computes layout (Flexbox) → native UI thread renders actual native views (UIView/Android View) — separate from the JS thread so JS work doesn't block UI rendering directly, though heavy sync work can still cause jank.

---

## 5. Redux

**Redux architecture / flow**
Single source of truth = **Store**. UI dispatches an **Action** (plain object `{type, payload}`) → **Reducer** (pure function) takes current state + action → returns new state → Store notifies subscribed components → UI re-renders with new state. Unidirectional data flow.

**Redux middleware**
Sits between dispatching an action and it reaching the reducer — used for logging, async logic, crash reporting, etc. Example: `redux-thunk`, `redux-saga`, `redux-logger`.

**Redux Thunk vs Redux Saga**
- Thunk: dispatch a function instead of an object; simple, uses `async/await` directly inside action creators, minimal boilerplate, good for straightforward async calls.
- Saga: uses ES6 generator functions to manage complex async flows (cancellation, debouncing, sequencing, retries) declaratively — more powerful but more boilerplate and learning curve. Choose Saga for complex flows (e.g., race conditions, websockets); Thunk for simple API calls.

**Calling APIs through middleware**
With Thunk: `dispatch(fetchUserThunk())` where the thunk itself calls the API and dispatches success/failure actions. With Saga: `yield call(api.fetchUser)` inside a generator watched by `takeLatest('FETCH_USER', fetchUserSaga)`.

**Calling APIs without Redux/state management**
Use local component state (`useState`) + `useEffect` for the fetch, or a data-fetching library like `react-query`/`SWR`/`RTK Query` which handles caching, loading/error state, and revalidation without manual Redux plumbing.

**Side effects in Redux**
Redux reducers must be pure (no API calls, no mutations, no randomness). Side effects (API calls, async storage, timers) are handled outside reducers — in middleware (thunk/saga) or `useEffect` in components — then the *result* is dispatched as a plain action.

**Redux Persist**
Library that persists (and rehydrates) your Redux store to storage (AsyncStorage/MMKV) across app restarts. Configure a `persistConfig` (key, storage, whitelist/blacklist of reducers), wrap the root reducer with `persistReducer`, wrap the app in `PersistGate` to delay rendering until rehydration completes.

**Redux Persist with AsyncStorage**
```js
const persistConfig = { key: 'root', storage: AsyncStorage, whitelist: ['auth'] };
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);
```

**State management library (options)**
Redux (+ Redux Toolkit), Context API (for simple/global-lite state), Zustand, MobX, Recoil, Jotai — RTK Query/React Query for server state specifically.

---

## 6. Security & Auth Topics

**Data security / App security (general talking points)**
Encrypt sensitive data at rest (Keychain/Keystore, encrypted storage), use HTTPS + SSL pinning in transit, never hardcode API keys/secrets in the bundle (use env configs + backend proxy), obfuscate/minify release builds, validate all inputs, avoid logging sensitive data in production.

**App authentication vs authorization**
Authentication = verifying WHO the user is (login, biometrics, tokens). Authorization = verifying WHAT that authenticated user is allowed to do (roles/permissions/scopes).

**Local vs Remote authentication**
Local: device-based (biometrics via Face ID/Touch ID/`react-native-biometrics`, device PIN) — verifies the user IS the device owner, doesn't necessarily talk to a server.
Remote: server validates credentials/tokens against a backend (username/password, OAuth) — establishes identity with the actual account system.

**PIN-based authentication**
App-level PIN (separate from device lock) stored as a hash (never plaintext) — often via Keychain/Keystore-backed secure storage, with lockout/retry-limit logic after failed attempts, sometimes combined with biometrics as a fallback.

**Token & Refresh Token significance**
Access token: short-lived, sent with each API request to prove identity/authorization (e.g., JWT, expires in 15min-1hr — limits damage if leaked). Refresh token: long-lived, stored securely, used only to silently obtain a new access token when it expires, without forcing re-login — should be stored more securely (Keychain) than access tokens.

**JWT / Bearer token — how to get it**
JWT = JSON Web Token: header.payload.signature, base64-encoded, signed by the server so it can't be tampered with. You get it typically from a login API response (`POST /login` → returns `{accessToken, refreshToken}`); it's then sent as `Authorization: Bearer <token>` on subsequent requests.

**Keychain access in iOS**
Secure, encrypted OS-level storage for sensitive small data (tokens, passwords, keys), survives app deletion in some configs (depending on accessibility setting), accessed in RN via `react-native-keychain`, protected by device passcode/biometrics.

**Penetration testing of app for data security (talking points)**
Check for: insecure data storage (unencrypted AsyncStorage), hardcoded secrets in the bundle (can be decompiled — `apktool`/reverse engineering), lack of SSL pinning (MITM vulnerable), weak session/token handling, insufficient input validation/injection risks, exposed debug logs, insecure deep link handling.

**Scenario-based app access use cases**
Talk through examples: role-based screen access (admin vs user), feature flags for gated rollout, session expiry forcing re-login, device-binding to prevent simultaneous multi-device sessions (see below).

**Detect login on new device & log out from previous device**
Backend approach: store a `deviceId`/`sessionId` per active session in DB; on new login, backend either invalidates the previous session token or emits a socket/push event to the old device telling it to log out; the old device's app listens (via WebSocket/FCM silent push) and clears local auth state, redirecting to login.

---

## 7. AWS

**AWS Amplify**
A framework/toolchain from AWS to quickly wire up backend services (Auth via Cognito, API via AppSync/API Gateway, Storage via S3, hosting) into a mobile/web app with pre-built SDKs and CLI-driven provisioning.

**AWS Pinpoint**
AWS's service for customer engagement — push notifications, SMS, email campaigns, and analytics/user segmentation, often paired with Amplify for RN push notification setup.

**AWS S3**
Object storage service — used commonly in RN apps for storing/retrieving user-uploaded files (images, docs) via signed requests.

**Pre-signed URL of S3**
A temporary URL generated (server-side, using AWS credentials) that grants time-limited access to upload/download a specific S3 object WITHOUT exposing your AWS credentials to the client. Flow: app requests a pre-signed URL from your backend → backend generates it via AWS SDK → app uploads directly to S3 using that URL.

**Do you have experience on Node / AWS / Git?**
Answer honestly based on your actual experience — give one concrete example if yes (e.g., "built a small Express API for X", "used S3 pre-signed uploads for profile pictures", "use Git daily — feature branches, PR-based workflow, rebase to keep history clean").

---

## 8. Firebase / WebRTC / Payment / Real-time

**Firebase (typical RN usage)**
Auth (`@react-native-firebase/auth`), push notifications (FCM), Firestore/Realtime DB for lightweight data sync, Crashlytics for crash reporting, Remote Config for feature flags, Analytics for usage tracking.

**Payment gateway**
If experienced: name it (Razorpay/Stripe/PayPal), describe integration flow — SDK handles the actual card entry (PCI compliance offloaded), your backend creates an order/intent, client confirms payment via SDK, backend verifies via webhook before marking order complete. Never handle raw card data yourself.

**WebRTC**
Peer-to-peer real-time audio/video/data communication protocol — in RN typically via `react-native-webrtc`, needs a signaling server (often via Socket.IO) to exchange SDP offers/answers and ICE candidates before the P2P connection is established.

**Socket.IO**
Library for real-time, bidirectional communication over WebSockets (with fallback), used for chat, live notifications, or signaling for WebRTC — connect with `socket.io-client`, listen with `socket.on('event', cb)`, emit with `socket.emit('event', data)`, always clean up listeners on unmount.

**WebSockets (general)**
Persistent full-duplex connection between client and server (unlike request/response HTTP) — good for real-time features like chat, live tracking, notifications. Handle reconnection logic, and clean up connections on component unmount to avoid leaks.

**builder.ai UI engine (if it comes up as a proprietary tool question)**
Answer based on actual hands-on exposure only — describe it generally as a visual/no-code UI builder generating RN components/config consumed by an app shell, and speak to how you integrated custom native modules or handled dynamic rendering if you did.

---

## 9. Testing & Debugging

**How do you test your code and components?**
Unit tests with Jest (pure functions, reducers, utils), component tests with React Native Testing Library (render, fire events, assert output — avoid testing implementation details), mock native modules/APIs, manual QA on both platforms, occasionally E2E with Detox.

**Unit Test (general practical points)**
Test one unit of logic in isolation, mock dependencies (API calls, native modules), use `describe`/`it` blocks, aim for meaningful coverage on business logic over trivial UI, run in CI on every PR.

**What debuggers do you use?**
Flipper (network, layout, logs), React Native Debugger, Chrome DevTools (console/network via remote JS debugging), Xcode Instruments (iOS memory/perf), Android Studio Profiler (memory/CPU/network on Android).

---

## 10. Coding Problems

**Rotate an array 90 degrees clockwise (as a matrix)**
```js
function rotate(matrix) {
  const n = matrix.length;
  // transpose
  for (let i = 0; i < n; i++)
    for (let j = i; j < n; j++)
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
  // reverse each row
  matrix.forEach(row => row.reverse());
  return matrix;
}
```

**Login screen + print prime numbers**
```jsx
function LoginScreen() {
  const [u, setU] = useState(''); const [p, setP] = useState('');
  const login = () => { if (u === 'admin' && p === '1234') printPrimes(50); };
  return (
    <View>
      <TextInput placeholder="username" onChangeText={setU} />
      <TextInput placeholder="password" secureTextEntry onChangeText={setP} />
      <Button title="Login" onPress={login} />
    </View>
  );
}
function printPrimes(limit) {
  for (let n = 2; n <= limit; n++) {
    let isPrime = true;
    for (let i = 2; i * i <= n; i++) if (n % i === 0) { isPrime = false; break; }
    if (isPrime) console.log(n);
  }
}
```

**Getter/setter with private value (closure)**
```js
function createCounter(initial = 0) {
  let value = initial;
  return {
    get: () => value,
    set: () => { value += 1; return value; }
  };
}
const c = createCounter();
c.set(); c.set();
console.log(c.get()); // 2 — 'value' is not accessible directly from outside
```

**Todo Program (basic RN)**
```jsx
function Todo() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const add = () => { if (text.trim()) { setTodos([...todos, { id: Date.now(), text }]); setText(''); } };
  return (
    <View>
      <TextInput value={text} onChangeText={setText} />
      <Button title="Add" onPress={add} />
      <FlatList data={todos} keyExtractor={i => i.id.toString()} renderItem={({item}) => <Text>{item.text}</Text>} />
    </View>
  );
}
```

**Button component calling a parent function**
```jsx
function MyButton({ onPress }) {
  return <TouchableOpacity onPress={onPress}><Text>Click</Text></TouchableOpacity>;
}
function Parent() {
  const handleClick = () => console.log('clicked!');
  return <MyButton onPress={handleClick} />;
}
```

**Horizontal list loading 4 thumbnails at a time from a parent array**
```jsx
function ThumbList({ allData }) {
  const PAGE = 4;
  const [data, setData] = useState(allData.slice(0, PAGE));
  const loadMore = () => {
    setData(prev => prev.length < allData.length
      ? allData.slice(0, prev.length + PAGE)
      : prev);
  };
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <Thumbnail item={item} />}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
    />
  );
}
```

**Dynamically load 1.js then 2.js on button click (web context)**
```html
<script src="1.js"></script>
<button onclick="loadScript2()">Load</button>
<script>
function loadScript2() {
  const s = document.createElement('script');
  s.src = '2.js';
  document.body.appendChild(s);
}
</script>
```

---

## 11. Web Fundamentals (Babel, Webpack, CSS, Service Worker)

**Babel**
A JS transpiler that converts modern JS/JSX/TS syntax into a version compatible with older engines/target runtimes (e.g., JSX → `React.createElement` calls). In RN, the Metro bundler uses Babel under the hood.

**Webpack**
A module bundler — takes JS/assets with dependencies and bundles them into optimized output files, supports code-splitting, tree-shaking, loaders/plugins for non-JS assets (CSS, images). (RN uses **Metro** as its bundler instead, but the concept is analogous.)

**Service Worker**
A background script (web only) that runs separately from the main page, enabling offline caching, push notifications, and background sync for PWAs — intercepts network requests via the Cache API. Not directly used in RN apps (no browser/service worker context), but relevant if discussing a hybrid or web version.

**CSS Box Model**
Every element = content → padding → border → margin (from inside out). Total width = content + padding + border + margin (unless `box-sizing: border-box`, where padding/border are included within the specified width).

**Flexbox / flexDirection / justifyContent vs alignItems**
- `flexDirection`: `row`/`column` (RN default is `column`, web default is `row`) — sets the main axis.
- `justifyContent`: aligns children along the **main axis** (e.g., `space-between`, `center`).
- `alignItems`: aligns children along the **cross axis** (perpendicular to main axis).

**SCSS**
CSS preprocessor adding variables, nesting, mixins, functions, partials/imports — compiled down to plain CSS at build time. (Not used in RN directly, relevant for web/Ionic contexts.)

---

## 12. Ionic / Cordova / Angular (if these come up)

**Platform package / Platform plugins in Ionic**
`Platform` service detects the runtime (iOS/Android/web/Cordova) so you can branch logic; plugins (Capacitor/Cordova plugins) expose native device APIs (camera, geolocation, etc.) to the web-based Ionic app.

**Storage in Ionic**
`@ionic/storage` — an abstraction over SQLite/IndexedDB/localStorage depending on platform, for simple key-value persistence.

**Custom Cordova plugin**
Requires a native side (Java/Obj-C implementing the plugin interface) + a JS interface file that bridges calls via `cordova.exec()`, registered in `config.xml` and `plugin.xml`.

**Interceptor in Angular (and multiple interceptors)**
`HttpInterceptor` intercepts outgoing HTTP requests/incoming responses — used for attaching auth headers, global error handling, logging. Yes, multiple interceptors can be chained via the `HTTP_INTERCEPTORS` multi-provider array; they execute in the order provided.

**Lifecycle Hooks in Ionic**
`ionViewWillEnter`, `ionViewDidEnter`, `ionViewWillLeave`, `ionViewDidLeave` — fire around Ionic's page navigation (distinct from Angular's own `ngOnInit`/`ngOnDestroy`), useful for re-fetching data each time a page is revisited.

**Metadata in Angular**
Data attached to a class via decorators (e.g., `@Component({selector, template})`) that tells Angular's compiler how to construct/wire up that class — not part of the class logic itself.

**export default**
`export default` marks a single main export per module, imported without curly braces (`import Foo from './foo'`), vs named exports which require `{}` and exact names.

**Union type (TypeScript)**
A type that can be one of several types: `let id: string | number;` — must be narrowed (type-checked) before using type-specific operations.

---

## Quick Tips for the Interview
- For every "have you used X" question — be honest; briefly mention what you used it FOR if yes, or say "not directly, but I understand the concept and how it fits" if no.
- For system/security questions, structure your answer as: **problem it solves → how it works → a library/example you'd use**.
- For coding questions, think out loud, clarify edge cases first (empty array, null input), then code.
- Practice your 2-minute project walkthrough out loud at least 3 times before the interview.








************************************************************************************
************************************************************************************
************************************************************************************

<!-- console.log("Hello, World!");

const ramArr = ["eat", "tea", "tan", "ate", "nat", "bat"];


function createAnnagrams(arr){
    const myAnnagram = {};

    for(let i = 0; i < arr.length; i++){
        const unique = arr[i].split("").sort().join("");
        // console.log("unique ==>>>",unique);
        if(myAnnagram[unique]){
            myAnnagram[unique].push(arr[i]);
        }else{
            myAnnagram[unique] = [];
            myAnnagram[unique].push(arr[i]);
        }
    }
    console.log("myAnnagram =>",myAnnagram);
};


createAnnagrams(ramArr); -->



************************************************************************************
************************************************************************************
************************************************************************************



<!-- 
What was your role in project 
What is RTK query and what are slices
How would you manage Webview connection with native views
How would you handle difference in development in android and iOS
How would you optimise the build and how would you fast process the pipeline of deployment
How would you optimise the application 
How would you handle version change and make sure the previous build works fine after you have released new build to play store -->


<!-- 
What are the deployment steps?
What is your usual release pipeline from development to deployment?
How would you execute code only in the Pilot environment?
What is the difference between Live and Pilot environments?
Have you faced any performance-related issue and solved it?
Have you implemented caching for APIs?
Have you worked with WebView?
How does postMessage and onMessage work?
How would you open a specific WebView page from a native screen?
Have you implemented custom native modules?
Give one use case where you would need a custom native module.
How would you redirect users from a website to the app only if the app is installed?
Give an example of an Android URL that can open the app.
What about URLs that don’t use HTTPS?
Can we still use custom URL schemes? -->



<!-- 
tell about your self,
what was your role in each project,
have you used Webview in your project,
in which functionality you have used webview.
have you worked with any analytics.
have you used any third party SDK and which one.
have you worked with optimization and explanation of them. -->