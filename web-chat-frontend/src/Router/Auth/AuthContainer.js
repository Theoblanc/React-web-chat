import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import {
  LOG_IN,
  CREATE_ACCOUNT,
  CONFIRM_PASSWORD,
  LOCAL_LOG_IN
} from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const secret = useInput("");
  const email = useInput("");
  const password = useInput("");

  const requestSecretMutation = useMutation(LOG_IN, {
    variables: { email: email.value }
  });

  const createAccountMutation = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value
    }
  });

  const confirmPasswordQuery = useQuery(CONFIRM_PASSWORD, {
    variables: {
      email: email.value,
      password: password.value
    }
  });

  const localLogInMutation = useMutation(LOCAL_LOG_IN);

  const onSubmit = async e => {
    e.preventDefault();

    if (action === "logIn") {
      if (email.value !== "" && password.value !== "") {
        try {
          const {
            data: { confirmPassword: token }
          } = await confirmPasswordQuery();
          if (token !== "" && token !== undefined) {
            localLogInMutation({ variables: { token } });
          } else {
            setTimeout(() => setAction("signUp"), 3000);
            throw Error();
          }
        } catch {
          toast.error("Can't confirm email or password ,check again");
        }
      } else {
        toast.error("Email is required and password is required");
      }
    } else if (action === "signUp") {
      if (
        email.value !== "" &&
        username.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== "" &&
        password.value !== ""
      ) {
        try {
          const {
            data: { createAccount }
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error("Can't create account");
          } else {
            toast.success("Account created! Log In now");
            setTimeout(() => setAction("logIn"), 3000);
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error("All field are required");
      }
    } else if (action === "confirm") {
      if (secret.value !== "") {
        try {
          const {
            data: { requestSecret }
          } = await requestSecretMutation();
          if (!requestSecret) {
            toast.error("You dont have an account yet, create one");
          } else {
            toast.success("Check your inbox for your login secret");
            setAction("confirm");
          }
        } catch {
          toast.error("Can't request secret, try again");

        }
    }
  }
};

return (
  <AuthPresenter
    setAction={setAction}
    action={action}
    username={username}
    firstName={firstName}
    lastName={lastName}
    email={email}
    password={password}
    secret={secret}
    onSubmit={onSubmit}
  />
);
};