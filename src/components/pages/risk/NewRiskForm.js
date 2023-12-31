import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import {
  CardContent,
  Grid,
  Typography,
  MenuItem,
  Button,
  Stack,
  Divider,
  Autocomplete,
  FormHelperText,
  Box,
} from '@mui/material';

// components
import CustomTextField from '../../forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../forms/theme-elements/CustomFormLabel';
import CustomSelect from '../../forms/theme-elements/CustomSelect';

// ประเภทความเสี่ยง
const Categories = [
  {
    value: 'Clinical',
    label: 'Clinical',
  },
  {
    value: 'Non Clinic',
    label: 'Non Clinic',
  },
];

// Sub ประเภทความเสี่ยงทางคลินิก (Clinical)
const SubCategories = [
  {
    value: 'Common Clinical',
    label: 'Common Clinical',
  },
  {
    value: 'Specific Clinical',
    label: 'Specific Clinical',
  },
];

// หัวข้อความเสี่ยง
const subjects = [
  {
    value: 'Subject 1',
    label: 'Subject 1',
  },
  {
    value: 'Subject 2',
    label: 'Subject 2',
  },
  {
    value: 'Subject 3',
    label: 'Subject 3',
  },
  {
    value: 'Subject 4',
    label: 'Subject 4',
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

const validationSchema = yup.object({
  Category: yup.string().required('กรุณาระบุประเภทความเสี่ยง'),
  SubCategory: yup.string().required('กรุณาระบุประเภทย่อยความเสี่ยงทางคลินิก'),
  Subject: yup.string().required('กรุณาระบุหัวข้อ'),
  riskDate: yup.string().required('กรุณาระบุวันที่เกิดเหตุ'),
  Location: yup.string().required('กรูราระบุสถานที่'),
  HN: yup.string().required('กรุณาระบุ HN'), //กรณีเลือกประเภท(category)เป็น Non-Clinic ไม่บังคับ
  Division: yup.string().required('กรุณาระบุหน่วยงานที่เกี่ยวข้อง'),
  Detail: yup.string().required('กรุณาระบุรายละเอียดความเสี่ยง'),
  Management: yup.string().required('กรุณาระบุการแก้ไขเบื้องต้น'),
  Suggestion: yup.string().required('กรุณาระบุข้อเสนอแนะ'),
});

const NewRiskForm = () => {
  const [div, setDiv] = React.useState('');

  const formik = useFormik({
    initialValues: {
      Category: '',
      SubCategory: '',
      Subject: '',
      riskDate: '',
      Location: '',
      HN: '',
      Division: '',
      Detail: '',
      Management: '',
      Suggestion: '',
    },
    validationSchema,
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack>
          <CardContent>
            <Typography variant="h5" mb={1}>
              บันทึกข้อมูลความเสี่ยง
            </Typography>
            <Divider sx={{ my: 3 }} />

            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="Category"
                  >
                    ประเภทความเสี่ยง
                  </CustomFormLabel>
                  <CustomSelect
                    labelId="Category"
                    id="Category"
                    fullWidth
                    name="Category"
                    variant="outlined"
                    value={formik.values.Category}
                    onChange={formik.handleChange}
                  >
                    {Categories.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                  {formik.errors.Category && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.Category}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                {/* กรณีระบุประเภทความเสี่ยง = ความเสี่ยงทางคลินิก (Clinical) บังคับเลือก
                ประเภทย่อยความเสี่ยงทางคลินิก */}
                <Grid item xs={12} sm={3}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="SubCategory"
                  >
                    ประเภทความเสี่ยงทางคลินิก
                  </CustomFormLabel>
                  <CustomSelect
                    labelId="SubCategory"
                    id="SubCategory"
                    fullWidth
                    name="SubCategory"
                    variant="outlined"
                    value={formik.values.SubCategory}
                    onChange={formik.handleChange}
                  >
                    {SubCategories.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                  {formik.errors.SubCategory && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.SubCategory}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="Subject"
                  >
                    หัวข้อความเสี่ยง
                  </CustomFormLabel>
                  <CustomSelect
                    labelId="Subject-select"
                    id="Subject"
                    fullWidth
                    name="Subject"
                    variant="outlined"
                    value={formik.values.Subject}
                    onChange={formik.handleChange}
                  >
                    {subjects.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                  {formik.errors.Subject && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.Subject}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={3}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="riskDate"
                  >
                    วันที่เกิดเหตุ
                  </CustomFormLabel>

                  <CustomTextField
                    labelId="riskDate-select"
                    id="riskDate"
                    fullWidth
                    name="riskDate"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  {formik.errors.riskDate && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.riskDate}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={3}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="time"
                  >
                    เวลาที่เกิดเหตุ
                  </CustomFormLabel>

                  <CustomTextField
                    id="time"
                    type="time"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="location"
                  >
                    สถานที่
                  </CustomFormLabel>
                  <CustomSelect
                    labelId="location"
                    id="location"
                    fullWidth
                    name="location"
                    variant="outlined"
                    value={formik.values.Location}
                    onChange={formik.handleChange}
                  >
                    {locations.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                  {formik.errors.Location && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.Location}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="area"
                  >
                    บริเวณ
                  </CustomFormLabel>
                  <CustomTextField labelId="area" id="area" fullWidth name="area" />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="hn"
                  >
                    HN
                  </CustomFormLabel>
                  <CustomTextField labelId="hn" id="hn" name="hn" variant="outlined" fullWidth />
                  {formik.errors.HN && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.HN}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={3}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="an"
                  >
                    AN
                  </CustomFormLabel>
                  <CustomTextField labelId="an" id="an" name="an" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="witness"
                  >
                    ผู้อยู่ในเหตุการณ์
                  </CustomFormLabel>
                  <CustomTextField
                    labelId="witness"
                    id="witness"
                    name="witness"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-divs"
                  >
                    หน่วยงานที่เกี่ยวข้อง (ระบุได้มากกว่า 1 หน่วยงาน)
                  </CustomFormLabel>
                  <Autocomplete
                    labelId="division"
                    id="division"
                    fullWidth
                    name="division"
                    multiple
                    options={divs}
                    getOptionLabel={(option) => option.label}
                    filterSelectedOptions
                    renderInput={(params) => <CustomTextField {...params} />}
                  />
                  {formik.errors.Division && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.Division}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="detail"
                  >
                    รายละเอียดความเสี่ยง
                  </CustomFormLabel>
                  <CustomTextField
                    labelId="detail"
                    id="detail"
                    name="detail"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                  />
                  {formik.errors.Detail && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.Detail}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="management"
                  >
                    การแก้ไขเบื้องต้น
                  </CustomFormLabel>
                  <CustomTextField
                    labelId="management"
                    id="management"
                    name="management"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                  />
                  {formik.errors.Management && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.Management}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="suggestion"
                  >
                    ข้อเสนอแนะ
                  </CustomFormLabel>
                  <CustomTextField
                    labelId="suggestion"
                    id="suggestion"
                    name="suggestion"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                  />
                  {formik.errors.Suggestion && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.Suggestion}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="file-upload"
                  >
                    แนบไฟล์
                  </CustomFormLabel>
                  <CustomTextField
                    id="file-upload"
                    type="file"
                    inputProps={{ accept: 'application/.jpeg' }}
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

export default NewRiskForm;
