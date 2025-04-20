import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './LoginPage.module.css';

export const LoginPage = ({onLogin}) => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState(null);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(credentials.role==="admin"){
            navigate("/admin");
            onLogin && onLogin({username: credentials.username,role:credentials.role});
        }
        else if(credentials.role==="user"){
            navigate("/");
            onLogin && onLogin({username: credentials.username,role:credentials.role});
        }
        else{
            setError("Username or password is incorrect");
        }
    };

    return (
        <div className={styles.login}>
            <div className={styles.loginCard}>
                <div className={styles.loginHeader}>
                    <h2>Đăng nhập</h2>
                </div>

                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Email</label>
                        <input
                            type="text"
                            value={credentials.username}
                            onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                            required
                            className={styles.formInput}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Mật khẩu</label>
                        <input
                            type="password"
                            value={credentials.password}
                            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                            required
                            className={styles.formInput}
                        />
                    </div>

                    {error && <div className={styles.error}>{error}</div>}

                    <div className={styles.rememberMe}>
                        <input
                            type="checkbox"
                            id="remember"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="remember">Ghi nhớ đăng nhập</label>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Đăng nhập
                    </button>

                    <div className={styles.forgotPassword}>
                        <a href="#">Quên mật khẩu?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};
