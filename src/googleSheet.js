import { GoogleSpreadsheet } from "google-spreadsheet";

// Google Spreadsheet 문서를 불러오는 유틸 함수
// 사용 전 .env 파일에 다음 값을 설정해 주세요:
// VITE_GOOGLE_SHEET_ID, VITE_GOOGLE_API_KEY
export async function getGoogleSheet() {
  const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID;
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  if (!sheetId || !apiKey) {
    throw new Error("Google Sheet ID 또는 API Key가 설정되지 않았습니다. (.env 파일 확인)");
  }

  const doc = new GoogleSpreadsheet(sheetId, { apiKey });
  await doc.loadInfo();
  return doc;
}
