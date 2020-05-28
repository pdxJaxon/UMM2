export const URL = "http://localhost:3000";

export enum Endpoint {
  TEAMS = "teams",
}

type JSONResponse = {
  status?: number;
  data: any;
  error: any;
};

export const request = async (endpoint: Endpoint, params?: any) => {
  try {
    const res = await fetch(`${URL}/${endpoint}`);
    const { ok, status } = res;
    const data = await res.json();
    if (ok) {
      return { status, data, error: false };
    }
    // This is an error from the API side, we get back 4xx or 5xx code
    return { status, error: data, data: null };
  } catch (error) {
    // This is an error on our side - the fetch failed
    return { error, json: null, status: null };
  }
};
