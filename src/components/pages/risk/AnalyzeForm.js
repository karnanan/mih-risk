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
  Typography,
  Autocomplete,
  ListSubheader,
  FormControlLabel,
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
const tools = [
  {
    value: 'RCA',
    label: 'RCA',
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
  Tool: yup.string().required('กรุณาระบุความเห็น'),
  Level: yup.string().required('กรุณาระบุระดับความเสี่ยง'),
  Committee: yup.string().required('กรุณาระบุคณะกรรมการที่เกี่ยวข้อง'),
});

const AnalyzeRiskForm = () => {
  const [level, setLevel] = React.useState('');

  const handleChangeLevel = (event) => {
    setLevel(event.target.value);
  };

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
      Tool: '',
      Level: '',
      Committee: '',
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
                    type="riskDate"
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
                  <Box py={3}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Attachments (3)
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item lg={4}>
                        <Stack direction="row" gap={2} mt={2}>
                          <Stack direction="row" gap={2} mt={2}>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: '48px',
                                height: '48px',
                                bgcolor: (theme) => theme.palette.grey[100],
                              }}
                            >
                              <Avatar
                                // src={attach.image}
                                alt="av"
                                variant="rounded"
                                sx={{ width: '24px', height: '24px' }}
                              ></Avatar>
                            </Avatar>
                            <Box mr={'auto'}>
                              <Typography variant="subtitle2" fontWeight={600} mb={1}>
                                Attachments-title-1.jpeg
                              </Typography>
                              <Typography variant="body2">2MB</Typography>
                            </Box>
                          </Stack>
                          <Stack direction="row" gap={2} mt={2}>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: '48px',
                                height: '48px',
                                bgcolor: (theme) => theme.palette.grey[100],
                              }}
                            >
                              <Avatar
                                // src={attach.image}
                                alt="av"
                                variant="rounded"
                                sx={{ width: '24px', height: '24px' }}
                              ></Avatar>
                            </Avatar>
                            <Box mr={'auto'}>
                              <Typography variant="subtitle2" fontWeight={600} mb={1}>
                                Attachments-title-2.jpeg
                              </Typography>
                              <Typography variant="body2">2MB</Typography>
                            </Box>
                          </Stack>
                          <Stack direction="row" gap={2} mt={2}>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: '48px',
                                height: '48px',
                                bgcolor: (theme) => theme.palette.grey[100],
                              }}
                            >
                              <Avatar
                                // src={attach.image}
                                alt="av"
                                variant="rounded"
                                sx={{ width: '24px', height: '24px' }}
                              ></Avatar>
                            </Avatar>
                            <Box mr={'auto'}>
                              <Typography variant="subtitle2" fontWeight={600} mb={1}>
                                Attachments-title-3.jpeg
                              </Typography>
                              <Typography variant="body2">2MB</Typography>
                            </Box>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-risklevel"
                  >
                    ระดับความเสี่ยง
                  </CustomFormLabel>
                  <CustomSelect
                    fullWidth
                    id="text-risklevel"
                    variant="outlined"
                    value={level}
                    onChange={handleChangeLevel}
                  >
                    {/* {risktypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))} */}
                    <ListSubheader>Clinic</ListSubheader>
                    <MenuItem value={1}>A</MenuItem>
                    <MenuItem value={2}>B</MenuItem>
                    <MenuItem value={3}>C</MenuItem>
                    <MenuItem value={4}>D</MenuItem>
                    <MenuItem value={5}>E</MenuItem>
                    <MenuItem value={6}>F</MenuItem>
                    <MenuItem value={7}>G</MenuItem>
                    <MenuItem value={8}>H</MenuItem>
                    <MenuItem value={9}>I</MenuItem>
                    <ListSubheader>Non-clinic</ListSubheader>
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={11}>2</MenuItem>
                    <MenuItem value={12}>3</MenuItem>
                    <MenuItem value={13}>4</MenuItem>
                  </CustomSelect>
                  {formik.errors.Level && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.Level}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-divs"
                  >
                    เครื่องมือเครื่องใช้
                  </CustomFormLabel>
                  <CustomSelect
                    labelId="tool"
                    id="tool"
                    fullWidth
                    name="tool"
                    variant="outlined"
                    value={formik.values.Tool}
                    onChange={formik.handleChange}
                  >
                    {tools.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                  {formik.errors.Tool && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.Tool}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-divs"
                  >
                    คณะกรรมการที่เกี่ยวข้อง (ระบุได้มากกว่า 1)
                  </CustomFormLabel>
                  <Autocomplete
                    multiple
                    fullWidth
                    id="tags-outlined"
                    options={committees}
                    getOptionLabel={(option) => option.label}
                    filterSelectedOptions
                    renderInput={(params) => <CustomTextField {...params} />}
                  />
                  {formik.errors.Committee && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.Committee}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-suggestion"
                  >
                    อื่นๆ
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-suggestion"
                    multiline
                    rows={2}
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
                    หน่วยงานที่ต้องทบทวน (ระบุได้มากกว่า 1 หน่วยงาน)
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

export default AnalyzeRiskForm;
