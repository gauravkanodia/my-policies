import { usePolicies } from "../hooks/usePolicies";

export const MyPoliciesPage = () => {
  const {
    policies,
    loading,
    error,
  } = usePolicies();

  if (loading) {
    return <div>Loading policies...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const activePolicies = policies
    .filter(
      (policy) =>
        policy.status === "Active"
    )
    .sort(
      (a, b) =>
        new Date(
          a.policyStart
        ).getTime() -
        new Date(
          b.policyStart
        ).getTime()
    );

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">
        My Policies
      </h1>

      <p className="mt-4">
        Active Policies:
        {" "}
        {activePolicies.length}
      </p>

      <ul className="mt-4">
        {activePolicies.map(
          (policy) => (
            <li
              key={policy.policyNumber}
            >
              {policy.policyNumber}
            </li>
          )
        )}
      </ul>
    </main>
  );
};