import { useRouteError } from "react-router-dom";
import "./error-page.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container" id="error-page">
      <div className="content">
        <h1>Вупс!</h1>
        <p>Походу был выбран какой-то старнный цвет.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
