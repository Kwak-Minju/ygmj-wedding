import React, { useEffect, useState } from 'react';
import CONFIG from './config.js';
import { getGoogleSheet } from './googleSheet.js';

function App() {
	const [busCount, setBusCount] = useState(null);
	const [loadingBusCount, setLoadingBusCount] = useState(true);
	const [busError, setBusError] = useState(null);

	useEffect(() => {
		async function fetchBusCount() {
			try {
				const doc = await getGoogleSheet();

				// "버스" 시트가 있으면 우선 사용하고, 없으면 첫 번째 시트를 사용합니다.
				const sheet = doc.sheetsByTitle['버스'] || doc.sheetsByIndex[0];

				await sheet.loadHeaderRow();
				const rows = await sheet.getRows();

				let total = 0;
				for (const row of rows) {
					const value = row['인원'] || row['인원수'] || row['탑승인원'];
					const num = Number(value);
					if (!Number.isNaN(num)) {
						total += num;
					}
				}

				setBusCount(total);
				setLoadingBusCount(false);
			} catch (error) {
				console.error('버스 인원 조회 오류:', error);
				setBusError(error.message || '알 수 없는 오류');
				setLoadingBusCount(false);
			}
		}

		fetchBusCount();
	}, []);

	return (
		<div className="app">
			<header className="header">
				<h1>{CONFIG.groom.name} ♥ {CONFIG.bride.name} 결혼합니다</h1>
				<p>
					{CONFIG.wedding.date} {CONFIG.wedding.time} · {CONFIG.wedding.venue} {CONFIG.wedding.hall}
				</p>
			</header>

			<main>
				<section className="bus-section">
					<h2>셔틀버스 안내</h2>
					<p>예식장까지 셔틀버스를 대절할 예정이라 탑승 인원을 미리 파악하고자 합니다.</p>

					{loadingBusCount && <p>버스 신청 인원을 불러오는 중입니다...</p>}
					{!loadingBusCount && busError && (
						<p>버스 인원 정보를 불러오지 못했습니다. 나중에 다시 확인해주세요.</p>
					)}
					{!loadingBusCount && !busError && busCount != null && (
						<p>현재까지 신청 인원: <strong>{busCount}</strong>명</p>
					)}
				</section>
			</main>
		</div>
	);
}

export default App;

