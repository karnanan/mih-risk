import { Grid, Tabs, Tab, Box, CardContent, Divider } from '@mui/material';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import BlankCard from '../../../components/shared/BlankCard';
import AllRiskFilter from '../../../components/pages/risk/AllRiskFilter';
import AllRiskListing from '../../../components/pages/risk/AllRiskListing';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'รายการความเสี่ยง',
  },
];

const AllRiskList = () => {
  return (
    <PageContainer title="รายการความเสี่ยง" description="this is All Risk List Page">
      <Breadcrumb title="รายการความเสี่ยง" items={BCrumb} />
      <BlankCard>
        <CardContent>
          <AllRiskFilter />
          <AllRiskListing />
        </CardContent>
      </BlankCard>
    </PageContainer>
  );
};

export default AllRiskList;
