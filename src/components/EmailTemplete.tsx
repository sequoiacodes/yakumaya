import React from "react";


interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function EmailTemplate({
  name,
  email,
  subject,
  message,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "16px",
        padding: "32px",
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "system-ui, -apple-system, sans-serif",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
          padding: "16px 24px",
          borderRadius: "12px",
          marginBottom: "24px",
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: "20px",
            margin: "0",
            fontWeight: "600",
            letterSpacing: "0.025em",
          }}
        >
          ✨ New Message For Yakumaya Foundation ✨
        </h2>
      </div>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ marginBottom: "16px" }}>
          <h3
            style={{
              color: "#0f172a",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            From
          </h3>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <h3
            style={{
              color: "#0f172a",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            Name
          </h3>
          <p
            style={{
              color: "#334155",
              fontSize: "15px",
              margin: "0",
              padding: "8px 12px",
              backgroundColor: "#f1f5f9",
              borderRadius: "6px",
            }}
          >
            {name}
          </p>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <h3
            style={{
              color: "#0f172a",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            Email
          </h3>
          <p
            style={{
              color: "#334155",
              fontSize: "15px",
              margin: "0",
              padding: "8px 12px",
              backgroundColor: "#f1f5f9",
              borderRadius: "6px",
            }}
          >
            {email}
          </p>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <h3
            style={{
              color: "#0f172a",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            Subject
          </h3>
          <p
            style={{
              color: "#334155",
              fontSize: "15px",
              margin: "0",
              padding: "8px 12px",
              backgroundColor: "#f1f5f9",
              borderRadius: "6px",
            }}
          >
            {subject}
          </p>
        </div>

        <div>
          <h3
            style={{
              color: "#0f172a",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            Message
          </h3>
          <p
            style={{
              color: "#334155",
              fontSize: "15px",
              margin: "0",
              padding: "16px",
              backgroundColor: "#f1f5f9",
              borderRadius: "6px",
              lineHeight: "1.5",
            }}
          >
            {message}
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div
        style={{
          marginTop: "24px",
          borderTop: "1px solid #e2e8f0",
          paddingTop: "24px",
          textAlign: "center" as const,
        }}
      >
      
        <div
          style={{
            color: "#64748b",
            fontSize: "14px",
            lineHeight: "1.5",
          }}
        >
          <p style={{ margin: "0 0 8px 0", fontWeight: "600" }}>
            Yakumaya Foundation
          </p>
          <p style={{ margin: "0 0 4px 0" }}>
            Empowering Communities, Transforming Lives
          </p>
          <p style={{ margin: "0", fontSize: "12px" }}>
            This email was sent by Yakumaya Foundation
          </p>
        </div>
      </div>
    </div>
  );
}
