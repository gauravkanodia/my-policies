import { usePolicies } from "./hooks/usePolicies";

function App() {
  const {
    policies,
    loading,
    error,
  } = usePolicies();

  if (loading) {
    return <div>Loading policies</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main>
      <h1>
        Cover-More Policies
      </h1>

      <p>
        Total Policies: {policies.length}
      </p>
    </main>
  );
}

export default App;