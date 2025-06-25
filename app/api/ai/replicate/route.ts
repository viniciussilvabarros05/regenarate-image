import { NextResponse, NextRequest } from "next/server";

interface NextRequestWithImage extends NextRequest {
  imageUrl: string;
}
export async function POST(req: NextRequestWithImage, res: NextResponse) {
  const { imageUrl } = await req.json();
  console.log(imageUrl);
  return NextResponse.json({ message: "Teste" }, { status: 200 });
}
