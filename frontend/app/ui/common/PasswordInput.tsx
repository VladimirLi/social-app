"use client";

import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Input, InputProps } from "./Input";

interface PasswordInputProps extends InputProps {}

export function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="relative">
      <Input type={showPassword ? "text" : "password"} {...props} />
      <button
        type="button"
        className="absolute top-0 end-0 rounded-e-md pt-2.5 pr-3.5"
        onClick={() => setShowPassword(!showPassword)}
      >
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
      </button>
    </div>
  );
}
