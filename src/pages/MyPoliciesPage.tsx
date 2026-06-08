import { usePolicies } from "../hooks/usePolicies";
import { PolicyCard } from "../components/PolicyCard";

export const MyPoliciesPage = () => {
  const { policies, loading, error } = usePolicies();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading policies...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        {error}
      </div>
    );
  }

 const activePolicies = policies
  .filter((policy) => policy.status === "Active")
  .toSorted(
    (a, b) =>
      new Date(a.policyStart).getTime() -
      new Date(b.policyStart).getTime(),
  );

    
const handleClaim = (
  policyNumber: string,
) => {
  console.log(
    `Claim action triggered for policy ${policyNumber}`,
  );
  // Future API call or navigation
};

const handleManagePolicy = (
  policyNumber: string,
) => {
  console.log(
    `Manage policy action triggered for policy ${policyNumber}`,
  );
  // Future API call or navigation
};

  return (
    <main className="p-6 bg-core-surface min-h-screen">
      <h1 className="mb-6 text-3xl font-bold text-core">My Policies</h1>
      <div className="flex flex-col gap-8 items-center">
        {activePolicies.map((policy) => (
          <PolicyCard
            key={policy.policyNumber}
            policy={policy}
            onClaim={handleClaim}
            onManagePolicy={handleManagePolicy}
          />
        ))}
      </div>
    </main>
  );
};
