import { fromFarcasterTime } from "@farcaster/hub-nodejs";

export function farcasterTimeToDate(time: undefined): undefined;
export function farcasterTimeToDate(time: null): null;
export function farcasterTimeToDate(time: number): Date;
export function farcasterTimeToDate(time: number | null | undefined): Date | null | undefined;
export function farcasterTimeToDate(time: number | null | undefined): Date | null | undefined {
  if (time === undefined) return undefined;
  if (time === null) return null;
  const result = fromFarcasterTime(time);
  if (result.isErr()) throw result.error;
  return new Date(result.value);
}

export function bytesToHex(bytes: undefined): undefined;
export function bytesToHex(bytes: null): null;
export function bytesToHex(bytes: Uint8Array): string;
export function bytesToHex(bytes: Uint8Array | null | undefined): string | null | undefined {
  if (bytes === undefined) return undefined;
  if (bytes === null) return null;
  return `0x${Buffer.from(bytes).toString("hex")}`;
}

export function timeSince(date: Date) {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return `${Math.floor(interval)} years`;
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return `${Math.floor(interval)} months`;
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return `${Math.floor(interval)} days`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return `${Math.floor(interval)} hours`;
  }
  interval = seconds / 60;
  if (interval > 1) {
    return `${Math.floor(interval)} minutes`;
  }
  return `${Math.floor(seconds)} seconds`;
}