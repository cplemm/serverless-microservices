import { checkResponse, get, post } from '@/utils/http';
//const baseUrl = 'http://localhost:7071/api';
const baseUrl = window.apiTripsBaseUrl;
const apiKey = window.apiKey;
const signalrUrl = window.signalrInfoUrl;
const signalrApiKey = window.signalrApiKey;

// GET methods
export function getSignalRInfo() {
  return get(`${signalrUrl}`, {}, signalrApiKey).then(checkResponse);
}

// POST methods
export function createTrip(trip) {
  return post(`${baseUrl}/trips`, trip, apiKey).then(checkResponse);
}
