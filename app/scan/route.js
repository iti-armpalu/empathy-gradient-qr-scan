import { NextResponse } from 'next/server';

export async function GET() {
  const url = new URL(process.env.LOG_SHEET_URL);
  url.searchParams.set('type', 'qr-scan');

  fetch(url.toString(), {
    method: 'GET',
    mode: 'no-cors',
  });

  return NextResponse.redirect(new URL('/', process.env.SITE_URL));
}
