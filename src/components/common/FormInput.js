import React, {useState}from "react";
import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


const FormInput = (props) => {
    const {
        field,
        fieldState: {error},
        type
    } = props;

    const [showPassword, setShowPassword] = useState(true);
    const [inputType, setInputType] = useState(type);

    return (
        <TextField
            error={!!error}
            helperText={error?.message}
            {...field}
            fullWidth
            defaultValue={props.defaultValue}
            label={props.label}
            required={props.required}
            disabled={props.disabled}
            type={inputType}
            InputProps={
                type === "password" && {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          setShowPassword(!showPassword);
                          setInputType(showPassword ? "text" : "password");
                        }}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              }
        />
    );
}
export default FormInput;