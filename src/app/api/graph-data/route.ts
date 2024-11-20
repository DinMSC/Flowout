import { NextResponse } from 'next/server';

interface DataPoint {
  timestamp: string;
  value: number;
}

type ApiResponse = DataPoint[];

export async function GET() {
  const graphData: ApiResponse = Array.from({ length: 7 }).map((_, index) => ({
    timestamp: `Chart ${index + 1}`,
    value: Math.floor(Math.random() * (550 - 400) + 10),
  }));

  return NextResponse.json(graphData);
}
