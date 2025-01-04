import fetch from "node-fetch";

interface Request {
  url: string;
  lat: number;
  lng: number;
  radius: number;
  type: string[];
}

interface Response {
  // Define the properties of the response object here
}

export default async function GET(req: Request): Promise<Response> {
  const { searchParams } = new URL(req.url);
}
