import { useQuery } from "@tanstack/react-query";
import { Root, Geo } from "./types";


const useFetchCity = (printCity: string) => {
  
  // Fetch function for the geolocation
  const fetchGeocode = (): Promise<Geo | void> => fetch(geoCode, {
    credentials: "same-origin",
  })
    .then((res) => res.json()).then((res)=>res[0]).then((data) => data as Geo)
    .catch((error) => console.log(error));

  // Fetch function for the metorological data
  const fetchMetData = (): Promise<Root | void> => 
      fetch(metApiCall).then((res)=> res.json()).then((data)=> data as Root);
  
  // Query for geolocation
  const { status: statusLocation, data: geoCodeData } = useQuery({
    queryKey: ["geoCode", printCity],
    queryFn: fetchGeocode,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (statusLocation === "error"){
    console.log("Something went wrong with the location fetch")
  }

  const geoCode: string = `https://eu1.locationiq.com/v1/search?key=pk.3e21916e151f4d42374fdc631eded07a&q=${printCity}&format=json`;
  const lon = geoCodeData?.lon
  const lat = geoCodeData?.lat
  
  const metApiCall: string = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;
  
  // Dependent query for meterological data
  const { status: statusMetCall, data: metData } = useQuery({
    queryKey: ["metData", printCity],
    queryFn: fetchMetData,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!lat,
  })
  return { statusMetCall, metData }
}

export default useFetchCity;