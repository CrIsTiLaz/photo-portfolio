import { NextResponse } from "next/server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const spacesEndpoint = "https://fra1.digitaloceanspaces.com"; // Endpointul doar pentru regiune, fără numele bucket-ului
const s3 = new S3Client({
  endpoint: spacesEndpoint,
  region: "fra1",
  credentials: {
    accessKeyId: process.env.DO_ACCESS_KEY,
    secretAccessKey: process.env.DO_SECRET_KEY,
  },
  forcePathStyle: true, // Forțează utilizarea unui URL de tip path-style pentru a evita eroarea de certificat
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const folderName = searchParams.get("folder") || "default-folder";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = 8; // Setăm limita la 8 imagini pe pagină
  const startIndex = (page - 1) * limit;

  const params = {
    Bucket: "patrikportfolio",
    Prefix: `${folderName}/`,
  };

  try {
    const command = new ListObjectsV2Command(params);
    const data = await s3.send(command);

    const images = data.Contents.slice(startIndex, startIndex + limit).map(
      (item) => ({
        url: `https://patrikportfolio.fra1.digitaloceanspaces.com/${item.Key}`,
        key: item.Key,
      })
    );

    return NextResponse.json(images, { status: 200 });
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { error: "Error fetching images" },
      { status: 500 }
    );
  }
}
