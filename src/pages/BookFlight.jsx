import { useState } from "react";
import { places } from "../utils/dummyData";
import { ArrowDownUp } from "lucide-react";

export default function BookFlight() {
  const [journeyFrom, setJourneyFrom] = useState("");
  const [journeyTo, setJourneyTo] = useState("");
  const [isJourneyFromOpen, setJourneyFromOpen] = useState(false);
  const [isJourneyToOpen, setJourneyToOpen] = useState(false);
  const [departureDate, setDepartureDate] = useState();
  const [form, setForm] = useState({ from: "", to: "", date: "" });

  return (
    <div className="book-flight-component space-y-4 bg-slate-200 p-4">
      <div className="radio-wrapper trip-type flex w-full gap-4">
        <div>
          <input type="radio" name="trip_type" id="one_way" value="one_way" className="mr-2" />
          <label htmlFor="one_way" className="font-semibold text-slate-800">
            One Way
          </label>
        </div>
        <div>
          <input type="radio" name="trip_type" id="two_way" value="two_way" className="mr-2" />
          <label htmlFor="two_way" className="font-semibold text-slate-800">
            Round Trip
          </label>
        </div>
      </div>
      <div>
        <div className="relative flex flex-col items-center space-y-2">
          <div className="journey-from-container w-full">
            <input type="text" name="journey_from" value={journeyFrom} onChange={(e) => setJourneyFrom(e.target.value.toLowerCase())} className="w-full p-2 border border-slate-400 focus:outline-none rounded-md" />
            <div className="absolute w-full max-h-[300px] overflow-y-scroll bg-slate-400">{journeyFrom && places.filter((place) => place.city.toLowerCase().startsWith(journeyFrom)).map((place) => <p>{place.city}</p>)}</div>
          </div>
          <ArrowDownUp />
          <div className="journey-to-container w-full">
            <input type="text" name="journey_to" value={journeyTo} onChange={(e) => setJourneyTo(e.target.value.toLowerCase())} className="w-full p-2 border border-slate-400 focus:outline-none rounded-md" />
            <div className="absolute w-full max-h-[300px] overflow-y-scroll bg-slate-400">{journeyTo && places.filter((place) => place.city.toLowerCase().startsWith(journeyTo)).map((place) => <p>{place.city}</p>)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
