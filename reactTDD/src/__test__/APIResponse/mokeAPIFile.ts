import {createServer} from "miragejs";
import { GeoResponse, weather } from "./geoCodingAPIJson"

const createMockServer =()=>{


  
  return createServer({
    routes(){
      this.urlPrefix ="http://api.openweathermap.org";

      this.get("/geo/1.0/direct",()=>{
        return GeoResponse;
      })

      this.get("/data/2.5/weather",()=>{
        return weather;
      })
    }
  });
}

export {createMockServer};