
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TitleComponent
 * 
 */
export type TitleComponent = $Result.DefaultSelection<Prisma.$TitleComponentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TitleComponents
 * const titleComponents = await prisma.titleComponent.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TitleComponents
   * const titleComponents = await prisma.titleComponent.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.titleComponent`: Exposes CRUD operations for the **TitleComponent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TitleComponents
    * const titleComponents = await prisma.titleComponent.findMany()
    * ```
    */
  get titleComponent(): Prisma.TitleComponentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TitleComponent: 'TitleComponent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "titleComponent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TitleComponent: {
        payload: Prisma.$TitleComponentPayload<ExtArgs>
        fields: Prisma.TitleComponentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TitleComponentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TitleComponentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TitleComponentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TitleComponentPayload>
          }
          findFirst: {
            args: Prisma.TitleComponentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TitleComponentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TitleComponentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TitleComponentPayload>
          }
          findMany: {
            args: Prisma.TitleComponentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TitleComponentPayload>[]
          }
          create: {
            args: Prisma.TitleComponentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TitleComponentPayload>
          }
          createMany: {
            args: Prisma.TitleComponentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TitleComponentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TitleComponentPayload>[]
          }
          delete: {
            args: Prisma.TitleComponentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TitleComponentPayload>
          }
          update: {
            args: Prisma.TitleComponentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TitleComponentPayload>
          }
          deleteMany: {
            args: Prisma.TitleComponentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TitleComponentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TitleComponentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TitleComponentPayload>[]
          }
          upsert: {
            args: Prisma.TitleComponentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TitleComponentPayload>
          }
          aggregate: {
            args: Prisma.TitleComponentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTitleComponent>
          }
          groupBy: {
            args: Prisma.TitleComponentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TitleComponentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TitleComponentCountArgs<ExtArgs>
            result: $Utils.Optional<TitleComponentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    titleComponent?: TitleComponentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model TitleComponent
   */

  export type AggregateTitleComponent = {
    _count: TitleComponentCountAggregateOutputType | null
    _avg: TitleComponentAvgAggregateOutputType | null
    _sum: TitleComponentSumAggregateOutputType | null
    _min: TitleComponentMinAggregateOutputType | null
    _max: TitleComponentMaxAggregateOutputType | null
  }

  export type TitleComponentAvgAggregateOutputType = {
    size: number | null
    weight: number | null
  }

  export type TitleComponentSumAggregateOutputType = {
    size: number | null
    weight: number | null
  }

  export type TitleComponentMinAggregateOutputType = {
    id: string | null
    text: string | null
    color: string | null
    size: number | null
    weight: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type TitleComponentMaxAggregateOutputType = {
    id: string | null
    text: string | null
    color: string | null
    size: number | null
    weight: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type TitleComponentCountAggregateOutputType = {
    id: number
    text: number
    color: number
    size: number
    weight: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type TitleComponentAvgAggregateInputType = {
    size?: true
    weight?: true
  }

  export type TitleComponentSumAggregateInputType = {
    size?: true
    weight?: true
  }

  export type TitleComponentMinAggregateInputType = {
    id?: true
    text?: true
    color?: true
    size?: true
    weight?: true
    updatedAt?: true
    createdAt?: true
  }

  export type TitleComponentMaxAggregateInputType = {
    id?: true
    text?: true
    color?: true
    size?: true
    weight?: true
    updatedAt?: true
    createdAt?: true
  }

  export type TitleComponentCountAggregateInputType = {
    id?: true
    text?: true
    color?: true
    size?: true
    weight?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type TitleComponentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TitleComponent to aggregate.
     */
    where?: TitleComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TitleComponents to fetch.
     */
    orderBy?: TitleComponentOrderByWithRelationInput | TitleComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TitleComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TitleComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TitleComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TitleComponents
    **/
    _count?: true | TitleComponentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TitleComponentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TitleComponentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TitleComponentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TitleComponentMaxAggregateInputType
  }

  export type GetTitleComponentAggregateType<T extends TitleComponentAggregateArgs> = {
        [P in keyof T & keyof AggregateTitleComponent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTitleComponent[P]>
      : GetScalarType<T[P], AggregateTitleComponent[P]>
  }




  export type TitleComponentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TitleComponentWhereInput
    orderBy?: TitleComponentOrderByWithAggregationInput | TitleComponentOrderByWithAggregationInput[]
    by: TitleComponentScalarFieldEnum[] | TitleComponentScalarFieldEnum
    having?: TitleComponentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TitleComponentCountAggregateInputType | true
    _avg?: TitleComponentAvgAggregateInputType
    _sum?: TitleComponentSumAggregateInputType
    _min?: TitleComponentMinAggregateInputType
    _max?: TitleComponentMaxAggregateInputType
  }

  export type TitleComponentGroupByOutputType = {
    id: string
    text: string
    color: string
    size: number
    weight: number
    updatedAt: Date
    createdAt: Date
    _count: TitleComponentCountAggregateOutputType | null
    _avg: TitleComponentAvgAggregateOutputType | null
    _sum: TitleComponentSumAggregateOutputType | null
    _min: TitleComponentMinAggregateOutputType | null
    _max: TitleComponentMaxAggregateOutputType | null
  }

  type GetTitleComponentGroupByPayload<T extends TitleComponentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TitleComponentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TitleComponentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TitleComponentGroupByOutputType[P]>
            : GetScalarType<T[P], TitleComponentGroupByOutputType[P]>
        }
      >
    >


  export type TitleComponentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    color?: boolean
    size?: boolean
    weight?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["titleComponent"]>

  export type TitleComponentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    color?: boolean
    size?: boolean
    weight?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["titleComponent"]>

  export type TitleComponentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    color?: boolean
    size?: boolean
    weight?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["titleComponent"]>

  export type TitleComponentSelectScalar = {
    id?: boolean
    text?: boolean
    color?: boolean
    size?: boolean
    weight?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type TitleComponentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "color" | "size" | "weight" | "updatedAt" | "createdAt", ExtArgs["result"]["titleComponent"]>

  export type $TitleComponentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TitleComponent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      color: string
      size: number
      weight: number
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["titleComponent"]>
    composites: {}
  }

  type TitleComponentGetPayload<S extends boolean | null | undefined | TitleComponentDefaultArgs> = $Result.GetResult<Prisma.$TitleComponentPayload, S>

  type TitleComponentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TitleComponentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TitleComponentCountAggregateInputType | true
    }

  export interface TitleComponentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TitleComponent'], meta: { name: 'TitleComponent' } }
    /**
     * Find zero or one TitleComponent that matches the filter.
     * @param {TitleComponentFindUniqueArgs} args - Arguments to find a TitleComponent
     * @example
     * // Get one TitleComponent
     * const titleComponent = await prisma.titleComponent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TitleComponentFindUniqueArgs>(args: SelectSubset<T, TitleComponentFindUniqueArgs<ExtArgs>>): Prisma__TitleComponentClient<$Result.GetResult<Prisma.$TitleComponentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TitleComponent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TitleComponentFindUniqueOrThrowArgs} args - Arguments to find a TitleComponent
     * @example
     * // Get one TitleComponent
     * const titleComponent = await prisma.titleComponent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TitleComponentFindUniqueOrThrowArgs>(args: SelectSubset<T, TitleComponentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TitleComponentClient<$Result.GetResult<Prisma.$TitleComponentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TitleComponent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleComponentFindFirstArgs} args - Arguments to find a TitleComponent
     * @example
     * // Get one TitleComponent
     * const titleComponent = await prisma.titleComponent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TitleComponentFindFirstArgs>(args?: SelectSubset<T, TitleComponentFindFirstArgs<ExtArgs>>): Prisma__TitleComponentClient<$Result.GetResult<Prisma.$TitleComponentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TitleComponent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleComponentFindFirstOrThrowArgs} args - Arguments to find a TitleComponent
     * @example
     * // Get one TitleComponent
     * const titleComponent = await prisma.titleComponent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TitleComponentFindFirstOrThrowArgs>(args?: SelectSubset<T, TitleComponentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TitleComponentClient<$Result.GetResult<Prisma.$TitleComponentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TitleComponents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleComponentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TitleComponents
     * const titleComponents = await prisma.titleComponent.findMany()
     * 
     * // Get first 10 TitleComponents
     * const titleComponents = await prisma.titleComponent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const titleComponentWithIdOnly = await prisma.titleComponent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TitleComponentFindManyArgs>(args?: SelectSubset<T, TitleComponentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TitleComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TitleComponent.
     * @param {TitleComponentCreateArgs} args - Arguments to create a TitleComponent.
     * @example
     * // Create one TitleComponent
     * const TitleComponent = await prisma.titleComponent.create({
     *   data: {
     *     // ... data to create a TitleComponent
     *   }
     * })
     * 
     */
    create<T extends TitleComponentCreateArgs>(args: SelectSubset<T, TitleComponentCreateArgs<ExtArgs>>): Prisma__TitleComponentClient<$Result.GetResult<Prisma.$TitleComponentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TitleComponents.
     * @param {TitleComponentCreateManyArgs} args - Arguments to create many TitleComponents.
     * @example
     * // Create many TitleComponents
     * const titleComponent = await prisma.titleComponent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TitleComponentCreateManyArgs>(args?: SelectSubset<T, TitleComponentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TitleComponents and returns the data saved in the database.
     * @param {TitleComponentCreateManyAndReturnArgs} args - Arguments to create many TitleComponents.
     * @example
     * // Create many TitleComponents
     * const titleComponent = await prisma.titleComponent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TitleComponents and only return the `id`
     * const titleComponentWithIdOnly = await prisma.titleComponent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TitleComponentCreateManyAndReturnArgs>(args?: SelectSubset<T, TitleComponentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TitleComponentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TitleComponent.
     * @param {TitleComponentDeleteArgs} args - Arguments to delete one TitleComponent.
     * @example
     * // Delete one TitleComponent
     * const TitleComponent = await prisma.titleComponent.delete({
     *   where: {
     *     // ... filter to delete one TitleComponent
     *   }
     * })
     * 
     */
    delete<T extends TitleComponentDeleteArgs>(args: SelectSubset<T, TitleComponentDeleteArgs<ExtArgs>>): Prisma__TitleComponentClient<$Result.GetResult<Prisma.$TitleComponentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TitleComponent.
     * @param {TitleComponentUpdateArgs} args - Arguments to update one TitleComponent.
     * @example
     * // Update one TitleComponent
     * const titleComponent = await prisma.titleComponent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TitleComponentUpdateArgs>(args: SelectSubset<T, TitleComponentUpdateArgs<ExtArgs>>): Prisma__TitleComponentClient<$Result.GetResult<Prisma.$TitleComponentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TitleComponents.
     * @param {TitleComponentDeleteManyArgs} args - Arguments to filter TitleComponents to delete.
     * @example
     * // Delete a few TitleComponents
     * const { count } = await prisma.titleComponent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TitleComponentDeleteManyArgs>(args?: SelectSubset<T, TitleComponentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TitleComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleComponentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TitleComponents
     * const titleComponent = await prisma.titleComponent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TitleComponentUpdateManyArgs>(args: SelectSubset<T, TitleComponentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TitleComponents and returns the data updated in the database.
     * @param {TitleComponentUpdateManyAndReturnArgs} args - Arguments to update many TitleComponents.
     * @example
     * // Update many TitleComponents
     * const titleComponent = await prisma.titleComponent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TitleComponents and only return the `id`
     * const titleComponentWithIdOnly = await prisma.titleComponent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TitleComponentUpdateManyAndReturnArgs>(args: SelectSubset<T, TitleComponentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TitleComponentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TitleComponent.
     * @param {TitleComponentUpsertArgs} args - Arguments to update or create a TitleComponent.
     * @example
     * // Update or create a TitleComponent
     * const titleComponent = await prisma.titleComponent.upsert({
     *   create: {
     *     // ... data to create a TitleComponent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TitleComponent we want to update
     *   }
     * })
     */
    upsert<T extends TitleComponentUpsertArgs>(args: SelectSubset<T, TitleComponentUpsertArgs<ExtArgs>>): Prisma__TitleComponentClient<$Result.GetResult<Prisma.$TitleComponentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TitleComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleComponentCountArgs} args - Arguments to filter TitleComponents to count.
     * @example
     * // Count the number of TitleComponents
     * const count = await prisma.titleComponent.count({
     *   where: {
     *     // ... the filter for the TitleComponents we want to count
     *   }
     * })
    **/
    count<T extends TitleComponentCountArgs>(
      args?: Subset<T, TitleComponentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TitleComponentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TitleComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleComponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TitleComponentAggregateArgs>(args: Subset<T, TitleComponentAggregateArgs>): Prisma.PrismaPromise<GetTitleComponentAggregateType<T>>

    /**
     * Group by TitleComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleComponentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TitleComponentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TitleComponentGroupByArgs['orderBy'] }
        : { orderBy?: TitleComponentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TitleComponentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTitleComponentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TitleComponent model
   */
  readonly fields: TitleComponentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TitleComponent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TitleComponentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TitleComponent model
   */
  interface TitleComponentFieldRefs {
    readonly id: FieldRef<"TitleComponent", 'String'>
    readonly text: FieldRef<"TitleComponent", 'String'>
    readonly color: FieldRef<"TitleComponent", 'String'>
    readonly size: FieldRef<"TitleComponent", 'Int'>
    readonly weight: FieldRef<"TitleComponent", 'Int'>
    readonly updatedAt: FieldRef<"TitleComponent", 'DateTime'>
    readonly createdAt: FieldRef<"TitleComponent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TitleComponent findUnique
   */
  export type TitleComponentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleComponent
     */
    select?: TitleComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TitleComponent
     */
    omit?: TitleComponentOmit<ExtArgs> | null
    /**
     * Filter, which TitleComponent to fetch.
     */
    where: TitleComponentWhereUniqueInput
  }

  /**
   * TitleComponent findUniqueOrThrow
   */
  export type TitleComponentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleComponent
     */
    select?: TitleComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TitleComponent
     */
    omit?: TitleComponentOmit<ExtArgs> | null
    /**
     * Filter, which TitleComponent to fetch.
     */
    where: TitleComponentWhereUniqueInput
  }

  /**
   * TitleComponent findFirst
   */
  export type TitleComponentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleComponent
     */
    select?: TitleComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TitleComponent
     */
    omit?: TitleComponentOmit<ExtArgs> | null
    /**
     * Filter, which TitleComponent to fetch.
     */
    where?: TitleComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TitleComponents to fetch.
     */
    orderBy?: TitleComponentOrderByWithRelationInput | TitleComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TitleComponents.
     */
    cursor?: TitleComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TitleComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TitleComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TitleComponents.
     */
    distinct?: TitleComponentScalarFieldEnum | TitleComponentScalarFieldEnum[]
  }

  /**
   * TitleComponent findFirstOrThrow
   */
  export type TitleComponentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleComponent
     */
    select?: TitleComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TitleComponent
     */
    omit?: TitleComponentOmit<ExtArgs> | null
    /**
     * Filter, which TitleComponent to fetch.
     */
    where?: TitleComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TitleComponents to fetch.
     */
    orderBy?: TitleComponentOrderByWithRelationInput | TitleComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TitleComponents.
     */
    cursor?: TitleComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TitleComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TitleComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TitleComponents.
     */
    distinct?: TitleComponentScalarFieldEnum | TitleComponentScalarFieldEnum[]
  }

  /**
   * TitleComponent findMany
   */
  export type TitleComponentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleComponent
     */
    select?: TitleComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TitleComponent
     */
    omit?: TitleComponentOmit<ExtArgs> | null
    /**
     * Filter, which TitleComponents to fetch.
     */
    where?: TitleComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TitleComponents to fetch.
     */
    orderBy?: TitleComponentOrderByWithRelationInput | TitleComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TitleComponents.
     */
    cursor?: TitleComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TitleComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TitleComponents.
     */
    skip?: number
    distinct?: TitleComponentScalarFieldEnum | TitleComponentScalarFieldEnum[]
  }

  /**
   * TitleComponent create
   */
  export type TitleComponentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleComponent
     */
    select?: TitleComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TitleComponent
     */
    omit?: TitleComponentOmit<ExtArgs> | null
    /**
     * The data needed to create a TitleComponent.
     */
    data: XOR<TitleComponentCreateInput, TitleComponentUncheckedCreateInput>
  }

  /**
   * TitleComponent createMany
   */
  export type TitleComponentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TitleComponents.
     */
    data: TitleComponentCreateManyInput | TitleComponentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TitleComponent createManyAndReturn
   */
  export type TitleComponentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleComponent
     */
    select?: TitleComponentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TitleComponent
     */
    omit?: TitleComponentOmit<ExtArgs> | null
    /**
     * The data used to create many TitleComponents.
     */
    data: TitleComponentCreateManyInput | TitleComponentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TitleComponent update
   */
  export type TitleComponentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleComponent
     */
    select?: TitleComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TitleComponent
     */
    omit?: TitleComponentOmit<ExtArgs> | null
    /**
     * The data needed to update a TitleComponent.
     */
    data: XOR<TitleComponentUpdateInput, TitleComponentUncheckedUpdateInput>
    /**
     * Choose, which TitleComponent to update.
     */
    where: TitleComponentWhereUniqueInput
  }

  /**
   * TitleComponent updateMany
   */
  export type TitleComponentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TitleComponents.
     */
    data: XOR<TitleComponentUpdateManyMutationInput, TitleComponentUncheckedUpdateManyInput>
    /**
     * Filter which TitleComponents to update
     */
    where?: TitleComponentWhereInput
    /**
     * Limit how many TitleComponents to update.
     */
    limit?: number
  }

  /**
   * TitleComponent updateManyAndReturn
   */
  export type TitleComponentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleComponent
     */
    select?: TitleComponentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TitleComponent
     */
    omit?: TitleComponentOmit<ExtArgs> | null
    /**
     * The data used to update TitleComponents.
     */
    data: XOR<TitleComponentUpdateManyMutationInput, TitleComponentUncheckedUpdateManyInput>
    /**
     * Filter which TitleComponents to update
     */
    where?: TitleComponentWhereInput
    /**
     * Limit how many TitleComponents to update.
     */
    limit?: number
  }

  /**
   * TitleComponent upsert
   */
  export type TitleComponentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleComponent
     */
    select?: TitleComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TitleComponent
     */
    omit?: TitleComponentOmit<ExtArgs> | null
    /**
     * The filter to search for the TitleComponent to update in case it exists.
     */
    where: TitleComponentWhereUniqueInput
    /**
     * In case the TitleComponent found by the `where` argument doesn't exist, create a new TitleComponent with this data.
     */
    create: XOR<TitleComponentCreateInput, TitleComponentUncheckedCreateInput>
    /**
     * In case the TitleComponent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TitleComponentUpdateInput, TitleComponentUncheckedUpdateInput>
  }

  /**
   * TitleComponent delete
   */
  export type TitleComponentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleComponent
     */
    select?: TitleComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TitleComponent
     */
    omit?: TitleComponentOmit<ExtArgs> | null
    /**
     * Filter which TitleComponent to delete.
     */
    where: TitleComponentWhereUniqueInput
  }

  /**
   * TitleComponent deleteMany
   */
  export type TitleComponentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TitleComponents to delete
     */
    where?: TitleComponentWhereInput
    /**
     * Limit how many TitleComponents to delete.
     */
    limit?: number
  }

  /**
   * TitleComponent without action
   */
  export type TitleComponentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleComponent
     */
    select?: TitleComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TitleComponent
     */
    omit?: TitleComponentOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TitleComponentScalarFieldEnum: {
    id: 'id',
    text: 'text',
    color: 'color',
    size: 'size',
    weight: 'weight',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type TitleComponentScalarFieldEnum = (typeof TitleComponentScalarFieldEnum)[keyof typeof TitleComponentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TitleComponentWhereInput = {
    AND?: TitleComponentWhereInput | TitleComponentWhereInput[]
    OR?: TitleComponentWhereInput[]
    NOT?: TitleComponentWhereInput | TitleComponentWhereInput[]
    id?: StringFilter<"TitleComponent"> | string
    text?: StringFilter<"TitleComponent"> | string
    color?: StringFilter<"TitleComponent"> | string
    size?: IntFilter<"TitleComponent"> | number
    weight?: IntFilter<"TitleComponent"> | number
    updatedAt?: DateTimeFilter<"TitleComponent"> | Date | string
    createdAt?: DateTimeFilter<"TitleComponent"> | Date | string
  }

  export type TitleComponentOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    color?: SortOrder
    size?: SortOrder
    weight?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TitleComponentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TitleComponentWhereInput | TitleComponentWhereInput[]
    OR?: TitleComponentWhereInput[]
    NOT?: TitleComponentWhereInput | TitleComponentWhereInput[]
    text?: StringFilter<"TitleComponent"> | string
    color?: StringFilter<"TitleComponent"> | string
    size?: IntFilter<"TitleComponent"> | number
    weight?: IntFilter<"TitleComponent"> | number
    updatedAt?: DateTimeFilter<"TitleComponent"> | Date | string
    createdAt?: DateTimeFilter<"TitleComponent"> | Date | string
  }, "id">

  export type TitleComponentOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    color?: SortOrder
    size?: SortOrder
    weight?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: TitleComponentCountOrderByAggregateInput
    _avg?: TitleComponentAvgOrderByAggregateInput
    _max?: TitleComponentMaxOrderByAggregateInput
    _min?: TitleComponentMinOrderByAggregateInput
    _sum?: TitleComponentSumOrderByAggregateInput
  }

  export type TitleComponentScalarWhereWithAggregatesInput = {
    AND?: TitleComponentScalarWhereWithAggregatesInput | TitleComponentScalarWhereWithAggregatesInput[]
    OR?: TitleComponentScalarWhereWithAggregatesInput[]
    NOT?: TitleComponentScalarWhereWithAggregatesInput | TitleComponentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TitleComponent"> | string
    text?: StringWithAggregatesFilter<"TitleComponent"> | string
    color?: StringWithAggregatesFilter<"TitleComponent"> | string
    size?: IntWithAggregatesFilter<"TitleComponent"> | number
    weight?: IntWithAggregatesFilter<"TitleComponent"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"TitleComponent"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"TitleComponent"> | Date | string
  }

  export type TitleComponentCreateInput = {
    id?: string
    text: string
    color: string
    size: number
    weight: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type TitleComponentUncheckedCreateInput = {
    id?: string
    text: string
    color: string
    size: number
    weight: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type TitleComponentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TitleComponentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TitleComponentCreateManyInput = {
    id?: string
    text: string
    color: string
    size: number
    weight: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type TitleComponentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TitleComponentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TitleComponentCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    color?: SortOrder
    size?: SortOrder
    weight?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TitleComponentAvgOrderByAggregateInput = {
    size?: SortOrder
    weight?: SortOrder
  }

  export type TitleComponentMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    color?: SortOrder
    size?: SortOrder
    weight?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TitleComponentMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    color?: SortOrder
    size?: SortOrder
    weight?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TitleComponentSumOrderByAggregateInput = {
    size?: SortOrder
    weight?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}