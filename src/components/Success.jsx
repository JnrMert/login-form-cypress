import { Link } from "react-router-dom";
import "./Success.css";

export default function Success() {
  return (
    <div className="success-container" data-testid="success-page">
      <h1>Başarıyla Giriş Yaptınız!</h1>
      <p>Hoş geldiniz, hesabınıza başarıyla giriş yaptınız.</p>
      <Link to="/" data-testid="back-to-login">
        Giriş Sayfasına Dön
      </Link>
    </div>
  );
}
