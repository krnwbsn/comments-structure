This project is a **React** application built with **Vite**, using **TypeScript**, **Chakra UI** and **SCSS** for styling, and **Bun** as the package manager and runtime.

---

## Features
- **Super Fast Development** – Powered by **Vite** for instant hot reloads.
- **Type Safety** – Uses **TypeScript** to catch errors at compile time.
- **UI Components** – Styled using **Chakra UI** for rapid design development.
- **Bun Package Manager** – Faster alternative to `npm` or `yarn`.

---

## Installation
Make sure you have **Bun** installed on your system. If not, install it via:

```sh
curl -fsSL https://bun.sh/install | bash
```
Then, clone the repository and install dependencies:
```sh
git clone git@github.com:krnwbsn/comments-structure.git
cd your-project
bun i
```

---

## Running the Project
To start the development server, run:
```sh
bun run dev
```
This will launch the Vite development server. You can access the app at:
```arduino
http://localhost:5173
```

---

## Project Structure
```bash
/src
 ├── components    # Reusable React components
 ├── hooks         # Custom React hooks
 ├── pages         # Page components (e.g., Home)
 ├── styles        # SCSS & Chakra UI styles
 ├── types         # TypeScript type definitions
 ├── utils         # Helper functions & utilities
 ├── main.tsx      # Entry point for the application
 ├── App.tsx       # Main app component
```

---

## Tooling & Dependencies
| Name         | Description |
|-------------|-------------|
| [React](https://react.dev/) | JavaScript library for building UI |
| [TypeScript](https://www.typescriptlang.org/) | Typed JavaScript |
| [Vite](https://vitejs.dev/) | Fast build tool |
| [Bun](https://bun.sh/) | Fast JavaScript runtime & package manager |
| [Chakra UI](https://chakra-ui.com/) | Accessible component library |
| [SCSS](https://sass-lang.com/) | CSS preprocessor for modular styling |
| [Formik](https://formik.org/) | Forms & validation |
| [Yup](https://github.com/jquense/yup) | Schema validation |
| [uuid](https://github.com/uuidjs/uuid) | Unique ID generation |
| [dayjs](https://day.js.org/) | Lightweight date library |

---

## Best Practices
- Use `hooks` for logic.
- Use `types` for strong typing.
- Keep `components` reusable.

---

## License
This project is licensed under the [MIT License](LICENSE).

