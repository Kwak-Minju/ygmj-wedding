// React 버전 CONFIG 모듈
const CONFIG = {
  useCurtain: false,
  groom: {
    name: "영광",
    fullName: "배영광",
    nameEn: "Glory",
    father: "배경렬",
    mother: "한성자",
    fatherDeceased: true,
    motherDeceased: false
  },
  bride: {
    name: "민주",
    fullName: "곽민주",
    nameEn: "Minju",
    father: "곽평찬",
    mother: "이현순",
    fatherDeceased: false,
    motherDeceased: false
  },
  wedding: {
    date: "2026-06-06",
    time: "12:30",
    venue: "성균관컨벤션웨딩홀",
    hall: "3층",
    address: "서울 종로구 성균관로 31",
    tel: "02-1234-5678",
    mapLinks: {
      kakao: "https://place.map.kakao.com/913429074",
      naver: "https://map.naver.com/p/search/%EC%84%B1%EA%B7%A0%EA%B4%80%EC%9B%A8%EB%94%A9%ED%99%80/place/11545666?placePath=?abtExp=NEW-PLACE-SEARCH%3A2&bk_query=%EC%84%B1%EA%B7%A0%EA%B4%80%EC%9B%A8%EB%94%A9%ED%99%80&entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh"
    }
  },
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },
  accounts: {
    groom: [
      { role: "신랑", name: "배영광", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "배경렬", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "한성자", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "곽민주", bank: "하나은행", number: "000-000-000000" },
      { role: "아버지", name: "곽평찬", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "이현순", bank: "농협은행", number: "000-000-000000" }
    ]
  },
  meta: {
    title: "배영광 ♥ 곽민주 결혼합니다",
    description: "2026년 6월 6일 토요일 12시 30분"
  }
};

export default CONFIG;
