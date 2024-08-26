"use client";

import type { CreateUser } from "@types";
import type React from "react";

import { AuthForm } from "@components/layouts/AuthForm";
import { Button } from "@components/ui/Button";
import { Checkbox } from "@components/ui/Checkbox";
import { FormFooter } from "@components/ui/FormFooter";
import { Input } from "@components/ui/Input";
import { Link } from "@components/ui/Link";
import { useState } from "react";

const SignUp = (): React.JSX.Element => {
  const [formData, setFormData] = useState<CreateUser>({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    terms: "off",
  });

  const formId = "auth-form";

  return (
    <>
      <AuthForm name={formId} title="Sign up">
        <div className="splitted-input">
          <div className="input-container">
            <Input
              autocomplete="given-name"
              name="first_name"
              placeholder="John"
              required={true}
              title="First name"
              type="text"
            />
          </div>
          <div className="input-container">
            <Input
              autocomplete="family-name"
              name="last_name"
              placeholder="Smith"
              required={true}
              title="Last name"
              type="text"
            />
          </div>
        </div>
        <Input
          autocomplete="email"
          name="email"
          placeholder="name@email.tld"
          required={true}
          title="Email"
          type="email"
        />
        <Input
          autocomplete="new-password"
          name="password"
          placeholder="••••••••"
          required={true}
          title="Password"
          type="password"
        />
        <div className="terms-container">
          <Checkbox name="terms" required={true} />
          <label htmlFor="terms">
            I agree to the <Link href="#">terms of use</Link>
          </label>
        </div>
        <Button disabled={false} form={formId} primary={true} type={"submit"}>
          Create Account
        </Button>
      </AuthForm>
      <FormFooter>
        <p>
          Already have an account? <Link href="#">Login</Link>
        </p>
      </FormFooter>
    </>
  );
};

export default SignUp;
