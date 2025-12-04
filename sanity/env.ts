export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-04-13";

export const dataset = "production";

export const projectId = "oqe9bjv1";

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
