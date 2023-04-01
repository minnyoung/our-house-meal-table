import html2canvas from "html2canvas";

export default function saveCalenderImage(
  id: string,
  month: string,
  year: string
) {
  html2canvas(document.getElementById(id) as HTMLElement).then((canvas) => {
    onSaveAs(canvas.toDataURL("image/png"), `${year}-${month}월 식단표.png`);
  });

  const onSaveAs = (url: string, filename: string) => {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = url;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };
}
