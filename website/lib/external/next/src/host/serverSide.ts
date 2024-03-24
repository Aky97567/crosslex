import { nanoid } from 'nanoid';
import { GetServerSidePropsContext } from 'next';

import { Guard } from '@whitelotus/lib-core-types';
import { HostContext } from '@whitelotus/lib-sys-runtime';

class NextServerSideHostContext implements HostContext {
  private _id: string;

  constructor(
    private ctx: GetServerSidePropsContext,
    private fixedLocale?: string,
  ) {
    this._id = nanoid();
  }

  get id() {
    return this._id;
  }

  get hostName() {
    Guard.isString(this.ctx.req.headers.host);

    return this.ctx.req.headers.host;
  }

  get locale() {
    if (this.fixedLocale) {
      return this.fixedLocale;
    }

    if (this.unlocalized) {
      return this.locales[0];
    }

    Guard.isString(this.ctx.locale);

    return this.ctx.locale;
  }

  get query() {
    return this.ctx.query;
  }

  get locales() {
    return (this.ctx.locales || []).filter(locale => locale !== 'default');
  }

  get unlocalized() {
    return this.ctx.locale === 'default';
  }
}

export { NextServerSideHostContext };
