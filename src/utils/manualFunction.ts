export function setDisplayManual(isDisplayManual: "true" | "false") {
  localStorage.setItem("displayManual", isDisplayManual);
}

export function getDisplayManual() {
  const isDisplayManual = localStorage.getItem("displayManual");
  if (!isDisplayManual) return null;
  return isDisplayManual;
}
