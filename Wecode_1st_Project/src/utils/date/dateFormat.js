export const dateFormat = () => {
  const KoreaDate = new Date().toLocaleString('ko-KR', {
    timeZone: 'Asia/seoul',
  });

  const date = KoreaDate.split('.');

  return `${date[0]}. ${date[1]}. ${date[2]}`;
};
