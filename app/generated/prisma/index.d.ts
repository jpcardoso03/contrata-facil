
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Habilidade
 * 
 */
export type Habilidade = $Result.DefaultSelection<Prisma.$HabilidadePayload>
/**
 * Model PrestadorHabilidade
 * 
 */
export type PrestadorHabilidade = $Result.DefaultSelection<Prisma.$PrestadorHabilidadePayload>
/**
 * Model Proposta
 * 
 */
export type Proposta = $Result.DefaultSelection<Prisma.$PropostaPayload>
/**
 * Model Servico
 * 
 */
export type Servico = $Result.DefaultSelection<Prisma.$ServicoPayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EnumTipoUsuario: {
  CONTRATANTE: 'CONTRATANTE',
  PRESTADOR: 'PRESTADOR',
  ADMINISTRADOR: 'ADMINISTRADOR'
};

export type EnumTipoUsuario = (typeof EnumTipoUsuario)[keyof typeof EnumTipoUsuario]


export const EnumStatusProposta: {
  PENDENTE: 'PENDENTE',
  ACEITA: 'ACEITA',
  RECUSADA: 'RECUSADA',
  EM_ANDAMENTO: 'EM_ANDAMENTO',
  CONCLUIDA: 'CONCLUIDA',
  CANCELADA: 'CANCELADA'
};

export type EnumStatusProposta = (typeof EnumStatusProposta)[keyof typeof EnumStatusProposta]


export const EnumNivelProeficiencia: {
  INICIANTE: 'INICIANTE',
  INTERMEDIARIO: 'INTERMEDIARIO',
  EXPERIENTE: 'EXPERIENTE'
};

export type EnumNivelProeficiencia = (typeof EnumNivelProeficiencia)[keyof typeof EnumNivelProeficiencia]

}

export type EnumTipoUsuario = $Enums.EnumTipoUsuario

export const EnumTipoUsuario: typeof $Enums.EnumTipoUsuario

export type EnumStatusProposta = $Enums.EnumStatusProposta

export const EnumStatusProposta: typeof $Enums.EnumStatusProposta

export type EnumNivelProeficiencia = $Enums.EnumNivelProeficiencia

