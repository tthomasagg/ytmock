type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

type Thumbnails = {
  default?: Thumbnail;
  medium?: Thumbnail;
  high?: Thumbnail;
  standard?: Thumbnail;
  maxres?: Thumbnail;
};

export const getBestQualityThumbnail = (
  thumbnails: Thumbnails,
): Thumbnail | undefined => {
  const qualityOrder = [
    "maxres",
    "standard",
    "high",
    "medium",
    "default",
  ] as const;
  return qualityOrder.reduce<Thumbnail | undefined>(
    (best, quality) => best || thumbnails?.[quality],
    undefined,
  );
};

const pluralize = (value: number, unit: string) =>
  `${Math.floor(value)} ${unit}${Math.floor(value) !== 1 ? "s" : ""}`;

const toStringDecimal = (num: number | string) => {
  let toDecimal = num.toString().match(/(\d+\.\d)/)?.[0] || num.toString();
  const withZero = /(\d+)\.0/g.exec(toDecimal);
  return withZero?.[1] != undefined ? withZero[1] : toDecimal;
};

export const parseElapsedTime = (dateString: string) => {
  const now = new Date();
  const date = new Date(dateString);
  const diffInMilliseconds = now.getTime() - date.getTime();
  const diffInHours = diffInMilliseconds / (1000 * 60 * 60);
  const diffInDays = diffInHours / 24;
  const diffInWeeks = diffInDays / 7;
  const diffInMonths = diffInDays / 30;
  const diffInYears = diffInDays / 365;

  if (diffInHours < 24) {
    return pluralize(diffInHours, "hour");
  } else if (diffInDays < 7) {
    return pluralize(diffInDays, "day");
  } else if (diffInWeeks < 4) {
    return pluralize(diffInWeeks, "week");
  } else if (diffInMonths < 12) {
    return pluralize(diffInMonths, "month");
  } else {
    return pluralize(diffInYears, "year");
  }
};

export const formatViewsCount = (num: string): string => {
  const toNum = +num;
  if (isNaN(toNum)) {
    return "";
  }
  if (toNum >= 1000000000) {
    return `${toStringDecimal(toNum / 1000000000)}B`;
  } else if (toNum >= 1000000) {
    return `${toStringDecimal(toNum / 1000000)}M`;
  } else if (toNum >= 1000) {
    return `${toStringDecimal(toNum / 1000)}K`;
  }
  return num.toString();
};

export const decodeDurationString = (duration: string): string => {
  if (!duration) return "0:00";
  const matches = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!matches) return "0:00";

  const [, hours, minutes, seconds] = matches;
  const h = hours ? parseInt(hours) : 0;
  const m = minutes ? parseInt(minutes) : 0;
  const s = seconds ? parseInt(seconds) : 0;

  if (h > 0) {
    return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }
  return `${m}:${s.toString().padStart(2, "0")}`;
};

export const replaceFrameWidthHeight = (
  frameHTML: string,
  width: string,
  height: string,
) => {
  const regex = /width="(\d+)" height="(\d+)"/g;
  return frameHTML.replace(regex, `width="${width}" height="${height}"`);
};
