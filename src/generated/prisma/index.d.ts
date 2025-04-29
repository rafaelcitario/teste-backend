
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model cnpjs
 * 
 */
export type cnpjs = $Result.DefaultSelection<Prisma.$cnpjsPayload>
/**
 * Model user_cnpjs
 * 
 */
export type user_cnpjs = $Result.DefaultSelection<Prisma.$user_cnpjsPayload>
/**
 * Model phones
 * 
 */
export type phones = $Result.DefaultSelection<Prisma.$phonesPayload>
/**
 * Model address
 * 
 */
export type address = $Result.DefaultSelection<Prisma.$addressPayload>
/**
 * Model emails
 * 
 */
export type emails = $Result.DefaultSelection<Prisma.$emailsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PersonType: {
  fisica: 'fisica',
  juridica: 'juridica'
};

export type PersonType = (typeof PersonType)[keyof typeof PersonType]


export const PhoneType: {
  celular: 'celular',
  telefone: 'telefone'
};

export type PhoneType = (typeof PhoneType)[keyof typeof PhoneType]

}

export type PersonType = $Enums.PersonType

export const PersonType: typeof $Enums.PersonType

export type PhoneType = $Enums.PhoneType

export const PhoneType: typeof $Enums.PhoneType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cnpjs`: Exposes CRUD operations for the **cnpjs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cnpjs
    * const cnpjs = await prisma.cnpjs.findMany()
    * ```
    */
  get cnpjs(): Prisma.cnpjsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_cnpjs`: Exposes CRUD operations for the **user_cnpjs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_cnpjs
    * const user_cnpjs = await prisma.user_cnpjs.findMany()
    * ```
    */
  get user_cnpjs(): Prisma.user_cnpjsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phones`: Exposes CRUD operations for the **phones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phones
    * const phones = await prisma.phones.findMany()
    * ```
    */
  get phones(): Prisma.phonesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.addressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emails`: Exposes CRUD operations for the **emails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emails
    * const emails = await prisma.emails.findMany()
    * ```
    */
  get emails(): Prisma.emailsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    users: 'users',
    cnpjs: 'cnpjs',
    user_cnpjs: 'user_cnpjs',
    phones: 'phones',
    address: 'address',
    emails: 'emails'
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
      modelProps: "users" | "cnpjs" | "user_cnpjs" | "phones" | "address" | "emails"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      cnpjs: {
        payload: Prisma.$cnpjsPayload<ExtArgs>
        fields: Prisma.cnpjsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cnpjsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnpjsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cnpjsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnpjsPayload>
          }
          findFirst: {
            args: Prisma.cnpjsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnpjsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cnpjsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnpjsPayload>
          }
          findMany: {
            args: Prisma.cnpjsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnpjsPayload>[]
          }
          create: {
            args: Prisma.cnpjsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnpjsPayload>
          }
          createMany: {
            args: Prisma.cnpjsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cnpjsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnpjsPayload>
          }
          update: {
            args: Prisma.cnpjsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnpjsPayload>
          }
          deleteMany: {
            args: Prisma.cnpjsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cnpjsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cnpjsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnpjsPayload>
          }
          aggregate: {
            args: Prisma.CnpjsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCnpjs>
          }
          groupBy: {
            args: Prisma.cnpjsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CnpjsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cnpjsCountArgs<ExtArgs>
            result: $Utils.Optional<CnpjsCountAggregateOutputType> | number
          }
        }
      }
      user_cnpjs: {
        payload: Prisma.$user_cnpjsPayload<ExtArgs>
        fields: Prisma.user_cnpjsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_cnpjsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cnpjsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_cnpjsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cnpjsPayload>
          }
          findFirst: {
            args: Prisma.user_cnpjsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cnpjsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_cnpjsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cnpjsPayload>
          }
          findMany: {
            args: Prisma.user_cnpjsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cnpjsPayload>[]
          }
          create: {
            args: Prisma.user_cnpjsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cnpjsPayload>
          }
          createMany: {
            args: Prisma.user_cnpjsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_cnpjsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cnpjsPayload>
          }
          update: {
            args: Prisma.user_cnpjsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cnpjsPayload>
          }
          deleteMany: {
            args: Prisma.user_cnpjsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_cnpjsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_cnpjsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_cnpjsPayload>
          }
          aggregate: {
            args: Prisma.User_cnpjsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_cnpjs>
          }
          groupBy: {
            args: Prisma.user_cnpjsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_cnpjsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_cnpjsCountArgs<ExtArgs>
            result: $Utils.Optional<User_cnpjsCountAggregateOutputType> | number
          }
        }
      }
      phones: {
        payload: Prisma.$phonesPayload<ExtArgs>
        fields: Prisma.phonesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.phonesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.phonesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload>
          }
          findFirst: {
            args: Prisma.phonesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.phonesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload>
          }
          findMany: {
            args: Prisma.phonesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload>[]
          }
          create: {
            args: Prisma.phonesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload>
          }
          createMany: {
            args: Prisma.phonesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.phonesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload>
          }
          update: {
            args: Prisma.phonesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload>
          }
          deleteMany: {
            args: Prisma.phonesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.phonesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.phonesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phonesPayload>
          }
          aggregate: {
            args: Prisma.PhonesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhones>
          }
          groupBy: {
            args: Prisma.phonesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhonesGroupByOutputType>[]
          }
          count: {
            args: Prisma.phonesCountArgs<ExtArgs>
            result: $Utils.Optional<PhonesCountAggregateOutputType> | number
          }
        }
      }
      address: {
        payload: Prisma.$addressPayload<ExtArgs>
        fields: Prisma.addressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.addressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.addressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          findFirst: {
            args: Prisma.addressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.addressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          findMany: {
            args: Prisma.addressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>[]
          }
          create: {
            args: Prisma.addressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          createMany: {
            args: Prisma.addressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.addressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          update: {
            args: Prisma.addressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          deleteMany: {
            args: Prisma.addressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.addressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.addressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.addressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.addressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      emails: {
        payload: Prisma.$emailsPayload<ExtArgs>
        fields: Prisma.emailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.emailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.emailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload>
          }
          findFirst: {
            args: Prisma.emailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.emailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload>
          }
          findMany: {
            args: Prisma.emailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload>[]
          }
          create: {
            args: Prisma.emailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload>
          }
          createMany: {
            args: Prisma.emailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.emailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload>
          }
          update: {
            args: Prisma.emailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload>
          }
          deleteMany: {
            args: Prisma.emailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.emailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.emailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload>
          }
          aggregate: {
            args: Prisma.EmailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmails>
          }
          groupBy: {
            args: Prisma.emailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.emailsCountArgs<ExtArgs>
            result: $Utils.Optional<EmailsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    users?: usersOmit
    cnpjs?: cnpjsOmit
    user_cnpjs?: user_cnpjsOmit
    phones?: phonesOmit
    address?: addressOmit
    emails?: emailsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    user_cnpjs: number
    phones: number
    address: number
    emails: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_cnpjs?: boolean | UsersCountOutputTypeCountUser_cnpjsArgs
    phones?: boolean | UsersCountOutputTypeCountPhonesArgs
    address?: boolean | UsersCountOutputTypeCountAddressArgs
    emails?: boolean | UsersCountOutputTypeCountEmailsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_cnpjsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_cnpjsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPhonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: phonesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: emailsWhereInput
  }


  /**
   * Count Type CnpjsCountOutputType
   */

  export type CnpjsCountOutputType = {
    user_cnpjs: number
  }

  export type CnpjsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_cnpjs?: boolean | CnpjsCountOutputTypeCountUser_cnpjsArgs
  }

  // Custom InputTypes
  /**
   * CnpjsCountOutputType without action
   */
  export type CnpjsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CnpjsCountOutputType
     */
    select?: CnpjsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CnpjsCountOutputType without action
   */
  export type CnpjsCountOutputTypeCountUser_cnpjsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_cnpjsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    cpf: string | null
    personType: $Enums.PersonType | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    cpf: string | null
    personType: $Enums.PersonType | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    cpf: number
    personType: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    personType?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    personType?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    personType?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    cpf: string
    personType: $Enums.PersonType
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    personType?: boolean
    user_cnpjs?: boolean | users$user_cnpjsArgs<ExtArgs>
    phones?: boolean | users$phonesArgs<ExtArgs>
    address?: boolean | users$addressArgs<ExtArgs>
    emails?: boolean | users$emailsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    cpf?: boolean
    personType?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cpf" | "personType", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_cnpjs?: boolean | users$user_cnpjsArgs<ExtArgs>
    phones?: boolean | users$phonesArgs<ExtArgs>
    address?: boolean | users$addressArgs<ExtArgs>
    emails?: boolean | users$emailsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      user_cnpjs: Prisma.$user_cnpjsPayload<ExtArgs>[]
      phones: Prisma.$phonesPayload<ExtArgs>[]
      address: Prisma.$addressPayload<ExtArgs>[]
      emails: Prisma.$emailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      cpf: string
      personType: $Enums.PersonType
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_cnpjs<T extends users$user_cnpjsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_cnpjsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_cnpjsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    phones<T extends users$phonesArgs<ExtArgs> = {}>(args?: Subset<T, users$phonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    address<T extends users$addressArgs<ExtArgs> = {}>(args?: Subset<T, users$addressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emails<T extends users$emailsArgs<ExtArgs> = {}>(args?: Subset<T, users$emailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly cpf: FieldRef<"users", 'String'>
    readonly personType: FieldRef<"users", 'PersonType'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.user_cnpjs
   */
  export type users$user_cnpjsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cnpjs
     */
    select?: user_cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cnpjs
     */
    omit?: user_cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cnpjsInclude<ExtArgs> | null
    where?: user_cnpjsWhereInput
    orderBy?: user_cnpjsOrderByWithRelationInput | user_cnpjsOrderByWithRelationInput[]
    cursor?: user_cnpjsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_cnpjsScalarFieldEnum | User_cnpjsScalarFieldEnum[]
  }

  /**
   * users.phones
   */
  export type users$phonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    where?: phonesWhereInput
    orderBy?: phonesOrderByWithRelationInput | phonesOrderByWithRelationInput[]
    cursor?: phonesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhonesScalarFieldEnum | PhonesScalarFieldEnum[]
  }

  /**
   * users.address
   */
  export type users$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    where?: addressWhereInput
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    cursor?: addressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * users.emails
   */
  export type users$emailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    where?: emailsWhereInput
    orderBy?: emailsOrderByWithRelationInput | emailsOrderByWithRelationInput[]
    cursor?: emailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailsScalarFieldEnum | EmailsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model cnpjs
   */

  export type AggregateCnpjs = {
    _count: CnpjsCountAggregateOutputType | null
    _avg: CnpjsAvgAggregateOutputType | null
    _sum: CnpjsSumAggregateOutputType | null
    _min: CnpjsMinAggregateOutputType | null
    _max: CnpjsMaxAggregateOutputType | null
  }

  export type CnpjsAvgAggregateOutputType = {
    id: number | null
  }

  export type CnpjsSumAggregateOutputType = {
    id: number | null
  }

  export type CnpjsMinAggregateOutputType = {
    id: number | null
    number: string | null
  }

  export type CnpjsMaxAggregateOutputType = {
    id: number | null
    number: string | null
  }

  export type CnpjsCountAggregateOutputType = {
    id: number
    number: number
    _all: number
  }


  export type CnpjsAvgAggregateInputType = {
    id?: true
  }

  export type CnpjsSumAggregateInputType = {
    id?: true
  }

  export type CnpjsMinAggregateInputType = {
    id?: true
    number?: true
  }

  export type CnpjsMaxAggregateInputType = {
    id?: true
    number?: true
  }

  export type CnpjsCountAggregateInputType = {
    id?: true
    number?: true
    _all?: true
  }

  export type CnpjsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cnpjs to aggregate.
     */
    where?: cnpjsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cnpjs to fetch.
     */
    orderBy?: cnpjsOrderByWithRelationInput | cnpjsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cnpjsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cnpjs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cnpjs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cnpjs
    **/
    _count?: true | CnpjsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CnpjsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CnpjsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CnpjsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CnpjsMaxAggregateInputType
  }

  export type GetCnpjsAggregateType<T extends CnpjsAggregateArgs> = {
        [P in keyof T & keyof AggregateCnpjs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCnpjs[P]>
      : GetScalarType<T[P], AggregateCnpjs[P]>
  }




  export type cnpjsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cnpjsWhereInput
    orderBy?: cnpjsOrderByWithAggregationInput | cnpjsOrderByWithAggregationInput[]
    by: CnpjsScalarFieldEnum[] | CnpjsScalarFieldEnum
    having?: cnpjsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CnpjsCountAggregateInputType | true
    _avg?: CnpjsAvgAggregateInputType
    _sum?: CnpjsSumAggregateInputType
    _min?: CnpjsMinAggregateInputType
    _max?: CnpjsMaxAggregateInputType
  }

  export type CnpjsGroupByOutputType = {
    id: number
    number: string
    _count: CnpjsCountAggregateOutputType | null
    _avg: CnpjsAvgAggregateOutputType | null
    _sum: CnpjsSumAggregateOutputType | null
    _min: CnpjsMinAggregateOutputType | null
    _max: CnpjsMaxAggregateOutputType | null
  }

  type GetCnpjsGroupByPayload<T extends cnpjsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CnpjsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CnpjsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CnpjsGroupByOutputType[P]>
            : GetScalarType<T[P], CnpjsGroupByOutputType[P]>
        }
      >
    >


  export type cnpjsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    user_cnpjs?: boolean | cnpjs$user_cnpjsArgs<ExtArgs>
    _count?: boolean | CnpjsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cnpjs"]>



  export type cnpjsSelectScalar = {
    id?: boolean
    number?: boolean
  }

  export type cnpjsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number", ExtArgs["result"]["cnpjs"]>
  export type cnpjsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_cnpjs?: boolean | cnpjs$user_cnpjsArgs<ExtArgs>
    _count?: boolean | CnpjsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $cnpjsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cnpjs"
    objects: {
      user_cnpjs: Prisma.$user_cnpjsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: string
    }, ExtArgs["result"]["cnpjs"]>
    composites: {}
  }

  type cnpjsGetPayload<S extends boolean | null | undefined | cnpjsDefaultArgs> = $Result.GetResult<Prisma.$cnpjsPayload, S>

  type cnpjsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cnpjsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CnpjsCountAggregateInputType | true
    }

  export interface cnpjsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cnpjs'], meta: { name: 'cnpjs' } }
    /**
     * Find zero or one Cnpjs that matches the filter.
     * @param {cnpjsFindUniqueArgs} args - Arguments to find a Cnpjs
     * @example
     * // Get one Cnpjs
     * const cnpjs = await prisma.cnpjs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cnpjsFindUniqueArgs>(args: SelectSubset<T, cnpjsFindUniqueArgs<ExtArgs>>): Prisma__cnpjsClient<$Result.GetResult<Prisma.$cnpjsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cnpjs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cnpjsFindUniqueOrThrowArgs} args - Arguments to find a Cnpjs
     * @example
     * // Get one Cnpjs
     * const cnpjs = await prisma.cnpjs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cnpjsFindUniqueOrThrowArgs>(args: SelectSubset<T, cnpjsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cnpjsClient<$Result.GetResult<Prisma.$cnpjsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cnpjs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnpjsFindFirstArgs} args - Arguments to find a Cnpjs
     * @example
     * // Get one Cnpjs
     * const cnpjs = await prisma.cnpjs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cnpjsFindFirstArgs>(args?: SelectSubset<T, cnpjsFindFirstArgs<ExtArgs>>): Prisma__cnpjsClient<$Result.GetResult<Prisma.$cnpjsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cnpjs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnpjsFindFirstOrThrowArgs} args - Arguments to find a Cnpjs
     * @example
     * // Get one Cnpjs
     * const cnpjs = await prisma.cnpjs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cnpjsFindFirstOrThrowArgs>(args?: SelectSubset<T, cnpjsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cnpjsClient<$Result.GetResult<Prisma.$cnpjsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cnpjs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnpjsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cnpjs
     * const cnpjs = await prisma.cnpjs.findMany()
     * 
     * // Get first 10 Cnpjs
     * const cnpjs = await prisma.cnpjs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cnpjsWithIdOnly = await prisma.cnpjs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cnpjsFindManyArgs>(args?: SelectSubset<T, cnpjsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cnpjsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cnpjs.
     * @param {cnpjsCreateArgs} args - Arguments to create a Cnpjs.
     * @example
     * // Create one Cnpjs
     * const Cnpjs = await prisma.cnpjs.create({
     *   data: {
     *     // ... data to create a Cnpjs
     *   }
     * })
     * 
     */
    create<T extends cnpjsCreateArgs>(args: SelectSubset<T, cnpjsCreateArgs<ExtArgs>>): Prisma__cnpjsClient<$Result.GetResult<Prisma.$cnpjsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cnpjs.
     * @param {cnpjsCreateManyArgs} args - Arguments to create many Cnpjs.
     * @example
     * // Create many Cnpjs
     * const cnpjs = await prisma.cnpjs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cnpjsCreateManyArgs>(args?: SelectSubset<T, cnpjsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cnpjs.
     * @param {cnpjsDeleteArgs} args - Arguments to delete one Cnpjs.
     * @example
     * // Delete one Cnpjs
     * const Cnpjs = await prisma.cnpjs.delete({
     *   where: {
     *     // ... filter to delete one Cnpjs
     *   }
     * })
     * 
     */
    delete<T extends cnpjsDeleteArgs>(args: SelectSubset<T, cnpjsDeleteArgs<ExtArgs>>): Prisma__cnpjsClient<$Result.GetResult<Prisma.$cnpjsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cnpjs.
     * @param {cnpjsUpdateArgs} args - Arguments to update one Cnpjs.
     * @example
     * // Update one Cnpjs
     * const cnpjs = await prisma.cnpjs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cnpjsUpdateArgs>(args: SelectSubset<T, cnpjsUpdateArgs<ExtArgs>>): Prisma__cnpjsClient<$Result.GetResult<Prisma.$cnpjsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cnpjs.
     * @param {cnpjsDeleteManyArgs} args - Arguments to filter Cnpjs to delete.
     * @example
     * // Delete a few Cnpjs
     * const { count } = await prisma.cnpjs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cnpjsDeleteManyArgs>(args?: SelectSubset<T, cnpjsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cnpjs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnpjsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cnpjs
     * const cnpjs = await prisma.cnpjs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cnpjsUpdateManyArgs>(args: SelectSubset<T, cnpjsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cnpjs.
     * @param {cnpjsUpsertArgs} args - Arguments to update or create a Cnpjs.
     * @example
     * // Update or create a Cnpjs
     * const cnpjs = await prisma.cnpjs.upsert({
     *   create: {
     *     // ... data to create a Cnpjs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cnpjs we want to update
     *   }
     * })
     */
    upsert<T extends cnpjsUpsertArgs>(args: SelectSubset<T, cnpjsUpsertArgs<ExtArgs>>): Prisma__cnpjsClient<$Result.GetResult<Prisma.$cnpjsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cnpjs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnpjsCountArgs} args - Arguments to filter Cnpjs to count.
     * @example
     * // Count the number of Cnpjs
     * const count = await prisma.cnpjs.count({
     *   where: {
     *     // ... the filter for the Cnpjs we want to count
     *   }
     * })
    **/
    count<T extends cnpjsCountArgs>(
      args?: Subset<T, cnpjsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CnpjsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cnpjs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CnpjsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CnpjsAggregateArgs>(args: Subset<T, CnpjsAggregateArgs>): Prisma.PrismaPromise<GetCnpjsAggregateType<T>>

    /**
     * Group by Cnpjs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnpjsGroupByArgs} args - Group by arguments.
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
      T extends cnpjsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cnpjsGroupByArgs['orderBy'] }
        : { orderBy?: cnpjsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cnpjsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCnpjsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cnpjs model
   */
  readonly fields: cnpjsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cnpjs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cnpjsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_cnpjs<T extends cnpjs$user_cnpjsArgs<ExtArgs> = {}>(args?: Subset<T, cnpjs$user_cnpjsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_cnpjsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cnpjs model
   */
  interface cnpjsFieldRefs {
    readonly id: FieldRef<"cnpjs", 'Int'>
    readonly number: FieldRef<"cnpjs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cnpjs findUnique
   */
  export type cnpjsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnpjs
     */
    select?: cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnpjs
     */
    omit?: cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnpjsInclude<ExtArgs> | null
    /**
     * Filter, which cnpjs to fetch.
     */
    where: cnpjsWhereUniqueInput
  }

  /**
   * cnpjs findUniqueOrThrow
   */
  export type cnpjsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnpjs
     */
    select?: cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnpjs
     */
    omit?: cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnpjsInclude<ExtArgs> | null
    /**
     * Filter, which cnpjs to fetch.
     */
    where: cnpjsWhereUniqueInput
  }

  /**
   * cnpjs findFirst
   */
  export type cnpjsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnpjs
     */
    select?: cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnpjs
     */
    omit?: cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnpjsInclude<ExtArgs> | null
    /**
     * Filter, which cnpjs to fetch.
     */
    where?: cnpjsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cnpjs to fetch.
     */
    orderBy?: cnpjsOrderByWithRelationInput | cnpjsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cnpjs.
     */
    cursor?: cnpjsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cnpjs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cnpjs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cnpjs.
     */
    distinct?: CnpjsScalarFieldEnum | CnpjsScalarFieldEnum[]
  }

  /**
   * cnpjs findFirstOrThrow
   */
  export type cnpjsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnpjs
     */
    select?: cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnpjs
     */
    omit?: cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnpjsInclude<ExtArgs> | null
    /**
     * Filter, which cnpjs to fetch.
     */
    where?: cnpjsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cnpjs to fetch.
     */
    orderBy?: cnpjsOrderByWithRelationInput | cnpjsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cnpjs.
     */
    cursor?: cnpjsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cnpjs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cnpjs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cnpjs.
     */
    distinct?: CnpjsScalarFieldEnum | CnpjsScalarFieldEnum[]
  }

  /**
   * cnpjs findMany
   */
  export type cnpjsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnpjs
     */
    select?: cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnpjs
     */
    omit?: cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnpjsInclude<ExtArgs> | null
    /**
     * Filter, which cnpjs to fetch.
     */
    where?: cnpjsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cnpjs to fetch.
     */
    orderBy?: cnpjsOrderByWithRelationInput | cnpjsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cnpjs.
     */
    cursor?: cnpjsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cnpjs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cnpjs.
     */
    skip?: number
    distinct?: CnpjsScalarFieldEnum | CnpjsScalarFieldEnum[]
  }

  /**
   * cnpjs create
   */
  export type cnpjsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnpjs
     */
    select?: cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnpjs
     */
    omit?: cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnpjsInclude<ExtArgs> | null
    /**
     * The data needed to create a cnpjs.
     */
    data: XOR<cnpjsCreateInput, cnpjsUncheckedCreateInput>
  }

  /**
   * cnpjs createMany
   */
  export type cnpjsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cnpjs.
     */
    data: cnpjsCreateManyInput | cnpjsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cnpjs update
   */
  export type cnpjsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnpjs
     */
    select?: cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnpjs
     */
    omit?: cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnpjsInclude<ExtArgs> | null
    /**
     * The data needed to update a cnpjs.
     */
    data: XOR<cnpjsUpdateInput, cnpjsUncheckedUpdateInput>
    /**
     * Choose, which cnpjs to update.
     */
    where: cnpjsWhereUniqueInput
  }

  /**
   * cnpjs updateMany
   */
  export type cnpjsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cnpjs.
     */
    data: XOR<cnpjsUpdateManyMutationInput, cnpjsUncheckedUpdateManyInput>
    /**
     * Filter which cnpjs to update
     */
    where?: cnpjsWhereInput
    /**
     * Limit how many cnpjs to update.
     */
    limit?: number
  }

  /**
   * cnpjs upsert
   */
  export type cnpjsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnpjs
     */
    select?: cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnpjs
     */
    omit?: cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnpjsInclude<ExtArgs> | null
    /**
     * The filter to search for the cnpjs to update in case it exists.
     */
    where: cnpjsWhereUniqueInput
    /**
     * In case the cnpjs found by the `where` argument doesn't exist, create a new cnpjs with this data.
     */
    create: XOR<cnpjsCreateInput, cnpjsUncheckedCreateInput>
    /**
     * In case the cnpjs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cnpjsUpdateInput, cnpjsUncheckedUpdateInput>
  }

  /**
   * cnpjs delete
   */
  export type cnpjsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnpjs
     */
    select?: cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnpjs
     */
    omit?: cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnpjsInclude<ExtArgs> | null
    /**
     * Filter which cnpjs to delete.
     */
    where: cnpjsWhereUniqueInput
  }

  /**
   * cnpjs deleteMany
   */
  export type cnpjsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cnpjs to delete
     */
    where?: cnpjsWhereInput
    /**
     * Limit how many cnpjs to delete.
     */
    limit?: number
  }

  /**
   * cnpjs.user_cnpjs
   */
  export type cnpjs$user_cnpjsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cnpjs
     */
    select?: user_cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cnpjs
     */
    omit?: user_cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cnpjsInclude<ExtArgs> | null
    where?: user_cnpjsWhereInput
    orderBy?: user_cnpjsOrderByWithRelationInput | user_cnpjsOrderByWithRelationInput[]
    cursor?: user_cnpjsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_cnpjsScalarFieldEnum | User_cnpjsScalarFieldEnum[]
  }

  /**
   * cnpjs without action
   */
  export type cnpjsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnpjs
     */
    select?: cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnpjs
     */
    omit?: cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnpjsInclude<ExtArgs> | null
  }


  /**
   * Model user_cnpjs
   */

  export type AggregateUser_cnpjs = {
    _count: User_cnpjsCountAggregateOutputType | null
    _avg: User_cnpjsAvgAggregateOutputType | null
    _sum: User_cnpjsSumAggregateOutputType | null
    _min: User_cnpjsMinAggregateOutputType | null
    _max: User_cnpjsMaxAggregateOutputType | null
  }

  export type User_cnpjsAvgAggregateOutputType = {
    id: number | null
    usersId: number | null
    cnpjsId: number | null
  }

  export type User_cnpjsSumAggregateOutputType = {
    id: number | null
    usersId: number | null
    cnpjsId: number | null
  }

  export type User_cnpjsMinAggregateOutputType = {
    id: number | null
    usersId: number | null
    cnpjsId: number | null
  }

  export type User_cnpjsMaxAggregateOutputType = {
    id: number | null
    usersId: number | null
    cnpjsId: number | null
  }

  export type User_cnpjsCountAggregateOutputType = {
    id: number
    usersId: number
    cnpjsId: number
    _all: number
  }


  export type User_cnpjsAvgAggregateInputType = {
    id?: true
    usersId?: true
    cnpjsId?: true
  }

  export type User_cnpjsSumAggregateInputType = {
    id?: true
    usersId?: true
    cnpjsId?: true
  }

  export type User_cnpjsMinAggregateInputType = {
    id?: true
    usersId?: true
    cnpjsId?: true
  }

  export type User_cnpjsMaxAggregateInputType = {
    id?: true
    usersId?: true
    cnpjsId?: true
  }

  export type User_cnpjsCountAggregateInputType = {
    id?: true
    usersId?: true
    cnpjsId?: true
    _all?: true
  }

  export type User_cnpjsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_cnpjs to aggregate.
     */
    where?: user_cnpjsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_cnpjs to fetch.
     */
    orderBy?: user_cnpjsOrderByWithRelationInput | user_cnpjsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_cnpjsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_cnpjs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_cnpjs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_cnpjs
    **/
    _count?: true | User_cnpjsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_cnpjsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_cnpjsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_cnpjsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_cnpjsMaxAggregateInputType
  }

  export type GetUser_cnpjsAggregateType<T extends User_cnpjsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_cnpjs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_cnpjs[P]>
      : GetScalarType<T[P], AggregateUser_cnpjs[P]>
  }




  export type user_cnpjsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_cnpjsWhereInput
    orderBy?: user_cnpjsOrderByWithAggregationInput | user_cnpjsOrderByWithAggregationInput[]
    by: User_cnpjsScalarFieldEnum[] | User_cnpjsScalarFieldEnum
    having?: user_cnpjsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_cnpjsCountAggregateInputType | true
    _avg?: User_cnpjsAvgAggregateInputType
    _sum?: User_cnpjsSumAggregateInputType
    _min?: User_cnpjsMinAggregateInputType
    _max?: User_cnpjsMaxAggregateInputType
  }

  export type User_cnpjsGroupByOutputType = {
    id: number
    usersId: number
    cnpjsId: number
    _count: User_cnpjsCountAggregateOutputType | null
    _avg: User_cnpjsAvgAggregateOutputType | null
    _sum: User_cnpjsSumAggregateOutputType | null
    _min: User_cnpjsMinAggregateOutputType | null
    _max: User_cnpjsMaxAggregateOutputType | null
  }

  type GetUser_cnpjsGroupByPayload<T extends user_cnpjsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_cnpjsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_cnpjsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_cnpjsGroupByOutputType[P]>
            : GetScalarType<T[P], User_cnpjsGroupByOutputType[P]>
        }
      >
    >


  export type user_cnpjsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usersId?: boolean
    cnpjsId?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    cnpj?: boolean | cnpjsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_cnpjs"]>



  export type user_cnpjsSelectScalar = {
    id?: boolean
    usersId?: boolean
    cnpjsId?: boolean
  }

  export type user_cnpjsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usersId" | "cnpjsId", ExtArgs["result"]["user_cnpjs"]>
  export type user_cnpjsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    cnpj?: boolean | cnpjsDefaultArgs<ExtArgs>
  }

  export type $user_cnpjsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_cnpjs"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      cnpj: Prisma.$cnpjsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usersId: number
      cnpjsId: number
    }, ExtArgs["result"]["user_cnpjs"]>
    composites: {}
  }

  type user_cnpjsGetPayload<S extends boolean | null | undefined | user_cnpjsDefaultArgs> = $Result.GetResult<Prisma.$user_cnpjsPayload, S>

  type user_cnpjsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_cnpjsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_cnpjsCountAggregateInputType | true
    }

  export interface user_cnpjsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_cnpjs'], meta: { name: 'user_cnpjs' } }
    /**
     * Find zero or one User_cnpjs that matches the filter.
     * @param {user_cnpjsFindUniqueArgs} args - Arguments to find a User_cnpjs
     * @example
     * // Get one User_cnpjs
     * const user_cnpjs = await prisma.user_cnpjs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_cnpjsFindUniqueArgs>(args: SelectSubset<T, user_cnpjsFindUniqueArgs<ExtArgs>>): Prisma__user_cnpjsClient<$Result.GetResult<Prisma.$user_cnpjsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_cnpjs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_cnpjsFindUniqueOrThrowArgs} args - Arguments to find a User_cnpjs
     * @example
     * // Get one User_cnpjs
     * const user_cnpjs = await prisma.user_cnpjs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_cnpjsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_cnpjsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_cnpjsClient<$Result.GetResult<Prisma.$user_cnpjsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_cnpjs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_cnpjsFindFirstArgs} args - Arguments to find a User_cnpjs
     * @example
     * // Get one User_cnpjs
     * const user_cnpjs = await prisma.user_cnpjs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_cnpjsFindFirstArgs>(args?: SelectSubset<T, user_cnpjsFindFirstArgs<ExtArgs>>): Prisma__user_cnpjsClient<$Result.GetResult<Prisma.$user_cnpjsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_cnpjs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_cnpjsFindFirstOrThrowArgs} args - Arguments to find a User_cnpjs
     * @example
     * // Get one User_cnpjs
     * const user_cnpjs = await prisma.user_cnpjs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_cnpjsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_cnpjsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_cnpjsClient<$Result.GetResult<Prisma.$user_cnpjsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_cnpjs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_cnpjsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_cnpjs
     * const user_cnpjs = await prisma.user_cnpjs.findMany()
     * 
     * // Get first 10 User_cnpjs
     * const user_cnpjs = await prisma.user_cnpjs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_cnpjsWithIdOnly = await prisma.user_cnpjs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_cnpjsFindManyArgs>(args?: SelectSubset<T, user_cnpjsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_cnpjsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_cnpjs.
     * @param {user_cnpjsCreateArgs} args - Arguments to create a User_cnpjs.
     * @example
     * // Create one User_cnpjs
     * const User_cnpjs = await prisma.user_cnpjs.create({
     *   data: {
     *     // ... data to create a User_cnpjs
     *   }
     * })
     * 
     */
    create<T extends user_cnpjsCreateArgs>(args: SelectSubset<T, user_cnpjsCreateArgs<ExtArgs>>): Prisma__user_cnpjsClient<$Result.GetResult<Prisma.$user_cnpjsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_cnpjs.
     * @param {user_cnpjsCreateManyArgs} args - Arguments to create many User_cnpjs.
     * @example
     * // Create many User_cnpjs
     * const user_cnpjs = await prisma.user_cnpjs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_cnpjsCreateManyArgs>(args?: SelectSubset<T, user_cnpjsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_cnpjs.
     * @param {user_cnpjsDeleteArgs} args - Arguments to delete one User_cnpjs.
     * @example
     * // Delete one User_cnpjs
     * const User_cnpjs = await prisma.user_cnpjs.delete({
     *   where: {
     *     // ... filter to delete one User_cnpjs
     *   }
     * })
     * 
     */
    delete<T extends user_cnpjsDeleteArgs>(args: SelectSubset<T, user_cnpjsDeleteArgs<ExtArgs>>): Prisma__user_cnpjsClient<$Result.GetResult<Prisma.$user_cnpjsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_cnpjs.
     * @param {user_cnpjsUpdateArgs} args - Arguments to update one User_cnpjs.
     * @example
     * // Update one User_cnpjs
     * const user_cnpjs = await prisma.user_cnpjs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_cnpjsUpdateArgs>(args: SelectSubset<T, user_cnpjsUpdateArgs<ExtArgs>>): Prisma__user_cnpjsClient<$Result.GetResult<Prisma.$user_cnpjsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_cnpjs.
     * @param {user_cnpjsDeleteManyArgs} args - Arguments to filter User_cnpjs to delete.
     * @example
     * // Delete a few User_cnpjs
     * const { count } = await prisma.user_cnpjs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_cnpjsDeleteManyArgs>(args?: SelectSubset<T, user_cnpjsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_cnpjs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_cnpjsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_cnpjs
     * const user_cnpjs = await prisma.user_cnpjs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_cnpjsUpdateManyArgs>(args: SelectSubset<T, user_cnpjsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_cnpjs.
     * @param {user_cnpjsUpsertArgs} args - Arguments to update or create a User_cnpjs.
     * @example
     * // Update or create a User_cnpjs
     * const user_cnpjs = await prisma.user_cnpjs.upsert({
     *   create: {
     *     // ... data to create a User_cnpjs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_cnpjs we want to update
     *   }
     * })
     */
    upsert<T extends user_cnpjsUpsertArgs>(args: SelectSubset<T, user_cnpjsUpsertArgs<ExtArgs>>): Prisma__user_cnpjsClient<$Result.GetResult<Prisma.$user_cnpjsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_cnpjs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_cnpjsCountArgs} args - Arguments to filter User_cnpjs to count.
     * @example
     * // Count the number of User_cnpjs
     * const count = await prisma.user_cnpjs.count({
     *   where: {
     *     // ... the filter for the User_cnpjs we want to count
     *   }
     * })
    **/
    count<T extends user_cnpjsCountArgs>(
      args?: Subset<T, user_cnpjsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_cnpjsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_cnpjs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_cnpjsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_cnpjsAggregateArgs>(args: Subset<T, User_cnpjsAggregateArgs>): Prisma.PrismaPromise<GetUser_cnpjsAggregateType<T>>

    /**
     * Group by User_cnpjs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_cnpjsGroupByArgs} args - Group by arguments.
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
      T extends user_cnpjsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_cnpjsGroupByArgs['orderBy'] }
        : { orderBy?: user_cnpjsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_cnpjsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_cnpjsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_cnpjs model
   */
  readonly fields: user_cnpjsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_cnpjs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_cnpjsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cnpj<T extends cnpjsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cnpjsDefaultArgs<ExtArgs>>): Prisma__cnpjsClient<$Result.GetResult<Prisma.$cnpjsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_cnpjs model
   */
  interface user_cnpjsFieldRefs {
    readonly id: FieldRef<"user_cnpjs", 'Int'>
    readonly usersId: FieldRef<"user_cnpjs", 'Int'>
    readonly cnpjsId: FieldRef<"user_cnpjs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_cnpjs findUnique
   */
  export type user_cnpjsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cnpjs
     */
    select?: user_cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cnpjs
     */
    omit?: user_cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cnpjsInclude<ExtArgs> | null
    /**
     * Filter, which user_cnpjs to fetch.
     */
    where: user_cnpjsWhereUniqueInput
  }

  /**
   * user_cnpjs findUniqueOrThrow
   */
  export type user_cnpjsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cnpjs
     */
    select?: user_cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cnpjs
     */
    omit?: user_cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cnpjsInclude<ExtArgs> | null
    /**
     * Filter, which user_cnpjs to fetch.
     */
    where: user_cnpjsWhereUniqueInput
  }

  /**
   * user_cnpjs findFirst
   */
  export type user_cnpjsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cnpjs
     */
    select?: user_cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cnpjs
     */
    omit?: user_cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cnpjsInclude<ExtArgs> | null
    /**
     * Filter, which user_cnpjs to fetch.
     */
    where?: user_cnpjsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_cnpjs to fetch.
     */
    orderBy?: user_cnpjsOrderByWithRelationInput | user_cnpjsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_cnpjs.
     */
    cursor?: user_cnpjsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_cnpjs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_cnpjs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_cnpjs.
     */
    distinct?: User_cnpjsScalarFieldEnum | User_cnpjsScalarFieldEnum[]
  }

  /**
   * user_cnpjs findFirstOrThrow
   */
  export type user_cnpjsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cnpjs
     */
    select?: user_cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cnpjs
     */
    omit?: user_cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cnpjsInclude<ExtArgs> | null
    /**
     * Filter, which user_cnpjs to fetch.
     */
    where?: user_cnpjsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_cnpjs to fetch.
     */
    orderBy?: user_cnpjsOrderByWithRelationInput | user_cnpjsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_cnpjs.
     */
    cursor?: user_cnpjsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_cnpjs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_cnpjs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_cnpjs.
     */
    distinct?: User_cnpjsScalarFieldEnum | User_cnpjsScalarFieldEnum[]
  }

  /**
   * user_cnpjs findMany
   */
  export type user_cnpjsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cnpjs
     */
    select?: user_cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cnpjs
     */
    omit?: user_cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cnpjsInclude<ExtArgs> | null
    /**
     * Filter, which user_cnpjs to fetch.
     */
    where?: user_cnpjsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_cnpjs to fetch.
     */
    orderBy?: user_cnpjsOrderByWithRelationInput | user_cnpjsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_cnpjs.
     */
    cursor?: user_cnpjsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_cnpjs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_cnpjs.
     */
    skip?: number
    distinct?: User_cnpjsScalarFieldEnum | User_cnpjsScalarFieldEnum[]
  }

  /**
   * user_cnpjs create
   */
  export type user_cnpjsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cnpjs
     */
    select?: user_cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cnpjs
     */
    omit?: user_cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cnpjsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_cnpjs.
     */
    data: XOR<user_cnpjsCreateInput, user_cnpjsUncheckedCreateInput>
  }

  /**
   * user_cnpjs createMany
   */
  export type user_cnpjsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_cnpjs.
     */
    data: user_cnpjsCreateManyInput | user_cnpjsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_cnpjs update
   */
  export type user_cnpjsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cnpjs
     */
    select?: user_cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cnpjs
     */
    omit?: user_cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cnpjsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_cnpjs.
     */
    data: XOR<user_cnpjsUpdateInput, user_cnpjsUncheckedUpdateInput>
    /**
     * Choose, which user_cnpjs to update.
     */
    where: user_cnpjsWhereUniqueInput
  }

  /**
   * user_cnpjs updateMany
   */
  export type user_cnpjsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_cnpjs.
     */
    data: XOR<user_cnpjsUpdateManyMutationInput, user_cnpjsUncheckedUpdateManyInput>
    /**
     * Filter which user_cnpjs to update
     */
    where?: user_cnpjsWhereInput
    /**
     * Limit how many user_cnpjs to update.
     */
    limit?: number
  }

  /**
   * user_cnpjs upsert
   */
  export type user_cnpjsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cnpjs
     */
    select?: user_cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cnpjs
     */
    omit?: user_cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cnpjsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_cnpjs to update in case it exists.
     */
    where: user_cnpjsWhereUniqueInput
    /**
     * In case the user_cnpjs found by the `where` argument doesn't exist, create a new user_cnpjs with this data.
     */
    create: XOR<user_cnpjsCreateInput, user_cnpjsUncheckedCreateInput>
    /**
     * In case the user_cnpjs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_cnpjsUpdateInput, user_cnpjsUncheckedUpdateInput>
  }

  /**
   * user_cnpjs delete
   */
  export type user_cnpjsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cnpjs
     */
    select?: user_cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cnpjs
     */
    omit?: user_cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cnpjsInclude<ExtArgs> | null
    /**
     * Filter which user_cnpjs to delete.
     */
    where: user_cnpjsWhereUniqueInput
  }

  /**
   * user_cnpjs deleteMany
   */
  export type user_cnpjsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_cnpjs to delete
     */
    where?: user_cnpjsWhereInput
    /**
     * Limit how many user_cnpjs to delete.
     */
    limit?: number
  }

  /**
   * user_cnpjs without action
   */
  export type user_cnpjsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_cnpjs
     */
    select?: user_cnpjsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_cnpjs
     */
    omit?: user_cnpjsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_cnpjsInclude<ExtArgs> | null
  }


  /**
   * Model phones
   */

  export type AggregatePhones = {
    _count: PhonesCountAggregateOutputType | null
    _avg: PhonesAvgAggregateOutputType | null
    _sum: PhonesSumAggregateOutputType | null
    _min: PhonesMinAggregateOutputType | null
    _max: PhonesMaxAggregateOutputType | null
  }

  export type PhonesAvgAggregateOutputType = {
    id: number | null
    usersId: number | null
  }

  export type PhonesSumAggregateOutputType = {
    id: number | null
    usersId: number | null
  }

  export type PhonesMinAggregateOutputType = {
    id: number | null
    number: string | null
    phoneType: $Enums.PhoneType | null
    usersId: number | null
  }

  export type PhonesMaxAggregateOutputType = {
    id: number | null
    number: string | null
    phoneType: $Enums.PhoneType | null
    usersId: number | null
  }

  export type PhonesCountAggregateOutputType = {
    id: number
    number: number
    phoneType: number
    usersId: number
    _all: number
  }


  export type PhonesAvgAggregateInputType = {
    id?: true
    usersId?: true
  }

  export type PhonesSumAggregateInputType = {
    id?: true
    usersId?: true
  }

  export type PhonesMinAggregateInputType = {
    id?: true
    number?: true
    phoneType?: true
    usersId?: true
  }

  export type PhonesMaxAggregateInputType = {
    id?: true
    number?: true
    phoneType?: true
    usersId?: true
  }

  export type PhonesCountAggregateInputType = {
    id?: true
    number?: true
    phoneType?: true
    usersId?: true
    _all?: true
  }

  export type PhonesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which phones to aggregate.
     */
    where?: phonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phones to fetch.
     */
    orderBy?: phonesOrderByWithRelationInput | phonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: phonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned phones
    **/
    _count?: true | PhonesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhonesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhonesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhonesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhonesMaxAggregateInputType
  }

  export type GetPhonesAggregateType<T extends PhonesAggregateArgs> = {
        [P in keyof T & keyof AggregatePhones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhones[P]>
      : GetScalarType<T[P], AggregatePhones[P]>
  }




  export type phonesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: phonesWhereInput
    orderBy?: phonesOrderByWithAggregationInput | phonesOrderByWithAggregationInput[]
    by: PhonesScalarFieldEnum[] | PhonesScalarFieldEnum
    having?: phonesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhonesCountAggregateInputType | true
    _avg?: PhonesAvgAggregateInputType
    _sum?: PhonesSumAggregateInputType
    _min?: PhonesMinAggregateInputType
    _max?: PhonesMaxAggregateInputType
  }

  export type PhonesGroupByOutputType = {
    id: number
    number: string
    phoneType: $Enums.PhoneType
    usersId: number
    _count: PhonesCountAggregateOutputType | null
    _avg: PhonesAvgAggregateOutputType | null
    _sum: PhonesSumAggregateOutputType | null
    _min: PhonesMinAggregateOutputType | null
    _max: PhonesMaxAggregateOutputType | null
  }

  type GetPhonesGroupByPayload<T extends phonesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhonesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhonesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhonesGroupByOutputType[P]>
            : GetScalarType<T[P], PhonesGroupByOutputType[P]>
        }
      >
    >


  export type phonesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    phoneType?: boolean
    usersId?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phones"]>



  export type phonesSelectScalar = {
    id?: boolean
    number?: boolean
    phoneType?: boolean
    usersId?: boolean
  }

  export type phonesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "phoneType" | "usersId", ExtArgs["result"]["phones"]>
  export type phonesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $phonesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "phones"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: string
      phoneType: $Enums.PhoneType
      usersId: number
    }, ExtArgs["result"]["phones"]>
    composites: {}
  }

  type phonesGetPayload<S extends boolean | null | undefined | phonesDefaultArgs> = $Result.GetResult<Prisma.$phonesPayload, S>

  type phonesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<phonesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhonesCountAggregateInputType | true
    }

  export interface phonesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['phones'], meta: { name: 'phones' } }
    /**
     * Find zero or one Phones that matches the filter.
     * @param {phonesFindUniqueArgs} args - Arguments to find a Phones
     * @example
     * // Get one Phones
     * const phones = await prisma.phones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends phonesFindUniqueArgs>(args: SelectSubset<T, phonesFindUniqueArgs<ExtArgs>>): Prisma__phonesClient<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Phones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {phonesFindUniqueOrThrowArgs} args - Arguments to find a Phones
     * @example
     * // Get one Phones
     * const phones = await prisma.phones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends phonesFindUniqueOrThrowArgs>(args: SelectSubset<T, phonesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__phonesClient<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phonesFindFirstArgs} args - Arguments to find a Phones
     * @example
     * // Get one Phones
     * const phones = await prisma.phones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends phonesFindFirstArgs>(args?: SelectSubset<T, phonesFindFirstArgs<ExtArgs>>): Prisma__phonesClient<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phonesFindFirstOrThrowArgs} args - Arguments to find a Phones
     * @example
     * // Get one Phones
     * const phones = await prisma.phones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends phonesFindFirstOrThrowArgs>(args?: SelectSubset<T, phonesFindFirstOrThrowArgs<ExtArgs>>): Prisma__phonesClient<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Phones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phonesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phones
     * const phones = await prisma.phones.findMany()
     * 
     * // Get first 10 Phones
     * const phones = await prisma.phones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phonesWithIdOnly = await prisma.phones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends phonesFindManyArgs>(args?: SelectSubset<T, phonesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Phones.
     * @param {phonesCreateArgs} args - Arguments to create a Phones.
     * @example
     * // Create one Phones
     * const Phones = await prisma.phones.create({
     *   data: {
     *     // ... data to create a Phones
     *   }
     * })
     * 
     */
    create<T extends phonesCreateArgs>(args: SelectSubset<T, phonesCreateArgs<ExtArgs>>): Prisma__phonesClient<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Phones.
     * @param {phonesCreateManyArgs} args - Arguments to create many Phones.
     * @example
     * // Create many Phones
     * const phones = await prisma.phones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends phonesCreateManyArgs>(args?: SelectSubset<T, phonesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Phones.
     * @param {phonesDeleteArgs} args - Arguments to delete one Phones.
     * @example
     * // Delete one Phones
     * const Phones = await prisma.phones.delete({
     *   where: {
     *     // ... filter to delete one Phones
     *   }
     * })
     * 
     */
    delete<T extends phonesDeleteArgs>(args: SelectSubset<T, phonesDeleteArgs<ExtArgs>>): Prisma__phonesClient<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Phones.
     * @param {phonesUpdateArgs} args - Arguments to update one Phones.
     * @example
     * // Update one Phones
     * const phones = await prisma.phones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends phonesUpdateArgs>(args: SelectSubset<T, phonesUpdateArgs<ExtArgs>>): Prisma__phonesClient<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Phones.
     * @param {phonesDeleteManyArgs} args - Arguments to filter Phones to delete.
     * @example
     * // Delete a few Phones
     * const { count } = await prisma.phones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends phonesDeleteManyArgs>(args?: SelectSubset<T, phonesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phonesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phones
     * const phones = await prisma.phones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends phonesUpdateManyArgs>(args: SelectSubset<T, phonesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Phones.
     * @param {phonesUpsertArgs} args - Arguments to update or create a Phones.
     * @example
     * // Update or create a Phones
     * const phones = await prisma.phones.upsert({
     *   create: {
     *     // ... data to create a Phones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phones we want to update
     *   }
     * })
     */
    upsert<T extends phonesUpsertArgs>(args: SelectSubset<T, phonesUpsertArgs<ExtArgs>>): Prisma__phonesClient<$Result.GetResult<Prisma.$phonesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Phones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phonesCountArgs} args - Arguments to filter Phones to count.
     * @example
     * // Count the number of Phones
     * const count = await prisma.phones.count({
     *   where: {
     *     // ... the filter for the Phones we want to count
     *   }
     * })
    **/
    count<T extends phonesCountArgs>(
      args?: Subset<T, phonesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhonesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhonesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhonesAggregateArgs>(args: Subset<T, PhonesAggregateArgs>): Prisma.PrismaPromise<GetPhonesAggregateType<T>>

    /**
     * Group by Phones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phonesGroupByArgs} args - Group by arguments.
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
      T extends phonesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: phonesGroupByArgs['orderBy'] }
        : { orderBy?: phonesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, phonesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhonesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the phones model
   */
  readonly fields: phonesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for phones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__phonesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the phones model
   */
  interface phonesFieldRefs {
    readonly id: FieldRef<"phones", 'Int'>
    readonly number: FieldRef<"phones", 'String'>
    readonly phoneType: FieldRef<"phones", 'PhoneType'>
    readonly usersId: FieldRef<"phones", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * phones findUnique
   */
  export type phonesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * Filter, which phones to fetch.
     */
    where: phonesWhereUniqueInput
  }

  /**
   * phones findUniqueOrThrow
   */
  export type phonesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * Filter, which phones to fetch.
     */
    where: phonesWhereUniqueInput
  }

  /**
   * phones findFirst
   */
  export type phonesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * Filter, which phones to fetch.
     */
    where?: phonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phones to fetch.
     */
    orderBy?: phonesOrderByWithRelationInput | phonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for phones.
     */
    cursor?: phonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of phones.
     */
    distinct?: PhonesScalarFieldEnum | PhonesScalarFieldEnum[]
  }

  /**
   * phones findFirstOrThrow
   */
  export type phonesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * Filter, which phones to fetch.
     */
    where?: phonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phones to fetch.
     */
    orderBy?: phonesOrderByWithRelationInput | phonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for phones.
     */
    cursor?: phonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of phones.
     */
    distinct?: PhonesScalarFieldEnum | PhonesScalarFieldEnum[]
  }

  /**
   * phones findMany
   */
  export type phonesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * Filter, which phones to fetch.
     */
    where?: phonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phones to fetch.
     */
    orderBy?: phonesOrderByWithRelationInput | phonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing phones.
     */
    cursor?: phonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phones.
     */
    skip?: number
    distinct?: PhonesScalarFieldEnum | PhonesScalarFieldEnum[]
  }

  /**
   * phones create
   */
  export type phonesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * The data needed to create a phones.
     */
    data: XOR<phonesCreateInput, phonesUncheckedCreateInput>
  }

  /**
   * phones createMany
   */
  export type phonesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many phones.
     */
    data: phonesCreateManyInput | phonesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * phones update
   */
  export type phonesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * The data needed to update a phones.
     */
    data: XOR<phonesUpdateInput, phonesUncheckedUpdateInput>
    /**
     * Choose, which phones to update.
     */
    where: phonesWhereUniqueInput
  }

  /**
   * phones updateMany
   */
  export type phonesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update phones.
     */
    data: XOR<phonesUpdateManyMutationInput, phonesUncheckedUpdateManyInput>
    /**
     * Filter which phones to update
     */
    where?: phonesWhereInput
    /**
     * Limit how many phones to update.
     */
    limit?: number
  }

  /**
   * phones upsert
   */
  export type phonesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * The filter to search for the phones to update in case it exists.
     */
    where: phonesWhereUniqueInput
    /**
     * In case the phones found by the `where` argument doesn't exist, create a new phones with this data.
     */
    create: XOR<phonesCreateInput, phonesUncheckedCreateInput>
    /**
     * In case the phones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<phonesUpdateInput, phonesUncheckedUpdateInput>
  }

  /**
   * phones delete
   */
  export type phonesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
    /**
     * Filter which phones to delete.
     */
    where: phonesWhereUniqueInput
  }

  /**
   * phones deleteMany
   */
  export type phonesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which phones to delete
     */
    where?: phonesWhereInput
    /**
     * Limit how many phones to delete.
     */
    limit?: number
  }

  /**
   * phones without action
   */
  export type phonesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phones
     */
    select?: phonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phones
     */
    omit?: phonesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phonesInclude<ExtArgs> | null
  }


  /**
   * Model address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    number: number | null
    usersId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    number: number | null
    usersId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    cep: string | null
    street: string | null
    number: number | null
    complement: string | null
    city: string | null
    district: string | null
    state: string | null
    usersId: number | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    cep: string | null
    street: string | null
    number: number | null
    complement: string | null
    city: string | null
    district: string | null
    state: string | null
    usersId: number | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    cep: number
    street: number
    number: number
    complement: number
    city: number
    district: number
    state: number
    usersId: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    number?: true
    usersId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    number?: true
    usersId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    cep?: true
    street?: true
    number?: true
    complement?: true
    city?: true
    district?: true
    state?: true
    usersId?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    cep?: true
    street?: true
    number?: true
    complement?: true
    city?: true
    district?: true
    state?: true
    usersId?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    cep?: true
    street?: true
    number?: true
    complement?: true
    city?: true
    district?: true
    state?: true
    usersId?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which address to aggregate.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type addressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressWhereInput
    orderBy?: addressOrderByWithAggregationInput | addressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: addressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    cep: string
    street: string
    number: number
    complement: string
    city: string
    district: string
    state: string
    usersId: number
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends addressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type addressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cep?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    city?: boolean
    district?: boolean
    state?: boolean
    usersId?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>



  export type addressSelectScalar = {
    id?: boolean
    cep?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    city?: boolean
    district?: boolean
    state?: boolean
    usersId?: boolean
  }

  export type addressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cep" | "street" | "number" | "complement" | "city" | "district" | "state" | "usersId", ExtArgs["result"]["address"]>
  export type addressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $addressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "address"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cep: string
      street: string
      number: number
      complement: string
      city: string
      district: string
      state: string
      usersId: number
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type addressGetPayload<S extends boolean | null | undefined | addressDefaultArgs> = $Result.GetResult<Prisma.$addressPayload, S>

  type addressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<addressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface addressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['address'], meta: { name: 'address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {addressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends addressFindUniqueArgs>(args: SelectSubset<T, addressFindUniqueArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {addressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends addressFindUniqueOrThrowArgs>(args: SelectSubset<T, addressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends addressFindFirstArgs>(args?: SelectSubset<T, addressFindFirstArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends addressFindFirstOrThrowArgs>(args?: SelectSubset<T, addressFindFirstOrThrowArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends addressFindManyArgs>(args?: SelectSubset<T, addressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {addressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends addressCreateArgs>(args: SelectSubset<T, addressCreateArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {addressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends addressCreateManyArgs>(args?: SelectSubset<T, addressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {addressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends addressDeleteArgs>(args: SelectSubset<T, addressDeleteArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {addressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends addressUpdateArgs>(args: SelectSubset<T, addressUpdateArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {addressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends addressDeleteManyArgs>(args?: SelectSubset<T, addressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends addressUpdateManyArgs>(args: SelectSubset<T, addressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {addressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends addressUpsertArgs>(args: SelectSubset<T, addressUpsertArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends addressCountArgs>(
      args?: Subset<T, addressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressGroupByArgs} args - Group by arguments.
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
      T extends addressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: addressGroupByArgs['orderBy'] }
        : { orderBy?: addressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, addressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the address model
   */
  readonly fields: addressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__addressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the address model
   */
  interface addressFieldRefs {
    readonly id: FieldRef<"address", 'Int'>
    readonly cep: FieldRef<"address", 'String'>
    readonly street: FieldRef<"address", 'String'>
    readonly number: FieldRef<"address", 'Int'>
    readonly complement: FieldRef<"address", 'String'>
    readonly city: FieldRef<"address", 'String'>
    readonly district: FieldRef<"address", 'String'>
    readonly state: FieldRef<"address", 'String'>
    readonly usersId: FieldRef<"address", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * address findUnique
   */
  export type addressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address findUniqueOrThrow
   */
  export type addressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address findFirst
   */
  export type addressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * address findFirstOrThrow
   */
  export type addressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * address findMany
   */
  export type addressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * address create
   */
  export type addressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The data needed to create a address.
     */
    data: XOR<addressCreateInput, addressUncheckedCreateInput>
  }

  /**
   * address createMany
   */
  export type addressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many addresses.
     */
    data: addressCreateManyInput | addressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * address update
   */
  export type addressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The data needed to update a address.
     */
    data: XOR<addressUpdateInput, addressUncheckedUpdateInput>
    /**
     * Choose, which address to update.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address updateMany
   */
  export type addressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update addresses.
     */
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
  }

  /**
   * address upsert
   */
  export type addressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The filter to search for the address to update in case it exists.
     */
    where: addressWhereUniqueInput
    /**
     * In case the address found by the `where` argument doesn't exist, create a new address with this data.
     */
    create: XOR<addressCreateInput, addressUncheckedCreateInput>
    /**
     * In case the address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addressUpdateInput, addressUncheckedUpdateInput>
  }

  /**
   * address delete
   */
  export type addressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter which address to delete.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address deleteMany
   */
  export type addressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to delete
     */
    where?: addressWhereInput
    /**
     * Limit how many addresses to delete.
     */
    limit?: number
  }

  /**
   * address without action
   */
  export type addressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
  }


  /**
   * Model emails
   */

  export type AggregateEmails = {
    _count: EmailsCountAggregateOutputType | null
    _avg: EmailsAvgAggregateOutputType | null
    _sum: EmailsSumAggregateOutputType | null
    _min: EmailsMinAggregateOutputType | null
    _max: EmailsMaxAggregateOutputType | null
  }

  export type EmailsAvgAggregateOutputType = {
    id: number | null
    usersId: number | null
  }

  export type EmailsSumAggregateOutputType = {
    id: number | null
    usersId: number | null
  }

  export type EmailsMinAggregateOutputType = {
    id: number | null
    email: string | null
    usersId: number | null
  }

  export type EmailsMaxAggregateOutputType = {
    id: number | null
    email: string | null
    usersId: number | null
  }

  export type EmailsCountAggregateOutputType = {
    id: number
    email: number
    usersId: number
    _all: number
  }


  export type EmailsAvgAggregateInputType = {
    id?: true
    usersId?: true
  }

  export type EmailsSumAggregateInputType = {
    id?: true
    usersId?: true
  }

  export type EmailsMinAggregateInputType = {
    id?: true
    email?: true
    usersId?: true
  }

  export type EmailsMaxAggregateInputType = {
    id?: true
    email?: true
    usersId?: true
  }

  export type EmailsCountAggregateInputType = {
    id?: true
    email?: true
    usersId?: true
    _all?: true
  }

  export type EmailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which emails to aggregate.
     */
    where?: emailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emails to fetch.
     */
    orderBy?: emailsOrderByWithRelationInput | emailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: emailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned emails
    **/
    _count?: true | EmailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailsMaxAggregateInputType
  }

  export type GetEmailsAggregateType<T extends EmailsAggregateArgs> = {
        [P in keyof T & keyof AggregateEmails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmails[P]>
      : GetScalarType<T[P], AggregateEmails[P]>
  }




  export type emailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: emailsWhereInput
    orderBy?: emailsOrderByWithAggregationInput | emailsOrderByWithAggregationInput[]
    by: EmailsScalarFieldEnum[] | EmailsScalarFieldEnum
    having?: emailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailsCountAggregateInputType | true
    _avg?: EmailsAvgAggregateInputType
    _sum?: EmailsSumAggregateInputType
    _min?: EmailsMinAggregateInputType
    _max?: EmailsMaxAggregateInputType
  }

  export type EmailsGroupByOutputType = {
    id: number
    email: string
    usersId: number
    _count: EmailsCountAggregateOutputType | null
    _avg: EmailsAvgAggregateOutputType | null
    _sum: EmailsSumAggregateOutputType | null
    _min: EmailsMinAggregateOutputType | null
    _max: EmailsMaxAggregateOutputType | null
  }

  type GetEmailsGroupByPayload<T extends emailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailsGroupByOutputType[P]>
            : GetScalarType<T[P], EmailsGroupByOutputType[P]>
        }
      >
    >


  export type emailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    usersId?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emails"]>



  export type emailsSelectScalar = {
    id?: boolean
    email?: boolean
    usersId?: boolean
  }

  export type emailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "usersId", ExtArgs["result"]["emails"]>
  export type emailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $emailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "emails"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      usersId: number
    }, ExtArgs["result"]["emails"]>
    composites: {}
  }

  type emailsGetPayload<S extends boolean | null | undefined | emailsDefaultArgs> = $Result.GetResult<Prisma.$emailsPayload, S>

  type emailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<emailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailsCountAggregateInputType | true
    }

  export interface emailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['emails'], meta: { name: 'emails' } }
    /**
     * Find zero or one Emails that matches the filter.
     * @param {emailsFindUniqueArgs} args - Arguments to find a Emails
     * @example
     * // Get one Emails
     * const emails = await prisma.emails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends emailsFindUniqueArgs>(args: SelectSubset<T, emailsFindUniqueArgs<ExtArgs>>): Prisma__emailsClient<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {emailsFindUniqueOrThrowArgs} args - Arguments to find a Emails
     * @example
     * // Get one Emails
     * const emails = await prisma.emails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends emailsFindUniqueOrThrowArgs>(args: SelectSubset<T, emailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__emailsClient<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emailsFindFirstArgs} args - Arguments to find a Emails
     * @example
     * // Get one Emails
     * const emails = await prisma.emails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends emailsFindFirstArgs>(args?: SelectSubset<T, emailsFindFirstArgs<ExtArgs>>): Prisma__emailsClient<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emailsFindFirstOrThrowArgs} args - Arguments to find a Emails
     * @example
     * // Get one Emails
     * const emails = await prisma.emails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends emailsFindFirstOrThrowArgs>(args?: SelectSubset<T, emailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__emailsClient<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emails
     * const emails = await prisma.emails.findMany()
     * 
     * // Get first 10 Emails
     * const emails = await prisma.emails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailsWithIdOnly = await prisma.emails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends emailsFindManyArgs>(args?: SelectSubset<T, emailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emails.
     * @param {emailsCreateArgs} args - Arguments to create a Emails.
     * @example
     * // Create one Emails
     * const Emails = await prisma.emails.create({
     *   data: {
     *     // ... data to create a Emails
     *   }
     * })
     * 
     */
    create<T extends emailsCreateArgs>(args: SelectSubset<T, emailsCreateArgs<ExtArgs>>): Prisma__emailsClient<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emails.
     * @param {emailsCreateManyArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const emails = await prisma.emails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends emailsCreateManyArgs>(args?: SelectSubset<T, emailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Emails.
     * @param {emailsDeleteArgs} args - Arguments to delete one Emails.
     * @example
     * // Delete one Emails
     * const Emails = await prisma.emails.delete({
     *   where: {
     *     // ... filter to delete one Emails
     *   }
     * })
     * 
     */
    delete<T extends emailsDeleteArgs>(args: SelectSubset<T, emailsDeleteArgs<ExtArgs>>): Prisma__emailsClient<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emails.
     * @param {emailsUpdateArgs} args - Arguments to update one Emails.
     * @example
     * // Update one Emails
     * const emails = await prisma.emails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends emailsUpdateArgs>(args: SelectSubset<T, emailsUpdateArgs<ExtArgs>>): Prisma__emailsClient<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emails.
     * @param {emailsDeleteManyArgs} args - Arguments to filter Emails to delete.
     * @example
     * // Delete a few Emails
     * const { count } = await prisma.emails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends emailsDeleteManyArgs>(args?: SelectSubset<T, emailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emails
     * const emails = await prisma.emails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends emailsUpdateManyArgs>(args: SelectSubset<T, emailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Emails.
     * @param {emailsUpsertArgs} args - Arguments to update or create a Emails.
     * @example
     * // Update or create a Emails
     * const emails = await prisma.emails.upsert({
     *   create: {
     *     // ... data to create a Emails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emails we want to update
     *   }
     * })
     */
    upsert<T extends emailsUpsertArgs>(args: SelectSubset<T, emailsUpsertArgs<ExtArgs>>): Prisma__emailsClient<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emailsCountArgs} args - Arguments to filter Emails to count.
     * @example
     * // Count the number of Emails
     * const count = await prisma.emails.count({
     *   where: {
     *     // ... the filter for the Emails we want to count
     *   }
     * })
    **/
    count<T extends emailsCountArgs>(
      args?: Subset<T, emailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailsAggregateArgs>(args: Subset<T, EmailsAggregateArgs>): Prisma.PrismaPromise<GetEmailsAggregateType<T>>

    /**
     * Group by Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emailsGroupByArgs} args - Group by arguments.
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
      T extends emailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: emailsGroupByArgs['orderBy'] }
        : { orderBy?: emailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, emailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the emails model
   */
  readonly fields: emailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for emails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__emailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the emails model
   */
  interface emailsFieldRefs {
    readonly id: FieldRef<"emails", 'Int'>
    readonly email: FieldRef<"emails", 'String'>
    readonly usersId: FieldRef<"emails", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * emails findUnique
   */
  export type emailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * Filter, which emails to fetch.
     */
    where: emailsWhereUniqueInput
  }

  /**
   * emails findUniqueOrThrow
   */
  export type emailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * Filter, which emails to fetch.
     */
    where: emailsWhereUniqueInput
  }

  /**
   * emails findFirst
   */
  export type emailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * Filter, which emails to fetch.
     */
    where?: emailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emails to fetch.
     */
    orderBy?: emailsOrderByWithRelationInput | emailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for emails.
     */
    cursor?: emailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of emails.
     */
    distinct?: EmailsScalarFieldEnum | EmailsScalarFieldEnum[]
  }

  /**
   * emails findFirstOrThrow
   */
  export type emailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * Filter, which emails to fetch.
     */
    where?: emailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emails to fetch.
     */
    orderBy?: emailsOrderByWithRelationInput | emailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for emails.
     */
    cursor?: emailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of emails.
     */
    distinct?: EmailsScalarFieldEnum | EmailsScalarFieldEnum[]
  }

  /**
   * emails findMany
   */
  export type emailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * Filter, which emails to fetch.
     */
    where?: emailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emails to fetch.
     */
    orderBy?: emailsOrderByWithRelationInput | emailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing emails.
     */
    cursor?: emailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emails.
     */
    skip?: number
    distinct?: EmailsScalarFieldEnum | EmailsScalarFieldEnum[]
  }

  /**
   * emails create
   */
  export type emailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * The data needed to create a emails.
     */
    data: XOR<emailsCreateInput, emailsUncheckedCreateInput>
  }

  /**
   * emails createMany
   */
  export type emailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many emails.
     */
    data: emailsCreateManyInput | emailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * emails update
   */
  export type emailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * The data needed to update a emails.
     */
    data: XOR<emailsUpdateInput, emailsUncheckedUpdateInput>
    /**
     * Choose, which emails to update.
     */
    where: emailsWhereUniqueInput
  }

  /**
   * emails updateMany
   */
  export type emailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update emails.
     */
    data: XOR<emailsUpdateManyMutationInput, emailsUncheckedUpdateManyInput>
    /**
     * Filter which emails to update
     */
    where?: emailsWhereInput
    /**
     * Limit how many emails to update.
     */
    limit?: number
  }

  /**
   * emails upsert
   */
  export type emailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * The filter to search for the emails to update in case it exists.
     */
    where: emailsWhereUniqueInput
    /**
     * In case the emails found by the `where` argument doesn't exist, create a new emails with this data.
     */
    create: XOR<emailsCreateInput, emailsUncheckedCreateInput>
    /**
     * In case the emails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<emailsUpdateInput, emailsUncheckedUpdateInput>
  }

  /**
   * emails delete
   */
  export type emailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * Filter which emails to delete.
     */
    where: emailsWhereUniqueInput
  }

  /**
   * emails deleteMany
   */
  export type emailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which emails to delete
     */
    where?: emailsWhereInput
    /**
     * Limit how many emails to delete.
     */
    limit?: number
  }

  /**
   * emails without action
   */
  export type emailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cpf: 'cpf',
    personType: 'personType'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CnpjsScalarFieldEnum: {
    id: 'id',
    number: 'number'
  };

  export type CnpjsScalarFieldEnum = (typeof CnpjsScalarFieldEnum)[keyof typeof CnpjsScalarFieldEnum]


  export const User_cnpjsScalarFieldEnum: {
    id: 'id',
    usersId: 'usersId',
    cnpjsId: 'cnpjsId'
  };

  export type User_cnpjsScalarFieldEnum = (typeof User_cnpjsScalarFieldEnum)[keyof typeof User_cnpjsScalarFieldEnum]


  export const PhonesScalarFieldEnum: {
    id: 'id',
    number: 'number',
    phoneType: 'phoneType',
    usersId: 'usersId'
  };

  export type PhonesScalarFieldEnum = (typeof PhonesScalarFieldEnum)[keyof typeof PhonesScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    cep: 'cep',
    street: 'street',
    number: 'number',
    complement: 'complement',
    city: 'city',
    district: 'district',
    state: 'state',
    usersId: 'usersId'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const EmailsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    usersId: 'usersId'
  };

  export type EmailsScalarFieldEnum = (typeof EmailsScalarFieldEnum)[keyof typeof EmailsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const usersOrderByRelevanceFieldEnum: {
    name: 'name',
    cpf: 'cpf'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const cnpjsOrderByRelevanceFieldEnum: {
    number: 'number'
  };

  export type cnpjsOrderByRelevanceFieldEnum = (typeof cnpjsOrderByRelevanceFieldEnum)[keyof typeof cnpjsOrderByRelevanceFieldEnum]


  export const phonesOrderByRelevanceFieldEnum: {
    number: 'number'
  };

  export type phonesOrderByRelevanceFieldEnum = (typeof phonesOrderByRelevanceFieldEnum)[keyof typeof phonesOrderByRelevanceFieldEnum]


  export const addressOrderByRelevanceFieldEnum: {
    cep: 'cep',
    street: 'street',
    complement: 'complement',
    city: 'city',
    district: 'district',
    state: 'state'
  };

  export type addressOrderByRelevanceFieldEnum = (typeof addressOrderByRelevanceFieldEnum)[keyof typeof addressOrderByRelevanceFieldEnum]


  export const emailsOrderByRelevanceFieldEnum: {
    email: 'email'
  };

  export type emailsOrderByRelevanceFieldEnum = (typeof emailsOrderByRelevanceFieldEnum)[keyof typeof emailsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'PersonType'
   */
  export type EnumPersonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PersonType'>
    


  /**
   * Reference to a field of type 'PhoneType'
   */
  export type EnumPhoneTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhoneType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    cpf?: StringFilter<"users"> | string
    personType?: EnumPersonTypeFilter<"users"> | $Enums.PersonType
    user_cnpjs?: User_cnpjsListRelationFilter
    phones?: PhonesListRelationFilter
    address?: AddressListRelationFilter
    emails?: EmailsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    personType?: SortOrder
    user_cnpjs?: user_cnpjsOrderByRelationAggregateInput
    phones?: phonesOrderByRelationAggregateInput
    address?: addressOrderByRelationAggregateInput
    emails?: emailsOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    cpf?: StringFilter<"users"> | string
    personType?: EnumPersonTypeFilter<"users"> | $Enums.PersonType
    user_cnpjs?: User_cnpjsListRelationFilter
    phones?: PhonesListRelationFilter
    address?: AddressListRelationFilter
    emails?: EmailsListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    personType?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    cpf?: StringWithAggregatesFilter<"users"> | string
    personType?: EnumPersonTypeWithAggregatesFilter<"users"> | $Enums.PersonType
  }

  export type cnpjsWhereInput = {
    AND?: cnpjsWhereInput | cnpjsWhereInput[]
    OR?: cnpjsWhereInput[]
    NOT?: cnpjsWhereInput | cnpjsWhereInput[]
    id?: IntFilter<"cnpjs"> | number
    number?: StringFilter<"cnpjs"> | string
    user_cnpjs?: User_cnpjsListRelationFilter
  }

  export type cnpjsOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    user_cnpjs?: user_cnpjsOrderByRelationAggregateInput
    _relevance?: cnpjsOrderByRelevanceInput
  }

  export type cnpjsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cnpjsWhereInput | cnpjsWhereInput[]
    OR?: cnpjsWhereInput[]
    NOT?: cnpjsWhereInput | cnpjsWhereInput[]
    number?: StringFilter<"cnpjs"> | string
    user_cnpjs?: User_cnpjsListRelationFilter
  }, "id">

  export type cnpjsOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    _count?: cnpjsCountOrderByAggregateInput
    _avg?: cnpjsAvgOrderByAggregateInput
    _max?: cnpjsMaxOrderByAggregateInput
    _min?: cnpjsMinOrderByAggregateInput
    _sum?: cnpjsSumOrderByAggregateInput
  }

  export type cnpjsScalarWhereWithAggregatesInput = {
    AND?: cnpjsScalarWhereWithAggregatesInput | cnpjsScalarWhereWithAggregatesInput[]
    OR?: cnpjsScalarWhereWithAggregatesInput[]
    NOT?: cnpjsScalarWhereWithAggregatesInput | cnpjsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cnpjs"> | number
    number?: StringWithAggregatesFilter<"cnpjs"> | string
  }

  export type user_cnpjsWhereInput = {
    AND?: user_cnpjsWhereInput | user_cnpjsWhereInput[]
    OR?: user_cnpjsWhereInput[]
    NOT?: user_cnpjsWhereInput | user_cnpjsWhereInput[]
    id?: IntFilter<"user_cnpjs"> | number
    usersId?: IntFilter<"user_cnpjs"> | number
    cnpjsId?: IntFilter<"user_cnpjs"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    cnpj?: XOR<CnpjsScalarRelationFilter, cnpjsWhereInput>
  }

  export type user_cnpjsOrderByWithRelationInput = {
    id?: SortOrder
    usersId?: SortOrder
    cnpjsId?: SortOrder
    user?: usersOrderByWithRelationInput
    cnpj?: cnpjsOrderByWithRelationInput
  }

  export type user_cnpjsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_cnpjsWhereInput | user_cnpjsWhereInput[]
    OR?: user_cnpjsWhereInput[]
    NOT?: user_cnpjsWhereInput | user_cnpjsWhereInput[]
    usersId?: IntFilter<"user_cnpjs"> | number
    cnpjsId?: IntFilter<"user_cnpjs"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    cnpj?: XOR<CnpjsScalarRelationFilter, cnpjsWhereInput>
  }, "id">

  export type user_cnpjsOrderByWithAggregationInput = {
    id?: SortOrder
    usersId?: SortOrder
    cnpjsId?: SortOrder
    _count?: user_cnpjsCountOrderByAggregateInput
    _avg?: user_cnpjsAvgOrderByAggregateInput
    _max?: user_cnpjsMaxOrderByAggregateInput
    _min?: user_cnpjsMinOrderByAggregateInput
    _sum?: user_cnpjsSumOrderByAggregateInput
  }

  export type user_cnpjsScalarWhereWithAggregatesInput = {
    AND?: user_cnpjsScalarWhereWithAggregatesInput | user_cnpjsScalarWhereWithAggregatesInput[]
    OR?: user_cnpjsScalarWhereWithAggregatesInput[]
    NOT?: user_cnpjsScalarWhereWithAggregatesInput | user_cnpjsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_cnpjs"> | number
    usersId?: IntWithAggregatesFilter<"user_cnpjs"> | number
    cnpjsId?: IntWithAggregatesFilter<"user_cnpjs"> | number
  }

  export type phonesWhereInput = {
    AND?: phonesWhereInput | phonesWhereInput[]
    OR?: phonesWhereInput[]
    NOT?: phonesWhereInput | phonesWhereInput[]
    id?: IntFilter<"phones"> | number
    number?: StringFilter<"phones"> | string
    phoneType?: EnumPhoneTypeFilter<"phones"> | $Enums.PhoneType
    usersId?: IntFilter<"phones"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type phonesOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    phoneType?: SortOrder
    usersId?: SortOrder
    user?: usersOrderByWithRelationInput
    _relevance?: phonesOrderByRelevanceInput
  }

  export type phonesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: phonesWhereInput | phonesWhereInput[]
    OR?: phonesWhereInput[]
    NOT?: phonesWhereInput | phonesWhereInput[]
    number?: StringFilter<"phones"> | string
    phoneType?: EnumPhoneTypeFilter<"phones"> | $Enums.PhoneType
    usersId?: IntFilter<"phones"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type phonesOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    phoneType?: SortOrder
    usersId?: SortOrder
    _count?: phonesCountOrderByAggregateInput
    _avg?: phonesAvgOrderByAggregateInput
    _max?: phonesMaxOrderByAggregateInput
    _min?: phonesMinOrderByAggregateInput
    _sum?: phonesSumOrderByAggregateInput
  }

  export type phonesScalarWhereWithAggregatesInput = {
    AND?: phonesScalarWhereWithAggregatesInput | phonesScalarWhereWithAggregatesInput[]
    OR?: phonesScalarWhereWithAggregatesInput[]
    NOT?: phonesScalarWhereWithAggregatesInput | phonesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"phones"> | number
    number?: StringWithAggregatesFilter<"phones"> | string
    phoneType?: EnumPhoneTypeWithAggregatesFilter<"phones"> | $Enums.PhoneType
    usersId?: IntWithAggregatesFilter<"phones"> | number
  }

  export type addressWhereInput = {
    AND?: addressWhereInput | addressWhereInput[]
    OR?: addressWhereInput[]
    NOT?: addressWhereInput | addressWhereInput[]
    id?: IntFilter<"address"> | number
    cep?: StringFilter<"address"> | string
    street?: StringFilter<"address"> | string
    number?: IntFilter<"address"> | number
    complement?: StringFilter<"address"> | string
    city?: StringFilter<"address"> | string
    district?: StringFilter<"address"> | string
    state?: StringFilter<"address"> | string
    usersId?: IntFilter<"address"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type addressOrderByWithRelationInput = {
    id?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    city?: SortOrder
    district?: SortOrder
    state?: SortOrder
    usersId?: SortOrder
    user?: usersOrderByWithRelationInput
    _relevance?: addressOrderByRelevanceInput
  }

  export type addressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: addressWhereInput | addressWhereInput[]
    OR?: addressWhereInput[]
    NOT?: addressWhereInput | addressWhereInput[]
    cep?: StringFilter<"address"> | string
    street?: StringFilter<"address"> | string
    number?: IntFilter<"address"> | number
    complement?: StringFilter<"address"> | string
    city?: StringFilter<"address"> | string
    district?: StringFilter<"address"> | string
    state?: StringFilter<"address"> | string
    usersId?: IntFilter<"address"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type addressOrderByWithAggregationInput = {
    id?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    city?: SortOrder
    district?: SortOrder
    state?: SortOrder
    usersId?: SortOrder
    _count?: addressCountOrderByAggregateInput
    _avg?: addressAvgOrderByAggregateInput
    _max?: addressMaxOrderByAggregateInput
    _min?: addressMinOrderByAggregateInput
    _sum?: addressSumOrderByAggregateInput
  }

  export type addressScalarWhereWithAggregatesInput = {
    AND?: addressScalarWhereWithAggregatesInput | addressScalarWhereWithAggregatesInput[]
    OR?: addressScalarWhereWithAggregatesInput[]
    NOT?: addressScalarWhereWithAggregatesInput | addressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"address"> | number
    cep?: StringWithAggregatesFilter<"address"> | string
    street?: StringWithAggregatesFilter<"address"> | string
    number?: IntWithAggregatesFilter<"address"> | number
    complement?: StringWithAggregatesFilter<"address"> | string
    city?: StringWithAggregatesFilter<"address"> | string
    district?: StringWithAggregatesFilter<"address"> | string
    state?: StringWithAggregatesFilter<"address"> | string
    usersId?: IntWithAggregatesFilter<"address"> | number
  }

  export type emailsWhereInput = {
    AND?: emailsWhereInput | emailsWhereInput[]
    OR?: emailsWhereInput[]
    NOT?: emailsWhereInput | emailsWhereInput[]
    id?: IntFilter<"emails"> | number
    email?: StringFilter<"emails"> | string
    usersId?: IntFilter<"emails"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type emailsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    usersId?: SortOrder
    user?: usersOrderByWithRelationInput
    _relevance?: emailsOrderByRelevanceInput
  }

  export type emailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: emailsWhereInput | emailsWhereInput[]
    OR?: emailsWhereInput[]
    NOT?: emailsWhereInput | emailsWhereInput[]
    email?: StringFilter<"emails"> | string
    usersId?: IntFilter<"emails"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type emailsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    usersId?: SortOrder
    _count?: emailsCountOrderByAggregateInput
    _avg?: emailsAvgOrderByAggregateInput
    _max?: emailsMaxOrderByAggregateInput
    _min?: emailsMinOrderByAggregateInput
    _sum?: emailsSumOrderByAggregateInput
  }

  export type emailsScalarWhereWithAggregatesInput = {
    AND?: emailsScalarWhereWithAggregatesInput | emailsScalarWhereWithAggregatesInput[]
    OR?: emailsScalarWhereWithAggregatesInput[]
    NOT?: emailsScalarWhereWithAggregatesInput | emailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"emails"> | number
    email?: StringWithAggregatesFilter<"emails"> | string
    usersId?: IntWithAggregatesFilter<"emails"> | number
  }

  export type usersCreateInput = {
    name: string
    cpf: string
    personType: $Enums.PersonType
    user_cnpjs?: user_cnpjsCreateNestedManyWithoutUserInput
    phones?: phonesCreateNestedManyWithoutUserInput
    address?: addressCreateNestedManyWithoutUserInput
    emails?: emailsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    cpf: string
    personType: $Enums.PersonType
    user_cnpjs?: user_cnpjsUncheckedCreateNestedManyWithoutUserInput
    phones?: phonesUncheckedCreateNestedManyWithoutUserInput
    address?: addressUncheckedCreateNestedManyWithoutUserInput
    emails?: emailsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    personType?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    user_cnpjs?: user_cnpjsUpdateManyWithoutUserNestedInput
    phones?: phonesUpdateManyWithoutUserNestedInput
    address?: addressUpdateManyWithoutUserNestedInput
    emails?: emailsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    personType?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    user_cnpjs?: user_cnpjsUncheckedUpdateManyWithoutUserNestedInput
    phones?: phonesUncheckedUpdateManyWithoutUserNestedInput
    address?: addressUncheckedUpdateManyWithoutUserNestedInput
    emails?: emailsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    cpf: string
    personType: $Enums.PersonType
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    personType?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    personType?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
  }

  export type cnpjsCreateInput = {
    number: string
    user_cnpjs?: user_cnpjsCreateNestedManyWithoutCnpjInput
  }

  export type cnpjsUncheckedCreateInput = {
    id?: number
    number: string
    user_cnpjs?: user_cnpjsUncheckedCreateNestedManyWithoutCnpjInput
  }

  export type cnpjsUpdateInput = {
    number?: StringFieldUpdateOperationsInput | string
    user_cnpjs?: user_cnpjsUpdateManyWithoutCnpjNestedInput
  }

  export type cnpjsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    user_cnpjs?: user_cnpjsUncheckedUpdateManyWithoutCnpjNestedInput
  }

  export type cnpjsCreateManyInput = {
    id?: number
    number: string
  }

  export type cnpjsUpdateManyMutationInput = {
    number?: StringFieldUpdateOperationsInput | string
  }

  export type cnpjsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
  }

  export type user_cnpjsCreateInput = {
    user: usersCreateNestedOneWithoutUser_cnpjsInput
    cnpj: cnpjsCreateNestedOneWithoutUser_cnpjsInput
  }

  export type user_cnpjsUncheckedCreateInput = {
    id?: number
    usersId: number
    cnpjsId: number
  }

  export type user_cnpjsUpdateInput = {
    user?: usersUpdateOneRequiredWithoutUser_cnpjsNestedInput
    cnpj?: cnpjsUpdateOneRequiredWithoutUser_cnpjsNestedInput
  }

  export type user_cnpjsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usersId?: IntFieldUpdateOperationsInput | number
    cnpjsId?: IntFieldUpdateOperationsInput | number
  }

  export type user_cnpjsCreateManyInput = {
    id?: number
    usersId: number
    cnpjsId: number
  }

  export type user_cnpjsUpdateManyMutationInput = {

  }

  export type user_cnpjsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usersId?: IntFieldUpdateOperationsInput | number
    cnpjsId?: IntFieldUpdateOperationsInput | number
  }

  export type phonesCreateInput = {
    number: string
    phoneType: $Enums.PhoneType
    user: usersCreateNestedOneWithoutPhonesInput
  }

  export type phonesUncheckedCreateInput = {
    id?: number
    number: string
    phoneType: $Enums.PhoneType
    usersId: number
  }

  export type phonesUpdateInput = {
    number?: StringFieldUpdateOperationsInput | string
    phoneType?: EnumPhoneTypeFieldUpdateOperationsInput | $Enums.PhoneType
    user?: usersUpdateOneRequiredWithoutPhonesNestedInput
  }

  export type phonesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    phoneType?: EnumPhoneTypeFieldUpdateOperationsInput | $Enums.PhoneType
    usersId?: IntFieldUpdateOperationsInput | number
  }

  export type phonesCreateManyInput = {
    id?: number
    number: string
    phoneType: $Enums.PhoneType
    usersId: number
  }

  export type phonesUpdateManyMutationInput = {
    number?: StringFieldUpdateOperationsInput | string
    phoneType?: EnumPhoneTypeFieldUpdateOperationsInput | $Enums.PhoneType
  }

  export type phonesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    phoneType?: EnumPhoneTypeFieldUpdateOperationsInput | $Enums.PhoneType
    usersId?: IntFieldUpdateOperationsInput | number
  }

  export type addressCreateInput = {
    cep: string
    street: string
    number: number
    complement: string
    city: string
    district: string
    state: string
    user: usersCreateNestedOneWithoutAddressInput
  }

  export type addressUncheckedCreateInput = {
    id?: number
    cep: string
    street: string
    number: number
    complement: string
    city: string
    district: string
    state: string
    usersId: number
  }

  export type addressUpdateInput = {
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    user?: usersUpdateOneRequiredWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    usersId?: IntFieldUpdateOperationsInput | number
  }

  export type addressCreateManyInput = {
    id?: number
    cep: string
    street: string
    number: number
    complement: string
    city: string
    district: string
    state: string
    usersId: number
  }

  export type addressUpdateManyMutationInput = {
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
  }

  export type addressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    usersId?: IntFieldUpdateOperationsInput | number
  }

  export type emailsCreateInput = {
    email: string
    user: usersCreateNestedOneWithoutEmailsInput
  }

  export type emailsUncheckedCreateInput = {
    id?: number
    email: string
    usersId: number
  }

  export type emailsUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    user?: usersUpdateOneRequiredWithoutEmailsNestedInput
  }

  export type emailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    usersId?: IntFieldUpdateOperationsInput | number
  }

  export type emailsCreateManyInput = {
    id?: number
    email: string
    usersId: number
  }

  export type emailsUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type emailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    usersId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumPersonTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonType | EnumPersonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PersonType[]
    notIn?: $Enums.PersonType[]
    not?: NestedEnumPersonTypeFilter<$PrismaModel> | $Enums.PersonType
  }

  export type User_cnpjsListRelationFilter = {
    every?: user_cnpjsWhereInput
    some?: user_cnpjsWhereInput
    none?: user_cnpjsWhereInput
  }

  export type PhonesListRelationFilter = {
    every?: phonesWhereInput
    some?: phonesWhereInput
    none?: phonesWhereInput
  }

  export type AddressListRelationFilter = {
    every?: addressWhereInput
    some?: addressWhereInput
    none?: addressWhereInput
  }

  export type EmailsListRelationFilter = {
    every?: emailsWhereInput
    some?: emailsWhereInput
    none?: emailsWhereInput
  }

  export type user_cnpjsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type phonesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type addressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type emailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    personType?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    personType?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    personType?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumPersonTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonType | EnumPersonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PersonType[]
    notIn?: $Enums.PersonType[]
    not?: NestedEnumPersonTypeWithAggregatesFilter<$PrismaModel> | $Enums.PersonType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPersonTypeFilter<$PrismaModel>
    _max?: NestedEnumPersonTypeFilter<$PrismaModel>
  }

  export type cnpjsOrderByRelevanceInput = {
    fields: cnpjsOrderByRelevanceFieldEnum | cnpjsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cnpjsCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type cnpjsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cnpjsMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type cnpjsMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type cnpjsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type CnpjsScalarRelationFilter = {
    is?: cnpjsWhereInput
    isNot?: cnpjsWhereInput
  }

  export type user_cnpjsCountOrderByAggregateInput = {
    id?: SortOrder
    usersId?: SortOrder
    cnpjsId?: SortOrder
  }

  export type user_cnpjsAvgOrderByAggregateInput = {
    id?: SortOrder
    usersId?: SortOrder
    cnpjsId?: SortOrder
  }

  export type user_cnpjsMaxOrderByAggregateInput = {
    id?: SortOrder
    usersId?: SortOrder
    cnpjsId?: SortOrder
  }

  export type user_cnpjsMinOrderByAggregateInput = {
    id?: SortOrder
    usersId?: SortOrder
    cnpjsId?: SortOrder
  }

  export type user_cnpjsSumOrderByAggregateInput = {
    id?: SortOrder
    usersId?: SortOrder
    cnpjsId?: SortOrder
  }

  export type EnumPhoneTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PhoneType | EnumPhoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PhoneType[]
    notIn?: $Enums.PhoneType[]
    not?: NestedEnumPhoneTypeFilter<$PrismaModel> | $Enums.PhoneType
  }

  export type phonesOrderByRelevanceInput = {
    fields: phonesOrderByRelevanceFieldEnum | phonesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type phonesCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    phoneType?: SortOrder
    usersId?: SortOrder
  }

  export type phonesAvgOrderByAggregateInput = {
    id?: SortOrder
    usersId?: SortOrder
  }

  export type phonesMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    phoneType?: SortOrder
    usersId?: SortOrder
  }

  export type phonesMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    phoneType?: SortOrder
    usersId?: SortOrder
  }

  export type phonesSumOrderByAggregateInput = {
    id?: SortOrder
    usersId?: SortOrder
  }

  export type EnumPhoneTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhoneType | EnumPhoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PhoneType[]
    notIn?: $Enums.PhoneType[]
    not?: NestedEnumPhoneTypeWithAggregatesFilter<$PrismaModel> | $Enums.PhoneType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPhoneTypeFilter<$PrismaModel>
    _max?: NestedEnumPhoneTypeFilter<$PrismaModel>
  }

  export type addressOrderByRelevanceInput = {
    fields: addressOrderByRelevanceFieldEnum | addressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type addressCountOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    city?: SortOrder
    district?: SortOrder
    state?: SortOrder
    usersId?: SortOrder
  }

  export type addressAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    usersId?: SortOrder
  }

  export type addressMaxOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    city?: SortOrder
    district?: SortOrder
    state?: SortOrder
    usersId?: SortOrder
  }

  export type addressMinOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    city?: SortOrder
    district?: SortOrder
    state?: SortOrder
    usersId?: SortOrder
  }

  export type addressSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    usersId?: SortOrder
  }

  export type emailsOrderByRelevanceInput = {
    fields: emailsOrderByRelevanceFieldEnum | emailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type emailsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    usersId?: SortOrder
  }

  export type emailsAvgOrderByAggregateInput = {
    id?: SortOrder
    usersId?: SortOrder
  }

  export type emailsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    usersId?: SortOrder
  }

  export type emailsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    usersId?: SortOrder
  }

  export type emailsSumOrderByAggregateInput = {
    id?: SortOrder
    usersId?: SortOrder
  }

  export type user_cnpjsCreateNestedManyWithoutUserInput = {
    create?: XOR<user_cnpjsCreateWithoutUserInput, user_cnpjsUncheckedCreateWithoutUserInput> | user_cnpjsCreateWithoutUserInput[] | user_cnpjsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_cnpjsCreateOrConnectWithoutUserInput | user_cnpjsCreateOrConnectWithoutUserInput[]
    createMany?: user_cnpjsCreateManyUserInputEnvelope
    connect?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
  }

  export type phonesCreateNestedManyWithoutUserInput = {
    create?: XOR<phonesCreateWithoutUserInput, phonesUncheckedCreateWithoutUserInput> | phonesCreateWithoutUserInput[] | phonesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: phonesCreateOrConnectWithoutUserInput | phonesCreateOrConnectWithoutUserInput[]
    createMany?: phonesCreateManyUserInputEnvelope
    connect?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
  }

  export type addressCreateNestedManyWithoutUserInput = {
    create?: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput> | addressCreateWithoutUserInput[] | addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressCreateOrConnectWithoutUserInput | addressCreateOrConnectWithoutUserInput[]
    createMany?: addressCreateManyUserInputEnvelope
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
  }

  export type emailsCreateNestedManyWithoutUserInput = {
    create?: XOR<emailsCreateWithoutUserInput, emailsUncheckedCreateWithoutUserInput> | emailsCreateWithoutUserInput[] | emailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: emailsCreateOrConnectWithoutUserInput | emailsCreateOrConnectWithoutUserInput[]
    createMany?: emailsCreateManyUserInputEnvelope
    connect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
  }

  export type user_cnpjsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_cnpjsCreateWithoutUserInput, user_cnpjsUncheckedCreateWithoutUserInput> | user_cnpjsCreateWithoutUserInput[] | user_cnpjsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_cnpjsCreateOrConnectWithoutUserInput | user_cnpjsCreateOrConnectWithoutUserInput[]
    createMany?: user_cnpjsCreateManyUserInputEnvelope
    connect?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
  }

  export type phonesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<phonesCreateWithoutUserInput, phonesUncheckedCreateWithoutUserInput> | phonesCreateWithoutUserInput[] | phonesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: phonesCreateOrConnectWithoutUserInput | phonesCreateOrConnectWithoutUserInput[]
    createMany?: phonesCreateManyUserInputEnvelope
    connect?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
  }

  export type addressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput> | addressCreateWithoutUserInput[] | addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressCreateOrConnectWithoutUserInput | addressCreateOrConnectWithoutUserInput[]
    createMany?: addressCreateManyUserInputEnvelope
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
  }

  export type emailsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<emailsCreateWithoutUserInput, emailsUncheckedCreateWithoutUserInput> | emailsCreateWithoutUserInput[] | emailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: emailsCreateOrConnectWithoutUserInput | emailsCreateOrConnectWithoutUserInput[]
    createMany?: emailsCreateManyUserInputEnvelope
    connect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPersonTypeFieldUpdateOperationsInput = {
    set?: $Enums.PersonType
  }

  export type user_cnpjsUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_cnpjsCreateWithoutUserInput, user_cnpjsUncheckedCreateWithoutUserInput> | user_cnpjsCreateWithoutUserInput[] | user_cnpjsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_cnpjsCreateOrConnectWithoutUserInput | user_cnpjsCreateOrConnectWithoutUserInput[]
    upsert?: user_cnpjsUpsertWithWhereUniqueWithoutUserInput | user_cnpjsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_cnpjsCreateManyUserInputEnvelope
    set?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
    disconnect?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
    delete?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
    connect?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
    update?: user_cnpjsUpdateWithWhereUniqueWithoutUserInput | user_cnpjsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_cnpjsUpdateManyWithWhereWithoutUserInput | user_cnpjsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_cnpjsScalarWhereInput | user_cnpjsScalarWhereInput[]
  }

  export type phonesUpdateManyWithoutUserNestedInput = {
    create?: XOR<phonesCreateWithoutUserInput, phonesUncheckedCreateWithoutUserInput> | phonesCreateWithoutUserInput[] | phonesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: phonesCreateOrConnectWithoutUserInput | phonesCreateOrConnectWithoutUserInput[]
    upsert?: phonesUpsertWithWhereUniqueWithoutUserInput | phonesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: phonesCreateManyUserInputEnvelope
    set?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
    disconnect?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
    delete?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
    connect?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
    update?: phonesUpdateWithWhereUniqueWithoutUserInput | phonesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: phonesUpdateManyWithWhereWithoutUserInput | phonesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: phonesScalarWhereInput | phonesScalarWhereInput[]
  }

  export type addressUpdateManyWithoutUserNestedInput = {
    create?: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput> | addressCreateWithoutUserInput[] | addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressCreateOrConnectWithoutUserInput | addressCreateOrConnectWithoutUserInput[]
    upsert?: addressUpsertWithWhereUniqueWithoutUserInput | addressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: addressCreateManyUserInputEnvelope
    set?: addressWhereUniqueInput | addressWhereUniqueInput[]
    disconnect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    delete?: addressWhereUniqueInput | addressWhereUniqueInput[]
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    update?: addressUpdateWithWhereUniqueWithoutUserInput | addressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: addressUpdateManyWithWhereWithoutUserInput | addressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: addressScalarWhereInput | addressScalarWhereInput[]
  }

  export type emailsUpdateManyWithoutUserNestedInput = {
    create?: XOR<emailsCreateWithoutUserInput, emailsUncheckedCreateWithoutUserInput> | emailsCreateWithoutUserInput[] | emailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: emailsCreateOrConnectWithoutUserInput | emailsCreateOrConnectWithoutUserInput[]
    upsert?: emailsUpsertWithWhereUniqueWithoutUserInput | emailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: emailsCreateManyUserInputEnvelope
    set?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    disconnect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    delete?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    connect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    update?: emailsUpdateWithWhereUniqueWithoutUserInput | emailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: emailsUpdateManyWithWhereWithoutUserInput | emailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: emailsScalarWhereInput | emailsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type user_cnpjsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_cnpjsCreateWithoutUserInput, user_cnpjsUncheckedCreateWithoutUserInput> | user_cnpjsCreateWithoutUserInput[] | user_cnpjsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_cnpjsCreateOrConnectWithoutUserInput | user_cnpjsCreateOrConnectWithoutUserInput[]
    upsert?: user_cnpjsUpsertWithWhereUniqueWithoutUserInput | user_cnpjsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_cnpjsCreateManyUserInputEnvelope
    set?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
    disconnect?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
    delete?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
    connect?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
    update?: user_cnpjsUpdateWithWhereUniqueWithoutUserInput | user_cnpjsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_cnpjsUpdateManyWithWhereWithoutUserInput | user_cnpjsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_cnpjsScalarWhereInput | user_cnpjsScalarWhereInput[]
  }

  export type phonesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<phonesCreateWithoutUserInput, phonesUncheckedCreateWithoutUserInput> | phonesCreateWithoutUserInput[] | phonesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: phonesCreateOrConnectWithoutUserInput | phonesCreateOrConnectWithoutUserInput[]
    upsert?: phonesUpsertWithWhereUniqueWithoutUserInput | phonesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: phonesCreateManyUserInputEnvelope
    set?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
    disconnect?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
    delete?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
    connect?: phonesWhereUniqueInput | phonesWhereUniqueInput[]
    update?: phonesUpdateWithWhereUniqueWithoutUserInput | phonesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: phonesUpdateManyWithWhereWithoutUserInput | phonesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: phonesScalarWhereInput | phonesScalarWhereInput[]
  }

  export type addressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput> | addressCreateWithoutUserInput[] | addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressCreateOrConnectWithoutUserInput | addressCreateOrConnectWithoutUserInput[]
    upsert?: addressUpsertWithWhereUniqueWithoutUserInput | addressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: addressCreateManyUserInputEnvelope
    set?: addressWhereUniqueInput | addressWhereUniqueInput[]
    disconnect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    delete?: addressWhereUniqueInput | addressWhereUniqueInput[]
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    update?: addressUpdateWithWhereUniqueWithoutUserInput | addressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: addressUpdateManyWithWhereWithoutUserInput | addressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: addressScalarWhereInput | addressScalarWhereInput[]
  }

  export type emailsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<emailsCreateWithoutUserInput, emailsUncheckedCreateWithoutUserInput> | emailsCreateWithoutUserInput[] | emailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: emailsCreateOrConnectWithoutUserInput | emailsCreateOrConnectWithoutUserInput[]
    upsert?: emailsUpsertWithWhereUniqueWithoutUserInput | emailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: emailsCreateManyUserInputEnvelope
    set?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    disconnect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    delete?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    connect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    update?: emailsUpdateWithWhereUniqueWithoutUserInput | emailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: emailsUpdateManyWithWhereWithoutUserInput | emailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: emailsScalarWhereInput | emailsScalarWhereInput[]
  }

  export type user_cnpjsCreateNestedManyWithoutCnpjInput = {
    create?: XOR<user_cnpjsCreateWithoutCnpjInput, user_cnpjsUncheckedCreateWithoutCnpjInput> | user_cnpjsCreateWithoutCnpjInput[] | user_cnpjsUncheckedCreateWithoutCnpjInput[]
    connectOrCreate?: user_cnpjsCreateOrConnectWithoutCnpjInput | user_cnpjsCreateOrConnectWithoutCnpjInput[]
    createMany?: user_cnpjsCreateManyCnpjInputEnvelope
    connect?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
  }

  export type user_cnpjsUncheckedCreateNestedManyWithoutCnpjInput = {
    create?: XOR<user_cnpjsCreateWithoutCnpjInput, user_cnpjsUncheckedCreateWithoutCnpjInput> | user_cnpjsCreateWithoutCnpjInput[] | user_cnpjsUncheckedCreateWithoutCnpjInput[]
    connectOrCreate?: user_cnpjsCreateOrConnectWithoutCnpjInput | user_cnpjsCreateOrConnectWithoutCnpjInput[]
    createMany?: user_cnpjsCreateManyCnpjInputEnvelope
    connect?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
  }

  export type user_cnpjsUpdateManyWithoutCnpjNestedInput = {
    create?: XOR<user_cnpjsCreateWithoutCnpjInput, user_cnpjsUncheckedCreateWithoutCnpjInput> | user_cnpjsCreateWithoutCnpjInput[] | user_cnpjsUncheckedCreateWithoutCnpjInput[]
    connectOrCreate?: user_cnpjsCreateOrConnectWithoutCnpjInput | user_cnpjsCreateOrConnectWithoutCnpjInput[]
    upsert?: user_cnpjsUpsertWithWhereUniqueWithoutCnpjInput | user_cnpjsUpsertWithWhereUniqueWithoutCnpjInput[]
    createMany?: user_cnpjsCreateManyCnpjInputEnvelope
    set?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
    disconnect?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
    delete?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
    connect?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
    update?: user_cnpjsUpdateWithWhereUniqueWithoutCnpjInput | user_cnpjsUpdateWithWhereUniqueWithoutCnpjInput[]
    updateMany?: user_cnpjsUpdateManyWithWhereWithoutCnpjInput | user_cnpjsUpdateManyWithWhereWithoutCnpjInput[]
    deleteMany?: user_cnpjsScalarWhereInput | user_cnpjsScalarWhereInput[]
  }

  export type user_cnpjsUncheckedUpdateManyWithoutCnpjNestedInput = {
    create?: XOR<user_cnpjsCreateWithoutCnpjInput, user_cnpjsUncheckedCreateWithoutCnpjInput> | user_cnpjsCreateWithoutCnpjInput[] | user_cnpjsUncheckedCreateWithoutCnpjInput[]
    connectOrCreate?: user_cnpjsCreateOrConnectWithoutCnpjInput | user_cnpjsCreateOrConnectWithoutCnpjInput[]
    upsert?: user_cnpjsUpsertWithWhereUniqueWithoutCnpjInput | user_cnpjsUpsertWithWhereUniqueWithoutCnpjInput[]
    createMany?: user_cnpjsCreateManyCnpjInputEnvelope
    set?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
    disconnect?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
    delete?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
    connect?: user_cnpjsWhereUniqueInput | user_cnpjsWhereUniqueInput[]
    update?: user_cnpjsUpdateWithWhereUniqueWithoutCnpjInput | user_cnpjsUpdateWithWhereUniqueWithoutCnpjInput[]
    updateMany?: user_cnpjsUpdateManyWithWhereWithoutCnpjInput | user_cnpjsUpdateManyWithWhereWithoutCnpjInput[]
    deleteMany?: user_cnpjsScalarWhereInput | user_cnpjsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUser_cnpjsInput = {
    create?: XOR<usersCreateWithoutUser_cnpjsInput, usersUncheckedCreateWithoutUser_cnpjsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_cnpjsInput
    connect?: usersWhereUniqueInput
  }

  export type cnpjsCreateNestedOneWithoutUser_cnpjsInput = {
    create?: XOR<cnpjsCreateWithoutUser_cnpjsInput, cnpjsUncheckedCreateWithoutUser_cnpjsInput>
    connectOrCreate?: cnpjsCreateOrConnectWithoutUser_cnpjsInput
    connect?: cnpjsWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUser_cnpjsNestedInput = {
    create?: XOR<usersCreateWithoutUser_cnpjsInput, usersUncheckedCreateWithoutUser_cnpjsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_cnpjsInput
    upsert?: usersUpsertWithoutUser_cnpjsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_cnpjsInput, usersUpdateWithoutUser_cnpjsInput>, usersUncheckedUpdateWithoutUser_cnpjsInput>
  }

  export type cnpjsUpdateOneRequiredWithoutUser_cnpjsNestedInput = {
    create?: XOR<cnpjsCreateWithoutUser_cnpjsInput, cnpjsUncheckedCreateWithoutUser_cnpjsInput>
    connectOrCreate?: cnpjsCreateOrConnectWithoutUser_cnpjsInput
    upsert?: cnpjsUpsertWithoutUser_cnpjsInput
    connect?: cnpjsWhereUniqueInput
    update?: XOR<XOR<cnpjsUpdateToOneWithWhereWithoutUser_cnpjsInput, cnpjsUpdateWithoutUser_cnpjsInput>, cnpjsUncheckedUpdateWithoutUser_cnpjsInput>
  }

  export type usersCreateNestedOneWithoutPhonesInput = {
    create?: XOR<usersCreateWithoutPhonesInput, usersUncheckedCreateWithoutPhonesInput>
    connectOrCreate?: usersCreateOrConnectWithoutPhonesInput
    connect?: usersWhereUniqueInput
  }

  export type EnumPhoneTypeFieldUpdateOperationsInput = {
    set?: $Enums.PhoneType
  }

  export type usersUpdateOneRequiredWithoutPhonesNestedInput = {
    create?: XOR<usersCreateWithoutPhonesInput, usersUncheckedCreateWithoutPhonesInput>
    connectOrCreate?: usersCreateOrConnectWithoutPhonesInput
    upsert?: usersUpsertWithoutPhonesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPhonesInput, usersUpdateWithoutPhonesInput>, usersUncheckedUpdateWithoutPhonesInput>
  }

  export type usersCreateNestedOneWithoutAddressInput = {
    create?: XOR<usersCreateWithoutAddressInput, usersUncheckedCreateWithoutAddressInput>
    connectOrCreate?: usersCreateOrConnectWithoutAddressInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<usersCreateWithoutAddressInput, usersUncheckedCreateWithoutAddressInput>
    connectOrCreate?: usersCreateOrConnectWithoutAddressInput
    upsert?: usersUpsertWithoutAddressInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAddressInput, usersUpdateWithoutAddressInput>, usersUncheckedUpdateWithoutAddressInput>
  }

  export type usersCreateNestedOneWithoutEmailsInput = {
    create?: XOR<usersCreateWithoutEmailsInput, usersUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEmailsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutEmailsNestedInput = {
    create?: XOR<usersCreateWithoutEmailsInput, usersUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEmailsInput
    upsert?: usersUpsertWithoutEmailsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutEmailsInput, usersUpdateWithoutEmailsInput>, usersUncheckedUpdateWithoutEmailsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumPersonTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonType | EnumPersonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PersonType[]
    notIn?: $Enums.PersonType[]
    not?: NestedEnumPersonTypeFilter<$PrismaModel> | $Enums.PersonType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumPersonTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonType | EnumPersonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PersonType[]
    notIn?: $Enums.PersonType[]
    not?: NestedEnumPersonTypeWithAggregatesFilter<$PrismaModel> | $Enums.PersonType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPersonTypeFilter<$PrismaModel>
    _max?: NestedEnumPersonTypeFilter<$PrismaModel>
  }

  export type NestedEnumPhoneTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PhoneType | EnumPhoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PhoneType[]
    notIn?: $Enums.PhoneType[]
    not?: NestedEnumPhoneTypeFilter<$PrismaModel> | $Enums.PhoneType
  }

  export type NestedEnumPhoneTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhoneType | EnumPhoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PhoneType[]
    notIn?: $Enums.PhoneType[]
    not?: NestedEnumPhoneTypeWithAggregatesFilter<$PrismaModel> | $Enums.PhoneType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPhoneTypeFilter<$PrismaModel>
    _max?: NestedEnumPhoneTypeFilter<$PrismaModel>
  }

  export type user_cnpjsCreateWithoutUserInput = {
    cnpj: cnpjsCreateNestedOneWithoutUser_cnpjsInput
  }

  export type user_cnpjsUncheckedCreateWithoutUserInput = {
    id?: number
    cnpjsId: number
  }

  export type user_cnpjsCreateOrConnectWithoutUserInput = {
    where: user_cnpjsWhereUniqueInput
    create: XOR<user_cnpjsCreateWithoutUserInput, user_cnpjsUncheckedCreateWithoutUserInput>
  }

  export type user_cnpjsCreateManyUserInputEnvelope = {
    data: user_cnpjsCreateManyUserInput | user_cnpjsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type phonesCreateWithoutUserInput = {
    number: string
    phoneType: $Enums.PhoneType
  }

  export type phonesUncheckedCreateWithoutUserInput = {
    id?: number
    number: string
    phoneType: $Enums.PhoneType
  }

  export type phonesCreateOrConnectWithoutUserInput = {
    where: phonesWhereUniqueInput
    create: XOR<phonesCreateWithoutUserInput, phonesUncheckedCreateWithoutUserInput>
  }

  export type phonesCreateManyUserInputEnvelope = {
    data: phonesCreateManyUserInput | phonesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type addressCreateWithoutUserInput = {
    cep: string
    street: string
    number: number
    complement: string
    city: string
    district: string
    state: string
  }

  export type addressUncheckedCreateWithoutUserInput = {
    id?: number
    cep: string
    street: string
    number: number
    complement: string
    city: string
    district: string
    state: string
  }

  export type addressCreateOrConnectWithoutUserInput = {
    where: addressWhereUniqueInput
    create: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput>
  }

  export type addressCreateManyUserInputEnvelope = {
    data: addressCreateManyUserInput | addressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type emailsCreateWithoutUserInput = {
    email: string
  }

  export type emailsUncheckedCreateWithoutUserInput = {
    id?: number
    email: string
  }

  export type emailsCreateOrConnectWithoutUserInput = {
    where: emailsWhereUniqueInput
    create: XOR<emailsCreateWithoutUserInput, emailsUncheckedCreateWithoutUserInput>
  }

  export type emailsCreateManyUserInputEnvelope = {
    data: emailsCreateManyUserInput | emailsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_cnpjsUpsertWithWhereUniqueWithoutUserInput = {
    where: user_cnpjsWhereUniqueInput
    update: XOR<user_cnpjsUpdateWithoutUserInput, user_cnpjsUncheckedUpdateWithoutUserInput>
    create: XOR<user_cnpjsCreateWithoutUserInput, user_cnpjsUncheckedCreateWithoutUserInput>
  }

  export type user_cnpjsUpdateWithWhereUniqueWithoutUserInput = {
    where: user_cnpjsWhereUniqueInput
    data: XOR<user_cnpjsUpdateWithoutUserInput, user_cnpjsUncheckedUpdateWithoutUserInput>
  }

  export type user_cnpjsUpdateManyWithWhereWithoutUserInput = {
    where: user_cnpjsScalarWhereInput
    data: XOR<user_cnpjsUpdateManyMutationInput, user_cnpjsUncheckedUpdateManyWithoutUserInput>
  }

  export type user_cnpjsScalarWhereInput = {
    AND?: user_cnpjsScalarWhereInput | user_cnpjsScalarWhereInput[]
    OR?: user_cnpjsScalarWhereInput[]
    NOT?: user_cnpjsScalarWhereInput | user_cnpjsScalarWhereInput[]
    id?: IntFilter<"user_cnpjs"> | number
    usersId?: IntFilter<"user_cnpjs"> | number
    cnpjsId?: IntFilter<"user_cnpjs"> | number
  }

  export type phonesUpsertWithWhereUniqueWithoutUserInput = {
    where: phonesWhereUniqueInput
    update: XOR<phonesUpdateWithoutUserInput, phonesUncheckedUpdateWithoutUserInput>
    create: XOR<phonesCreateWithoutUserInput, phonesUncheckedCreateWithoutUserInput>
  }

  export type phonesUpdateWithWhereUniqueWithoutUserInput = {
    where: phonesWhereUniqueInput
    data: XOR<phonesUpdateWithoutUserInput, phonesUncheckedUpdateWithoutUserInput>
  }

  export type phonesUpdateManyWithWhereWithoutUserInput = {
    where: phonesScalarWhereInput
    data: XOR<phonesUpdateManyMutationInput, phonesUncheckedUpdateManyWithoutUserInput>
  }

  export type phonesScalarWhereInput = {
    AND?: phonesScalarWhereInput | phonesScalarWhereInput[]
    OR?: phonesScalarWhereInput[]
    NOT?: phonesScalarWhereInput | phonesScalarWhereInput[]
    id?: IntFilter<"phones"> | number
    number?: StringFilter<"phones"> | string
    phoneType?: EnumPhoneTypeFilter<"phones"> | $Enums.PhoneType
    usersId?: IntFilter<"phones"> | number
  }

  export type addressUpsertWithWhereUniqueWithoutUserInput = {
    where: addressWhereUniqueInput
    update: XOR<addressUpdateWithoutUserInput, addressUncheckedUpdateWithoutUserInput>
    create: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput>
  }

  export type addressUpdateWithWhereUniqueWithoutUserInput = {
    where: addressWhereUniqueInput
    data: XOR<addressUpdateWithoutUserInput, addressUncheckedUpdateWithoutUserInput>
  }

  export type addressUpdateManyWithWhereWithoutUserInput = {
    where: addressScalarWhereInput
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyWithoutUserInput>
  }

  export type addressScalarWhereInput = {
    AND?: addressScalarWhereInput | addressScalarWhereInput[]
    OR?: addressScalarWhereInput[]
    NOT?: addressScalarWhereInput | addressScalarWhereInput[]
    id?: IntFilter<"address"> | number
    cep?: StringFilter<"address"> | string
    street?: StringFilter<"address"> | string
    number?: IntFilter<"address"> | number
    complement?: StringFilter<"address"> | string
    city?: StringFilter<"address"> | string
    district?: StringFilter<"address"> | string
    state?: StringFilter<"address"> | string
    usersId?: IntFilter<"address"> | number
  }

  export type emailsUpsertWithWhereUniqueWithoutUserInput = {
    where: emailsWhereUniqueInput
    update: XOR<emailsUpdateWithoutUserInput, emailsUncheckedUpdateWithoutUserInput>
    create: XOR<emailsCreateWithoutUserInput, emailsUncheckedCreateWithoutUserInput>
  }

  export type emailsUpdateWithWhereUniqueWithoutUserInput = {
    where: emailsWhereUniqueInput
    data: XOR<emailsUpdateWithoutUserInput, emailsUncheckedUpdateWithoutUserInput>
  }

  export type emailsUpdateManyWithWhereWithoutUserInput = {
    where: emailsScalarWhereInput
    data: XOR<emailsUpdateManyMutationInput, emailsUncheckedUpdateManyWithoutUserInput>
  }

  export type emailsScalarWhereInput = {
    AND?: emailsScalarWhereInput | emailsScalarWhereInput[]
    OR?: emailsScalarWhereInput[]
    NOT?: emailsScalarWhereInput | emailsScalarWhereInput[]
    id?: IntFilter<"emails"> | number
    email?: StringFilter<"emails"> | string
    usersId?: IntFilter<"emails"> | number
  }

  export type user_cnpjsCreateWithoutCnpjInput = {
    user: usersCreateNestedOneWithoutUser_cnpjsInput
  }

  export type user_cnpjsUncheckedCreateWithoutCnpjInput = {
    id?: number
    usersId: number
  }

  export type user_cnpjsCreateOrConnectWithoutCnpjInput = {
    where: user_cnpjsWhereUniqueInput
    create: XOR<user_cnpjsCreateWithoutCnpjInput, user_cnpjsUncheckedCreateWithoutCnpjInput>
  }

  export type user_cnpjsCreateManyCnpjInputEnvelope = {
    data: user_cnpjsCreateManyCnpjInput | user_cnpjsCreateManyCnpjInput[]
    skipDuplicates?: boolean
  }

  export type user_cnpjsUpsertWithWhereUniqueWithoutCnpjInput = {
    where: user_cnpjsWhereUniqueInput
    update: XOR<user_cnpjsUpdateWithoutCnpjInput, user_cnpjsUncheckedUpdateWithoutCnpjInput>
    create: XOR<user_cnpjsCreateWithoutCnpjInput, user_cnpjsUncheckedCreateWithoutCnpjInput>
  }

  export type user_cnpjsUpdateWithWhereUniqueWithoutCnpjInput = {
    where: user_cnpjsWhereUniqueInput
    data: XOR<user_cnpjsUpdateWithoutCnpjInput, user_cnpjsUncheckedUpdateWithoutCnpjInput>
  }

  export type user_cnpjsUpdateManyWithWhereWithoutCnpjInput = {
    where: user_cnpjsScalarWhereInput
    data: XOR<user_cnpjsUpdateManyMutationInput, user_cnpjsUncheckedUpdateManyWithoutCnpjInput>
  }

  export type usersCreateWithoutUser_cnpjsInput = {
    name: string
    cpf: string
    personType: $Enums.PersonType
    phones?: phonesCreateNestedManyWithoutUserInput
    address?: addressCreateNestedManyWithoutUserInput
    emails?: emailsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutUser_cnpjsInput = {
    id?: number
    name: string
    cpf: string
    personType: $Enums.PersonType
    phones?: phonesUncheckedCreateNestedManyWithoutUserInput
    address?: addressUncheckedCreateNestedManyWithoutUserInput
    emails?: emailsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutUser_cnpjsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_cnpjsInput, usersUncheckedCreateWithoutUser_cnpjsInput>
  }

  export type cnpjsCreateWithoutUser_cnpjsInput = {
    number: string
  }

  export type cnpjsUncheckedCreateWithoutUser_cnpjsInput = {
    id?: number
    number: string
  }

  export type cnpjsCreateOrConnectWithoutUser_cnpjsInput = {
    where: cnpjsWhereUniqueInput
    create: XOR<cnpjsCreateWithoutUser_cnpjsInput, cnpjsUncheckedCreateWithoutUser_cnpjsInput>
  }

  export type usersUpsertWithoutUser_cnpjsInput = {
    update: XOR<usersUpdateWithoutUser_cnpjsInput, usersUncheckedUpdateWithoutUser_cnpjsInput>
    create: XOR<usersCreateWithoutUser_cnpjsInput, usersUncheckedCreateWithoutUser_cnpjsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_cnpjsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_cnpjsInput, usersUncheckedUpdateWithoutUser_cnpjsInput>
  }

  export type usersUpdateWithoutUser_cnpjsInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    personType?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    phones?: phonesUpdateManyWithoutUserNestedInput
    address?: addressUpdateManyWithoutUserNestedInput
    emails?: emailsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_cnpjsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    personType?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    phones?: phonesUncheckedUpdateManyWithoutUserNestedInput
    address?: addressUncheckedUpdateManyWithoutUserNestedInput
    emails?: emailsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type cnpjsUpsertWithoutUser_cnpjsInput = {
    update: XOR<cnpjsUpdateWithoutUser_cnpjsInput, cnpjsUncheckedUpdateWithoutUser_cnpjsInput>
    create: XOR<cnpjsCreateWithoutUser_cnpjsInput, cnpjsUncheckedCreateWithoutUser_cnpjsInput>
    where?: cnpjsWhereInput
  }

  export type cnpjsUpdateToOneWithWhereWithoutUser_cnpjsInput = {
    where?: cnpjsWhereInput
    data: XOR<cnpjsUpdateWithoutUser_cnpjsInput, cnpjsUncheckedUpdateWithoutUser_cnpjsInput>
  }

  export type cnpjsUpdateWithoutUser_cnpjsInput = {
    number?: StringFieldUpdateOperationsInput | string
  }

  export type cnpjsUncheckedUpdateWithoutUser_cnpjsInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateWithoutPhonesInput = {
    name: string
    cpf: string
    personType: $Enums.PersonType
    user_cnpjs?: user_cnpjsCreateNestedManyWithoutUserInput
    address?: addressCreateNestedManyWithoutUserInput
    emails?: emailsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPhonesInput = {
    id?: number
    name: string
    cpf: string
    personType: $Enums.PersonType
    user_cnpjs?: user_cnpjsUncheckedCreateNestedManyWithoutUserInput
    address?: addressUncheckedCreateNestedManyWithoutUserInput
    emails?: emailsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPhonesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPhonesInput, usersUncheckedCreateWithoutPhonesInput>
  }

  export type usersUpsertWithoutPhonesInput = {
    update: XOR<usersUpdateWithoutPhonesInput, usersUncheckedUpdateWithoutPhonesInput>
    create: XOR<usersCreateWithoutPhonesInput, usersUncheckedCreateWithoutPhonesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPhonesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPhonesInput, usersUncheckedUpdateWithoutPhonesInput>
  }

  export type usersUpdateWithoutPhonesInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    personType?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    user_cnpjs?: user_cnpjsUpdateManyWithoutUserNestedInput
    address?: addressUpdateManyWithoutUserNestedInput
    emails?: emailsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPhonesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    personType?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    user_cnpjs?: user_cnpjsUncheckedUpdateManyWithoutUserNestedInput
    address?: addressUncheckedUpdateManyWithoutUserNestedInput
    emails?: emailsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutAddressInput = {
    name: string
    cpf: string
    personType: $Enums.PersonType
    user_cnpjs?: user_cnpjsCreateNestedManyWithoutUserInput
    phones?: phonesCreateNestedManyWithoutUserInput
    emails?: emailsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutAddressInput = {
    id?: number
    name: string
    cpf: string
    personType: $Enums.PersonType
    user_cnpjs?: user_cnpjsUncheckedCreateNestedManyWithoutUserInput
    phones?: phonesUncheckedCreateNestedManyWithoutUserInput
    emails?: emailsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutAddressInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAddressInput, usersUncheckedCreateWithoutAddressInput>
  }

  export type usersUpsertWithoutAddressInput = {
    update: XOR<usersUpdateWithoutAddressInput, usersUncheckedUpdateWithoutAddressInput>
    create: XOR<usersCreateWithoutAddressInput, usersUncheckedCreateWithoutAddressInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAddressInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAddressInput, usersUncheckedUpdateWithoutAddressInput>
  }

  export type usersUpdateWithoutAddressInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    personType?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    user_cnpjs?: user_cnpjsUpdateManyWithoutUserNestedInput
    phones?: phonesUpdateManyWithoutUserNestedInput
    emails?: emailsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    personType?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    user_cnpjs?: user_cnpjsUncheckedUpdateManyWithoutUserNestedInput
    phones?: phonesUncheckedUpdateManyWithoutUserNestedInput
    emails?: emailsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutEmailsInput = {
    name: string
    cpf: string
    personType: $Enums.PersonType
    user_cnpjs?: user_cnpjsCreateNestedManyWithoutUserInput
    phones?: phonesCreateNestedManyWithoutUserInput
    address?: addressCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutEmailsInput = {
    id?: number
    name: string
    cpf: string
    personType: $Enums.PersonType
    user_cnpjs?: user_cnpjsUncheckedCreateNestedManyWithoutUserInput
    phones?: phonesUncheckedCreateNestedManyWithoutUserInput
    address?: addressUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutEmailsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEmailsInput, usersUncheckedCreateWithoutEmailsInput>
  }

  export type usersUpsertWithoutEmailsInput = {
    update: XOR<usersUpdateWithoutEmailsInput, usersUncheckedUpdateWithoutEmailsInput>
    create: XOR<usersCreateWithoutEmailsInput, usersUncheckedCreateWithoutEmailsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutEmailsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutEmailsInput, usersUncheckedUpdateWithoutEmailsInput>
  }

  export type usersUpdateWithoutEmailsInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    personType?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    user_cnpjs?: user_cnpjsUpdateManyWithoutUserNestedInput
    phones?: phonesUpdateManyWithoutUserNestedInput
    address?: addressUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutEmailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    personType?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    user_cnpjs?: user_cnpjsUncheckedUpdateManyWithoutUserNestedInput
    phones?: phonesUncheckedUpdateManyWithoutUserNestedInput
    address?: addressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type user_cnpjsCreateManyUserInput = {
    id?: number
    cnpjsId: number
  }

  export type phonesCreateManyUserInput = {
    id?: number
    number: string
    phoneType: $Enums.PhoneType
  }

  export type addressCreateManyUserInput = {
    id?: number
    cep: string
    street: string
    number: number
    complement: string
    city: string
    district: string
    state: string
  }

  export type emailsCreateManyUserInput = {
    id?: number
    email: string
  }

  export type user_cnpjsUpdateWithoutUserInput = {
    cnpj?: cnpjsUpdateOneRequiredWithoutUser_cnpjsNestedInput
  }

  export type user_cnpjsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpjsId?: IntFieldUpdateOperationsInput | number
  }

  export type user_cnpjsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpjsId?: IntFieldUpdateOperationsInput | number
  }

  export type phonesUpdateWithoutUserInput = {
    number?: StringFieldUpdateOperationsInput | string
    phoneType?: EnumPhoneTypeFieldUpdateOperationsInput | $Enums.PhoneType
  }

  export type phonesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    phoneType?: EnumPhoneTypeFieldUpdateOperationsInput | $Enums.PhoneType
  }

  export type phonesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    phoneType?: EnumPhoneTypeFieldUpdateOperationsInput | $Enums.PhoneType
  }

  export type addressUpdateWithoutUserInput = {
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
  }

  export type addressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
  }

  export type addressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
  }

  export type emailsUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type emailsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type emailsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type user_cnpjsCreateManyCnpjInput = {
    id?: number
    usersId: number
  }

  export type user_cnpjsUpdateWithoutCnpjInput = {
    user?: usersUpdateOneRequiredWithoutUser_cnpjsNestedInput
  }

  export type user_cnpjsUncheckedUpdateWithoutCnpjInput = {
    id?: IntFieldUpdateOperationsInput | number
    usersId?: IntFieldUpdateOperationsInput | number
  }

  export type user_cnpjsUncheckedUpdateManyWithoutCnpjInput = {
    id?: IntFieldUpdateOperationsInput | number
    usersId?: IntFieldUpdateOperationsInput | number
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