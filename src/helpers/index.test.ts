import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { parseElapsedTime, formatViewsCount } from "./index";

describe("formatViewsCount", () => {
  it("should return empty string for invalid input", () => {
    expect(formatViewsCount("abc")).toBe("");
    expect(formatViewsCount("")).toBe("");
  });

  it("should return number as is if less than 1000", () => {
    expect(formatViewsCount("999")).toBe("999");
    expect(formatViewsCount("0")).toBe("0");
  });

  it("should format thousands with K", () => {
    expect(formatViewsCount("1000")).toBe("1K");
    expect(formatViewsCount("1500")).toBe("1.5K");
    expect(formatViewsCount("3001")).toBe("3K");
    expect(formatViewsCount("999999")).toBe("999.9K");
  });

  it("should format millions with M", () => {
    expect(formatViewsCount("1000000")).toBe("1M");
    expect(formatViewsCount("1500000")).toBe("1.5M");
    expect(formatViewsCount("999999999")).toBe("999.9M");
  });

  it("should format billions with B", () => {
    expect(formatViewsCount("1000000000")).toBe("1B");
    expect(formatViewsCount("1500000000")).toBe("1.5B");
    expect(formatViewsCount("2000000000")).toBe("2B");
  });
});

describe("parseElapsedTime", () => {
  const mockDate = new Date("2025-10-20T12:00:00Z");
  let originalDate: typeof Date;

  beforeEach(() => {
    originalDate = global.Date;
    global.Date = class extends Date {
      constructor(...args: any[]) {
        super();
        if (args.length === 0) {
          return mockDate;
        }
        return new originalDate(...args);
      }
    } as typeof Date;

    // Also mock Date.now() to return our fixed timestamp
    global.Date.now = () => mockDate.getTime();
  });

  afterEach(() => {
    global.Date = originalDate;
  });

  it("should return hours when less than 24 hours", () => {
    expect(parseElapsedTime("2025-10-20T11:00:00Z")).toBe("1 hour");
  });

  it("should return hours when less than 24 hours pluralized", () => {
    expect(parseElapsedTime("2025-10-20T10:00:00Z")).toBe("2 hours");
  });

  it("should return days when less than 7 days", () => {
    const date = new Date("2025-10-19T12:00:00Z");
    expect(parseElapsedTime(date.toISOString())).toBe("1 day");
  });

  it("should return days when less than 7 days pluralized", () => {
    const date = new Date("2025-10-18T12:00:00Z");
    expect(parseElapsedTime(date.toISOString())).toBe("2 days");
  });

  it("should return weeks when less than 4 weeks", () => {
    const date = new Date("2025-10-13T12:00:00Z");
    expect(parseElapsedTime(date.toISOString())).toBe("1 week");
  });

  it("should return weeks when less than 4 weeks pluralized", () => {
    const date = new Date("2025-10-06T12:00:00Z");
    expect(parseElapsedTime(date.toISOString())).toBe("2 weeks");
  });

  it("should return months when less than 12 months", () => {
    const date = new Date("2025-09-20T12:00:00Z");
    expect(parseElapsedTime(date.toISOString())).toBe("1 month");
  });

  it("should return months when less than 12 months pluralized", () => {
    const date = new Date("2025-08-20T12:00:00Z");
    expect(parseElapsedTime(date.toISOString())).toBe("2 months");
  });

  it("should return years for dates more than 12 months ago", () => {
    const date = new Date("2024-10-20T12:00:00Z");
    expect(parseElapsedTime(date.toISOString())).toBe("1 year");
  });

  it("should return years for dates more than 12 months ago pluralized", () => {
    const date = new Date("2023-10-20T12:00:00Z");
    expect(parseElapsedTime(date.toISOString())).toBe("2 years");
  });
});
