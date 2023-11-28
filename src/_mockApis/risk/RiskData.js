import mock from '../mock';
import user1 from 'src/assets/images/profile/user-1.jpg';
import user2 from 'src/assets/images/profile/user-2.jpg';
import user3 from 'src/assets/images/profile/user-3.jpg';
import user4 from 'src/assets/images/profile/user-4.jpg';
import user5 from 'src/assets/images/profile/user-5.jpg';

const RiskData = [
  {
    Id: 6611001,
    riskType: 'Clinic',
    riskDate: '02-12-2021',
    riskLocation: 'IPD',
    riskArea: 'ชั้น 3',
    riskHN: '90090',
    riskAn: '12345678910',
    riskWitness: 'Karnanan Purimanuruk',
    riskDiv: 'แผนกเทคโนโลยีสารสนเทศ',
    riskDetail:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    riskFirstManage: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    riskSuggestion: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Date: '02-12-2021',
    thumb: user1,
    user: 'Karnanan Purimanuruk',
    riskStatus: 'รอทบทวน',
  },
  {
    Id: 6611002,
    riskType: 'Non-Clinic',
    riskDate: '02-12-2021',
    riskLocation: 'IPD',
    riskArea: 'ชั้น 3',
    riskHN: '90090',
    riskAn: '12345678910',
    riskWitness: 'Karnanan Purimanuruk',
    riskDiv: 'แผนกเทคโนโลยีสารสนเทศ',
    riskDetail:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    riskFirstManage: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    riskSuggestion: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Date: '02-12-2021',
    thumb: user2,
    user: 'Karnanan Purimanuruk',
    riskStatus: 'ทบทวนซ้ำ',
  },
  {
    Id: 6611003,
    riskType: 'Non-Clinic',
    riskDate: '02-12-2021',
    riskLocation: 'IPD',
    riskArea: 'ชั้น 3',
    riskHN: '90090',
    riskAn: '12345678910',
    riskWitness: 'Karnanan Purimanuruk',
    riskDiv: 'แผนกเทคโนโลยีสารสนเทศ',
    riskDetail:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    riskFirstManage: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    riskSuggestion: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Date: '02-12-2021',
    thumb: user3,
    user: 'Karnanan Purimanuruk',
    riskStatus: 'รอประเมิน',
  },
  {
    Id: 6611004,
    riskType: 'Non-Clinic',
    riskDate: '02-12-2021',
    riskLocation: 'IPD',
    riskArea: 'ชั้น 3',
    riskHN: '90090',
    riskAn: '12345678910',
    riskWitness: 'Karnanan Purimanuruk',
    riskDiv: 'แผนกเทคโนโลยีสารสนเทศ',
    riskDetail:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    riskFirstManage: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    riskSuggestion: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Date: '02-12-2021',
    thumb: user4,
    user: 'Karnanan Purimanuruk',
    riskStatus: 'ไม่ผ่าน',
  },
  {
    Id: 6611005,
    riskType: 'Non-Clinic',
    riskDate: '02-12-2021',
    riskLocation: 'IPD',
    riskArea: 'ชั้น 3',
    riskHN: '90090',
    riskAn: '12345678910',
    riskWitness: 'Karnanan Purimanuruk',
    riskDiv: 'แผนกเทคโนโลยีสารสนเทศ',
    riskDetail:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    riskFirstManage: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    riskSuggestion: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Date: '02-12-2021',
    thumb: user5,
    user: 'Karnanan Purimanuruk',
    riskStatus: 'ผ่าน',
  },
  {
    Id: 6611006,
    riskType: 'Clinic',
    riskDate: '02-12-2021',
    riskLocation: 'IPD',
    riskArea: 'ชั้น 3',
    riskHN: '90090',
    riskAn: '12345678910',
    riskWitness: 'Karnanan Purimanuruk',
    riskDiv: 'แผนกเทคโนโลยีสารสนเทศ',
    riskDetail:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    riskFirstManage: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    riskSuggestion: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Date: '02-12-2021',
    thumb: user1,
    user: 'Karnanan Purimanuruk',
    riskStatus: 'รอพิจารณา',
  },
  {
    Id: 6611007,
    riskType: 'Clinic',
    riskDate: '02-12-2021',
    riskLocation: 'IPD',
    riskArea: 'ชั้น 3',
    riskHN: '90090',
    riskAn: '12345678910',
    riskWitness: 'Karnanan Purimanuruk',
    riskDiv: 'แผนกเทคโนโลยีสารสนเทศ',
    riskDetail:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    riskFirstManage: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    riskSuggestion: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Date: '02-12-2021',
    thumb: user2,
    user: 'Karnanan Purimanuruk',
    riskStatus: 'รอพิจารณา',
  },
  {
    Id: 6611008,
    riskType: 'Clinic',
    riskDate: '02-12-2021',
    riskLocation: 'IPD',
    riskArea: 'ชั้น 3',
    riskHN: '90090',
    riskAn: '12345678910',
    riskWitness: 'Karnanan Purimanuruk',
    riskDiv: 'แผนกเทคโนโลยีสารสนเทศ',
    riskDetail:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    riskFirstManage: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    riskSuggestion: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Date: '02-12-2021',
    thumb: user3,
    user: 'Karnanan Purimanuruk',
    riskStatus: 'รอพิจารณา',
  },
];

mock.onGet('/api/data/risk/RiskData').reply(() => {
  return [200, RiskData];
});
export default RiskData;