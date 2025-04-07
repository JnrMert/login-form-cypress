import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Email validasyonu için regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Güçlü şifre için regex (en az 8 karakter, bir büyük harf, bir küçük harf, bir rakam)
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  // Form validasyonu
  useEffect(() => {
    const newErrors = {};

    // Email validasyonu
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Lütfen geçerli bir e-posta adresi girin";
    }

    // Şifre validasyonu
    if (formData.password && !passwordRegex.test(formData.password)) {
      newErrors.password =
        "Şifre en az 8 karakter ve bir büyük harf, bir küçük harf ve bir rakam içermelidir";
    }

    setErrors(newErrors);

    // Formun geçerli olup olmadığını kontrol et
    setIsValid(
      emailRegex.test(formData.email) &&
        passwordRegex.test(formData.password) &&
        formData.terms
    );
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      // Form başarıyla gönderildiğinde success sayfasına yönlendir
      navigate("/success");
    }
  };

  return (
    <div className="login-container">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit} data-testid="login-form">
        <div className="form-group">
          <label htmlFor="email">E-posta</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
            data-testid="email-input"
          />
          {errors.email && (
            <div className="error-message" data-testid="email-error">
              {errors.email}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "input-error" : ""}
            data-testid="password-input"
          />
          {errors.password && (
            <div className="error-message" data-testid="password-error">
              {errors.password}
            </div>
          )}
        </div>

        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            data-testid="terms-checkbox"
          />
          <label htmlFor="terms">Şartları ve koşulları kabul ediyorum</label>
        </div>

        <button type="submit" disabled={!isValid} data-testid="login-button">
          Giriş Yap
        </button>
      </form>
    </div>
  );
}
