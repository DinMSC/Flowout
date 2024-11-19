import { NextResponse } from 'next/server';

interface DataPoint {
  timestamp: string;
  value: number;
}

type ApiResponse = DataPoint[];

export async function GET() {
  const randomData: ApiResponse = Array.from({ length: 7 }).map((_, index) => ({
    timestamp: `Oct ${index + 2}`,
    value: Math.floor(Math.random() * (550 - 400) + 10),
  }));

  return NextResponse.json(randomData);
}
