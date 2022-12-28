import { directionsApi } from "../apis";

export const time = async (
    start: [number, number],
    end: [number, number]
  ) => {
    const resp = await directionsApi.get(
      `/${start.join(",")};${end.join(",")}`
    );
  
    const { distance, duration } = resp.data.routes[0];
  
    let kms = distance / 1000;
    kms = Math.round(kms * 100);
    kms /= 100;
  
    const minutes = Math.floor(duration / 60);
    return {
      minutes, kms
    }
  };