import "@styles/global.css";
import { Children } from "react";

export const metadata = {
  title: "AIPromptsShare",
  description: "Discover & Share AI prompts",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{Children}</main>
      </body>
    </html>
  );
};

export default layout;
