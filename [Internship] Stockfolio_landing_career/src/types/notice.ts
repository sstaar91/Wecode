export interface NoticeListType {
  id: number;
  position: string;
  noticeTitle: string;
  noticeType: string;
  author: string;
  category: string;
  deadLine: string;
  count: number;
}

export interface CategoryType {
  id: number;
  title: string;
  value: string;
}
