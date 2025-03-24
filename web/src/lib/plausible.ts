import Plausible from "plausible-tracker";

export const plausible = Plausible({
  domain: "burnmail.dev",
  apiHost: "https://s.lorenzo0111.me",
});

plausible.enableAutoPageviews();
plausible.enableAutoOutboundTracking();
