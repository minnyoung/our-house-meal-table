export function setUid(uid: string) {
  localStorage.setItem("uid", uid);
}

export function getUid() {
  const uid = localStorage.getItem("uid");
  if (!uid) return null;
  return uid;
}

export function removeUid() {
  localStorage.removeItem("uid");
}
