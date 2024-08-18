import "./LoginPage.scss";
import { Input, Button, Heading, RegistrationInfo } from "../../components/UI";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Heading variant={"h1"} text={"Авторизация"} />
      <form action="#">
        <Input type={"tel"} placeholder={"Номер телефона"} isError={false} errorMessage={undefined} />
        <Input type={"password"} placeholder={"Пароль"} isError={false} errorMessage={undefined} />
        <Button text={"Войти"} type={undefined} />
      </form>
      <Link to="/">Забыли пароль?</Link>
      <RegistrationInfo
        linkText={"Зарегистрироваться"}
        hasAccountText={"У вас нет аккаунта?"}
        authWithText={"Войти с помощью"}
      />
    </div>
  );
};
