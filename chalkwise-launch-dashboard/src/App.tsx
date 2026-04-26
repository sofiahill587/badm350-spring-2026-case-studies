import { useEffect, useMemo, useState } from "react";
import { hasSupabaseEnv, supabase } from "./lib/supabase";

type Metrics = {
  total_users: number;
  active_users: number;
  new_users_today: number;
  total_matches: number;
  total_conversations: number;
  total_messages: number;
  users_without_matches: number;
};

const readinessChecks = [
  { name: "Public page messaging", status: "warn", detail: "Your public-facing copy and preview messaging should clearly explain what ChalkWise does." },
  { name: "Empty states", status: "warn", detail: "No-match states and incomplete profiles should have clearer handling." },
  { name: "Critical navigation flow", status: "pass", detail: "Core onboarding to match flow has tested well so far." }
] as const;

const securityChecks = [
  { name: "RLS hardening migration", status: "pass", detail: "The repo already includes dedicated RLS security migrations and users-table restrictions to review." },
  { name: "Client-side data exposure", status: "warn", detail: "Keep deeper admin checks off the plain frontend and continue using safe views or RPC functions." },
  { name: "Admin-only security summary", status: "pending", detail: "Next phase: add protected backend checks for policies, grants, and sensitive-table exposure." }
] as const;

const securityBadges = [
  { label: "UIUC-only auth", value: "Enabled" },
  { label: "Sensitive profile data", value: "Protected" },
  { label: "Public dashboard data", value: "Aggregate-only" }
] as const;

const emptyMetrics: Metrics = {
  total_users: 0,
  active_users: 0,
  new_users_today: 0,
  total_matches: 0,
  total_conversations: 0,
  total_messages: 0,
  users_without_matches: 0
};

function App() {
  const [metrics, setMetrics] = useState<Metrics>(emptyMetrics);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ready">("idle");

  useEffect(() => {
    if (!supabase) {
      return;
    }

    const fetchMetrics = async () => {
      setStatus("loading");
      setError(null);

      const { data, error: rpcError } = await supabase.rpc("get_public_dashboard_metrics");

      if (rpcError) {
        setError(rpcError.message);
        setStatus("idle");
        return;
      }

      const row = Array.isArray(data) ? data[0] : data;
      if (row) {
        setMetrics(row as Metrics);
        setLastUpdated(new Date().toLocaleString());
      }
      setStatus("ready");
    };

    fetchMetrics();
  }, []);

  const summaryStatus = useMemo(() => {
    if (status === "loading") return "Loading live metrics";
    if (status === "ready") return "Live metrics connected";
    return "Waiting for backend metrics RPC";
  }, [status]);

  return (
    <main className="app-shell">
      <section className="hero">
        <div className="eyebrow">ChalkWise Launch Dashboard</div>
        <h1>Public-safe launch summary with live product totals.</h1>
        <p>
          This page is designed to be safe to share by link. It shows high-level ChalkWise
          launch readiness, live aggregate product metrics, and a few clear security posture
          signals without exposing sensitive user or database details.
        </p>
        <div className="env-banner">
          {hasSupabaseEnv
            ? `${summaryStatus}.`
            : "No Supabase environment variables detected yet. Add .env.local from .env.example to connect live data."}
        </div>
        <div className="security-badge-row">
          {securityBadges.map((item) => (
            <div className="security-badge-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
        <div className="timestamp-banner">
          <span>Last updated</span>
          <strong>{lastUpdated ?? "Waiting for first live refresh"}</strong>
        </div>
        {error && <div className="error-banner">{error}</div>}
      </section>

      <section className="stat-grid">
        <article className="stat-card">
          <span>Status</span>
          <strong>Almost Ready</strong>
        </article>
        <article className="stat-card">
          <span>Total Users</span>
          <strong>{metrics.total_users}</strong>
        </article>
        <article className="stat-card">
          <span>Active / New Today</span>
          <strong>{metrics.active_users} / {metrics.new_users_today}</strong>
        </article>
        <article className="stat-card">
          <span>Matches / Conversations</span>
          <strong>
            {metrics.total_matches} / {metrics.total_conversations}
          </strong>
        </article>
      </section>

      <section className="stat-grid compact">
        <article className="stat-card">
          <span>Total Messages</span>
          <strong>{metrics.total_messages}</strong>
        </article>
        <article className="stat-card">
          <span>Users Without Matches</span>
          <strong>{metrics.users_without_matches}</strong>
        </article>
        <article className="stat-card">
          <span>Data Source</span>
          <strong>Public RPC</strong>
        </article>
        <article className="stat-card">
          <span>Exposure Level</span>
          <strong>Aggregate Only</strong>
        </article>
      </section>

      <section className="two-column">
        <div className="panel">
          <h2>Launch Readiness</h2>
          <div className="card-list">
            {readinessChecks.map((item) => (
              <article className="check-card" key={item.name}>
                <div className="row">
                  <h3>{item.name}</h3>
                  <span className={`badge ${item.status}`}>{item.status}</span>
                </div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="panel">
          <h2>Security / Backend Notes</h2>
          <div className="card-list">
            {securityChecks.map((item) => (
              <article className="check-card" key={item.name}>
                <div className="row">
                  <h3>{item.name}</h3>
                  <span className={`badge ${item.status}`}>{item.status}</span>
                </div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default App;
