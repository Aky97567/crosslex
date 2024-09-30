export type ModuleRules = {};

type ModuleWithRules<TRules extends ModuleRules | undefined = undefined> =
  TRules extends ModuleRules ? { rules?: TRules } : {};

export type ModuleTranslations = {};
type ModuleWithTranslations<
  TTranslations extends ModuleTranslations | undefined = undefined,
> = TTranslations extends ModuleTranslations
  ? { translations?: TTranslations }
  : {};

export type Module<
  TModuleName extends string,
  TModule,
  TRules extends ModuleRules | undefined = undefined,
  TTranslations extends ModuleTranslations | undefined = undefined,
> = {
  moduleType: TModuleName;
} & TModule &
  ModuleWithRules<TRules> &
  ModuleWithTranslations<TTranslations>;

export type SubModule<TModule> = {
  name: string;
  position: number;
  module: TModule;
};

export type SubModules<TModule> = Array<SubModule<TModule>>;

export type ModuleParent<
  TModuleName extends string,
  TModule extends Module<TModuleName, Record<string, unknown>>,
> = {
  [key in TModuleName]: TModule;
};

export type OptionalModuleParent<
  TModuleName extends string,
  TModule extends Module<TModuleName, Record<string, unknown>>,
> = {
  [key in TModuleName]?: TModule;
};
