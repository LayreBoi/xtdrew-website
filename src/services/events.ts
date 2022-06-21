import mitt from "mitt";
import devconsole from "./devconsole";

const emilie = mitt();

class EventManager {
  public emit<T = any>(type: string, event?: T) {
    devconsole?.log(`Posting event ${type}...`);
    emilie.emit(type, event || undefined);
  }

  public listen(type: string, callback: (ani: any) => any) {
    devconsole?.log(`Listening to event ${type}...`);
    emilie.on(type, callback);
  }

  public stop(type: string, callback: (ani: any) => any) {
    emilie.off(type, callback);
    devconsole?.log(`Stopped listening to event ${type}!`);
  }
}

const emily = new EventManager();
export default emily;
