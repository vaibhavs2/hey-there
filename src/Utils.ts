//generated from chatGPT, it is not accurate
export function calculateLocationsWithinDistance(
  latitude: number, // Latitude of the starting point in degrees
  longitude: number, // Longitude of the starting point in degrees
  maxDistanceKm: number, // Maximum distance in kilometers
  limit: number, // Maximum number of locations to find
): [number, number][] {
  const earthRadius = 6371; // Radius of the Earth in kilometers

  // Convert latitude and longitude from degrees to radians
  const lat1 = (Math.PI / 180) * latitude;
  const lon1 = (Math.PI / 180) * longitude;

  const locations: [number, number][] = [];

  // Counter for the number of locations found
  let count = 0;

  // Generate random angles and distances within the radius
  while (count < limit) {
    // Generate random angles between 0 and 2*PI
    const randomAngle = Math.random() * 2 * Math.PI;
    // Generate random distances within the maximum radius
    const randomDistance = Math.random() * maxDistanceKm;

    // Calculate the latitude and longitude offsets based on the random angle and distance
    const latOffset =
      (randomDistance / earthRadius) * (Math.cos(randomAngle) / Math.PI) * 180;
    const lonOffset =
      (randomDistance / earthRadius) * (Math.sin(randomAngle) / Math.PI) * 180;

    // Calculate new latitude and longitude
    const newLatitude = latitude + latOffset;
    const newLongitude = longitude + lonOffset;

    // Ensure the new coordinates are within the valid range (-90 to 90 for latitude, -180 to 180 for longitude)
    if (
      newLatitude >= -90 &&
      newLatitude <= 90 &&
      newLongitude >= -180 &&
      newLongitude <= 180
    ) {
      locations.push([newLongitude, newLatitude]);
      count++;
    }
  }

  return locations;
}
