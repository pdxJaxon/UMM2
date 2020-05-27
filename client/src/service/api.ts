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
    return { status, error: data, data: null };
  } catch (error) {
    return { error, json: null, status: null };
  }
};
