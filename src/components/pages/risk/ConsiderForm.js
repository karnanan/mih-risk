import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  CardContent,
  Grid,
  FormHelperText,
  MenuItem,
  Box,
  Avatar,
  Button,
  Stack,
  ListSubheader,
  Autocomplete,
  Select,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

// components
import CustomTextField from '../../forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../forms/theme-elements/CustomFormLabel';
import CustomSelect from '../../forms/theme-elements/CustomSelect';

// ประเภทความเสี่ยง
const risktypes = [
  {
    value: 'Cinic',
    label: 'Cinic',
  },
  {
    value: 'Non-Clinic',
    label: 'Non-Clinic',
  },
];

// locations
const locations = [
  {
    value: 'IT',
    label: 'แผนกเทคโนโลยีสารสนเทศ',
  },
  {
    value: 'ACC',
    label: 'แผนกบัญชี',
  },
  {
    value: 'ACF',
    label: 'แผนกบัญชีทรัพย์สิน',
  },
  {
    value: 'OPD1',
    label: 'แผนกผู้ป่วยนอก 1',
  },
];

// ผู้อยู่ในเหตุการณ์
const witnesses = [
  {
    value: '5900284',
    label: 'นางสาวกานติ์อนันต์ ปุริมานุรักษ์',
  },
  {
    value: '5900284',
    label: 'นางสาวกานติ์อนันต์ ปุริมานุรักษ์',
  },
  {
    value: '5900284',
    label: 'นางสาวกานติ์อนันต์ ปุริมานุรักษ์',
  },
  {
    value: '5900284',
    label: 'นางสาวกานติ์อนันต์ ปุริมานุรักษ์',
  },
];

const divs = [
  {
    value: 'IT',
    label: 'แผนกเทคโนโลยีสารสนเทศ',
  },
  {
    value: 'ACC',
    label: 'แผนกบัญชี',
  },
  {
    value: 'ACF',
    label: 'แผนกบัญชีทรัพย์สิน',
  },
  {
    value: 'OPD1',
    label: 'แผนกผู้ป่วยนอก 1',
  },
];

// คณะกรรมการที่เกี่ยวข้อง
const committees = [
  {
    value: 'IC',
    label: 'IC',
  },
  {
    value: 'RM',
    label: 'RM',
  },
  {
    value: 'ENV',
    label: 'ENV',
  },
  {
    value: 'PTC',
    label: 'PTC',
  },
];

// เครื่องมือเครื่องใช้
const risktools = [
  {
    value: 'RCA',
    label: 'RCA',
  },
];

// พิจารณา
const considers = [
  {
    value: 'ทบทวนซ้ำ',
    label: 'ทบทวนซ้ำ',
  },
  {
    value: 'รอประเมิน',
    label: 'รอประเมิน',
  },
];

const validationSchema = yup.object({
  EvaluateDate: yup.string().required('กรุณาระบุวันที่จะเข้าประเมิน'), // กรณีเลือกเป็นทบทวนซ้ำ ไม่บังคับ
  Consider: yup.string().required('กรุณาระบุผลการพิจารณา'),
});

const ConsiderRiskForm = () => {
  const formik = useFormik({
    initialValues: {
      EvaluateDate: '',
      Consider: '',
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
                    htmlFor="consider"
                  >
                    พิจารณาความเสี่ยง
                  </CustomFormLabel>
                  <CustomSelect
                    labelId="consider"
                    fullWidth
                    id="consider"
                    name="consider"
                    variant="outlined"
                    value={formik.values.consider}
                    onChange={formik.handleChange}
                  >
                    {considers.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                  {formik.errors.Consider && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.Consider}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="evaluateDate"
                  >
                    ระบุวันที่เข้าประเมิน
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

export default ConsiderRiskForm;
