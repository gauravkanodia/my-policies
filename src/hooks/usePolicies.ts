import { useEffect, useState } from "react";
import policiesJson from "../data/policies.json";
import type { Policy } from "../types/policy";

export const usePolicies = () => {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPolicies = async () => {
    try {
      setLoading(true);
      setError(null);

      // we will replace this with actual API call for now we will use the local JSON file
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });

      setPolicies(policiesJson as Policy[]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPolicies();
  }, []);

  return {
    policies,
    loading,
    error,
  };
};