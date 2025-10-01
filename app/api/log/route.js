// app/api/log/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { type, name, email, privacy, title, page } = await req.json();

    const base = process.env.LOG_SHEET_URL;
    if (!base) {
      return NextResponse.json({ error: "LOG_SHEET_URL missing" }, { status: 500 });
    }

    const url = new URL(base);
    url.searchParams.set("type", type);

    if (type === "survey") {
      url.searchParams.set("name", name ?? "");
      url.searchParams.set("email", email ?? "");
      url.searchParams.set("privacy", privacy ?? "prod");
    }

    if (type === "article") {
      url.searchParams.set("title", title ?? "");
      url.searchParams.set("page", page ?? "unknown");
    }

    const res = await fetch(url.toString(), { method: "GET", cache: "no-store" });

    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      return NextResponse.json({ error: "Upstream failed", status: res.status, txt }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: err.message || "Unknown error" }, { status: 500 });
  }
}
