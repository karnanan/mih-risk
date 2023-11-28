import React from 'react';
import { Box, Grid } from '@mui/material';
import TopCards from '../../components/dashboards/risk/TopCards';
import MonthlyChart from '../../components/dashboards/risk/MonthlyChart';
import StatisticsClinicCard from '../../components/dashboards/risk/StatisticsClinicCard';
import StatisticsNonClinicCard from '../../components/dashboards/risk/StatisticsNonClinicCard';
import StatisticsUsers from '../../components/dashboards/risk/StatisticsUsers';

const Modern = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        {/* column */}
        <Grid item sm={12} lg={12}>
          <TopCards />
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={12}>
          <MonthlyChart />
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={6}>
          <StatisticsClinicCard />
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={6}>
          <StatisticsNonClinicCard />
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={12}>
          <StatisticsUsers />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Modern;
