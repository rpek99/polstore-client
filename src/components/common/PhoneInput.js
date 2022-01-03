import React from 'react';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import ReactPhoneInput from "react-phone-input-material-ui";
import "react-phone-input-material-ui/lib/material.css";
import tr from "react-phone-input-material-ui/lang/tr.json";


const PhoneInput = (props) => {
    const {
        field,
        fieldState: {error},
    } = props;

    return (
        <>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid container xs={3} alignItems="center">
                <FormLabel>{props.placeholder}</FormLabel>
            </Grid>
            <Grid item xs={9}>
                <ReactPhoneInput
                    value={field.value}
                    onChange={field.onChange}
                    country="tr"
                    isValid={!error}
                    onlyCountries={["tr", "de", "us"]}
                    masks={{ tr: "(...) ... .. .." }}
                    localization={tr}
                    enableSearch={true}
                    disableSearchIcon={true}
                    component={Input}
                    specialLabel={null}
                    inputProps={{
                    disableUnderline: true,
                    multiline: true,
                    }}
                />
                <FormHelperText error={!!error}>{error?.message}</FormHelperText>
            </Grid>
          </Grid>
        </>
    )
}
export default PhoneInput;