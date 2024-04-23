export interface ApplyListType {
  id: number;
  noticeTitle: string;
  noticeId: number;
  name: string;
  career: string;
  applyDate: string;
  email: string;
  phone: string;
}

export interface ApplyCareerType {
  id: number;
  company: string;
  position: string;
  startAt: string;
  endAt: string;
  work: string;
}

export interface ApplyProejctType {
  id: number;
  title: string;
  startAt: string;
  endAt: string;
  stack: string;
  description: string;
}
