# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


To run code of Front end
npm run dev

to run backend code
npm run dev

Note: Change the mongodb string

Initially the appears link this
mongodb+srv://prasad:<db_password>@user.38ly4.mongodb.net/?retryWrites=true&w=majority&appName=user

we have to add database password in place of de_password 
and cluster name like "user" before question mark ?

mongodb+srv://prasad:prasad12@user.38ly4.mongodb.net/user?retryWrites=true&w=majority&appName=user