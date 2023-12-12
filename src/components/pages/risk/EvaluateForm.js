import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  CardContent,
  Grid,
  Button,
  Stack,
  FormControlLabel,
  RadioGroup,
  FormControl,
  FormHelperText,
  MenuItem,
} from '@mui/material';

// components
import CustomTextField from '../../forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../forms/theme-elements/CustomFormLabel';

import CustomSelect from '../../forms/theme-elements/CustomSelect';

// ประเมินความเสี่ยง
const evaluates = [
  {
    value: 'passed',
    label: 'ผ่าน',
  },
  {
    value: 'failed',
    label: 'ไม่ผ่าน',
  },
];

const validationSchema = yup.object({
  EvaluateDate: yup.string().required('กรุณาระบุวันที่เข้าประเมิน'),
  Evaluate: yup.string().required('กรุณาระบุผลการประเมิน'),
});

const EvaluateRiskForm = () => {
  const [value, setValue] = React.useState('');
  const [evaluate, setEvaluate] = React.useState('');

  const handleChangeCauseAnalysis = (event) => {
    setValue(event.target.value);
  };

  const handleChangeEvaluate = (event) => {
    setEvaluate(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      EvaluateDate: '',
      Evaluate: '',
    },
    validationSchema,
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack>
          <CardContent>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="evaluateDate"
                  >
                    วันที่เข้าประเมิน
                  </CustomFormLabel>

                  <CustomTextField
                    labelId="evaluateDate"
                    id="evaluateDate"
                    fullWidth
                    name="evaluateDate"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  {formik.errors.EvaluateDate && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.EvaluateDate}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="evaluate"
                  >
                    ผลการประเมิน
                  </CustomFormLabel>
                  <CustomSelect
                    fullWidth
                    id="evaluate"
                    variant="outlined"
                    value={formik.values.evaluate}
                    onChange={formik.handleChange}
                  >
                    {evaluates.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                  {formik.errors.Evaluate && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.Evaluate}{' '}
                    </FormHelperText>
                  )}
                </Grid>

                <Grid item xs={12} sm={12}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-risk-detail"
                  >
                    ข้อเสนอแนะ
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-risk-detail"
                    multiline
                    rows={2}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Stack direction="row" spacing={2} sx={{ justifyContent: 'end' }} mt={3}>
                <Button size="large" variant="contained" color="primary" type="submit">
                  Save
                </Button>
                <Button size="large" variant="text" color="error">
                  Cancel
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default EvaluateRiskForm;
