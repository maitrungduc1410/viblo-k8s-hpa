import { NextResponse } from "next/server";
import { iterate } from "fibonacci";
export async function GET(request: Request) {
  const bigNumber = iterate(parseInt(process.env.FIBONACCI_ITERATIONS || '3000'));
  return NextResponse.json(bigNumber);
}
