import { nanoid } from 'nanoid';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { HostContext } from '@whitelotus/lib-sys-runtime';
import { Guard } from '@whitelotus/lib-core-types';

class NextStaticHostContext implements HostContext {
  private _id: string;

  constructor(
    private ctx: GetStaticPropsContext,
    private fixedLocale?: string,
  ) {
    this._id = nanoid();
  }

  get id() {
    return this._id;
  }

  get hostName() {
    return '';
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

  get locales() {
    return (this.ctx.locales || []).filter(locale => locale !== 'default');
  }

  get query() {
    return this.ctx.params as ParsedUrlQuery;
  }

  get unlocalized() {
    return this.ctx.locale === 'default';
  }
}

export { NextStaticHostContext };
