import type { Bindings } from ".";

export async function trackEvent(event: string, env: Bindings) {
  await fetch(`${env.PLAUSIBLE_DOMAIN}/api/event`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "BurnMail/1.0.0",
      "X-Forwarded-For": "127.0.0.1",
    },
    body: JSON.stringify({
      domain: env.DOMAIN,
      name: event,
      url: `https://${env.DOMAIN}`,
    }),
  });
}
