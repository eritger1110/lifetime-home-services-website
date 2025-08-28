import fetch from 'node-fetch';

export async function handler() {
  try {
    const placeId = process.env.GOOGLE_PLACES_PLACE_ID;   // set in Netlify env
    const key     = process.env.GOOGLE_PLACES_API_KEY;    // set in Netlify env
    if (!placeId || !key) return { statusCode: 500, body: 'Missing Places config' };

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews,name,url&reviews_no_translations=true&key=${key}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== 'OK') {
      return { statusCode: 502, body: `Places error: ${data.status}` };
    }

    // Map and trim to 10 reviews
    const out = {
      name: data.result.name,
      url: data.result.url,
      rating: data.result.rating,
      count: data.result.user_ratings_total,
      reviews: (data.result.reviews || []).slice(0, 10).map(r => ({
        author: r.author_name, 
        text: r.text, 
        rating: r.rating, 
        time: r.relative_time_description
      }))
    };
    
    // Cache for 12 hours at the edge
    return {
      statusCode: 200,
      headers: { 
        'Content-Type': 'application/json', 
        'Cache-Control': 'public, max-age=43200' 
      },
      body: JSON.stringify(out)
    };
  } catch (e) {
    return { statusCode: 500, body: 'Server error' };
  }
}

