import React from "react";
import { Layout } from "../components";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
export function Tracks(): React.ReactElement {
  return <Layout grid></Layout>;
}
