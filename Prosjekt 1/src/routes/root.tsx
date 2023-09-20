import { useEffect, useState } from "react";
import "../index.css"
import useFetchCity from "../useFetchCity";
import HourlyView from "../components/HourlyView";
import DetailedWeekView from "../pages/DetailedWeekView";
import Favourites from "../Favourite";

export default function Root() {
    
    return (
        <>
          <Favourites/>
        </>
    )
}