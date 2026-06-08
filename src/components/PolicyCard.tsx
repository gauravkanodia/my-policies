import type { Policy } from "../types/policy";
import { Button } from "./Button";
import { ExternalLinkIcon } from "../assets";
import { formatDate } from "../utils";

type PolicyCardProps = {
  policy: Policy;
  onClaim: (policyNumber: string) => void;
  onManagePolicy: (policyNumber: string) => void;
};

export const PolicyCard = ({
  policy,
  onClaim,
  onManagePolicy,
}: PolicyCardProps) => {
  const destinations = policy.destinations
    .map((destination) => destination.name)
    .join(", ");

  const isAnnual = policy.type === "Annual";

  return (
    <div className="flex flex-col gap-8 md:flex-row md:justify-between w-full max-w-5xl rounded-3xl bg-surface p-6 md:p-8">
      {/* Policy Number */}
      <div className="flex flex-col flex-1">
        <div className="mb-4">
          <h2 className="text-lg md:text-2xl leading-normal">
            <span className="font-bold text-primary">Policy number:</span>{" "}
            <span className="font-normal text-core">{policy.policyNumber}</span>
          </h2>
        </div>

        {/* Content */}

        <div className="flex flex-col gap-2 md:flex-row md:gap-8">
          <div className="space-y-2 text-core">
            <p>
              <span className="font-bold">Destination:</span> {destinations}
            </p>

            {isAnnual ? (
              <>
                <p>
                  <span className="font-bold">Policy start date:</span>{" "}
                  {formatDate(policy.policyStart)}
                </p>

                <p>
                  <span className="font-bold">Maximum trip duration:</span> Up
                  to {policy.maxTripDuration} days
                </p>
              </>
            ) : (
              <p>
                <span className="font-bold">Travel date:</span>{" "}
                {formatDate(policy.policyStart)}
                {" - "}
                {formatDate(policy.policyEnd)}
              </p>
            )}
          </div>

          <div className="hidden md:block w-px bg-border" />

          <div className="space-y-2 text-core">
            <p>
              <span className="font-bold">Plan:</span> {policy.planName}
            </p>

            <p>
              <span className="font-bold">Excess:</span> ${policy.excess}
            </p>
          </div>
        </div>

        {/* Links */}

        <div
          className="mt-6 flex flex-wrap gap-6
        "
        >
          <a
            href={policy.pdsUrl}
            target="_blank"
            rel="noreferrer"
            className="text-core-muted underline inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
          "
          >
            <img
              src={ExternalLinkIcon}
              alt=""
              aria-hidden="true"
              className="w-4 h-4"
            />
            View PDS
          </a>

          <a
            href={policy.certificateUrl}
            target="_blank"
            rel="noreferrer"
            className="text-core-muted focus-visible:outline-2 focus-visible:outline-offset-2 inline-flex items-center gap-1 underline focus-visible:outline-primary
          "
          >
            <img
              src={ExternalLinkIcon}
              alt=""
              aria-hidden="true"
              className="w-4 h-4"
            />
            Certificate of Insurance
          </a>
        </div>
      </div>
      <div>
        {/* Actions */}

        <div className="flex flex-col gap-4 md:min-w-55">
          <Button
            variant="primary"
            onClick={() => onClaim(policy.policyNumber)}
            buttonLabel="Make a claim"
          />

          <Button
            variant="secondary"
            onClick={() => onManagePolicy(policy.policyNumber)}
            buttonLabel="Manage my policy"
          />
        </div>
      </div>
    </div>
  );
};
