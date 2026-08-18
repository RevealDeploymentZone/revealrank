import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();

    const firstName = data.get("first_name") as string || "";
    const lastName = data.get("last_name") as string || "";
    const email = data.get("email") as string || "";
    const phone = data.get("phone") as string || "";
    const website = data.get("website") as string || "";
    const service = data.get("service") as string || "";
    const budget = data.get("budget") as string || "";
    const message = data.get("message") as string || "";

    const matonKey = process.env.MATON_API_KEY;
    const connId = process.env.GITHUB_MATON_CONN;

    if (!matonKey || !connId) {
      return NextResponse.json({ success: false, error: "Server config missing" }, { status: 500 });
    }

    const issueBody = `## New Lead from Reveal Rank Contact Form

| Field | Value |
|-------|-------|
| **Name** | ${firstName} ${lastName} |
| **Email** | ${email} |
| **Phone** | ${phone || "—"} |
| **Website** | ${website || "—"} |
| **Service** | ${service || "—"} |
| **Budget** | ${budget || "—"} |

### Message
${message || "_(no message)_"}

---
*Submitted via revealrank.com/contact*`;

    const res = await fetch(
      "https://api.maton.ai/github/repos/RevealDeploymentZone/revealrank/issues",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${matonKey}`,
          "Maton-Connection": connId,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: `Lead: ${firstName} ${lastName} — ${email}`,
          body: issueBody,
          labels: ["lead"],
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("GitHub issue error:", err);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
