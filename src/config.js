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
    content: "소중한 인연이 결실을 맺어\n새 출발의 첫걸음을 내딛습니다.\n\n늘 봄날처럼 밝고 행복하게 살 수 있도록\n따뜻한 격려로 축복해 주시면 감사한 마음으로\n평생 간직하겠습니다."
  },
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },
  accounts: {
    groom: [
      { role: "신랑", name: "배영광", bank: "신한은행", number: "110-394-404769" },
      { role: "어머니", name: "한성자", bank: "신한은행", number: "110-399-932884" }
    ],
    bride: [
      { role: "신부", name: "곽민주", bank: "신한은행", number: "110-565-246892" },
      { role: "아버지", name: "곽평찬", bank: "우리은행", number: "1002-432-796784" },
      { role: "어머니", name: "이현순", bank: "NH농협은행", number: "397-12-011961" }
    ]
  },
  meta: {
    title: "배영광 ♥ 곽민주 결혼합니다",
    description: "2026년 6월 6일 토요일 12시 30분"
  }
};

export default CONFIG;
