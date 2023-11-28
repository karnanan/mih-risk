import {
  IconBoxMultiple,
  IconNotes,
  IconEdit,
  IconFileDescription,
  IconFiles,
  IconBorderAll,
  IconChartLine,
  IconAperture,
  IconPencilPlus,
  IconFolder,
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
    chipColor: 'warning',
  },
  {
    id: uniqueId(),
    title: 'รายการความเสี่ยง',
    icon: IconBorderAll,
    href: '/pages/allrisklist',
  },
  {
    id: uniqueId(),
    title: 'ความเสี่ยงรอพิจารณา',
    icon: IconEdit,
    href: '/pages/considerrisk',
    chip: '10',
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
