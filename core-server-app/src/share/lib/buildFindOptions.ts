// src/utils/query-options.util.ts
import { FindManyOptions } from 'typeorm';

export function buildFindOptions<T>(query: any): FindManyOptions<T> {
  const options: FindManyOptions<T> = {};

  const { skip, take, relations, select, withDeleted, ...where } = query;

  if (Object.keys(where).length > 0) {
    options.where = where;
  }

  if (skip !== undefined) {
    const parsedSkip = parseInt(skip, 10);
    if (!isNaN(parsedSkip)) {
      options.skip = parsedSkip;
    }
  }

  if (take !== undefined) {
    const parsedTake = parseInt(take, 10);
    if (!isNaN(parsedTake)) {
      options.take = parsedTake;
    }
  }

  if (relations !== undefined) {
    if (typeof relations === 'string') {
      options.relations = relations.split(',').map((r: string) => r.trim());
    } else if (Array.isArray(relations)) {
      options.relations = relations;
    }
  }

  if (select !== undefined) {
    if (typeof select === 'string') {
      options.select = select
        .split(',')
        .map((s: string) => s.trim()) as (keyof T)[];
    } else if (Array.isArray(select)) {
      options.select = select.map((s: string) => s.trim()) as (keyof T)[];
    }
  }

  if (withDeleted !== undefined) {
    if (typeof withDeleted === 'string') {
      options.withDeleted = withDeleted.toLowerCase() === 'true';
    } else {
      options.withDeleted = Boolean(withDeleted);
    }
  }

  return options;
}
