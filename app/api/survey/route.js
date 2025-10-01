// app/api/survey/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, privacy } = await req.json();

    // Basic server-side validation
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const base = process.env.LOG_SHEET_URL; // server-only env
    if (!base) {
      return NextResponse.json(
        { error: "LOG_SHEET_URL missing" },
        { status: 500 }
      );
    }

    const url = new URL(base);
    url.searchParams.set("type", "survey");
    url.searchParams.set("name", name.trim());
    url.searchParams.set("email", email.trim());
    url.searchParams.set("privacy", privacy ?? "prod");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const res = await fetch(url.toString(), {
      method: "GET",
      cache: "no-store",
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      return NextResponse.json(
        { error: "Upstream failed", status: res.status, txt },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg =
      err?.name === "AbortError"
        ? "Request timed out"
        : err?.message || "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
