import axios, { AxiosError } from "axios";
import useSWR from "swr";
import { fetcher } from "../utils";
import { Tracker } from "./types";

export function useTrackers() {
  const { data, error, isValidating } = useSWR<Tracker[], AxiosError>(
    `/api/tracker`,
    fetcher
  );

  return {
    data: data ?? ([] as Tracker[]),
    isLoading: !error && !data,
    isValidating: isValidating,
    isError: error,
  };
}

export async function createTracker(userId: string, IMEI: string) {
  await axios.post("/api/tracker", { userId, IMEI });
}
