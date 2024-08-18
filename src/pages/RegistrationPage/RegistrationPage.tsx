// import "./RegistrationPage.scss";
import { Input, Button, Heading, RegistrationInfo } from "../../components/UI";
import { SCRegistrationPage } from "./RegistrationPage.styled";

export const RegistrationPage = () => {
  return (
    <SCRegistrationPage>
      <Heading variant={"h1"} text={"Регистрация"} />
      <form action="#">
        <Input type={"email"} placeholder={"Электронная почта"} isError={false} errorMessage={undefined} />
        <Input type={"tel"} placeholder={"Номер телефона"} isError={false} errorMessage={undefined} />
        <Input type={"password"} placeholder={"Пароль"} isError={false} errorMessage={undefined} />
        <Input type={"password"} placeholder={"Подтверждение пароля"} isError={false} errorMessage={undefined} />
        <Button text={"Зарегистрироваться"} type={undefined} />
      </form>
      <RegistrationInfo
        linkText={"Aвторизоваться"}
        hasAccountText={"У вас есть аккаунт?"}
        authWithText={"Зарегистрироваться с помощью"}
      />
    </SCRegistrationPage>
  );
};
