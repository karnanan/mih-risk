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
} from '@mui/material';

// components
import CustomTextField from '../../forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../forms/theme-elements/CustomFormLabel';
import CustomRadio from '../../forms/theme-elements/CustomRadio';

const ReviewRiskForm = () => {
  const [value, setValue] = React.useState('');

  const handleChangeCauseAnalysis = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor="text-risk-detail"
                >
                  ผลกระทบต่อหน่วยงานหรือการบริการ
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
                <FormControl component="fieldset">
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-risk-detail"
                  >
                    วิเคราะห์สาเหตุที่เกิด
                  </CustomFormLabel>
                  <RadioGroup
                    aria-label="cause"
                    name="risk-cause"
                    value={value}
                    onChange={handleChangeCauseAnalysis}
                  >
                    <FormControlLabel
                      value="radio1"
                      control={<CustomRadio />}
                      label="ผู้ป่วย เช่น อาการ, ความรุนแรงของโรค, แนวโน้มของโรค, Case ซ้ำซ้อน, ขาดความรู้, ญาติ"
                    />
                    <FormControlLabel
                      value="radio2"
                      control={<CustomRadio />}
                      label="บุคลากร เช่น ความรู้, ทักษะ, อ่อนล้า, แรงจูงใจ, ทัศนคติ, ไม่ปฏิบัติตามแนวทางที่กำหนด"
                    />
                    <FormControlLabel
                      value="radio3"
                      control={<CustomRadio />}
                      label="งานที่มอบหมาย เช่น ฝึกอบรมเพิ่มเติม, อยากเปลี่ยนงาน, อัตราส่วนของบุคลากรต่อปริมาณงาน"
                    />
                    <FormControlLabel
                      value="radio4"
                      control={<CustomRadio />}
                      label="ทีมงาน เช่น ผู้รับผิดชอบหลักไม่สมัครใจ, การสื่อสาร พูด/เขียน, ลักษณะของผู้นำ, การสนับสนุนจากฝ่ายบริหาร"
                    />
                    <FormControlLabel
                      value="radio5"
                      control={<CustomRadio />}
                      label="เครื่องมือ เช่น ชำรุด, ใช้ไม่เป็น, บำรุงรักษา, ทิ้ง, ไม่ได้รับการตรวจสอบ, error บ่อย"
                    />
                    <FormControlLabel
                      value="radio6"
                      control={<CustomRadio />}
                      label="วัฒนธรรม เช่น องค์กรเอื้อต่อการแก้ไขปัญหา, แรงกดดัน, การเงิน, ทิศทาง-นโยบาย"
                    />
                    <FormControlLabel
                      value="radio7"
                      control={<CustomRadio />}
                      label="สิ่งแวดล้อม เช่น แสง, เสียง, โต๊ะ-เก้าอี้ไม่เหมาะสม, ความปลอดภัย"
                    />
                    <FormControlLabel
                      value="radio8"
                      control={<CustomRadio />}
                      label="การสื่อสาร เช่น คู่มือ, การสื่อสารไม่ทั่วถึง, แนวทางการปฏิบัติไม่ชัดเจน, ไม่สื่อสาร"
                    />
                    <FormControlLabel
                      value="radio9"
                      control={<CustomRadio />}
                      label="ปัจจัยที่ควบคุมไม่ได้ เช่น แผ่นดินไหว"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <CustomFormLabel
                  sx={{
                    mt: 0,
                  }}
                  htmlFor="text-risk-detail"
                >
                  สาเหตุของปัญหา
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
                  htmlFor="text-risk-detail"
                >
                  มาตรการหรือแนวทาง
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
                  htmlFor="text-risk-detail"
                >
                  ระยะเวลาดำเนินการ (ระบุจำนวนวัน)
                </CustomFormLabel>
                <CustomTextField
                  id="text-risk-detail"
                  variant="outlined"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    endAdornment: <InputAdornment position="start">วัน</InputAdornment>,
                  }}
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

export default ReviewRiskForm;
