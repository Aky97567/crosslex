import type { GetServerSidePropsContext } from 'next';
import { CrossplexServerSideRequest } from '@whitelotus/back-runtime-crossplex';
import { Crossplex } from '@whitelotus/front-pages';

export const getServerSideProps = (nextContext: GetServerSidePropsContext) => {
  const handler = new CrossplexServerSideRequest();
  return handler.getServerSideProps(nextContext);
};

export default Crossplex.LearningPage;
