import mock from '../mock';

const PendingConsiderData = [
  {
    Id: 6611001,
    Category: 'Non Clinic',
    subCategory: '-',
    Subject: 'ab illo inventore veritatis et quasi',
    riskDate: '02-12-2021',
    Location: 'IPD',
    Area: 'ชั้น 3',
    HN: '90090',
    An: '12345678910',
    Witness: 'Karnanan Purimanuruk',
    Div: 'แผนกเทคโนโลยีสารสนเทศ',
    Detail:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Management: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Suggestion: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Date: '02-12-2021',
    user: 'Karnanan Purimanuruk',
    Status: 'ทบทวนซ้ำ',
    Level: '9',
    Committee: 'IC',
    Tool: 'RCA',
  },
  {
    Id: 6611002,
    Category: 'Clinical',
    subCategory: 'Common Clinical',
    Subject: 'ab illo inventore veritatis et quasi',
    riskDate: '02-12-2021',
    Location: 'IPD',
    Area: 'ชั้น 3',
    HN: '90090',
    An: '12345678910',
    Witness: 'Karnanan Purimanuruk',
    Div: 'แผนกเทคโนโลยีสารสนเทศ',
    Detail:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Management: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Suggestion: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Date: '02-12-2021',
    user: 'Karnanan Purimanuruk',
    Status: 'รอประเมิน',
    Level: 'A',
    Committee: 'IC',
    Tool: '',
  },
  {
    Id: 6611003,
    Category: 'Clinical',
    subCategory: 'Specific Clinical',
    Subject: 'ab illo inventore veritatis et quasi',
    riskDate: '02-12-2021',
    Location: 'IPD',
    Area: 'ชั้น 3',
    HN: '90090',
    An: '12345678910',
    Witness: 'Karnanan Purimanuruk',
    Div: 'แผนกเทคโนโลยีสารสนเทศ',
    Detail:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Management: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Suggestion: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Date: '02-12-2021',
    user: 'Karnanan Purimanuruk',
    Status: 'รอประเมิน',
    Level: 'A',
    Committee: 'IC',
    Tool: '',
  },
  {
    Id: 6611004,
    Category: 'Non Clinic',
    subCategory: '-',
    Subject: 'ab illo inventore veritatis et quasi',
    riskDate: '02-12-2021',
    Location: 'IPD',
    Area: 'ชั้น 3',
    HN: '90090',
    An: '12345678910',
    Witness: 'Karnanan Purimanuruk',
    Div: 'แผนกเทคโนโลยีสารสนเทศ',
    Detail:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Management: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Suggestion: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Date: '02-12-2021',
    user: 'Karnanan Purimanuruk',
    Status: 'รอประเมิน',
    Level: '9',
    Committee: 'IC',
    Tool: 'RCA',
  },
  {
    Id: 6611005,
    Category: 'Clinical',
    subCategory: 'Common Clinical',
    Subject: 'ab illo inventore veritatis et quasi',
    riskDate: '02-12-2021',
    Location: 'IPD',
    Area: 'ชั้น 3',
    HN: '90090',
    An: '12345678910',
    Witness: 'Karnanan Purimanuruk',
    Div: 'แผนกเทคโนโลยีสารสนเทศ',
    Detail:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Management: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Suggestion: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Date: '02-12-2021',
    user: 'Karnanan Purimanuruk',
    Status: 'ทบทวนซ้ำ',
    Level: 'H',
    Committee: 'IC',
    Tool: 'RCA',
  },
  {
    Id: 6611006,
    Category: 'Clinical',
    subCategory: 'Specific Clinical',
    Subject: 'ab illo inventore veritatis et quasi',
    riskDate: '02-12-2021',
    Location: 'IPD',
    Area: 'ชั้น 3',
    HN: '90090',
    An: '12345678910',
    Witness: 'Karnanan Purimanuruk',
    Div: 'แผนกเทคโนโลยีสารสนเทศ',
    Detail:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Management: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Suggestion: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Date: '02-12-2021',
    user: 'Karnanan Purimanuruk',
    Status: 'ทบทวนซ้ำ',
    Level: 'A',
    Committee: 'ENV, IC',
    Tool: '',
  },
  {
    Id: 6611007,
    Category: 'Non Clinic',
    subCategory: '-',
    Subject: 'ab illo inventore veritatis et quasi',
    riskDate: '02-12-2021',
    Location: 'IPD',
    Area: 'ชั้น 3',
    HN: '90090',
    An: '12345678910',
    Witness: 'Karnanan Purimanuruk',
    Div: 'แผนกเทคโนโลยีสารสนเทศ',
    Detail:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Management: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Suggestion: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Date: '02-12-2021',
    user: 'Karnanan Purimanuruk',
    Status: 'ทบทวนซ้ำ',
    Level: '5',
    Committee: 'HRM, IC',
    Tool: 'RCA',
  },
  {
    Id: 6611008,
    Category: 'Clinical',
    subCategory: 'Common Clinical',
    Subject: 'ab illo inventore veritatis et quasi',
    riskDate: '02-12-2021',
    Location: 'IPD',
    Area: 'ชั้น 3',
    HN: '90090',
    An: '12345678910',
    Witness: 'Karnanan Purimanuruk',
    Div: 'แผนกเทคโนโลยีสารสนเทศ',
    Detail:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Management: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Suggestion: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Date: '02-12-2021',
    user: 'Karnanan Purimanuruk',
    Status: 'ทบทวนซ้ำ',
    Level: 'B',
    Committee: 'IC, RM',
    Tool: '',
  },
  {
    Id: 6611009,
    Category: 'Clinical',
    subCategory: 'Specific Clinical',
    Subject: 'ab illo inventore veritatis et quasi',
    riskDate: '02-12-2021',
    Location: 'IPD',
    Area: 'ชั้น 3',
    HN: '90090',
    An: '12345678910',
    Witness: 'Karnanan Purimanuruk',
    Div: 'แผนกเทคโนโลยีสารสนเทศ',
    Detail:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Management: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Suggestion: 'ab illo inventore veritatis et quasi architecto beatae vitae dicta',
    Date: '02-12-2021',
    user: 'Karnanan Purimanuruk',
    Status: 'ทบทวนซ้ำ',
    Level: '10',
    Committee: 'IC, PTC',
    Tool: 'RCA',
  },
];

mock.onGet('/api/data/risk/PendingConsiderData').reply(() => {
  return [200, PendingConsiderData];
});
export default PendingConsiderData;