export const expandHex = (hex: string): string => {
  const h = hex.replace(/^#/, '');
  return h.length === 3
    ? '#' + h[0] + h[0] + h[1] + h[1] + h[2] + h[2]
    : hex;
};

export const adjustColorShade = (color: string, factor: number): string => {
  const expanded = expandHex(color);
  const r1 = parseInt(expanded.slice(1, 3), 16);
  const g1 = parseInt(expanded.slice(3, 5), 16);
  const b1 = parseInt(expanded.slice(5, 7), 16);
  return `rgb(${Math.round(r1 + factor * -r1)}, ${Math.round(g1 + factor * -g1)}, ${Math.round(b1 + factor * -b1)})`;
};

export const hexToRgba = (hex: string, alpha: number): string => {
  const expanded = expandHex(hex);
  const bigint = parseInt(expanded.replace(/^#/, ''), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
