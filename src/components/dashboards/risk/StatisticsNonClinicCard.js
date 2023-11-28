import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Box, Grid } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import { IconNumber1, IconNumber2, IconNumber3, IconNumber4 } from '@tabler/icons';
import ParentCard from '../../../components/shared/ParentCard';

const StatisticsNonClinicCard = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const error = theme.palette.error.main;
  const errorlight = theme.palette.error.light;
  const warning = theme.palette.warning.main;
  const warninglight = theme.palette.warning.light;
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;
  const success = theme.palette.success.main;
  const successlight = theme.palette.success.light;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  const optionsdoughnutchart = {
    chart: {
      id: 'donut-chart',
      fontFamily: "'Prompt', sans-serif",
      foreColor: '#adb0bb',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
          background: 'transparent',

          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 7,
            },
            value: {
              show: false,
            },
            total: {
              show: true,
              color: textColor,
              fontSize: '18px',
              fontWeight: '600',
              label: 'Non-Clinic Statistics',
            },
          },
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    labels: ['ระดับ 1', 'ระดับ 2', 'ระดับ 3', 'ระดับ 4'],
    colors: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072'],
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  };
  const seriesdoughnutchart = [66, 52, 59, 82];

  return (
    <ParentCard title="สถิติด้าน Non-Clinic">
      <Grid container direction="row" justifyContent="center" alignItems="center" mb={2}>
        <Typography variant="h5" color="textSecondary">
          จำนวนความเสี่ยง Non-Clinic ในแต่ละระดับ
        </Typography>
      </Grid>
      <Chart
        options={optionsdoughnutchart}
        series={seriesdoughnutchart}
        type="donut"
        height="360px"
      />
    </ParentCard>
  );
};

export default StatisticsNonClinicCard;
