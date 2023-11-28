import { Grid, Tabs, Tab, Box, CardContent, Divider } from '@mui/material';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import BlankCard from '../../../components/shared/BlankCard';
import RiskFilter from '../../../components/pages/risk/RiskFilter';
import RiskListing from '../../../components/pages/risk/RiskListing';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'ประวัติการบันทึกความเสี่ยง',
  },
];

const DIVRiskList = () => {
  return (
    <PageContainer title="ประวัติการบันทึกความเสี่ยง" description="this is Risk List Page">
      <Breadcrumb title="ประวัติการบันทึกความเสี่ยง" items={BCrumb} />
      <BlankCard>
        <CardContent>
          <RiskFilter />
          <RiskListing />
        </CardContent>
      </BlankCard>
    </PageContainer>
  );
};

export default DIVRiskList;
