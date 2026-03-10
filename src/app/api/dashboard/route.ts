import { NextResponse } from "next/server";

export async function GET() {
  if (!process.env.BASE_URL) {
    return NextResponse.json(
      { message: "Server configuration error: BASE_URL is not defined" },
      { status: 500 },
    );
  }

  try {
    // Fetch profile data from the database or an external API
    const res = await fetch(`${process.env.BASE_URL}/api/dashboard`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      console.error("DASHBOARD BACKEND ERROR:", errorData || res.statusText);
      return NextResponse.json(
        errorData || { message: "Failed to fetch dashboard data" },
        { status: res.status },
      );
    }

    const userData = await res.json();
    return NextResponse.json(userData);
  } catch (error) {
    console.error("DASHBOARD ROUTE ERROR:", error);
    return NextResponse.json(
      { error: "the server is down by now" },
      { status: 500 },
    );
  }
}
