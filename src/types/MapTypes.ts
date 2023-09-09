export type MapBoxCoordinate = {
  coords: {
    accuracy: number;
    altitude: number;
    course: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
  };
  timestamp: number;
};
