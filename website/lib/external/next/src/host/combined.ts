import { nanoid } from 'nanoid';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { Check } from '@whitelotus/lib-core-types';
import { HostContext } from '@whitelotus/lib-sys-runtime';

type NextRequestContext = GetServerSidePropsContext | GetStaticPropsContext;

const isServerSideProps = (ctx: unknown): ctx is GetServerSidePropsContext =>
  Object.prototype.hasOwnProperty.call(ctx, `req`);

class NextHostContext implements HostContext {
  private _id: string;

  constructor(private ctx: NextRequestContext) {
    this._id = nanoid();
  }

  get id() {
    return this._id;
  }

  get hostName() {
    if (
      !isServerSideProps(this.ctx) ||
      !Check.isString(this.ctx.req.headers.host)
    ) {
      return '';
    }

    return this.ctx.req.headers.host;
  }

  get locale() {
    if (this.unlocalized) {
      return this.locales[0];
    }

    return this.ctx.locale || 'de';
  }

  get locales() {
    return (this.ctx.locales || []).filter(locale => locale !== 'default');
  }

  get query() {
    return isServerSideProps(this.ctx)
      ? this.ctx.query
      : (this.ctx.params as ParsedUrlQuery);
  }

  get unlocalized() {
    return this.locale === 'default';
  }
}

export { isServerSideProps, NextHostContext };
export type { NextRequestContext };
