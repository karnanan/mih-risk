import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import DashboardCard from '../../shared/DashboardCard';
import { Grid, Stack, Typography, Avatar, Box } from '@mui/material';

const MonthlyChart = () => {
  // const [year, setYear] = React.useState('1');

  // const handleChange = (event) => {
  //   setYear(event.target.value);
  // };

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const warning = theme.palette.warning.main;

  const optionslinechart = {
    chart: {
      type: 'line',
      fontFamily: "'Prompt', sans-serif",
      foreColor: '#adb0bb',
      zoom: {
        type: 'x',
        enabled: true,
      },
      toolbar: {
        show: false,
      },
      shadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 1,
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      title: {
        text: 'Month',
      },
    },
    grid: {
      show: false,
    },
    colors: [primary, warning],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'straight',
      width: '2',
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
    tooltip: {
      theme: 'dark',
    },
  };
  const serieslinechart = [
    {
      name: 'Clinic',
      data: [28, 29, 33, 36, 32, 32, 33, 12, 11, 14, 18, 17],
    },
    {
      name: 'None-Clinic',
      data: [20, 25, 29, 30, 25, 28, 35, 15, 5, 20, 16, 13],
    },
  ];

  return (
    <DashboardCard
    // title="รายงานความเสี่ยงทั้งหมด"
    // subtitle="จำนวนความเสี่ยงในแต่ละหมวดแยกรายเดือน"
    // action={
    //   <CustomSelect
    //     labelId="year-dd"
    //     id="year-dd"
    //     value={year}
    //     size="small"
    //     onChange={handleChange}
    //   >
    //     <MenuItem value={1}>2566</MenuItem>
    //     <MenuItem value={2}>2565</MenuItem>
    //     <MenuItem value={3}>2564</MenuItem>
    //   </CustomSelect>
    // }
    >
      <Grid container direction="row" justifyContent="center" alignItems="center" mb={6}>
        <Typography variant="h5" color="textSecondary">
          จำนวนความเสี่ยงในแต่ละหมวดแยกรายเดือน
        </Typography>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
        <Box>
          <Stack container direction="row" justifyContent="center" alignItems="center" spacing={3}>
            <Stack direction="row" spacing={2}>
              <Avatar
                sx={{ width: 9, mt: 1, height: 9, bgcolor: primary, svg: { display: 'none' } }}
              ></Avatar>
              <Box>
                <Typography variant="subtitle1" color="textSecondary">
                  ความเสี่ยงประเภท Clinic
                </Typography>
                <Typography variant="h6">48,820</Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Avatar
                sx={{ width: 9, mt: 1, height: 9, bgcolor: warning, svg: { display: 'none' } }}
              ></Avatar>
              <Box>
                <Typography variant="subtitle1" color="textSecondary">
                  ความเสี่ยงประเภท Non-Clinic
                </Typography>
                <Typography variant="h6">26,498</Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>

        <Grid item sm={12} lg={12}>
          <Chart
            options={optionslinechart}
            series={serieslinechart}
            type="line"
            height="370px"
            width={'100%'}
          />
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default MonthlyChart;
