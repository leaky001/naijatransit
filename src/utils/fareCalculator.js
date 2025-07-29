export const calculateFare = (distance) => {
  const baseFare = 100; // base fare
  const perKmRate = 50; // per km after base

  return baseFare + distance * perKmRate;
};
