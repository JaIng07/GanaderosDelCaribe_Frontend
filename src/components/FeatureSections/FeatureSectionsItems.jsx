
// eslint-disable-next-line react/prop-types
function FeatureSectionsItems({features = []}) {
  return (
    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
      {features.map((feature) => (
        <div key={feature.name} className="relative pl-9">
          <dt className="inline font-semibold text-gray-900">
            <feature.icon
              className="absolute left-1 top-1 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            {feature.name}
          </dt>{" "}
          <dd className="inline">{feature.description}</dd>
        </div>
      ))}
    </dl>
  );
}

export default FeatureSectionsItems;
