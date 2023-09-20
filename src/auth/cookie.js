export function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

export function getTokenFromCookie() {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === "token") {
      return value;
    }
  }
  return null; // 쿠키에서 토큰을 찾지 못한 경우
}

export function deleteCookie(name) {
  const date = new Date();
  // 만료일을 현재 날짜 이전으로 설정하여 쿠키를 삭제합니다.
  date.setTime(date.getTime() - 1);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=;${expires};path=/`;
}
