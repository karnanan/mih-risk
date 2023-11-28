import React from 'react';
import {
  CardContent,
  Grid,
  Typography,
  MenuItem,
  Box,
  Avatar,
  Button,
  Stack,
  Divider,
  Autocomplete,
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

const NewRiskForm = () => {
  const [location, setLocation] = React.useState('');
  const [risktype, setRiskType] = React.useState('');
  const [witness, setWitness] = React.useState('');
  const [div, setDiv] = React.useState('');

  const handleChangeRiskType = (event) => {
    setRiskType(event.target.value);
  };
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleChangeWitness = (event) => {
    setWitness(event.target.value);
  };
  const handleChangeDiv = (event) => {
    setDiv(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack>
          <CardContent>
            <Typography variant="h5" mb={1}>
              บันทึกข้อมูลความเสี่ยง
            </Typography>
            <Divider sx={{ my: 3 }} />

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor="text-risktype"
                >
                  ประเภทความเสี่ยง
                </CustomFormLabel>
                <CustomSelect
                  fullWidth
                  id="text-risktype"
                  variant="outlined"
                  value={risktype}
                  onChange={handleChangeRiskType}
                >
                  {risktypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomSelect>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor="text-date-time"
                >
                  วันที่ - เวลาที่เกิดเหตุ
                </CustomFormLabel>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileDateTimePicker
                    placeholder="Start date"
                    onChange={() => {}}
                    renderInput={(inputProps) => (
                      <CustomTextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        inputProps={{ 'aria-label': 'basic date picker' }}
                        {...inputProps}
                      />
                    )}
                    value={new Date()}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor="text-location"
                >
                  สถานที่
                </CustomFormLabel>
                <CustomSelect
                  fullWidth
                  id="text-location"
                  variant="outlined"
                  value={location}
                  onChange={handleChangeLocation}
                >
                  {locations.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomSelect>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor="text-area"
                >
                  บริเวณ
                </CustomFormLabel>
                <CustomTextField id="text-area" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={3}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor="text-hn"
                >
                  HN
                </CustomFormLabel>
                <CustomTextField id="text-hn" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={3}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor="text-an"
                >
                  AN
                </CustomFormLabel>
                <CustomTextField id="text-an" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor="text-witness"
                >
                  ผู้อยู่ในเหตุการณ์
                </CustomFormLabel>
                <CustomSelect
                  fullWidth
                  id="text-witness"
                  variant="outlined"
                  value={witness}
                  onChange={handleChangeWitness}
                >
                  {witnesses.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomSelect>
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
                  multiple
                  fullWidth
                  id="tags-outlined"
                  options={divs}
                  getOptionLabel={(option) => option.label}
                  filterSelectedOptions
                  renderInput={(params) => <CustomTextField {...params} />}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor="text-risk-detail"
                >
                  รายละเอียดความเสี่ยง
                </CustomFormLabel>
                <CustomTextField
                  id="text-risk-detail"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor="text-first-management"
                >
                  การแก้ไขเบื้องต้น
                </CustomFormLabel>
                <CustomTextField
                  id="text-first-management"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor="text-suggestion"
                >
                  ข้อเสนอแนะ
                </CustomFormLabel>
                <CustomTextField
                  id="text-suggestion"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                />
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
              <Button size="large" variant="contained" color="primary">
                Save
              </Button>
              <Button size="large" variant="text" color="error">
                Cancel
              </Button>
            </Stack>
          </CardContent>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default NewRiskForm;
