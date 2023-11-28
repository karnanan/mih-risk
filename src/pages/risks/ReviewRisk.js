import * as React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import { Grid, Tabs, Tab, Box, CardContent, Divider, Typography } from '@mui/material';

// components
import BlankCard from '../../components/shared/BlankCard';
import RiskDetail from 'src/components/pages/risk/RiskDetail';
import ReviewDetail from 'src/components/pages/risk/ReviewDetail';
import ReviewForm from 'src/components/pages/risk/ReviewForm';
import { IconArticle, IconBell } from '@tabler/icons';
import PendingReviewTable from 'src/components/pages/risk/PendingReviewTable';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'ความเสี่ยงรอทบทวน',
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ReviewRisk = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PageContainer title="ความเสี่ยงรอทบทวน" description="this is new risk page">
      {/* breadcrumb */}
      <Breadcrumb title="ความเสี่ยงรอทบทวน" items={BCrumb} />
      {/* end breadcrumb */}

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BlankCard>
            <Box sx={{ maxWidth: { xs: 320, sm: 480 } }}>
              <Tabs
                value={value}
                onChange={handleChange}
                scrollButtons="auto"
                aria-label="basic tabs example"
                variant="scrollable"
              >
                <Tab
                  iconPosition="start"
                  icon={<IconBell size="22" />}
                  label="รายการความเสี่ยงรอทบทวน"
                  {...a11yProps(0)}
                />

                <Tab
                  iconPosition="start"
                  icon={<IconArticle size="22" />}
                  label="ทบทวนความเสี่ยง"
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <Divider />
            <CardContent>
              <TabPanel value={value} index={0}>
                <PendingReviewTable />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <CardContent>
                  <Typography variant="h5" mb={2}>
                    ทบทวนความเสี่ยง
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                </CardContent>
                <RiskDetail />
                {/* ReviewDetail แสดงข้อมูลประวัติการทบทวนความเสี่ยงเดิม กรณีทบทวนซ้ำ */}
                <ReviewDetail />
                <ReviewForm />
              </TabPanel>
            </CardContent>
          </BlankCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default ReviewRisk;
