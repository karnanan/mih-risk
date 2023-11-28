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
  FormControlLabel,
  RadioGroup,
  FormControl,
  InputAdornment,
} from '@mui/material';
import { useSelector } from 'react-redux';

const RiskDetail = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack>
          <CardContent>
            <Typography variant="h5" mb={1}>
              ทบทวนความเสี่ยง
            </Typography>
            <Divider sx={{ my: 3 }} />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={2}>
                <Typography variant="subtitle2" fontWeight={600}>
                  เลขที่ :
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography>6611001</Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography></Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography></Typography>
              </Grid>

              <Grid item xs={12} sm={2}>
                <Typography variant="subtitle2" fontWeight={600}>
                  ประเภทความเสี่ยง :
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography>Clinic</Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="subtitle2" fontWeight={600}>
                  วัน-เวลาที่เกิดเหตุ :
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography>02-12-2021</Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="subtitle2" fontWeight={600}>
                  สถานที่ :
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography>IPD</Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="subtitle2" fontWeight={600}>
                  บริเวณ :
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography>ชั้น 3</Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="subtitle2" fontWeight={600}>
                  HN :
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography>90090</Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="subtitle2" fontWeight={600}>
                  AN :
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography>12345678910</Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="subtitle2" fontWeight={600}>
                  ผู้อยู่ในเหตุการณ์ :
                </Typography>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Typography>Karnanan Purimanuruk</Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="subtitle2" fontWeight={600}>
                  หน่วยงานที่เกี่ยวข้อง :
                </Typography>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Typography>
                  แผนกเทคโนโลยีสารสนเทศ, แผนกเทคโนโลยีสารสนเทศ, แผนกเทคโนโลยีสารสนเทศ
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="subtitle2" fontWeight={600}>
                  รายละเอียดความเสี่ยง :
                </Typography>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Typography>
                  ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                  quia consequuntur magni dolores eos
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="subtitle2" fontWeight={600}>
                  การแก้ไขเบื้องต้น :
                </Typography>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Typography>
                  ab illo inventore veritatis et quasi architecto beatae vitae dicta
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="subtitle2" fontWeight={600}>
                  ข้อเสนอแนะ :
                </Typography>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Typography>
                  ab illo inventore veritatis et quasi architecto beatae vitae dicta
                </Typography>
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

              <Grid item xs={12} sm={3}>
                <Typography variant="subtitle2" fontWeight={600}>
                  ระดับความเสี่ยง :
                </Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Typography>ระดับ 1</Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="subtitle2" fontWeight={600}>
                  คณะกรรมการที่เกี่ยวข้อง :
                </Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Typography>ABC, ABC</Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="subtitle2" fontWeight={600}>
                  เครื่องมือเครื่องใช้ :
                </Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Typography>ABC, ABC</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default RiskDetail;