export const EnumNivelProeficiencia: typeof $Enums.EnumNivelProeficiencia

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habilidade`: Exposes CRUD operations for the **Habilidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habilidades
    * const habilidades = await prisma.habilidade.findMany()
    * ```
    */
  get habilidade(): Prisma.HabilidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prestadorHabilidade`: Exposes CRUD operations for the **PrestadorHabilidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrestadorHabilidades
    * const prestadorHabilidades = await prisma.prestadorHabilidade.findMany()
    * ```
    */
  get prestadorHabilidade(): Prisma.PrestadorHabilidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proposta`: Exposes CRUD operations for the **Proposta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Propostas
    * const propostas = await prisma.proposta.findMany()
    * ```
    */
  get proposta(): Prisma.PropostaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servico`: Exposes CRUD operations for the **Servico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicos
    * const servicos = await prisma.servico.findMany()
    * ```
    */
  get servico(): Prisma.ServicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Usuario: 'Usuario',
    Habilidade: 'Habilidade',
    PrestadorHabilidade: 'PrestadorHabilidade',
    Proposta: 'Proposta',
    Servico: 'Servico',
    Avaliacao: 'Avaliacao'
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
      modelProps: "account" | "session" | "verificationToken" | "usuario" | "habilidade" | "prestadorHabilidade" | "proposta" | "servico" | "avaliacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Habilidade: {
        payload: Prisma.$HabilidadePayload<ExtArgs>
        fields: Prisma.HabilidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabilidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabilidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabilidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabilidadePayload>
          }
          findFirst: {
            args: Prisma.HabilidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabilidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabilidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabilidadePayload>
          }
          findMany: {
            args: Prisma.HabilidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabilidadePayload>[]
          }
          create: {
            args: Prisma.HabilidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabilidadePayload>
          }
          createMany: {
            args: Prisma.HabilidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabilidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabilidadePayload>[]
          }
          delete: {
            args: Prisma.HabilidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabilidadePayload>
          }
          update: {
            args: Prisma.HabilidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabilidadePayload>
          }
          deleteMany: {
            args: Prisma.HabilidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabilidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabilidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabilidadePayload>[]
          }
          upsert: {
            args: Prisma.HabilidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabilidadePayload>
          }
          aggregate: {
            args: Prisma.HabilidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabilidade>
          }
          groupBy: {
            args: Prisma.HabilidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabilidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabilidadeCountArgs<ExtArgs>
            result: $Utils.Optional<HabilidadeCountAggregateOutputType> | number
          }
        }
      }
      PrestadorHabilidade: {
        payload: Prisma.$PrestadorHabilidadePayload<ExtArgs>
        fields: Prisma.PrestadorHabilidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrestadorHabilidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorHabilidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrestadorHabilidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorHabilidadePayload>
          }
          findFirst: {
            args: Prisma.PrestadorHabilidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorHabilidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrestadorHabilidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorHabilidadePayload>
          }
          findMany: {
            args: Prisma.PrestadorHabilidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorHabilidadePayload>[]
          }
          create: {
            args: Prisma.PrestadorHabilidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorHabilidadePayload>
          }
          createMany: {
            args: Prisma.PrestadorHabilidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrestadorHabilidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorHabilidadePayload>[]
          }
          delete: {
            args: Prisma.PrestadorHabilidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorHabilidadePayload>
          }
          update: {
            args: Prisma.PrestadorHabilidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorHabilidadePayload>
          }
          deleteMany: {
            args: Prisma.PrestadorHabilidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrestadorHabilidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrestadorHabilidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorHabilidadePayload>[]
          }
          upsert: {
            args: Prisma.PrestadorHabilidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorHabilidadePayload>
          }
          aggregate: {
            args: Prisma.PrestadorHabilidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrestadorHabilidade>
          }
          groupBy: {
            args: Prisma.PrestadorHabilidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrestadorHabilidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrestadorHabilidadeCountArgs<ExtArgs>
            result: $Utils.Optional<PrestadorHabilidadeCountAggregateOutputType> | number
          }
        }
      }
      Proposta: {
        payload: Prisma.$PropostaPayload<ExtArgs>
        fields: Prisma.PropostaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropostaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropostaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>
          }
          findFirst: {
            args: Prisma.PropostaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropostaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>
          }
          findMany: {
            args: Prisma.PropostaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>[]
          }
          create: {
            args: Prisma.PropostaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>
          }
          createMany: {
            args: Prisma.PropostaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropostaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>[]
          }
          delete: {
            args: Prisma.PropostaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>
          }
          update: {
            args: Prisma.PropostaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>
          }
          deleteMany: {
            args: Prisma.PropostaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropostaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropostaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>[]
          }
          upsert: {
            args: Prisma.PropostaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaPayload>
          }
          aggregate: {
            args: Prisma.PropostaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposta>
          }
          groupBy: {
            args: Prisma.PropostaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropostaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropostaCountArgs<ExtArgs>
            result: $Utils.Optional<PropostaCountAggregateOutputType> | number
          }
        }
      }
      Servico: {
        payload: Prisma.$ServicoPayload<ExtArgs>
        fields: Prisma.ServicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findFirst: {
            args: Prisma.ServicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findMany: {
            args: Prisma.ServicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          create: {
            args: Prisma.ServicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          createMany: {
            args: Prisma.ServicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          delete: {
            args: Prisma.ServicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          update: {
            args: Prisma.ServicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          deleteMany: {
            args: Prisma.ServicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          upsert: {
            args: Prisma.ServicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          aggregate: {
            args: Prisma.ServicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServico>
          }
          groupBy: {
            args: Prisma.ServicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicoCountArgs<ExtArgs>
            result: $Utils.Optional<ServicoCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          createMany: {
            args: Prisma.AvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvaliacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvaliacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
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
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    usuario?: UsuarioOmit
    habilidade?: HabilidadeOmit
    prestadorHabilidade?: PrestadorHabilidadeOmit
    proposta?: PropostaOmit
    servico?: ServicoOmit
    avaliacao?: AvaliacaoOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    habilidades: number
    propostas_contratadas: number
    propostas_prestadas: number
    accounts: number
    sessions: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habilidades?: boolean | UsuarioCountOutputTypeCountHabilidadesArgs
    propostas_contratadas?: boolean | UsuarioCountOutputTypeCountPropostas_contratadasArgs
    propostas_prestadas?: boolean | UsuarioCountOutputTypeCountPropostas_prestadasArgs
    accounts?: boolean | UsuarioCountOutputTypeCountAccountsArgs
    sessions?: boolean | UsuarioCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountHabilidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestadorHabilidadeWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPropostas_contratadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropostaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPropostas_prestadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropostaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type HabilidadeCountOutputType
   */

  export type HabilidadeCountOutputType = {
    prestadores: number
  }

  export type HabilidadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestadores?: boolean | HabilidadeCountOutputTypeCountPrestadoresArgs
  }

  // Custom InputTypes
  /**
   * HabilidadeCountOutputType without action
   */
  export type HabilidadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabilidadeCountOutputType
     */
    select?: HabilidadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabilidadeCountOutputType without action
   */
  export type HabilidadeCountOutputTypeCountPrestadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestadorHabilidadeWhereInput
  }


  /**
   * Count Type PropostaCountOutputType
   */

  export type PropostaCountOutputType = {
    servicos: number
    avaliacao: number
  }

  export type PropostaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicos?: boolean | PropostaCountOutputTypeCountServicosArgs
    avaliacao?: boolean | PropostaCountOutputTypeCountAvaliacaoArgs
  }

  // Custom InputTypes
  /**
   * PropostaCountOutputType without action
   */
  export type PropostaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaCountOutputType
     */
    select?: PropostaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropostaCountOutputType without action
   */
  export type PropostaCountOutputTypeCountServicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
  }

  /**
   * PropostaCountOutputType without action
   */
  export type PropostaCountOutputTypeCountAvaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    valor: Decimal | null
  }

  export type UsuarioSumAggregateOutputType = {
    valor: Decimal | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    name: string | null
    hashedPassword: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    valor: Decimal | null
    sobre: string | null
    tipo_usuario: $Enums.EnumTipoUsuario | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    name: string | null
    hashedPassword: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    valor: Decimal | null
    sobre: string | null
    tipo_usuario: $Enums.EnumTipoUsuario | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    name: number
    hashedPassword: number
    email: number
    emailVerified: number
    image: number
    valor: number
    sobre: number
    tipo_usuario: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    valor?: true
  }

  export type UsuarioSumAggregateInputType = {
    valor?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    name?: true
    hashedPassword?: true
    email?: true
    emailVerified?: true
    image?: true
    valor?: true
    sobre?: true
    tipo_usuario?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    name?: true
    hashedPassword?: true
    email?: true
    emailVerified?: true
    image?: true
    valor?: true
    sobre?: true
    tipo_usuario?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    name?: true
    hashedPassword?: true
    email?: true
    emailVerified?: true
    image?: true
    valor?: true
    sobre?: true
    tipo_usuario?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    name: string | null
    hashedPassword: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    valor: Decimal
    sobre: string
    tipo_usuario: $Enums.EnumTipoUsuario
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    hashedPassword?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    valor?: boolean
    sobre?: boolean
    tipo_usuario?: boolean
    habilidades?: boolean | Usuario$habilidadesArgs<ExtArgs>
    propostas_contratadas?: boolean | Usuario$propostas_contratadasArgs<ExtArgs>
    propostas_prestadas?: boolean | Usuario$propostas_prestadasArgs<ExtArgs>
    accounts?: boolean | Usuario$accountsArgs<ExtArgs>
    sessions?: boolean | Usuario$sessionsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    hashedPassword?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    valor?: boolean
    sobre?: boolean
    tipo_usuario?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    hashedPassword?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    valor?: boolean
    sobre?: boolean
    tipo_usuario?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    name?: boolean
    hashedPassword?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    valor?: boolean
    sobre?: boolean
    tipo_usuario?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "hashedPassword" | "email" | "emailVerified" | "image" | "valor" | "sobre" | "tipo_usuario", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habilidades?: boolean | Usuario$habilidadesArgs<ExtArgs>
    propostas_contratadas?: boolean | Usuario$propostas_contratadasArgs<ExtArgs>
    propostas_prestadas?: boolean | Usuario$propostas_prestadasArgs<ExtArgs>
    accounts?: boolean | Usuario$accountsArgs<ExtArgs>
    sessions?: boolean | Usuario$sessionsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      habilidades: Prisma.$PrestadorHabilidadePayload<ExtArgs>[]
      propostas_contratadas: Prisma.$PropostaPayload<ExtArgs>[]
      propostas_prestadas: Prisma.$PropostaPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      hashedPassword: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      valor: Prisma.Decimal
      sobre: string
      tipo_usuario: $Enums.EnumTipoUsuario
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habilidades<T extends Usuario$habilidadesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$habilidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestadorHabilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    propostas_contratadas<T extends Usuario$propostas_contratadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$propostas_contratadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    propostas_prestadas<T extends Usuario$propostas_prestadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$propostas_prestadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends Usuario$accountsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Usuario$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly name: FieldRef<"Usuario", 'String'>
    readonly hashedPassword: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly emailVerified: FieldRef<"Usuario", 'DateTime'>
    readonly image: FieldRef<"Usuario", 'String'>
    readonly valor: FieldRef<"Usuario", 'Decimal'>
    readonly sobre: FieldRef<"Usuario", 'String'>
    readonly tipo_usuario: FieldRef<"Usuario", 'EnumTipoUsuario'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.habilidades
   */
  export type Usuario$habilidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestadorHabilidade
     */
    select?: PrestadorHabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestadorHabilidade
     */
    omit?: PrestadorHabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorHabilidadeInclude<ExtArgs> | null
    where?: PrestadorHabilidadeWhereInput
    orderBy?: PrestadorHabilidadeOrderByWithRelationInput | PrestadorHabilidadeOrderByWithRelationInput[]
    cursor?: PrestadorHabilidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrestadorHabilidadeScalarFieldEnum | PrestadorHabilidadeScalarFieldEnum[]
  }

  /**
   * Usuario.propostas_contratadas
   */
  export type Usuario$propostas_contratadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    where?: PropostaWhereInput
    orderBy?: PropostaOrderByWithRelationInput | PropostaOrderByWithRelationInput[]
    cursor?: PropostaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropostaScalarFieldEnum | PropostaScalarFieldEnum[]
  }

  /**
   * Usuario.propostas_prestadas
   */
  export type Usuario$propostas_prestadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    where?: PropostaWhereInput
    orderBy?: PropostaOrderByWithRelationInput | PropostaOrderByWithRelationInput[]
    cursor?: PropostaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropostaScalarFieldEnum | PropostaScalarFieldEnum[]
  }

  /**
   * Usuario.accounts
   */
  export type Usuario$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Usuario.sessions
   */
  export type Usuario$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Habilidade
   */

  export type AggregateHabilidade = {
    _count: HabilidadeCountAggregateOutputType | null
    _avg: HabilidadeAvgAggregateOutputType | null
    _sum: HabilidadeSumAggregateOutputType | null
    _min: HabilidadeMinAggregateOutputType | null
    _max: HabilidadeMaxAggregateOutputType | null
  }

  export type HabilidadeAvgAggregateOutputType = {
    id: number | null
  }

  export type HabilidadeSumAggregateOutputType = {
    id: number | null
  }

  export type HabilidadeMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type HabilidadeMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type HabilidadeCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    _all: number
  }


  export type HabilidadeAvgAggregateInputType = {
    id?: true
  }

  export type HabilidadeSumAggregateInputType = {
    id?: true
  }

  export type HabilidadeMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type HabilidadeMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type HabilidadeCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type HabilidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habilidade to aggregate.
     */
    where?: HabilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habilidades to fetch.
     */
    orderBy?: HabilidadeOrderByWithRelationInput | HabilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habilidades
    **/
    _count?: true | HabilidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabilidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabilidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabilidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabilidadeMaxAggregateInputType
  }

  export type GetHabilidadeAggregateType<T extends HabilidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateHabilidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabilidade[P]>
      : GetScalarType<T[P], AggregateHabilidade[P]>
  }




  export type HabilidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabilidadeWhereInput
    orderBy?: HabilidadeOrderByWithAggregationInput | HabilidadeOrderByWithAggregationInput[]
    by: HabilidadeScalarFieldEnum[] | HabilidadeScalarFieldEnum
    having?: HabilidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabilidadeCountAggregateInputType | true
    _avg?: HabilidadeAvgAggregateInputType
    _sum?: HabilidadeSumAggregateInputType
    _min?: HabilidadeMinAggregateInputType
    _max?: HabilidadeMaxAggregateInputType
  }

  export type HabilidadeGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    _count: HabilidadeCountAggregateOutputType | null
    _avg: HabilidadeAvgAggregateOutputType | null
    _sum: HabilidadeSumAggregateOutputType | null
    _min: HabilidadeMinAggregateOutputType | null
    _max: HabilidadeMaxAggregateOutputType | null
  }

  type GetHabilidadeGroupByPayload<T extends HabilidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabilidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabilidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabilidadeGroupByOutputType[P]>
            : GetScalarType<T[P], HabilidadeGroupByOutputType[P]>
        }
      >
    >


  export type HabilidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    prestadores?: boolean | Habilidade$prestadoresArgs<ExtArgs>
    _count?: boolean | HabilidadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habilidade"]>

  export type HabilidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["habilidade"]>

  export type HabilidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["habilidade"]>

  export type HabilidadeSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type HabilidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao", ExtArgs["result"]["habilidade"]>
  export type HabilidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestadores?: boolean | Habilidade$prestadoresArgs<ExtArgs>
    _count?: boolean | HabilidadeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HabilidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HabilidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HabilidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habilidade"
    objects: {
      prestadores: Prisma.$PrestadorHabilidadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
    }, ExtArgs["result"]["habilidade"]>
    composites: {}
  }

  type HabilidadeGetPayload<S extends boolean | null | undefined | HabilidadeDefaultArgs> = $Result.GetResult<Prisma.$HabilidadePayload, S>

  type HabilidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabilidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabilidadeCountAggregateInputType | true
    }

  export interface HabilidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habilidade'], meta: { name: 'Habilidade' } }
    /**
     * Find zero or one Habilidade that matches the filter.
     * @param {HabilidadeFindUniqueArgs} args - Arguments to find a Habilidade
     * @example
     * // Get one Habilidade
     * const habilidade = await prisma.habilidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabilidadeFindUniqueArgs>(args: SelectSubset<T, HabilidadeFindUniqueArgs<ExtArgs>>): Prisma__HabilidadeClient<$Result.GetResult<Prisma.$HabilidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habilidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabilidadeFindUniqueOrThrowArgs} args - Arguments to find a Habilidade
     * @example
     * // Get one Habilidade
     * const habilidade = await prisma.habilidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabilidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, HabilidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabilidadeClient<$Result.GetResult<Prisma.$HabilidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habilidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabilidadeFindFirstArgs} args - Arguments to find a Habilidade
     * @example
     * // Get one Habilidade
     * const habilidade = await prisma.habilidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabilidadeFindFirstArgs>(args?: SelectSubset<T, HabilidadeFindFirstArgs<ExtArgs>>): Prisma__HabilidadeClient<$Result.GetResult<Prisma.$HabilidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habilidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabilidadeFindFirstOrThrowArgs} args - Arguments to find a Habilidade
     * @example
     * // Get one Habilidade
     * const habilidade = await prisma.habilidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabilidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, HabilidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabilidadeClient<$Result.GetResult<Prisma.$HabilidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habilidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabilidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habilidades
     * const habilidades = await prisma.habilidade.findMany()
     * 
     * // Get first 10 Habilidades
     * const habilidades = await prisma.habilidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habilidadeWithIdOnly = await prisma.habilidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabilidadeFindManyArgs>(args?: SelectSubset<T, HabilidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habilidade.
     * @param {HabilidadeCreateArgs} args - Arguments to create a Habilidade.
     * @example
     * // Create one Habilidade
     * const Habilidade = await prisma.habilidade.create({
     *   data: {
     *     // ... data to create a Habilidade
     *   }
     * })
     * 
     */
    create<T extends HabilidadeCreateArgs>(args: SelectSubset<T, HabilidadeCreateArgs<ExtArgs>>): Prisma__HabilidadeClient<$Result.GetResult<Prisma.$HabilidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habilidades.
     * @param {HabilidadeCreateManyArgs} args - Arguments to create many Habilidades.
     * @example
     * // Create many Habilidades
     * const habilidade = await prisma.habilidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabilidadeCreateManyArgs>(args?: SelectSubset<T, HabilidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Habilidades and returns the data saved in the database.
     * @param {HabilidadeCreateManyAndReturnArgs} args - Arguments to create many Habilidades.
     * @example
     * // Create many Habilidades
     * const habilidade = await prisma.habilidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Habilidades and only return the `id`
     * const habilidadeWithIdOnly = await prisma.habilidade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabilidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, HabilidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabilidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Habilidade.
     * @param {HabilidadeDeleteArgs} args - Arguments to delete one Habilidade.
     * @example
     * // Delete one Habilidade
     * const Habilidade = await prisma.habilidade.delete({
     *   where: {
     *     // ... filter to delete one Habilidade
     *   }
     * })
     * 
     */
    delete<T extends HabilidadeDeleteArgs>(args: SelectSubset<T, HabilidadeDeleteArgs<ExtArgs>>): Prisma__HabilidadeClient<$Result.GetResult<Prisma.$HabilidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habilidade.
     * @param {HabilidadeUpdateArgs} args - Arguments to update one Habilidade.
     * @example
     * // Update one Habilidade
     * const habilidade = await prisma.habilidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabilidadeUpdateArgs>(args: SelectSubset<T, HabilidadeUpdateArgs<ExtArgs>>): Prisma__HabilidadeClient<$Result.GetResult<Prisma.$HabilidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habilidades.
     * @param {HabilidadeDeleteManyArgs} args - Arguments to filter Habilidades to delete.
     * @example
     * // Delete a few Habilidades
     * const { count } = await prisma.habilidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabilidadeDeleteManyArgs>(args?: SelectSubset<T, HabilidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabilidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habilidades
     * const habilidade = await prisma.habilidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabilidadeUpdateManyArgs>(args: SelectSubset<T, HabilidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habilidades and returns the data updated in the database.
     * @param {HabilidadeUpdateManyAndReturnArgs} args - Arguments to update many Habilidades.
     * @example
     * // Update many Habilidades
     * const habilidade = await prisma.habilidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Habilidades and only return the `id`
     * const habilidadeWithIdOnly = await prisma.habilidade.updateManyAndReturn({
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
    updateManyAndReturn<T extends HabilidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, HabilidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabilidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Habilidade.
     * @param {HabilidadeUpsertArgs} args - Arguments to update or create a Habilidade.
     * @example
     * // Update or create a Habilidade
     * const habilidade = await prisma.habilidade.upsert({
     *   create: {
     *     // ... data to create a Habilidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habilidade we want to update
     *   }
     * })
     */
    upsert<T extends HabilidadeUpsertArgs>(args: SelectSubset<T, HabilidadeUpsertArgs<ExtArgs>>): Prisma__HabilidadeClient<$Result.GetResult<Prisma.$HabilidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabilidadeCountArgs} args - Arguments to filter Habilidades to count.
     * @example
     * // Count the number of Habilidades
     * const count = await prisma.habilidade.count({
     *   where: {
     *     // ... the filter for the Habilidades we want to count
     *   }
     * })
    **/
    count<T extends HabilidadeCountArgs>(
      args?: Subset<T, HabilidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabilidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabilidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HabilidadeAggregateArgs>(args: Subset<T, HabilidadeAggregateArgs>): Prisma.PrismaPromise<GetHabilidadeAggregateType<T>>

    /**
     * Group by Habilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabilidadeGroupByArgs} args - Group by arguments.
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
      T extends HabilidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabilidadeGroupByArgs['orderBy'] }
        : { orderBy?: HabilidadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HabilidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabilidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habilidade model
   */
  readonly fields: HabilidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habilidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabilidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prestadores<T extends Habilidade$prestadoresArgs<ExtArgs> = {}>(args?: Subset<T, Habilidade$prestadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestadorHabilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Habilidade model
   */
  interface HabilidadeFieldRefs {
    readonly id: FieldRef<"Habilidade", 'Int'>
    readonly nome: FieldRef<"Habilidade", 'String'>
    readonly descricao: FieldRef<"Habilidade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Habilidade findUnique
   */
  export type HabilidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habilidade
     */
    select?: HabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habilidade
     */
    omit?: HabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Habilidade to fetch.
     */
    where: HabilidadeWhereUniqueInput
  }

  /**
   * Habilidade findUniqueOrThrow
   */
  export type HabilidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habilidade
     */
    select?: HabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habilidade
     */
    omit?: HabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Habilidade to fetch.
     */
    where: HabilidadeWhereUniqueInput
  }

  /**
   * Habilidade findFirst
   */
  export type HabilidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habilidade
     */
    select?: HabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habilidade
     */
    omit?: HabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Habilidade to fetch.
     */
    where?: HabilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habilidades to fetch.
     */
    orderBy?: HabilidadeOrderByWithRelationInput | HabilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habilidades.
     */
    cursor?: HabilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habilidades.
     */
    distinct?: HabilidadeScalarFieldEnum | HabilidadeScalarFieldEnum[]
  }

  /**
   * Habilidade findFirstOrThrow
   */
  export type HabilidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habilidade
     */
    select?: HabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habilidade
     */
    omit?: HabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Habilidade to fetch.
     */
    where?: HabilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habilidades to fetch.
     */
    orderBy?: HabilidadeOrderByWithRelationInput | HabilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habilidades.
     */
    cursor?: HabilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habilidades.
     */
    distinct?: HabilidadeScalarFieldEnum | HabilidadeScalarFieldEnum[]
  }

  /**
   * Habilidade findMany
   */
  export type HabilidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habilidade
     */
    select?: HabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habilidade
     */
    omit?: HabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Habilidades to fetch.
     */
    where?: HabilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habilidades to fetch.
     */
    orderBy?: HabilidadeOrderByWithRelationInput | HabilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habilidades.
     */
    cursor?: HabilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habilidades.
     */
    skip?: number
    distinct?: HabilidadeScalarFieldEnum | HabilidadeScalarFieldEnum[]
  }

  /**
   * Habilidade create
   */
  export type HabilidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habilidade
     */
    select?: HabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habilidade
     */
    omit?: HabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabilidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Habilidade.
     */
    data: XOR<HabilidadeCreateInput, HabilidadeUncheckedCreateInput>
  }

  /**
   * Habilidade createMany
   */
  export type HabilidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habilidades.
     */
    data: HabilidadeCreateManyInput | HabilidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habilidade createManyAndReturn
   */
  export type HabilidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habilidade
     */
    select?: HabilidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habilidade
     */
    omit?: HabilidadeOmit<ExtArgs> | null
    /**
     * The data used to create many Habilidades.
     */
    data: HabilidadeCreateManyInput | HabilidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habilidade update
   */
  export type HabilidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habilidade
     */
    select?: HabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habilidade
     */
    omit?: HabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabilidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Habilidade.
     */
    data: XOR<HabilidadeUpdateInput, HabilidadeUncheckedUpdateInput>
    /**
     * Choose, which Habilidade to update.
     */
    where: HabilidadeWhereUniqueInput
  }

  /**
   * Habilidade updateMany
   */
  export type HabilidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habilidades.
     */
    data: XOR<HabilidadeUpdateManyMutationInput, HabilidadeUncheckedUpdateManyInput>
    /**
     * Filter which Habilidades to update
     */
    where?: HabilidadeWhereInput
    /**
     * Limit how many Habilidades to update.
     */
    limit?: number
  }

  /**
   * Habilidade updateManyAndReturn
   */
  export type HabilidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habilidade
     */
    select?: HabilidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habilidade
     */
    omit?: HabilidadeOmit<ExtArgs> | null
    /**
     * The data used to update Habilidades.
     */
    data: XOR<HabilidadeUpdateManyMutationInput, HabilidadeUncheckedUpdateManyInput>
    /**
     * Filter which Habilidades to update
     */
    where?: HabilidadeWhereInput
    /**
     * Limit how many Habilidades to update.
     */
    limit?: number
  }

  /**
   * Habilidade upsert
   */
  export type HabilidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habilidade
     */
    select?: HabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habilidade
     */
    omit?: HabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabilidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Habilidade to update in case it exists.
     */
    where: HabilidadeWhereUniqueInput
    /**
     * In case the Habilidade found by the `where` argument doesn't exist, create a new Habilidade with this data.
     */
    create: XOR<HabilidadeCreateInput, HabilidadeUncheckedCreateInput>
    /**
     * In case the Habilidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabilidadeUpdateInput, HabilidadeUncheckedUpdateInput>
  }

  /**
   * Habilidade delete
   */
  export type HabilidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habilidade
     */
    select?: HabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habilidade
     */
    omit?: HabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabilidadeInclude<ExtArgs> | null
    /**
     * Filter which Habilidade to delete.
     */
    where: HabilidadeWhereUniqueInput
  }

  /**
   * Habilidade deleteMany
   */
  export type HabilidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habilidades to delete
     */
    where?: HabilidadeWhereInput
    /**
     * Limit how many Habilidades to delete.
     */
    limit?: number
  }

  /**
   * Habilidade.prestadores
   */
  export type Habilidade$prestadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestadorHabilidade
     */
    select?: PrestadorHabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestadorHabilidade
     */
    omit?: PrestadorHabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorHabilidadeInclude<ExtArgs> | null
    where?: PrestadorHabilidadeWhereInput
    orderBy?: PrestadorHabilidadeOrderByWithRelationInput | PrestadorHabilidadeOrderByWithRelationInput[]
    cursor?: PrestadorHabilidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrestadorHabilidadeScalarFieldEnum | PrestadorHabilidadeScalarFieldEnum[]
  }

  /**
   * Habilidade without action
   */
  export type HabilidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habilidade
     */
    select?: HabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habilidade
     */
    omit?: HabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabilidadeInclude<ExtArgs> | null
  }


  /**
   * Model PrestadorHabilidade
   */

  export type AggregatePrestadorHabilidade = {
    _count: PrestadorHabilidadeCountAggregateOutputType | null
    _avg: PrestadorHabilidadeAvgAggregateOutputType | null
    _sum: PrestadorHabilidadeSumAggregateOutputType | null
    _min: PrestadorHabilidadeMinAggregateOutputType | null
    _max: PrestadorHabilidadeMaxAggregateOutputType | null
  }

  export type PrestadorHabilidadeAvgAggregateOutputType = {
    id_habilidade: number | null
  }

  export type PrestadorHabilidadeSumAggregateOutputType = {
    id_habilidade: number | null
  }

  export type PrestadorHabilidadeMinAggregateOutputType = {
    id_habilidade: number | null
    id_prestador: string | null
    nivel_proeficiencia: $Enums.EnumNivelProeficiencia | null
  }

  export type PrestadorHabilidadeMaxAggregateOutputType = {
    id_habilidade: number | null
    id_prestador: string | null
    nivel_proeficiencia: $Enums.EnumNivelProeficiencia | null
  }

  export type PrestadorHabilidadeCountAggregateOutputType = {
    id_habilidade: number
    id_prestador: number
    nivel_proeficiencia: number
    _all: number
  }


  export type PrestadorHabilidadeAvgAggregateInputType = {
    id_habilidade?: true
  }

  export type PrestadorHabilidadeSumAggregateInputType = {
    id_habilidade?: true
  }

  export type PrestadorHabilidadeMinAggregateInputType = {
    id_habilidade?: true
    id_prestador?: true
    nivel_proeficiencia?: true
  }

  export type PrestadorHabilidadeMaxAggregateInputType = {
    id_habilidade?: true
    id_prestador?: true
    nivel_proeficiencia?: true
  }

  export type PrestadorHabilidadeCountAggregateInputType = {
    id_habilidade?: true
    id_prestador?: true
    nivel_proeficiencia?: true
    _all?: true
  }

  export type PrestadorHabilidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrestadorHabilidade to aggregate.
     */
    where?: PrestadorHabilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrestadorHabilidades to fetch.
     */
    orderBy?: PrestadorHabilidadeOrderByWithRelationInput | PrestadorHabilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrestadorHabilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrestadorHabilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrestadorHabilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrestadorHabilidades
    **/
    _count?: true | PrestadorHabilidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrestadorHabilidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrestadorHabilidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrestadorHabilidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrestadorHabilidadeMaxAggregateInputType
  }

  export type GetPrestadorHabilidadeAggregateType<T extends PrestadorHabilidadeAggregateArgs> = {
        [P in keyof T & keyof AggregatePrestadorHabilidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrestadorHabilidade[P]>
      : GetScalarType<T[P], AggregatePrestadorHabilidade[P]>
  }




  export type PrestadorHabilidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestadorHabilidadeWhereInput
    orderBy?: PrestadorHabilidadeOrderByWithAggregationInput | PrestadorHabilidadeOrderByWithAggregationInput[]
    by: PrestadorHabilidadeScalarFieldEnum[] | PrestadorHabilidadeScalarFieldEnum
    having?: PrestadorHabilidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrestadorHabilidadeCountAggregateInputType | true
    _avg?: PrestadorHabilidadeAvgAggregateInputType
    _sum?: PrestadorHabilidadeSumAggregateInputType
    _min?: PrestadorHabilidadeMinAggregateInputType
    _max?: PrestadorHabilidadeMaxAggregateInputType
  }

  export type PrestadorHabilidadeGroupByOutputType = {
    id_habilidade: number
    id_prestador: string
    nivel_proeficiencia: $Enums.EnumNivelProeficiencia
    _count: PrestadorHabilidadeCountAggregateOutputType | null
    _avg: PrestadorHabilidadeAvgAggregateOutputType | null
    _sum: PrestadorHabilidadeSumAggregateOutputType | null
    _min: PrestadorHabilidadeMinAggregateOutputType | null
    _max: PrestadorHabilidadeMaxAggregateOutputType | null
  }

  type GetPrestadorHabilidadeGroupByPayload<T extends PrestadorHabilidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrestadorHabilidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrestadorHabilidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrestadorHabilidadeGroupByOutputType[P]>
            : GetScalarType<T[P], PrestadorHabilidadeGroupByOutputType[P]>
        }
      >
    >


  export type PrestadorHabilidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_habilidade?: boolean
    id_prestador?: boolean
    nivel_proeficiencia?: boolean
    habilidade?: boolean | HabilidadeDefaultArgs<ExtArgs>
    prestador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestadorHabilidade"]>

  export type PrestadorHabilidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_habilidade?: boolean
    id_prestador?: boolean
    nivel_proeficiencia?: boolean
    habilidade?: boolean | HabilidadeDefaultArgs<ExtArgs>
    prestador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestadorHabilidade"]>

  export type PrestadorHabilidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_habilidade?: boolean
    id_prestador?: boolean
    nivel_proeficiencia?: boolean
    habilidade?: boolean | HabilidadeDefaultArgs<ExtArgs>
    prestador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestadorHabilidade"]>

  export type PrestadorHabilidadeSelectScalar = {
    id_habilidade?: boolean
    id_prestador?: boolean
    nivel_proeficiencia?: boolean
  }

  export type PrestadorHabilidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_habilidade" | "id_prestador" | "nivel_proeficiencia", ExtArgs["result"]["prestadorHabilidade"]>
  export type PrestadorHabilidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habilidade?: boolean | HabilidadeDefaultArgs<ExtArgs>
    prestador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PrestadorHabilidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habilidade?: boolean | HabilidadeDefaultArgs<ExtArgs>
    prestador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PrestadorHabilidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habilidade?: boolean | HabilidadeDefaultArgs<ExtArgs>
    prestador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PrestadorHabilidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrestadorHabilidade"
    objects: {
      habilidade: Prisma.$HabilidadePayload<ExtArgs>
      prestador: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_habilidade: number
      id_prestador: string
      nivel_proeficiencia: $Enums.EnumNivelProeficiencia
    }, ExtArgs["result"]["prestadorHabilidade"]>
    composites: {}
  }

  type PrestadorHabilidadeGetPayload<S extends boolean | null | undefined | PrestadorHabilidadeDefaultArgs> = $Result.GetResult<Prisma.$PrestadorHabilidadePayload, S>

  type PrestadorHabilidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrestadorHabilidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrestadorHabilidadeCountAggregateInputType | true
    }

  export interface PrestadorHabilidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrestadorHabilidade'], meta: { name: 'PrestadorHabilidade' } }
    /**
     * Find zero or one PrestadorHabilidade that matches the filter.
     * @param {PrestadorHabilidadeFindUniqueArgs} args - Arguments to find a PrestadorHabilidade
     * @example
     * // Get one PrestadorHabilidade
     * const prestadorHabilidade = await prisma.prestadorHabilidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrestadorHabilidadeFindUniqueArgs>(args: SelectSubset<T, PrestadorHabilidadeFindUniqueArgs<ExtArgs>>): Prisma__PrestadorHabilidadeClient<$Result.GetResult<Prisma.$PrestadorHabilidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrestadorHabilidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrestadorHabilidadeFindUniqueOrThrowArgs} args - Arguments to find a PrestadorHabilidade
     * @example
     * // Get one PrestadorHabilidade
     * const prestadorHabilidade = await prisma.prestadorHabilidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrestadorHabilidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, PrestadorHabilidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrestadorHabilidadeClient<$Result.GetResult<Prisma.$PrestadorHabilidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrestadorHabilidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestadorHabilidadeFindFirstArgs} args - Arguments to find a PrestadorHabilidade
     * @example
     * // Get one PrestadorHabilidade
     * const prestadorHabilidade = await prisma.prestadorHabilidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrestadorHabilidadeFindFirstArgs>(args?: SelectSubset<T, PrestadorHabilidadeFindFirstArgs<ExtArgs>>): Prisma__PrestadorHabilidadeClient<$Result.GetResult<Prisma.$PrestadorHabilidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrestadorHabilidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestadorHabilidadeFindFirstOrThrowArgs} args - Arguments to find a PrestadorHabilidade
     * @example
     * // Get one PrestadorHabilidade
     * const prestadorHabilidade = await prisma.prestadorHabilidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrestadorHabilidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, PrestadorHabilidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrestadorHabilidadeClient<$Result.GetResult<Prisma.$PrestadorHabilidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrestadorHabilidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestadorHabilidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrestadorHabilidades
     * const prestadorHabilidades = await prisma.prestadorHabilidade.findMany()
     * 
     * // Get first 10 PrestadorHabilidades
     * const prestadorHabilidades = await prisma.prestadorHabilidade.findMany({ take: 10 })
     * 
     * // Only select the `id_habilidade`
     * const prestadorHabilidadeWithId_habilidadeOnly = await prisma.prestadorHabilidade.findMany({ select: { id_habilidade: true } })
     * 
     */
    findMany<T extends PrestadorHabilidadeFindManyArgs>(args?: SelectSubset<T, PrestadorHabilidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestadorHabilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrestadorHabilidade.
     * @param {PrestadorHabilidadeCreateArgs} args - Arguments to create a PrestadorHabilidade.
     * @example
     * // Create one PrestadorHabilidade
     * const PrestadorHabilidade = await prisma.prestadorHabilidade.create({
     *   data: {
     *     // ... data to create a PrestadorHabilidade
     *   }
     * })
     * 
     */
    create<T extends PrestadorHabilidadeCreateArgs>(args: SelectSubset<T, PrestadorHabilidadeCreateArgs<ExtArgs>>): Prisma__PrestadorHabilidadeClient<$Result.GetResult<Prisma.$PrestadorHabilidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrestadorHabilidades.
     * @param {PrestadorHabilidadeCreateManyArgs} args - Arguments to create many PrestadorHabilidades.
     * @example
     * // Create many PrestadorHabilidades
     * const prestadorHabilidade = await prisma.prestadorHabilidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrestadorHabilidadeCreateManyArgs>(args?: SelectSubset<T, PrestadorHabilidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrestadorHabilidades and returns the data saved in the database.
     * @param {PrestadorHabilidadeCreateManyAndReturnArgs} args - Arguments to create many PrestadorHabilidades.
     * @example
     * // Create many PrestadorHabilidades
     * const prestadorHabilidade = await prisma.prestadorHabilidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrestadorHabilidades and only return the `id_habilidade`
     * const prestadorHabilidadeWithId_habilidadeOnly = await prisma.prestadorHabilidade.createManyAndReturn({
     *   select: { id_habilidade: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrestadorHabilidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, PrestadorHabilidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestadorHabilidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrestadorHabilidade.
     * @param {PrestadorHabilidadeDeleteArgs} args - Arguments to delete one PrestadorHabilidade.
     * @example
     * // Delete one PrestadorHabilidade
     * const PrestadorHabilidade = await prisma.prestadorHabilidade.delete({
     *   where: {
     *     // ... filter to delete one PrestadorHabilidade
     *   }
     * })
     * 
     */
    delete<T extends PrestadorHabilidadeDeleteArgs>(args: SelectSubset<T, PrestadorHabilidadeDeleteArgs<ExtArgs>>): Prisma__PrestadorHabilidadeClient<$Result.GetResult<Prisma.$PrestadorHabilidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrestadorHabilidade.
     * @param {PrestadorHabilidadeUpdateArgs} args - Arguments to update one PrestadorHabilidade.
     * @example
     * // Update one PrestadorHabilidade
     * const prestadorHabilidade = await prisma.prestadorHabilidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrestadorHabilidadeUpdateArgs>(args: SelectSubset<T, PrestadorHabilidadeUpdateArgs<ExtArgs>>): Prisma__PrestadorHabilidadeClient<$Result.GetResult<Prisma.$PrestadorHabilidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrestadorHabilidades.
     * @param {PrestadorHabilidadeDeleteManyArgs} args - Arguments to filter PrestadorHabilidades to delete.
     * @example
     * // Delete a few PrestadorHabilidades
     * const { count } = await prisma.prestadorHabilidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrestadorHabilidadeDeleteManyArgs>(args?: SelectSubset<T, PrestadorHabilidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrestadorHabilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestadorHabilidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrestadorHabilidades
     * const prestadorHabilidade = await prisma.prestadorHabilidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrestadorHabilidadeUpdateManyArgs>(args: SelectSubset<T, PrestadorHabilidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrestadorHabilidades and returns the data updated in the database.
     * @param {PrestadorHabilidadeUpdateManyAndReturnArgs} args - Arguments to update many PrestadorHabilidades.
     * @example
     * // Update many PrestadorHabilidades
     * const prestadorHabilidade = await prisma.prestadorHabilidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrestadorHabilidades and only return the `id_habilidade`
     * const prestadorHabilidadeWithId_habilidadeOnly = await prisma.prestadorHabilidade.updateManyAndReturn({
     *   select: { id_habilidade: true },
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
    updateManyAndReturn<T extends PrestadorHabilidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, PrestadorHabilidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestadorHabilidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrestadorHabilidade.
     * @param {PrestadorHabilidadeUpsertArgs} args - Arguments to update or create a PrestadorHabilidade.
     * @example
     * // Update or create a PrestadorHabilidade
     * const prestadorHabilidade = await prisma.prestadorHabilidade.upsert({
     *   create: {
     *     // ... data to create a PrestadorHabilidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrestadorHabilidade we want to update
     *   }
     * })
     */
    upsert<T extends PrestadorHabilidadeUpsertArgs>(args: SelectSubset<T, PrestadorHabilidadeUpsertArgs<ExtArgs>>): Prisma__PrestadorHabilidadeClient<$Result.GetResult<Prisma.$PrestadorHabilidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrestadorHabilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestadorHabilidadeCountArgs} args - Arguments to filter PrestadorHabilidades to count.
     * @example
     * // Count the number of PrestadorHabilidades
     * const count = await prisma.prestadorHabilidade.count({
     *   where: {
     *     // ... the filter for the PrestadorHabilidades we want to count
     *   }
     * })
    **/
    count<T extends PrestadorHabilidadeCountArgs>(
      args?: Subset<T, PrestadorHabilidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrestadorHabilidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrestadorHabilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestadorHabilidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrestadorHabilidadeAggregateArgs>(args: Subset<T, PrestadorHabilidadeAggregateArgs>): Prisma.PrismaPromise<GetPrestadorHabilidadeAggregateType<T>>

    /**
     * Group by PrestadorHabilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestadorHabilidadeGroupByArgs} args - Group by arguments.
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
      T extends PrestadorHabilidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrestadorHabilidadeGroupByArgs['orderBy'] }
        : { orderBy?: PrestadorHabilidadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrestadorHabilidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrestadorHabilidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrestadorHabilidade model
   */
  readonly fields: PrestadorHabilidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrestadorHabilidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrestadorHabilidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habilidade<T extends HabilidadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabilidadeDefaultArgs<ExtArgs>>): Prisma__HabilidadeClient<$Result.GetResult<Prisma.$HabilidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prestador<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PrestadorHabilidade model
   */
  interface PrestadorHabilidadeFieldRefs {
    readonly id_habilidade: FieldRef<"PrestadorHabilidade", 'Int'>
    readonly id_prestador: FieldRef<"PrestadorHabilidade", 'String'>
    readonly nivel_proeficiencia: FieldRef<"PrestadorHabilidade", 'EnumNivelProeficiencia'>
  }
    

  // Custom InputTypes
  /**
   * PrestadorHabilidade findUnique
   */
  export type PrestadorHabilidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestadorHabilidade
     */
    select?: PrestadorHabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestadorHabilidade
     */
    omit?: PrestadorHabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorHabilidadeInclude<ExtArgs> | null
    /**
     * Filter, which PrestadorHabilidade to fetch.
     */
    where: PrestadorHabilidadeWhereUniqueInput
  }

  /**
   * PrestadorHabilidade findUniqueOrThrow
   */
  export type PrestadorHabilidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestadorHabilidade
     */
    select?: PrestadorHabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestadorHabilidade
     */
    omit?: PrestadorHabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorHabilidadeInclude<ExtArgs> | null
    /**
     * Filter, which PrestadorHabilidade to fetch.
     */
    where: PrestadorHabilidadeWhereUniqueInput
  }

  /**
   * PrestadorHabilidade findFirst
   */
  export type PrestadorHabilidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestadorHabilidade
     */
    select?: PrestadorHabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestadorHabilidade
     */
    omit?: PrestadorHabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorHabilidadeInclude<ExtArgs> | null
    /**
     * Filter, which PrestadorHabilidade to fetch.
     */
    where?: PrestadorHabilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrestadorHabilidades to fetch.
     */
    orderBy?: PrestadorHabilidadeOrderByWithRelationInput | PrestadorHabilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrestadorHabilidades.
     */
    cursor?: PrestadorHabilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrestadorHabilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrestadorHabilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrestadorHabilidades.
     */
    distinct?: PrestadorHabilidadeScalarFieldEnum | PrestadorHabilidadeScalarFieldEnum[]
  }

  /**
   * PrestadorHabilidade findFirstOrThrow
   */
  export type PrestadorHabilidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestadorHabilidade
     */
    select?: PrestadorHabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestadorHabilidade
     */
    omit?: PrestadorHabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorHabilidadeInclude<ExtArgs> | null
    /**
     * Filter, which PrestadorHabilidade to fetch.
     */
    where?: PrestadorHabilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrestadorHabilidades to fetch.
     */
    orderBy?: PrestadorHabilidadeOrderByWithRelationInput | PrestadorHabilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrestadorHabilidades.
     */
    cursor?: PrestadorHabilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrestadorHabilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrestadorHabilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrestadorHabilidades.
     */
    distinct?: PrestadorHabilidadeScalarFieldEnum | PrestadorHabilidadeScalarFieldEnum[]
  }

  /**
   * PrestadorHabilidade findMany
   */
  export type PrestadorHabilidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestadorHabilidade
     */
    select?: PrestadorHabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestadorHabilidade
     */
    omit?: PrestadorHabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorHabilidadeInclude<ExtArgs> | null
    /**
     * Filter, which PrestadorHabilidades to fetch.
     */
    where?: PrestadorHabilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrestadorHabilidades to fetch.
     */
    orderBy?: PrestadorHabilidadeOrderByWithRelationInput | PrestadorHabilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrestadorHabilidades.
     */
    cursor?: PrestadorHabilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrestadorHabilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrestadorHabilidades.
     */
    skip?: number
    distinct?: PrestadorHabilidadeScalarFieldEnum | PrestadorHabilidadeScalarFieldEnum[]
  }

  /**
   * PrestadorHabilidade create
   */
  export type PrestadorHabilidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestadorHabilidade
     */
    select?: PrestadorHabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestadorHabilidade
     */
    omit?: PrestadorHabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorHabilidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a PrestadorHabilidade.
     */
    data: XOR<PrestadorHabilidadeCreateInput, PrestadorHabilidadeUncheckedCreateInput>
  }

  /**
   * PrestadorHabilidade createMany
   */
  export type PrestadorHabilidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrestadorHabilidades.
     */
    data: PrestadorHabilidadeCreateManyInput | PrestadorHabilidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrestadorHabilidade createManyAndReturn
   */
  export type PrestadorHabilidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestadorHabilidade
     */
    select?: PrestadorHabilidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrestadorHabilidade
     */
    omit?: PrestadorHabilidadeOmit<ExtArgs> | null
    /**
     * The data used to create many PrestadorHabilidades.
     */
    data: PrestadorHabilidadeCreateManyInput | PrestadorHabilidadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorHabilidadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrestadorHabilidade update
   */
  export type PrestadorHabilidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestadorHabilidade
     */
    select?: PrestadorHabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestadorHabilidade
     */
    omit?: PrestadorHabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorHabilidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a PrestadorHabilidade.
     */
    data: XOR<PrestadorHabilidadeUpdateInput, PrestadorHabilidadeUncheckedUpdateInput>
    /**
     * Choose, which PrestadorHabilidade to update.
     */
    where: PrestadorHabilidadeWhereUniqueInput
  }

  /**
   * PrestadorHabilidade updateMany
   */
  export type PrestadorHabilidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrestadorHabilidades.
     */
    data: XOR<PrestadorHabilidadeUpdateManyMutationInput, PrestadorHabilidadeUncheckedUpdateManyInput>
    /**
     * Filter which PrestadorHabilidades to update
     */
    where?: PrestadorHabilidadeWhereInput
    /**
     * Limit how many PrestadorHabilidades to update.
     */
    limit?: number
  }

  /**
   * PrestadorHabilidade updateManyAndReturn
   */
  export type PrestadorHabilidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestadorHabilidade
     */
    select?: PrestadorHabilidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrestadorHabilidade
     */
    omit?: PrestadorHabilidadeOmit<ExtArgs> | null
    /**
     * The data used to update PrestadorHabilidades.
     */
    data: XOR<PrestadorHabilidadeUpdateManyMutationInput, PrestadorHabilidadeUncheckedUpdateManyInput>
    /**
     * Filter which PrestadorHabilidades to update
     */
    where?: PrestadorHabilidadeWhereInput
    /**
     * Limit how many PrestadorHabilidades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorHabilidadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrestadorHabilidade upsert
   */
  export type PrestadorHabilidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestadorHabilidade
     */
    select?: PrestadorHabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestadorHabilidade
     */
    omit?: PrestadorHabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorHabilidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the PrestadorHabilidade to update in case it exists.
     */
    where: PrestadorHabilidadeWhereUniqueInput
    /**
     * In case the PrestadorHabilidade found by the `where` argument doesn't exist, create a new PrestadorHabilidade with this data.
     */
    create: XOR<PrestadorHabilidadeCreateInput, PrestadorHabilidadeUncheckedCreateInput>
    /**
     * In case the PrestadorHabilidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrestadorHabilidadeUpdateInput, PrestadorHabilidadeUncheckedUpdateInput>
  }

  /**
   * PrestadorHabilidade delete
   */
  export type PrestadorHabilidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestadorHabilidade
     */
    select?: PrestadorHabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestadorHabilidade
     */
    omit?: PrestadorHabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorHabilidadeInclude<ExtArgs> | null
    /**
     * Filter which PrestadorHabilidade to delete.
     */
    where: PrestadorHabilidadeWhereUniqueInput
  }

  /**
   * PrestadorHabilidade deleteMany
   */
  export type PrestadorHabilidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrestadorHabilidades to delete
     */
    where?: PrestadorHabilidadeWhereInput
    /**
     * Limit how many PrestadorHabilidades to delete.
     */
    limit?: number
  }

  /**
   * PrestadorHabilidade without action
   */
  export type PrestadorHabilidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestadorHabilidade
     */
    select?: PrestadorHabilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestadorHabilidade
     */
    omit?: PrestadorHabilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorHabilidadeInclude<ExtArgs> | null
  }


  /**
   * Model Proposta
   */

  export type AggregateProposta = {
    _count: PropostaCountAggregateOutputType | null
    _avg: PropostaAvgAggregateOutputType | null
    _sum: PropostaSumAggregateOutputType | null
    _min: PropostaMinAggregateOutputType | null
    _max: PropostaMaxAggregateOutputType | null
  }

  export type PropostaAvgAggregateOutputType = {
    id: number | null
    valor: Decimal | null
  }

  export type PropostaSumAggregateOutputType = {
    id: number | null
    valor: Decimal | null
  }

  export type PropostaMinAggregateOutputType = {
    id: number | null
    id_contratante: string | null
    id_prestador: string | null
    titulo: string | null
    descricao: string | null
    valor: Decimal | null
    data_envio: Date | null
    data_inicio: Date | null
    data_termino: Date | null
    Status: $Enums.EnumStatusProposta | null
  }

  export type PropostaMaxAggregateOutputType = {
    id: number | null
    id_contratante: string | null
    id_prestador: string | null
    titulo: string | null
    descricao: string | null
    valor: Decimal | null
    data_envio: Date | null
    data_inicio: Date | null
    data_termino: Date | null
    Status: $Enums.EnumStatusProposta | null
  }

  export type PropostaCountAggregateOutputType = {
    id: number
    id_contratante: number
    id_prestador: number
    titulo: number
    descricao: number
    valor: number
    data_envio: number
    data_inicio: number
    data_termino: number
    Status: number
    _all: number
  }


  export type PropostaAvgAggregateInputType = {
    id?: true
    valor?: true
  }

  export type PropostaSumAggregateInputType = {
    id?: true
    valor?: true
  }

  export type PropostaMinAggregateInputType = {
    id?: true
    id_contratante?: true
    id_prestador?: true
    titulo?: true
    descricao?: true
    valor?: true
    data_envio?: true
    data_inicio?: true
    data_termino?: true
    Status?: true
  }

  export type PropostaMaxAggregateInputType = {
    id?: true
    id_contratante?: true
    id_prestador?: true
    titulo?: true
    descricao?: true
    valor?: true
    data_envio?: true
    data_inicio?: true
    data_termino?: true
    Status?: true
  }

  export type PropostaCountAggregateInputType = {
    id?: true
    id_contratante?: true
    id_prestador?: true
    titulo?: true
    descricao?: true
    valor?: true
    data_envio?: true
    data_inicio?: true
    data_termino?: true
    Status?: true
    _all?: true
  }

  export type PropostaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposta to aggregate.
     */
    where?: PropostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propostas to fetch.
     */
    orderBy?: PropostaOrderByWithRelationInput | PropostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Propostas
    **/
    _count?: true | PropostaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropostaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropostaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropostaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropostaMaxAggregateInputType
  }

  export type GetPropostaAggregateType<T extends PropostaAggregateArgs> = {
        [P in keyof T & keyof AggregateProposta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposta[P]>
      : GetScalarType<T[P], AggregateProposta[P]>
  }




  export type PropostaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropostaWhereInput
    orderBy?: PropostaOrderByWithAggregationInput | PropostaOrderByWithAggregationInput[]
    by: PropostaScalarFieldEnum[] | PropostaScalarFieldEnum
    having?: PropostaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropostaCountAggregateInputType | true
    _avg?: PropostaAvgAggregateInputType
    _sum?: PropostaSumAggregateInputType
    _min?: PropostaMinAggregateInputType
    _max?: PropostaMaxAggregateInputType
  }

  export type PropostaGroupByOutputType = {
    id: number
    id_contratante: string
    id_prestador: string
    titulo: string
    descricao: string
    valor: Decimal
    data_envio: Date
    data_inicio: Date
    data_termino: Date
    Status: $Enums.EnumStatusProposta
    _count: PropostaCountAggregateOutputType | null
    _avg: PropostaAvgAggregateOutputType | null
    _sum: PropostaSumAggregateOutputType | null
    _min: PropostaMinAggregateOutputType | null
    _max: PropostaMaxAggregateOutputType | null
  }

  type GetPropostaGroupByPayload<T extends PropostaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropostaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropostaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropostaGroupByOutputType[P]>
            : GetScalarType<T[P], PropostaGroupByOutputType[P]>
        }
      >
    >


  export type PropostaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_contratante?: boolean
    id_prestador?: boolean
    titulo?: boolean
    descricao?: boolean
    valor?: boolean
    data_envio?: boolean
    data_inicio?: boolean
    data_termino?: boolean
    Status?: boolean
    contratante?: boolean | UsuarioDefaultArgs<ExtArgs>
    prestador?: boolean | UsuarioDefaultArgs<ExtArgs>
    servicos?: boolean | Proposta$servicosArgs<ExtArgs>
    avaliacao?: boolean | Proposta$avaliacaoArgs<ExtArgs>
    _count?: boolean | PropostaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposta"]>

  export type PropostaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_contratante?: boolean
    id_prestador?: boolean
    titulo?: boolean
    descricao?: boolean
    valor?: boolean
    data_envio?: boolean
    data_inicio?: boolean
    data_termino?: boolean
    Status?: boolean
    contratante?: boolean | UsuarioDefaultArgs<ExtArgs>
    prestador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposta"]>

  export type PropostaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_contratante?: boolean
    id_prestador?: boolean
    titulo?: boolean
    descricao?: boolean
    valor?: boolean
    data_envio?: boolean
    data_inicio?: boolean
    data_termino?: boolean
    Status?: boolean
    contratante?: boolean | UsuarioDefaultArgs<ExtArgs>
    prestador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposta"]>

  export type PropostaSelectScalar = {
    id?: boolean
    id_contratante?: boolean
    id_prestador?: boolean
    titulo?: boolean
    descricao?: boolean
    valor?: boolean
    data_envio?: boolean
    data_inicio?: boolean
    data_termino?: boolean
    Status?: boolean
  }

  export type PropostaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_contratante" | "id_prestador" | "titulo" | "descricao" | "valor" | "data_envio" | "data_inicio" | "data_termino" | "Status", ExtArgs["result"]["proposta"]>
  export type PropostaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contratante?: boolean | UsuarioDefaultArgs<ExtArgs>
    prestador?: boolean | UsuarioDefaultArgs<ExtArgs>
    servicos?: boolean | Proposta$servicosArgs<ExtArgs>
    avaliacao?: boolean | Proposta$avaliacaoArgs<ExtArgs>
    _count?: boolean | PropostaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropostaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contratante?: boolean | UsuarioDefaultArgs<ExtArgs>
    prestador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PropostaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contratante?: boolean | UsuarioDefaultArgs<ExtArgs>
    prestador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PropostaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proposta"
    objects: {
      contratante: Prisma.$UsuarioPayload<ExtArgs>
      prestador: Prisma.$UsuarioPayload<ExtArgs>
      servicos: Prisma.$ServicoPayload<ExtArgs>[]
      avaliacao: Prisma.$AvaliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_contratante: string
      id_prestador: string
      titulo: string
      descricao: string
      valor: Prisma.Decimal
      data_envio: Date
      data_inicio: Date
      data_termino: Date
      Status: $Enums.EnumStatusProposta
    }, ExtArgs["result"]["proposta"]>
    composites: {}
  }

  type PropostaGetPayload<S extends boolean | null | undefined | PropostaDefaultArgs> = $Result.GetResult<Prisma.$PropostaPayload, S>

  type PropostaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropostaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropostaCountAggregateInputType | true
    }

  export interface PropostaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proposta'], meta: { name: 'Proposta' } }
    /**
     * Find zero or one Proposta that matches the filter.
     * @param {PropostaFindUniqueArgs} args - Arguments to find a Proposta
     * @example
     * // Get one Proposta
     * const proposta = await prisma.proposta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropostaFindUniqueArgs>(args: SelectSubset<T, PropostaFindUniqueArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proposta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropostaFindUniqueOrThrowArgs} args - Arguments to find a Proposta
     * @example
     * // Get one Proposta
     * const proposta = await prisma.proposta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropostaFindUniqueOrThrowArgs>(args: SelectSubset<T, PropostaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaFindFirstArgs} args - Arguments to find a Proposta
     * @example
     * // Get one Proposta
     * const proposta = await prisma.proposta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropostaFindFirstArgs>(args?: SelectSubset<T, PropostaFindFirstArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaFindFirstOrThrowArgs} args - Arguments to find a Proposta
     * @example
     * // Get one Proposta
     * const proposta = await prisma.proposta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropostaFindFirstOrThrowArgs>(args?: SelectSubset<T, PropostaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Propostas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Propostas
     * const propostas = await prisma.proposta.findMany()
     * 
     * // Get first 10 Propostas
     * const propostas = await prisma.proposta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propostaWithIdOnly = await prisma.proposta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropostaFindManyArgs>(args?: SelectSubset<T, PropostaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proposta.
     * @param {PropostaCreateArgs} args - Arguments to create a Proposta.
     * @example
     * // Create one Proposta
     * const Proposta = await prisma.proposta.create({
     *   data: {
     *     // ... data to create a Proposta
     *   }
     * })
     * 
     */
    create<T extends PropostaCreateArgs>(args: SelectSubset<T, PropostaCreateArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Propostas.
     * @param {PropostaCreateManyArgs} args - Arguments to create many Propostas.
     * @example
     * // Create many Propostas
     * const proposta = await prisma.proposta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropostaCreateManyArgs>(args?: SelectSubset<T, PropostaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Propostas and returns the data saved in the database.
     * @param {PropostaCreateManyAndReturnArgs} args - Arguments to create many Propostas.
     * @example
     * // Create many Propostas
     * const proposta = await prisma.proposta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Propostas and only return the `id`
     * const propostaWithIdOnly = await prisma.proposta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropostaCreateManyAndReturnArgs>(args?: SelectSubset<T, PropostaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proposta.
     * @param {PropostaDeleteArgs} args - Arguments to delete one Proposta.
     * @example
     * // Delete one Proposta
     * const Proposta = await prisma.proposta.delete({
     *   where: {
     *     // ... filter to delete one Proposta
     *   }
     * })
     * 
     */
    delete<T extends PropostaDeleteArgs>(args: SelectSubset<T, PropostaDeleteArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proposta.
     * @param {PropostaUpdateArgs} args - Arguments to update one Proposta.
     * @example
     * // Update one Proposta
     * const proposta = await prisma.proposta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropostaUpdateArgs>(args: SelectSubset<T, PropostaUpdateArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Propostas.
     * @param {PropostaDeleteManyArgs} args - Arguments to filter Propostas to delete.
     * @example
     * // Delete a few Propostas
     * const { count } = await prisma.proposta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropostaDeleteManyArgs>(args?: SelectSubset<T, PropostaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Propostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Propostas
     * const proposta = await prisma.proposta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropostaUpdateManyArgs>(args: SelectSubset<T, PropostaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Propostas and returns the data updated in the database.
     * @param {PropostaUpdateManyAndReturnArgs} args - Arguments to update many Propostas.
     * @example
     * // Update many Propostas
     * const proposta = await prisma.proposta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Propostas and only return the `id`
     * const propostaWithIdOnly = await prisma.proposta.updateManyAndReturn({
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
    updateManyAndReturn<T extends PropostaUpdateManyAndReturnArgs>(args: SelectSubset<T, PropostaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proposta.
     * @param {PropostaUpsertArgs} args - Arguments to update or create a Proposta.
     * @example
     * // Update or create a Proposta
     * const proposta = await prisma.proposta.upsert({
     *   create: {
     *     // ... data to create a Proposta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposta we want to update
     *   }
     * })
     */
    upsert<T extends PropostaUpsertArgs>(args: SelectSubset<T, PropostaUpsertArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Propostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaCountArgs} args - Arguments to filter Propostas to count.
     * @example
     * // Count the number of Propostas
     * const count = await prisma.proposta.count({
     *   where: {
     *     // ... the filter for the Propostas we want to count
     *   }
     * })
    **/
    count<T extends PropostaCountArgs>(
      args?: Subset<T, PropostaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropostaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropostaAggregateArgs>(args: Subset<T, PropostaAggregateArgs>): Prisma.PrismaPromise<GetPropostaAggregateType<T>>

    /**
     * Group by Proposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaGroupByArgs} args - Group by arguments.
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
      T extends PropostaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropostaGroupByArgs['orderBy'] }
        : { orderBy?: PropostaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropostaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropostaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proposta model
   */
  readonly fields: PropostaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proposta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropostaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contratante<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prestador<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servicos<T extends Proposta$servicosArgs<ExtArgs> = {}>(args?: Subset<T, Proposta$servicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avaliacao<T extends Proposta$avaliacaoArgs<ExtArgs> = {}>(args?: Subset<T, Proposta$avaliacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Proposta model
   */
  interface PropostaFieldRefs {
    readonly id: FieldRef<"Proposta", 'Int'>
    readonly id_contratante: FieldRef<"Proposta", 'String'>
    readonly id_prestador: FieldRef<"Proposta", 'String'>
    readonly titulo: FieldRef<"Proposta", 'String'>
    readonly descricao: FieldRef<"Proposta", 'String'>
    readonly valor: FieldRef<"Proposta", 'Decimal'>
    readonly data_envio: FieldRef<"Proposta", 'DateTime'>
    readonly data_inicio: FieldRef<"Proposta", 'DateTime'>
    readonly data_termino: FieldRef<"Proposta", 'DateTime'>
    readonly Status: FieldRef<"Proposta", 'EnumStatusProposta'>
  }
    

  // Custom InputTypes
  /**
   * Proposta findUnique
   */
  export type PropostaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * Filter, which Proposta to fetch.
     */
    where: PropostaWhereUniqueInput
  }

  /**
   * Proposta findUniqueOrThrow
   */
  export type PropostaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * Filter, which Proposta to fetch.
     */
    where: PropostaWhereUniqueInput
  }

  /**
   * Proposta findFirst
   */
  export type PropostaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * Filter, which Proposta to fetch.
     */
    where?: PropostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propostas to fetch.
     */
    orderBy?: PropostaOrderByWithRelationInput | PropostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Propostas.
     */
    cursor?: PropostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Propostas.
     */
    distinct?: PropostaScalarFieldEnum | PropostaScalarFieldEnum[]
  }

  /**
   * Proposta findFirstOrThrow
   */
  export type PropostaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * Filter, which Proposta to fetch.
     */
    where?: PropostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propostas to fetch.
     */
    orderBy?: PropostaOrderByWithRelationInput | PropostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Propostas.
     */
    cursor?: PropostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Propostas.
     */
    distinct?: PropostaScalarFieldEnum | PropostaScalarFieldEnum[]
  }

  /**
   * Proposta findMany
   */
  export type PropostaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * Filter, which Propostas to fetch.
     */
    where?: PropostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propostas to fetch.
     */
    orderBy?: PropostaOrderByWithRelationInput | PropostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Propostas.
     */
    cursor?: PropostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propostas.
     */
    skip?: number
    distinct?: PropostaScalarFieldEnum | PropostaScalarFieldEnum[]
  }

  /**
   * Proposta create
   */
  export type PropostaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * The data needed to create a Proposta.
     */
    data: XOR<PropostaCreateInput, PropostaUncheckedCreateInput>
  }

  /**
   * Proposta createMany
   */
  export type PropostaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Propostas.
     */
    data: PropostaCreateManyInput | PropostaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proposta createManyAndReturn
   */
  export type PropostaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * The data used to create many Propostas.
     */
    data: PropostaCreateManyInput | PropostaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proposta update
   */
  export type PropostaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * The data needed to update a Proposta.
     */
    data: XOR<PropostaUpdateInput, PropostaUncheckedUpdateInput>
    /**
     * Choose, which Proposta to update.
     */
    where: PropostaWhereUniqueInput
  }

  /**
   * Proposta updateMany
   */
  export type PropostaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Propostas.
     */
    data: XOR<PropostaUpdateManyMutationInput, PropostaUncheckedUpdateManyInput>
    /**
     * Filter which Propostas to update
     */
    where?: PropostaWhereInput
    /**
     * Limit how many Propostas to update.
     */
    limit?: number
  }

  /**
   * Proposta updateManyAndReturn
   */
  export type PropostaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * The data used to update Propostas.
     */
    data: XOR<PropostaUpdateManyMutationInput, PropostaUncheckedUpdateManyInput>
    /**
     * Filter which Propostas to update
     */
    where?: PropostaWhereInput
    /**
     * Limit how many Propostas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proposta upsert
   */
  export type PropostaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * The filter to search for the Proposta to update in case it exists.
     */
    where: PropostaWhereUniqueInput
    /**
     * In case the Proposta found by the `where` argument doesn't exist, create a new Proposta with this data.
     */
    create: XOR<PropostaCreateInput, PropostaUncheckedCreateInput>
    /**
     * In case the Proposta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropostaUpdateInput, PropostaUncheckedUpdateInput>
  }

  /**
   * Proposta delete
   */
  export type PropostaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
    /**
     * Filter which Proposta to delete.
     */
    where: PropostaWhereUniqueInput
  }

  /**
   * Proposta deleteMany
   */
  export type PropostaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Propostas to delete
     */
    where?: PropostaWhereInput
    /**
     * Limit how many Propostas to delete.
     */
    limit?: number
  }

  /**
   * Proposta.servicos
   */
  export type Proposta$servicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    cursor?: ServicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Proposta.avaliacao
   */
  export type Proposta$avaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Proposta without action
   */
  export type PropostaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposta
     */
    select?: PropostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposta
     */
    omit?: PropostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaInclude<ExtArgs> | null
  }


  /**
   * Model Servico
   */

  export type AggregateServico = {
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  export type ServicoAvgAggregateOutputType = {
    id_servico: number | null
    id_proposta: number | null
  }

  export type ServicoSumAggregateOutputType = {
    id_servico: number | null
    id_proposta: number | null
  }

  export type ServicoMinAggregateOutputType = {
    id_servico: number | null
    id_proposta: number | null
    nome_servico: string | null
    descricao: string | null
  }

  export type ServicoMaxAggregateOutputType = {
    id_servico: number | null
    id_proposta: number | null
    nome_servico: string | null
    descricao: string | null
  }

  export type ServicoCountAggregateOutputType = {
    id_servico: number
    id_proposta: number
    nome_servico: number
    descricao: number
    _all: number
  }


  export type ServicoAvgAggregateInputType = {
    id_servico?: true
    id_proposta?: true
  }

  export type ServicoSumAggregateInputType = {
    id_servico?: true
    id_proposta?: true
  }

  export type ServicoMinAggregateInputType = {
    id_servico?: true
    id_proposta?: true
    nome_servico?: true
    descricao?: true
  }

  export type ServicoMaxAggregateInputType = {
    id_servico?: true
    id_proposta?: true
    nome_servico?: true
    descricao?: true
  }

  export type ServicoCountAggregateInputType = {
    id_servico?: true
    id_proposta?: true
    nome_servico?: true
    descricao?: true
    _all?: true
  }

  export type ServicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servico to aggregate.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicos
    **/
    _count?: true | ServicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicoMaxAggregateInputType
  }

  export type GetServicoAggregateType<T extends ServicoAggregateArgs> = {
        [P in keyof T & keyof AggregateServico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServico[P]>
      : GetScalarType<T[P], AggregateServico[P]>
  }




  export type ServicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithAggregationInput | ServicoOrderByWithAggregationInput[]
    by: ServicoScalarFieldEnum[] | ServicoScalarFieldEnum
    having?: ServicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicoCountAggregateInputType | true
    _avg?: ServicoAvgAggregateInputType
    _sum?: ServicoSumAggregateInputType
    _min?: ServicoMinAggregateInputType
    _max?: ServicoMaxAggregateInputType
  }

  export type ServicoGroupByOutputType = {
    id_servico: number
    id_proposta: number
    nome_servico: string
    descricao: string
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  type GetServicoGroupByPayload<T extends ServicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicoGroupByOutputType[P]>
            : GetScalarType<T[P], ServicoGroupByOutputType[P]>
        }
      >
    >


  export type ServicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_servico?: boolean
    id_proposta?: boolean
    nome_servico?: boolean
    descricao?: boolean
    proposta?: boolean | PropostaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_servico?: boolean
    id_proposta?: boolean
    nome_servico?: boolean
    descricao?: boolean
    proposta?: boolean | PropostaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_servico?: boolean
    id_proposta?: boolean
    nome_servico?: boolean
    descricao?: boolean
    proposta?: boolean | PropostaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectScalar = {
    id_servico?: boolean
    id_proposta?: boolean
    nome_servico?: boolean
    descricao?: boolean
  }

  export type ServicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_servico" | "id_proposta" | "nome_servico" | "descricao", ExtArgs["result"]["servico"]>
  export type ServicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposta?: boolean | PropostaDefaultArgs<ExtArgs>
  }
  export type ServicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposta?: boolean | PropostaDefaultArgs<ExtArgs>
  }
  export type ServicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposta?: boolean | PropostaDefaultArgs<ExtArgs>
  }

  export type $ServicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servico"
    objects: {
      proposta: Prisma.$PropostaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_servico: number
      id_proposta: number
      nome_servico: string
      descricao: string
    }, ExtArgs["result"]["servico"]>
    composites: {}
  }

  type ServicoGetPayload<S extends boolean | null | undefined | ServicoDefaultArgs> = $Result.GetResult<Prisma.$ServicoPayload, S>

  type ServicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicoCountAggregateInputType | true
    }

  export interface ServicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servico'], meta: { name: 'Servico' } }
    /**
     * Find zero or one Servico that matches the filter.
     * @param {ServicoFindUniqueArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicoFindUniqueArgs>(args: SelectSubset<T, ServicoFindUniqueArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicoFindUniqueOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicoFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicoFindFirstArgs>(args?: SelectSubset<T, ServicoFindFirstArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicoFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicos
     * const servicos = await prisma.servico.findMany()
     * 
     * // Get first 10 Servicos
     * const servicos = await prisma.servico.findMany({ take: 10 })
     * 
     * // Only select the `id_servico`
     * const servicoWithId_servicoOnly = await prisma.servico.findMany({ select: { id_servico: true } })
     * 
     */
    findMany<T extends ServicoFindManyArgs>(args?: SelectSubset<T, ServicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servico.
     * @param {ServicoCreateArgs} args - Arguments to create a Servico.
     * @example
     * // Create one Servico
     * const Servico = await prisma.servico.create({
     *   data: {
     *     // ... data to create a Servico
     *   }
     * })
     * 
     */
    create<T extends ServicoCreateArgs>(args: SelectSubset<T, ServicoCreateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicos.
     * @param {ServicoCreateManyArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicoCreateManyArgs>(args?: SelectSubset<T, ServicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicos and returns the data saved in the database.
     * @param {ServicoCreateManyAndReturnArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicos and only return the `id_servico`
     * const servicoWithId_servicoOnly = await prisma.servico.createManyAndReturn({
     *   select: { id_servico: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicoCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servico.
     * @param {ServicoDeleteArgs} args - Arguments to delete one Servico.
     * @example
     * // Delete one Servico
     * const Servico = await prisma.servico.delete({
     *   where: {
     *     // ... filter to delete one Servico
     *   }
     * })
     * 
     */
    delete<T extends ServicoDeleteArgs>(args: SelectSubset<T, ServicoDeleteArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servico.
     * @param {ServicoUpdateArgs} args - Arguments to update one Servico.
     * @example
     * // Update one Servico
     * const servico = await prisma.servico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicoUpdateArgs>(args: SelectSubset<T, ServicoUpdateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicos.
     * @param {ServicoDeleteManyArgs} args - Arguments to filter Servicos to delete.
     * @example
     * // Delete a few Servicos
     * const { count } = await prisma.servico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicoDeleteManyArgs>(args?: SelectSubset<T, ServicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicoUpdateManyArgs>(args: SelectSubset<T, ServicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos and returns the data updated in the database.
     * @param {ServicoUpdateManyAndReturnArgs} args - Arguments to update many Servicos.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicos and only return the `id_servico`
     * const servicoWithId_servicoOnly = await prisma.servico.updateManyAndReturn({
     *   select: { id_servico: true },
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
    updateManyAndReturn<T extends ServicoUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servico.
     * @param {ServicoUpsertArgs} args - Arguments to update or create a Servico.
     * @example
     * // Update or create a Servico
     * const servico = await prisma.servico.upsert({
     *   create: {
     *     // ... data to create a Servico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servico we want to update
     *   }
     * })
     */
    upsert<T extends ServicoUpsertArgs>(args: SelectSubset<T, ServicoUpsertArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoCountArgs} args - Arguments to filter Servicos to count.
     * @example
     * // Count the number of Servicos
     * const count = await prisma.servico.count({
     *   where: {
     *     // ... the filter for the Servicos we want to count
     *   }
     * })
    **/
    count<T extends ServicoCountArgs>(
      args?: Subset<T, ServicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicoAggregateArgs>(args: Subset<T, ServicoAggregateArgs>): Prisma.PrismaPromise<GetServicoAggregateType<T>>

    /**
     * Group by Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoGroupByArgs} args - Group by arguments.
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
      T extends ServicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicoGroupByArgs['orderBy'] }
        : { orderBy?: ServicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servico model
   */
  readonly fields: ServicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proposta<T extends PropostaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropostaDefaultArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Servico model
   */
  interface ServicoFieldRefs {
    readonly id_servico: FieldRef<"Servico", 'Int'>
    readonly id_proposta: FieldRef<"Servico", 'Int'>
    readonly nome_servico: FieldRef<"Servico", 'String'>
    readonly descricao: FieldRef<"Servico", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Servico findUnique
   */
  export type ServicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findUniqueOrThrow
   */
  export type ServicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findFirst
   */
  export type ServicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findFirstOrThrow
   */
  export type ServicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findMany
   */
  export type ServicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servicos to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico create
   */
  export type ServicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The data needed to create a Servico.
     */
    data: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
  }

  /**
   * Servico createMany
   */
  export type ServicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servico createManyAndReturn
   */
  export type ServicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servico update
   */
  export type ServicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The data needed to update a Servico.
     */
    data: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
    /**
     * Choose, which Servico to update.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico updateMany
   */
  export type ServicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to update.
     */
    limit?: number
  }

  /**
   * Servico updateManyAndReturn
   */
  export type ServicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servico upsert
   */
  export type ServicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The filter to search for the Servico to update in case it exists.
     */
    where: ServicoWhereUniqueInput
    /**
     * In case the Servico found by the `where` argument doesn't exist, create a new Servico with this data.
     */
    create: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
    /**
     * In case the Servico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
  }

  /**
   * Servico delete
   */
  export type ServicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter which Servico to delete.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico deleteMany
   */
  export type ServicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicos to delete
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to delete.
     */
    limit?: number
  }

  /**
   * Servico without action
   */
  export type ServicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
  }


  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    id_proposta: number | null
    nota: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    id_proposta: number | null
    nota: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    id_proposta: number | null
    nota: number | null
    comentario: string | null
    data_avaliacao: Date | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    id_proposta: number | null
    nota: number | null
    comentario: string | null
    data_avaliacao: Date | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    id_proposta: number
    nota: number
    comentario: number
    data_avaliacao: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    id_proposta?: true
    nota?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    id_proposta?: true
    nota?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    id_proposta?: true
    nota?: true
    comentario?: true
    data_avaliacao?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    id_proposta?: true
    nota?: true
    comentario?: true
    data_avaliacao?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    id_proposta?: true
    nota?: true
    comentario?: true
    data_avaliacao?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    id_proposta: number
    nota: number
    comentario: string
    data_avaliacao: Date
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proposta?: boolean
    nota?: boolean
    comentario?: boolean
    data_avaliacao?: boolean
    proposta?: boolean | PropostaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proposta?: boolean
    nota?: boolean
    comentario?: boolean
    data_avaliacao?: boolean
    proposta?: boolean | PropostaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proposta?: boolean
    nota?: boolean
    comentario?: boolean
    data_avaliacao?: boolean
    proposta?: boolean | PropostaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectScalar = {
    id_proposta?: boolean
    nota?: boolean
    comentario?: boolean
    data_avaliacao?: boolean
  }

  export type AvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_proposta" | "nota" | "comentario" | "data_avaliacao", ExtArgs["result"]["avaliacao"]>
  export type AvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposta?: boolean | PropostaDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposta?: boolean | PropostaDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposta?: boolean | PropostaDefaultArgs<ExtArgs>
  }

  export type $AvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      proposta: Prisma.$PropostaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_proposta: number
      nota: number
      comentario: string
      data_avaliacao: Date
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacaoFindUniqueArgs>(args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacaoFindFirstArgs>(args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id_proposta`
     * const avaliacaoWithId_propostaOnly = await prisma.avaliacao.findMany({ select: { id_proposta: true } })
     * 
     */
    findMany<T extends AvaliacaoFindManyArgs>(args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends AvaliacaoCreateArgs>(args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacaos.
     * @param {AvaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacaoCreateManyArgs>(args?: SelectSubset<T, AvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avaliacaos and returns the data saved in the database.
     * @param {AvaliacaoCreateManyAndReturnArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avaliacaos and only return the `id_proposta`
     * const avaliacaoWithId_propostaOnly = await prisma.avaliacao.createManyAndReturn({
     *   select: { id_proposta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvaliacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AvaliacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends AvaliacaoDeleteArgs>(args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacaoUpdateArgs>(args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacaoDeleteManyArgs>(args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacaoUpdateManyArgs>(args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos and returns the data updated in the database.
     * @param {AvaliacaoUpdateManyAndReturnArgs} args - Arguments to update many Avaliacaos.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avaliacaos and only return the `id_proposta`
     * const avaliacaoWithId_propostaOnly = await prisma.avaliacao.updateManyAndReturn({
     *   select: { id_proposta: true },
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
    updateManyAndReturn<T extends AvaliacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, AvaliacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacaoUpsertArgs>(args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
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
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proposta<T extends PropostaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropostaDefaultArgs<ExtArgs>>): Prisma__PropostaClient<$Result.GetResult<Prisma.$PropostaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Avaliacao model
   */
  interface AvaliacaoFieldRefs {
    readonly id_proposta: FieldRef<"Avaliacao", 'Int'>
    readonly nota: FieldRef<"Avaliacao", 'Int'>
    readonly comentario: FieldRef<"Avaliacao", 'String'>
    readonly data_avaliacao: FieldRef<"Avaliacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }

  /**
   * Avaliacao createMany
   */
  export type AvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avaliacao createManyAndReturn
   */
  export type AvaliacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
  }

  /**
   * Avaliacao updateManyAndReturn
   */
  export type AvaliacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }

  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to delete.
     */
    limit?: number
  }

  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    name: 'name',
    hashedPassword: 'hashedPassword',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    valor: 'valor',
    sobre: 'sobre',
    tipo_usuario: 'tipo_usuario'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const HabilidadeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type HabilidadeScalarFieldEnum = (typeof HabilidadeScalarFieldEnum)[keyof typeof HabilidadeScalarFieldEnum]


  export const PrestadorHabilidadeScalarFieldEnum: {
    id_habilidade: 'id_habilidade',
    id_prestador: 'id_prestador',
    nivel_proeficiencia: 'nivel_proeficiencia'
  };

  export type PrestadorHabilidadeScalarFieldEnum = (typeof PrestadorHabilidadeScalarFieldEnum)[keyof typeof PrestadorHabilidadeScalarFieldEnum]


  export const PropostaScalarFieldEnum: {
    id: 'id',
    id_contratante: 'id_contratante',
    id_prestador: 'id_prestador',
    titulo: 'titulo',
    descricao: 'descricao',
    valor: 'valor',
    data_envio: 'data_envio',
    data_inicio: 'data_inicio',
    data_termino: 'data_termino',
    Status: 'Status'
  };

  export type PropostaScalarFieldEnum = (typeof PropostaScalarFieldEnum)[keyof typeof PropostaScalarFieldEnum]


  export const ServicoScalarFieldEnum: {
    id_servico: 'id_servico',
    id_proposta: 'id_proposta',
    nome_servico: 'nome_servico',
    descricao: 'descricao'
  };

  export type ServicoScalarFieldEnum = (typeof ServicoScalarFieldEnum)[keyof typeof ServicoScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    id_proposta: 'id_proposta',
    nota: 'nota',
    comentario: 'comentario',
    data_avaliacao: 'data_avaliacao'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'EnumTipoUsuario'
   */
  export type EnumEnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumTipoUsuario'>
    


  /**
   * Reference to a field of type 'EnumTipoUsuario[]'
   */
  export type ListEnumEnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumTipoUsuario[]'>
    


  /**
   * Reference to a field of type 'EnumNivelProeficiencia'
   */
  export type EnumEnumNivelProeficienciaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumNivelProeficiencia'>
    


  /**
   * Reference to a field of type 'EnumNivelProeficiencia[]'
   */
  export type ListEnumEnumNivelProeficienciaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumNivelProeficiencia[]'>
    


  /**
   * Reference to a field of type 'EnumStatusProposta'
   */
  export type EnumEnumStatusPropostaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumStatusProposta'>
    


  /**
   * Reference to a field of type 'EnumStatusProposta[]'
   */
  export type ListEnumEnumStatusPropostaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumStatusProposta[]'>
    


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


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UsuarioOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UsuarioOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    name?: StringNullableFilter<"Usuario"> | string | null
    hashedPassword?: StringNullableFilter<"Usuario"> | string | null
    email?: StringNullableFilter<"Usuario"> | string | null
    emailVerified?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    image?: StringNullableFilter<"Usuario"> | string | null
    valor?: DecimalFilter<"Usuario"> | Decimal | DecimalJsLike | number | string
    sobre?: StringFilter<"Usuario"> | string
    tipo_usuario?: EnumEnumTipoUsuarioFilter<"Usuario"> | $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeListRelationFilter
    propostas_contratadas?: PropostaListRelationFilter
    propostas_prestadas?: PropostaListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    valor?: SortOrder
    sobre?: SortOrder
    tipo_usuario?: SortOrder
    habilidades?: PrestadorHabilidadeOrderByRelationAggregateInput
    propostas_contratadas?: PropostaOrderByRelationAggregateInput
    propostas_prestadas?: PropostaOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    name?: StringNullableFilter<"Usuario"> | string | null
    hashedPassword?: StringNullableFilter<"Usuario"> | string | null
    emailVerified?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    image?: StringNullableFilter<"Usuario"> | string | null
    valor?: DecimalFilter<"Usuario"> | Decimal | DecimalJsLike | number | string
    sobre?: StringFilter<"Usuario"> | string
    tipo_usuario?: EnumEnumTipoUsuarioFilter<"Usuario"> | $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeListRelationFilter
    propostas_contratadas?: PropostaListRelationFilter
    propostas_prestadas?: PropostaListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    valor?: SortOrder
    sobre?: SortOrder
    tipo_usuario?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    name?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    hashedPassword?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    email?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    valor?: DecimalWithAggregatesFilter<"Usuario"> | Decimal | DecimalJsLike | number | string
    sobre?: StringWithAggregatesFilter<"Usuario"> | string
    tipo_usuario?: EnumEnumTipoUsuarioWithAggregatesFilter<"Usuario"> | $Enums.EnumTipoUsuario
  }

  export type HabilidadeWhereInput = {
    AND?: HabilidadeWhereInput | HabilidadeWhereInput[]
    OR?: HabilidadeWhereInput[]
    NOT?: HabilidadeWhereInput | HabilidadeWhereInput[]
    id?: IntFilter<"Habilidade"> | number
    nome?: StringFilter<"Habilidade"> | string
    descricao?: StringFilter<"Habilidade"> | string
    prestadores?: PrestadorHabilidadeListRelationFilter
  }

  export type HabilidadeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    prestadores?: PrestadorHabilidadeOrderByRelationAggregateInput
  }

  export type HabilidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HabilidadeWhereInput | HabilidadeWhereInput[]
    OR?: HabilidadeWhereInput[]
    NOT?: HabilidadeWhereInput | HabilidadeWhereInput[]
    nome?: StringFilter<"Habilidade"> | string
    descricao?: StringFilter<"Habilidade"> | string
    prestadores?: PrestadorHabilidadeListRelationFilter
  }, "id">

  export type HabilidadeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    _count?: HabilidadeCountOrderByAggregateInput
    _avg?: HabilidadeAvgOrderByAggregateInput
    _max?: HabilidadeMaxOrderByAggregateInput
    _min?: HabilidadeMinOrderByAggregateInput
    _sum?: HabilidadeSumOrderByAggregateInput
  }

  export type HabilidadeScalarWhereWithAggregatesInput = {
    AND?: HabilidadeScalarWhereWithAggregatesInput | HabilidadeScalarWhereWithAggregatesInput[]
    OR?: HabilidadeScalarWhereWithAggregatesInput[]
    NOT?: HabilidadeScalarWhereWithAggregatesInput | HabilidadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Habilidade"> | number
    nome?: StringWithAggregatesFilter<"Habilidade"> | string
    descricao?: StringWithAggregatesFilter<"Habilidade"> | string
  }

  export type PrestadorHabilidadeWhereInput = {
    AND?: PrestadorHabilidadeWhereInput | PrestadorHabilidadeWhereInput[]
    OR?: PrestadorHabilidadeWhereInput[]
    NOT?: PrestadorHabilidadeWhereInput | PrestadorHabilidadeWhereInput[]
    id_habilidade?: IntFilter<"PrestadorHabilidade"> | number
    id_prestador?: StringFilter<"PrestadorHabilidade"> | string
    nivel_proeficiencia?: EnumEnumNivelProeficienciaFilter<"PrestadorHabilidade"> | $Enums.EnumNivelProeficiencia
    habilidade?: XOR<HabilidadeScalarRelationFilter, HabilidadeWhereInput>
    prestador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type PrestadorHabilidadeOrderByWithRelationInput = {
    id_habilidade?: SortOrder
    id_prestador?: SortOrder
    nivel_proeficiencia?: SortOrder
    habilidade?: HabilidadeOrderByWithRelationInput
    prestador?: UsuarioOrderByWithRelationInput
  }

  export type PrestadorHabilidadeWhereUniqueInput = Prisma.AtLeast<{
    id_habilidade_id_prestador?: PrestadorHabilidadeId_habilidadeId_prestadorCompoundUniqueInput
    AND?: PrestadorHabilidadeWhereInput | PrestadorHabilidadeWhereInput[]
    OR?: PrestadorHabilidadeWhereInput[]
    NOT?: PrestadorHabilidadeWhereInput | PrestadorHabilidadeWhereInput[]
    id_habilidade?: IntFilter<"PrestadorHabilidade"> | number
    id_prestador?: StringFilter<"PrestadorHabilidade"> | string
    nivel_proeficiencia?: EnumEnumNivelProeficienciaFilter<"PrestadorHabilidade"> | $Enums.EnumNivelProeficiencia
    habilidade?: XOR<HabilidadeScalarRelationFilter, HabilidadeWhereInput>
    prestador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id_habilidade_id_prestador">

  export type PrestadorHabilidadeOrderByWithAggregationInput = {
    id_habilidade?: SortOrder
    id_prestador?: SortOrder
    nivel_proeficiencia?: SortOrder
    _count?: PrestadorHabilidadeCountOrderByAggregateInput
    _avg?: PrestadorHabilidadeAvgOrderByAggregateInput
    _max?: PrestadorHabilidadeMaxOrderByAggregateInput
    _min?: PrestadorHabilidadeMinOrderByAggregateInput
    _sum?: PrestadorHabilidadeSumOrderByAggregateInput
  }

  export type PrestadorHabilidadeScalarWhereWithAggregatesInput = {
    AND?: PrestadorHabilidadeScalarWhereWithAggregatesInput | PrestadorHabilidadeScalarWhereWithAggregatesInput[]
    OR?: PrestadorHabilidadeScalarWhereWithAggregatesInput[]
    NOT?: PrestadorHabilidadeScalarWhereWithAggregatesInput | PrestadorHabilidadeScalarWhereWithAggregatesInput[]
    id_habilidade?: IntWithAggregatesFilter<"PrestadorHabilidade"> | number
    id_prestador?: StringWithAggregatesFilter<"PrestadorHabilidade"> | string
    nivel_proeficiencia?: EnumEnumNivelProeficienciaWithAggregatesFilter<"PrestadorHabilidade"> | $Enums.EnumNivelProeficiencia
  }

  export type PropostaWhereInput = {
    AND?: PropostaWhereInput | PropostaWhereInput[]
    OR?: PropostaWhereInput[]
    NOT?: PropostaWhereInput | PropostaWhereInput[]
    id?: IntFilter<"Proposta"> | number
    id_contratante?: StringFilter<"Proposta"> | string
    id_prestador?: StringFilter<"Proposta"> | string
    titulo?: StringFilter<"Proposta"> | string
    descricao?: StringFilter<"Proposta"> | string
    valor?: DecimalFilter<"Proposta"> | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeFilter<"Proposta"> | Date | string
    data_inicio?: DateTimeFilter<"Proposta"> | Date | string
    data_termino?: DateTimeFilter<"Proposta"> | Date | string
    Status?: EnumEnumStatusPropostaFilter<"Proposta"> | $Enums.EnumStatusProposta
    contratante?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    prestador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    servicos?: ServicoListRelationFilter
    avaliacao?: AvaliacaoListRelationFilter
  }

  export type PropostaOrderByWithRelationInput = {
    id?: SortOrder
    id_contratante?: SortOrder
    id_prestador?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data_envio?: SortOrder
    data_inicio?: SortOrder
    data_termino?: SortOrder
    Status?: SortOrder
    contratante?: UsuarioOrderByWithRelationInput
    prestador?: UsuarioOrderByWithRelationInput
    servicos?: ServicoOrderByRelationAggregateInput
    avaliacao?: AvaliacaoOrderByRelationAggregateInput
  }

  export type PropostaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropostaWhereInput | PropostaWhereInput[]
    OR?: PropostaWhereInput[]
    NOT?: PropostaWhereInput | PropostaWhereInput[]
    id_contratante?: StringFilter<"Proposta"> | string
    id_prestador?: StringFilter<"Proposta"> | string
    titulo?: StringFilter<"Proposta"> | string
    descricao?: StringFilter<"Proposta"> | string
    valor?: DecimalFilter<"Proposta"> | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeFilter<"Proposta"> | Date | string
    data_inicio?: DateTimeFilter<"Proposta"> | Date | string
    data_termino?: DateTimeFilter<"Proposta"> | Date | string
    Status?: EnumEnumStatusPropostaFilter<"Proposta"> | $Enums.EnumStatusProposta
    contratante?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    prestador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    servicos?: ServicoListRelationFilter
    avaliacao?: AvaliacaoListRelationFilter
  }, "id">

  export type PropostaOrderByWithAggregationInput = {
    id?: SortOrder
    id_contratante?: SortOrder
    id_prestador?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data_envio?: SortOrder
    data_inicio?: SortOrder
    data_termino?: SortOrder
    Status?: SortOrder
    _count?: PropostaCountOrderByAggregateInput
    _avg?: PropostaAvgOrderByAggregateInput
    _max?: PropostaMaxOrderByAggregateInput
    _min?: PropostaMinOrderByAggregateInput
    _sum?: PropostaSumOrderByAggregateInput
  }

  export type PropostaScalarWhereWithAggregatesInput = {
    AND?: PropostaScalarWhereWithAggregatesInput | PropostaScalarWhereWithAggregatesInput[]
    OR?: PropostaScalarWhereWithAggregatesInput[]
    NOT?: PropostaScalarWhereWithAggregatesInput | PropostaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Proposta"> | number
    id_contratante?: StringWithAggregatesFilter<"Proposta"> | string
    id_prestador?: StringWithAggregatesFilter<"Proposta"> | string
    titulo?: StringWithAggregatesFilter<"Proposta"> | string
    descricao?: StringWithAggregatesFilter<"Proposta"> | string
    valor?: DecimalWithAggregatesFilter<"Proposta"> | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeWithAggregatesFilter<"Proposta"> | Date | string
    data_inicio?: DateTimeWithAggregatesFilter<"Proposta"> | Date | string
    data_termino?: DateTimeWithAggregatesFilter<"Proposta"> | Date | string
    Status?: EnumEnumStatusPropostaWithAggregatesFilter<"Proposta"> | $Enums.EnumStatusProposta
  }

  export type ServicoWhereInput = {
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    id_servico?: IntFilter<"Servico"> | number
    id_proposta?: IntFilter<"Servico"> | number
    nome_servico?: StringFilter<"Servico"> | string
    descricao?: StringFilter<"Servico"> | string
    proposta?: XOR<PropostaScalarRelationFilter, PropostaWhereInput>
  }

  export type ServicoOrderByWithRelationInput = {
    id_servico?: SortOrder
    id_proposta?: SortOrder
    nome_servico?: SortOrder
    descricao?: SortOrder
    proposta?: PropostaOrderByWithRelationInput
  }

  export type ServicoWhereUniqueInput = Prisma.AtLeast<{
    id_servico_id_proposta?: ServicoId_servicoId_propostaCompoundUniqueInput
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    id_servico?: IntFilter<"Servico"> | number
    id_proposta?: IntFilter<"Servico"> | number
    nome_servico?: StringFilter<"Servico"> | string
    descricao?: StringFilter<"Servico"> | string
    proposta?: XOR<PropostaScalarRelationFilter, PropostaWhereInput>
  }, "id_servico_id_proposta">

  export type ServicoOrderByWithAggregationInput = {
    id_servico?: SortOrder
    id_proposta?: SortOrder
    nome_servico?: SortOrder
    descricao?: SortOrder
    _count?: ServicoCountOrderByAggregateInput
    _avg?: ServicoAvgOrderByAggregateInput
    _max?: ServicoMaxOrderByAggregateInput
    _min?: ServicoMinOrderByAggregateInput
    _sum?: ServicoSumOrderByAggregateInput
  }

  export type ServicoScalarWhereWithAggregatesInput = {
    AND?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    OR?: ServicoScalarWhereWithAggregatesInput[]
    NOT?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    id_servico?: IntWithAggregatesFilter<"Servico"> | number
    id_proposta?: IntWithAggregatesFilter<"Servico"> | number
    nome_servico?: StringWithAggregatesFilter<"Servico"> | string
    descricao?: StringWithAggregatesFilter<"Servico"> | string
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    id_proposta?: IntFilter<"Avaliacao"> | number
    nota?: IntFilter<"Avaliacao"> | number
    comentario?: StringFilter<"Avaliacao"> | string
    data_avaliacao?: DateTimeFilter<"Avaliacao"> | Date | string
    proposta?: XOR<PropostaScalarRelationFilter, PropostaWhereInput>
  }

  export type AvaliacaoOrderByWithRelationInput = {
    id_proposta?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    data_avaliacao?: SortOrder
    proposta?: PropostaOrderByWithRelationInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id_proposta?: number
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    nota?: IntFilter<"Avaliacao"> | number
    comentario?: StringFilter<"Avaliacao"> | string
    data_avaliacao?: DateTimeFilter<"Avaliacao"> | Date | string
    proposta?: XOR<PropostaScalarRelationFilter, PropostaWhereInput>
  }, "id_proposta">

  export type AvaliacaoOrderByWithAggregationInput = {
    id_proposta?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    data_avaliacao?: SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _avg?: AvaliacaoAvgOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
    _sum?: AvaliacaoSumOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    id_proposta?: IntWithAggregatesFilter<"Avaliacao"> | number
    nota?: IntWithAggregatesFilter<"Avaliacao"> | number
    comentario?: StringWithAggregatesFilter<"Avaliacao"> | string
    data_avaliacao?: DateTimeWithAggregatesFilter<"Avaliacao"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UsuarioCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsuarioUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UsuarioCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    valor: Decimal | DecimalJsLike | number | string
    sobre: string
    tipo_usuario: $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeCreateNestedManyWithoutPrestadorInput
    propostas_contratadas?: PropostaCreateNestedManyWithoutContratanteInput
    propostas_prestadas?: PropostaCreateNestedManyWithoutPrestadorInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    valor: Decimal | DecimalJsLike | number | string
    sobre: string
    tipo_usuario: $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeUncheckedCreateNestedManyWithoutPrestadorInput
    propostas_contratadas?: PropostaUncheckedCreateNestedManyWithoutContratanteInput
    propostas_prestadas?: PropostaUncheckedCreateNestedManyWithoutPrestadorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sobre?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumEnumTipoUsuarioFieldUpdateOperationsInput | $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeUpdateManyWithoutPrestadorNestedInput
    propostas_contratadas?: PropostaUpdateManyWithoutContratanteNestedInput
    propostas_prestadas?: PropostaUpdateManyWithoutPrestadorNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sobre?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumEnumTipoUsuarioFieldUpdateOperationsInput | $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeUncheckedUpdateManyWithoutPrestadorNestedInput
    propostas_contratadas?: PropostaUncheckedUpdateManyWithoutContratanteNestedInput
    propostas_prestadas?: PropostaUncheckedUpdateManyWithoutPrestadorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    valor: Decimal | DecimalJsLike | number | string
    sobre: string
    tipo_usuario: $Enums.EnumTipoUsuario
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sobre?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumEnumTipoUsuarioFieldUpdateOperationsInput | $Enums.EnumTipoUsuario
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sobre?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumEnumTipoUsuarioFieldUpdateOperationsInput | $Enums.EnumTipoUsuario
  }

  export type HabilidadeCreateInput = {
    nome: string
    descricao: string
    prestadores?: PrestadorHabilidadeCreateNestedManyWithoutHabilidadeInput
  }

  export type HabilidadeUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    prestadores?: PrestadorHabilidadeUncheckedCreateNestedManyWithoutHabilidadeInput
  }

  export type HabilidadeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    prestadores?: PrestadorHabilidadeUpdateManyWithoutHabilidadeNestedInput
  }

  export type HabilidadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    prestadores?: PrestadorHabilidadeUncheckedUpdateManyWithoutHabilidadeNestedInput
  }

  export type HabilidadeCreateManyInput = {
    id?: number
    nome: string
    descricao: string
  }

  export type HabilidadeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type HabilidadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type PrestadorHabilidadeCreateInput = {
    nivel_proeficiencia: $Enums.EnumNivelProeficiencia
    habilidade: HabilidadeCreateNestedOneWithoutPrestadoresInput
    prestador: UsuarioCreateNestedOneWithoutHabilidadesInput
  }

  export type PrestadorHabilidadeUncheckedCreateInput = {
    id_habilidade: number
    id_prestador: string
    nivel_proeficiencia: $Enums.EnumNivelProeficiencia
  }

  export type PrestadorHabilidadeUpdateInput = {
    nivel_proeficiencia?: EnumEnumNivelProeficienciaFieldUpdateOperationsInput | $Enums.EnumNivelProeficiencia
    habilidade?: HabilidadeUpdateOneRequiredWithoutPrestadoresNestedInput
    prestador?: UsuarioUpdateOneRequiredWithoutHabilidadesNestedInput
  }

  export type PrestadorHabilidadeUncheckedUpdateInput = {
    id_habilidade?: IntFieldUpdateOperationsInput | number
    id_prestador?: StringFieldUpdateOperationsInput | string
    nivel_proeficiencia?: EnumEnumNivelProeficienciaFieldUpdateOperationsInput | $Enums.EnumNivelProeficiencia
  }

  export type PrestadorHabilidadeCreateManyInput = {
    id_habilidade: number
    id_prestador: string
    nivel_proeficiencia: $Enums.EnumNivelProeficiencia
  }

  export type PrestadorHabilidadeUpdateManyMutationInput = {
    nivel_proeficiencia?: EnumEnumNivelProeficienciaFieldUpdateOperationsInput | $Enums.EnumNivelProeficiencia
  }

  export type PrestadorHabilidadeUncheckedUpdateManyInput = {
    id_habilidade?: IntFieldUpdateOperationsInput | number
    id_prestador?: StringFieldUpdateOperationsInput | string
    nivel_proeficiencia?: EnumEnumNivelProeficienciaFieldUpdateOperationsInput | $Enums.EnumNivelProeficiencia
  }

  export type PropostaCreateInput = {
    titulo: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_envio?: Date | string
    data_inicio: Date | string
    data_termino: Date | string
    Status: $Enums.EnumStatusProposta
    contratante: UsuarioCreateNestedOneWithoutPropostas_contratadasInput
    prestador: UsuarioCreateNestedOneWithoutPropostas_prestadasInput
    servicos?: ServicoCreateNestedManyWithoutPropostaInput
    avaliacao?: AvaliacaoCreateNestedManyWithoutPropostaInput
  }

  export type PropostaUncheckedCreateInput = {
    id?: number
    id_contratante: string
    id_prestador: string
    titulo: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_envio?: Date | string
    data_inicio: Date | string
    data_termino: Date | string
    Status: $Enums.EnumStatusProposta
    servicos?: ServicoUncheckedCreateNestedManyWithoutPropostaInput
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutPropostaInput
  }

  export type PropostaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumEnumStatusPropostaFieldUpdateOperationsInput | $Enums.EnumStatusProposta
    contratante?: UsuarioUpdateOneRequiredWithoutPropostas_contratadasNestedInput
    prestador?: UsuarioUpdateOneRequiredWithoutPropostas_prestadasNestedInput
    servicos?: ServicoUpdateManyWithoutPropostaNestedInput
    avaliacao?: AvaliacaoUpdateManyWithoutPropostaNestedInput
  }

  export type PropostaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_contratante?: StringFieldUpdateOperationsInput | string
    id_prestador?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumEnumStatusPropostaFieldUpdateOperationsInput | $Enums.EnumStatusProposta
    servicos?: ServicoUncheckedUpdateManyWithoutPropostaNestedInput
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutPropostaNestedInput
  }

  export type PropostaCreateManyInput = {
    id?: number
    id_contratante: string
    id_prestador: string
    titulo: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_envio?: Date | string
    data_inicio: Date | string
    data_termino: Date | string
    Status: $Enums.EnumStatusProposta
  }

  export type PropostaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumEnumStatusPropostaFieldUpdateOperationsInput | $Enums.EnumStatusProposta
  }

  export type PropostaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_contratante?: StringFieldUpdateOperationsInput | string
    id_prestador?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumEnumStatusPropostaFieldUpdateOperationsInput | $Enums.EnumStatusProposta
  }

  export type ServicoCreateInput = {
    id_servico: number
    nome_servico: string
    descricao: string
    proposta: PropostaCreateNestedOneWithoutServicosInput
  }

  export type ServicoUncheckedCreateInput = {
    id_servico: number
    id_proposta: number
    nome_servico: string
    descricao: string
  }

  export type ServicoUpdateInput = {
    id_servico?: IntFieldUpdateOperationsInput | number
    nome_servico?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    proposta?: PropostaUpdateOneRequiredWithoutServicosNestedInput
  }

  export type ServicoUncheckedUpdateInput = {
    id_servico?: IntFieldUpdateOperationsInput | number
    id_proposta?: IntFieldUpdateOperationsInput | number
    nome_servico?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ServicoCreateManyInput = {
    id_servico: number
    id_proposta: number
    nome_servico: string
    descricao: string
  }

  export type ServicoUpdateManyMutationInput = {
    id_servico?: IntFieldUpdateOperationsInput | number
    nome_servico?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ServicoUncheckedUpdateManyInput = {
    id_servico?: IntFieldUpdateOperationsInput | number
    id_proposta?: IntFieldUpdateOperationsInput | number
    nome_servico?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoCreateInput = {
    nota: number
    comentario: string
    data_avaliacao: Date | string
    proposta: PropostaCreateNestedOneWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    id_proposta: number
    nota: number
    comentario: string
    data_avaliacao: Date | string
  }

  export type AvaliacaoUpdateInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    proposta?: PropostaUpdateOneRequiredWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    id_proposta?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoCreateManyInput = {
    id_proposta: number
    nota: number
    comentario: string
    data_avaliacao: Date | string
  }

  export type AvaliacaoUpdateManyMutationInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    id_proposta?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumEnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumTipoUsuario | EnumEnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.EnumTipoUsuario[] | ListEnumEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumTipoUsuario[] | ListEnumEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumTipoUsuarioFilter<$PrismaModel> | $Enums.EnumTipoUsuario
  }

  export type PrestadorHabilidadeListRelationFilter = {
    every?: PrestadorHabilidadeWhereInput
    some?: PrestadorHabilidadeWhereInput
    none?: PrestadorHabilidadeWhereInput
  }

  export type PropostaListRelationFilter = {
    every?: PropostaWhereInput
    some?: PropostaWhereInput
    none?: PropostaWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PrestadorHabilidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropostaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hashedPassword?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    valor?: SortOrder
    sobre?: SortOrder
    tipo_usuario?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hashedPassword?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    valor?: SortOrder
    sobre?: SortOrder
    tipo_usuario?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hashedPassword?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    valor?: SortOrder
    sobre?: SortOrder
    tipo_usuario?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumEnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumTipoUsuario | EnumEnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.EnumTipoUsuario[] | ListEnumEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumTipoUsuario[] | ListEnumEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.EnumTipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumEnumTipoUsuarioFilter<$PrismaModel>
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

  export type HabilidadeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type HabilidadeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HabilidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type HabilidadeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type HabilidadeSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumEnumNivelProeficienciaFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumNivelProeficiencia | EnumEnumNivelProeficienciaFieldRefInput<$PrismaModel>
    in?: $Enums.EnumNivelProeficiencia[] | ListEnumEnumNivelProeficienciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumNivelProeficiencia[] | ListEnumEnumNivelProeficienciaFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumNivelProeficienciaFilter<$PrismaModel> | $Enums.EnumNivelProeficiencia
  }

  export type HabilidadeScalarRelationFilter = {
    is?: HabilidadeWhereInput
    isNot?: HabilidadeWhereInput
  }

  export type PrestadorHabilidadeId_habilidadeId_prestadorCompoundUniqueInput = {
    id_habilidade: number
    id_prestador: string
  }

  export type PrestadorHabilidadeCountOrderByAggregateInput = {
    id_habilidade?: SortOrder
    id_prestador?: SortOrder
    nivel_proeficiencia?: SortOrder
  }

  export type PrestadorHabilidadeAvgOrderByAggregateInput = {
    id_habilidade?: SortOrder
  }

  export type PrestadorHabilidadeMaxOrderByAggregateInput = {
    id_habilidade?: SortOrder
    id_prestador?: SortOrder
    nivel_proeficiencia?: SortOrder
  }

  export type PrestadorHabilidadeMinOrderByAggregateInput = {
    id_habilidade?: SortOrder
    id_prestador?: SortOrder
    nivel_proeficiencia?: SortOrder
  }

  export type PrestadorHabilidadeSumOrderByAggregateInput = {
    id_habilidade?: SortOrder
  }

  export type EnumEnumNivelProeficienciaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumNivelProeficiencia | EnumEnumNivelProeficienciaFieldRefInput<$PrismaModel>
    in?: $Enums.EnumNivelProeficiencia[] | ListEnumEnumNivelProeficienciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumNivelProeficiencia[] | ListEnumEnumNivelProeficienciaFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumNivelProeficienciaWithAggregatesFilter<$PrismaModel> | $Enums.EnumNivelProeficiencia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnumNivelProeficienciaFilter<$PrismaModel>
    _max?: NestedEnumEnumNivelProeficienciaFilter<$PrismaModel>
  }

  export type EnumEnumStatusPropostaFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumStatusProposta | EnumEnumStatusPropostaFieldRefInput<$PrismaModel>
    in?: $Enums.EnumStatusProposta[] | ListEnumEnumStatusPropostaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumStatusProposta[] | ListEnumEnumStatusPropostaFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumStatusPropostaFilter<$PrismaModel> | $Enums.EnumStatusProposta
  }

  export type ServicoListRelationFilter = {
    every?: ServicoWhereInput
    some?: ServicoWhereInput
    none?: ServicoWhereInput
  }

  export type AvaliacaoListRelationFilter = {
    every?: AvaliacaoWhereInput
    some?: AvaliacaoWhereInput
    none?: AvaliacaoWhereInput
  }

  export type ServicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropostaCountOrderByAggregateInput = {
    id?: SortOrder
    id_contratante?: SortOrder
    id_prestador?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data_envio?: SortOrder
    data_inicio?: SortOrder
    data_termino?: SortOrder
    Status?: SortOrder
  }

  export type PropostaAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
  }

  export type PropostaMaxOrderByAggregateInput = {
    id?: SortOrder
    id_contratante?: SortOrder
    id_prestador?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data_envio?: SortOrder
    data_inicio?: SortOrder
    data_termino?: SortOrder
    Status?: SortOrder
  }

  export type PropostaMinOrderByAggregateInput = {
    id?: SortOrder
    id_contratante?: SortOrder
    id_prestador?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data_envio?: SortOrder
    data_inicio?: SortOrder
    data_termino?: SortOrder
    Status?: SortOrder
  }

  export type PropostaSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
  }

  export type EnumEnumStatusPropostaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumStatusProposta | EnumEnumStatusPropostaFieldRefInput<$PrismaModel>
    in?: $Enums.EnumStatusProposta[] | ListEnumEnumStatusPropostaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumStatusProposta[] | ListEnumEnumStatusPropostaFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumStatusPropostaWithAggregatesFilter<$PrismaModel> | $Enums.EnumStatusProposta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnumStatusPropostaFilter<$PrismaModel>
    _max?: NestedEnumEnumStatusPropostaFilter<$PrismaModel>
  }

  export type PropostaScalarRelationFilter = {
    is?: PropostaWhereInput
    isNot?: PropostaWhereInput
  }

  export type ServicoId_servicoId_propostaCompoundUniqueInput = {
    id_servico: number
    id_proposta: number
  }

  export type ServicoCountOrderByAggregateInput = {
    id_servico?: SortOrder
    id_proposta?: SortOrder
    nome_servico?: SortOrder
    descricao?: SortOrder
  }

  export type ServicoAvgOrderByAggregateInput = {
    id_servico?: SortOrder
    id_proposta?: SortOrder
  }

  export type ServicoMaxOrderByAggregateInput = {
    id_servico?: SortOrder
    id_proposta?: SortOrder
    nome_servico?: SortOrder
    descricao?: SortOrder
  }

  export type ServicoMinOrderByAggregateInput = {
    id_servico?: SortOrder
    id_proposta?: SortOrder
    nome_servico?: SortOrder
    descricao?: SortOrder
  }

  export type ServicoSumOrderByAggregateInput = {
    id_servico?: SortOrder
    id_proposta?: SortOrder
  }

  export type AvaliacaoCountOrderByAggregateInput = {
    id_proposta?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    data_avaliacao?: SortOrder
  }

  export type AvaliacaoAvgOrderByAggregateInput = {
    id_proposta?: SortOrder
    nota?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    id_proposta?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    data_avaliacao?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    id_proposta?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    data_avaliacao?: SortOrder
  }

  export type AvaliacaoSumOrderByAggregateInput = {
    id_proposta?: SortOrder
    nota?: SortOrder
  }

  export type UsuarioCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UsuarioCreateWithoutAccountsInput, UsuarioUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAccountsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UsuarioCreateWithoutAccountsInput, UsuarioUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAccountsInput
    upsert?: UsuarioUpsertWithoutAccountsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAccountsInput, UsuarioUpdateWithoutAccountsInput>, UsuarioUncheckedUpdateWithoutAccountsInput>
  }

  export type UsuarioCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UsuarioCreateWithoutSessionsInput, UsuarioUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSessionsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UsuarioCreateWithoutSessionsInput, UsuarioUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSessionsInput
    upsert?: UsuarioUpsertWithoutSessionsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSessionsInput, UsuarioUpdateWithoutSessionsInput>, UsuarioUncheckedUpdateWithoutSessionsInput>
  }

  export type PrestadorHabilidadeCreateNestedManyWithoutPrestadorInput = {
    create?: XOR<PrestadorHabilidadeCreateWithoutPrestadorInput, PrestadorHabilidadeUncheckedCreateWithoutPrestadorInput> | PrestadorHabilidadeCreateWithoutPrestadorInput[] | PrestadorHabilidadeUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: PrestadorHabilidadeCreateOrConnectWithoutPrestadorInput | PrestadorHabilidadeCreateOrConnectWithoutPrestadorInput[]
    createMany?: PrestadorHabilidadeCreateManyPrestadorInputEnvelope
    connect?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
  }

  export type PropostaCreateNestedManyWithoutContratanteInput = {
    create?: XOR<PropostaCreateWithoutContratanteInput, PropostaUncheckedCreateWithoutContratanteInput> | PropostaCreateWithoutContratanteInput[] | PropostaUncheckedCreateWithoutContratanteInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutContratanteInput | PropostaCreateOrConnectWithoutContratanteInput[]
    createMany?: PropostaCreateManyContratanteInputEnvelope
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
  }

  export type PropostaCreateNestedManyWithoutPrestadorInput = {
    create?: XOR<PropostaCreateWithoutPrestadorInput, PropostaUncheckedCreateWithoutPrestadorInput> | PropostaCreateWithoutPrestadorInput[] | PropostaUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutPrestadorInput | PropostaCreateOrConnectWithoutPrestadorInput[]
    createMany?: PropostaCreateManyPrestadorInputEnvelope
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PrestadorHabilidadeUncheckedCreateNestedManyWithoutPrestadorInput = {
    create?: XOR<PrestadorHabilidadeCreateWithoutPrestadorInput, PrestadorHabilidadeUncheckedCreateWithoutPrestadorInput> | PrestadorHabilidadeCreateWithoutPrestadorInput[] | PrestadorHabilidadeUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: PrestadorHabilidadeCreateOrConnectWithoutPrestadorInput | PrestadorHabilidadeCreateOrConnectWithoutPrestadorInput[]
    createMany?: PrestadorHabilidadeCreateManyPrestadorInputEnvelope
    connect?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
  }

  export type PropostaUncheckedCreateNestedManyWithoutContratanteInput = {
    create?: XOR<PropostaCreateWithoutContratanteInput, PropostaUncheckedCreateWithoutContratanteInput> | PropostaCreateWithoutContratanteInput[] | PropostaUncheckedCreateWithoutContratanteInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutContratanteInput | PropostaCreateOrConnectWithoutContratanteInput[]
    createMany?: PropostaCreateManyContratanteInputEnvelope
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
  }

  export type PropostaUncheckedCreateNestedManyWithoutPrestadorInput = {
    create?: XOR<PropostaCreateWithoutPrestadorInput, PropostaUncheckedCreateWithoutPrestadorInput> | PropostaCreateWithoutPrestadorInput[] | PropostaUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutPrestadorInput | PropostaCreateOrConnectWithoutPrestadorInput[]
    createMany?: PropostaCreateManyPrestadorInputEnvelope
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumEnumTipoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.EnumTipoUsuario
  }

  export type PrestadorHabilidadeUpdateManyWithoutPrestadorNestedInput = {
    create?: XOR<PrestadorHabilidadeCreateWithoutPrestadorInput, PrestadorHabilidadeUncheckedCreateWithoutPrestadorInput> | PrestadorHabilidadeCreateWithoutPrestadorInput[] | PrestadorHabilidadeUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: PrestadorHabilidadeCreateOrConnectWithoutPrestadorInput | PrestadorHabilidadeCreateOrConnectWithoutPrestadorInput[]
    upsert?: PrestadorHabilidadeUpsertWithWhereUniqueWithoutPrestadorInput | PrestadorHabilidadeUpsertWithWhereUniqueWithoutPrestadorInput[]
    createMany?: PrestadorHabilidadeCreateManyPrestadorInputEnvelope
    set?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
    disconnect?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
    delete?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
    connect?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
    update?: PrestadorHabilidadeUpdateWithWhereUniqueWithoutPrestadorInput | PrestadorHabilidadeUpdateWithWhereUniqueWithoutPrestadorInput[]
    updateMany?: PrestadorHabilidadeUpdateManyWithWhereWithoutPrestadorInput | PrestadorHabilidadeUpdateManyWithWhereWithoutPrestadorInput[]
    deleteMany?: PrestadorHabilidadeScalarWhereInput | PrestadorHabilidadeScalarWhereInput[]
  }

  export type PropostaUpdateManyWithoutContratanteNestedInput = {
    create?: XOR<PropostaCreateWithoutContratanteInput, PropostaUncheckedCreateWithoutContratanteInput> | PropostaCreateWithoutContratanteInput[] | PropostaUncheckedCreateWithoutContratanteInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutContratanteInput | PropostaCreateOrConnectWithoutContratanteInput[]
    upsert?: PropostaUpsertWithWhereUniqueWithoutContratanteInput | PropostaUpsertWithWhereUniqueWithoutContratanteInput[]
    createMany?: PropostaCreateManyContratanteInputEnvelope
    set?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    disconnect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    delete?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    update?: PropostaUpdateWithWhereUniqueWithoutContratanteInput | PropostaUpdateWithWhereUniqueWithoutContratanteInput[]
    updateMany?: PropostaUpdateManyWithWhereWithoutContratanteInput | PropostaUpdateManyWithWhereWithoutContratanteInput[]
    deleteMany?: PropostaScalarWhereInput | PropostaScalarWhereInput[]
  }

  export type PropostaUpdateManyWithoutPrestadorNestedInput = {
    create?: XOR<PropostaCreateWithoutPrestadorInput, PropostaUncheckedCreateWithoutPrestadorInput> | PropostaCreateWithoutPrestadorInput[] | PropostaUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutPrestadorInput | PropostaCreateOrConnectWithoutPrestadorInput[]
    upsert?: PropostaUpsertWithWhereUniqueWithoutPrestadorInput | PropostaUpsertWithWhereUniqueWithoutPrestadorInput[]
    createMany?: PropostaCreateManyPrestadorInputEnvelope
    set?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    disconnect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    delete?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    update?: PropostaUpdateWithWhereUniqueWithoutPrestadorInput | PropostaUpdateWithWhereUniqueWithoutPrestadorInput[]
    updateMany?: PropostaUpdateManyWithWhereWithoutPrestadorInput | PropostaUpdateManyWithWhereWithoutPrestadorInput[]
    deleteMany?: PropostaScalarWhereInput | PropostaScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PrestadorHabilidadeUncheckedUpdateManyWithoutPrestadorNestedInput = {
    create?: XOR<PrestadorHabilidadeCreateWithoutPrestadorInput, PrestadorHabilidadeUncheckedCreateWithoutPrestadorInput> | PrestadorHabilidadeCreateWithoutPrestadorInput[] | PrestadorHabilidadeUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: PrestadorHabilidadeCreateOrConnectWithoutPrestadorInput | PrestadorHabilidadeCreateOrConnectWithoutPrestadorInput[]
    upsert?: PrestadorHabilidadeUpsertWithWhereUniqueWithoutPrestadorInput | PrestadorHabilidadeUpsertWithWhereUniqueWithoutPrestadorInput[]
    createMany?: PrestadorHabilidadeCreateManyPrestadorInputEnvelope
    set?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
    disconnect?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
    delete?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
    connect?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
    update?: PrestadorHabilidadeUpdateWithWhereUniqueWithoutPrestadorInput | PrestadorHabilidadeUpdateWithWhereUniqueWithoutPrestadorInput[]
    updateMany?: PrestadorHabilidadeUpdateManyWithWhereWithoutPrestadorInput | PrestadorHabilidadeUpdateManyWithWhereWithoutPrestadorInput[]
    deleteMany?: PrestadorHabilidadeScalarWhereInput | PrestadorHabilidadeScalarWhereInput[]
  }

  export type PropostaUncheckedUpdateManyWithoutContratanteNestedInput = {
    create?: XOR<PropostaCreateWithoutContratanteInput, PropostaUncheckedCreateWithoutContratanteInput> | PropostaCreateWithoutContratanteInput[] | PropostaUncheckedCreateWithoutContratanteInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutContratanteInput | PropostaCreateOrConnectWithoutContratanteInput[]
    upsert?: PropostaUpsertWithWhereUniqueWithoutContratanteInput | PropostaUpsertWithWhereUniqueWithoutContratanteInput[]
    createMany?: PropostaCreateManyContratanteInputEnvelope
    set?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    disconnect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    delete?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    update?: PropostaUpdateWithWhereUniqueWithoutContratanteInput | PropostaUpdateWithWhereUniqueWithoutContratanteInput[]
    updateMany?: PropostaUpdateManyWithWhereWithoutContratanteInput | PropostaUpdateManyWithWhereWithoutContratanteInput[]
    deleteMany?: PropostaScalarWhereInput | PropostaScalarWhereInput[]
  }

  export type PropostaUncheckedUpdateManyWithoutPrestadorNestedInput = {
    create?: XOR<PropostaCreateWithoutPrestadorInput, PropostaUncheckedCreateWithoutPrestadorInput> | PropostaCreateWithoutPrestadorInput[] | PropostaUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: PropostaCreateOrConnectWithoutPrestadorInput | PropostaCreateOrConnectWithoutPrestadorInput[]
    upsert?: PropostaUpsertWithWhereUniqueWithoutPrestadorInput | PropostaUpsertWithWhereUniqueWithoutPrestadorInput[]
    createMany?: PropostaCreateManyPrestadorInputEnvelope
    set?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    disconnect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    delete?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    connect?: PropostaWhereUniqueInput | PropostaWhereUniqueInput[]
    update?: PropostaUpdateWithWhereUniqueWithoutPrestadorInput | PropostaUpdateWithWhereUniqueWithoutPrestadorInput[]
    updateMany?: PropostaUpdateManyWithWhereWithoutPrestadorInput | PropostaUpdateManyWithWhereWithoutPrestadorInput[]
    deleteMany?: PropostaScalarWhereInput | PropostaScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PrestadorHabilidadeCreateNestedManyWithoutHabilidadeInput = {
    create?: XOR<PrestadorHabilidadeCreateWithoutHabilidadeInput, PrestadorHabilidadeUncheckedCreateWithoutHabilidadeInput> | PrestadorHabilidadeCreateWithoutHabilidadeInput[] | PrestadorHabilidadeUncheckedCreateWithoutHabilidadeInput[]
    connectOrCreate?: PrestadorHabilidadeCreateOrConnectWithoutHabilidadeInput | PrestadorHabilidadeCreateOrConnectWithoutHabilidadeInput[]
    createMany?: PrestadorHabilidadeCreateManyHabilidadeInputEnvelope
    connect?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
  }

  export type PrestadorHabilidadeUncheckedCreateNestedManyWithoutHabilidadeInput = {
    create?: XOR<PrestadorHabilidadeCreateWithoutHabilidadeInput, PrestadorHabilidadeUncheckedCreateWithoutHabilidadeInput> | PrestadorHabilidadeCreateWithoutHabilidadeInput[] | PrestadorHabilidadeUncheckedCreateWithoutHabilidadeInput[]
    connectOrCreate?: PrestadorHabilidadeCreateOrConnectWithoutHabilidadeInput | PrestadorHabilidadeCreateOrConnectWithoutHabilidadeInput[]
    createMany?: PrestadorHabilidadeCreateManyHabilidadeInputEnvelope
    connect?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
  }

  export type PrestadorHabilidadeUpdateManyWithoutHabilidadeNestedInput = {
    create?: XOR<PrestadorHabilidadeCreateWithoutHabilidadeInput, PrestadorHabilidadeUncheckedCreateWithoutHabilidadeInput> | PrestadorHabilidadeCreateWithoutHabilidadeInput[] | PrestadorHabilidadeUncheckedCreateWithoutHabilidadeInput[]
    connectOrCreate?: PrestadorHabilidadeCreateOrConnectWithoutHabilidadeInput | PrestadorHabilidadeCreateOrConnectWithoutHabilidadeInput[]
    upsert?: PrestadorHabilidadeUpsertWithWhereUniqueWithoutHabilidadeInput | PrestadorHabilidadeUpsertWithWhereUniqueWithoutHabilidadeInput[]
    createMany?: PrestadorHabilidadeCreateManyHabilidadeInputEnvelope
    set?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
    disconnect?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
    delete?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
    connect?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
    update?: PrestadorHabilidadeUpdateWithWhereUniqueWithoutHabilidadeInput | PrestadorHabilidadeUpdateWithWhereUniqueWithoutHabilidadeInput[]
    updateMany?: PrestadorHabilidadeUpdateManyWithWhereWithoutHabilidadeInput | PrestadorHabilidadeUpdateManyWithWhereWithoutHabilidadeInput[]
    deleteMany?: PrestadorHabilidadeScalarWhereInput | PrestadorHabilidadeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PrestadorHabilidadeUncheckedUpdateManyWithoutHabilidadeNestedInput = {
    create?: XOR<PrestadorHabilidadeCreateWithoutHabilidadeInput, PrestadorHabilidadeUncheckedCreateWithoutHabilidadeInput> | PrestadorHabilidadeCreateWithoutHabilidadeInput[] | PrestadorHabilidadeUncheckedCreateWithoutHabilidadeInput[]
    connectOrCreate?: PrestadorHabilidadeCreateOrConnectWithoutHabilidadeInput | PrestadorHabilidadeCreateOrConnectWithoutHabilidadeInput[]
    upsert?: PrestadorHabilidadeUpsertWithWhereUniqueWithoutHabilidadeInput | PrestadorHabilidadeUpsertWithWhereUniqueWithoutHabilidadeInput[]
    createMany?: PrestadorHabilidadeCreateManyHabilidadeInputEnvelope
    set?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
    disconnect?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
    delete?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
    connect?: PrestadorHabilidadeWhereUniqueInput | PrestadorHabilidadeWhereUniqueInput[]
    update?: PrestadorHabilidadeUpdateWithWhereUniqueWithoutHabilidadeInput | PrestadorHabilidadeUpdateWithWhereUniqueWithoutHabilidadeInput[]
    updateMany?: PrestadorHabilidadeUpdateManyWithWhereWithoutHabilidadeInput | PrestadorHabilidadeUpdateManyWithWhereWithoutHabilidadeInput[]
    deleteMany?: PrestadorHabilidadeScalarWhereInput | PrestadorHabilidadeScalarWhereInput[]
  }

  export type HabilidadeCreateNestedOneWithoutPrestadoresInput = {
    create?: XOR<HabilidadeCreateWithoutPrestadoresInput, HabilidadeUncheckedCreateWithoutPrestadoresInput>
    connectOrCreate?: HabilidadeCreateOrConnectWithoutPrestadoresInput
    connect?: HabilidadeWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutHabilidadesInput = {
    create?: XOR<UsuarioCreateWithoutHabilidadesInput, UsuarioUncheckedCreateWithoutHabilidadesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHabilidadesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumEnumNivelProeficienciaFieldUpdateOperationsInput = {
    set?: $Enums.EnumNivelProeficiencia
  }

  export type HabilidadeUpdateOneRequiredWithoutPrestadoresNestedInput = {
    create?: XOR<HabilidadeCreateWithoutPrestadoresInput, HabilidadeUncheckedCreateWithoutPrestadoresInput>
    connectOrCreate?: HabilidadeCreateOrConnectWithoutPrestadoresInput
    upsert?: HabilidadeUpsertWithoutPrestadoresInput
    connect?: HabilidadeWhereUniqueInput
    update?: XOR<XOR<HabilidadeUpdateToOneWithWhereWithoutPrestadoresInput, HabilidadeUpdateWithoutPrestadoresInput>, HabilidadeUncheckedUpdateWithoutPrestadoresInput>
  }

  export type UsuarioUpdateOneRequiredWithoutHabilidadesNestedInput = {
    create?: XOR<UsuarioCreateWithoutHabilidadesInput, UsuarioUncheckedCreateWithoutHabilidadesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHabilidadesInput
    upsert?: UsuarioUpsertWithoutHabilidadesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutHabilidadesInput, UsuarioUpdateWithoutHabilidadesInput>, UsuarioUncheckedUpdateWithoutHabilidadesInput>
  }

  export type UsuarioCreateNestedOneWithoutPropostas_contratadasInput = {
    create?: XOR<UsuarioCreateWithoutPropostas_contratadasInput, UsuarioUncheckedCreateWithoutPropostas_contratadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPropostas_contratadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutPropostas_prestadasInput = {
    create?: XOR<UsuarioCreateWithoutPropostas_prestadasInput, UsuarioUncheckedCreateWithoutPropostas_prestadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPropostas_prestadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ServicoCreateNestedManyWithoutPropostaInput = {
    create?: XOR<ServicoCreateWithoutPropostaInput, ServicoUncheckedCreateWithoutPropostaInput> | ServicoCreateWithoutPropostaInput[] | ServicoUncheckedCreateWithoutPropostaInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutPropostaInput | ServicoCreateOrConnectWithoutPropostaInput[]
    createMany?: ServicoCreateManyPropostaInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutPropostaInput = {
    create?: XOR<AvaliacaoCreateWithoutPropostaInput, AvaliacaoUncheckedCreateWithoutPropostaInput> | AvaliacaoCreateWithoutPropostaInput[] | AvaliacaoUncheckedCreateWithoutPropostaInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutPropostaInput | AvaliacaoCreateOrConnectWithoutPropostaInput[]
    createMany?: AvaliacaoCreateManyPropostaInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type ServicoUncheckedCreateNestedManyWithoutPropostaInput = {
    create?: XOR<ServicoCreateWithoutPropostaInput, ServicoUncheckedCreateWithoutPropostaInput> | ServicoCreateWithoutPropostaInput[] | ServicoUncheckedCreateWithoutPropostaInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutPropostaInput | ServicoCreateOrConnectWithoutPropostaInput[]
    createMany?: ServicoCreateManyPropostaInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutPropostaInput = {
    create?: XOR<AvaliacaoCreateWithoutPropostaInput, AvaliacaoUncheckedCreateWithoutPropostaInput> | AvaliacaoCreateWithoutPropostaInput[] | AvaliacaoUncheckedCreateWithoutPropostaInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutPropostaInput | AvaliacaoCreateOrConnectWithoutPropostaInput[]
    createMany?: AvaliacaoCreateManyPropostaInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type EnumEnumStatusPropostaFieldUpdateOperationsInput = {
    set?: $Enums.EnumStatusProposta
  }

  export type UsuarioUpdateOneRequiredWithoutPropostas_contratadasNestedInput = {
    create?: XOR<UsuarioCreateWithoutPropostas_contratadasInput, UsuarioUncheckedCreateWithoutPropostas_contratadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPropostas_contratadasInput
    upsert?: UsuarioUpsertWithoutPropostas_contratadasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPropostas_contratadasInput, UsuarioUpdateWithoutPropostas_contratadasInput>, UsuarioUncheckedUpdateWithoutPropostas_contratadasInput>
  }

  export type UsuarioUpdateOneRequiredWithoutPropostas_prestadasNestedInput = {
    create?: XOR<UsuarioCreateWithoutPropostas_prestadasInput, UsuarioUncheckedCreateWithoutPropostas_prestadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPropostas_prestadasInput
    upsert?: UsuarioUpsertWithoutPropostas_prestadasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPropostas_prestadasInput, UsuarioUpdateWithoutPropostas_prestadasInput>, UsuarioUncheckedUpdateWithoutPropostas_prestadasInput>
  }

  export type ServicoUpdateManyWithoutPropostaNestedInput = {
    create?: XOR<ServicoCreateWithoutPropostaInput, ServicoUncheckedCreateWithoutPropostaInput> | ServicoCreateWithoutPropostaInput[] | ServicoUncheckedCreateWithoutPropostaInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutPropostaInput | ServicoCreateOrConnectWithoutPropostaInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutPropostaInput | ServicoUpsertWithWhereUniqueWithoutPropostaInput[]
    createMany?: ServicoCreateManyPropostaInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutPropostaInput | ServicoUpdateWithWhereUniqueWithoutPropostaInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutPropostaInput | ServicoUpdateManyWithWhereWithoutPropostaInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutPropostaNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutPropostaInput, AvaliacaoUncheckedCreateWithoutPropostaInput> | AvaliacaoCreateWithoutPropostaInput[] | AvaliacaoUncheckedCreateWithoutPropostaInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutPropostaInput | AvaliacaoCreateOrConnectWithoutPropostaInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutPropostaInput | AvaliacaoUpsertWithWhereUniqueWithoutPropostaInput[]
    createMany?: AvaliacaoCreateManyPropostaInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutPropostaInput | AvaliacaoUpdateWithWhereUniqueWithoutPropostaInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutPropostaInput | AvaliacaoUpdateManyWithWhereWithoutPropostaInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type ServicoUncheckedUpdateManyWithoutPropostaNestedInput = {
    create?: XOR<ServicoCreateWithoutPropostaInput, ServicoUncheckedCreateWithoutPropostaInput> | ServicoCreateWithoutPropostaInput[] | ServicoUncheckedCreateWithoutPropostaInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutPropostaInput | ServicoCreateOrConnectWithoutPropostaInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutPropostaInput | ServicoUpsertWithWhereUniqueWithoutPropostaInput[]
    createMany?: ServicoCreateManyPropostaInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutPropostaInput | ServicoUpdateWithWhereUniqueWithoutPropostaInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutPropostaInput | ServicoUpdateManyWithWhereWithoutPropostaInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutPropostaNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutPropostaInput, AvaliacaoUncheckedCreateWithoutPropostaInput> | AvaliacaoCreateWithoutPropostaInput[] | AvaliacaoUncheckedCreateWithoutPropostaInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutPropostaInput | AvaliacaoCreateOrConnectWithoutPropostaInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutPropostaInput | AvaliacaoUpsertWithWhereUniqueWithoutPropostaInput[]
    createMany?: AvaliacaoCreateManyPropostaInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutPropostaInput | AvaliacaoUpdateWithWhereUniqueWithoutPropostaInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutPropostaInput | AvaliacaoUpdateManyWithWhereWithoutPropostaInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type PropostaCreateNestedOneWithoutServicosInput = {
    create?: XOR<PropostaCreateWithoutServicosInput, PropostaUncheckedCreateWithoutServicosInput>
    connectOrCreate?: PropostaCreateOrConnectWithoutServicosInput
    connect?: PropostaWhereUniqueInput
  }

  export type PropostaUpdateOneRequiredWithoutServicosNestedInput = {
    create?: XOR<PropostaCreateWithoutServicosInput, PropostaUncheckedCreateWithoutServicosInput>
    connectOrCreate?: PropostaCreateOrConnectWithoutServicosInput
    upsert?: PropostaUpsertWithoutServicosInput
    connect?: PropostaWhereUniqueInput
    update?: XOR<XOR<PropostaUpdateToOneWithWhereWithoutServicosInput, PropostaUpdateWithoutServicosInput>, PropostaUncheckedUpdateWithoutServicosInput>
  }

  export type PropostaCreateNestedOneWithoutAvaliacaoInput = {
    create?: XOR<PropostaCreateWithoutAvaliacaoInput, PropostaUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: PropostaCreateOrConnectWithoutAvaliacaoInput
    connect?: PropostaWhereUniqueInput
  }

  export type PropostaUpdateOneRequiredWithoutAvaliacaoNestedInput = {
    create?: XOR<PropostaCreateWithoutAvaliacaoInput, PropostaUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: PropostaCreateOrConnectWithoutAvaliacaoInput
    upsert?: PropostaUpsertWithoutAvaliacaoInput
    connect?: PropostaWhereUniqueInput
    update?: XOR<XOR<PropostaUpdateToOneWithWhereWithoutAvaliacaoInput, PropostaUpdateWithoutAvaliacaoInput>, PropostaUncheckedUpdateWithoutAvaliacaoInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumEnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumTipoUsuario | EnumEnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.EnumTipoUsuario[] | ListEnumEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumTipoUsuario[] | ListEnumEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumTipoUsuarioFilter<$PrismaModel> | $Enums.EnumTipoUsuario
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumEnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumTipoUsuario | EnumEnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.EnumTipoUsuario[] | ListEnumEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumTipoUsuario[] | ListEnumEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.EnumTipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumEnumTipoUsuarioFilter<$PrismaModel>
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

  export type NestedEnumEnumNivelProeficienciaFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumNivelProeficiencia | EnumEnumNivelProeficienciaFieldRefInput<$PrismaModel>
    in?: $Enums.EnumNivelProeficiencia[] | ListEnumEnumNivelProeficienciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumNivelProeficiencia[] | ListEnumEnumNivelProeficienciaFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumNivelProeficienciaFilter<$PrismaModel> | $Enums.EnumNivelProeficiencia
  }

  export type NestedEnumEnumNivelProeficienciaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumNivelProeficiencia | EnumEnumNivelProeficienciaFieldRefInput<$PrismaModel>
    in?: $Enums.EnumNivelProeficiencia[] | ListEnumEnumNivelProeficienciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumNivelProeficiencia[] | ListEnumEnumNivelProeficienciaFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumNivelProeficienciaWithAggregatesFilter<$PrismaModel> | $Enums.EnumNivelProeficiencia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnumNivelProeficienciaFilter<$PrismaModel>
    _max?: NestedEnumEnumNivelProeficienciaFilter<$PrismaModel>
  }

  export type NestedEnumEnumStatusPropostaFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumStatusProposta | EnumEnumStatusPropostaFieldRefInput<$PrismaModel>
    in?: $Enums.EnumStatusProposta[] | ListEnumEnumStatusPropostaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumStatusProposta[] | ListEnumEnumStatusPropostaFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumStatusPropostaFilter<$PrismaModel> | $Enums.EnumStatusProposta
  }

  export type NestedEnumEnumStatusPropostaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumStatusProposta | EnumEnumStatusPropostaFieldRefInput<$PrismaModel>
    in?: $Enums.EnumStatusProposta[] | ListEnumEnumStatusPropostaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumStatusProposta[] | ListEnumEnumStatusPropostaFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumStatusPropostaWithAggregatesFilter<$PrismaModel> | $Enums.EnumStatusProposta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnumStatusPropostaFilter<$PrismaModel>
    _max?: NestedEnumEnumStatusPropostaFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    valor: Decimal | DecimalJsLike | number | string
    sobre: string
    tipo_usuario: $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeCreateNestedManyWithoutPrestadorInput
    propostas_contratadas?: PropostaCreateNestedManyWithoutContratanteInput
    propostas_prestadas?: PropostaCreateNestedManyWithoutPrestadorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    valor: Decimal | DecimalJsLike | number | string
    sobre: string
    tipo_usuario: $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeUncheckedCreateNestedManyWithoutPrestadorInput
    propostas_contratadas?: PropostaUncheckedCreateNestedManyWithoutContratanteInput
    propostas_prestadas?: PropostaUncheckedCreateNestedManyWithoutPrestadorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioCreateOrConnectWithoutAccountsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAccountsInput, UsuarioUncheckedCreateWithoutAccountsInput>
  }

  export type UsuarioUpsertWithoutAccountsInput = {
    update: XOR<UsuarioUpdateWithoutAccountsInput, UsuarioUncheckedUpdateWithoutAccountsInput>
    create: XOR<UsuarioCreateWithoutAccountsInput, UsuarioUncheckedCreateWithoutAccountsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAccountsInput, UsuarioUncheckedUpdateWithoutAccountsInput>
  }

  export type UsuarioUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sobre?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumEnumTipoUsuarioFieldUpdateOperationsInput | $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeUpdateManyWithoutPrestadorNestedInput
    propostas_contratadas?: PropostaUpdateManyWithoutContratanteNestedInput
    propostas_prestadas?: PropostaUpdateManyWithoutPrestadorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sobre?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumEnumTipoUsuarioFieldUpdateOperationsInput | $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeUncheckedUpdateManyWithoutPrestadorNestedInput
    propostas_contratadas?: PropostaUncheckedUpdateManyWithoutContratanteNestedInput
    propostas_prestadas?: PropostaUncheckedUpdateManyWithoutPrestadorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsuarioCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    valor: Decimal | DecimalJsLike | number | string
    sobre: string
    tipo_usuario: $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeCreateNestedManyWithoutPrestadorInput
    propostas_contratadas?: PropostaCreateNestedManyWithoutContratanteInput
    propostas_prestadas?: PropostaCreateNestedManyWithoutPrestadorInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    valor: Decimal | DecimalJsLike | number | string
    sobre: string
    tipo_usuario: $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeUncheckedCreateNestedManyWithoutPrestadorInput
    propostas_contratadas?: PropostaUncheckedCreateNestedManyWithoutContratanteInput
    propostas_prestadas?: PropostaUncheckedCreateNestedManyWithoutPrestadorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioCreateOrConnectWithoutSessionsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSessionsInput, UsuarioUncheckedCreateWithoutSessionsInput>
  }

  export type UsuarioUpsertWithoutSessionsInput = {
    update: XOR<UsuarioUpdateWithoutSessionsInput, UsuarioUncheckedUpdateWithoutSessionsInput>
    create: XOR<UsuarioCreateWithoutSessionsInput, UsuarioUncheckedCreateWithoutSessionsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSessionsInput, UsuarioUncheckedUpdateWithoutSessionsInput>
  }

  export type UsuarioUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sobre?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumEnumTipoUsuarioFieldUpdateOperationsInput | $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeUpdateManyWithoutPrestadorNestedInput
    propostas_contratadas?: PropostaUpdateManyWithoutContratanteNestedInput
    propostas_prestadas?: PropostaUpdateManyWithoutPrestadorNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sobre?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumEnumTipoUsuarioFieldUpdateOperationsInput | $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeUncheckedUpdateManyWithoutPrestadorNestedInput
    propostas_contratadas?: PropostaUncheckedUpdateManyWithoutContratanteNestedInput
    propostas_prestadas?: PropostaUncheckedUpdateManyWithoutPrestadorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PrestadorHabilidadeCreateWithoutPrestadorInput = {
    nivel_proeficiencia: $Enums.EnumNivelProeficiencia
    habilidade: HabilidadeCreateNestedOneWithoutPrestadoresInput
  }

  export type PrestadorHabilidadeUncheckedCreateWithoutPrestadorInput = {
    id_habilidade: number
    nivel_proeficiencia: $Enums.EnumNivelProeficiencia
  }

  export type PrestadorHabilidadeCreateOrConnectWithoutPrestadorInput = {
    where: PrestadorHabilidadeWhereUniqueInput
    create: XOR<PrestadorHabilidadeCreateWithoutPrestadorInput, PrestadorHabilidadeUncheckedCreateWithoutPrestadorInput>
  }

  export type PrestadorHabilidadeCreateManyPrestadorInputEnvelope = {
    data: PrestadorHabilidadeCreateManyPrestadorInput | PrestadorHabilidadeCreateManyPrestadorInput[]
    skipDuplicates?: boolean
  }

  export type PropostaCreateWithoutContratanteInput = {
    titulo: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_envio?: Date | string
    data_inicio: Date | string
    data_termino: Date | string
    Status: $Enums.EnumStatusProposta
    prestador: UsuarioCreateNestedOneWithoutPropostas_prestadasInput
    servicos?: ServicoCreateNestedManyWithoutPropostaInput
    avaliacao?: AvaliacaoCreateNestedManyWithoutPropostaInput
  }

  export type PropostaUncheckedCreateWithoutContratanteInput = {
    id?: number
    id_prestador: string
    titulo: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_envio?: Date | string
    data_inicio: Date | string
    data_termino: Date | string
    Status: $Enums.EnumStatusProposta
    servicos?: ServicoUncheckedCreateNestedManyWithoutPropostaInput
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutPropostaInput
  }

  export type PropostaCreateOrConnectWithoutContratanteInput = {
    where: PropostaWhereUniqueInput
    create: XOR<PropostaCreateWithoutContratanteInput, PropostaUncheckedCreateWithoutContratanteInput>
  }

  export type PropostaCreateManyContratanteInputEnvelope = {
    data: PropostaCreateManyContratanteInput | PropostaCreateManyContratanteInput[]
    skipDuplicates?: boolean
  }

  export type PropostaCreateWithoutPrestadorInput = {
    titulo: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_envio?: Date | string
    data_inicio: Date | string
    data_termino: Date | string
    Status: $Enums.EnumStatusProposta
    contratante: UsuarioCreateNestedOneWithoutPropostas_contratadasInput
    servicos?: ServicoCreateNestedManyWithoutPropostaInput
    avaliacao?: AvaliacaoCreateNestedManyWithoutPropostaInput
  }

  export type PropostaUncheckedCreateWithoutPrestadorInput = {
    id?: number
    id_contratante: string
    titulo: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_envio?: Date | string
    data_inicio: Date | string
    data_termino: Date | string
    Status: $Enums.EnumStatusProposta
    servicos?: ServicoUncheckedCreateNestedManyWithoutPropostaInput
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutPropostaInput
  }

  export type PropostaCreateOrConnectWithoutPrestadorInput = {
    where: PropostaWhereUniqueInput
    create: XOR<PropostaCreateWithoutPrestadorInput, PropostaUncheckedCreateWithoutPrestadorInput>
  }

  export type PropostaCreateManyPrestadorInputEnvelope = {
    data: PropostaCreateManyPrestadorInput | PropostaCreateManyPrestadorInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PrestadorHabilidadeUpsertWithWhereUniqueWithoutPrestadorInput = {
    where: PrestadorHabilidadeWhereUniqueInput
    update: XOR<PrestadorHabilidadeUpdateWithoutPrestadorInput, PrestadorHabilidadeUncheckedUpdateWithoutPrestadorInput>
    create: XOR<PrestadorHabilidadeCreateWithoutPrestadorInput, PrestadorHabilidadeUncheckedCreateWithoutPrestadorInput>
  }

  export type PrestadorHabilidadeUpdateWithWhereUniqueWithoutPrestadorInput = {
    where: PrestadorHabilidadeWhereUniqueInput
    data: XOR<PrestadorHabilidadeUpdateWithoutPrestadorInput, PrestadorHabilidadeUncheckedUpdateWithoutPrestadorInput>
  }

  export type PrestadorHabilidadeUpdateManyWithWhereWithoutPrestadorInput = {
    where: PrestadorHabilidadeScalarWhereInput
    data: XOR<PrestadorHabilidadeUpdateManyMutationInput, PrestadorHabilidadeUncheckedUpdateManyWithoutPrestadorInput>
  }

  export type PrestadorHabilidadeScalarWhereInput = {
    AND?: PrestadorHabilidadeScalarWhereInput | PrestadorHabilidadeScalarWhereInput[]
    OR?: PrestadorHabilidadeScalarWhereInput[]
    NOT?: PrestadorHabilidadeScalarWhereInput | PrestadorHabilidadeScalarWhereInput[]
    id_habilidade?: IntFilter<"PrestadorHabilidade"> | number
    id_prestador?: StringFilter<"PrestadorHabilidade"> | string
    nivel_proeficiencia?: EnumEnumNivelProeficienciaFilter<"PrestadorHabilidade"> | $Enums.EnumNivelProeficiencia
  }

  export type PropostaUpsertWithWhereUniqueWithoutContratanteInput = {
    where: PropostaWhereUniqueInput
    update: XOR<PropostaUpdateWithoutContratanteInput, PropostaUncheckedUpdateWithoutContratanteInput>
    create: XOR<PropostaCreateWithoutContratanteInput, PropostaUncheckedCreateWithoutContratanteInput>
  }

  export type PropostaUpdateWithWhereUniqueWithoutContratanteInput = {
    where: PropostaWhereUniqueInput
    data: XOR<PropostaUpdateWithoutContratanteInput, PropostaUncheckedUpdateWithoutContratanteInput>
  }

  export type PropostaUpdateManyWithWhereWithoutContratanteInput = {
    where: PropostaScalarWhereInput
    data: XOR<PropostaUpdateManyMutationInput, PropostaUncheckedUpdateManyWithoutContratanteInput>
  }

  export type PropostaScalarWhereInput = {
    AND?: PropostaScalarWhereInput | PropostaScalarWhereInput[]
    OR?: PropostaScalarWhereInput[]
    NOT?: PropostaScalarWhereInput | PropostaScalarWhereInput[]
    id?: IntFilter<"Proposta"> | number
    id_contratante?: StringFilter<"Proposta"> | string
    id_prestador?: StringFilter<"Proposta"> | string
    titulo?: StringFilter<"Proposta"> | string
    descricao?: StringFilter<"Proposta"> | string
    valor?: DecimalFilter<"Proposta"> | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeFilter<"Proposta"> | Date | string
    data_inicio?: DateTimeFilter<"Proposta"> | Date | string
    data_termino?: DateTimeFilter<"Proposta"> | Date | string
    Status?: EnumEnumStatusPropostaFilter<"Proposta"> | $Enums.EnumStatusProposta
  }

  export type PropostaUpsertWithWhereUniqueWithoutPrestadorInput = {
    where: PropostaWhereUniqueInput
    update: XOR<PropostaUpdateWithoutPrestadorInput, PropostaUncheckedUpdateWithoutPrestadorInput>
    create: XOR<PropostaCreateWithoutPrestadorInput, PropostaUncheckedCreateWithoutPrestadorInput>
  }

  export type PropostaUpdateWithWhereUniqueWithoutPrestadorInput = {
    where: PropostaWhereUniqueInput
    data: XOR<PropostaUpdateWithoutPrestadorInput, PropostaUncheckedUpdateWithoutPrestadorInput>
  }

  export type PropostaUpdateManyWithWhereWithoutPrestadorInput = {
    where: PropostaScalarWhereInput
    data: XOR<PropostaUpdateManyMutationInput, PropostaUncheckedUpdateManyWithoutPrestadorInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type PrestadorHabilidadeCreateWithoutHabilidadeInput = {
    nivel_proeficiencia: $Enums.EnumNivelProeficiencia
    prestador: UsuarioCreateNestedOneWithoutHabilidadesInput
  }

  export type PrestadorHabilidadeUncheckedCreateWithoutHabilidadeInput = {
    id_prestador: string
    nivel_proeficiencia: $Enums.EnumNivelProeficiencia
  }

  export type PrestadorHabilidadeCreateOrConnectWithoutHabilidadeInput = {
    where: PrestadorHabilidadeWhereUniqueInput
    create: XOR<PrestadorHabilidadeCreateWithoutHabilidadeInput, PrestadorHabilidadeUncheckedCreateWithoutHabilidadeInput>
  }

  export type PrestadorHabilidadeCreateManyHabilidadeInputEnvelope = {
    data: PrestadorHabilidadeCreateManyHabilidadeInput | PrestadorHabilidadeCreateManyHabilidadeInput[]
    skipDuplicates?: boolean
  }

  export type PrestadorHabilidadeUpsertWithWhereUniqueWithoutHabilidadeInput = {
    where: PrestadorHabilidadeWhereUniqueInput
    update: XOR<PrestadorHabilidadeUpdateWithoutHabilidadeInput, PrestadorHabilidadeUncheckedUpdateWithoutHabilidadeInput>
    create: XOR<PrestadorHabilidadeCreateWithoutHabilidadeInput, PrestadorHabilidadeUncheckedCreateWithoutHabilidadeInput>
  }

  export type PrestadorHabilidadeUpdateWithWhereUniqueWithoutHabilidadeInput = {
    where: PrestadorHabilidadeWhereUniqueInput
    data: XOR<PrestadorHabilidadeUpdateWithoutHabilidadeInput, PrestadorHabilidadeUncheckedUpdateWithoutHabilidadeInput>
  }

  export type PrestadorHabilidadeUpdateManyWithWhereWithoutHabilidadeInput = {
    where: PrestadorHabilidadeScalarWhereInput
    data: XOR<PrestadorHabilidadeUpdateManyMutationInput, PrestadorHabilidadeUncheckedUpdateManyWithoutHabilidadeInput>
  }

  export type HabilidadeCreateWithoutPrestadoresInput = {
    nome: string
    descricao: string
  }

  export type HabilidadeUncheckedCreateWithoutPrestadoresInput = {
    id?: number
    nome: string
    descricao: string
  }

  export type HabilidadeCreateOrConnectWithoutPrestadoresInput = {
    where: HabilidadeWhereUniqueInput
    create: XOR<HabilidadeCreateWithoutPrestadoresInput, HabilidadeUncheckedCreateWithoutPrestadoresInput>
  }

  export type UsuarioCreateWithoutHabilidadesInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    valor: Decimal | DecimalJsLike | number | string
    sobre: string
    tipo_usuario: $Enums.EnumTipoUsuario
    propostas_contratadas?: PropostaCreateNestedManyWithoutContratanteInput
    propostas_prestadas?: PropostaCreateNestedManyWithoutPrestadorInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateWithoutHabilidadesInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    valor: Decimal | DecimalJsLike | number | string
    sobre: string
    tipo_usuario: $Enums.EnumTipoUsuario
    propostas_contratadas?: PropostaUncheckedCreateNestedManyWithoutContratanteInput
    propostas_prestadas?: PropostaUncheckedCreateNestedManyWithoutPrestadorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioCreateOrConnectWithoutHabilidadesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutHabilidadesInput, UsuarioUncheckedCreateWithoutHabilidadesInput>
  }

  export type HabilidadeUpsertWithoutPrestadoresInput = {
    update: XOR<HabilidadeUpdateWithoutPrestadoresInput, HabilidadeUncheckedUpdateWithoutPrestadoresInput>
    create: XOR<HabilidadeCreateWithoutPrestadoresInput, HabilidadeUncheckedCreateWithoutPrestadoresInput>
    where?: HabilidadeWhereInput
  }

  export type HabilidadeUpdateToOneWithWhereWithoutPrestadoresInput = {
    where?: HabilidadeWhereInput
    data: XOR<HabilidadeUpdateWithoutPrestadoresInput, HabilidadeUncheckedUpdateWithoutPrestadoresInput>
  }

  export type HabilidadeUpdateWithoutPrestadoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type HabilidadeUncheckedUpdateWithoutPrestadoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUpsertWithoutHabilidadesInput = {
    update: XOR<UsuarioUpdateWithoutHabilidadesInput, UsuarioUncheckedUpdateWithoutHabilidadesInput>
    create: XOR<UsuarioCreateWithoutHabilidadesInput, UsuarioUncheckedCreateWithoutHabilidadesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutHabilidadesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutHabilidadesInput, UsuarioUncheckedUpdateWithoutHabilidadesInput>
  }

  export type UsuarioUpdateWithoutHabilidadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sobre?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumEnumTipoUsuarioFieldUpdateOperationsInput | $Enums.EnumTipoUsuario
    propostas_contratadas?: PropostaUpdateManyWithoutContratanteNestedInput
    propostas_prestadas?: PropostaUpdateManyWithoutPrestadorNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutHabilidadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sobre?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumEnumTipoUsuarioFieldUpdateOperationsInput | $Enums.EnumTipoUsuario
    propostas_contratadas?: PropostaUncheckedUpdateManyWithoutContratanteNestedInput
    propostas_prestadas?: PropostaUncheckedUpdateManyWithoutPrestadorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsuarioCreateWithoutPropostas_contratadasInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    valor: Decimal | DecimalJsLike | number | string
    sobre: string
    tipo_usuario: $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeCreateNestedManyWithoutPrestadorInput
    propostas_prestadas?: PropostaCreateNestedManyWithoutPrestadorInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateWithoutPropostas_contratadasInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    valor: Decimal | DecimalJsLike | number | string
    sobre: string
    tipo_usuario: $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeUncheckedCreateNestedManyWithoutPrestadorInput
    propostas_prestadas?: PropostaUncheckedCreateNestedManyWithoutPrestadorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioCreateOrConnectWithoutPropostas_contratadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPropostas_contratadasInput, UsuarioUncheckedCreateWithoutPropostas_contratadasInput>
  }

  export type UsuarioCreateWithoutPropostas_prestadasInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    valor: Decimal | DecimalJsLike | number | string
    sobre: string
    tipo_usuario: $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeCreateNestedManyWithoutPrestadorInput
    propostas_contratadas?: PropostaCreateNestedManyWithoutContratanteInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateWithoutPropostas_prestadasInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    valor: Decimal | DecimalJsLike | number | string
    sobre: string
    tipo_usuario: $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeUncheckedCreateNestedManyWithoutPrestadorInput
    propostas_contratadas?: PropostaUncheckedCreateNestedManyWithoutContratanteInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioCreateOrConnectWithoutPropostas_prestadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPropostas_prestadasInput, UsuarioUncheckedCreateWithoutPropostas_prestadasInput>
  }

  export type ServicoCreateWithoutPropostaInput = {
    id_servico: number
    nome_servico: string
    descricao: string
  }

  export type ServicoUncheckedCreateWithoutPropostaInput = {
    id_servico: number
    nome_servico: string
    descricao: string
  }

  export type ServicoCreateOrConnectWithoutPropostaInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutPropostaInput, ServicoUncheckedCreateWithoutPropostaInput>
  }

  export type ServicoCreateManyPropostaInputEnvelope = {
    data: ServicoCreateManyPropostaInput | ServicoCreateManyPropostaInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoCreateWithoutPropostaInput = {
    nota: number
    comentario: string
    data_avaliacao: Date | string
  }

  export type AvaliacaoUncheckedCreateWithoutPropostaInput = {
    nota: number
    comentario: string
    data_avaliacao: Date | string
  }

  export type AvaliacaoCreateOrConnectWithoutPropostaInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutPropostaInput, AvaliacaoUncheckedCreateWithoutPropostaInput>
  }

  export type AvaliacaoCreateManyPropostaInputEnvelope = {
    data: AvaliacaoCreateManyPropostaInput | AvaliacaoCreateManyPropostaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutPropostas_contratadasInput = {
    update: XOR<UsuarioUpdateWithoutPropostas_contratadasInput, UsuarioUncheckedUpdateWithoutPropostas_contratadasInput>
    create: XOR<UsuarioCreateWithoutPropostas_contratadasInput, UsuarioUncheckedCreateWithoutPropostas_contratadasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPropostas_contratadasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPropostas_contratadasInput, UsuarioUncheckedUpdateWithoutPropostas_contratadasInput>
  }

  export type UsuarioUpdateWithoutPropostas_contratadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sobre?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumEnumTipoUsuarioFieldUpdateOperationsInput | $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeUpdateManyWithoutPrestadorNestedInput
    propostas_prestadas?: PropostaUpdateManyWithoutPrestadorNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPropostas_contratadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sobre?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumEnumTipoUsuarioFieldUpdateOperationsInput | $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeUncheckedUpdateManyWithoutPrestadorNestedInput
    propostas_prestadas?: PropostaUncheckedUpdateManyWithoutPrestadorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUpsertWithoutPropostas_prestadasInput = {
    update: XOR<UsuarioUpdateWithoutPropostas_prestadasInput, UsuarioUncheckedUpdateWithoutPropostas_prestadasInput>
    create: XOR<UsuarioCreateWithoutPropostas_prestadasInput, UsuarioUncheckedCreateWithoutPropostas_prestadasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPropostas_prestadasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPropostas_prestadasInput, UsuarioUncheckedUpdateWithoutPropostas_prestadasInput>
  }

  export type UsuarioUpdateWithoutPropostas_prestadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sobre?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumEnumTipoUsuarioFieldUpdateOperationsInput | $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeUpdateManyWithoutPrestadorNestedInput
    propostas_contratadas?: PropostaUpdateManyWithoutContratanteNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPropostas_prestadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sobre?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumEnumTipoUsuarioFieldUpdateOperationsInput | $Enums.EnumTipoUsuario
    habilidades?: PrestadorHabilidadeUncheckedUpdateManyWithoutPrestadorNestedInput
    propostas_contratadas?: PropostaUncheckedUpdateManyWithoutContratanteNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ServicoUpsertWithWhereUniqueWithoutPropostaInput = {
    where: ServicoWhereUniqueInput
    update: XOR<ServicoUpdateWithoutPropostaInput, ServicoUncheckedUpdateWithoutPropostaInput>
    create: XOR<ServicoCreateWithoutPropostaInput, ServicoUncheckedCreateWithoutPropostaInput>
  }

  export type ServicoUpdateWithWhereUniqueWithoutPropostaInput = {
    where: ServicoWhereUniqueInput
    data: XOR<ServicoUpdateWithoutPropostaInput, ServicoUncheckedUpdateWithoutPropostaInput>
  }

  export type ServicoUpdateManyWithWhereWithoutPropostaInput = {
    where: ServicoScalarWhereInput
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyWithoutPropostaInput>
  }

  export type ServicoScalarWhereInput = {
    AND?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
    OR?: ServicoScalarWhereInput[]
    NOT?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
    id_servico?: IntFilter<"Servico"> | number
    id_proposta?: IntFilter<"Servico"> | number
    nome_servico?: StringFilter<"Servico"> | string
    descricao?: StringFilter<"Servico"> | string
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutPropostaInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutPropostaInput, AvaliacaoUncheckedUpdateWithoutPropostaInput>
    create: XOR<AvaliacaoCreateWithoutPropostaInput, AvaliacaoUncheckedCreateWithoutPropostaInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutPropostaInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutPropostaInput, AvaliacaoUncheckedUpdateWithoutPropostaInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutPropostaInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutPropostaInput>
  }

  export type AvaliacaoScalarWhereInput = {
    AND?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    OR?: AvaliacaoScalarWhereInput[]
    NOT?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    id_proposta?: IntFilter<"Avaliacao"> | number
    nota?: IntFilter<"Avaliacao"> | number
    comentario?: StringFilter<"Avaliacao"> | string
    data_avaliacao?: DateTimeFilter<"Avaliacao"> | Date | string
  }

  export type PropostaCreateWithoutServicosInput = {
    titulo: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_envio?: Date | string
    data_inicio: Date | string
    data_termino: Date | string
    Status: $Enums.EnumStatusProposta
    contratante: UsuarioCreateNestedOneWithoutPropostas_contratadasInput
    prestador: UsuarioCreateNestedOneWithoutPropostas_prestadasInput
    avaliacao?: AvaliacaoCreateNestedManyWithoutPropostaInput
  }

  export type PropostaUncheckedCreateWithoutServicosInput = {
    id?: number
    id_contratante: string
    id_prestador: string
    titulo: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_envio?: Date | string
    data_inicio: Date | string
    data_termino: Date | string
    Status: $Enums.EnumStatusProposta
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutPropostaInput
  }

  export type PropostaCreateOrConnectWithoutServicosInput = {
    where: PropostaWhereUniqueInput
    create: XOR<PropostaCreateWithoutServicosInput, PropostaUncheckedCreateWithoutServicosInput>
  }

  export type PropostaUpsertWithoutServicosInput = {
    update: XOR<PropostaUpdateWithoutServicosInput, PropostaUncheckedUpdateWithoutServicosInput>
    create: XOR<PropostaCreateWithoutServicosInput, PropostaUncheckedCreateWithoutServicosInput>
    where?: PropostaWhereInput
  }

  export type PropostaUpdateToOneWithWhereWithoutServicosInput = {
    where?: PropostaWhereInput
    data: XOR<PropostaUpdateWithoutServicosInput, PropostaUncheckedUpdateWithoutServicosInput>
  }

  export type PropostaUpdateWithoutServicosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumEnumStatusPropostaFieldUpdateOperationsInput | $Enums.EnumStatusProposta
    contratante?: UsuarioUpdateOneRequiredWithoutPropostas_contratadasNestedInput
    prestador?: UsuarioUpdateOneRequiredWithoutPropostas_prestadasNestedInput
    avaliacao?: AvaliacaoUpdateManyWithoutPropostaNestedInput
  }

  export type PropostaUncheckedUpdateWithoutServicosInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_contratante?: StringFieldUpdateOperationsInput | string
    id_prestador?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumEnumStatusPropostaFieldUpdateOperationsInput | $Enums.EnumStatusProposta
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutPropostaNestedInput
  }

  export type PropostaCreateWithoutAvaliacaoInput = {
    titulo: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_envio?: Date | string
    data_inicio: Date | string
    data_termino: Date | string
    Status: $Enums.EnumStatusProposta
    contratante: UsuarioCreateNestedOneWithoutPropostas_contratadasInput
    prestador: UsuarioCreateNestedOneWithoutPropostas_prestadasInput
    servicos?: ServicoCreateNestedManyWithoutPropostaInput
  }

  export type PropostaUncheckedCreateWithoutAvaliacaoInput = {
    id?: number
    id_contratante: string
    id_prestador: string
    titulo: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_envio?: Date | string
    data_inicio: Date | string
    data_termino: Date | string
    Status: $Enums.EnumStatusProposta
    servicos?: ServicoUncheckedCreateNestedManyWithoutPropostaInput
  }

  export type PropostaCreateOrConnectWithoutAvaliacaoInput = {
    where: PropostaWhereUniqueInput
    create: XOR<PropostaCreateWithoutAvaliacaoInput, PropostaUncheckedCreateWithoutAvaliacaoInput>
  }

  export type PropostaUpsertWithoutAvaliacaoInput = {
    update: XOR<PropostaUpdateWithoutAvaliacaoInput, PropostaUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<PropostaCreateWithoutAvaliacaoInput, PropostaUncheckedCreateWithoutAvaliacaoInput>
    where?: PropostaWhereInput
  }

  export type PropostaUpdateToOneWithWhereWithoutAvaliacaoInput = {
    where?: PropostaWhereInput
    data: XOR<PropostaUpdateWithoutAvaliacaoInput, PropostaUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type PropostaUpdateWithoutAvaliacaoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumEnumStatusPropostaFieldUpdateOperationsInput | $Enums.EnumStatusProposta
    contratante?: UsuarioUpdateOneRequiredWithoutPropostas_contratadasNestedInput
    prestador?: UsuarioUpdateOneRequiredWithoutPropostas_prestadasNestedInput
    servicos?: ServicoUpdateManyWithoutPropostaNestedInput
  }

  export type PropostaUncheckedUpdateWithoutAvaliacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_contratante?: StringFieldUpdateOperationsInput | string
    id_prestador?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumEnumStatusPropostaFieldUpdateOperationsInput | $Enums.EnumStatusProposta
    servicos?: ServicoUncheckedUpdateManyWithoutPropostaNestedInput
  }

  export type PrestadorHabilidadeCreateManyPrestadorInput = {
    id_habilidade: number
    nivel_proeficiencia: $Enums.EnumNivelProeficiencia
  }

  export type PropostaCreateManyContratanteInput = {
    id?: number
    id_prestador: string
    titulo: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_envio?: Date | string
    data_inicio: Date | string
    data_termino: Date | string
    Status: $Enums.EnumStatusProposta
  }

  export type PropostaCreateManyPrestadorInput = {
    id?: number
    id_contratante: string
    titulo: string
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_envio?: Date | string
    data_inicio: Date | string
    data_termino: Date | string
    Status: $Enums.EnumStatusProposta
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type PrestadorHabilidadeUpdateWithoutPrestadorInput = {
    nivel_proeficiencia?: EnumEnumNivelProeficienciaFieldUpdateOperationsInput | $Enums.EnumNivelProeficiencia
    habilidade?: HabilidadeUpdateOneRequiredWithoutPrestadoresNestedInput
  }

  export type PrestadorHabilidadeUncheckedUpdateWithoutPrestadorInput = {
    id_habilidade?: IntFieldUpdateOperationsInput | number
    nivel_proeficiencia?: EnumEnumNivelProeficienciaFieldUpdateOperationsInput | $Enums.EnumNivelProeficiencia
  }

  export type PrestadorHabilidadeUncheckedUpdateManyWithoutPrestadorInput = {
    id_habilidade?: IntFieldUpdateOperationsInput | number
    nivel_proeficiencia?: EnumEnumNivelProeficienciaFieldUpdateOperationsInput | $Enums.EnumNivelProeficiencia
  }

  export type PropostaUpdateWithoutContratanteInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumEnumStatusPropostaFieldUpdateOperationsInput | $Enums.EnumStatusProposta
    prestador?: UsuarioUpdateOneRequiredWithoutPropostas_prestadasNestedInput
    servicos?: ServicoUpdateManyWithoutPropostaNestedInput
    avaliacao?: AvaliacaoUpdateManyWithoutPropostaNestedInput
  }

  export type PropostaUncheckedUpdateWithoutContratanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_prestador?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumEnumStatusPropostaFieldUpdateOperationsInput | $Enums.EnumStatusProposta
    servicos?: ServicoUncheckedUpdateManyWithoutPropostaNestedInput
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutPropostaNestedInput
  }

  export type PropostaUncheckedUpdateManyWithoutContratanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_prestador?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumEnumStatusPropostaFieldUpdateOperationsInput | $Enums.EnumStatusProposta
  }

  export type PropostaUpdateWithoutPrestadorInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumEnumStatusPropostaFieldUpdateOperationsInput | $Enums.EnumStatusProposta
    contratante?: UsuarioUpdateOneRequiredWithoutPropostas_contratadasNestedInput
    servicos?: ServicoUpdateManyWithoutPropostaNestedInput
    avaliacao?: AvaliacaoUpdateManyWithoutPropostaNestedInput
  }

  export type PropostaUncheckedUpdateWithoutPrestadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_contratante?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumEnumStatusPropostaFieldUpdateOperationsInput | $Enums.EnumStatusProposta
    servicos?: ServicoUncheckedUpdateManyWithoutPropostaNestedInput
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutPropostaNestedInput
  }

  export type PropostaUncheckedUpdateManyWithoutPrestadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_contratante?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_termino?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: EnumEnumStatusPropostaFieldUpdateOperationsInput | $Enums.EnumStatusProposta
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrestadorHabilidadeCreateManyHabilidadeInput = {
    id_prestador: string
    nivel_proeficiencia: $Enums.EnumNivelProeficiencia
  }

  export type PrestadorHabilidadeUpdateWithoutHabilidadeInput = {
    nivel_proeficiencia?: EnumEnumNivelProeficienciaFieldUpdateOperationsInput | $Enums.EnumNivelProeficiencia
    prestador?: UsuarioUpdateOneRequiredWithoutHabilidadesNestedInput
  }

  export type PrestadorHabilidadeUncheckedUpdateWithoutHabilidadeInput = {
    id_prestador?: StringFieldUpdateOperationsInput | string
    nivel_proeficiencia?: EnumEnumNivelProeficienciaFieldUpdateOperationsInput | $Enums.EnumNivelProeficiencia
  }

  export type PrestadorHabilidadeUncheckedUpdateManyWithoutHabilidadeInput = {
    id_prestador?: StringFieldUpdateOperationsInput | string
    nivel_proeficiencia?: EnumEnumNivelProeficienciaFieldUpdateOperationsInput | $Enums.EnumNivelProeficiencia
  }

  export type ServicoCreateManyPropostaInput = {
    id_servico: number
    nome_servico: string
    descricao: string
  }

  export type AvaliacaoCreateManyPropostaInput = {
    nota: number
    comentario: string
    data_avaliacao: Date | string
  }

  export type ServicoUpdateWithoutPropostaInput = {
    id_servico?: IntFieldUpdateOperationsInput | number
    nome_servico?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ServicoUncheckedUpdateWithoutPropostaInput = {
    id_servico?: IntFieldUpdateOperationsInput | number
    nome_servico?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ServicoUncheckedUpdateManyWithoutPropostaInput = {
    id_servico?: IntFieldUpdateOperationsInput | number
    nome_servico?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUpdateWithoutPropostaInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateWithoutPropostaInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyWithoutPropostaInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
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