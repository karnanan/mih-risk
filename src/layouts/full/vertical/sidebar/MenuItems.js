import {
  IconEdit,
  IconBorderAll,
  IconChartLine,
  IconAperture,
  IconPencilPlus,
  IconFolder,
  IconHighlight,
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: ' ',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconAperture,
    href: '/risks/RiskDashboard',
  },
  {
    id: uniqueId(),
    title: 'บันทึกความเสี่ยง',
    icon: IconPencilPlus,
    href: '/pages/newrisk',
  },
  {
    id: uniqueId(),
    title: 'ประวัติการบันทึกความเสี่ยง',
    icon: IconFolder,
    href: '/pages/divrisklist',
  },
  {
    id: uniqueId(),
    title: 'ความเสี่ยงรอทบทวน',
    icon: IconEdit,
    href: '/pages/reviewrisk',
    chip: '2',
    chipColor: 'error',
  },
  // Menu ด้านล่างเห็นเฉพาะคณะกรรมการความเสี่ยง
  {
    id: uniqueId(),
    title: 'รายการความเสี่ยง',
    icon: IconBorderAll,
    href: '/pages/allrisklist',
  },
  {
    id: uniqueId(),
    title: 'ความเสี่ยงรอพิจารณา',
    icon: IconHighlight,
    href: '/pages/considerrisk',
    chip: '10',
    chipColor: 'warning',
  },
  {
    id: uniqueId(),
    title: 'ความเสี่ยงรอประเมิน',
    icon: IconHighlight,
    href: '/pages/evaluaterisk',
    chip: '7',
    chipColor: 'warning',
  },
  {
    id: uniqueId(),
    title: 'รายงานความเสี่ยง',
    icon: IconChartLine,
    href: '#',
  },
];

export default Menuitems;
