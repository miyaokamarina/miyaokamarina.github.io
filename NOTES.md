# TODO

 *  In all signatures for arrays, add support for any other iterables.
 *  Add iterable/indexed signatures to `Maybe` and `Either`.
 *  Add `isIterable` predicate.
 *  Get rid of direct usage of methods where possible.
 *  Optimize array functions.
 *  Optimize `Match` and `Pred`.
 *  Curry class constructors.
 *  Define instances of some typeclasses for some builtin types (regexps,
    functions).
 *  `Lazy` class and support for `Lazy` in all other classes and functions.
 *  Lazy arrays and other structures.
 *  Make all functions be as lazy as possible.
 *  Create fake classes `Number`, `String`, `Boolean`, `Symbol`, `Null`,
    `Undefined`, `Array`, `Nil`, `Object`, `Function`.
 *  Create special abstract classes for typeclasses.

# Methods

 *  `contramap' :: Contravariant' f => f a ~> (b -> a) -> (a -> b) -> f b`
 *  `map' :: Functor' f => f a ~> (a -> b) -> (b -> a) -> f b`
 *  `promap' :: Profunctor' f => f b c ~> (a -> b) -> (b -> a) -> (c -> d) -> (d -> c) -> f a d`

https://twitter.com/rufuse/status/699280331728404481

# Symonyms

JavaScript keywords forbidden in identifiers are replaced by three-letter
abbreviations of somehow synonymous Greek words.

|  Keyword     |  Synonym  |     |  Keyword     |  Synonym  |
| -----------: | :-------- | :-: | -----------: | :-------- |
|     **this** | aft       |     |        **if**| ota       |
|    **throw** | pet       |     |      **else**| ant       |
|      **try** | dok       |     |    **import**| eis       |
|    **catch** | ant       |     |    **export**| exa       |
|  **finally** | pro       |     |     **class**| kla       |
|   **return** | epi       |     |  **function**| syn       |
|    **yield** | apo       |     |       **new**| neo       |
|    **await** | per       |     |   **default**| pro       |
|    **async** | asy       |     |    **switch**| ena       |
|       **do** | kan       |     |      **case**| kat       |
|      **for** | gia       |     |      **true**| ali       |
|    **while** | eno       |     |     **false**| pse       |
|     **with** | chr       |     |        **in**| mes       |

TODO: `interface`, `private`, `protected`, `public`, `extends`, `implements`,
`instanceof`, `with`, `break`, `const`, `let`, `var`, `delete`, `super`,
`typeof`, `void`, `null`, `undefined`, `enum`, `static`, `continue`.
