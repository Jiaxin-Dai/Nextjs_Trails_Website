import { FilterProps } from "../types/index";
import axios from 'axios';

export async function fetchTrails(filters: FilterProps) {
    const { latitude, longitude, page, per_page, radius } = filters;

    // Set the required headers for the API request
    const headers: HeadersInit = {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
        "X-RapidAPI-Host": "trailapi-trailapi.p.rapidapi.com",
    };

    // Set the required headers for the API request
    const response = await fetch(
        `https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=${latitude}&lon=${longitude}`,
        {
            headers: headers,
        }
    );

    // Parse the response as JSON
    const result = await response.json();

    return result;
}



export async function getLatLng(location: string): Promise<{ lat: number, lng: number }> {
    const apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
    const apiKey = process.env.GOOGLE_MAP_API_KEY;
    console.log("get location !!")
    try {
        const response = await axios.get(apiUrl, {
            params: {
                address: location,
                key: apiKey,
            },
        });

        const { results } = response.data;

        if (results.length > 0) {
            const { lat, lng } = results[0].geometry.location;
            return { lat, lng };
        } else {
            throw new Error('Location not found');
        }
    } catch (error) {
        throw new Error(`Error getting location: ${error.message}`);
    }
}
