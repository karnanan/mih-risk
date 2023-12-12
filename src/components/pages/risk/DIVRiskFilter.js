import { Box, Grid, Typography, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibilityFilter } from './DIVRiskSlice';

const BoxStyled = styled(Box)(() => ({
  padding: '30px',
  transition: '0.1s ease-in',
  cursor: 'pointer',
  color: 'inherit',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const DIVRiskFilter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.riskReducer.risks);
  const pendingReview = counter.filter((r) => r.Status === 'รอทบทวน').length;
  const repeatReview = counter.filter((r) => r.Status === 'ทบทวนซ้ำ').length;
  const pendingEvaluation = counter.filter((r) => r.Status === 'รอประเมิน').length;
  const failed = counter.filter((r) => r.Status === 'ไม่ผ่าน').length;
  const passed = counter.filter((r) => r.Status === 'ผ่าน').length;
  return (
    <Grid container spacing={3} textAlign="center">
      <Grid item xs={12} sm={6} lg={2}>
        <BoxStyled
          onClick={() => dispatch(setVisibilityFilter('total_risks'))}
          sx={{ backgroundColor: 'primary.light', color: 'primary.main' }}
        >
          <Typography variant="h3">{counter.length}</Typography>
          <Typography variant="h6">ทั้งหมด</Typography>
        </BoxStyled>
      </Grid>
      <Grid item xs={12} sm={6} lg={2}>
        <BoxStyled
          onClick={() => dispatch(setVisibilityFilter('รอทบทวน'))}
          sx={{ backgroundColor: 'warning.light', color: 'warning.main' }}
        >
          <Typography variant="h3">{pendingReview}</Typography>
          <Typography variant="h6">รอทบทวน</Typography>
        </BoxStyled>
      </Grid>
      <Grid item xs={12} sm={6} lg={2}>
        <BoxStyled
          onClick={() => dispatch(setVisibilityFilter('ทบทวนซ้ำ'))}
          sx={{ backgroundColor: 'secondary.light', color: 'secondary.main' }}
        >
          <Typography variant="h3">{repeatReview}</Typography>
          <Typography variant="h6">ทบทวนซ้ำ</Typography>
        </BoxStyled>
      </Grid>
      <Grid item xs={12} sm={6} lg={2}>
        <BoxStyled
          onClick={() => dispatch(setVisibilityFilter('รอประเมิน'))}
          sx={{ backgroundColor: 'success.light', color: 'success.main' }}
        >
          <Typography variant="h3">{pendingEvaluation}</Typography>
          <Typography variant="h6">รอประเมิน</Typography>
        </BoxStyled>
      </Grid>
      <Grid item xs={12} sm={6} lg={2}>
        <BoxStyled
          onClick={() => dispatch(setVisibilityFilter('ไม่ผ่าน'))}
          sx={{ backgroundColor: 'error.light', color: 'error.main' }}
        >
          <Typography variant="h3">{failed}</Typography>
          <Typography variant="h6">ไม่ผ่าน</Typography>
        </BoxStyled>
      </Grid>
      <Grid item xs={12} sm={6} lg={2}>
        <BoxStyled
          onClick={() => dispatch(setVisibilityFilter('ผ่าน'))}
          sx={{ backgroundColor: 'info.light', color: 'info.main' }}
        >
          <Typography variant="h3">{passed}</Typography>
          <Typography variant="h6">ผ่าน</Typography>
        </BoxStyled>
      </Grid>
    </Grid>
  );
};

export default DIVRiskFilter;
