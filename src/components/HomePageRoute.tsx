import { useLazyReference, useResult } from '@isograph/react';
import { iso } from './__isograph/iso';

export default function HomePageRoute() {
  const { fragmentReference } = useLazyReference(
    iso(`entrypoint Query.HomePage`),
    {},
  );
  const HomePage = useResult(fragmentReference);
  return <HomePage />;
}
