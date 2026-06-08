import { useEffect, useState } from "react";
import policiesJson from "../data/policies.json";
import type { Policy } from "../types/policy";

export const usePolicies = () => {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPolicies = async () => {
    try {
      // Future API call
      // const response = await fetch("/api/policies");
      // const data = await response.json();

      setPolicies(policiesJson as Policy[]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadPolicies();
  }, []);

  return {
    policies,
    loading,
    error,
  };
};