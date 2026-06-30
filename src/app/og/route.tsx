import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const desc = searchParams.get("desc");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 50%, #0f172a 100%)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 100px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #8B5CF6, #3B82F6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 36,
                fontWeight: 700,
                color: "white",
              }}
            >
              FR
            </div>
            <span
              style={{
                fontSize: 32,
                fontWeight: 600,
                color: "#a78bfa",
                letterSpacing: "-0.5px",
              }}
            >
              furqan.dev
            </span>
          </div>

          <h1
            style={{
              fontSize: title ? 52 : 64,
              fontWeight: 800,
              color: "white",
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              margin: "0 0 16px 0",
              maxWidth: 650,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title || "Furqan Raza"}
          </h1>

          {!title && (
            <p
              style={{
                fontSize: 32,
                fontWeight: 500,
                color: "#818cf8",
                margin: "0 0 24px 0",
              }}
            >
              AI/LLM Engineer & GenAI Developer
            </p>
          )}

          <p
            style={{
              fontSize: desc ? 20 : 22,
              color: "#94a3b8",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: 650,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {(desc?.length || 0) > 120 ? desc?.slice(0, 120) + "..." : (desc || "Generative AI · AI Agents · Conversational AI · RAG · Intelligent Automation")}
          </p>

          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 40,
              fontSize: 18,
              color: "#64748b",
            }}
          >
            <span>🔗 furqan.dev</span>
            <span>📍 Karachi, Pakistan</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "40%",
            height: "100%",
            background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.05))",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #8B5CF6, #3B82F6)",
              opacity: 0.2,
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "20%",
              right: "15%",
              width: 120,
              height: 120,
              borderRadius: 24,
              border: "2px solid rgba(139,92,246,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
            }}
          >
            🤖
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
