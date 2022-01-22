import { Model, Relation, Query } from "@nozbe/watermelondb";
import { useEffect, useState } from "react";

type F<T, K> = K extends Query<any> ? T[]: T;

export const useDatabaseItem = <T extends Model, K extends Relation<T> | Query<T> = Relation<T>>(relation: K): F<T, K> => {
    const [field, setField] = useState<F<T, K> | null>(null);

    useEffect(() => {
        relation
            .fetch()
            // eslint-disable-next-line
            // @ts-ignore
            .then(setField)
    }, [relation]);

    return field as unknown as F<T, K>;
}