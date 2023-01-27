export function currentTime() {
  let date = new Date();
  let h: string | number = date.getHours();
  let m: string | number = date.getMinutes();
  let s: string | number = date.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = h + ":" + m + ":" + s + " ";
  (document.getElementById("clock") as HTMLDivElement).innerText = time;
  (document.getElementById("clock") as HTMLDivElement).textContent = time;

  setTimeout(currentTime, 1000);
}
currentTime();
