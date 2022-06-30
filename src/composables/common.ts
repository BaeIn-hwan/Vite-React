/**
 * img 태그 src 값 넣기
 * @param {string} name images 하위 폴터 url
 * @returns {string} image url
 */
export const getImageUrl = (name: string): string => {
  return new URL(`/src/assets/images${name}`, import.meta.url).href;
};
