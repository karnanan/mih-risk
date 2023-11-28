import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Typography, Grid } from '@mui/material';
import ParentCard from '../../../components/shared/ParentCard';

const StatisticsClinicCard = () => {
  // chart color
  const theme = useTheme();
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
              label: 'Clinic Statistics',
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
    labels: [
      'ระดับ A',
      'ระดับ B',
      'ระดับ C',
      'ระดับ D',
      'ระดับ E',
      'ระดับ F',
      'ระดับ G',
      'ระดับ H',
      'ระดับ I',
    ],
    colors: [
      '#8dd3c7',
      '#ffffb3',
      '#bebada',
      '#fb8072',
      '#80b1d3',
      '#fdb462',
      '#b3de69',
      '#fccde5',
      '#d9d9d9',
      '#bc80bd',
    ],
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  };
  const seriesdoughnutchart = [145, 115, 27, 18, 35, 66, 52, 59, 82];

  return (
    <ParentCard title="สถิติด้าน Clinic">
      <Grid container direction="row" justifyContent="center" alignItems="center" mb={2}>
        <Typography variant="h5" color="textSecondary">
          จำนวนความเสี่ยง Clinic ในแต่ละระดับ
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

export default StatisticsClinicCard;
