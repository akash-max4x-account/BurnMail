import { plausible } from "@/lib/plausible";

export function OutboundLink({ href, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      {...props}
      href={href}
      onClick={() => {
        if (!href) return;

        plausible.trackEvent("Outbound Link: Click", {
          props: { url: href },
        });
      }}
    />
  );
}
