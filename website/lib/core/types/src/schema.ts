import { Schema } from 'jsonschema';

type IdentifiedSchema = Omit<Schema, 'id'> & { id: string };

export type { IdentifiedSchema };
