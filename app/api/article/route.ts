import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   try {
//     const { searchParams } = req.url
//       ? new URL(req.url)
//       : { searchParams: null };
//     if (!searchParams)
//       return NextResponse.json({ error: "Missing query" }, { status: 400 });

//     const url = searchParams.get("url");
//     if (!url)
//       return NextResponse.json({ error: "Missing URL" }, { status: 400 });

//     // Fetch the actual article from external API
//     const res = await fetch(url);
//     if (!res.ok) throw new Error("Failed to fetch external article");

//     // const data = await res.json(); // or text(), depending on your API
//     // return NextResponse.json(data);
//     const data = await res.json(); // or text(), depending on your API
//     return NextResponse.json(data.data[0]);
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { error: "Failed to fetch article" },
//       { status: 500 }
//     );
//   }
// }

// import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");
    if (!url) {
      return NextResponse.json({ error: "Missing URL" }, { status: 400 });
    }

    // Decode URL
    const apiUrl = decodeURIComponent(url);

    // Fetch the JSON article from Mediastack (or your API)
    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error("Failed to fetch article");
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch article" },
      { status: 500 }
    );
  }
}
