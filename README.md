# Hacker News Project

Welcome to the Hacker News project! This project is built with the following technologies and frameworks:

- **Deployed Link**: [https://hacker-news-doh4.vercel.app/](https://hacker-news-doh4.vercel.app/)
- **Node Version**: Requires Node.js version greater than 16.4.0
- **Package Manager**: Install `pnpm` in your system, then run `pnpm install` and `pnpm run dev` to complete the setup.
- **Data Source**: The news is fetched from the open API [http://hn.algolia.com/api/v1/search](http://hn.algolia.com/api/v1/search), and the post details are fetched from [https://hn.algolia.com/api/v1/items/:id](https://hn.algolia.com/api/v1/items/:id).
- **Technologies Used**:
  - Vite
  - Next.js 14
  - TypeScript
  - Axios
  - Zustand
- **Styling**: SCSS is used for styling. No external UI library is used; all components are built from scratch.
- **State Management**: Zustand is used to store recent searches by users in local storage, ensuring the values are retained even if the browser is closed.
- **Features**:
  - Search News: Users can search for news by typing keywords in the search box, which uses debouncing to search for results.
  - Predefined Tags: Users can select predefined tags for searching news.
  - Graceful Handling: Loading, errors, and no data fetched are handled gracefully.
  - Post Details: Upon clicking any entry on the home page, users are redirected to the details page of the entry.
  - Comments: In the details page, all comments on the post are listed in a single list format. Nested objects are converted into a single list format.

## Getting Started

1. Ensure your Node.js version is greater than 16.4.0.
2. Install `pnpm` in your system.
3. Run `pnpm install` to install dependencies.
4. Add `.env.local` file with variable `NEXT_PUBLIC_SITEURL=http://localhost:3000` defined in it.
4. Run `pnpm run dev` to start the development server.

## Server-Side Rendering

All data fetched on all pages is done on the server side. If data is not present, the Next.js default 404 page is shown.

Feel free to explore the project, and don't hesitate to contribute or provide feedback!

Enjoy exploring Hacker News!
