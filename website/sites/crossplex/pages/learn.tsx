import type { GetServerSidePropsContext } from 'next';
import { CrosslexServerSideRequest } from '@whitelotus/back-runtime-crosslex';
import { Crosslex } from '@whitelotus/front-pages';

export const getServerSideProps = (nextContext: GetServerSidePropsContext) => {
  const handler = new CrosslexServerSideRequest();
  return handler.getServerSideProps(nextContext);
};

export default Crosslex.LearningPage;
