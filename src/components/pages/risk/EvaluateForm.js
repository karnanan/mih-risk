import React from 'react';
import {
  CardContent,
  Grid,
  Button,
  Stack,
  FormControlLabel,
  RadioGroup,
  FormControl,
  InputAdornment,
  MenuItem,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

// components
import CustomTextField from '../../forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../forms/theme-elements/CustomFormLabel';
import CustomRadio from '../../forms/theme-elements/CustomRadio';
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
  {
    value: 'repaeat-review',
    label: 'ทบทวนซ้ำ',
  },
];

const EvaluateRiskForm = () => {
  const [value, setValue] = React.useState('');
  const [evaluate, setEvaluate] = React.useState('');

  const handleChangeCauseAnalysis = (event) => {
    setValue(event.target.value);
  };

  const handleChangeEvaluate = (event) => {
    setEvaluate(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor="text-date-time"
                >
                  วันที่เข้าประเมิน
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
                  htmlFor="text-evaluate"
                >
                  ประเมินความเสี่ยง
                </CustomFormLabel>
                <CustomSelect
                  fullWidth
                  id="text-evaluate"
                  variant="outlined"
                  value={evaluate}
                  onChange={handleChangeEvaluate}
                >
                  {evaluates.map((option) => (
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

export default EvaluateRiskForm;
