
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
 * Model PullupSession
 * 
 */
export type PullupSession = $Result.DefaultSelection<Prisma.$PullupSessionPayload>
/**
 * Model PushUps
 * 
 */
export type PushUps = $Result.DefaultSelection<Prisma.$PushUpsPayload>
/**
 * Model SitUps
 * 
 */
export type SitUps = $Result.DefaultSelection<Prisma.$SitUpsPayload>
/**
 * Model DailyGoal
 * 
 */
export type DailyGoal = $Result.DefaultSelection<Prisma.$DailyGoalPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PullupSessions
 * const pullupSessions = await prisma.pullupSession.findMany()
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
   * // Fetch zero or more PullupSessions
   * const pullupSessions = await prisma.pullupSession.findMany()
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
   * `prisma.pullupSession`: Exposes CRUD operations for the **PullupSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PullupSessions
    * const pullupSessions = await prisma.pullupSession.findMany()
    * ```
    */
  get pullupSession(): Prisma.PullupSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pushUps`: Exposes CRUD operations for the **PushUps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PushUps
    * const pushUps = await prisma.pushUps.findMany()
    * ```
    */
  get pushUps(): Prisma.PushUpsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sitUps`: Exposes CRUD operations for the **SitUps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SitUps
    * const sitUps = await prisma.sitUps.findMany()
    * ```
    */
  get sitUps(): Prisma.SitUpsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyGoal`: Exposes CRUD operations for the **DailyGoal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyGoals
    * const dailyGoals = await prisma.dailyGoal.findMany()
    * ```
    */
  get dailyGoal(): Prisma.DailyGoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    PullupSession: 'PullupSession',
    PushUps: 'PushUps',
    SitUps: 'SitUps',
    DailyGoal: 'DailyGoal',
    UserProfile: 'UserProfile'
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
      modelProps: "pullupSession" | "pushUps" | "sitUps" | "dailyGoal" | "userProfile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PullupSession: {
        payload: Prisma.$PullupSessionPayload<ExtArgs>
        fields: Prisma.PullupSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PullupSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullupSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PullupSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullupSessionPayload>
          }
          findFirst: {
            args: Prisma.PullupSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullupSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PullupSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullupSessionPayload>
          }
          findMany: {
            args: Prisma.PullupSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullupSessionPayload>[]
          }
          create: {
            args: Prisma.PullupSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullupSessionPayload>
          }
          createMany: {
            args: Prisma.PullupSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PullupSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullupSessionPayload>[]
          }
          delete: {
            args: Prisma.PullupSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullupSessionPayload>
          }
          update: {
            args: Prisma.PullupSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullupSessionPayload>
          }
          deleteMany: {
            args: Prisma.PullupSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PullupSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PullupSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullupSessionPayload>[]
          }
          upsert: {
            args: Prisma.PullupSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullupSessionPayload>
          }
          aggregate: {
            args: Prisma.PullupSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePullupSession>
          }
          groupBy: {
            args: Prisma.PullupSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PullupSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PullupSessionCountArgs<ExtArgs>
            result: $Utils.Optional<PullupSessionCountAggregateOutputType> | number
          }
        }
      }
      PushUps: {
        payload: Prisma.$PushUpsPayload<ExtArgs>
        fields: Prisma.PushUpsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PushUpsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushUpsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PushUpsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushUpsPayload>
          }
          findFirst: {
            args: Prisma.PushUpsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushUpsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PushUpsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushUpsPayload>
          }
          findMany: {
            args: Prisma.PushUpsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushUpsPayload>[]
          }
          create: {
            args: Prisma.PushUpsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushUpsPayload>
          }
          createMany: {
            args: Prisma.PushUpsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PushUpsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushUpsPayload>[]
          }
          delete: {
            args: Prisma.PushUpsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushUpsPayload>
          }
          update: {
            args: Prisma.PushUpsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushUpsPayload>
          }
          deleteMany: {
            args: Prisma.PushUpsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PushUpsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PushUpsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushUpsPayload>[]
          }
          upsert: {
            args: Prisma.PushUpsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushUpsPayload>
          }
          aggregate: {
            args: Prisma.PushUpsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePushUps>
          }
          groupBy: {
            args: Prisma.PushUpsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PushUpsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PushUpsCountArgs<ExtArgs>
            result: $Utils.Optional<PushUpsCountAggregateOutputType> | number
          }
        }
      }
      SitUps: {
        payload: Prisma.$SitUpsPayload<ExtArgs>
        fields: Prisma.SitUpsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SitUpsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitUpsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SitUpsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitUpsPayload>
          }
          findFirst: {
            args: Prisma.SitUpsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitUpsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SitUpsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitUpsPayload>
          }
          findMany: {
            args: Prisma.SitUpsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitUpsPayload>[]
          }
          create: {
            args: Prisma.SitUpsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitUpsPayload>
          }
          createMany: {
            args: Prisma.SitUpsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SitUpsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitUpsPayload>[]
          }
          delete: {
            args: Prisma.SitUpsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitUpsPayload>
          }
          update: {
            args: Prisma.SitUpsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitUpsPayload>
          }
          deleteMany: {
            args: Prisma.SitUpsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SitUpsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SitUpsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitUpsPayload>[]
          }
          upsert: {
            args: Prisma.SitUpsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitUpsPayload>
          }
          aggregate: {
            args: Prisma.SitUpsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSitUps>
          }
          groupBy: {
            args: Prisma.SitUpsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SitUpsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SitUpsCountArgs<ExtArgs>
            result: $Utils.Optional<SitUpsCountAggregateOutputType> | number
          }
        }
      }
      DailyGoal: {
        payload: Prisma.$DailyGoalPayload<ExtArgs>
        fields: Prisma.DailyGoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyGoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyGoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>
          }
          findFirst: {
            args: Prisma.DailyGoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyGoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>
          }
          findMany: {
            args: Prisma.DailyGoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>[]
          }
          create: {
            args: Prisma.DailyGoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>
          }
          createMany: {
            args: Prisma.DailyGoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyGoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>[]
          }
          delete: {
            args: Prisma.DailyGoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>
          }
          update: {
            args: Prisma.DailyGoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>
          }
          deleteMany: {
            args: Prisma.DailyGoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyGoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyGoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>[]
          }
          upsert: {
            args: Prisma.DailyGoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyGoalPayload>
          }
          aggregate: {
            args: Prisma.DailyGoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyGoal>
          }
          groupBy: {
            args: Prisma.DailyGoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyGoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyGoalCountArgs<ExtArgs>
            result: $Utils.Optional<DailyGoalCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
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
    pullupSession?: PullupSessionOmit
    pushUps?: PushUpsOmit
    sitUps?: SitUpsOmit
    dailyGoal?: DailyGoalOmit
    userProfile?: UserProfileOmit
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
   * Count Type UserProfileCountOutputType
   */

  export type UserProfileCountOutputType = {
    pullupSessions: number
    sitUps: number
    pushUps: number
  }

  export type UserProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pullupSessions?: boolean | UserProfileCountOutputTypeCountPullupSessionsArgs
    sitUps?: boolean | UserProfileCountOutputTypeCountSitUpsArgs
    pushUps?: boolean | UserProfileCountOutputTypeCountPushUpsArgs
  }

  // Custom InputTypes
  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileCountOutputType
     */
    select?: UserProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountPullupSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PullupSessionWhereInput
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountSitUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SitUpsWhereInput
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountPushUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushUpsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PullupSession
   */

  export type AggregatePullupSession = {
    _count: PullupSessionCountAggregateOutputType | null
    _avg: PullupSessionAvgAggregateOutputType | null
    _sum: PullupSessionSumAggregateOutputType | null
    _min: PullupSessionMinAggregateOutputType | null
    _max: PullupSessionMaxAggregateOutputType | null
  }

  export type PullupSessionAvgAggregateOutputType = {
    id: number | null
    count: number | null
  }

  export type PullupSessionSumAggregateOutputType = {
    id: number | null
    count: number | null
  }

  export type PullupSessionMinAggregateOutputType = {
    id: number | null
    count: number | null
    createdAt: Date | null
    deviceId: string | null
    userId: string | null
  }

  export type PullupSessionMaxAggregateOutputType = {
    id: number | null
    count: number | null
    createdAt: Date | null
    deviceId: string | null
    userId: string | null
  }

  export type PullupSessionCountAggregateOutputType = {
    id: number
    count: number
    createdAt: number
    deviceId: number
    userId: number
    _all: number
  }


  export type PullupSessionAvgAggregateInputType = {
    id?: true
    count?: true
  }

  export type PullupSessionSumAggregateInputType = {
    id?: true
    count?: true
  }

  export type PullupSessionMinAggregateInputType = {
    id?: true
    count?: true
    createdAt?: true
    deviceId?: true
    userId?: true
  }

  export type PullupSessionMaxAggregateInputType = {
    id?: true
    count?: true
    createdAt?: true
    deviceId?: true
    userId?: true
  }

  export type PullupSessionCountAggregateInputType = {
    id?: true
    count?: true
    createdAt?: true
    deviceId?: true
    userId?: true
    _all?: true
  }

  export type PullupSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PullupSession to aggregate.
     */
    where?: PullupSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullupSessions to fetch.
     */
    orderBy?: PullupSessionOrderByWithRelationInput | PullupSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PullupSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullupSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullupSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PullupSessions
    **/
    _count?: true | PullupSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PullupSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PullupSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PullupSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PullupSessionMaxAggregateInputType
  }

  export type GetPullupSessionAggregateType<T extends PullupSessionAggregateArgs> = {
        [P in keyof T & keyof AggregatePullupSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePullupSession[P]>
      : GetScalarType<T[P], AggregatePullupSession[P]>
  }




  export type PullupSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PullupSessionWhereInput
    orderBy?: PullupSessionOrderByWithAggregationInput | PullupSessionOrderByWithAggregationInput[]
    by: PullupSessionScalarFieldEnum[] | PullupSessionScalarFieldEnum
    having?: PullupSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PullupSessionCountAggregateInputType | true
    _avg?: PullupSessionAvgAggregateInputType
    _sum?: PullupSessionSumAggregateInputType
    _min?: PullupSessionMinAggregateInputType
    _max?: PullupSessionMaxAggregateInputType
  }

  export type PullupSessionGroupByOutputType = {
    id: number
    count: number
    createdAt: Date
    deviceId: string | null
    userId: string
    _count: PullupSessionCountAggregateOutputType | null
    _avg: PullupSessionAvgAggregateOutputType | null
    _sum: PullupSessionSumAggregateOutputType | null
    _min: PullupSessionMinAggregateOutputType | null
    _max: PullupSessionMaxAggregateOutputType | null
  }

  type GetPullupSessionGroupByPayload<T extends PullupSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PullupSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PullupSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PullupSessionGroupByOutputType[P]>
            : GetScalarType<T[P], PullupSessionGroupByOutputType[P]>
        }
      >
    >


  export type PullupSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
    createdAt?: boolean
    deviceId?: boolean
    userId?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pullupSession"]>

  export type PullupSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
    createdAt?: boolean
    deviceId?: boolean
    userId?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pullupSession"]>

  export type PullupSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
    createdAt?: boolean
    deviceId?: boolean
    userId?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pullupSession"]>

  export type PullupSessionSelectScalar = {
    id?: boolean
    count?: boolean
    createdAt?: boolean
    deviceId?: boolean
    userId?: boolean
  }

  export type PullupSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "count" | "createdAt" | "deviceId" | "userId", ExtArgs["result"]["pullupSession"]>
  export type PullupSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type PullupSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type PullupSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $PullupSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PullupSession"
    objects: {
      user: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      count: number
      createdAt: Date
      deviceId: string | null
      userId: string
    }, ExtArgs["result"]["pullupSession"]>
    composites: {}
  }

  type PullupSessionGetPayload<S extends boolean | null | undefined | PullupSessionDefaultArgs> = $Result.GetResult<Prisma.$PullupSessionPayload, S>

  type PullupSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PullupSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PullupSessionCountAggregateInputType | true
    }

  export interface PullupSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PullupSession'], meta: { name: 'PullupSession' } }
    /**
     * Find zero or one PullupSession that matches the filter.
     * @param {PullupSessionFindUniqueArgs} args - Arguments to find a PullupSession
     * @example
     * // Get one PullupSession
     * const pullupSession = await prisma.pullupSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PullupSessionFindUniqueArgs>(args: SelectSubset<T, PullupSessionFindUniqueArgs<ExtArgs>>): Prisma__PullupSessionClient<$Result.GetResult<Prisma.$PullupSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PullupSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PullupSessionFindUniqueOrThrowArgs} args - Arguments to find a PullupSession
     * @example
     * // Get one PullupSession
     * const pullupSession = await prisma.pullupSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PullupSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, PullupSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PullupSessionClient<$Result.GetResult<Prisma.$PullupSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PullupSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullupSessionFindFirstArgs} args - Arguments to find a PullupSession
     * @example
     * // Get one PullupSession
     * const pullupSession = await prisma.pullupSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PullupSessionFindFirstArgs>(args?: SelectSubset<T, PullupSessionFindFirstArgs<ExtArgs>>): Prisma__PullupSessionClient<$Result.GetResult<Prisma.$PullupSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PullupSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullupSessionFindFirstOrThrowArgs} args - Arguments to find a PullupSession
     * @example
     * // Get one PullupSession
     * const pullupSession = await prisma.pullupSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PullupSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, PullupSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PullupSessionClient<$Result.GetResult<Prisma.$PullupSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PullupSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullupSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PullupSessions
     * const pullupSessions = await prisma.pullupSession.findMany()
     * 
     * // Get first 10 PullupSessions
     * const pullupSessions = await prisma.pullupSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pullupSessionWithIdOnly = await prisma.pullupSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PullupSessionFindManyArgs>(args?: SelectSubset<T, PullupSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullupSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PullupSession.
     * @param {PullupSessionCreateArgs} args - Arguments to create a PullupSession.
     * @example
     * // Create one PullupSession
     * const PullupSession = await prisma.pullupSession.create({
     *   data: {
     *     // ... data to create a PullupSession
     *   }
     * })
     * 
     */
    create<T extends PullupSessionCreateArgs>(args: SelectSubset<T, PullupSessionCreateArgs<ExtArgs>>): Prisma__PullupSessionClient<$Result.GetResult<Prisma.$PullupSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PullupSessions.
     * @param {PullupSessionCreateManyArgs} args - Arguments to create many PullupSessions.
     * @example
     * // Create many PullupSessions
     * const pullupSession = await prisma.pullupSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PullupSessionCreateManyArgs>(args?: SelectSubset<T, PullupSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PullupSessions and returns the data saved in the database.
     * @param {PullupSessionCreateManyAndReturnArgs} args - Arguments to create many PullupSessions.
     * @example
     * // Create many PullupSessions
     * const pullupSession = await prisma.pullupSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PullupSessions and only return the `id`
     * const pullupSessionWithIdOnly = await prisma.pullupSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PullupSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, PullupSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullupSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PullupSession.
     * @param {PullupSessionDeleteArgs} args - Arguments to delete one PullupSession.
     * @example
     * // Delete one PullupSession
     * const PullupSession = await prisma.pullupSession.delete({
     *   where: {
     *     // ... filter to delete one PullupSession
     *   }
     * })
     * 
     */
    delete<T extends PullupSessionDeleteArgs>(args: SelectSubset<T, PullupSessionDeleteArgs<ExtArgs>>): Prisma__PullupSessionClient<$Result.GetResult<Prisma.$PullupSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PullupSession.
     * @param {PullupSessionUpdateArgs} args - Arguments to update one PullupSession.
     * @example
     * // Update one PullupSession
     * const pullupSession = await prisma.pullupSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PullupSessionUpdateArgs>(args: SelectSubset<T, PullupSessionUpdateArgs<ExtArgs>>): Prisma__PullupSessionClient<$Result.GetResult<Prisma.$PullupSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PullupSessions.
     * @param {PullupSessionDeleteManyArgs} args - Arguments to filter PullupSessions to delete.
     * @example
     * // Delete a few PullupSessions
     * const { count } = await prisma.pullupSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PullupSessionDeleteManyArgs>(args?: SelectSubset<T, PullupSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PullupSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullupSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PullupSessions
     * const pullupSession = await prisma.pullupSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PullupSessionUpdateManyArgs>(args: SelectSubset<T, PullupSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PullupSessions and returns the data updated in the database.
     * @param {PullupSessionUpdateManyAndReturnArgs} args - Arguments to update many PullupSessions.
     * @example
     * // Update many PullupSessions
     * const pullupSession = await prisma.pullupSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PullupSessions and only return the `id`
     * const pullupSessionWithIdOnly = await prisma.pullupSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends PullupSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, PullupSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullupSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PullupSession.
     * @param {PullupSessionUpsertArgs} args - Arguments to update or create a PullupSession.
     * @example
     * // Update or create a PullupSession
     * const pullupSession = await prisma.pullupSession.upsert({
     *   create: {
     *     // ... data to create a PullupSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PullupSession we want to update
     *   }
     * })
     */
    upsert<T extends PullupSessionUpsertArgs>(args: SelectSubset<T, PullupSessionUpsertArgs<ExtArgs>>): Prisma__PullupSessionClient<$Result.GetResult<Prisma.$PullupSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PullupSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullupSessionCountArgs} args - Arguments to filter PullupSessions to count.
     * @example
     * // Count the number of PullupSessions
     * const count = await prisma.pullupSession.count({
     *   where: {
     *     // ... the filter for the PullupSessions we want to count
     *   }
     * })
    **/
    count<T extends PullupSessionCountArgs>(
      args?: Subset<T, PullupSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PullupSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PullupSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullupSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PullupSessionAggregateArgs>(args: Subset<T, PullupSessionAggregateArgs>): Prisma.PrismaPromise<GetPullupSessionAggregateType<T>>

    /**
     * Group by PullupSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullupSessionGroupByArgs} args - Group by arguments.
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
      T extends PullupSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PullupSessionGroupByArgs['orderBy'] }
        : { orderBy?: PullupSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PullupSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPullupSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PullupSession model
   */
  readonly fields: PullupSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PullupSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PullupSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PullupSession model
   */
  interface PullupSessionFieldRefs {
    readonly id: FieldRef<"PullupSession", 'Int'>
    readonly count: FieldRef<"PullupSession", 'Int'>
    readonly createdAt: FieldRef<"PullupSession", 'DateTime'>
    readonly deviceId: FieldRef<"PullupSession", 'String'>
    readonly userId: FieldRef<"PullupSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PullupSession findUnique
   */
  export type PullupSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullupSession
     */
    select?: PullupSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullupSession
     */
    omit?: PullupSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullupSessionInclude<ExtArgs> | null
    /**
     * Filter, which PullupSession to fetch.
     */
    where: PullupSessionWhereUniqueInput
  }

  /**
   * PullupSession findUniqueOrThrow
   */
  export type PullupSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullupSession
     */
    select?: PullupSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullupSession
     */
    omit?: PullupSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullupSessionInclude<ExtArgs> | null
    /**
     * Filter, which PullupSession to fetch.
     */
    where: PullupSessionWhereUniqueInput
  }

  /**
   * PullupSession findFirst
   */
  export type PullupSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullupSession
     */
    select?: PullupSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullupSession
     */
    omit?: PullupSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullupSessionInclude<ExtArgs> | null
    /**
     * Filter, which PullupSession to fetch.
     */
    where?: PullupSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullupSessions to fetch.
     */
    orderBy?: PullupSessionOrderByWithRelationInput | PullupSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PullupSessions.
     */
    cursor?: PullupSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullupSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullupSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PullupSessions.
     */
    distinct?: PullupSessionScalarFieldEnum | PullupSessionScalarFieldEnum[]
  }

  /**
   * PullupSession findFirstOrThrow
   */
  export type PullupSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullupSession
     */
    select?: PullupSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullupSession
     */
    omit?: PullupSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullupSessionInclude<ExtArgs> | null
    /**
     * Filter, which PullupSession to fetch.
     */
    where?: PullupSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullupSessions to fetch.
     */
    orderBy?: PullupSessionOrderByWithRelationInput | PullupSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PullupSessions.
     */
    cursor?: PullupSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullupSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullupSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PullupSessions.
     */
    distinct?: PullupSessionScalarFieldEnum | PullupSessionScalarFieldEnum[]
  }

  /**
   * PullupSession findMany
   */
  export type PullupSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullupSession
     */
    select?: PullupSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullupSession
     */
    omit?: PullupSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullupSessionInclude<ExtArgs> | null
    /**
     * Filter, which PullupSessions to fetch.
     */
    where?: PullupSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullupSessions to fetch.
     */
    orderBy?: PullupSessionOrderByWithRelationInput | PullupSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PullupSessions.
     */
    cursor?: PullupSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullupSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullupSessions.
     */
    skip?: number
    distinct?: PullupSessionScalarFieldEnum | PullupSessionScalarFieldEnum[]
  }

  /**
   * PullupSession create
   */
  export type PullupSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullupSession
     */
    select?: PullupSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullupSession
     */
    omit?: PullupSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullupSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a PullupSession.
     */
    data: XOR<PullupSessionCreateInput, PullupSessionUncheckedCreateInput>
  }

  /**
   * PullupSession createMany
   */
  export type PullupSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PullupSessions.
     */
    data: PullupSessionCreateManyInput | PullupSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PullupSession createManyAndReturn
   */
  export type PullupSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullupSession
     */
    select?: PullupSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PullupSession
     */
    omit?: PullupSessionOmit<ExtArgs> | null
    /**
     * The data used to create many PullupSessions.
     */
    data: PullupSessionCreateManyInput | PullupSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullupSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PullupSession update
   */
  export type PullupSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullupSession
     */
    select?: PullupSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullupSession
     */
    omit?: PullupSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullupSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a PullupSession.
     */
    data: XOR<PullupSessionUpdateInput, PullupSessionUncheckedUpdateInput>
    /**
     * Choose, which PullupSession to update.
     */
    where: PullupSessionWhereUniqueInput
  }

  /**
   * PullupSession updateMany
   */
  export type PullupSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PullupSessions.
     */
    data: XOR<PullupSessionUpdateManyMutationInput, PullupSessionUncheckedUpdateManyInput>
    /**
     * Filter which PullupSessions to update
     */
    where?: PullupSessionWhereInput
    /**
     * Limit how many PullupSessions to update.
     */
    limit?: number
  }

  /**
   * PullupSession updateManyAndReturn
   */
  export type PullupSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullupSession
     */
    select?: PullupSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PullupSession
     */
    omit?: PullupSessionOmit<ExtArgs> | null
    /**
     * The data used to update PullupSessions.
     */
    data: XOR<PullupSessionUpdateManyMutationInput, PullupSessionUncheckedUpdateManyInput>
    /**
     * Filter which PullupSessions to update
     */
    where?: PullupSessionWhereInput
    /**
     * Limit how many PullupSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullupSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PullupSession upsert
   */
  export type PullupSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullupSession
     */
    select?: PullupSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullupSession
     */
    omit?: PullupSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullupSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the PullupSession to update in case it exists.
     */
    where: PullupSessionWhereUniqueInput
    /**
     * In case the PullupSession found by the `where` argument doesn't exist, create a new PullupSession with this data.
     */
    create: XOR<PullupSessionCreateInput, PullupSessionUncheckedCreateInput>
    /**
     * In case the PullupSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PullupSessionUpdateInput, PullupSessionUncheckedUpdateInput>
  }

  /**
   * PullupSession delete
   */
  export type PullupSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullupSession
     */
    select?: PullupSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullupSession
     */
    omit?: PullupSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullupSessionInclude<ExtArgs> | null
    /**
     * Filter which PullupSession to delete.
     */
    where: PullupSessionWhereUniqueInput
  }

  /**
   * PullupSession deleteMany
   */
  export type PullupSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PullupSessions to delete
     */
    where?: PullupSessionWhereInput
    /**
     * Limit how many PullupSessions to delete.
     */
    limit?: number
  }

  /**
   * PullupSession without action
   */
  export type PullupSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullupSession
     */
    select?: PullupSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullupSession
     */
    omit?: PullupSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullupSessionInclude<ExtArgs> | null
  }


  /**
   * Model PushUps
   */

  export type AggregatePushUps = {
    _count: PushUpsCountAggregateOutputType | null
    _avg: PushUpsAvgAggregateOutputType | null
    _sum: PushUpsSumAggregateOutputType | null
    _min: PushUpsMinAggregateOutputType | null
    _max: PushUpsMaxAggregateOutputType | null
  }

  export type PushUpsAvgAggregateOutputType = {
    id: number | null
    count: number | null
  }

  export type PushUpsSumAggregateOutputType = {
    id: number | null
    count: number | null
  }

  export type PushUpsMinAggregateOutputType = {
    id: number | null
    count: number | null
    createdAt: Date | null
    deviceId: string | null
    userId: string | null
  }

  export type PushUpsMaxAggregateOutputType = {
    id: number | null
    count: number | null
    createdAt: Date | null
    deviceId: string | null
    userId: string | null
  }

  export type PushUpsCountAggregateOutputType = {
    id: number
    count: number
    createdAt: number
    deviceId: number
    userId: number
    _all: number
  }


  export type PushUpsAvgAggregateInputType = {
    id?: true
    count?: true
  }

  export type PushUpsSumAggregateInputType = {
    id?: true
    count?: true
  }

  export type PushUpsMinAggregateInputType = {
    id?: true
    count?: true
    createdAt?: true
    deviceId?: true
    userId?: true
  }

  export type PushUpsMaxAggregateInputType = {
    id?: true
    count?: true
    createdAt?: true
    deviceId?: true
    userId?: true
  }

  export type PushUpsCountAggregateInputType = {
    id?: true
    count?: true
    createdAt?: true
    deviceId?: true
    userId?: true
    _all?: true
  }

  export type PushUpsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushUps to aggregate.
     */
    where?: PushUpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushUps to fetch.
     */
    orderBy?: PushUpsOrderByWithRelationInput | PushUpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PushUpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PushUps
    **/
    _count?: true | PushUpsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PushUpsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PushUpsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PushUpsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PushUpsMaxAggregateInputType
  }

  export type GetPushUpsAggregateType<T extends PushUpsAggregateArgs> = {
        [P in keyof T & keyof AggregatePushUps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePushUps[P]>
      : GetScalarType<T[P], AggregatePushUps[P]>
  }




  export type PushUpsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushUpsWhereInput
    orderBy?: PushUpsOrderByWithAggregationInput | PushUpsOrderByWithAggregationInput[]
    by: PushUpsScalarFieldEnum[] | PushUpsScalarFieldEnum
    having?: PushUpsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PushUpsCountAggregateInputType | true
    _avg?: PushUpsAvgAggregateInputType
    _sum?: PushUpsSumAggregateInputType
    _min?: PushUpsMinAggregateInputType
    _max?: PushUpsMaxAggregateInputType
  }

  export type PushUpsGroupByOutputType = {
    id: number
    count: number
    createdAt: Date
    deviceId: string | null
    userId: string
    _count: PushUpsCountAggregateOutputType | null
    _avg: PushUpsAvgAggregateOutputType | null
    _sum: PushUpsSumAggregateOutputType | null
    _min: PushUpsMinAggregateOutputType | null
    _max: PushUpsMaxAggregateOutputType | null
  }

  type GetPushUpsGroupByPayload<T extends PushUpsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PushUpsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PushUpsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PushUpsGroupByOutputType[P]>
            : GetScalarType<T[P], PushUpsGroupByOutputType[P]>
        }
      >
    >


  export type PushUpsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
    createdAt?: boolean
    deviceId?: boolean
    userId?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushUps"]>

  export type PushUpsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
    createdAt?: boolean
    deviceId?: boolean
    userId?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushUps"]>

  export type PushUpsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
    createdAt?: boolean
    deviceId?: boolean
    userId?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushUps"]>

  export type PushUpsSelectScalar = {
    id?: boolean
    count?: boolean
    createdAt?: boolean
    deviceId?: boolean
    userId?: boolean
  }

  export type PushUpsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "count" | "createdAt" | "deviceId" | "userId", ExtArgs["result"]["pushUps"]>
  export type PushUpsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type PushUpsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type PushUpsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $PushUpsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PushUps"
    objects: {
      user: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      count: number
      createdAt: Date
      deviceId: string | null
      userId: string
    }, ExtArgs["result"]["pushUps"]>
    composites: {}
  }

  type PushUpsGetPayload<S extends boolean | null | undefined | PushUpsDefaultArgs> = $Result.GetResult<Prisma.$PushUpsPayload, S>

  type PushUpsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PushUpsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PushUpsCountAggregateInputType | true
    }

  export interface PushUpsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PushUps'], meta: { name: 'PushUps' } }
    /**
     * Find zero or one PushUps that matches the filter.
     * @param {PushUpsFindUniqueArgs} args - Arguments to find a PushUps
     * @example
     * // Get one PushUps
     * const pushUps = await prisma.pushUps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PushUpsFindUniqueArgs>(args: SelectSubset<T, PushUpsFindUniqueArgs<ExtArgs>>): Prisma__PushUpsClient<$Result.GetResult<Prisma.$PushUpsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PushUps that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PushUpsFindUniqueOrThrowArgs} args - Arguments to find a PushUps
     * @example
     * // Get one PushUps
     * const pushUps = await prisma.pushUps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PushUpsFindUniqueOrThrowArgs>(args: SelectSubset<T, PushUpsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PushUpsClient<$Result.GetResult<Prisma.$PushUpsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PushUps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushUpsFindFirstArgs} args - Arguments to find a PushUps
     * @example
     * // Get one PushUps
     * const pushUps = await prisma.pushUps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PushUpsFindFirstArgs>(args?: SelectSubset<T, PushUpsFindFirstArgs<ExtArgs>>): Prisma__PushUpsClient<$Result.GetResult<Prisma.$PushUpsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PushUps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushUpsFindFirstOrThrowArgs} args - Arguments to find a PushUps
     * @example
     * // Get one PushUps
     * const pushUps = await prisma.pushUps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PushUpsFindFirstOrThrowArgs>(args?: SelectSubset<T, PushUpsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PushUpsClient<$Result.GetResult<Prisma.$PushUpsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PushUps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushUpsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PushUps
     * const pushUps = await prisma.pushUps.findMany()
     * 
     * // Get first 10 PushUps
     * const pushUps = await prisma.pushUps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pushUpsWithIdOnly = await prisma.pushUps.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PushUpsFindManyArgs>(args?: SelectSubset<T, PushUpsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushUpsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PushUps.
     * @param {PushUpsCreateArgs} args - Arguments to create a PushUps.
     * @example
     * // Create one PushUps
     * const PushUps = await prisma.pushUps.create({
     *   data: {
     *     // ... data to create a PushUps
     *   }
     * })
     * 
     */
    create<T extends PushUpsCreateArgs>(args: SelectSubset<T, PushUpsCreateArgs<ExtArgs>>): Prisma__PushUpsClient<$Result.GetResult<Prisma.$PushUpsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PushUps.
     * @param {PushUpsCreateManyArgs} args - Arguments to create many PushUps.
     * @example
     * // Create many PushUps
     * const pushUps = await prisma.pushUps.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PushUpsCreateManyArgs>(args?: SelectSubset<T, PushUpsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PushUps and returns the data saved in the database.
     * @param {PushUpsCreateManyAndReturnArgs} args - Arguments to create many PushUps.
     * @example
     * // Create many PushUps
     * const pushUps = await prisma.pushUps.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PushUps and only return the `id`
     * const pushUpsWithIdOnly = await prisma.pushUps.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PushUpsCreateManyAndReturnArgs>(args?: SelectSubset<T, PushUpsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushUpsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PushUps.
     * @param {PushUpsDeleteArgs} args - Arguments to delete one PushUps.
     * @example
     * // Delete one PushUps
     * const PushUps = await prisma.pushUps.delete({
     *   where: {
     *     // ... filter to delete one PushUps
     *   }
     * })
     * 
     */
    delete<T extends PushUpsDeleteArgs>(args: SelectSubset<T, PushUpsDeleteArgs<ExtArgs>>): Prisma__PushUpsClient<$Result.GetResult<Prisma.$PushUpsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PushUps.
     * @param {PushUpsUpdateArgs} args - Arguments to update one PushUps.
     * @example
     * // Update one PushUps
     * const pushUps = await prisma.pushUps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PushUpsUpdateArgs>(args: SelectSubset<T, PushUpsUpdateArgs<ExtArgs>>): Prisma__PushUpsClient<$Result.GetResult<Prisma.$PushUpsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PushUps.
     * @param {PushUpsDeleteManyArgs} args - Arguments to filter PushUps to delete.
     * @example
     * // Delete a few PushUps
     * const { count } = await prisma.pushUps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PushUpsDeleteManyArgs>(args?: SelectSubset<T, PushUpsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushUpsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PushUps
     * const pushUps = await prisma.pushUps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PushUpsUpdateManyArgs>(args: SelectSubset<T, PushUpsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushUps and returns the data updated in the database.
     * @param {PushUpsUpdateManyAndReturnArgs} args - Arguments to update many PushUps.
     * @example
     * // Update many PushUps
     * const pushUps = await prisma.pushUps.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PushUps and only return the `id`
     * const pushUpsWithIdOnly = await prisma.pushUps.updateManyAndReturn({
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
    updateManyAndReturn<T extends PushUpsUpdateManyAndReturnArgs>(args: SelectSubset<T, PushUpsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushUpsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PushUps.
     * @param {PushUpsUpsertArgs} args - Arguments to update or create a PushUps.
     * @example
     * // Update or create a PushUps
     * const pushUps = await prisma.pushUps.upsert({
     *   create: {
     *     // ... data to create a PushUps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PushUps we want to update
     *   }
     * })
     */
    upsert<T extends PushUpsUpsertArgs>(args: SelectSubset<T, PushUpsUpsertArgs<ExtArgs>>): Prisma__PushUpsClient<$Result.GetResult<Prisma.$PushUpsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PushUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushUpsCountArgs} args - Arguments to filter PushUps to count.
     * @example
     * // Count the number of PushUps
     * const count = await prisma.pushUps.count({
     *   where: {
     *     // ... the filter for the PushUps we want to count
     *   }
     * })
    **/
    count<T extends PushUpsCountArgs>(
      args?: Subset<T, PushUpsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PushUpsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PushUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushUpsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PushUpsAggregateArgs>(args: Subset<T, PushUpsAggregateArgs>): Prisma.PrismaPromise<GetPushUpsAggregateType<T>>

    /**
     * Group by PushUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushUpsGroupByArgs} args - Group by arguments.
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
      T extends PushUpsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PushUpsGroupByArgs['orderBy'] }
        : { orderBy?: PushUpsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PushUpsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPushUpsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PushUps model
   */
  readonly fields: PushUpsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PushUps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PushUpsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PushUps model
   */
  interface PushUpsFieldRefs {
    readonly id: FieldRef<"PushUps", 'Int'>
    readonly count: FieldRef<"PushUps", 'Int'>
    readonly createdAt: FieldRef<"PushUps", 'DateTime'>
    readonly deviceId: FieldRef<"PushUps", 'String'>
    readonly userId: FieldRef<"PushUps", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PushUps findUnique
   */
  export type PushUpsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushUps
     */
    select?: PushUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushUps
     */
    omit?: PushUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushUpsInclude<ExtArgs> | null
    /**
     * Filter, which PushUps to fetch.
     */
    where: PushUpsWhereUniqueInput
  }

  /**
   * PushUps findUniqueOrThrow
   */
  export type PushUpsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushUps
     */
    select?: PushUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushUps
     */
    omit?: PushUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushUpsInclude<ExtArgs> | null
    /**
     * Filter, which PushUps to fetch.
     */
    where: PushUpsWhereUniqueInput
  }

  /**
   * PushUps findFirst
   */
  export type PushUpsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushUps
     */
    select?: PushUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushUps
     */
    omit?: PushUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushUpsInclude<ExtArgs> | null
    /**
     * Filter, which PushUps to fetch.
     */
    where?: PushUpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushUps to fetch.
     */
    orderBy?: PushUpsOrderByWithRelationInput | PushUpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushUps.
     */
    cursor?: PushUpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushUps.
     */
    distinct?: PushUpsScalarFieldEnum | PushUpsScalarFieldEnum[]
  }

  /**
   * PushUps findFirstOrThrow
   */
  export type PushUpsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushUps
     */
    select?: PushUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushUps
     */
    omit?: PushUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushUpsInclude<ExtArgs> | null
    /**
     * Filter, which PushUps to fetch.
     */
    where?: PushUpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushUps to fetch.
     */
    orderBy?: PushUpsOrderByWithRelationInput | PushUpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushUps.
     */
    cursor?: PushUpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushUps.
     */
    distinct?: PushUpsScalarFieldEnum | PushUpsScalarFieldEnum[]
  }

  /**
   * PushUps findMany
   */
  export type PushUpsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushUps
     */
    select?: PushUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushUps
     */
    omit?: PushUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushUpsInclude<ExtArgs> | null
    /**
     * Filter, which PushUps to fetch.
     */
    where?: PushUpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushUps to fetch.
     */
    orderBy?: PushUpsOrderByWithRelationInput | PushUpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PushUps.
     */
    cursor?: PushUpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushUps.
     */
    skip?: number
    distinct?: PushUpsScalarFieldEnum | PushUpsScalarFieldEnum[]
  }

  /**
   * PushUps create
   */
  export type PushUpsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushUps
     */
    select?: PushUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushUps
     */
    omit?: PushUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushUpsInclude<ExtArgs> | null
    /**
     * The data needed to create a PushUps.
     */
    data: XOR<PushUpsCreateInput, PushUpsUncheckedCreateInput>
  }

  /**
   * PushUps createMany
   */
  export type PushUpsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PushUps.
     */
    data: PushUpsCreateManyInput | PushUpsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PushUps createManyAndReturn
   */
  export type PushUpsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushUps
     */
    select?: PushUpsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PushUps
     */
    omit?: PushUpsOmit<ExtArgs> | null
    /**
     * The data used to create many PushUps.
     */
    data: PushUpsCreateManyInput | PushUpsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushUpsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PushUps update
   */
  export type PushUpsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushUps
     */
    select?: PushUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushUps
     */
    omit?: PushUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushUpsInclude<ExtArgs> | null
    /**
     * The data needed to update a PushUps.
     */
    data: XOR<PushUpsUpdateInput, PushUpsUncheckedUpdateInput>
    /**
     * Choose, which PushUps to update.
     */
    where: PushUpsWhereUniqueInput
  }

  /**
   * PushUps updateMany
   */
  export type PushUpsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PushUps.
     */
    data: XOR<PushUpsUpdateManyMutationInput, PushUpsUncheckedUpdateManyInput>
    /**
     * Filter which PushUps to update
     */
    where?: PushUpsWhereInput
    /**
     * Limit how many PushUps to update.
     */
    limit?: number
  }

  /**
   * PushUps updateManyAndReturn
   */
  export type PushUpsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushUps
     */
    select?: PushUpsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PushUps
     */
    omit?: PushUpsOmit<ExtArgs> | null
    /**
     * The data used to update PushUps.
     */
    data: XOR<PushUpsUpdateManyMutationInput, PushUpsUncheckedUpdateManyInput>
    /**
     * Filter which PushUps to update
     */
    where?: PushUpsWhereInput
    /**
     * Limit how many PushUps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushUpsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PushUps upsert
   */
  export type PushUpsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushUps
     */
    select?: PushUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushUps
     */
    omit?: PushUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushUpsInclude<ExtArgs> | null
    /**
     * The filter to search for the PushUps to update in case it exists.
     */
    where: PushUpsWhereUniqueInput
    /**
     * In case the PushUps found by the `where` argument doesn't exist, create a new PushUps with this data.
     */
    create: XOR<PushUpsCreateInput, PushUpsUncheckedCreateInput>
    /**
     * In case the PushUps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PushUpsUpdateInput, PushUpsUncheckedUpdateInput>
  }

  /**
   * PushUps delete
   */
  export type PushUpsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushUps
     */
    select?: PushUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushUps
     */
    omit?: PushUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushUpsInclude<ExtArgs> | null
    /**
     * Filter which PushUps to delete.
     */
    where: PushUpsWhereUniqueInput
  }

  /**
   * PushUps deleteMany
   */
  export type PushUpsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushUps to delete
     */
    where?: PushUpsWhereInput
    /**
     * Limit how many PushUps to delete.
     */
    limit?: number
  }

  /**
   * PushUps without action
   */
  export type PushUpsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushUps
     */
    select?: PushUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushUps
     */
    omit?: PushUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushUpsInclude<ExtArgs> | null
  }


  /**
   * Model SitUps
   */

  export type AggregateSitUps = {
    _count: SitUpsCountAggregateOutputType | null
    _avg: SitUpsAvgAggregateOutputType | null
    _sum: SitUpsSumAggregateOutputType | null
    _min: SitUpsMinAggregateOutputType | null
    _max: SitUpsMaxAggregateOutputType | null
  }

  export type SitUpsAvgAggregateOutputType = {
    id: number | null
    count: number | null
  }

  export type SitUpsSumAggregateOutputType = {
    id: number | null
    count: number | null
  }

  export type SitUpsMinAggregateOutputType = {
    id: number | null
    count: number | null
    createdAt: Date | null
    deviceId: string | null
    userId: string | null
  }

  export type SitUpsMaxAggregateOutputType = {
    id: number | null
    count: number | null
    createdAt: Date | null
    deviceId: string | null
    userId: string | null
  }

  export type SitUpsCountAggregateOutputType = {
    id: number
    count: number
    createdAt: number
    deviceId: number
    userId: number
    _all: number
  }


  export type SitUpsAvgAggregateInputType = {
    id?: true
    count?: true
  }

  export type SitUpsSumAggregateInputType = {
    id?: true
    count?: true
  }

  export type SitUpsMinAggregateInputType = {
    id?: true
    count?: true
    createdAt?: true
    deviceId?: true
    userId?: true
  }

  export type SitUpsMaxAggregateInputType = {
    id?: true
    count?: true
    createdAt?: true
    deviceId?: true
    userId?: true
  }

  export type SitUpsCountAggregateInputType = {
    id?: true
    count?: true
    createdAt?: true
    deviceId?: true
    userId?: true
    _all?: true
  }

  export type SitUpsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SitUps to aggregate.
     */
    where?: SitUpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SitUps to fetch.
     */
    orderBy?: SitUpsOrderByWithRelationInput | SitUpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SitUpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SitUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SitUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SitUps
    **/
    _count?: true | SitUpsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SitUpsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SitUpsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SitUpsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SitUpsMaxAggregateInputType
  }

  export type GetSitUpsAggregateType<T extends SitUpsAggregateArgs> = {
        [P in keyof T & keyof AggregateSitUps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSitUps[P]>
      : GetScalarType<T[P], AggregateSitUps[P]>
  }




  export type SitUpsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SitUpsWhereInput
    orderBy?: SitUpsOrderByWithAggregationInput | SitUpsOrderByWithAggregationInput[]
    by: SitUpsScalarFieldEnum[] | SitUpsScalarFieldEnum
    having?: SitUpsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SitUpsCountAggregateInputType | true
    _avg?: SitUpsAvgAggregateInputType
    _sum?: SitUpsSumAggregateInputType
    _min?: SitUpsMinAggregateInputType
    _max?: SitUpsMaxAggregateInputType
  }

  export type SitUpsGroupByOutputType = {
    id: number
    count: number
    createdAt: Date
    deviceId: string | null
    userId: string
    _count: SitUpsCountAggregateOutputType | null
    _avg: SitUpsAvgAggregateOutputType | null
    _sum: SitUpsSumAggregateOutputType | null
    _min: SitUpsMinAggregateOutputType | null
    _max: SitUpsMaxAggregateOutputType | null
  }

  type GetSitUpsGroupByPayload<T extends SitUpsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SitUpsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SitUpsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SitUpsGroupByOutputType[P]>
            : GetScalarType<T[P], SitUpsGroupByOutputType[P]>
        }
      >
    >


  export type SitUpsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
    createdAt?: boolean
    deviceId?: boolean
    userId?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sitUps"]>

  export type SitUpsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
    createdAt?: boolean
    deviceId?: boolean
    userId?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sitUps"]>

  export type SitUpsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
    createdAt?: boolean
    deviceId?: boolean
    userId?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sitUps"]>

  export type SitUpsSelectScalar = {
    id?: boolean
    count?: boolean
    createdAt?: boolean
    deviceId?: boolean
    userId?: boolean
  }

  export type SitUpsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "count" | "createdAt" | "deviceId" | "userId", ExtArgs["result"]["sitUps"]>
  export type SitUpsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type SitUpsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type SitUpsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $SitUpsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SitUps"
    objects: {
      user: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      count: number
      createdAt: Date
      deviceId: string | null
      userId: string
    }, ExtArgs["result"]["sitUps"]>
    composites: {}
  }

  type SitUpsGetPayload<S extends boolean | null | undefined | SitUpsDefaultArgs> = $Result.GetResult<Prisma.$SitUpsPayload, S>

  type SitUpsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SitUpsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SitUpsCountAggregateInputType | true
    }

  export interface SitUpsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SitUps'], meta: { name: 'SitUps' } }
    /**
     * Find zero or one SitUps that matches the filter.
     * @param {SitUpsFindUniqueArgs} args - Arguments to find a SitUps
     * @example
     * // Get one SitUps
     * const sitUps = await prisma.sitUps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SitUpsFindUniqueArgs>(args: SelectSubset<T, SitUpsFindUniqueArgs<ExtArgs>>): Prisma__SitUpsClient<$Result.GetResult<Prisma.$SitUpsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SitUps that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SitUpsFindUniqueOrThrowArgs} args - Arguments to find a SitUps
     * @example
     * // Get one SitUps
     * const sitUps = await prisma.sitUps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SitUpsFindUniqueOrThrowArgs>(args: SelectSubset<T, SitUpsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SitUpsClient<$Result.GetResult<Prisma.$SitUpsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SitUps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitUpsFindFirstArgs} args - Arguments to find a SitUps
     * @example
     * // Get one SitUps
     * const sitUps = await prisma.sitUps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SitUpsFindFirstArgs>(args?: SelectSubset<T, SitUpsFindFirstArgs<ExtArgs>>): Prisma__SitUpsClient<$Result.GetResult<Prisma.$SitUpsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SitUps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitUpsFindFirstOrThrowArgs} args - Arguments to find a SitUps
     * @example
     * // Get one SitUps
     * const sitUps = await prisma.sitUps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SitUpsFindFirstOrThrowArgs>(args?: SelectSubset<T, SitUpsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SitUpsClient<$Result.GetResult<Prisma.$SitUpsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SitUps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitUpsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SitUps
     * const sitUps = await prisma.sitUps.findMany()
     * 
     * // Get first 10 SitUps
     * const sitUps = await prisma.sitUps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sitUpsWithIdOnly = await prisma.sitUps.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SitUpsFindManyArgs>(args?: SelectSubset<T, SitUpsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitUpsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SitUps.
     * @param {SitUpsCreateArgs} args - Arguments to create a SitUps.
     * @example
     * // Create one SitUps
     * const SitUps = await prisma.sitUps.create({
     *   data: {
     *     // ... data to create a SitUps
     *   }
     * })
     * 
     */
    create<T extends SitUpsCreateArgs>(args: SelectSubset<T, SitUpsCreateArgs<ExtArgs>>): Prisma__SitUpsClient<$Result.GetResult<Prisma.$SitUpsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SitUps.
     * @param {SitUpsCreateManyArgs} args - Arguments to create many SitUps.
     * @example
     * // Create many SitUps
     * const sitUps = await prisma.sitUps.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SitUpsCreateManyArgs>(args?: SelectSubset<T, SitUpsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SitUps and returns the data saved in the database.
     * @param {SitUpsCreateManyAndReturnArgs} args - Arguments to create many SitUps.
     * @example
     * // Create many SitUps
     * const sitUps = await prisma.sitUps.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SitUps and only return the `id`
     * const sitUpsWithIdOnly = await prisma.sitUps.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SitUpsCreateManyAndReturnArgs>(args?: SelectSubset<T, SitUpsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitUpsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SitUps.
     * @param {SitUpsDeleteArgs} args - Arguments to delete one SitUps.
     * @example
     * // Delete one SitUps
     * const SitUps = await prisma.sitUps.delete({
     *   where: {
     *     // ... filter to delete one SitUps
     *   }
     * })
     * 
     */
    delete<T extends SitUpsDeleteArgs>(args: SelectSubset<T, SitUpsDeleteArgs<ExtArgs>>): Prisma__SitUpsClient<$Result.GetResult<Prisma.$SitUpsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SitUps.
     * @param {SitUpsUpdateArgs} args - Arguments to update one SitUps.
     * @example
     * // Update one SitUps
     * const sitUps = await prisma.sitUps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SitUpsUpdateArgs>(args: SelectSubset<T, SitUpsUpdateArgs<ExtArgs>>): Prisma__SitUpsClient<$Result.GetResult<Prisma.$SitUpsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SitUps.
     * @param {SitUpsDeleteManyArgs} args - Arguments to filter SitUps to delete.
     * @example
     * // Delete a few SitUps
     * const { count } = await prisma.sitUps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SitUpsDeleteManyArgs>(args?: SelectSubset<T, SitUpsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SitUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitUpsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SitUps
     * const sitUps = await prisma.sitUps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SitUpsUpdateManyArgs>(args: SelectSubset<T, SitUpsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SitUps and returns the data updated in the database.
     * @param {SitUpsUpdateManyAndReturnArgs} args - Arguments to update many SitUps.
     * @example
     * // Update many SitUps
     * const sitUps = await prisma.sitUps.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SitUps and only return the `id`
     * const sitUpsWithIdOnly = await prisma.sitUps.updateManyAndReturn({
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
    updateManyAndReturn<T extends SitUpsUpdateManyAndReturnArgs>(args: SelectSubset<T, SitUpsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitUpsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SitUps.
     * @param {SitUpsUpsertArgs} args - Arguments to update or create a SitUps.
     * @example
     * // Update or create a SitUps
     * const sitUps = await prisma.sitUps.upsert({
     *   create: {
     *     // ... data to create a SitUps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SitUps we want to update
     *   }
     * })
     */
    upsert<T extends SitUpsUpsertArgs>(args: SelectSubset<T, SitUpsUpsertArgs<ExtArgs>>): Prisma__SitUpsClient<$Result.GetResult<Prisma.$SitUpsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SitUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitUpsCountArgs} args - Arguments to filter SitUps to count.
     * @example
     * // Count the number of SitUps
     * const count = await prisma.sitUps.count({
     *   where: {
     *     // ... the filter for the SitUps we want to count
     *   }
     * })
    **/
    count<T extends SitUpsCountArgs>(
      args?: Subset<T, SitUpsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SitUpsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SitUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitUpsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SitUpsAggregateArgs>(args: Subset<T, SitUpsAggregateArgs>): Prisma.PrismaPromise<GetSitUpsAggregateType<T>>

    /**
     * Group by SitUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitUpsGroupByArgs} args - Group by arguments.
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
      T extends SitUpsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SitUpsGroupByArgs['orderBy'] }
        : { orderBy?: SitUpsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SitUpsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSitUpsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SitUps model
   */
  readonly fields: SitUpsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SitUps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SitUpsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SitUps model
   */
  interface SitUpsFieldRefs {
    readonly id: FieldRef<"SitUps", 'Int'>
    readonly count: FieldRef<"SitUps", 'Int'>
    readonly createdAt: FieldRef<"SitUps", 'DateTime'>
    readonly deviceId: FieldRef<"SitUps", 'String'>
    readonly userId: FieldRef<"SitUps", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SitUps findUnique
   */
  export type SitUpsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitUps
     */
    select?: SitUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitUps
     */
    omit?: SitUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SitUpsInclude<ExtArgs> | null
    /**
     * Filter, which SitUps to fetch.
     */
    where: SitUpsWhereUniqueInput
  }

  /**
   * SitUps findUniqueOrThrow
   */
  export type SitUpsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitUps
     */
    select?: SitUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitUps
     */
    omit?: SitUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SitUpsInclude<ExtArgs> | null
    /**
     * Filter, which SitUps to fetch.
     */
    where: SitUpsWhereUniqueInput
  }

  /**
   * SitUps findFirst
   */
  export type SitUpsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitUps
     */
    select?: SitUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitUps
     */
    omit?: SitUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SitUpsInclude<ExtArgs> | null
    /**
     * Filter, which SitUps to fetch.
     */
    where?: SitUpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SitUps to fetch.
     */
    orderBy?: SitUpsOrderByWithRelationInput | SitUpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SitUps.
     */
    cursor?: SitUpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SitUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SitUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SitUps.
     */
    distinct?: SitUpsScalarFieldEnum | SitUpsScalarFieldEnum[]
  }

  /**
   * SitUps findFirstOrThrow
   */
  export type SitUpsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitUps
     */
    select?: SitUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitUps
     */
    omit?: SitUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SitUpsInclude<ExtArgs> | null
    /**
     * Filter, which SitUps to fetch.
     */
    where?: SitUpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SitUps to fetch.
     */
    orderBy?: SitUpsOrderByWithRelationInput | SitUpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SitUps.
     */
    cursor?: SitUpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SitUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SitUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SitUps.
     */
    distinct?: SitUpsScalarFieldEnum | SitUpsScalarFieldEnum[]
  }

  /**
   * SitUps findMany
   */
  export type SitUpsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitUps
     */
    select?: SitUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitUps
     */
    omit?: SitUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SitUpsInclude<ExtArgs> | null
    /**
     * Filter, which SitUps to fetch.
     */
    where?: SitUpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SitUps to fetch.
     */
    orderBy?: SitUpsOrderByWithRelationInput | SitUpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SitUps.
     */
    cursor?: SitUpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SitUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SitUps.
     */
    skip?: number
    distinct?: SitUpsScalarFieldEnum | SitUpsScalarFieldEnum[]
  }

  /**
   * SitUps create
   */
  export type SitUpsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitUps
     */
    select?: SitUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitUps
     */
    omit?: SitUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SitUpsInclude<ExtArgs> | null
    /**
     * The data needed to create a SitUps.
     */
    data: XOR<SitUpsCreateInput, SitUpsUncheckedCreateInput>
  }

  /**
   * SitUps createMany
   */
  export type SitUpsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SitUps.
     */
    data: SitUpsCreateManyInput | SitUpsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SitUps createManyAndReturn
   */
  export type SitUpsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitUps
     */
    select?: SitUpsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SitUps
     */
    omit?: SitUpsOmit<ExtArgs> | null
    /**
     * The data used to create many SitUps.
     */
    data: SitUpsCreateManyInput | SitUpsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SitUpsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SitUps update
   */
  export type SitUpsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitUps
     */
    select?: SitUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitUps
     */
    omit?: SitUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SitUpsInclude<ExtArgs> | null
    /**
     * The data needed to update a SitUps.
     */
    data: XOR<SitUpsUpdateInput, SitUpsUncheckedUpdateInput>
    /**
     * Choose, which SitUps to update.
     */
    where: SitUpsWhereUniqueInput
  }

  /**
   * SitUps updateMany
   */
  export type SitUpsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SitUps.
     */
    data: XOR<SitUpsUpdateManyMutationInput, SitUpsUncheckedUpdateManyInput>
    /**
     * Filter which SitUps to update
     */
    where?: SitUpsWhereInput
    /**
     * Limit how many SitUps to update.
     */
    limit?: number
  }

  /**
   * SitUps updateManyAndReturn
   */
  export type SitUpsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitUps
     */
    select?: SitUpsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SitUps
     */
    omit?: SitUpsOmit<ExtArgs> | null
    /**
     * The data used to update SitUps.
     */
    data: XOR<SitUpsUpdateManyMutationInput, SitUpsUncheckedUpdateManyInput>
    /**
     * Filter which SitUps to update
     */
    where?: SitUpsWhereInput
    /**
     * Limit how many SitUps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SitUpsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SitUps upsert
   */
  export type SitUpsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitUps
     */
    select?: SitUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitUps
     */
    omit?: SitUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SitUpsInclude<ExtArgs> | null
    /**
     * The filter to search for the SitUps to update in case it exists.
     */
    where: SitUpsWhereUniqueInput
    /**
     * In case the SitUps found by the `where` argument doesn't exist, create a new SitUps with this data.
     */
    create: XOR<SitUpsCreateInput, SitUpsUncheckedCreateInput>
    /**
     * In case the SitUps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SitUpsUpdateInput, SitUpsUncheckedUpdateInput>
  }

  /**
   * SitUps delete
   */
  export type SitUpsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitUps
     */
    select?: SitUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitUps
     */
    omit?: SitUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SitUpsInclude<ExtArgs> | null
    /**
     * Filter which SitUps to delete.
     */
    where: SitUpsWhereUniqueInput
  }

  /**
   * SitUps deleteMany
   */
  export type SitUpsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SitUps to delete
     */
    where?: SitUpsWhereInput
    /**
     * Limit how many SitUps to delete.
     */
    limit?: number
  }

  /**
   * SitUps without action
   */
  export type SitUpsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitUps
     */
    select?: SitUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitUps
     */
    omit?: SitUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SitUpsInclude<ExtArgs> | null
  }


  /**
   * Model DailyGoal
   */

  export type AggregateDailyGoal = {
    _count: DailyGoalCountAggregateOutputType | null
    _avg: DailyGoalAvgAggregateOutputType | null
    _sum: DailyGoalSumAggregateOutputType | null
    _min: DailyGoalMinAggregateOutputType | null
    _max: DailyGoalMaxAggregateOutputType | null
  }

  export type DailyGoalAvgAggregateOutputType = {
    id: number | null
    situpsCount: number | null
    pullupsCount: number | null
    pushupsCount: number | null
  }

  export type DailyGoalSumAggregateOutputType = {
    id: number | null
    situpsCount: number | null
    pullupsCount: number | null
    pushupsCount: number | null
  }

  export type DailyGoalMinAggregateOutputType = {
    id: number | null
    situps: boolean | null
    pullups: boolean | null
    pushups: boolean | null
    situpsCount: number | null
    pullupsCount: number | null
    pushupsCount: number | null
    userId: string | null
  }

  export type DailyGoalMaxAggregateOutputType = {
    id: number | null
    situps: boolean | null
    pullups: boolean | null
    pushups: boolean | null
    situpsCount: number | null
    pullupsCount: number | null
    pushupsCount: number | null
    userId: string | null
  }

  export type DailyGoalCountAggregateOutputType = {
    id: number
    situps: number
    pullups: number
    pushups: number
    situpsCount: number
    pullupsCount: number
    pushupsCount: number
    userId: number
    _all: number
  }


  export type DailyGoalAvgAggregateInputType = {
    id?: true
    situpsCount?: true
    pullupsCount?: true
    pushupsCount?: true
  }

  export type DailyGoalSumAggregateInputType = {
    id?: true
    situpsCount?: true
    pullupsCount?: true
    pushupsCount?: true
  }

  export type DailyGoalMinAggregateInputType = {
    id?: true
    situps?: true
    pullups?: true
    pushups?: true
    situpsCount?: true
    pullupsCount?: true
    pushupsCount?: true
    userId?: true
  }

  export type DailyGoalMaxAggregateInputType = {
    id?: true
    situps?: true
    pullups?: true
    pushups?: true
    situpsCount?: true
    pullupsCount?: true
    pushupsCount?: true
    userId?: true
  }

  export type DailyGoalCountAggregateInputType = {
    id?: true
    situps?: true
    pullups?: true
    pushups?: true
    situpsCount?: true
    pullupsCount?: true
    pushupsCount?: true
    userId?: true
    _all?: true
  }

  export type DailyGoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyGoal to aggregate.
     */
    where?: DailyGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyGoals to fetch.
     */
    orderBy?: DailyGoalOrderByWithRelationInput | DailyGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyGoals
    **/
    _count?: true | DailyGoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyGoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyGoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyGoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyGoalMaxAggregateInputType
  }

  export type GetDailyGoalAggregateType<T extends DailyGoalAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyGoal[P]>
      : GetScalarType<T[P], AggregateDailyGoal[P]>
  }




  export type DailyGoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyGoalWhereInput
    orderBy?: DailyGoalOrderByWithAggregationInput | DailyGoalOrderByWithAggregationInput[]
    by: DailyGoalScalarFieldEnum[] | DailyGoalScalarFieldEnum
    having?: DailyGoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyGoalCountAggregateInputType | true
    _avg?: DailyGoalAvgAggregateInputType
    _sum?: DailyGoalSumAggregateInputType
    _min?: DailyGoalMinAggregateInputType
    _max?: DailyGoalMaxAggregateInputType
  }

  export type DailyGoalGroupByOutputType = {
    id: number
    situps: boolean
    pullups: boolean
    pushups: boolean
    situpsCount: number
    pullupsCount: number
    pushupsCount: number
    userId: string
    _count: DailyGoalCountAggregateOutputType | null
    _avg: DailyGoalAvgAggregateOutputType | null
    _sum: DailyGoalSumAggregateOutputType | null
    _min: DailyGoalMinAggregateOutputType | null
    _max: DailyGoalMaxAggregateOutputType | null
  }

  type GetDailyGoalGroupByPayload<T extends DailyGoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyGoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyGoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyGoalGroupByOutputType[P]>
            : GetScalarType<T[P], DailyGoalGroupByOutputType[P]>
        }
      >
    >


  export type DailyGoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    situps?: boolean
    pullups?: boolean
    pushups?: boolean
    situpsCount?: boolean
    pullupsCount?: boolean
    pushupsCount?: boolean
    userId?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyGoal"]>

  export type DailyGoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    situps?: boolean
    pullups?: boolean
    pushups?: boolean
    situpsCount?: boolean
    pullupsCount?: boolean
    pushupsCount?: boolean
    userId?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyGoal"]>

  export type DailyGoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    situps?: boolean
    pullups?: boolean
    pushups?: boolean
    situpsCount?: boolean
    pullupsCount?: boolean
    pushupsCount?: boolean
    userId?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyGoal"]>

  export type DailyGoalSelectScalar = {
    id?: boolean
    situps?: boolean
    pullups?: boolean
    pushups?: boolean
    situpsCount?: boolean
    pullupsCount?: boolean
    pushupsCount?: boolean
    userId?: boolean
  }

  export type DailyGoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "situps" | "pullups" | "pushups" | "situpsCount" | "pullupsCount" | "pushupsCount" | "userId", ExtArgs["result"]["dailyGoal"]>
  export type DailyGoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type DailyGoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type DailyGoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $DailyGoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyGoal"
    objects: {
      user: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      situps: boolean
      pullups: boolean
      pushups: boolean
      situpsCount: number
      pullupsCount: number
      pushupsCount: number
      userId: string
    }, ExtArgs["result"]["dailyGoal"]>
    composites: {}
  }

  type DailyGoalGetPayload<S extends boolean | null | undefined | DailyGoalDefaultArgs> = $Result.GetResult<Prisma.$DailyGoalPayload, S>

  type DailyGoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyGoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyGoalCountAggregateInputType | true
    }

  export interface DailyGoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyGoal'], meta: { name: 'DailyGoal' } }
    /**
     * Find zero or one DailyGoal that matches the filter.
     * @param {DailyGoalFindUniqueArgs} args - Arguments to find a DailyGoal
     * @example
     * // Get one DailyGoal
     * const dailyGoal = await prisma.dailyGoal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyGoalFindUniqueArgs>(args: SelectSubset<T, DailyGoalFindUniqueArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyGoal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyGoalFindUniqueOrThrowArgs} args - Arguments to find a DailyGoal
     * @example
     * // Get one DailyGoal
     * const dailyGoal = await prisma.dailyGoal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyGoalFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyGoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyGoal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalFindFirstArgs} args - Arguments to find a DailyGoal
     * @example
     * // Get one DailyGoal
     * const dailyGoal = await prisma.dailyGoal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyGoalFindFirstArgs>(args?: SelectSubset<T, DailyGoalFindFirstArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyGoal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalFindFirstOrThrowArgs} args - Arguments to find a DailyGoal
     * @example
     * // Get one DailyGoal
     * const dailyGoal = await prisma.dailyGoal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyGoalFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyGoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyGoals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyGoals
     * const dailyGoals = await prisma.dailyGoal.findMany()
     * 
     * // Get first 10 DailyGoals
     * const dailyGoals = await prisma.dailyGoal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyGoalWithIdOnly = await prisma.dailyGoal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyGoalFindManyArgs>(args?: SelectSubset<T, DailyGoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyGoal.
     * @param {DailyGoalCreateArgs} args - Arguments to create a DailyGoal.
     * @example
     * // Create one DailyGoal
     * const DailyGoal = await prisma.dailyGoal.create({
     *   data: {
     *     // ... data to create a DailyGoal
     *   }
     * })
     * 
     */
    create<T extends DailyGoalCreateArgs>(args: SelectSubset<T, DailyGoalCreateArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyGoals.
     * @param {DailyGoalCreateManyArgs} args - Arguments to create many DailyGoals.
     * @example
     * // Create many DailyGoals
     * const dailyGoal = await prisma.dailyGoal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyGoalCreateManyArgs>(args?: SelectSubset<T, DailyGoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyGoals and returns the data saved in the database.
     * @param {DailyGoalCreateManyAndReturnArgs} args - Arguments to create many DailyGoals.
     * @example
     * // Create many DailyGoals
     * const dailyGoal = await prisma.dailyGoal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyGoals and only return the `id`
     * const dailyGoalWithIdOnly = await prisma.dailyGoal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyGoalCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyGoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyGoal.
     * @param {DailyGoalDeleteArgs} args - Arguments to delete one DailyGoal.
     * @example
     * // Delete one DailyGoal
     * const DailyGoal = await prisma.dailyGoal.delete({
     *   where: {
     *     // ... filter to delete one DailyGoal
     *   }
     * })
     * 
     */
    delete<T extends DailyGoalDeleteArgs>(args: SelectSubset<T, DailyGoalDeleteArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyGoal.
     * @param {DailyGoalUpdateArgs} args - Arguments to update one DailyGoal.
     * @example
     * // Update one DailyGoal
     * const dailyGoal = await prisma.dailyGoal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyGoalUpdateArgs>(args: SelectSubset<T, DailyGoalUpdateArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyGoals.
     * @param {DailyGoalDeleteManyArgs} args - Arguments to filter DailyGoals to delete.
     * @example
     * // Delete a few DailyGoals
     * const { count } = await prisma.dailyGoal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyGoalDeleteManyArgs>(args?: SelectSubset<T, DailyGoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyGoals
     * const dailyGoal = await prisma.dailyGoal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyGoalUpdateManyArgs>(args: SelectSubset<T, DailyGoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyGoals and returns the data updated in the database.
     * @param {DailyGoalUpdateManyAndReturnArgs} args - Arguments to update many DailyGoals.
     * @example
     * // Update many DailyGoals
     * const dailyGoal = await prisma.dailyGoal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyGoals and only return the `id`
     * const dailyGoalWithIdOnly = await prisma.dailyGoal.updateManyAndReturn({
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
    updateManyAndReturn<T extends DailyGoalUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyGoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyGoal.
     * @param {DailyGoalUpsertArgs} args - Arguments to update or create a DailyGoal.
     * @example
     * // Update or create a DailyGoal
     * const dailyGoal = await prisma.dailyGoal.upsert({
     *   create: {
     *     // ... data to create a DailyGoal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyGoal we want to update
     *   }
     * })
     */
    upsert<T extends DailyGoalUpsertArgs>(args: SelectSubset<T, DailyGoalUpsertArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalCountArgs} args - Arguments to filter DailyGoals to count.
     * @example
     * // Count the number of DailyGoals
     * const count = await prisma.dailyGoal.count({
     *   where: {
     *     // ... the filter for the DailyGoals we want to count
     *   }
     * })
    **/
    count<T extends DailyGoalCountArgs>(
      args?: Subset<T, DailyGoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyGoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyGoalAggregateArgs>(args: Subset<T, DailyGoalAggregateArgs>): Prisma.PrismaPromise<GetDailyGoalAggregateType<T>>

    /**
     * Group by DailyGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGoalGroupByArgs} args - Group by arguments.
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
      T extends DailyGoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyGoalGroupByArgs['orderBy'] }
        : { orderBy?: DailyGoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyGoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyGoal model
   */
  readonly fields: DailyGoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyGoal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyGoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DailyGoal model
   */
  interface DailyGoalFieldRefs {
    readonly id: FieldRef<"DailyGoal", 'Int'>
    readonly situps: FieldRef<"DailyGoal", 'Boolean'>
    readonly pullups: FieldRef<"DailyGoal", 'Boolean'>
    readonly pushups: FieldRef<"DailyGoal", 'Boolean'>
    readonly situpsCount: FieldRef<"DailyGoal", 'Int'>
    readonly pullupsCount: FieldRef<"DailyGoal", 'Int'>
    readonly pushupsCount: FieldRef<"DailyGoal", 'Int'>
    readonly userId: FieldRef<"DailyGoal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DailyGoal findUnique
   */
  export type DailyGoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * Filter, which DailyGoal to fetch.
     */
    where: DailyGoalWhereUniqueInput
  }

  /**
   * DailyGoal findUniqueOrThrow
   */
  export type DailyGoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * Filter, which DailyGoal to fetch.
     */
    where: DailyGoalWhereUniqueInput
  }

  /**
   * DailyGoal findFirst
   */
  export type DailyGoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * Filter, which DailyGoal to fetch.
     */
    where?: DailyGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyGoals to fetch.
     */
    orderBy?: DailyGoalOrderByWithRelationInput | DailyGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyGoals.
     */
    cursor?: DailyGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyGoals.
     */
    distinct?: DailyGoalScalarFieldEnum | DailyGoalScalarFieldEnum[]
  }

  /**
   * DailyGoal findFirstOrThrow
   */
  export type DailyGoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * Filter, which DailyGoal to fetch.
     */
    where?: DailyGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyGoals to fetch.
     */
    orderBy?: DailyGoalOrderByWithRelationInput | DailyGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyGoals.
     */
    cursor?: DailyGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyGoals.
     */
    distinct?: DailyGoalScalarFieldEnum | DailyGoalScalarFieldEnum[]
  }

  /**
   * DailyGoal findMany
   */
  export type DailyGoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * Filter, which DailyGoals to fetch.
     */
    where?: DailyGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyGoals to fetch.
     */
    orderBy?: DailyGoalOrderByWithRelationInput | DailyGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyGoals.
     */
    cursor?: DailyGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyGoals.
     */
    skip?: number
    distinct?: DailyGoalScalarFieldEnum | DailyGoalScalarFieldEnum[]
  }

  /**
   * DailyGoal create
   */
  export type DailyGoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyGoal.
     */
    data: XOR<DailyGoalCreateInput, DailyGoalUncheckedCreateInput>
  }

  /**
   * DailyGoal createMany
   */
  export type DailyGoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyGoals.
     */
    data: DailyGoalCreateManyInput | DailyGoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyGoal createManyAndReturn
   */
  export type DailyGoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * The data used to create many DailyGoals.
     */
    data: DailyGoalCreateManyInput | DailyGoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyGoal update
   */
  export type DailyGoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyGoal.
     */
    data: XOR<DailyGoalUpdateInput, DailyGoalUncheckedUpdateInput>
    /**
     * Choose, which DailyGoal to update.
     */
    where: DailyGoalWhereUniqueInput
  }

  /**
   * DailyGoal updateMany
   */
  export type DailyGoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyGoals.
     */
    data: XOR<DailyGoalUpdateManyMutationInput, DailyGoalUncheckedUpdateManyInput>
    /**
     * Filter which DailyGoals to update
     */
    where?: DailyGoalWhereInput
    /**
     * Limit how many DailyGoals to update.
     */
    limit?: number
  }

  /**
   * DailyGoal updateManyAndReturn
   */
  export type DailyGoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * The data used to update DailyGoals.
     */
    data: XOR<DailyGoalUpdateManyMutationInput, DailyGoalUncheckedUpdateManyInput>
    /**
     * Filter which DailyGoals to update
     */
    where?: DailyGoalWhereInput
    /**
     * Limit how many DailyGoals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyGoal upsert
   */
  export type DailyGoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyGoal to update in case it exists.
     */
    where: DailyGoalWhereUniqueInput
    /**
     * In case the DailyGoal found by the `where` argument doesn't exist, create a new DailyGoal with this data.
     */
    create: XOR<DailyGoalCreateInput, DailyGoalUncheckedCreateInput>
    /**
     * In case the DailyGoal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyGoalUpdateInput, DailyGoalUncheckedUpdateInput>
  }

  /**
   * DailyGoal delete
   */
  export type DailyGoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    /**
     * Filter which DailyGoal to delete.
     */
    where: DailyGoalWhereUniqueInput
  }

  /**
   * DailyGoal deleteMany
   */
  export type DailyGoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyGoals to delete
     */
    where?: DailyGoalWhereInput
    /**
     * Limit how many DailyGoals to delete.
     */
    limit?: number
  }

  /**
   * DailyGoal without action
   */
  export type DailyGoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    email: string | null
    displayName: string | null
    createdAt: Date | null
    hasDailyGoal: boolean | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    email: string | null
    displayName: string | null
    createdAt: Date | null
    hasDailyGoal: boolean | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    email: number
    displayName: number
    createdAt: number
    hasDailyGoal: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    email?: true
    displayName?: true
    createdAt?: true
    hasDailyGoal?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    email?: true
    displayName?: true
    createdAt?: true
    hasDailyGoal?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    email?: true
    displayName?: true
    createdAt?: true
    hasDailyGoal?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    email: string | null
    displayName: string | null
    createdAt: Date
    hasDailyGoal: boolean
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    displayName?: boolean
    createdAt?: boolean
    hasDailyGoal?: boolean
    dailyGoal?: boolean | UserProfile$dailyGoalArgs<ExtArgs>
    pullupSessions?: boolean | UserProfile$pullupSessionsArgs<ExtArgs>
    sitUps?: boolean | UserProfile$sitUpsArgs<ExtArgs>
    pushUps?: boolean | UserProfile$pushUpsArgs<ExtArgs>
    _count?: boolean | UserProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    displayName?: boolean
    createdAt?: boolean
    hasDailyGoal?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    displayName?: boolean
    createdAt?: boolean
    hasDailyGoal?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    email?: boolean
    displayName?: boolean
    createdAt?: boolean
    hasDailyGoal?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "displayName" | "createdAt" | "hasDailyGoal", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyGoal?: boolean | UserProfile$dailyGoalArgs<ExtArgs>
    pullupSessions?: boolean | UserProfile$pullupSessionsArgs<ExtArgs>
    sitUps?: boolean | UserProfile$sitUpsArgs<ExtArgs>
    pushUps?: boolean | UserProfile$pushUpsArgs<ExtArgs>
    _count?: boolean | UserProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      dailyGoal: Prisma.$DailyGoalPayload<ExtArgs> | null
      pullupSessions: Prisma.$PullupSessionPayload<ExtArgs>[]
      sitUps: Prisma.$SitUpsPayload<ExtArgs>[]
      pushUps: Prisma.$PushUpsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      displayName: string | null
      createdAt: Date
      hasDailyGoal: boolean
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyGoal<T extends UserProfile$dailyGoalArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$dailyGoalArgs<ExtArgs>>): Prisma__DailyGoalClient<$Result.GetResult<Prisma.$DailyGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pullupSessions<T extends UserProfile$pullupSessionsArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$pullupSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullupSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sitUps<T extends UserProfile$sitUpsArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$sitUpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitUpsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pushUps<T extends UserProfile$pushUpsArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$pushUpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushUpsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly email: FieldRef<"UserProfile", 'String'>
    readonly displayName: FieldRef<"UserProfile", 'String'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly hasDailyGoal: FieldRef<"UserProfile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile.dailyGoal
   */
  export type UserProfile$dailyGoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyGoal
     */
    select?: DailyGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyGoal
     */
    omit?: DailyGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyGoalInclude<ExtArgs> | null
    where?: DailyGoalWhereInput
  }

  /**
   * UserProfile.pullupSessions
   */
  export type UserProfile$pullupSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullupSession
     */
    select?: PullupSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullupSession
     */
    omit?: PullupSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullupSessionInclude<ExtArgs> | null
    where?: PullupSessionWhereInput
    orderBy?: PullupSessionOrderByWithRelationInput | PullupSessionOrderByWithRelationInput[]
    cursor?: PullupSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PullupSessionScalarFieldEnum | PullupSessionScalarFieldEnum[]
  }

  /**
   * UserProfile.sitUps
   */
  export type UserProfile$sitUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitUps
     */
    select?: SitUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitUps
     */
    omit?: SitUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SitUpsInclude<ExtArgs> | null
    where?: SitUpsWhereInput
    orderBy?: SitUpsOrderByWithRelationInput | SitUpsOrderByWithRelationInput[]
    cursor?: SitUpsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SitUpsScalarFieldEnum | SitUpsScalarFieldEnum[]
  }

  /**
   * UserProfile.pushUps
   */
  export type UserProfile$pushUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushUps
     */
    select?: PushUpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushUps
     */
    omit?: PushUpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushUpsInclude<ExtArgs> | null
    where?: PushUpsWhereInput
    orderBy?: PushUpsOrderByWithRelationInput | PushUpsOrderByWithRelationInput[]
    cursor?: PushUpsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PushUpsScalarFieldEnum | PushUpsScalarFieldEnum[]
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
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


  export const PullupSessionScalarFieldEnum: {
    id: 'id',
    count: 'count',
    createdAt: 'createdAt',
    deviceId: 'deviceId',
    userId: 'userId'
  };

  export type PullupSessionScalarFieldEnum = (typeof PullupSessionScalarFieldEnum)[keyof typeof PullupSessionScalarFieldEnum]


  export const PushUpsScalarFieldEnum: {
    id: 'id',
    count: 'count',
    createdAt: 'createdAt',
    deviceId: 'deviceId',
    userId: 'userId'
  };

  export type PushUpsScalarFieldEnum = (typeof PushUpsScalarFieldEnum)[keyof typeof PushUpsScalarFieldEnum]


  export const SitUpsScalarFieldEnum: {
    id: 'id',
    count: 'count',
    createdAt: 'createdAt',
    deviceId: 'deviceId',
    userId: 'userId'
  };

  export type SitUpsScalarFieldEnum = (typeof SitUpsScalarFieldEnum)[keyof typeof SitUpsScalarFieldEnum]


  export const DailyGoalScalarFieldEnum: {
    id: 'id',
    situps: 'situps',
    pullups: 'pullups',
    pushups: 'pushups',
    situpsCount: 'situpsCount',
    pullupsCount: 'pullupsCount',
    pushupsCount: 'pushupsCount',
    userId: 'userId'
  };

  export type DailyGoalScalarFieldEnum = (typeof DailyGoalScalarFieldEnum)[keyof typeof DailyGoalScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    email: 'email',
    displayName: 'displayName',
    createdAt: 'createdAt',
    hasDailyGoal: 'hasDailyGoal'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type PullupSessionWhereInput = {
    AND?: PullupSessionWhereInput | PullupSessionWhereInput[]
    OR?: PullupSessionWhereInput[]
    NOT?: PullupSessionWhereInput | PullupSessionWhereInput[]
    id?: IntFilter<"PullupSession"> | number
    count?: IntFilter<"PullupSession"> | number
    createdAt?: DateTimeFilter<"PullupSession"> | Date | string
    deviceId?: StringNullableFilter<"PullupSession"> | string | null
    userId?: StringFilter<"PullupSession"> | string
    user?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }

  export type PullupSessionOrderByWithRelationInput = {
    id?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserProfileOrderByWithRelationInput
  }

  export type PullupSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PullupSessionWhereInput | PullupSessionWhereInput[]
    OR?: PullupSessionWhereInput[]
    NOT?: PullupSessionWhereInput | PullupSessionWhereInput[]
    count?: IntFilter<"PullupSession"> | number
    createdAt?: DateTimeFilter<"PullupSession"> | Date | string
    deviceId?: StringNullableFilter<"PullupSession"> | string | null
    userId?: StringFilter<"PullupSession"> | string
    user?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }, "id">

  export type PullupSessionOrderByWithAggregationInput = {
    id?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: PullupSessionCountOrderByAggregateInput
    _avg?: PullupSessionAvgOrderByAggregateInput
    _max?: PullupSessionMaxOrderByAggregateInput
    _min?: PullupSessionMinOrderByAggregateInput
    _sum?: PullupSessionSumOrderByAggregateInput
  }

  export type PullupSessionScalarWhereWithAggregatesInput = {
    AND?: PullupSessionScalarWhereWithAggregatesInput | PullupSessionScalarWhereWithAggregatesInput[]
    OR?: PullupSessionScalarWhereWithAggregatesInput[]
    NOT?: PullupSessionScalarWhereWithAggregatesInput | PullupSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PullupSession"> | number
    count?: IntWithAggregatesFilter<"PullupSession"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PullupSession"> | Date | string
    deviceId?: StringNullableWithAggregatesFilter<"PullupSession"> | string | null
    userId?: StringWithAggregatesFilter<"PullupSession"> | string
  }

  export type PushUpsWhereInput = {
    AND?: PushUpsWhereInput | PushUpsWhereInput[]
    OR?: PushUpsWhereInput[]
    NOT?: PushUpsWhereInput | PushUpsWhereInput[]
    id?: IntFilter<"PushUps"> | number
    count?: IntFilter<"PushUps"> | number
    createdAt?: DateTimeFilter<"PushUps"> | Date | string
    deviceId?: StringNullableFilter<"PushUps"> | string | null
    userId?: StringFilter<"PushUps"> | string
    user?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }

  export type PushUpsOrderByWithRelationInput = {
    id?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserProfileOrderByWithRelationInput
  }

  export type PushUpsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PushUpsWhereInput | PushUpsWhereInput[]
    OR?: PushUpsWhereInput[]
    NOT?: PushUpsWhereInput | PushUpsWhereInput[]
    count?: IntFilter<"PushUps"> | number
    createdAt?: DateTimeFilter<"PushUps"> | Date | string
    deviceId?: StringNullableFilter<"PushUps"> | string | null
    userId?: StringFilter<"PushUps"> | string
    user?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }, "id">

  export type PushUpsOrderByWithAggregationInput = {
    id?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: PushUpsCountOrderByAggregateInput
    _avg?: PushUpsAvgOrderByAggregateInput
    _max?: PushUpsMaxOrderByAggregateInput
    _min?: PushUpsMinOrderByAggregateInput
    _sum?: PushUpsSumOrderByAggregateInput
  }

  export type PushUpsScalarWhereWithAggregatesInput = {
    AND?: PushUpsScalarWhereWithAggregatesInput | PushUpsScalarWhereWithAggregatesInput[]
    OR?: PushUpsScalarWhereWithAggregatesInput[]
    NOT?: PushUpsScalarWhereWithAggregatesInput | PushUpsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PushUps"> | number
    count?: IntWithAggregatesFilter<"PushUps"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PushUps"> | Date | string
    deviceId?: StringNullableWithAggregatesFilter<"PushUps"> | string | null
    userId?: StringWithAggregatesFilter<"PushUps"> | string
  }

  export type SitUpsWhereInput = {
    AND?: SitUpsWhereInput | SitUpsWhereInput[]
    OR?: SitUpsWhereInput[]
    NOT?: SitUpsWhereInput | SitUpsWhereInput[]
    id?: IntFilter<"SitUps"> | number
    count?: IntFilter<"SitUps"> | number
    createdAt?: DateTimeFilter<"SitUps"> | Date | string
    deviceId?: StringNullableFilter<"SitUps"> | string | null
    userId?: StringFilter<"SitUps"> | string
    user?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }

  export type SitUpsOrderByWithRelationInput = {
    id?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserProfileOrderByWithRelationInput
  }

  export type SitUpsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SitUpsWhereInput | SitUpsWhereInput[]
    OR?: SitUpsWhereInput[]
    NOT?: SitUpsWhereInput | SitUpsWhereInput[]
    count?: IntFilter<"SitUps"> | number
    createdAt?: DateTimeFilter<"SitUps"> | Date | string
    deviceId?: StringNullableFilter<"SitUps"> | string | null
    userId?: StringFilter<"SitUps"> | string
    user?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }, "id">

  export type SitUpsOrderByWithAggregationInput = {
    id?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SitUpsCountOrderByAggregateInput
    _avg?: SitUpsAvgOrderByAggregateInput
    _max?: SitUpsMaxOrderByAggregateInput
    _min?: SitUpsMinOrderByAggregateInput
    _sum?: SitUpsSumOrderByAggregateInput
  }

  export type SitUpsScalarWhereWithAggregatesInput = {
    AND?: SitUpsScalarWhereWithAggregatesInput | SitUpsScalarWhereWithAggregatesInput[]
    OR?: SitUpsScalarWhereWithAggregatesInput[]
    NOT?: SitUpsScalarWhereWithAggregatesInput | SitUpsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SitUps"> | number
    count?: IntWithAggregatesFilter<"SitUps"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SitUps"> | Date | string
    deviceId?: StringNullableWithAggregatesFilter<"SitUps"> | string | null
    userId?: StringWithAggregatesFilter<"SitUps"> | string
  }

  export type DailyGoalWhereInput = {
    AND?: DailyGoalWhereInput | DailyGoalWhereInput[]
    OR?: DailyGoalWhereInput[]
    NOT?: DailyGoalWhereInput | DailyGoalWhereInput[]
    id?: IntFilter<"DailyGoal"> | number
    situps?: BoolFilter<"DailyGoal"> | boolean
    pullups?: BoolFilter<"DailyGoal"> | boolean
    pushups?: BoolFilter<"DailyGoal"> | boolean
    situpsCount?: IntFilter<"DailyGoal"> | number
    pullupsCount?: IntFilter<"DailyGoal"> | number
    pushupsCount?: IntFilter<"DailyGoal"> | number
    userId?: StringFilter<"DailyGoal"> | string
    user?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }

  export type DailyGoalOrderByWithRelationInput = {
    id?: SortOrder
    situps?: SortOrder
    pullups?: SortOrder
    pushups?: SortOrder
    situpsCount?: SortOrder
    pullupsCount?: SortOrder
    pushupsCount?: SortOrder
    userId?: SortOrder
    user?: UserProfileOrderByWithRelationInput
  }

  export type DailyGoalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: DailyGoalWhereInput | DailyGoalWhereInput[]
    OR?: DailyGoalWhereInput[]
    NOT?: DailyGoalWhereInput | DailyGoalWhereInput[]
    situps?: BoolFilter<"DailyGoal"> | boolean
    pullups?: BoolFilter<"DailyGoal"> | boolean
    pushups?: BoolFilter<"DailyGoal"> | boolean
    situpsCount?: IntFilter<"DailyGoal"> | number
    pullupsCount?: IntFilter<"DailyGoal"> | number
    pushupsCount?: IntFilter<"DailyGoal"> | number
    user?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }, "id" | "userId">

  export type DailyGoalOrderByWithAggregationInput = {
    id?: SortOrder
    situps?: SortOrder
    pullups?: SortOrder
    pushups?: SortOrder
    situpsCount?: SortOrder
    pullupsCount?: SortOrder
    pushupsCount?: SortOrder
    userId?: SortOrder
    _count?: DailyGoalCountOrderByAggregateInput
    _avg?: DailyGoalAvgOrderByAggregateInput
    _max?: DailyGoalMaxOrderByAggregateInput
    _min?: DailyGoalMinOrderByAggregateInput
    _sum?: DailyGoalSumOrderByAggregateInput
  }

  export type DailyGoalScalarWhereWithAggregatesInput = {
    AND?: DailyGoalScalarWhereWithAggregatesInput | DailyGoalScalarWhereWithAggregatesInput[]
    OR?: DailyGoalScalarWhereWithAggregatesInput[]
    NOT?: DailyGoalScalarWhereWithAggregatesInput | DailyGoalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyGoal"> | number
    situps?: BoolWithAggregatesFilter<"DailyGoal"> | boolean
    pullups?: BoolWithAggregatesFilter<"DailyGoal"> | boolean
    pushups?: BoolWithAggregatesFilter<"DailyGoal"> | boolean
    situpsCount?: IntWithAggregatesFilter<"DailyGoal"> | number
    pullupsCount?: IntWithAggregatesFilter<"DailyGoal"> | number
    pushupsCount?: IntWithAggregatesFilter<"DailyGoal"> | number
    userId?: StringWithAggregatesFilter<"DailyGoal"> | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    email?: StringNullableFilter<"UserProfile"> | string | null
    displayName?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    hasDailyGoal?: BoolFilter<"UserProfile"> | boolean
    dailyGoal?: XOR<DailyGoalNullableScalarRelationFilter, DailyGoalWhereInput> | null
    pullupSessions?: PullupSessionListRelationFilter
    sitUps?: SitUpsListRelationFilter
    pushUps?: PushUpsListRelationFilter
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    hasDailyGoal?: SortOrder
    dailyGoal?: DailyGoalOrderByWithRelationInput
    pullupSessions?: PullupSessionOrderByRelationAggregateInput
    sitUps?: SitUpsOrderByRelationAggregateInput
    pushUps?: PushUpsOrderByRelationAggregateInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    displayName?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    hasDailyGoal?: BoolFilter<"UserProfile"> | boolean
    dailyGoal?: XOR<DailyGoalNullableScalarRelationFilter, DailyGoalWhereInput> | null
    pullupSessions?: PullupSessionListRelationFilter
    sitUps?: SitUpsListRelationFilter
    pushUps?: PushUpsListRelationFilter
  }, "id" | "email">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    hasDailyGoal?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    email?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    displayName?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    hasDailyGoal?: BoolWithAggregatesFilter<"UserProfile"> | boolean
  }

  export type PullupSessionCreateInput = {
    count: number
    createdAt?: Date | string
    deviceId?: string | null
    user: UserProfileCreateNestedOneWithoutPullupSessionsInput
  }

  export type PullupSessionUncheckedCreateInput = {
    id?: number
    count: number
    createdAt?: Date | string
    deviceId?: string | null
    userId: string
  }

  export type PullupSessionUpdateInput = {
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserProfileUpdateOneRequiredWithoutPullupSessionsNestedInput
  }

  export type PullupSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PullupSessionCreateManyInput = {
    id?: number
    count: number
    createdAt?: Date | string
    deviceId?: string | null
    userId: string
  }

  export type PullupSessionUpdateManyMutationInput = {
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PullupSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PushUpsCreateInput = {
    count: number
    createdAt?: Date | string
    deviceId?: string | null
    user: UserProfileCreateNestedOneWithoutPushUpsInput
  }

  export type PushUpsUncheckedCreateInput = {
    id?: number
    count: number
    createdAt?: Date | string
    deviceId?: string | null
    userId: string
  }

  export type PushUpsUpdateInput = {
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserProfileUpdateOneRequiredWithoutPushUpsNestedInput
  }

  export type PushUpsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PushUpsCreateManyInput = {
    id?: number
    count: number
    createdAt?: Date | string
    deviceId?: string | null
    userId: string
  }

  export type PushUpsUpdateManyMutationInput = {
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PushUpsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SitUpsCreateInput = {
    count: number
    createdAt?: Date | string
    deviceId?: string | null
    user: UserProfileCreateNestedOneWithoutSitUpsInput
  }

  export type SitUpsUncheckedCreateInput = {
    id?: number
    count: number
    createdAt?: Date | string
    deviceId?: string | null
    userId: string
  }

  export type SitUpsUpdateInput = {
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserProfileUpdateOneRequiredWithoutSitUpsNestedInput
  }

  export type SitUpsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SitUpsCreateManyInput = {
    id?: number
    count: number
    createdAt?: Date | string
    deviceId?: string | null
    userId: string
  }

  export type SitUpsUpdateManyMutationInput = {
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SitUpsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DailyGoalCreateInput = {
    situps: boolean
    pullups: boolean
    pushups: boolean
    situpsCount: number
    pullupsCount: number
    pushupsCount: number
    user: UserProfileCreateNestedOneWithoutDailyGoalInput
  }

  export type DailyGoalUncheckedCreateInput = {
    id?: number
    situps: boolean
    pullups: boolean
    pushups: boolean
    situpsCount: number
    pullupsCount: number
    pushupsCount: number
    userId: string
  }

  export type DailyGoalUpdateInput = {
    situps?: BoolFieldUpdateOperationsInput | boolean
    pullups?: BoolFieldUpdateOperationsInput | boolean
    pushups?: BoolFieldUpdateOperationsInput | boolean
    situpsCount?: IntFieldUpdateOperationsInput | number
    pullupsCount?: IntFieldUpdateOperationsInput | number
    pushupsCount?: IntFieldUpdateOperationsInput | number
    user?: UserProfileUpdateOneRequiredWithoutDailyGoalNestedInput
  }

  export type DailyGoalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    situps?: BoolFieldUpdateOperationsInput | boolean
    pullups?: BoolFieldUpdateOperationsInput | boolean
    pushups?: BoolFieldUpdateOperationsInput | boolean
    situpsCount?: IntFieldUpdateOperationsInput | number
    pullupsCount?: IntFieldUpdateOperationsInput | number
    pushupsCount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DailyGoalCreateManyInput = {
    id?: number
    situps: boolean
    pullups: boolean
    pushups: boolean
    situpsCount: number
    pullupsCount: number
    pushupsCount: number
    userId: string
  }

  export type DailyGoalUpdateManyMutationInput = {
    situps?: BoolFieldUpdateOperationsInput | boolean
    pullups?: BoolFieldUpdateOperationsInput | boolean
    pushups?: BoolFieldUpdateOperationsInput | boolean
    situpsCount?: IntFieldUpdateOperationsInput | number
    pullupsCount?: IntFieldUpdateOperationsInput | number
    pushupsCount?: IntFieldUpdateOperationsInput | number
  }

  export type DailyGoalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    situps?: BoolFieldUpdateOperationsInput | boolean
    pullups?: BoolFieldUpdateOperationsInput | boolean
    pushups?: BoolFieldUpdateOperationsInput | boolean
    situpsCount?: IntFieldUpdateOperationsInput | number
    pullupsCount?: IntFieldUpdateOperationsInput | number
    pushupsCount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserProfileCreateInput = {
    id: string
    email?: string | null
    displayName?: string | null
    createdAt?: Date | string
    hasDailyGoal?: boolean
    dailyGoal?: DailyGoalCreateNestedOneWithoutUserInput
    pullupSessions?: PullupSessionCreateNestedManyWithoutUserInput
    sitUps?: SitUpsCreateNestedManyWithoutUserInput
    pushUps?: PushUpsCreateNestedManyWithoutUserInput
  }

  export type UserProfileUncheckedCreateInput = {
    id: string
    email?: string | null
    displayName?: string | null
    createdAt?: Date | string
    hasDailyGoal?: boolean
    dailyGoal?: DailyGoalUncheckedCreateNestedOneWithoutUserInput
    pullupSessions?: PullupSessionUncheckedCreateNestedManyWithoutUserInput
    sitUps?: SitUpsUncheckedCreateNestedManyWithoutUserInput
    pushUps?: PushUpsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasDailyGoal?: BoolFieldUpdateOperationsInput | boolean
    dailyGoal?: DailyGoalUpdateOneWithoutUserNestedInput
    pullupSessions?: PullupSessionUpdateManyWithoutUserNestedInput
    sitUps?: SitUpsUpdateManyWithoutUserNestedInput
    pushUps?: PushUpsUpdateManyWithoutUserNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasDailyGoal?: BoolFieldUpdateOperationsInput | boolean
    dailyGoal?: DailyGoalUncheckedUpdateOneWithoutUserNestedInput
    pullupSessions?: PullupSessionUncheckedUpdateManyWithoutUserNestedInput
    sitUps?: SitUpsUncheckedUpdateManyWithoutUserNestedInput
    pushUps?: PushUpsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserProfileCreateManyInput = {
    id: string
    email?: string | null
    displayName?: string | null
    createdAt?: Date | string
    hasDailyGoal?: boolean
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasDailyGoal?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasDailyGoal?: BoolFieldUpdateOperationsInput | boolean
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type UserProfileScalarRelationFilter = {
    is?: UserProfileWhereInput
    isNot?: UserProfileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PullupSessionCountOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrder
    userId?: SortOrder
  }

  export type PullupSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
  }

  export type PullupSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrder
    userId?: SortOrder
  }

  export type PullupSessionMinOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrder
    userId?: SortOrder
  }

  export type PullupSessionSumOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type PushUpsCountOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrder
    userId?: SortOrder
  }

  export type PushUpsAvgOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
  }

  export type PushUpsMaxOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrder
    userId?: SortOrder
  }

  export type PushUpsMinOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrder
    userId?: SortOrder
  }

  export type PushUpsSumOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
  }

  export type SitUpsCountOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrder
    userId?: SortOrder
  }

  export type SitUpsAvgOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
  }

  export type SitUpsMaxOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrder
    userId?: SortOrder
  }

  export type SitUpsMinOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrder
    userId?: SortOrder
  }

  export type SitUpsSumOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DailyGoalCountOrderByAggregateInput = {
    id?: SortOrder
    situps?: SortOrder
    pullups?: SortOrder
    pushups?: SortOrder
    situpsCount?: SortOrder
    pullupsCount?: SortOrder
    pushupsCount?: SortOrder
    userId?: SortOrder
  }

  export type DailyGoalAvgOrderByAggregateInput = {
    id?: SortOrder
    situpsCount?: SortOrder
    pullupsCount?: SortOrder
    pushupsCount?: SortOrder
  }

  export type DailyGoalMaxOrderByAggregateInput = {
    id?: SortOrder
    situps?: SortOrder
    pullups?: SortOrder
    pushups?: SortOrder
    situpsCount?: SortOrder
    pullupsCount?: SortOrder
    pushupsCount?: SortOrder
    userId?: SortOrder
  }

  export type DailyGoalMinOrderByAggregateInput = {
    id?: SortOrder
    situps?: SortOrder
    pullups?: SortOrder
    pushups?: SortOrder
    situpsCount?: SortOrder
    pullupsCount?: SortOrder
    pushupsCount?: SortOrder
    userId?: SortOrder
  }

  export type DailyGoalSumOrderByAggregateInput = {
    id?: SortOrder
    situpsCount?: SortOrder
    pullupsCount?: SortOrder
    pushupsCount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DailyGoalNullableScalarRelationFilter = {
    is?: DailyGoalWhereInput | null
    isNot?: DailyGoalWhereInput | null
  }

  export type PullupSessionListRelationFilter = {
    every?: PullupSessionWhereInput
    some?: PullupSessionWhereInput
    none?: PullupSessionWhereInput
  }

  export type SitUpsListRelationFilter = {
    every?: SitUpsWhereInput
    some?: SitUpsWhereInput
    none?: SitUpsWhereInput
  }

  export type PushUpsListRelationFilter = {
    every?: PushUpsWhereInput
    some?: PushUpsWhereInput
    none?: PushUpsWhereInput
  }

  export type PullupSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SitUpsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PushUpsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    hasDailyGoal?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    hasDailyGoal?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    hasDailyGoal?: SortOrder
  }

  export type UserProfileCreateNestedOneWithoutPullupSessionsInput = {
    create?: XOR<UserProfileCreateWithoutPullupSessionsInput, UserProfileUncheckedCreateWithoutPullupSessionsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutPullupSessionsInput
    connect?: UserProfileWhereUniqueInput
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserProfileUpdateOneRequiredWithoutPullupSessionsNestedInput = {
    create?: XOR<UserProfileCreateWithoutPullupSessionsInput, UserProfileUncheckedCreateWithoutPullupSessionsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutPullupSessionsInput
    upsert?: UserProfileUpsertWithoutPullupSessionsInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutPullupSessionsInput, UserProfileUpdateWithoutPullupSessionsInput>, UserProfileUncheckedUpdateWithoutPullupSessionsInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserProfileCreateNestedOneWithoutPushUpsInput = {
    create?: XOR<UserProfileCreateWithoutPushUpsInput, UserProfileUncheckedCreateWithoutPushUpsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutPushUpsInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserProfileUpdateOneRequiredWithoutPushUpsNestedInput = {
    create?: XOR<UserProfileCreateWithoutPushUpsInput, UserProfileUncheckedCreateWithoutPushUpsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutPushUpsInput
    upsert?: UserProfileUpsertWithoutPushUpsInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutPushUpsInput, UserProfileUpdateWithoutPushUpsInput>, UserProfileUncheckedUpdateWithoutPushUpsInput>
  }

  export type UserProfileCreateNestedOneWithoutSitUpsInput = {
    create?: XOR<UserProfileCreateWithoutSitUpsInput, UserProfileUncheckedCreateWithoutSitUpsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutSitUpsInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserProfileUpdateOneRequiredWithoutSitUpsNestedInput = {
    create?: XOR<UserProfileCreateWithoutSitUpsInput, UserProfileUncheckedCreateWithoutSitUpsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutSitUpsInput
    upsert?: UserProfileUpsertWithoutSitUpsInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutSitUpsInput, UserProfileUpdateWithoutSitUpsInput>, UserProfileUncheckedUpdateWithoutSitUpsInput>
  }

  export type UserProfileCreateNestedOneWithoutDailyGoalInput = {
    create?: XOR<UserProfileCreateWithoutDailyGoalInput, UserProfileUncheckedCreateWithoutDailyGoalInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutDailyGoalInput
    connect?: UserProfileWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserProfileUpdateOneRequiredWithoutDailyGoalNestedInput = {
    create?: XOR<UserProfileCreateWithoutDailyGoalInput, UserProfileUncheckedCreateWithoutDailyGoalInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutDailyGoalInput
    upsert?: UserProfileUpsertWithoutDailyGoalInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutDailyGoalInput, UserProfileUpdateWithoutDailyGoalInput>, UserProfileUncheckedUpdateWithoutDailyGoalInput>
  }

  export type DailyGoalCreateNestedOneWithoutUserInput = {
    create?: XOR<DailyGoalCreateWithoutUserInput, DailyGoalUncheckedCreateWithoutUserInput>
    connectOrCreate?: DailyGoalCreateOrConnectWithoutUserInput
    connect?: DailyGoalWhereUniqueInput
  }

  export type PullupSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<PullupSessionCreateWithoutUserInput, PullupSessionUncheckedCreateWithoutUserInput> | PullupSessionCreateWithoutUserInput[] | PullupSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PullupSessionCreateOrConnectWithoutUserInput | PullupSessionCreateOrConnectWithoutUserInput[]
    createMany?: PullupSessionCreateManyUserInputEnvelope
    connect?: PullupSessionWhereUniqueInput | PullupSessionWhereUniqueInput[]
  }

  export type SitUpsCreateNestedManyWithoutUserInput = {
    create?: XOR<SitUpsCreateWithoutUserInput, SitUpsUncheckedCreateWithoutUserInput> | SitUpsCreateWithoutUserInput[] | SitUpsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SitUpsCreateOrConnectWithoutUserInput | SitUpsCreateOrConnectWithoutUserInput[]
    createMany?: SitUpsCreateManyUserInputEnvelope
    connect?: SitUpsWhereUniqueInput | SitUpsWhereUniqueInput[]
  }

  export type PushUpsCreateNestedManyWithoutUserInput = {
    create?: XOR<PushUpsCreateWithoutUserInput, PushUpsUncheckedCreateWithoutUserInput> | PushUpsCreateWithoutUserInput[] | PushUpsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushUpsCreateOrConnectWithoutUserInput | PushUpsCreateOrConnectWithoutUserInput[]
    createMany?: PushUpsCreateManyUserInputEnvelope
    connect?: PushUpsWhereUniqueInput | PushUpsWhereUniqueInput[]
  }

  export type DailyGoalUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DailyGoalCreateWithoutUserInput, DailyGoalUncheckedCreateWithoutUserInput>
    connectOrCreate?: DailyGoalCreateOrConnectWithoutUserInput
    connect?: DailyGoalWhereUniqueInput
  }

  export type PullupSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PullupSessionCreateWithoutUserInput, PullupSessionUncheckedCreateWithoutUserInput> | PullupSessionCreateWithoutUserInput[] | PullupSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PullupSessionCreateOrConnectWithoutUserInput | PullupSessionCreateOrConnectWithoutUserInput[]
    createMany?: PullupSessionCreateManyUserInputEnvelope
    connect?: PullupSessionWhereUniqueInput | PullupSessionWhereUniqueInput[]
  }

  export type SitUpsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SitUpsCreateWithoutUserInput, SitUpsUncheckedCreateWithoutUserInput> | SitUpsCreateWithoutUserInput[] | SitUpsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SitUpsCreateOrConnectWithoutUserInput | SitUpsCreateOrConnectWithoutUserInput[]
    createMany?: SitUpsCreateManyUserInputEnvelope
    connect?: SitUpsWhereUniqueInput | SitUpsWhereUniqueInput[]
  }

  export type PushUpsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PushUpsCreateWithoutUserInput, PushUpsUncheckedCreateWithoutUserInput> | PushUpsCreateWithoutUserInput[] | PushUpsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushUpsCreateOrConnectWithoutUserInput | PushUpsCreateOrConnectWithoutUserInput[]
    createMany?: PushUpsCreateManyUserInputEnvelope
    connect?: PushUpsWhereUniqueInput | PushUpsWhereUniqueInput[]
  }

  export type DailyGoalUpdateOneWithoutUserNestedInput = {
    create?: XOR<DailyGoalCreateWithoutUserInput, DailyGoalUncheckedCreateWithoutUserInput>
    connectOrCreate?: DailyGoalCreateOrConnectWithoutUserInput
    upsert?: DailyGoalUpsertWithoutUserInput
    disconnect?: DailyGoalWhereInput | boolean
    delete?: DailyGoalWhereInput | boolean
    connect?: DailyGoalWhereUniqueInput
    update?: XOR<XOR<DailyGoalUpdateToOneWithWhereWithoutUserInput, DailyGoalUpdateWithoutUserInput>, DailyGoalUncheckedUpdateWithoutUserInput>
  }

  export type PullupSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PullupSessionCreateWithoutUserInput, PullupSessionUncheckedCreateWithoutUserInput> | PullupSessionCreateWithoutUserInput[] | PullupSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PullupSessionCreateOrConnectWithoutUserInput | PullupSessionCreateOrConnectWithoutUserInput[]
    upsert?: PullupSessionUpsertWithWhereUniqueWithoutUserInput | PullupSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PullupSessionCreateManyUserInputEnvelope
    set?: PullupSessionWhereUniqueInput | PullupSessionWhereUniqueInput[]
    disconnect?: PullupSessionWhereUniqueInput | PullupSessionWhereUniqueInput[]
    delete?: PullupSessionWhereUniqueInput | PullupSessionWhereUniqueInput[]
    connect?: PullupSessionWhereUniqueInput | PullupSessionWhereUniqueInput[]
    update?: PullupSessionUpdateWithWhereUniqueWithoutUserInput | PullupSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PullupSessionUpdateManyWithWhereWithoutUserInput | PullupSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PullupSessionScalarWhereInput | PullupSessionScalarWhereInput[]
  }

  export type SitUpsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SitUpsCreateWithoutUserInput, SitUpsUncheckedCreateWithoutUserInput> | SitUpsCreateWithoutUserInput[] | SitUpsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SitUpsCreateOrConnectWithoutUserInput | SitUpsCreateOrConnectWithoutUserInput[]
    upsert?: SitUpsUpsertWithWhereUniqueWithoutUserInput | SitUpsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SitUpsCreateManyUserInputEnvelope
    set?: SitUpsWhereUniqueInput | SitUpsWhereUniqueInput[]
    disconnect?: SitUpsWhereUniqueInput | SitUpsWhereUniqueInput[]
    delete?: SitUpsWhereUniqueInput | SitUpsWhereUniqueInput[]
    connect?: SitUpsWhereUniqueInput | SitUpsWhereUniqueInput[]
    update?: SitUpsUpdateWithWhereUniqueWithoutUserInput | SitUpsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SitUpsUpdateManyWithWhereWithoutUserInput | SitUpsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SitUpsScalarWhereInput | SitUpsScalarWhereInput[]
  }

  export type PushUpsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PushUpsCreateWithoutUserInput, PushUpsUncheckedCreateWithoutUserInput> | PushUpsCreateWithoutUserInput[] | PushUpsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushUpsCreateOrConnectWithoutUserInput | PushUpsCreateOrConnectWithoutUserInput[]
    upsert?: PushUpsUpsertWithWhereUniqueWithoutUserInput | PushUpsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PushUpsCreateManyUserInputEnvelope
    set?: PushUpsWhereUniqueInput | PushUpsWhereUniqueInput[]
    disconnect?: PushUpsWhereUniqueInput | PushUpsWhereUniqueInput[]
    delete?: PushUpsWhereUniqueInput | PushUpsWhereUniqueInput[]
    connect?: PushUpsWhereUniqueInput | PushUpsWhereUniqueInput[]
    update?: PushUpsUpdateWithWhereUniqueWithoutUserInput | PushUpsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PushUpsUpdateManyWithWhereWithoutUserInput | PushUpsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PushUpsScalarWhereInput | PushUpsScalarWhereInput[]
  }

  export type DailyGoalUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DailyGoalCreateWithoutUserInput, DailyGoalUncheckedCreateWithoutUserInput>
    connectOrCreate?: DailyGoalCreateOrConnectWithoutUserInput
    upsert?: DailyGoalUpsertWithoutUserInput
    disconnect?: DailyGoalWhereInput | boolean
    delete?: DailyGoalWhereInput | boolean
    connect?: DailyGoalWhereUniqueInput
    update?: XOR<XOR<DailyGoalUpdateToOneWithWhereWithoutUserInput, DailyGoalUpdateWithoutUserInput>, DailyGoalUncheckedUpdateWithoutUserInput>
  }

  export type PullupSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PullupSessionCreateWithoutUserInput, PullupSessionUncheckedCreateWithoutUserInput> | PullupSessionCreateWithoutUserInput[] | PullupSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PullupSessionCreateOrConnectWithoutUserInput | PullupSessionCreateOrConnectWithoutUserInput[]
    upsert?: PullupSessionUpsertWithWhereUniqueWithoutUserInput | PullupSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PullupSessionCreateManyUserInputEnvelope
    set?: PullupSessionWhereUniqueInput | PullupSessionWhereUniqueInput[]
    disconnect?: PullupSessionWhereUniqueInput | PullupSessionWhereUniqueInput[]
    delete?: PullupSessionWhereUniqueInput | PullupSessionWhereUniqueInput[]
    connect?: PullupSessionWhereUniqueInput | PullupSessionWhereUniqueInput[]
    update?: PullupSessionUpdateWithWhereUniqueWithoutUserInput | PullupSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PullupSessionUpdateManyWithWhereWithoutUserInput | PullupSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PullupSessionScalarWhereInput | PullupSessionScalarWhereInput[]
  }

  export type SitUpsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SitUpsCreateWithoutUserInput, SitUpsUncheckedCreateWithoutUserInput> | SitUpsCreateWithoutUserInput[] | SitUpsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SitUpsCreateOrConnectWithoutUserInput | SitUpsCreateOrConnectWithoutUserInput[]
    upsert?: SitUpsUpsertWithWhereUniqueWithoutUserInput | SitUpsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SitUpsCreateManyUserInputEnvelope
    set?: SitUpsWhereUniqueInput | SitUpsWhereUniqueInput[]
    disconnect?: SitUpsWhereUniqueInput | SitUpsWhereUniqueInput[]
    delete?: SitUpsWhereUniqueInput | SitUpsWhereUniqueInput[]
    connect?: SitUpsWhereUniqueInput | SitUpsWhereUniqueInput[]
    update?: SitUpsUpdateWithWhereUniqueWithoutUserInput | SitUpsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SitUpsUpdateManyWithWhereWithoutUserInput | SitUpsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SitUpsScalarWhereInput | SitUpsScalarWhereInput[]
  }

  export type PushUpsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PushUpsCreateWithoutUserInput, PushUpsUncheckedCreateWithoutUserInput> | PushUpsCreateWithoutUserInput[] | PushUpsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushUpsCreateOrConnectWithoutUserInput | PushUpsCreateOrConnectWithoutUserInput[]
    upsert?: PushUpsUpsertWithWhereUniqueWithoutUserInput | PushUpsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PushUpsCreateManyUserInputEnvelope
    set?: PushUpsWhereUniqueInput | PushUpsWhereUniqueInput[]
    disconnect?: PushUpsWhereUniqueInput | PushUpsWhereUniqueInput[]
    delete?: PushUpsWhereUniqueInput | PushUpsWhereUniqueInput[]
    connect?: PushUpsWhereUniqueInput | PushUpsWhereUniqueInput[]
    update?: PushUpsUpdateWithWhereUniqueWithoutUserInput | PushUpsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PushUpsUpdateManyWithWhereWithoutUserInput | PushUpsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PushUpsScalarWhereInput | PushUpsScalarWhereInput[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutPullupSessionsInput = {
    id: string
    email?: string | null
    displayName?: string | null
    createdAt?: Date | string
    hasDailyGoal?: boolean
    dailyGoal?: DailyGoalCreateNestedOneWithoutUserInput
    sitUps?: SitUpsCreateNestedManyWithoutUserInput
    pushUps?: PushUpsCreateNestedManyWithoutUserInput
  }

  export type UserProfileUncheckedCreateWithoutPullupSessionsInput = {
    id: string
    email?: string | null
    displayName?: string | null
    createdAt?: Date | string
    hasDailyGoal?: boolean
    dailyGoal?: DailyGoalUncheckedCreateNestedOneWithoutUserInput
    sitUps?: SitUpsUncheckedCreateNestedManyWithoutUserInput
    pushUps?: PushUpsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserProfileCreateOrConnectWithoutPullupSessionsInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutPullupSessionsInput, UserProfileUncheckedCreateWithoutPullupSessionsInput>
  }

  export type UserProfileUpsertWithoutPullupSessionsInput = {
    update: XOR<UserProfileUpdateWithoutPullupSessionsInput, UserProfileUncheckedUpdateWithoutPullupSessionsInput>
    create: XOR<UserProfileCreateWithoutPullupSessionsInput, UserProfileUncheckedCreateWithoutPullupSessionsInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutPullupSessionsInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutPullupSessionsInput, UserProfileUncheckedUpdateWithoutPullupSessionsInput>
  }

  export type UserProfileUpdateWithoutPullupSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasDailyGoal?: BoolFieldUpdateOperationsInput | boolean
    dailyGoal?: DailyGoalUpdateOneWithoutUserNestedInput
    sitUps?: SitUpsUpdateManyWithoutUserNestedInput
    pushUps?: PushUpsUpdateManyWithoutUserNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutPullupSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasDailyGoal?: BoolFieldUpdateOperationsInput | boolean
    dailyGoal?: DailyGoalUncheckedUpdateOneWithoutUserNestedInput
    sitUps?: SitUpsUncheckedUpdateManyWithoutUserNestedInput
    pushUps?: PushUpsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserProfileCreateWithoutPushUpsInput = {
    id: string
    email?: string | null
    displayName?: string | null
    createdAt?: Date | string
    hasDailyGoal?: boolean
    dailyGoal?: DailyGoalCreateNestedOneWithoutUserInput
    pullupSessions?: PullupSessionCreateNestedManyWithoutUserInput
    sitUps?: SitUpsCreateNestedManyWithoutUserInput
  }

  export type UserProfileUncheckedCreateWithoutPushUpsInput = {
    id: string
    email?: string | null
    displayName?: string | null
    createdAt?: Date | string
    hasDailyGoal?: boolean
    dailyGoal?: DailyGoalUncheckedCreateNestedOneWithoutUserInput
    pullupSessions?: PullupSessionUncheckedCreateNestedManyWithoutUserInput
    sitUps?: SitUpsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserProfileCreateOrConnectWithoutPushUpsInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutPushUpsInput, UserProfileUncheckedCreateWithoutPushUpsInput>
  }

  export type UserProfileUpsertWithoutPushUpsInput = {
    update: XOR<UserProfileUpdateWithoutPushUpsInput, UserProfileUncheckedUpdateWithoutPushUpsInput>
    create: XOR<UserProfileCreateWithoutPushUpsInput, UserProfileUncheckedCreateWithoutPushUpsInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutPushUpsInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutPushUpsInput, UserProfileUncheckedUpdateWithoutPushUpsInput>
  }

  export type UserProfileUpdateWithoutPushUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasDailyGoal?: BoolFieldUpdateOperationsInput | boolean
    dailyGoal?: DailyGoalUpdateOneWithoutUserNestedInput
    pullupSessions?: PullupSessionUpdateManyWithoutUserNestedInput
    sitUps?: SitUpsUpdateManyWithoutUserNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutPushUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasDailyGoal?: BoolFieldUpdateOperationsInput | boolean
    dailyGoal?: DailyGoalUncheckedUpdateOneWithoutUserNestedInput
    pullupSessions?: PullupSessionUncheckedUpdateManyWithoutUserNestedInput
    sitUps?: SitUpsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserProfileCreateWithoutSitUpsInput = {
    id: string
    email?: string | null
    displayName?: string | null
    createdAt?: Date | string
    hasDailyGoal?: boolean
    dailyGoal?: DailyGoalCreateNestedOneWithoutUserInput
    pullupSessions?: PullupSessionCreateNestedManyWithoutUserInput
    pushUps?: PushUpsCreateNestedManyWithoutUserInput
  }

  export type UserProfileUncheckedCreateWithoutSitUpsInput = {
    id: string
    email?: string | null
    displayName?: string | null
    createdAt?: Date | string
    hasDailyGoal?: boolean
    dailyGoal?: DailyGoalUncheckedCreateNestedOneWithoutUserInput
    pullupSessions?: PullupSessionUncheckedCreateNestedManyWithoutUserInput
    pushUps?: PushUpsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserProfileCreateOrConnectWithoutSitUpsInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutSitUpsInput, UserProfileUncheckedCreateWithoutSitUpsInput>
  }

  export type UserProfileUpsertWithoutSitUpsInput = {
    update: XOR<UserProfileUpdateWithoutSitUpsInput, UserProfileUncheckedUpdateWithoutSitUpsInput>
    create: XOR<UserProfileCreateWithoutSitUpsInput, UserProfileUncheckedCreateWithoutSitUpsInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutSitUpsInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutSitUpsInput, UserProfileUncheckedUpdateWithoutSitUpsInput>
  }

  export type UserProfileUpdateWithoutSitUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasDailyGoal?: BoolFieldUpdateOperationsInput | boolean
    dailyGoal?: DailyGoalUpdateOneWithoutUserNestedInput
    pullupSessions?: PullupSessionUpdateManyWithoutUserNestedInput
    pushUps?: PushUpsUpdateManyWithoutUserNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutSitUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasDailyGoal?: BoolFieldUpdateOperationsInput | boolean
    dailyGoal?: DailyGoalUncheckedUpdateOneWithoutUserNestedInput
    pullupSessions?: PullupSessionUncheckedUpdateManyWithoutUserNestedInput
    pushUps?: PushUpsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserProfileCreateWithoutDailyGoalInput = {
    id: string
    email?: string | null
    displayName?: string | null
    createdAt?: Date | string
    hasDailyGoal?: boolean
    pullupSessions?: PullupSessionCreateNestedManyWithoutUserInput
    sitUps?: SitUpsCreateNestedManyWithoutUserInput
    pushUps?: PushUpsCreateNestedManyWithoutUserInput
  }

  export type UserProfileUncheckedCreateWithoutDailyGoalInput = {
    id: string
    email?: string | null
    displayName?: string | null
    createdAt?: Date | string
    hasDailyGoal?: boolean
    pullupSessions?: PullupSessionUncheckedCreateNestedManyWithoutUserInput
    sitUps?: SitUpsUncheckedCreateNestedManyWithoutUserInput
    pushUps?: PushUpsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserProfileCreateOrConnectWithoutDailyGoalInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutDailyGoalInput, UserProfileUncheckedCreateWithoutDailyGoalInput>
  }

  export type UserProfileUpsertWithoutDailyGoalInput = {
    update: XOR<UserProfileUpdateWithoutDailyGoalInput, UserProfileUncheckedUpdateWithoutDailyGoalInput>
    create: XOR<UserProfileCreateWithoutDailyGoalInput, UserProfileUncheckedCreateWithoutDailyGoalInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutDailyGoalInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutDailyGoalInput, UserProfileUncheckedUpdateWithoutDailyGoalInput>
  }

  export type UserProfileUpdateWithoutDailyGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasDailyGoal?: BoolFieldUpdateOperationsInput | boolean
    pullupSessions?: PullupSessionUpdateManyWithoutUserNestedInput
    sitUps?: SitUpsUpdateManyWithoutUserNestedInput
    pushUps?: PushUpsUpdateManyWithoutUserNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutDailyGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasDailyGoal?: BoolFieldUpdateOperationsInput | boolean
    pullupSessions?: PullupSessionUncheckedUpdateManyWithoutUserNestedInput
    sitUps?: SitUpsUncheckedUpdateManyWithoutUserNestedInput
    pushUps?: PushUpsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DailyGoalCreateWithoutUserInput = {
    situps: boolean
    pullups: boolean
    pushups: boolean
    situpsCount: number
    pullupsCount: number
    pushupsCount: number
  }

  export type DailyGoalUncheckedCreateWithoutUserInput = {
    id?: number
    situps: boolean
    pullups: boolean
    pushups: boolean
    situpsCount: number
    pullupsCount: number
    pushupsCount: number
  }

  export type DailyGoalCreateOrConnectWithoutUserInput = {
    where: DailyGoalWhereUniqueInput
    create: XOR<DailyGoalCreateWithoutUserInput, DailyGoalUncheckedCreateWithoutUserInput>
  }

  export type PullupSessionCreateWithoutUserInput = {
    count: number
    createdAt?: Date | string
    deviceId?: string | null
  }

  export type PullupSessionUncheckedCreateWithoutUserInput = {
    id?: number
    count: number
    createdAt?: Date | string
    deviceId?: string | null
  }

  export type PullupSessionCreateOrConnectWithoutUserInput = {
    where: PullupSessionWhereUniqueInput
    create: XOR<PullupSessionCreateWithoutUserInput, PullupSessionUncheckedCreateWithoutUserInput>
  }

  export type PullupSessionCreateManyUserInputEnvelope = {
    data: PullupSessionCreateManyUserInput | PullupSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SitUpsCreateWithoutUserInput = {
    count: number
    createdAt?: Date | string
    deviceId?: string | null
  }

  export type SitUpsUncheckedCreateWithoutUserInput = {
    id?: number
    count: number
    createdAt?: Date | string
    deviceId?: string | null
  }

  export type SitUpsCreateOrConnectWithoutUserInput = {
    where: SitUpsWhereUniqueInput
    create: XOR<SitUpsCreateWithoutUserInput, SitUpsUncheckedCreateWithoutUserInput>
  }

  export type SitUpsCreateManyUserInputEnvelope = {
    data: SitUpsCreateManyUserInput | SitUpsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PushUpsCreateWithoutUserInput = {
    count: number
    createdAt?: Date | string
    deviceId?: string | null
  }

  export type PushUpsUncheckedCreateWithoutUserInput = {
    id?: number
    count: number
    createdAt?: Date | string
    deviceId?: string | null
  }

  export type PushUpsCreateOrConnectWithoutUserInput = {
    where: PushUpsWhereUniqueInput
    create: XOR<PushUpsCreateWithoutUserInput, PushUpsUncheckedCreateWithoutUserInput>
  }

  export type PushUpsCreateManyUserInputEnvelope = {
    data: PushUpsCreateManyUserInput | PushUpsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyGoalUpsertWithoutUserInput = {
    update: XOR<DailyGoalUpdateWithoutUserInput, DailyGoalUncheckedUpdateWithoutUserInput>
    create: XOR<DailyGoalCreateWithoutUserInput, DailyGoalUncheckedCreateWithoutUserInput>
    where?: DailyGoalWhereInput
  }

  export type DailyGoalUpdateToOneWithWhereWithoutUserInput = {
    where?: DailyGoalWhereInput
    data: XOR<DailyGoalUpdateWithoutUserInput, DailyGoalUncheckedUpdateWithoutUserInput>
  }

  export type DailyGoalUpdateWithoutUserInput = {
    situps?: BoolFieldUpdateOperationsInput | boolean
    pullups?: BoolFieldUpdateOperationsInput | boolean
    pushups?: BoolFieldUpdateOperationsInput | boolean
    situpsCount?: IntFieldUpdateOperationsInput | number
    pullupsCount?: IntFieldUpdateOperationsInput | number
    pushupsCount?: IntFieldUpdateOperationsInput | number
  }

  export type DailyGoalUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    situps?: BoolFieldUpdateOperationsInput | boolean
    pullups?: BoolFieldUpdateOperationsInput | boolean
    pushups?: BoolFieldUpdateOperationsInput | boolean
    situpsCount?: IntFieldUpdateOperationsInput | number
    pullupsCount?: IntFieldUpdateOperationsInput | number
    pushupsCount?: IntFieldUpdateOperationsInput | number
  }

  export type PullupSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: PullupSessionWhereUniqueInput
    update: XOR<PullupSessionUpdateWithoutUserInput, PullupSessionUncheckedUpdateWithoutUserInput>
    create: XOR<PullupSessionCreateWithoutUserInput, PullupSessionUncheckedCreateWithoutUserInput>
  }

  export type PullupSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: PullupSessionWhereUniqueInput
    data: XOR<PullupSessionUpdateWithoutUserInput, PullupSessionUncheckedUpdateWithoutUserInput>
  }

  export type PullupSessionUpdateManyWithWhereWithoutUserInput = {
    where: PullupSessionScalarWhereInput
    data: XOR<PullupSessionUpdateManyMutationInput, PullupSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type PullupSessionScalarWhereInput = {
    AND?: PullupSessionScalarWhereInput | PullupSessionScalarWhereInput[]
    OR?: PullupSessionScalarWhereInput[]
    NOT?: PullupSessionScalarWhereInput | PullupSessionScalarWhereInput[]
    id?: IntFilter<"PullupSession"> | number
    count?: IntFilter<"PullupSession"> | number
    createdAt?: DateTimeFilter<"PullupSession"> | Date | string
    deviceId?: StringNullableFilter<"PullupSession"> | string | null
    userId?: StringFilter<"PullupSession"> | string
  }

  export type SitUpsUpsertWithWhereUniqueWithoutUserInput = {
    where: SitUpsWhereUniqueInput
    update: XOR<SitUpsUpdateWithoutUserInput, SitUpsUncheckedUpdateWithoutUserInput>
    create: XOR<SitUpsCreateWithoutUserInput, SitUpsUncheckedCreateWithoutUserInput>
  }

  export type SitUpsUpdateWithWhereUniqueWithoutUserInput = {
    where: SitUpsWhereUniqueInput
    data: XOR<SitUpsUpdateWithoutUserInput, SitUpsUncheckedUpdateWithoutUserInput>
  }

  export type SitUpsUpdateManyWithWhereWithoutUserInput = {
    where: SitUpsScalarWhereInput
    data: XOR<SitUpsUpdateManyMutationInput, SitUpsUncheckedUpdateManyWithoutUserInput>
  }

  export type SitUpsScalarWhereInput = {
    AND?: SitUpsScalarWhereInput | SitUpsScalarWhereInput[]
    OR?: SitUpsScalarWhereInput[]
    NOT?: SitUpsScalarWhereInput | SitUpsScalarWhereInput[]
    id?: IntFilter<"SitUps"> | number
    count?: IntFilter<"SitUps"> | number
    createdAt?: DateTimeFilter<"SitUps"> | Date | string
    deviceId?: StringNullableFilter<"SitUps"> | string | null
    userId?: StringFilter<"SitUps"> | string
  }

  export type PushUpsUpsertWithWhereUniqueWithoutUserInput = {
    where: PushUpsWhereUniqueInput
    update: XOR<PushUpsUpdateWithoutUserInput, PushUpsUncheckedUpdateWithoutUserInput>
    create: XOR<PushUpsCreateWithoutUserInput, PushUpsUncheckedCreateWithoutUserInput>
  }

  export type PushUpsUpdateWithWhereUniqueWithoutUserInput = {
    where: PushUpsWhereUniqueInput
    data: XOR<PushUpsUpdateWithoutUserInput, PushUpsUncheckedUpdateWithoutUserInput>
  }

  export type PushUpsUpdateManyWithWhereWithoutUserInput = {
    where: PushUpsScalarWhereInput
    data: XOR<PushUpsUpdateManyMutationInput, PushUpsUncheckedUpdateManyWithoutUserInput>
  }

  export type PushUpsScalarWhereInput = {
    AND?: PushUpsScalarWhereInput | PushUpsScalarWhereInput[]
    OR?: PushUpsScalarWhereInput[]
    NOT?: PushUpsScalarWhereInput | PushUpsScalarWhereInput[]
    id?: IntFilter<"PushUps"> | number
    count?: IntFilter<"PushUps"> | number
    createdAt?: DateTimeFilter<"PushUps"> | Date | string
    deviceId?: StringNullableFilter<"PushUps"> | string | null
    userId?: StringFilter<"PushUps"> | string
  }

  export type PullupSessionCreateManyUserInput = {
    id?: number
    count: number
    createdAt?: Date | string
    deviceId?: string | null
  }

  export type SitUpsCreateManyUserInput = {
    id?: number
    count: number
    createdAt?: Date | string
    deviceId?: string | null
  }

  export type PushUpsCreateManyUserInput = {
    id?: number
    count: number
    createdAt?: Date | string
    deviceId?: string | null
  }

  export type PullupSessionUpdateWithoutUserInput = {
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PullupSessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PullupSessionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SitUpsUpdateWithoutUserInput = {
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SitUpsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SitUpsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PushUpsUpdateWithoutUserInput = {
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PushUpsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PushUpsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
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